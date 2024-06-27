import React from "react";
import { Input } from "@nextui-org/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export const InputPasswordUser = ({claveUser}:{claveUser:string}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
    <Input
      variant="bordered"
      defaultValue={claveUser}
      disabled
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="w-max" />
      </>
  )
}
