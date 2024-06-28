import { Button } from "@nextui-org/react"
import React from "react"
import { RiLineChartLine } from "react-icons/ri"
import { Link } from "react-router-dom"

interface HibernaderoTotal{
  numero: number;
}

export const CardHibernaderos: React.FC<HibernaderoTotal> = ({numero}) => {

  return (
    <>
    <div className="bg-primary/90 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
      <RiLineChartLine className="text-5xl" />
      <h4 className="text-xl">Total Hibernaderos</h4>
      <span className="text-5xl text-white">+ {numero!=0?numero+1:0}</span>
      <Button color="secondary" variant="bordered">
        <Link to="/dashboard/Mis-Estaciones" className="text-white">Mis Estaciones</Link>
      </Button>
    </div>
    </>
  )
}
