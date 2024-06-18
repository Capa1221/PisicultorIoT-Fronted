import React from "react";
import { Input } from "@nextui-org/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export const InputPasswordUser = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
    <Input
      variant="bordered"
      defaultValue="adandkjandjnasd"
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
      className="max-w-xs" />
      </>
  )
}
