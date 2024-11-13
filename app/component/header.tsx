import React from "react";
import { Rye } from "next/font/google";
const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div className={` ${rye.className} text-4xl w-screen bg-[#A29875] h-20 pt-5 pl-7 text-white `}>
        MANZZARI
     </div>
  )
}

export default Header