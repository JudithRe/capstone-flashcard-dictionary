import { Poppins, Permanent_Marker } from "@next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const permanent = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
});
