import React from 'react'

interface Information{
  numerosensor: number;
  numerousuario: number;
  numeroinvernaderos:number;
}

export const CardInformationAplicattion: React.FC<Information> = ({numerosensor,numerousuario,numeroinvernaderos}) => {

  return (
    <>
      <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
        <span className="bg-primary-500 text-gray-300 text-2xl font-bold p-4 rounded-xl">
          {numerosensor}
        </span>
        <div>
          <h3 className="font-bold">Sensores</h3>
          <p className="text-gray-500">en el sistema</p>
        </div>
      </div>
      <div className="bg-primary-100/10 rounded-xl p-4">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-primary-500 text-gray-300 text-2xl font-bold p-4 rounded-xl">
            {numerousuario}
          </span>
          <div>
            <h3 className="font-bold">Usuarios</h3>
            <p className="text-gray-500">en el sistema</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
        <span className="bg-primary-500 text-gray-300 text-2xl font-bold p-4 rounded-xl">
          {numeroinvernaderos}
        </span>
        <div>
          <h3 className="font-bold">Invernaderos</h3>
          <p className="text-gray-500">en el sistema</p>
        </div>
      </div>
    </>
  )
}
