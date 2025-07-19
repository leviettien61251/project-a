"use client";

import Filter1 from "@/components/filter/filter1";
import { cn } from "@/lib/utils";
import * as product from "@/data/product.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HeartPlus, Star } from "lucide-react";
import caro_blue_white from "@/assets/images/caro_blue_white.jpg";
import color_blue_flower from "@/assets/images/caro_blue_white.jpg";
import Link from "next/link";

export default function Page({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState({});
  const handleData = () => {
    setData(product);
  };
  useEffect(() => {}, [product]);

  return (
    <>
      <main className={cn("h-[50rem] w-full", "md:grid md:grid-cols-6")}>
        <div></div>
        <div className={cn("md:col-span-4", "md:flex md:flex-col md:gap-5")}>
          <h1 className={cn("md:text-5xl")}>Headerrrrrr</h1>
          <Filter1 />
          {/*  */}
          <div
            className={cn(
              "h-auto w-full bg-red-800",
              "md:grid md:grid-cols-4 md:grid-rows-7 md:gap-1",
            )}
          >
            {/* ========================== */}
            <Link href={"/product/product-1/detail"} className={cn("relative")}>
              <article className="flex h-[30rem] w-full flex-col justify-evenly gap-2 bg-white">
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
                  <button className={cn("relative z-10 w-[2rem]", "md:mr-2")}>
                    <HeartPlus
                      className={cn(
                        "absolute top-0",
                        "hover: hover:size-[1.7rem] hover:text-red-400",
                        "transition-all duration-350 ease-in",
                      )}
                    />
                  </button>
                </div>
                <div className={cn("md:pr-10")}>
                  <div
                    className={cn(
                      "flex flex-row justify-between text-sm text-slate-400",
                    )}
                  >
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
                      <Star width={15} className="text-black" />
                    </span>
                    <span>4.8</span>
                    <span>(12)</span>
                  </div>
                </div>
              </article>
            </Link>
            {/* ========================== */}
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
