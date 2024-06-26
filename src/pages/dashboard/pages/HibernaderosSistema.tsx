import { useEffect, useState } from "react";
import { HibernaderoInterface } from "../../../services/interfaces";
import { CardHibernaderosUsuarios, CommentSection, HeaderDashboard } from "../../../components";
import { buscarTodosLosHibernaderos } from "../../../services";

export const HibernaderosSistemaComponent = () => {

  const token = sessionStorage.getItem("authToken")!;
  const [hibernaderos, setHibernaderos] = useState<HibernaderoInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const responseHibernaderos = await buscarTodosLosHibernaderos(token)
          setHibernaderos(responseHibernaderos.data);
          console.log(hibernaderos)
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch hibernaderos:", error);
      }
    };
    fetchData();
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
