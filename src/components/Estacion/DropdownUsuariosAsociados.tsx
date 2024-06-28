import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { DropdownUserAsociados } from "../../services/interfaces";
import { BiUser } from "react-icons/bi";

export const DropdownUsuariosAsociados = (interfaceDropDown:DropdownUserAsociados) => {
  

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="light"
            color="primary"
            className="font-sans font-semibold text-primary"
            startContent={
              <BiUser className="text-primary text-md" />
            }
          >
            {interfaceDropDown.numeros_asociados}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          onAction={(key) => alert(key)}
        >
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}
