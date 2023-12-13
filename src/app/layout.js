import { Inter } from "next/font/google";
import "./globals.css";
import Toploader from "@/components/sub-components/TopLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Saroar",
  description: "The Professional Web Application Expert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-semiDark pb-8`}>
        <Toploader />
        {children}
      </body>
    </html>
  );
}
