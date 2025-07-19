import { cn } from "@/lib/utils";
import { ChevronLeft, Plus } from "lucide-react";
interface FilterTitleItem {
  title: string;
}
interface filterProps {
  func: string;
  filterTitle: FilterTitleItem[];
  isOption: string;
  setIsOption: React.Dispatch<React.SetStateAction<string>>;
  showHide: boolean;
  setShowHide: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterSidebar({
  func,
  filterTitle,
  isOption,
  setIsOption,
  showHide,
  setShowHide,
}: filterProps) {
  return (
    <>
      <section className={cn("relative h-full w-full", "")}>
        {/* ---------------------------------------------------------------------------------------------------- */}

        <div
          className={cn(
            "border-b-2",
            "md:px-10 md:py-5",
            "flex flex-row items-center justify-between",
            "overflow-hidden",
            "transition-all delay-150 duration-1000 ease-in",
          )}
        >
          <h2 className={cn("md:text-2xl", "overflow-hidden")}>
            Filter <span className={cn("md:ml-6 md:text-lg")}>17 Item(s)</span>
          </h2>
          <ChevronLeft
            className="text-black"
            onClick={(event) => {
              setShowHide(!showHide);
              setIsOption("");
            }}
          />
        </div>
        {/* ---------------------------------------------------------------------------------------------------- */}
        <ul className={cn("flex flex-col", "md:mt-10 md:gap-5 md:px-10")}>
          {filterTitle?.map((item) => (
            <li className={cn("flex flex-col", "overflow-hidden")}>
              <div className="flex flex-row justify-between">
                <h3 className={cn("md:text-lg")}>{item.title}</h3>
                <Plus
                  onClick={(e) => {
                    isOption === item.title
                      ? setIsOption("")
                      : setIsOption(item.title);

                    console.log("aa");
                  }}
                />
              </div>

              <div
                className={cn(
                  "h-fit w-0 bg-inherit",
                  isOption === item.title
                    ? "h-[10rem] w-full overflow-visible"
                    : "h-0 w-0 overflow-hidden",
                  "transition-all delay-150 duration-1000",
                )}
              >
                <section>
                  <h3 className="text-lg">
                    <span>MEN</span> {">"} <span>Sweatshirts & Hoodies</span>{" "}
                    {">"}
                  </h3>
                  <div></div>
                </section>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
