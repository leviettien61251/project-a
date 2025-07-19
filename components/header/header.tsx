import Cart1 from "../cart/cart1";
import logo2 from "@/assets/logo/logo2.png";
import Image from "next/image";
import Search1 from "../search/search1";
import { AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Sidebar1 from "../navbar/sidebar1";
import Menubar1 from "../menubar/menubar1";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div
        className={cn(
          "flex",
          "max-sm:relative max-sm:flex-col max-sm:gap-4",
          "md:mb-4 md:flex-col md:items-center md:pt-[0.5rem]",
        )}
      >
        <div
          className={cn(
            "w-full",
            "max-lg:p-0",
            "md:mt-5 md:mb-10 md:grid md:grid-cols-5",
            // "min-md:px-5"
          )}
        >
          <div className=""></div>
          <div className={cn("max-sm:w-full")}>
            <Link href={"/home"}>
              <Image src={logo2} width={100} height={70} alt="Name" />
            </Link>
          </div>
          <div
            className={cn("flex-row md:col-span-3 md:flex md:w-3/4 md:gap-10")}
          >
            <Search1 />

            <Cart1 />
          </div>
        </div>
        <div
          className={cn(
            "bg-black md:w-full",
            "max-sm:grid max-sm:grid-cols-7 max-sm:items-center max-sm:justify-items-center",
            "md:grid md:grid-cols-5",
          )}
        >
          <div className=""></div>
          <div className={cn("md:col-span-3")}>
            <div className="w-fit">
              <Sidebar1  key_={"header"} func={"not-filter"} where={"md"} />
            </div>
            <div className={cn("max-sm:col-span-6 max-sm:w-full")}>
              <Menubar1 />
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
