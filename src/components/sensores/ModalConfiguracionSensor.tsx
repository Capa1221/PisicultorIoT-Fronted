import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow } from "@nextui-org/react";
import { GrConfigure } from "react-icons/gr";
import { FaRegClipboard } from "react-icons/fa";

export const ModalConfiguracionSensor = ({ id }: { id: string }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const code = `
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>

// Configura los datos de tu red Wi-Fi
const char* ssid = "House Developer Plus";
const char* password = "HouseDeveloper2024";
const char* serverName = "http://192.168.1.10:8081/api/v1/datos/insertar";

//#define DHTPIN 2
//#define DHTTYPE DHT11
//DHT dht(DHTPIN, DHTTYPE);

// Variable para almacenar la temperatura
//float temperature;

void setup() {
  Serial.println("Iniciando ---");
  
  //dht.begin();
  
  // Inicializa el monitor serial
  Serial.begin(9600);
  
  // Conéctate a Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando a WiFi...");
  }
  Serial.println("Conectado a WiFi");
  // Inicializa el sensor DHT
}

void loop() {
  // Lee la temperatura del sensor DHT
  //temperature = dht.readTemperature();
  int temperature = analogRead(0);
  
  Serial.print("temperatura ==> ");
  Serial.println(temperature);
  
  if (isnan(temperature)) {
    Serial.println("Error al leer del sensor DHT");
  } else {
    Serial.print("Temperatura: ");
    Serial.println(temperature);
    
    if (WiFi.status() == WL_CONNECTED) {
      WiFiClient client;
      HTTPClient http;
      
      //id sensor ${id}
      
      // Prepara la URL con los datos de la temperatura
      //String serverPath = String(serverName) + "?id=${id}";
      
      // Inicia la conexión con el servidor
      Serial.print("petición ==> ");
      Serial.println(serverName);
      http.begin(client, serverName);
      http.addHeader("accept", "application/json");
      http.addHeader("Content-Type", "application/json");
      
      //String httpRequestData = "idSensor=${id}" + "valor=" + String(temperature);
      String jsonPayload = "{\"idSensor\":\"${id}\",\"valor\":\"" + String(temperature) + "\"}";
      
      // Envía la solicitud HTTP POST
      int httpResponseCode = http.POST(jsonPayload);
      
      // Verifica la respuesta del servidor
      if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.println(httpResponseCode);
        Serial.println(response);
      } else {
        Serial.print("Error en la solicitud: ");
        Serial.println(httpResponseCode);
      }
      
      // Cierra la conexión
      http.end();
    } else {
      Serial.println("Desconectado de WiFi");
    }
  }
  
  // Espera 5 segundos antes de la siguiente lectura
  delay(5000);
}
`;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            alert("Código copiado al portapapeles");
        } catch (err) {
            alert("Error al copiar el código");
        }
    };



    return (
        <>
            <Button startContent={<GrConfigure className="text-xl" />} variant="light" onPress={onOpen}></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">
                                Archivo de Configuración
                            </ModalHeader>
                            <ModalBody>
                            <ScrollShadow className="h-[150px]" offset={100}>
                                <p>El siguiente código es un ejemplo de configuración y lectura de un sensor de temperatura utilizando un ESP8266 y un sensor DHT. En este caso, hemos utilizado la biblioteca ESP8266WiFi para gestionar la conectividad Wi-Fi, ESP8266HTTPClient para realizar solicitudes HTTP, y DHT para interactuar con el sensor de temperatura DHT. Este código permite conectar el ESP8266 a una red Wi-Fi, leer la temperatura desde el sensor y enviar los datos a un servidor mediante una solicitud HTTP POST.</p>
                                </ScrollShadow>
                                <pre className="bg-gray-900 text-white p-4 rounded overflow-auto max-h-[400px] text-sm leading-relaxed">
                                    <code>{code}</code>
                                </pre>
                            </ModalBody>
                            <ModalFooter className="flex justify-between">
                                <Button variant="light" onPress={copyToClipboard} startContent={<FaRegClipboard />}>
                                    Copiar al portapapeles
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
