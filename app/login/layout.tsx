export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="w-1/3">{children}</div>
    </main>
  );
}
