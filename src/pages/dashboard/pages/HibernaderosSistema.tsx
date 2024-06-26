import { useEffect, useState } from "react";
import { HibernaderoInterface } from "../../../services/interfaces";
import { decodeToken } from "../../../utils/utils";
import { CardHibernaderosUsuarios, CommentSection, HeaderDashboard } from "../../../components";

export const HibernaderosSistemaComponent = () => {

  const token = decodeToken(sessionStorage.getItem("authToken")!);
  const [hibernaderos, setHibernadero] = useState<HibernaderoInterface[]>([]);

  useEffect(() => {
    try {

    } catch (error) {

    }
  }, [token])

  return (
    <>
      <HeaderDashboard mensaje="Hibernaderos Sistema" />
      <CommentSection mensaje="Esta sección es responsable de supervisar las relaciones entre los usuarios y los invernaderos. Permite a los usuarios observar los sensores vinculados a cada invernadero y los datos en tiempo real que recopilan." />
      <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardHibernaderosUsuarios />
      </div>
    </>
  );
};
