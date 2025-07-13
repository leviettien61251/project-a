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
  const filterTitle = [
    {
      title: "Category",
    },
    {
      title: "Options",
    },
    {
      title: "Size",
    },
    {
      title: "Color",
    },
    {
      title: "Price",
    },
  ];

  const [isUpDown, setIsUpDown] = useState(false);
  return (
    <>
      <div
        className={cn(
          "md:mx-[17rem] md:flex md:h-fit md:w-1/2 md:flex-row md:gap-2",
        )}
      >
        {/* <Button
          className="bg-white hover:bg-inherit"
          onClick={(e) => {
            console.log("option clicked");
          }}
        >
          <SlidersVertical className="text-black" />
        </Button> */}
        <Sidebar1 func={"filter"} where={"filter"} />
        {filterTitle?.map((item) => (
          <DropdownMenu key={item.title}>
            <DropdownMenuTrigger
              className={cn(
                "flex flex-row items-center gap-3 justify-between  border-1 outline-none",
                "md:h-auto md:w-[9rem] md:rounded-full md:px-3 md:py-1",
                
              )}
            >
              {item.title} <ChevronDown className="" />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent className={cn("", "h-[20rem] md:w-[30rem]")}>
                <DropdownMenuLabel>Label Product1 & 2</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        ))}
      </div>
    </>
  );
}
