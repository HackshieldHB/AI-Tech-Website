"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { HardHat, Activity, Cpu, MonitorPlay, ArrowRight } from "lucide-react"

const pipelineSteps = [
    {
        title: "Physical Infrastructure",
        desc: "Towers, fiber networks, and ground assets",
        icon: <HardHat className="w-8 h-8" />,
    },
    {
        title: "Sensor & Edge Layer",
        desc: "IoT data capture and edge micro-processing",
        icon: <Activity className="w-8 h-8" />,
    },
    {
        title: "Data & AI Engine",
        desc: "Real-time analytics and predictive models",
        icon: <Cpu className="w-8 h-8" />,
    },
    {
        title: "Operational Applications",
        desc: "Digital twin dashboards and automated workflows",
        icon: <MonitorPlay className="w-8 h-8" />,
    }
]

export default function PlatformPositioning() {
    return (
        <section className="py-24 bg-blue-50/50 border-y border-gray-100 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                        Bridging Physical Infrastructure{" "}<br className="hidden md:block"/>{" "}with <span className="text-primary">AI Intelligence.</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                        A continuous, automated digital pipeline transforming raw physical deployments into predictive enterprise assets.
                    </p>
                </motion.div>

                {/* Vertical on Mobile, Horizontal on Desktop Pipeline */}
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                    
                    {/* Animated Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2 z-0">
                        <motion.div 
                            className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {pipelineSteps.map((step, i) => (
                        <React.Fragment key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative z-10 w-full md:w-64 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold font-display text-gray-900 mb-2 truncate w-full">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                            </motion.div>

                            {/* Mobile Arrow Connector */}
                            {i < pipelineSteps.length - 1 && (
                                <div className="md:hidden flex animate-bounce text-primary">
                                    <ArrowRight className="w-6 h-6 rotate-90" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </section>
    )
}
