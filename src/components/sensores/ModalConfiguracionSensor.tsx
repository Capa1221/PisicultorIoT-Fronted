import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ScrollShadow,
} from "@nextui-org/react";
import { GrConfigure } from "react-icons/gr";
import { FaRegClipboard } from "react-icons/fa";

export const ModalConfiguracionSensor = ({ id }: { id: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const code = `#include <WiFi.h>
#include <HTTPClient.h>

// Configura los datos de tu red Wi-Fi
const char* ssid = "House Developer Plus";
const char* password = "HouseDeveloper2024";
const char* serverName = "http://192.168.1.10:8081/api/v1/datos/insertar";

// Pin analógico donde está conectado el sensor de pH
const int pHSensorPin = 34; // Asegúrate de que este pin es válido para tu ESP32

void setup() {
  Serial.begin(115200);
  delay(1000);

  WiFi.begin(ssid, password);
  Serial.println("Conectando a WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\\nWiFi conectado");
}

void loop() {
  int rawValue = analogRead(pHSensorPin); // Lectura cruda ADC
  float voltage = (rawValue / 4095.0) * 3.3; // Convierte a voltaje
  float pHValue = 7 + ((2.5 - voltage) / 0.18); // Estimación de pH (ajustar calibración)

  Serial.print("Valor ADC: ");
  Serial.print(rawValue);
  Serial.print("  | Voltaje: ");
  Serial.print(voltage, 2);
  Serial.print(" V  | pH estimado: ");
  Serial.println(pHValue, 2);

  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverName);
    http.addHeader("accept", "application/json");
    http.addHeader("Content-Type", "application/json");

    String jsonPayload = "{\\"idSensor\\": \\"${id}\\", \\"valor\\": " + String(pHValue, 2) + "}";

    int httpResponseCode = http.POST(jsonPayload);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.print("Código HTTP: ");
      Serial.println(httpResponseCode);
      Serial.println("Respuesta: " + response);
    } else {
      Serial.print("Error en POST: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("WiFi no conectado");
  }

  delay(5000); // Espera 5 segundos
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
      <Button
        startContent={<GrConfigure className="text-xl" />}
        variant="light"
        onPress={onOpen}
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl" scrollBehavior="inside">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Archivo de Configuración (ESP32 - Sensor de pH)
              </ModalHeader>
              <ModalBody>
                <ScrollShadow className="h-[150px]" offset={100}>
                  <p>
                    Este código permite conectar un ESP32 a una red Wi-Fi, leer el valor de pH desde un sensor analógico y enviar el dato a un servidor mediante una solicitud HTTP POST en formato JSON.
                  </p>
                </ScrollShadow>
                <pre className="bg-gray-900 text-white p-4 rounded overflow-auto max-h-[400px] text-sm leading-relaxed">
                  <code>{code}</code>
                </pre>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button
                  variant="light"
                  onPress={copyToClipboard}
                  startContent={<FaRegClipboard />}
                >
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
};
