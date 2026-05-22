"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Eye, BrainCircuit, Activity, Target, Workflow, TrendingUp } from "lucide-react"

const enterpriseValues = [
    {
        title: "Operational Visibility",
        icon: <Eye className="w-6 h-6" />,
        desc: "Gain complete, real-time oversight of all physical assets and field operations across distributed geographical locations through a unified command center."
    },
    {
        title: "Infrastructure Intelligence",
        icon: <BrainCircuit className="w-6 h-6" />,
        desc: "Transform raw hardware telemetry data into actionable enterprise intelligence natively integrated with your existing operational workflows."
    },
    {
        title: "Reduced Downtime",
        icon: <Activity className="w-6 h-6" />,
        desc: "Eliminate catastrophic hardware failures with predictive maintenance alerting, ensuring 99.99% uptime for mission-critical enterprise systems."
    },
    {
        title: "Improved Decision Making",
        icon: <Target className="w-6 h-6" />,
        desc: "Empower leadership with deterministic data models and scenario simulations to objectively evaluate and execute operational decisions."
    },
    {
        title: "Automation at Scale",
        icon: <Workflow className="w-6 h-6" />,
        desc: "Programmatically orchestrate thousands of physical hardware nodes and field service actions simultaneously without manual human intervention."
    },
    {
        title: "Predictive Infrastructure Planning",
        icon: <TrendingUp className="w-6 h-6" />,
        desc: "Use AI-driven insights and infrastructure analytics to anticipate capacity needs, optimize asset deployment, and plan long-term infrastructure expansion more effectively."
    }
]

export default function UseCasesGrid() {
    return (
        <section id="use-cases" className="py-24 relative bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Real-World Enterprise Value"
                    subtitle="How our infrastructure platform solves critical friction points across multiple physical industries."
                />

                {/* 
                  Grid Layout logic:
                  - Mobile: 1 column (grid-cols-1)
                  - Tablet: 2 columns (md:grid-cols-2)
                  - Desktop: 3 columns × 2 rows (lg:grid-cols-3)
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
                    {enterpriseValues.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                {val.icon}
                            </div>
                            
                            <h3 className="text-xl font-display font-bold text-gray-900 leading-tight mb-4">
                                {val.title}
                            </h3>
                            
                            <p className="text-gray-600 font-light leading-relaxed flex-1">
                                {val.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
