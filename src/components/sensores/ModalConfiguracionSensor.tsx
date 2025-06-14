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

  // ——————————————————————————————————————————————
  //  Código de ejemplo –  Sensor de nivel (agua)
  // ——————————————————————————————————————————————
  const code = `// =========  Nivel de agua – ESP8266  =========
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

// Credenciales Wi-Fi
const char* ssid     = "House Developer Plus";
const char* password = "HouseDeveloper2024";

// Endpoint REST donde guardar la lectura
const char* serverName = "http://192.168.1.10:8081/api/v1/datos/insertar";

// Pin analógico del NodeMCU (A0: 0-1 V máx.)
const int waterSensorPin = A0;

/* ---------------- Calibración ----------------
 *  Ajusta estos valores midiendo en seco (minRaw)
 *  y con el depósito al 100 % (maxRaw). Con esto
 *  convertimos la cuenta ADC a % de nivel.
 */
const int minRaw = 50;   // lectura típica en 0 %
const int maxRaw = 800;  // lectura típica en 100 %

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.print("Conectando a WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\\nWiFi conectado!");
}

void loop() {
  int rawValue = analogRead(waterSensorPin);          // 0–1023
  rawValue = constrain(rawValue, minRaw, maxRaw);

  // Conversión a porcentaje
  float levelPct = (rawValue - minRaw) * 100.0 / (maxRaw - minRaw);

  Serial.printf("RAW: %d  |  Nivel: %.1f %%\\n", rawValue, levelPct);

  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;
    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("accept", "application/json");

    String json = String("{\\"idSensor\\": \\"") + String("${id}") +
                  String("\\", \\"valor\\": ") + String(levelPct, 1) + "}";

    int code = http.POST(json);
    if (code > 0) {
      Serial.printf("POST → %d\\n", code);
      Serial.println(http.getString());
    } else {
      Serial.printf("Error POST → %d\\n", code);
    }
    http.end();
  } else {
    Serial.println("WiFi no conectado");
  }

  delay(5000);   // 1 lectura cada 5 s
}
`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Código copiado al portapapeles");
    } catch {
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
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Archivo de Configuración<br />(ESP8266  Sensor de Nivel de Agua)
              </ModalHeader>

              <ModalBody>
                <ScrollShadow className="h-[150px]" offset={100}>
                  <p>
                    Este sketch lee un <b>sensor analógico de nivel de agua</b> en
                    la entrada A0 del ESP8266, lo convierte a porcentaje según tus
                    valores de calibración (<i>minRaw</i>, <i>maxRaw</i>) y envía el
                    resultado en formato JSON a tu API REST cada 5 segundos.
                  </p>
                  <p className="mt-2">
                    Ajusta <code>minRaw</code> con el depósito vacío y{" "}
                    <code>maxRaw</code> con él completamente lleno para obtener un
                    % preciso.
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