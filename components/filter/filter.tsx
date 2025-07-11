"use client";

import { SlidersVertical, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Sidebar1 from "../navbar/sidebar1";

export default function Filter1() {
  const [isUpDown, setIsUpDown] = useState(false);
  return (
    <>
      <div className={cn("md:flex md:h-fit md:w-1/2 md:flex-row md:gap-2 md:mx-[17rem]")}>
        {/* <Button
          className="bg-white hover:bg-inherit"
          onClick={(e) => {
            console.log("option clicked");
          }}
        >
          <SlidersVertical className="text-black" />
        </Button> */}
          <Sidebar1/>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "flex flex-row justify-center gap-3 border-1 outline-none",
              "md:h-auto md:w-[15rem] md:rounded-full md:px-2 md:py-2",
            )}
          >
            Product1 & Product2 <ChevronDown className="" />
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent className={cn("", "h-[20rem] md:w-[30rem]")}>
              <DropdownMenuLabel>Label Product1 & 2</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
        
      </div>
    </>
  );
}
