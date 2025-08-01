"use client";
import React, { useState } from 'react'
import Button from './buttuns';
import { MdContentCopy } from "react-icons/md";


function CopiedButtun({text , className}: {text : string , className? : string}) {
  const [isCopied , setIsCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  }
return (
  <Button onClick={handleCopy} className={className}>
    {isCopied ? 'Copied!' : text}
  </Button>
)
};

export default CopiedButtun