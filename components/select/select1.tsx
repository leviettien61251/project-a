import { cn } from "@/utils/utils";
import {
  SlidersVertical,
  ChevronDown,
  ChevronUp,
  X,
  Check,
} from "lucide-react";

interface OptionItem {
  title: string;
  values: string[];
}
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
interface selectProps1 {
  item: OptionItem ;
  isShowHide: boolean;
  setIsShowHide: React.Dispatch<React.SetStateAction<boolean>>;
  checked: string;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
}

export default function Select1({
  item,
  isShowHide,
  setIsShowHide,
  checked,
  setChecked,
}: selectProps1) {
  return (
    <div className="">
      <div
        className={cn(
          "flex flex-row items-center justify-between",
          "border-1 md:h-10 md:px-2",
        )}
        onClick={() => {
          setIsShowHide(!isShowHide);
        }}
      >
        <span>All</span>
        <span>
          <ChevronDown />
        </span>
      </div>
      <ul
        id={item.title}
        className={cn(
          "absolue z-50 w-full border-1 outline-0",
          isShowHide ? "block" : "hidden",
          "overflow-visible",
        )}
      >
        {item.values.map((value) => (
          <li
            key={value + "option"}
            value={value}
            className={cn(
              "flex flex-row items-center justify-between border-1 outline-0",
              "md:h-10 md:px-2",
              "hover:bg-accent",
            )}
            onClick={() => {
              setChecked(value);
            }}
          >
            {value}
            <Check
              className={cn(checked === value ? "block" : "hidden", " ")}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
