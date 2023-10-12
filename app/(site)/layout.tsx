

import "../styles/globals.css";

import { fonts } from "../fonts/fonts";
import Navbar from "@/components/site/Navbars/Navbar";



export const metadata = {
  title: "Rasheed Tolulope",
  description: "",
};

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    
  return (
    <html lang="en">
      <body
        className={` ${fonts.firaMono} ${fonts.rubik} ${fonts.calibreBold} bg-primary-color text-secondary-color`}
      >
        {/* Header */}
        <main className="font-rubik max-w-6xl mx-auto px-4">
          <div className=" ">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
