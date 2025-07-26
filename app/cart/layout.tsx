"use client";

import Header from "@/components/header/header";
import { useParams } from "next/navigation";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Header  />
        <main>{children}</main>
      </div>
    </>
  );
}
