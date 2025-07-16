import Filter1 from "@/components/filter/filter";
import { cn } from "@/lib/utils";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={cn("h-[50rem] w-full", "md:grid md:grid-cols-5")}>
        <div></div>
        <div className={cn("md:col-span-3", "md:flex md:flex-col md:gap-5")}>
          <h1 className={cn("md:text-5xl")}>Headerrrrrr</h1>
          <Filter1 />
          {/*  */}
          <div
            className={cn("", "md:grid md:grid-cols-5 md:grid-rows-7")}
          >
            <div className=""></div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
