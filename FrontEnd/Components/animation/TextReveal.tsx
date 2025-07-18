"use client";
import React from 'react';
import { motion } from 'framer-motion';

function TextReveal({children} : {children : React.ReactNode}) {
  return (
    <>
       <motion.div
       style={{
        overflow : "hidden",
       }} 
       initial={{ height : 0 }}
       animate = {{ height : "auto" }}
       transition = {{ duration : 2.5 , ease : "easeInOut" }}
       >
           {children}
       </motion.div>
    </>
  )
}

export default TextReveal