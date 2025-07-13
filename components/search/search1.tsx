import Form from "next/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Search1() {
  return (
    <>
      <Form
        action={"/search"}
        className={cn(
          "relative flex h-auto items-center",
          "md:w-[60%]",
          "max-sm:w-full",
        )}
      >
        <Input
          type="text"
          className={cn(
            "relative h-[3rem] w-full rounded-2xl border-3 border-black",
            "md:w-full",
            "max-sm:mr-2 max-sm:ml-2 max-sm:block",
          )}
          name="iSearch"
        />
        <Button
          type={"button"}
          className={cn(
            "w-h-36 absolute right-0.5 z-10 m-1 rounded-xl",
            "max-sm:right-3",
          )}
        >
          <Search />
        </Button>
      </Form>
    </>
  );
}
