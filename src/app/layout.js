import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";

const RobotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const PoppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
});

export const metadata = {
  title: "NexChat",
  description: "An app to send messages on real time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${RobotoSans.variable} ${PoppinsSans.variable} antialiased font-poppins`}
      >
        <Toaster position="top-right" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
