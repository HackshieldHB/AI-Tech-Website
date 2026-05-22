"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Layers, Activity, TowerControl, HardHat, ShieldCheck, Route, ArrowRight, ExternalLink } from "lucide-react"

const products = [
    {
        id: "fsm",
        title: "FSM Digital Twin",
        core: "Field Service Simulation",
        value: "Reduces dispatch errors and accelerates diagnostic mean-time-to-resolution (MTTR).",
        icon: <Layers className="w-8 h-8" />,
        href: null,
    },
    {
        id: "ainexus",
        title: "AI Nexus",
        core: "Predictive Energy Grid",
        value: "Optimizes power consumption and prevents localized grid failures autonomously.",
        icon: <Activity className="w-8 h-8" />,
        href: null,
    },
    {
        id: "towersense",
        title: "TowerSense",
        core: "Edge Tower Telemetry",
        value: "Ensures 99.99% uptime through proactive anomaly detection at the edge.",
        icon: <TowerControl className="w-8 h-8" />,
        href: null,
    },
    {
        id: "smartconstruct",
        title: "Smart Construct",
        core: "Lifecycle QC Tracking",
        value: "Accelerates deployment timelines and enforces 100% compliance via AI validation.",
        icon: <HardHat className="w-8 h-8" />,
        href: null,
    },
    {
        id: "infraguard",
        title: "InfraGuard",
        core: "Datacenter Monitoring",
        value: "Secures mission-critical physical assets against thermal and environmental threats.",
        icon: <ShieldCheck className="w-8 h-8" />,
        href: null,
    },
    {
        id: "permatrax",
        title: "Permatrax",
        core: "FTTH Network Tracking",
        value: "Accelerates fiber rollout with real-time crew tracking, coverage mapping, and deployment progress analytics.",
        icon: <Route className="w-8 h-8" />,
        href: "https://permatrax.tech",
    },
]

export default function PlatformEcosystem() {
    return (
        <section className="py-32 relative bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <SectionTitle
                        title="The Solution Ecosystem"
                        subtitle="Modular enterprise applications natively integrated with the AI Infrastructure Engine."
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <div className="group h-full p-8 rounded-[24px] bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        {product.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                                        {product.title}
                                    </h3>
                                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 font-semibold text-xs rounded-full mb-5">
                                        {product.core}
                                    </div>
                                    <p className="text-gray-500 font-light leading-relaxed mb-8">
                                        {product.value}
                                    </p>
                                </div>
                                {product.href ? (
                                    <a
                                        href={product.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:gap-2.5 transition-all"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span>Visit Site</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                ) : (
                                    <div className="mt-auto flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                                        <span className="text-sm">Learn More</span>
                                        <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
