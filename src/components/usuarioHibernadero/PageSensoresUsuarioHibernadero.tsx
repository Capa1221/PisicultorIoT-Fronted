import { CommentSection } from "../comment-dashboard/comment"
import { HeaderDashboard } from "../header/HeaderDashboard"
import { CardHibernaderosUsuarios } from "./CardHibernaderosUsuarios"

export const PageSensoresUsuarioHibernadero = () => {
  return (
    <>
      <HeaderDashboard mensaje="Sensores del Hibernadero" />
      <CommentSection mensaje="En esta sección podrás visualizar los sensores asociados a este invernadero en particular. 
        Se muestran los valores actuales que cada uno de ellos está registrando, brindándote información en tiempo real 
        sobre las condiciones ambientales del espacio de cultivo. 
        Esta información te permite tomar decisiones oportunas para optimizar el crecimiento de tus plantas y 
        garantizar una cosecha exitosa."/>
      <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
      </div>
    </>
  )
}
