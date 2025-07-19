'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IAnimatedDiv {
  children: React.ReactNode,
  className?: string,
  delay: number,
  y?: number,
  x?: number,
  duration: number,
}

const AnimatedDiv = (
  { children, className = "", delay , y = 0, x = 0 ,
    duration
  }: IAnimatedDiv) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y, x: x }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      transition={{ delay: delay, duration: duration , ease: "easeInOut"}}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
