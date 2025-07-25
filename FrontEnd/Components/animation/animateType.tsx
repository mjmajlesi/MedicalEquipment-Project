'use client'
import { motion } from "framer-motion";

const AnimateType = ({text} : {text : string}) => {
    
    const letters = text.split("")
    const container = {
        visible: {
            transition: { staggerChildren: 0.04, delayChildren: 0.1 }
        }
    }
    const child = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((char, i) => (
                <motion.span key={i} variants={child}>
                    {char}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default AnimateType;


