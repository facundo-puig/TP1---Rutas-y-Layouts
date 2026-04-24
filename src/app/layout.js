import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "PCStore",
  description: "Componentes de PC al mejor precio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full">
      <body className="flex flex-col min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="flex-1 bg-zinc-950">{children}</main>
        <Footer />
      </body>
    </html>
  );
}