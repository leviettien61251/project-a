"use client";

import {
  SlidersVertical,
  ChevronDown,
  ChevronUp,
  X,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { use, useEffect, useState } from "react";
import Sidebar1 from "../navbar/sidebar1";

interface OptionItem {
  title: string;
  values: string[];
}
export default function Filter1() {
  const option_: OptionItem[] = [
    {
      title: "Category",
      values: [
        "All",
        "Sweatshirts",
        "Sweat Parkas",
        "Full Zip Parka",
        "Graphic Sweatshirts and Hoodie",
        "Sweat Pants",
        "UV Protection",
        "Others",
      ],
    },
    {
      title: "Options",
      values: ["Unisex", "Men", "Women", "Kids"],
    },
    {
      title: "Size",
      values: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      title: "Color",
      values: ["Black", "White", "Gray", "Navy", "Red", "Green", "Yellow"],
    },
    {
      title: "Price",
      values: ["Under $20", "$20–$50", "$50–$100", "Above $100"],
    },
  ];
  const [isShowHide, setIsShowHide] = useState<Boolean>(false);
  const [checked, setChecked] = useState<String>("");
  // const [option, setOption] = useState<OptionItem[]>([]);
  // setOption(option_);
  // const handleData = (data: any) => {
  //   setOption(data);
  // };
  // useEffect(() => {
  // }, []);
  return (
    <>
      <div className={cn("md:flex md:h-fit md:flex-row md:gap-2")}>
        <Sidebar1 key_={"SidebarFilter"} func={"filter"} where={"filter"} />
        {option_?.map((item) => (
          <DropdownMenu key={item.title + "dropdownMenu"}>
            <DropdownMenuTrigger
              className={cn(
                "flex flex-row items-center justify-between gap-3 border-1 outline-none",
                "md:h-auto md:w-[9rem] md:rounded-full md:px-3 md:py-1",
              )}
            >
              {item.title} <ChevronDown className="" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className={cn(
                "flex flex-col",
                "md:h-[20rem] md:w-[30rem] md:gap-5 md:px-5",
              )}
            >
              <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
              <div className={cn("flex flex-row justify-between")}>
                <h2>Results: {12} items</h2>
                <X className={cn("")} />
              </div>
              <div>
                <h3>
                  MEN {">"} Sweatshirts & Hoodies {">"}
                </h3>
                <div className="">
                  <div
                    className={cn(
                      "flex flex-row items-center justify-between",
                      "border-1 md:h-10 md:px-2",
                    )}
                    onClick={() => {
                      setIsShowHide(!isShowHide);
                    }}
                  >
                    <span>All</span>
                    <span>
                      <ChevronDown />
                    </span>
                  </div>
                  <ul
                    id={item.title}
                    className={cn(
                      "absolue z-50 w-full border-1 outline-0",
                      isShowHide ? "block" : "hidden",
                      "overflow-visible",
                    )}
                  >
                    {item.values.map((value) => (
                      <li
                        key={value + "option"}
                        value={value}
                        className={cn(
                          "flex flex-row items-center justify-between border-1 outline-0",
                          "md:h-10 md:px-2",
                          "hover:bg-accent",
                        )}
                        onClick={() => {
                          setChecked(value);
                        }}
                      >
                        {value}
                        <Check
                          className={cn(
                            checked === value ? "block" : "hidden",
                            " ",
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
    </>
  );
}
