import React from "react";

const Footer = ({length}) => {
  
  return( 
  <div className="flex flex-col items-center justify-center w-full bg-blue-700 fixed 
             inset-x-0 
             bottom-0 ">
  <footer className="text-center">{length <= 1 ?`${length} item `:`${length} Tasks `}</footer>
  </div>
  )
};
 
export default Footer;
