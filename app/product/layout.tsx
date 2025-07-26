"use client";

import Header from "@/components/header/header";
import { useParams } from "next/navigation";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>

      {children}
    </>
  );
}
