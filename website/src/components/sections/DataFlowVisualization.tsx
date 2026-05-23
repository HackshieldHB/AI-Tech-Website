"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Server, Wifi, Cpu, BrainCircuit, Monitor } from "lucide-react"

const flowSteps = [
    { id: "step1", label: "Physical Infrastructure", icon: <Server className="w-6 h-6" />    },
    { id: "step2", label: "IoT Sensors",             icon: <Wifi className="w-6 h-6" />       },
    { id: "step3", label: "Edge Processing",         icon: <Cpu className="w-6 h-6" />        },
    { id: "step4", label: "AI Analytics Engine",     icon: <BrainCircuit className="w-6 h-6" /> },
    { id: "step5", label: "Operational Decisions",   icon: <Monitor className="w-6 h-6" />    },
]

// Staggered traveling packets — each offset so they're never all at the same position
const PACKETS = [
    { id: "p1", delay: 0,    color: "bg-blue-500"   },
    { id: "p2", delay: 1.4,  color: "bg-cyan-400"   },
    { id: "p3", delay: 2.8,  color: "bg-indigo-500" },
]

function TravelingPacket({ delay, color }: { delay: number; color: string }) {
    return (
        <motion.div
            className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full ${color} shadow-[0_0_8px_rgba(59,130,246,0.7)]`}
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{
                duration: 3.2,
                delay,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    )
}

export default function DataFlowVisualization() {
    return (
        <section className="py-24 relative bg-white overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Intelligent Data Pipeline"
                    subtitle="How raw infrastructure events are captured, processed, and transformed into autonomous operational decisions."
                />

                <div className="mt-20 max-w-6xl mx-auto">
                    {/* Desktop Horizontal Flow */}
                    <div className="hidden lg:flex items-center justify-between relative">
                        {/* Base track */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full" />

                        {/* Animated fill */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 -z-10 rounded-full"
                        />

                        {/* Traveling packets (only rendered after mount so SSR is fine) */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 overflow-visible pointer-events-none z-20">
                            {PACKETS.map((p) => (
                                <TravelingPacket key={p.id} delay={p.delay} color={p.color} />
                            ))}
                        </div>

                        {flowSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                                className="relative flex flex-col items-center group z-10"
                            >
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.08 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
                                >
                                    {step.icon}
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.4 }}
                                    className="absolute top-24 w-32 text-center text-sm font-semibold text-gray-800"
                                >
                                    {step.label}
                                </motion.div>
                                {/* Step number badge */}
                                <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                                    {index + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Vertical Flow */}
                    <div className="flex lg:hidden flex-col items-center gap-4 relative">
                        <div className="absolute top-0 bottom-0 w-1 bg-gray-100 -z-10 rounded-full" />
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute top-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-500 -z-10 rounded-full"
                        />

                        {flowSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                                className="flex items-center gap-6 w-full max-w-sm bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:border-blue-200 hover:shadow-blue-50 transition-all duration-200"
                            >
                                <div className="relative w-12 h-12 bg-blue-50 rounded-xl text-blue-600 flex items-center justify-center shrink-0">
                                    {step.icon}
                                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                </div>
                                <div className="font-semibold text-gray-800 text-sm">{step.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
