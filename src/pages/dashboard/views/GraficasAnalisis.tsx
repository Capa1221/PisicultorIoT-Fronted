import { useParams } from "react-router-dom";
import { CommentSection } from "../../../components/comment-dashboard/comment"
import { HeaderDashboard } from "../../../components/header/HeaderDashboard"
import { AnalisisSensor } from "../../../components/SensoresAnalisis/AnalisisSensor";

const GraficasAnalisis = () => {

  const { id } = useParams();
  
  return (
    <>
      <HeaderDashboard mensaje="Análisis de datos del sensor" />
      <CommentSection mensaje="!Bienvenido al Análisis de Datos de Sensores! En esta sección, te presentamos una recopilación completa de los datos 
        registrados por los sensores de tu invernadero. 
        A través de atractivas gráficas, podrás visualizar en tiempo real e histórico los valores de temperatura, 
        humedad, luminosidad y otros parámetros relevantes para el óptimo crecimiento de tus plantas. 
        Esta información te permitirá tomar decisiones oportunas y basadas en datos para optimizar el rendimiento 
        de tu Estacion y garantizar una cosecha exitosa."/>
      <AnalisisSensor id={id!} />
    </>
  )
}

export default GraficasAnalisis