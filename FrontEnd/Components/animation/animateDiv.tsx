'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IAnimatedDiv {
  children: React.ReactNode,
  className?: string,
  delay?: number
}

const AnimatedDiv = ({ children, className = "", delay = 0.7 }: IAnimatedDiv) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 1,
      }}
      transition = {{ delay: delay, duration: 2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedDiv
