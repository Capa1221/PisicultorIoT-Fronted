import { CommentSection } from "../../../components/comment-dashboard/comment"
import { HeaderDashboard } from "../../../components/header/HeaderDashboard"
import { AnalisisSensor } from "../../../components/SensoresAnalisis/AnalisisSensor";

export const PageGraficasSensores = () => {
  return (
    <>
      <HeaderDashboard mensaje="An�lisis de datos del sensor" />
      <CommentSection mensaje="�Bienvenido al An�lisis de Datos de Sensores! En esta secci�n, te presentamos una recopilaci�n completa de los datos 
        registrados por los sensores de tu invernadero. 
        A trav�s de atractivas gr�ficas, podr�s visualizar en tiempo real e hist�rico los valores de temperatura, 
        humedad, luminosidad y otros par�metros relevantes para el �ptimo crecimiento de tus plantas. 
        Esta informaci�n te permitir� tomar decisiones oportunas y basadas en datos para optimizar el rendimiento 
        de tu cultivo y garantizar una cosecha exitosa."/>
      <AnalisisSensor />
    </>
  )
}
