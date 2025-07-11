"use client";

import { AlignLeft, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Sidebar, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { title } from "process";

const sideBarTitle = [
  {
    title: "Title1Title1 Title5",
    number: 1,
    context:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
  },
  {
    title: "Title2Title2 Title5",
    number: 2,
    context:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
  },
  {
    title: "Title3Title3 Title5",
    number: 3,
    context:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
  },
  {
    title: "Title4Title4 Title5",
    number: 4,
    context:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
  },
  {
    title: "Title5Title5 Title5",
    number: 5,
    context:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
  },
];

export default function Sidebar1() {
  const [showHide, setShowHide] = useState(false);
  return (
    <>
      <div
        className={cn(
          "hidden",
          "max-sm:flex max-sm:h-fit  max-sm:w-fit max-sm:bg-inherit",
        )}
      >
        <Button
          type="button"
          className={cn("bg-white", "")}
          onClick={(event) => {
            setShowHide(!showHide);
            console.log(showHide);
            
          }}
        >
          <AlignLeft className="text-black" />
        </Button>
      </div>

      <aside
        className={cn(
          "absolute top-0 left-0  z-[999]  h-screen bg-black",
          "max-sm:w-[80%]",
          showHide ? "overflow-visible" : "overflow-hidden max-sm:w-0",
          "transition-all duration-700 ease-in",
        )}

      >
        <ChevronLeft
          className="absolute right-0 z-10 text-white"
          onClick={(event) => {
            setShowHide(!showHide);
            console.log(showHide);
          }}
        />
        <div
          className={cn(
            "top-0 z-[998] h-screen w-screen bg-black opacity-55",
            showHide ? "overflow-visible" : "w-0 overflow-hidden",
            "transition-all duration-700 ease-in",
          )}
        ></div>
        <div
          className={cn(
            "absolute bg-inherit pt-[1rem] pl-[1rem]",
            "max-sm:top-0 max-sm:h-1/2 max-sm:w-[80%]",
          )}
        >
          <ul className={cn("flex flex-col gap-2", "")}>
            {sideBarTitle?.map((item) => (
              <li
                key={item.number}
                className={cn(
                  "w-auto overflow-hidden font-bold text-white",
                  "max-sm:text-xl",
                )}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
