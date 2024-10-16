import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Esme France's Portfolio",
  description: "A portfolio of web development projects created by Esme France",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <>
        <Nav />
        <main>
          <body>{children}</body>
        </main>
        <Footer />
      </>
    </html>
  );
}
