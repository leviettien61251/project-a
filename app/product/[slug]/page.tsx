import Filter1 from "@/components/filter/filter";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <div className={cn("h-[50rem] w-full", "md:grid md:grid-cols-5")}>
        <div></div>
        <div className={cn("md:col-span-3")}>
          <Filter1 />
        </div>
        <div></div>
      </div>
    </>
  );
}
