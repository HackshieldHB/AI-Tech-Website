"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Smartphone, Cpu, Server, Database, Cloud } from "lucide-react"

const layers = [
    {
        id: "L3",
        title: "Application Layer",
        desc: "End-user interfaces delivering actionable intelligence to field technicians and executive command centers.",
        color: "bg-blue-600",
        bgLight: "bg-blue-50",
        textColor: "text-blue-600",
        borderColor: "border-blue-200",
        items: [
            { label: "Executive Dashboards", icon: <Smartphone className="w-4 h-4" /> },
            { label: "Field Service React Apps", icon: <Smartphone className="w-4 h-4" /> },
            { label: "Automated Reporting", icon: <Cloud className="w-4 h-4" /> }
        ]
    },
    {
        id: "L2",
        title: "Digital Intelligence Layer",
        desc: "The central intelligence hub processing massive datasets to predict anomalies and verify structural integrity.",
        color: "bg-indigo-600",
        bgLight: "bg-indigo-50",
        textColor: "text-indigo-600",
        borderColor: "border-indigo-200",
        items: [
            { label: "Predictive AI Models", icon: <Cpu className="w-4 h-4" /> },
            { label: "Digital Twin Spatial Engine", icon: <Database className="w-4 h-4" /> },
            { label: "Streaming Data Lakehouse", icon: <Cloud className="w-4 h-4" /> }
        ]
    },
    {
        id: "L1",
        title: "Physical Infrastructure Layer",
        desc: "The physical hardware layer continuously capturing real-world operational and environmental states at the edge.",
        color: "bg-emerald-600",
        bgLight: "bg-emerald-50",
        textColor: "text-emerald-600",
        borderColor: "border-emerald-200",
        items: [
            { label: "IoT Telemetry Gateways", icon: <Server className="w-4 h-4" /> },
            { label: "Edge Inference Nodes", icon: <Cpu className="w-4 h-4" /> },
            { label: "CCTV & Drone Feeds", icon: <Server className="w-4 h-4" /> }
        ]
    }
]

export default function AIArchitectureLayers() {
    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-6 relative">
            {/* Connecting visual beam */}
            <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-emerald-400 blur-sm rounded-full -translate-x-1/2 opacity-30" />
            <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 -translate-x-1/2" />

            {layers.map((layer, idx) => (
                <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative z-10"
                >
                    <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500">
                        {/* Layer Logic Tag */}
                        <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-24">
                            <div className="text-3xl font-display font-black text-gray-200 group-hover:text-gray-300 transition-colors">
                                {layer.id}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                                {layer.title}
                            </h3>
                            <p className="text-gray-500 text-lg font-light leading-relaxed mb-6">
                                {layer.desc}
                            </p>
                            
                            <div className="flex flex-wrap gap-3">
                                {layer.items.map((item, i) => (
                                    <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${layer.bgLight} ${layer.textColor} ${layer.borderColor} text-sm font-semibold`}>
                                        {item.icon}
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Status Light indicating activity */}
                        <div className="hidden lg:flex shrink-0 w-8 items-center justify-center">
                            <div className={`w-3 h-3 rounded-full ${layer.color} animate-pulse shadow-[0_0_15px_rgba(0,0,0,0.2)]`} />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
