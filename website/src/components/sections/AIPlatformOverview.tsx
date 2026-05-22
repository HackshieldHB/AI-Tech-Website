"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Activity, Layers, ActivitySquare, Server, BrainCircuit, ShieldCheck, Cpu } from "lucide-react"

const engineNodes = [
    {
        id: "analytics",
        label: "AI Analytics",
        desc: "Neural network pattern recognition.",
        icon: <ActivitySquare className="w-6 h-6" />,
        angle: 0
    },
    {
        id: "twin",
        label: "Digital Twin",
        desc: "3D real-time spatial simulation.",
        icon: <Layers className="w-6 h-6" />,
        angle: 60
    },
    {
        id: "iot",
        label: "IoT Sensors",
        desc: "Telemetry and environmental data.",
        icon: <Activity className="w-6 h-6" />,
        angle: 120
    },
    {
        id: "edge",
        label: "Edge Computing",
        desc: "Zero-latency local processing.",
        icon: <Server className="w-6 h-6" />,
        angle: 180
    },
    {
        id: "predictive",
        label: "Predictive Maintenance",
        desc: "Automated failure forecasting.",
        icon: <BrainCircuit className="w-6 h-6" />,
        angle: 240
    },
    {
        id: "monitoring",
        label: "Infrastructure Monitoring",
        desc: "Continuous health surveillance.",
        icon: <ShieldCheck className="w-6 h-6" />,
        angle: 300
    }
]

export default function AIPlatformOverview() {
    const [hoveredNode, setHoveredNode] = React.useState<string | null>(null)

    return (
        <section id="platform" className="py-32 relative bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionTitle
                    title="The AI Infrastructure Engine"
                    subtitle="A unified intelligence architecture continuously aggregating, analyzing, and acting upon massive volumes of operational data."
                />

                <div className="relative w-full max-w-4xl mx-auto h-[600px] mt-24 flex items-center justify-center">
                    
                    {/* Background Orbit Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                            className="w-[450px] h-[450px] md:w-[500px] md:h-[500px] rounded-full border border-gray-200 border-dashed"
                        />
                        <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-100" />
                    </div>

                    {/* AI Infrastructure Engine (Center Node) */}
                    <div 
                        className={`absolute z-20 flex flex-col items-center justify-center w-44 h-44 rounded-full bg-white shadow-xl border-2 transition-colors duration-500
                            ${hoveredNode ? 'border-blue-500 shadow-blue-500/20' : 'border-gray-100'}`}
                    >
                        <div className="absolute inset-0 rounded-full bg-blue-50/50 animate-pulse pointer-events-none" />
                        <Cpu className="w-12 h-12 text-blue-600 mb-3 relative z-10" />
                        <span className="text-sm font-bold text-gray-900 text-center tracking-wide relative z-10 px-4 leading-tight">
                            AITECH Engine
                        </span>
                    </div>

                    {/* Orbiting Nodes */}
                    {engineNodes.map((node) => {
                        const radius = 250
                        const rad = (node.angle * Math.PI) / 180
                        const x = Math.cos(rad) * radius
                        const y = Math.sin(rad) * radius
                        const isHovered = hoveredNode === node.id

                        return (
                            <div
                                key={node.id}
                                className="absolute z-30"
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                            >
                                <motion.div
                                    onHoverStart={() => setHoveredNode(node.id)}
                                    onHoverEnd={() => setHoveredNode(null)}
                                    whileHover={{ scale: 1.1 }}
                                    className={`relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border cursor-pointer transition-colors duration-300
                                        ${isHovered ? 'border-blue-500 text-blue-600' : 'border-gray-100 text-gray-400 hover:text-blue-500 hover:border-blue-200'}`}
                                >
                                    {node.icon}
                                </motion.div>
                                
                                {/* Hover Tooltip */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-24 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl pointer-events-none z-50 border border-gray-800 whitespace-nowrap"
                                        >
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-gray-900" />
                                            <div className="font-semibold text-sm mb-1">{node.label}</div>
                                            <div className="text-xs text-gray-400 font-light">{node.desc}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}

                    {/* Dynamic Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 1000">
                        {engineNodes.map((node) => {
                            const isHovered = hoveredNode === node.id
                            const rad = (node.angle * Math.PI) / 180
                            const targetX = 500 + Math.cos(rad) * 250
                            const targetY = 500 + Math.sin(rad) * 250

                            return (
                                <line
                                    key={`line-${node.id}`}
                                    x1="500"
                                    y1="500"
                                    x2={targetX}
                                    y2={targetY}
                                    stroke={isHovered ? "#3B82F6" : "transparent"}
                                    strokeWidth={isHovered ? "3" : "0"}
                                    strokeDasharray="6 6"
                                    className="transition-all duration-500"
                                >
                                    {isHovered && (
                                        <animate 
                                            attributeName="stroke-dashoffset" 
                                            values="100;0" 
                                            dur="2s" 
                                            repeatCount="indefinite" 
                                        />
                                    )}
                                </line>
                            )
                        })}
                    </svg>

                </div>
            </div>
        </section>
    )
}
