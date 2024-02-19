import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
//Nunito is a a font package
import { Inter, Nunito} from "next/font/google";
import "./globals.css";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// This is to control the website itself such as the tab name and description
export const metadata: Metadata = {
  title: "Airbnb",
  description: "An Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        {children}
        </body>
    </html>
  );
}
