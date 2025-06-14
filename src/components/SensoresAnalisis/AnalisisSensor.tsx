import { DateRangePicker, Tab, Tabs, Button, useToast } from "@nextui-org/react";
import { ChartComponent } from "../graphics/CharComponent";
import { GraphicComponent } from "../graphics/GraphicComponent";
import { HistogramChartComponent } from "../graphics/HistogramaComponent";
import { useEffect, useState, useRef } from "react";
import { SensorReading, SensorInterface } from "../../services/interfaces";
import { obtenerSensorPorId } from "../../services/sensor-controller";
import { obtenerDatosPorRangoFechasYSensor } from "../../services/datos-sensor-controller";
import { getLocalTimeZone, today, CalendarDate } from "@internationalized/date";
import ExcelJS from "exceljs";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { debounce } from "lodash";

interface AnalisisSensorProps {
  id: string;
}

export const AnalisisSensor = ({ id }: AnalisisSensorProps) => {
  const [sensor, setSensor] = useState<SensorInterface | null>(null);
  const [data, setData] = useState<SensorReading[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const token = sessionStorage.getItem("authToken");
  const [value, setValue] = useState<{
    start: CalendarDate;
    end: CalendarDate;
  }>({
    start: today(getLocalTimeZone()).subtract({ days: 7 }),
    end: today(getLocalTimeZone()),
  });

  const chartRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);
  const histogramRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: CalendarDate, hour: string): string =>
    `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}T${hour}`;

  const fetchSensorDataByDate = debounce(async () => {
    if (!token) {
      setError("Token de autenticación no disponible. Por favor, inicia sesión.");
      return;
    }
    setIsLoading(true);
    try {
      const startDate = formatDate(value.start, "00:00:00");
      const endDate = formatDate(value.end, "23:59:59");

      const response = await obtenerDatosPorRangoFechasYSensor(startDate, endDate, id, token);

      if (response.status === 200) {
        setData(response.data);
      } else {
        setError("Error al obtener datos del sensor.");
      }
    } catch (error) {
      setError("Error al conectar con el servidor.");
      console.error("Error al obtener datos del sensor:", error);
    } finally {
      setIsLoading(false);
    }
  }, 500);

  const fetchSensorData = async () => {
    if (!token) {
      setError("Token de autenticación no disponible. Por favor, inicia sesión.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await obtenerSensorPorId(id, token);
      if (response.status === 200) {
        setSensor(response.data);
      } else {
        setError("Error al obtener información del sensor.");
      }
    } catch (error) {
      setError("Error al conectar con el servidor.");
      console.error("Error al obtener sensor:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorData();
    fetchSensorDataByDate();
    return () => fetchSensorDataByDate.cancel();
  }, [id, token, value]);

  useEffect(() => {
    if (error) {
      toast({
        message: error,
        color: "danger",
      });
    }
  }, [error, toast]);

  const createExcel = async (sheetTitle: string, ref: React.RefObject<HTMLDivElement>) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(sheetTitle);

    worksheet.addRow(["Datos del Sensor"]);
    worksheet.getRow(1).font = { bold: true, size: 12 };
    worksheet.addRow(["Nombre", sensor?.nombre || "N/A"]);
    worksheet.addRow(["Descripción", sensor?.descripcion || "N/A"]);
    worksheet.addRow([]);

    if (data.length > 0) {
      worksheet.addRow(Object.keys(data[0]));
      worksheet.getRow(worksheet.rowCount).font = { bold: true };
      data.forEach((row) => worksheet.addRow(Object.values(row)));
    } else {
      worksheet.addRow(["No hay datos disponibles para el rango seleccionado"]);
    }

    if (ref.current) {
      try {
        const canvas = await html2canvas(ref.current);
        const imgData = canvas.toDataURL("image/png");
        const imageId = workbook.addImage({
          base64: imgData,
          extension: "png",
        });
        worksheet.addImage(imageId, {
          tl: { col: 0, row: worksheet.rowCount + 2 },
          ext: { width: ref.current.offsetWidth, height: ref.current.offsetHeight },
        });
      } catch (error) {
        console.error(`Error al capturar ${sheetTitle}:`, error);
        toast({
          message: `Error al capturar la gráfica ${sheetTitle}.`,
          color: "danger",
        });
      }
    }

    try {
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, `${sensor?.nombre || "sensor"}_${sheetTitle.replace(/\s/g, "_")}.xlsx`);
    } catch (error) {
      console.error("Error al generar el archivo Excel:", error);
      toast({
        message: "Error al generar el archivo Excel.",
        color: "danger",
      });
    }
  };

  if (!token) {
    return (
      <p className="text-center text-red-500">
        Por favor, inicia sesión para ver los datos del sensor.
      </p>
    );
  }

  return (
    <div className="p-4">
      <div className="flex md:justify-around lg:justify-around place-content-center">
        <div className="flex flex-col lg:w-max">
          <b className="text-primary text-xl">{sensor?.nombre || "Cargando..."}</b>
          <p className="text-gray-500 text-small">{sensor?.descripcion || "N/A"}</p>
        </div>
        <DateRangePicker
          label="Fechas a Consultar"
          className="max-w-xs"
          visibleMonths={2}
          description="Por favor ingrese un rango de fechas."
          onChange={setValue}
          value={value}
        />
      </div>

      <Tabs
        aria-label="Opciones"
        className="mt-8"
        variant="underlined"
        items={[
          { key: "area", title: "Gráfica de Área" },
          { key: "interactive", title: "Gráfica Interactiva" },
          { key: "histogram", title: "Gráfica de Histograma" },
        ]}
      >
        {(item) => (
          <Tab key={item.key} title={item.title}>
            {item.key === "area" && (
              <div className="flex flex-col items-center w-full">
                <Button
                  onClick={() => createExcel("Gráfica de Área", chartRef)}
                  className="mb-4 self-end mr-4"
                  color="primary"
                  isDisabled={isLoading || data.length === 0}
                >
                  Descargar Excel - Área
                </Button>
                <div
                  ref={chartRef}
                  className="w-full max-w-4xl h-[400px] flex justify-center items-center border border-gray-300 rounded-lg shadow-md p-4"
                >
                  {isLoading ? (
                    <p className="text-center text-gray-500">Cargando datos...</p>
                  ) : data.length > 0 ? (
                    <ChartComponent data={data} />
                  ) : (
                    <p className="text-center text-gray-500">No hay datos disponibles.</p>
                  )}
                </div>
              </div>
            )}
            {item.key === "interactive" && (
              <div className="flex flex-col items-center w-full">
                <Button
                  onClick={() => createExcel("Gráfica Interactiva", graphicRef)}
                  className="mb-4 self-end mr-4"
                  color="primary"
                  isDisabled={isLoading || data.length === 0}
                >
                  Descargar Excel - Interactiva
                </Button>
                <div
                  ref={graphicRef}
                  className="w-full max-w-4xl h-[400px] flex justify-center items-center border border-gray-300 rounded-lg shadow-md p-4"
                >
                  {isLoading ? (
                    <p className="text-center text-gray-500">Cargando datos...</p>
                  ) : data.length > 0 ? (
                    <GraphicComponent data={data} />
                  ) : (
                    <p className="text-center text-gray-500">No hay datos disponibles.</p>
                  )}
                </div>
              </div>
            )}
            {item.key === "histogram" && (
              <div className="flex flex-col items-center w-full">
                <Button
                  onClick={() => createExcel("Gráfica de Histograma", histogramRef)}
                  className="mb-4 self-end mr-4"
                  color="primary"
                  isDisabled={isLoading || data.length === 0}
                >
                  Descargar Excel - Histograma
                </Button>
                <div
                  ref={histogramRef}
                  className="w-full max-w-4xl h-[400px] flex justify-center items-center border border-gray-300 rounded-lg shadow-md p-4"
                >
                  {isLoading ? (
                    <p className="text-center text-gray-500">Cargando datos...</p>
                  ) : data.length > 0 ? (
                    <HistogramChartComponent data={data} />
                  ) : (
                    <p className="text-center text-gray-500">No hay datos disponibles.</p>
                  )}
                </div>
              </div>
            )}
          </Tab>
        )}
      </Tabs>
    </div>
  );
};