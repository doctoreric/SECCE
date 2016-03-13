
//PROGRAMA CONTROLADOR PLACA DE DESARROLLO VER 1.0
//FIRMWARE BAJO LICENCIA DE COPYRIGHT
//ESTA ESTRICTAMENTE PROHIBIDA LA COPIA, DIFUSION DEL PROGRAMA A CONTINUACION
//CREADO POR ERIC SAAVEDRA A. PARA LA TESIS DE CONTROL Y MONITOREO DE COMBUSTION
/*PROGRAMA INICIO*/
// LIBRERIAS INICIO
#include <Ethernet.h>
#include <SPI.h>
#include "DHT.h"
#include <Adafruit_MAX31855.h>

//LIBRERIAS FIN
  //INICIO DEFINICION PINES DEL SENSOR DE HUMEDAD Y TEMPERATURA
    #define DHTPIN 2     // SE UTILIZA PIN 2
    #define DHTTYPE DHT11   // SENSOR DE TIPO DHT 11
    DHT dht(DHTPIN, DHTTYPE);
  //FIN DE DEFICION SENSOR DE HUMEDAD
  //INICIO DEFINICION DE SENSOR TERMOCUPULA 1
    #define DO   3
    #define CS   4
    #define CLK  5
    Adafruit_MAX31855 thermocouple(CLK, CS, DO);
    #define DO2  6
    #define CS2  7
    #define CLK2  8
    Adafruit_MAX31855 thermocouple2(CLK2, CS2, DO2);
  //FIN DEFINICIO  DE TERMOCUPULA
//INICIALIZACION DEL CLIENTE WEB
    byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFF, 0xEE}; // Direccion MAC
    byte ip[] = { 10,20,20,2 }; // Direccion IP del Arduino
    byte server[] = { 10,20,20,124}; // Direccion IP del servidor
    EthernetClient client;
// FIN DE LA INICIALIZACION
void setup() {
  Serial.begin(9600);
  Serial.println("INICIO DE PROGRAMA");
  Ethernet.begin(mac, ip); // Inicializamos el Ethernet Shield
  delay(1000); // Esperamos 1 segundo de cortesia
  dht.begin();
}

void loop() {
  // ESPERA ENTRE CAPTURAS
  delay(5000);
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(h) || isnan(t)) {
    Serial.println("ERROR EN LA CAPTURA DEL SENSOR DE HUMEDAD");
    return;
  }
  Serial.print("HUMEDAD: ");
  Serial.print(h);
  Serial.print(" %\t");
  Serial.print("TEMERATURA AMBIENTE: ");
  Serial.print(t);
  Serial.print(" *C ");
  // FIN CAPTURA DE DATOS HUMEDAD Y TEMPERATURA AMBIENTE
  //INICIO CAPTURA DE TEMPERATURA CALDERA 1
  Serial.print("TEMPERATURA AMBIENTE TERMO 1= ");
  Serial.println(thermocouple.readInternal());
  double c = thermocouple.readCelsius();
  if (isnan(c)) {
     Serial.println("Something wrong with thermocouple!");
  } else {
     Serial.print("Caldera 1= ");
     Serial.println(c);
  }
  // FIN CAPTURA CALDERA 1
  // INICIO CAPTURA DE TEMPERATURA CALDERA 2
  Serial.print("ambiente 2= ");
  Serial.println(thermocouple2.readInternal());
  double c2 = thermocouple2.readCelsius();
  if (isnan(c2)) {
     Serial.println("Something wrong with thermocouple!");
  } else {
     Serial.print("Caldera2 = ");
     Serial.println(c2);
  }
  // FIN DE CAPTURA DE TEMPERATURA CALDERA 2
  // INICIO DE SUBIDA A MYSQL SERVER
  Serial.println("Conectando...");
  if (client.connect(server, 80)>0) {  // Conexion con el servidor
    client.print("GET /angu/json/tmprUp.php?estf=1&ambiente=");
    client.print(t);
    client.print("&caldera1=");
    client.print(c);
    client.print("&caldera2=");
    client.print(c2); // Enviamos los datos por GET
    client.println(" HTTP/1.0");
    client.println("User-Agent: Arduino 1.0");
    client.println();
    Serial.println("Conectado");
  } else {
    Serial.println("Fallo en la conexion");
  }
  if (!client.connected()) {
    Serial.println("Desconectado!");
  }
  client.stop();
  client.flush();
  delay(5000); // Espero un minuto

}