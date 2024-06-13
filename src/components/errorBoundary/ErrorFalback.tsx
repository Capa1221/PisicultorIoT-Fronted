interface IErrorFallbackProps {
  componentError: string;
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({ }: IErrorFallbackProps) => {

  return (
    <>
      <div className="shadow-2xl rounded-sm border border-gray-200 w-2/5">
        <div className="p-10">
          <p className="text-secondary text-2xl font-bold mb-4">Ocurrio un error</p>
          
        </div>

      </div>
    </>
  )
}