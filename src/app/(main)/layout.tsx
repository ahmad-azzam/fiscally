export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>SIDEBAR {children}</main>;
}
