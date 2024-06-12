
export const HeaderDashboard = ({mensaje}:{mensaje:string}) => {
  // Obtener el correo electrónico del usuario guardado en la sesión
  const userEmail = sessionStorage.getItem("userEmail") || "";

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 ml-5">
      <h1 className="text-2xl md:text-3xl font-bold">
      &#x1F31E; {mensaje} {""}, User {""}
        <span className="text-primary">{userEmail}</span>
      </h1>
    </header>
  );
};
