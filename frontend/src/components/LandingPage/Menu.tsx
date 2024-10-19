import React from 'react'
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import {menuItems} from '../../../public/constants/constants'

type Props = {}

const Menu = (props: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="lg:hidden" asChild>
          <Button
            variant="outline"
            size="icon"
            className="text-white border-pink"
          >
            <MenuIcon className="text-[#D18BFA] group-hover:text-gray-100 transition-all duration-500" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className=" bg-gray-700 flex flex-col gap-5 justify-center p-5"
        >
          {menuItems.map((item) => (
            <DropdownMenuItem className="cursor-pointer">
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default Menu