import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="footer 
    border z-10 border-top-[#33353F]
    border-l-transparent 
    border-r-transparent border-b-transparent 
    text-white"
    >
      <div className="container p-12 flex justify-between">
        <Image src="/images/dc-logo.png" width={68} height={68} />

        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
