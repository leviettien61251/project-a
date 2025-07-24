import Header from "@/components/header/header";

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
