import { DateRangePicker } from "@nextui-org/react"
import { Tab, Tabs } from "@nextui-org/react"
import { ChartComponent } from '../graphics/CharComponent';
import { GraphicComponent } from '../graphics/GraphicComponent';
import { HistogramChartComponent } from '../graphics/HistogramaComponent';

export const AnalisisSensor = () => {
    
    interface SensorData {
        time: string;
        value: number;
    }
    const sensorData: SensorData[] = [
        { time: "2024-06-18", value: 20 },
        { time: "2024-06-19", value: 25 },
        { time: "2024-06-20", value: 30 },
        { time: "2024-06-21", value: 28 },
        { time: "2024-06-22", value: 122 },
    ];

    return (
        <>
            <div className="flex md:justify-around lg:justify-around place-content-center">
                <div className="flex flex-col lg:w-max">
                    <b className="text-primary text-xl">Sensor de Agua</b>
                    <p className="text-gray-500 text-small">Detalles del sensor</p>
                </div>
                <DateRangePicker
                    label="Fechas a Consultar"
                    className="max-w-xs"
                />
            </div>
            <Tabs aria-label="Options" className="mt-8">
                <Tab title="1 Grafica">
                    <ChartComponent data={sensorData} />
                </Tab>
                <Tab title="2 Grafica">
                    <GraphicComponent data={sensorData} />
                </Tab>
                <Tab title="3 Grafica">
                    <HistogramChartComponent data={sensorData} />
                </Tab>
            </Tabs>
        </>
    )
}
