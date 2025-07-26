"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import list from "@/data/product";
import { useEffect, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  detail: string;
  quantity: number;
  image: string;
  category: string;
  size: string[];
  color: string[];
}

export default function Page() {
  const [data, setData] = useState<Product[]>([]);
  const [isShowHide, setIsShowHide] = useState<number>();
  const [checked, setChecked] = useState<number>();
  const quanti: number = 0;

  const handleData = () => {
    setData(list);
  };

  useEffect(() => {
    handleData();
  }, [data]);

  return (
    <div className={cn("mt-6 h-screen w-full", "md:grid md:grid-cols-7")}>
      <div></div>
      <div className={cn("w-full", "md:col-span-5")}>
        <h1 className="text-3xl font-bold md:mb-6">SHOPPING CART</h1>

        <div className={cn("", "flex flex-row")}>
          <div className={cn("flex flex-col gap-20", "md:w-3/5")}>
            {data.map((item, index) => (
              <article
                key={item.id + "cart article"}
                className={cn("md:h-[17rem] md:w-full", "flex flex-row gap-3")}
              >
                <div className={cn("h-auto overflow-hidden md:w-2/7")}>
                  <Image
                    src={item.image}
                    width={600}
                    height={800}
                    alt={item.name + "img"}
                  />
                </div>
                <div className={"h-full w-full"}>
                  <div
                    className={cn(
                      "relative flex h-full w-full grow flex-col justify-between",
                    )}
                  >
                    <section className={cn("flex flex-col")}>
                      <div>
                        <h3 className={cn("font-bold md:text-2xl")}>
                          {item.name}
                        </h3>
                      </div>
                      <div>
                        <h4 className="md:text-lg">Color: {item.color}</h4>
                      </div>
                      <div>
                        <h4 className="md:text-lg">Size: {item.size[0]}</h4>
                      </div>
                      <div>
                        <h4 className="font-bold">
                          <span>{item.price}</span>
                          <abbr className="text-xs">USD</abbr>
                        </h4>
                      </div>
                      <X className={cn("absolute top-0 right-5")} />
                    </section>
                    <div className={cn("relative flex flex-row md:w-full")}>
                      <div className="relative w-1/2">
                        <h1 className="text-lg font-bold">QUANTITY</h1>
                        <div className="relative md:w-1/3">
                          <div
                            className={cn(
                              "flex flex-row items-center justify-between",
                              "border-1 md:h-10 md:px-2",
                            )}
                            onClick={() => {
                              isShowHide === item.id
                                ? setIsShowHide(item.id + 129)
                                : setIsShowHide(item.id);
                            }}
                          >
                            <span>1</span>
                            <span>
                              <ChevronDown />
                            </span>
                          </div>
                          {isShowHide === item.id ? (
                            <ul
                              key={item.id + "dropdown"}
                              id={item.name}
                              className={cn(
                                "absolute z-50 w-full border-1 outline-0",
                                isShowHide ? "block" : "hidden",
                                "overflow-visible",
                              )}
                            >
                              {Array.from({ length: 9 }).map((item_, index) => (
                                <li
                                  key={index + "quantity"}
                                  value={index + 1}
                                  className={cn(
                                    "relative flex flex-row items-center justify-between border-1 outline-0",
                                    "md:h-10 md:px-2",
                                    "hover:bg-accent bg-white",
                                  )}
                                  onClick={() => {
                                    setChecked(item.id);

                                    console.log(item.id);
                                  }}
                                >
                                  {index + 1}
                                </li>
                              ))}

                              {/* ))} */}
                            </ul>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>

                      <div className={cn("flex items-center", "md:w-1/2")}>
                        <h4 className="text-sm font-bold">
                          <span>
                            SUBTOTAL: {index} <abbr>USD</abbr>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className={cn("h-[60rem] w-2/5", "")}>
            <div className={cn("border-2", "flex flex-col gap-4", "md:p-5")}>
              <div className="">
                <h3 className={cn("text-lg font-bold")}>
                  ORDER SUMARY| 3 ITEM(S)
                </h3>
              </div>
              <div className="flex flex-row justify-between">
                <h4>Item(s) subtotal</h4>
                <h5>
                  2.155.000
                  <span> VND</span>
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h3 className={cn("text-lg font-bold")}>SUBTOTAL</h3>
                <h3 className={cn("text-lg font-bold")}>
                  2.155.000
                  <span> VND</span>
                </h3>
              </div>
              <div className="flex flex-row justify-between">
                <h4>VAT included</h4>
                <h5>
                  2.155.000
                  <span> VND</span>
                </h5>
              </div>
              <div className="flex flex-row justify-between">
                <h3 className={cn("text-lg font-bold")}>ORDER TOTAL</h3>
                <h3 className={cn("text-lg font-bold")}>
                  2.155.000
                  <span> VND</span>
                </h3>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
