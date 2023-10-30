import { Inter, Libre_Baskerville, Montserrat } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Inter",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-libre_baskerville",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});

// const antonio = Antonio({
//   subsets: ["latin"],
//   fallback: ["antonio"],
//   variable: "--font-antonio",
// });



export const fonts = {
  //   antonio,
  inter,
  libre_baskerville,
  montserrat,
};
