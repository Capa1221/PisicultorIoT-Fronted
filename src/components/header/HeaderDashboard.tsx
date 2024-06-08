
export const HeaderDashboard = () => {
  // Obtener el correo electrónico del usuario guardado en la sesión
  const userEmail = sessionStorage.getItem("userEmail") || "";

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">
        🌞 Hey, has vuelto{" "}
        <span className="text-primary">{userEmail}</span>
      </h1>
    </header>
  );
};
