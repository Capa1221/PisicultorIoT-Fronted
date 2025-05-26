import { DateRangePicker } from "@nextui-org/react";
import { Tab, Tabs, Button } from "@nextui-org/react";
import { ChartComponent } from "../graphics/CharComponent";
import { GraphicComponent } from "../graphics/GraphicComponent";
import { HistogramChartComponent } from "../graphics/HistogramaComponent";
import { useEffect, useState, useRef } from "react";
import { SensorData, SensorInterface } from "../../services/interfaces";
import { obtenerSensorPorId } from "../../services/sensor-controller";
import { obtenerDatosPorRangoFechasYSensor } from "../../services/datos-sensor-controller";
import { getLocalTimeZone, today } from "@internationalized/date";
import ExcelJS from "exceljs";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export const AnalisisSensor = ({ id }: { id: string }) => {
  const [sensor, setSensor] = useState<SensorInterface>();
  const [data, setData] = useState<SensorData[]>([]);
  const token = sessionStorage.getItem("authToken")!;
  const [value, setValue] = useState({
    start: today(getLocalTimeZone()).subtract({ days: 7 }),
    end: today(getLocalTimeZone()),
  });

  const chartRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);
  const histogramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchSensorData();
    fetchSensorDataByDate();
  }, [id, token, value]);

  const fetchSensorData = async () => {
    try {
      if (!token) throw new Error("Token no disponible");
      const response = await obtenerSensorPorId(id, token);
      if (response.status === 200) setSensor(response.data);
      else console.error("Error al obtener sensor:", response.status);
    } catch (error) {
      console.error("Error al obtener sensor:", error);
    }
  };

  const fetchSensorDataByDate = async () => {
    try {
      if (!token) throw new Error("Token no disponible");
      const response = await obtenerDatosPorRangoFechasYSensor(
        value.start.toString(),
        value.end.toString(),
        id,
        token
      );
      if (response.status === 200) {
        console.log("Datos recibidos:", response.data);
        setData(response.data);
      } else {
        console.error("Error al obtener datos del sensor:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener datos del sensor:", error);
    }
  };

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
      worksheet.addRow(["No hay datos disponibles"]);
    }

    if (ref.current) {
      try {
        const canvas = await html2canvas(ref.current);
        const imgData = canvas.toDataURL("image/png");
        const imageId = workbook.addImage({ base64: imgData, extension: "png" });
        worksheet.addImage(imageId, {
          tl: { col: 0, row: worksheet.rowCount + 2 },
          ext: { width: 600, height: 300 },
        });
      } catch (error) {
        console.error(`Error al capturar ${sheetTitle}:`, error);
      }
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `${sensor?.nombre || "sensor"}_${sheetTitle.replace(/\s/g, "_")}.xlsx`);
  };

  return (
    <>
      <div className="flex md:justify-around lg:justify-around place-content-center">
        <div className="flex flex-col lg:w-max">
          <b className="text-primary text-xl">{sensor?.nombre}</b>
          <p className="text-gray-500 text-small">{sensor?.descripcion}</p>
        </div>
        <DateRangePicker
          label="Fechas a Consultar"
          className="max-w-xs"
          visibleMonths={2}
          description="Por favor ingrese un rango de fechas."
          onChange={setValue}
          defaultValue={{ start: value.start, end: value.end }}
        />
      </div>

      <Tabs aria-label="Opciones" className="mt-8">
        <Tab title="Gráfica de Área">
          <div className="flex flex-col items-center w-full">
            <Button
              onClick={() => createExcel("Gráfica de Área", chartRef)}
              className="mb-4 self-end mr-4"
              color="primary"
            >
              Descargar Excel - Área
            </Button>
            <div
              ref={chartRef}
              className="w-full max-w-4xl h-[400px] flex justify-center items-center border border-gray-300 rounded-lg shadow-md p-4"
            >
              {data.length > 0 ? (
                <ChartComponent data={data} />
              ) : (
                <p className="text-center text-gray-500">Cargando datos o no hay datos disponibles.</p>
              )}
            </div>
          </div>
        </Tab>

        <Tab title="Gráfica Interactiva">
          <div className="flex flex-col items-center w-full">
            <Button
              onClick={() => createExcel("Gráfica Interactiva", graphicRef)}
              className="mb-4 self-end mr-4"
              color="primary"
            >
              Descargar Excel - Interactiva
            </Button>
            <div
              ref={graphicRef}
              className="w-full max-w-4xl h-[400px] flex justify-center items-center border border-gray-300 rounded-lg shadow-md p-4"
            >
              {data.length > 0 ? (
                <GraphicComponent data={data} />
              ) : (
                <p className="text-center text-gray-500">Cargando datos o no hay datos disponibles.</p>
              )}
            </div>
          </div>
        </Tab>

        <Tab title="Gráfica de Histograma">
          <div className="flex flex-col items-center w-full">
            <Button
              onClick={() => createExcel("Gráfica de Histograma", histogramRef)}
              className="mb-4 self-end mr-4"
              color="primary"
            >
              Descargar Excel - Histograma
            </Button>
            <div
              ref={histogramRef}
              className="w-full max-w-4xl h-[400px] flex justify-center items-center border border-gray-300 rounded-lg shadow-md p-4"
            >
              {data.length > 0 ? (
                <HistogramChartComponent data={data} />
              ) : (
                <p className="text-center text-gray-500">Cargando datos o no hay datos disponibles.</p>
              )}
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};
