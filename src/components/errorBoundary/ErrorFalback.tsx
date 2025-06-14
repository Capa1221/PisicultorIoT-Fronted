import { ErrorFallbackProps } from "../../services/interfaces";
import imageSistema from '../../assets/PISCICULTOR IOT-02.png';

export const ErrorFallback = ({ componentError, error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-2xl rounded-sm border border-gray-200 p-6 sm:p-10 w-full sm:w-3/5 lg:w-2/5">
        <div className="text-center">
          <img src={imageSistema} alt="Sistema" className="mx-auto mb-6 w-24 h-24 sm:w-48 sm:h-48"/>
          <p className="text-primary text-2xl sm:text-3xl font-bold mb-4">Ocurri� un error</p>
          <p className="text-gray-700 text-base sm:text-lg mb-2">{componentError}</p>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">{error.message}</p>
          <button
            onClick={resetErrorBoundary}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Intentar nuevamente
          </button>
          <p className="text-gray-600 text-xs sm:text-sm mt-4">
            Si el error persiste, por favor contacte al administrador para notificar del problema.
          </p>
        </div>
      </div>
    </div>
  );
};
