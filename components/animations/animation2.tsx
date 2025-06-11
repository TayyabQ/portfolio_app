"use client"

import {motion} from 'framer-motion'
import react from 'react'

interface Animation2Props {
    children: React.ReactNode;
    delay?: number;
}

const Animation2: React.FC<Animation2Props> = ({children, delay = 0.3}) => {
    return(
        <motion.div
            initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

export default Animation2;