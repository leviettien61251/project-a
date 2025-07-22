"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import list from "@/data/product";
import cars from "@/data/car-list";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

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

interface Car {
  id: number;
  name: string;
  url: string;
}

export default function Slider1() {
  const [data, setData] = useState<Car[]>([]);
  const [index_, setIndex] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [isLeft, setIsLeft] = useState<boolean>(false);

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    // autoSlide();
  }, [index_]);

  const autoSlide = () => {
    setTimeout(() => {
      index_ === total - 1 ? setIndex(0) : setIndex((index) => index + 1);
    }, 10000);
  };

  const rightClick = () => {
    if (index_ === total - 1) setIndex(0);
    else setIndex((index) => index + 1);
  };

  const leftClick = () => {
    if (index_ === 0) setIndex(total - 1);
    else setIndex((index) => index - 1);
  };

  const handleData = () => {
    setData(cars);
    setTotal(cars.length);
  };

  return (
    <div
      className={cn("relative h-[35rem] w-full bg-red-700", "flex flex-row")}
    >
      <Button
        type={"button"}
        className="absolute left-0 z-20 self-center"
        onClick={(e) => {
          leftClick();
          setIsLeft(true);
          console.log(data);
        }}
      >
        <ChevronLeft />
        {index_}
      </Button>
      <ul className={cn("relative w-full overflow-hidden")}>
        {data.map((item, index) => (
          <li
            key={item.name + "li"}
            className={cn(
              "absolute w-screen",
              index === index_
                ? "left-0 z-10"
                : index < index_
                  ? "left-[-100%] z-0"
                  : "left-[100%] z-0",
              "transition-all delay-200 duration-2000 ease-in",
            )}
          >
            <Image
              key={item.name + "image"}
              src={item.url}
              width={1700}
              height={500}
              alt={item.name}
              sizes={"(w-full) 100vw, 33vw"}
              className="overflow-hidden"
            />
          </li>
        ))}
      </ul>
      <Button
        type={"button"}
        className="absolute right-0 z-20 self-center"
        onClick={(e) => {
          rightClick();
          setIsLeft(false);
        }}
      >
        <ChevronRight />
        {index_}
      </Button>
    </div>
  );
}
