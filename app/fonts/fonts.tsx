

import localFont from "next/font/local";

import { Fira_Mono } from 'next/font/google'
import { Rubik } from 'next/font/google'
 

const calibreBold = localFont({
  src: "../fonts/calibre/CalibreBold.otf",
  fallback: ["system-ui", "calibre-bold"],
  display: "fallback",
  variable: "--font-calibre-bold",
});

const calibreMedium = localFont({
  src:  "../fonts/calibre/CalibreMedium.otf",
  fallback: ["system-ui", "calibre-medium"],
  display: "fallback",
  variable: "--font-calibre-medium",
});


const firaMono = Fira_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  fallback: ["firaMono"],
  variable: "--font-firaMono",
});

const rubik = Rubik({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  fallback: ["rubik"],
  variable: "--font-rubik",
});


export const fonts = {
  calibreBold,
  calibreMedium,
  firaMono,
  rubik
};
