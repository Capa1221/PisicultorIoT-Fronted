import React from 'react'

interface Information{
  sensores:number;
  usuarios:number;
}

export const CardInformationAplicattion: React.FC<Information> = ({sensores},{usuarios}) => {
  return (
    <>
      <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
        <span className="bg-primary-500 text-gray-300 text-2xl font-bold p-4 rounded-xl">
          {sensores}
        </span>
        <div>
          <h3 className="font-bold">Sensores</h3>
          <p className="text-gray-500">en el sistema</p>
        </div>
      </div>
      <div className="bg-primary-100/10 rounded-xl p-4">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-primary-500 text-gray-300 text-2xl font-bold p-4 rounded-xl">
            {usuarios}
          </span>
          <div>
            <h3 className="font-bold">Usuarios</h3>
            <p className="text-gray-500">en el sistema</p>
          </div>
        </div>
      </div>
    </>
  )
}
