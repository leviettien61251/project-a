"use client";

import { AlignLeft, ChevronLeft, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Sidebar, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { title } from "process";
import { DropdownMenu } from "../ui/dropdown-menu";

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
interface SidebarProps {
  func: string;
  where: string;
}
export default function Sidebar1({ func, where }: SidebarProps) {
  const [showHide, setShowHide] = useState(false);
  const [sideShow, setSideShow] = useState(false);
  return (
    <>
      <div
        className={cn(
          where === "md" ? "hidden" : "flex",
          "max-sm:h-fit max-sm:w-fit max-sm:bg-inherit",
        )}
      >
        <Button
          type="button"
          className={cn("bg-white", "")}
          onClick={(event) => {
            setShowHide(!showHide);
          }}
        >
          <AlignLeft className="text-black" />
        </Button>
      </div>

      <aside
        className={cn(
          "fixed top-0 left-0 z-[999] h-screen border-r-2 bg-white",
          func === "filter"
            ? "max-sm:w-full md:w-[30%]"
            : "max-sm:w-[80%] md:w-[10rem]",

          showHide ? "overflow-visible" : "overflow-hidden max-sm:w-0 md:w-0",
          "transition-all delay-150 duration-700 ease-in",
        )}
      >
        <div
          className={cn(
            "relative bg-inherit",
            "max-sm:top-0 max-sm:h-1/2 max-sm:w-[80%]",
            "md:h-full md:w-full",
            showHide ? "overflow-visible" : "overflow-hidden max-sm:w-0 md:w-0",
            "transition-all delay-150 duration-1000 ease-in",
          )}
        >
          <div className={cn("relative flex h-full w-full flex-col gap-2", "")}>
            {func === "filter" ? (
              <>
                <section key={func} className="relative h-full w-full">
                  {/* ---------------------------------------------------------------------------------------------------- */}

                  <div
                    className={cn(
                      "border-b-2",
                      "md:px-10 md:py-5",
                      "flex flex-row items-center justify-between",
                    )}
                  >
                    <h2 className={cn("md:text-2xl")}>
                      Filter{" "}
                      <span className={cn("md:ml-6 md:text-lg")}>
                        17 Item(s)
                      </span>
                    </h2>
                    <ChevronLeft
                      className="text-black"
                      onClick={(event) => {
                        setShowHide(!showHide);
                        console.log(showHide);
                      }}
                    />
                  </div>
                  {/* ---------------------------------------------------------------------------------------------------- */}
                  <ul
                    className={cn(
                      "flex flex-col",
                      "md:mt-10 md:gap-5 md:px-10",
                    )}
                  >
                    {filterTitle?.map((item) => (
                      <>
                        <li key={item.title} className={cn("flex flex-col")}>
                          <div className="flex flex-row justify-between">
                            <h3 className={cn("md:text-lg")}>{item.title}</h3>
                            <Plus
                              onClick={(e) => {
                                setSideShow(!sideShow);
                                console.log("aa");
                              }}
                            />
                          </div>

                          <div
                            className={cn(
                              "h-fit w-0 bg-blue-800",
                              sideShow
                                ? "h-[10rem] w-full overflow-visible"
                                : "h-0 w-0 overflow-hidden",
                              "transition-all delay-150 duration-1000",
                            )}
                          ></div>
                        </li>
                      </>
                    ))}
                  </ul>
                </section>
              </>
            ) : (
              //{/* ---------------------------------------------------------------------------------------------------- */}

              sideBarTitle?.map((item) => (
                <>
                  <li
                    key={item.number}
                    className={cn(
                      "w-auto overflow-hidden font-bold text-black",
                      "max-sm:text-xl",
                    )}
                  >
                    {item.title}
                  </li>
                </>
              ))
            )}
            {/* ---------------------------------------------------------------------------------------------------- */}

            <div
              className={cn(
                "absolute bottom-0 flex h-auto w-full justify-center border-t-2",
                "md:py-5",
              )}
            >
              <Button
                className={cn(
                  "bg-black text-white md:text-3xl",
                  "rounded-full md:w-5/6 md:py-7 md:text-xl",
                )}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </aside>
      {/* ---------------------------------------------------------------------------------------------------- */}

      <div
        className={cn(
          "fixed top-0 left-0 z-[998] h-screen w-screen bg-black opacity-55",
          showHide ? "overflow-visible" : "w-0 overflow-hidden",
        )}
      ></div>
    </>
  );
}
