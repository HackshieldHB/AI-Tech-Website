"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BrainCircuit, Cloud, Wifi, Server, ShieldCheck } from "lucide-react"

const trustPillars = [
    { label: "Proprietary AI Models",       icon: <BrainCircuit className="w-5 h-5" /> },
    { label: "Cloud-Native Infrastructure", icon: <Cloud className="w-5 h-5" />        },
    { label: "Resilient IoT Networks",       icon: <Wifi className="w-5 h-5" />         },
    { label: "Zero-Latency Edge Computing",  icon: <Server className="w-5 h-5" />       },
    { label: "Military-Grade Cybersecurity", icon: <ShieldCheck className="w-5 h-5" />  },
]

// Duplicate items for seamless infinite scroll
const allPillars = [...trustPillars, ...trustPillars, ...trustPillars]

export default function EnterpriseTrustLayer() {
    return (
        <section className="py-20 border-y border-gray-100 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-10">
                <p className="text-sm font-bold tracking-widest text-gray-400 uppercase text-center">
                    Built for Enterprise Infrastructure
                </p>
            </div>

            {/* Marquee track */}
            <div className="relative w-full">
                {/* Fade masks on sides */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 flex-nowrap"
                        animate={{ x: ["0%", "-33.333%"] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    >
                        {allPillars.map((pillar, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full border border-gray-100 bg-gray-50 text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-300 cursor-default select-none"
                            >
                                <span className="text-gray-400 group-hover:text-blue-600">{pillar.icon}</span>
                                <span className="text-sm font-medium whitespace-nowrap">{pillar.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
