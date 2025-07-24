"use client";

import Filter1 from "@/components/filter/filter1";
import { cn } from "@/lib/utils";
import * as product from "@/data/product.json";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { HeartPlus, Star } from "lucide-react";
import caro_blue_white from "@/assets/images/caro_blue_white.jpg";
import color_blue_flower from "@/assets/images/caro_blue_white.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";
import list from "@/data/product";

interface Product {
  name: string;
  price: number;
  detail: string;
  quantity: number;
  image: string;
  category: string;
  size: string[];
  color: string[];
}

export default function Page({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Product[]>([]);
  const [isLiked, setIsLiked] = useState<Boolean>(false);
  const handleData = () => {
    setData(list);
  };
  useEffect(() => {
    handleData();
  }, []);
  const params = useParams<{ tag: string; detail: string }>();
  return (
    <>
      <main
        className={cn("h-[50rem] w-full", "md:mt-4 md:grid md:grid-cols-7")}
      >
        <div></div>
        <div className={cn("md:col-span-5", "md:flex md:flex-col md:gap-5")}>
          <h1 className={cn("md:text-5xl")}>{params.tag.toUpperCase()}</h1>
          <Filter1 />
          {/*  */}
          <div
            className={cn(
              "h-auto w-full bg-red-800",
              "md:grid md:grid-cols-4 md:grid-rows-7",
            )}
          >
            {/* ========================== */}
            {data?.map((product) => (
              <div
                key={product.name + "link"}
                // href={"/product/product-1/detail"}
                className={cn("")}
              >
                <article className="flex h-[30rem] w-full flex-col justify-evenly gap-2 bg-white">
                  <Image
                    src={product.image}
                    width={291}
                    height={336}
                    alt=""
                    className={cn("!h-[70%] !w-full bg-amber-300")}
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
                      <p>
                        {product.size[0]} - {product.size[4]}
                      </p>
                    </div>
                    <div>
                      <h3>{product.name}</h3>
                    </div>
                    <div>
                      <p className={cn("font-bold", "md:text-lg")}>
                        <span>{product.price}</span>
                        <abbr className={cn("text-sm")}> USD</abbr>
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
              </div>
            ))}

            {/* ========================== */}
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
