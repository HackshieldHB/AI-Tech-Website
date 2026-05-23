"use client"

import * as React from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            style={{ scaleX, transformOrigin: "0% 50%" }}
            className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
        />
    )
}
