import React from "react";
import { Link, User, Chip, Button } from "@nextui-org/react";
import { CustomCheckboxProps } from "../../services/interfaces";

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ user }) => {
  return (
    <Button variant="light" className="my-4 w-full" onClick={()=>alert("si funciono bebe"+user.name)}>
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{ size: "md", src: user.avatar }}
          description={
            <Link isExternal href={user.url} size="sm">
              @{user.username}
            </Link>
          }
          name={user.name}
        />
        <div className="flex flex-col items-end gap-1">
          <span className="text-tiny text-default-500">{user.role}</span>
          <Chip size="sm" variant="flat">
            {user.status}
          </Chip>
        </div>
      </div>
    </Button>
  );
};
