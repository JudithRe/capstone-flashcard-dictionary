import { Permanent_Marker, Poppins } from "@next/font/google/";

export const permanent = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-permanent",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});
