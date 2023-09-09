import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "../components/NavBar";
import { ImageFilterProvider } from "../context/ImageFilterContext";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nasa gallery",
  description: "NASA GALLERY DESCRIPTION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        <ImageFilterProvider>
          {children}
        </ImageFilterProvider>
      </body>
    </html>
  );
}
