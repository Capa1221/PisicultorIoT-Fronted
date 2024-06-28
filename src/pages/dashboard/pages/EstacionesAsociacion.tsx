import React, { Component } from 'react'

export const EstacionesAsociacion = () => {

  return (
    <>
      <HeaderDashboard mensaje={"Estaciones de Asociacion"} />
      <div className="mt-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {estaciones.map((estacion) => (
          <CardEstacion
            key={estacion.id}
            id={estacion.id}
            imagen={estacion.imagen}
            ciudad={estacion.ciudad}
            departamento={estacion.departamento}
            nombre={estacion.nombre}
            encargado={estacion.encargado}
            detalles={estacion.detalles}
            estado={estacion.estado}
            idTipoCultivo={estacion.idTipoCultivo}
            descripcionTipoCultivo={estacion.descripcionTipoCultivo}
            numero_Asociados={estacion.numero_Asociados} />
        ))}
      </div>
    </>
  )
}
