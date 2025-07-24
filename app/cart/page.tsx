import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl">
        PAGE CART DETAIL Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ullam deserunt fuga ut aut voluptatibus doloremque et, a nemo
        maiores voluptas quam impedit, labore adipisci nesciunt ipsa quibusdam,
        autem vero doloribus!
      </h1>
      <div className={cn("h-screen w-full", "md:grid md:grid-cols-8")}>
        <div></div>
        <div className={cn("w-full bg-amber-700", "md:col-span-6")}>
          <h1 className="text-5xl font-bold">SHOPPING CART</h1>
        </div>
        =<div></div>
      </div>
    </main>
  );
}
