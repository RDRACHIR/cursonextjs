import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "My Store With NextJs",
  description: "This is the principal page of my store",
  keywords: "store, online, ecommerce",
};

// Cambio de font
const robotoFont = Roboto({
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
