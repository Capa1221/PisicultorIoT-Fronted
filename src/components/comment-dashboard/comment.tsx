import React, { Component } from 'react'

export const CommentSection = ({ mensaje }: { mensaje: string }) => {
  return (
    <div><p className="mb-8 text-lg text-gray-500">
      {mensaje}
    </p></div>
  )
}
