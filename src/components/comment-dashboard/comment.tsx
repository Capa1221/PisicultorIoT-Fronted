
export const CommentSection = ({ mensaje }: { mensaje: string }) => {
  return (
    <div><p className="m-4 text-lg text-gray-500">
      {mensaje}
    </p></div>
  )
}
