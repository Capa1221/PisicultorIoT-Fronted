import { today, getLocalTimeZone } from '@internationalized/date';
import { RiSensorLine } from "react-icons/ri";
import { Card, CardBody, CardFooter, RangeCalendar } from "@nextui-org/react"
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
                    <RangeCalendar
                        aria-label="Date (Uncontrolled)"
                        defaultValue={{
                            start: today(getLocalTimeZone()),
                            end: today(getLocalTimeZone()).add({ weeks: 1 }),
                        }}
                    />
                    <small className="text-gray-600 text-center mb-4">Por favor ingrese un rango de fechas.</small>
                </div>
                <div className="lg:flex md:flex hidden flex-col w-min self-center">
                    <Card shadow="sm" isPressable>
                        <CardBody className="place-content-center flex">
                            <RiSensorLine className="text-8xl" />
                        </CardBody>
                        <CardFooter className="text-small flex flex-col">
                            <b className="text-primary text-xl">Sensor de Agua</b>
                            <p className="text-gray-500 text-small">Detalles del sensor</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div>
                <h1 className="text-2xl uppercase text-primary font-semibold text-center">Graficas</h1>
                <Tabs aria-label="Options">
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
            </div>
        </>
    )
}
