export interface Sensor {
    id: string;
    idHibernadero: string;
    nombre: string;
    descripcion: string;
    config: boolean;
}

const Sensores: Sensor[] = [
    { id: "1", idHibernadero: "1", nombre: "sensor de temperatura", descripcion: "Este sensor mide la temperatura", config: true },
    { id: "2", idHibernadero: "1", nombre: "sensor de humedad", descripcion: "Este sensor mide la humedad", config: false },
    { id: "3", idHibernadero: "2", nombre: "sensor de luz", descripcion: "Este sensor mide la intensidad de la luz", config: true },
    { id: "4", idHibernadero: "4", nombre: "sensor de temperatura", descripcion: "Este sensor mide la temperatura", config: true },
    { id: "5", idHibernadero: "5", nombre: "sensor de humedad", descripcion: "Este sensor mide la humedad", config: false },
    { id: "6", idHibernadero: "6", nombre: "sensor de luz", descripcion: "Este sensor mide la intensidad de la luz", config: true }
];

export function crearSensor(sensor: Sensor): void {
    const existe = Sensores.some(s => s.id === sensor.id);
    if (existe) {
        console.log('El sensor con este ID ya existe.');
        return;
    }
    Sensores.push(sensor);
    console.log('Sensor creado:', sensor);
}

export function leerSensores(): Sensor[] {
    return Sensores;
}

export function leerSensorPorId(id: string): Sensor | null {
    return Sensores.find(sensor => sensor.id === id) || null;
}

export function actualizarSensor(id: string, nuevosDatos: Partial<Sensor>): void {
    const index = Sensores.findIndex(sensor => sensor.id === id);
    if (index !== -1) {
        Sensores[index] = { ...Sensores[index], ...nuevosDatos };
        console.log('Sensor actualizado:', Sensores[index]);
    } else {
        console.log('Sensor no encontrado.');
    }
}

export function eliminarSensor(id: string): void {
    const index = Sensores.findIndex(sensor => sensor.id === id);
    if (index !== -1) {
        const eliminado = Sensores.splice(index, 1);
        console.log('Sensor eliminado:', eliminado[0]);
    } else {
        console.log('Sensor no encontrado.');
    }
}

export default Sensores;
