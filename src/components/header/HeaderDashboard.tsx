import { decodeToken } from "../../utils/utilsToken";

export const HeaderDashboard = ({mensaje}:{mensaje:string}) => {
  const token = sessionStorage.getItem("authToken")!;
  const decodetoken = decodeToken(token);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 ml-5">
      <h1 className="text-2xl md:text-3xl font-bold">
      &#x1F31E; {mensaje} {""}, User {""}
        <span className="text-primary">{decodetoken.sub}</span>
      </h1>
    </header>
  );
};
