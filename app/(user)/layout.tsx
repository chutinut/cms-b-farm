import { Header, Footer } from "@user/components";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  );
}
