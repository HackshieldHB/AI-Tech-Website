"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import NetworkBackground from "@/components/visualizations/NetworkBackground"
import Link from "next/link"
import { ArrowRight, LayoutGrid } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center pt-16 pb-24 overflow-hidden isolate">
            {/* Network Background */}
            <div className="absolute inset-0 pointer-events-none -z-20 opacity-80">
                <NetworkBackground />
            </div>

            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/90 via-[#0B0F19]/60 to-[#0B0F19]/90 pointer-events-none -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-10 shadow-sm backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-sm font-medium text-gray-300 tracking-wide">Enterprise AI Infrastructure Platform</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-8 leading-[1.05]">
                        Intelligence for the <br /> 
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Physical World.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl font-light leading-relaxed">
                        Transform legacy operations with a unified software intelligence layer. From predictive telecom maintenance to automated smart city infrastructure.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5">
                        <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-900/20 rounded-xl" asChild>
                            <Link href="#platform">
                                Explore Platform
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto gap-2 bg-transparent hover:bg-white/5 text-white border-white/20 rounded-xl transition-all" asChild>
                            <Link href="#use-cases">
                                <LayoutGrid className="w-5 h-5 mr-1" />
                                View Use Cases
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 border-2 border-gray-500/30 rounded-full flex justify-center py-2">
                        <div className="w-1 h-2 bg-gray-400 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
