import { cn } from "@/lib/utils";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import abc from "@/data/product";
import Link from "next/link";

export default function Menubar1() {
  const abc = [
    {
      title: "Product1",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
      number: 1,
    },
    {
      title: "Product2",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
      number: 2,
    },
    {
      title: "Product3",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
      number: 3,
    },
    // {
    //   title: "Product4",
    //   des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
    //   number: 4,
    // },
    // {
    //   title: "Product5",
    //   des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem hic nihil quos inventore fuga amet ipsum commodi cupiditate accusamus, quas quaerat earum id consequuntur reprehenderit eius nesciunt tempore! Reprehenderit, ipsum.",
    //   number: 5,
    // },
  ];
  return (
    <>
      <Menubar
        className={cn(
          "h-[4rem] border-0 bg-black",
          "max-sm:w-[97%] max-sm:justify-center",
          "md:w-full md:gap-10 md:rounded-none md:pr-[17rem] md:pl-[17rem]",
          "min-[768px]:max-sm:pl-5",
        )}
      >
        <MenubarMenu key={"all-product"}>
          <Link href={`/product/all-product`}>
            <MenubarTrigger className="hover:bg-inherit"  >All Product</MenubarTrigger>
          </Link>
        </MenubarMenu>
        {abc?.map((item) => (
          <MenubarMenu key={item.number}>
            <Link href={`/product/${item.title}`}>
              <MenubarTrigger>{item.title}</MenubarTrigger>
            </Link>
          </MenubarMenu>
        ))}
      </Menubar>
    </>
  );
}
