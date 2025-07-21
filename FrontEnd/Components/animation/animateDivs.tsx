"use client";
import React from 'react'
import {motion} from "framer-motion"
import { IAnimatedDiv } from './animateHeader'

function AnimateDivs({
    children, className = "" , delay , duration = 0.6 , y
} : IAnimatedDiv) {
    return (
        <motion.div
            initial={{ opacity: 0, y: y }}
            whileInView={{
                opacity: 1,
                y: 1,
                transition: { delay: delay, duration: duration },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default AnimateDivs