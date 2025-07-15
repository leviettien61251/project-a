"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Cart1() {
  const [hide, setHide] = [true];

  return (
    <>
      {/* Use only on laptop, TV's screen */}
      <div
        className={cn(
          "relative flex h-auto items-center md:w-1/3",
          "max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:mt-2 max-sm:mr-2 max-sm:w-[48px]",
        )}
      >
        <div
          className={cn(
            "relative flex h-[3rem] w-full items-center rounded-2xl border-black shadow-xs md:border-3",
            "max-sm:w-[48px]",
          )}
        >
          <Button className="w-h-36 absolute left-0 z-10 m-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <i className="absolute top-[-6px] right-[-6px] z-10 h-5 w-5 rounded-full bg-black text-center text-[12px]">
              {50}
            </i>
          </Button>

          <span
            className={cn(
              "absolute left-13 text-sm",
              "max-[786px]:text-sm",
              hide ? "max-sm:hidden" : "max-sm:block",
            )}
          >
            Tổng cộng: {500000}
            <sup>đ</sup>
          </span>
        </div>
      </div>
    </>
  );
}
