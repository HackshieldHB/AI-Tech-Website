"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { TowerControl, Zap, Building2, UserCog } from "lucide-react"

const problems = [
    {
        title: "Telecom Infrastructure Complexity",
        desc: "Managing thousands of distributed cell towers leads to blind spots, excessive maintenance costs, and unpredictable downtime.",
        icon: <TowerControl className="w-7 h-7" />,
    },
    {
        title: "Utility Network Downtime",
        desc: "Legacy power grids fail to predict outages, relying on reactive repairs rather than proactive, data-driven prevention.",
        icon: <Zap className="w-7 h-7" />,
    },
    {
        title: "Smart City Infrastructure Visibility",
        desc: "Urban centers struggle to unify disparate sensor data, causing traffic, security, and resource allocation inefficiencies.",
        icon: <Building2 className="w-7 h-7" />,
    },
    {
        title: "Field Service Operational Inefficiency",
        desc: "Dispatching technicians without real-time telemetry results in wasted trips, poor planning, and extended resolution times.",
        icon: <UserCog className="w-7 h-7" />,
    }
]

export default function IndustryProblem() {
    return (
        <section id="problem" className="py-32 relative bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                        The Cost of Disconnected Operations
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                        Critical enterprise infrastructure generates massive amounts of data, yet operators remain blind. Manual processes and siloed systems create compounding operational risks.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="bg-white rounded-[24px] p-8 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col items-start group">
                                <div className="p-3 bg-red-50 text-red-500 rounded-xl mb-6 shadow-sm ring-1 ring-red-100 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                    {problem.icon}
                                </div>
                                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 leading-snug">
                                    {problem.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    {problem.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
