import Header from "@/components/header/header";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header params=""/>
      <main>{children}</main>
    </>
  );
}
