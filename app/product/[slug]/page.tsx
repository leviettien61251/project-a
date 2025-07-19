"use client";

import Filter1 from "@/components/filter/filter";
import { cn } from "@/lib/utils";
import * as product from "@/data/product.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HeartPlus, Star } from "lucide-react";
import caro_blue_white from "@/assets/images/caro_blue_white.jpg";
import color_blue_flower from "@/assets/images/caro_blue_white.jpg";

export default function Page({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState({});
  const handleData = () => {
    setData(product);
  };
  useEffect(() => {}, [product]);

  return (
    <>
      <main className={cn("h-[50rem] w-full", "md:grid md:grid-cols-5")}>
        <div></div>
        <div className={cn("md:col-span-3", "md:flex md:flex-col md:gap-5")}>
          <h1 className={cn("md:text-5xl")}>Headerrrrrr</h1>
          <Filter1 />
          {/*  */}
          <div
            className={cn(
              "h-auto w-full bg-red-800",
              "md:grid md:grid-cols-4 md:grid-rows-7 md:gap-1 ",
            )}
          >
            {/* ========================== */}
            <section className="h-[25rem] w-full bg-white">
              <Image
                src={caro_blue_white}
                alt=""
                className={cn("h-[70%] w-full bg-amber-300")}
              />
              <div className={cn("flex flex-row justify-between")}>
                <div>
                  <ul className={cn("flex flex-row gap-2")}>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className={cn("relative w-[2rem]")}>
                  <HeartPlus
                    className={cn(
                      "absolute right-0 z-10",
                      "hover:size-[2rem] hover:text-red-400",
                    )}
                  />
                </div>
              </div>
              <div className={cn("flex flex-row justify-between")}>
                <p>{"MEN"}</p>
                <p>{"XS-XXL"}</p>
              </div>
              <div>
                <h3>UNIQLO LOGO Sweatshirt</h3>
              </div>
              <div>
                <p className={cn("font-bold", "md:text-lg")}>
                  <span>784.000</span>
                  <abbr className={cn("text-sm")}>VND</abbr>
                </p>
              </div>
              <div
                className={cn(
                  "text-sm",
                  "md:flex md:flex-row md:items-center md:justify-start md:gap-1",
                )}
              >
                <span>
                  <Star width={15} />
                </span>
                <span>4.8</span>
                <span>(12)</span>
              </div>
            </section>
            {/* ========================== */}
            {/* ========================== */}
            <section className="h-[25rem] w-full bg-white">
              <Image
                src={caro_blue_white}
                alt=""
                className={cn("h-[70%] w-full bg-amber-300")}
              />
              <div className={cn("flex flex-row justify-between")}>
                <div>
                  <ul className={cn("flex flex-row gap-2")}>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className={cn("relative w-[2rem]")}>
                  <HeartPlus
                    className={cn(
                      "absolute right-0 z-10",
                      "hover:size-[2rem] hover:text-red-400",
                    )}
                  />
                </div>
              </div>
              <div className={cn("flex flex-row justify-between")}>
                <p>{"MEN"}</p>
                <p>{"XS-XXL"}</p>
              </div>
              <div>
                <h3>UNIQLO LOGO Sweatshirt</h3>
              </div>
              <div>
                <p className={cn("font-bold", "md:text-lg")}>
                  <span>784.000</span>
                  <abbr className={cn("text-sm")}>VND</abbr>
                </p>
              </div>
              <div
                className={cn(
                  "text-sm",
                  "md:flex md:flex-row md:items-center md:justify-start md:gap-1",
                )}
              >
                <span>
                  <Star width={15} />
                </span>
                <span>4.8</span>
                <span>(12)</span>
              </div>
            </section>
            {/* ========================== */}
            {/* ========================== */}
            <section className="h-[25rem] w-full bg-white">
              <Image
                src={caro_blue_white}
                alt=""
                className={cn("h-[70%] w-full bg-amber-300")}
              />
              <div className={cn("flex flex-row justify-between")}>
                <div>
                  <ul className={cn("flex flex-row gap-2")}>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className={cn("relative w-[2rem]")}>
                  <HeartPlus
                    className={cn(
                      "absolute right-0 z-10",
                      "hover:size-[2rem] hover:text-red-400",
                    )}
                  />
                </div>
              </div>
              <div className={cn("flex flex-row justify-between")}>
                <p>{"MEN"}</p>
                <p>{"XS-XXL"}</p>
              </div>
              <div>
                <h3>UNIQLO LOGO Sweatshirt</h3>
              </div>
              <div>
                <p className={cn("font-bold", "md:text-lg")}>
                  <span>784.000</span>
                  <abbr className={cn("text-sm")}>VND</abbr>
                </p>
              </div>
              <div
                className={cn(
                  "text-sm",
                  "md:flex md:flex-row md:items-center md:justify-start md:gap-1",
                )}
              >
                <span>
                  <Star width={15} />
                </span>
                <span>4.8</span>
                <span>(12)</span>
              </div>
            </section>
            {/* ========================== */}
            {/* ========================== */}
            <section className="h-[25rem] w-full bg-white">
              <Image
                src={caro_blue_white}
                alt=""
                className={cn("h-[70%] w-full bg-amber-300")}
              />
              <div className={cn("flex flex-row justify-between")}>
                <div>
                  <ul className={cn("flex flex-row gap-2")}>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className={cn("relative w-[2rem]")}>
                  <HeartPlus
                    className={cn(
                      "absolute right-0 z-10",
                      "hover:size-[2rem] hover:text-red-400",
                    )}
                  />
                </div>
              </div>
              <div className={cn("flex flex-row justify-between")}>
                <p>{"MEN"}</p>
                <p>{"XS-XXL"}</p>
              </div>
              <div>
                <h3>UNIQLO LOGO Sweatshirt</h3>
              </div>
              <div>
                <p className={cn("font-bold", "md:text-lg")}>
                  <span>784.000</span>
                  <abbr className={cn("text-sm")}>VND</abbr>
                </p>
              </div>
              <div
                className={cn(
                  "text-sm",
                  "md:flex md:flex-row md:items-center md:justify-start md:gap-1",
                )}
              >
                <span>
                  <Star width={15} />
                </span>
                <span>4.8</span>
                <span>(12)</span>
              </div>
            </section>
            {/* ========================== */}
            {/* ========================== */}
            <section className="h-[25rem] w-full bg-white">
              <Image
                src={caro_blue_white}
                alt=""
                className={cn("h-[70%] w-full bg-amber-300")}
              />
              <div className={cn("flex flex-row justify-between")}>
                <div>
                  <ul className={cn("flex flex-row gap-2")}>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className={cn("relative w-[2rem]")}>
                  <HeartPlus
                    className={cn(
                      "absolute right-0 z-10",
                      "hover:size-[2rem] hover:text-red-400",
                    )}
                  />
                </div>
              </div>
              <div className={cn("flex flex-row justify-between")}>
                <p>{"MEN"}</p>
                <p>{"XS-XXL"}</p>
              </div>
              <div>
                <h3>UNIQLO LOGO Sweatshirt</h3>
              </div>
              <div>
                <p className={cn("font-bold", "md:text-lg")}>
                  <span>784.000</span>
                  <abbr className={cn("text-sm")}>VND</abbr>
                </p>
              </div>
              <div
                className={cn(
                  "text-sm",
                  "md:flex md:flex-row md:items-center md:justify-start md:gap-1",
                )}
              >
                <span>
                  <Star width={15} />
                </span>
                <span>4.8</span>
                <span>(12)</span>
              </div>
            </section>
            {/* ========================== */}
            {/* ========================== */}
            <section className="h-[25rem] w-full bg-white">
              <Image
                src={caro_blue_white}
                alt=""
                className={cn("h-[70%] w-full bg-amber-300")}
              />
              <div className={cn("flex flex-row justify-between")}>
                <div>
                  <ul className={cn("flex flex-row gap-2")}>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className={cn("relative w-[2rem]")}>
                  <HeartPlus
                    className={cn(
                      "absolute right-0 z-10",
                      "hover:size-[2rem] hover:text-red-400",
                    )}
                  />
                </div>
              </div>
              <div className={cn("flex flex-row justify-between")}>
                <p>{"MEN"}</p>
                <p>{"XS-XXL"}</p>
              </div>
              <div>
                <h3>UNIQLO LOGO Sweatshirt</h3>
              </div>
              <div>
                <p className={cn("font-bold", "md:text-lg")}>
                  <span>784.000</span>
                  <abbr className={cn("text-sm")}>VND</abbr>
                </p>
              </div>
              <div
                className={cn(
                  "text-sm",
                  "md:flex md:flex-row md:items-center md:justify-start md:gap-1",
                )}
              >
                <span>
                  <Star width={15} />
                </span>
                <span>4.8</span>
                <span>(12)</span>
              </div>
            </section>
            {/* ========================== */}
            {/* ========================== */}
            <section className="h-[25rem] w-full bg-white">
              <Image
                src={caro_blue_white}
                alt=""
                className={cn("h-[70%] w-full bg-amber-300")}
              />
              <div className={cn("flex flex-row justify-between")}>
                <div>
                  <ul className={cn("flex flex-row gap-2")}>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className={cn("relative w-[2rem]")}>
                  <HeartPlus
                    className={cn(
                      "absolute right-0 z-10",
                      "hover:size-[2rem] hover:text-red-400",
                    )}
                  />
                </div>
              </div>
              <div className={cn("flex flex-row justify-between")}>
                <p>{"MEN"}</p>
                <p>{"XS-XXL"}</p>
              </div>
              <div>
                <h3>UNIQLO LOGO Sweatshirt</h3>
              </div>
              <div>
                <p className={cn("font-bold", "md:text-lg")}>
                  <span>784.000</span>
                  <abbr className={cn("text-sm")}>VND</abbr>
                </p>
              </div>
              <div
                className={cn(
                  "text-sm",
                  "md:flex md:flex-row md:items-center md:justify-start md:gap-1",
                )}
              >
                <span>
                  <Star width={15} />
                </span>
                <span>4.8</span>
                <span>(12)</span>
              </div>
            </section>
            {/* ========================== */}
            {/* ========================== */}
            <section className="h-[25rem] w-full bg-white">
              <Image
                src={caro_blue_white}
                alt=""
                className={cn("h-[70%] w-full bg-amber-300")}
              />
              <div className={cn("flex flex-row justify-between")}>
                <div>
                  <ul className={cn("flex flex-row gap-2")}>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                    <li
                      className={cn(
                        "rounded-full border-2 border-slate-400 bg-black",
                        "md:wh-25",
                      )}
                    >
                      <span></span>
                    </li>
                  </ul>
                </div>
                <div className={cn("relative w-[2rem]")}>
                  <HeartPlus
                    className={cn(
                      "absolute right-0 z-10",
                      "hover:size-[2rem] hover:text-red-400",
                    )}
                  />
                </div>
              </div>
              <div className={cn("flex flex-row justify-between")}>
                <p>{"MEN"}</p>
                <p>{"XS-XXL"}</p>
              </div>
              <div>
                <h3>UNIQLO LOGO Sweatshirt</h3>
              </div>
              <div>
                <p className={cn("font-bold", "md:text-lg")}>
                  <span>784.000</span>
                  <abbr className={cn("text-sm")}>VND</abbr>
                </p>
              </div>
              <div
                className={cn(
                  "text-sm",
                  "md:flex md:flex-row md:items-center md:justify-start md:gap-1",
                )}
              >
                <span>
                  <Star width={15} />
                </span>
                <span>4.8</span>
                <span>(12)</span>
              </div>
            </section>
            {/* ========================== */}
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
