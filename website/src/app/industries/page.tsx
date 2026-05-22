"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { RadioTower, Zap, Pickaxe, Landmark, AlertCircle, ArrowRight, Layers, TrendingUp } from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"

const industries = [
    {
        id: "telecom",
        title: "Telecommunications",
        icon: <RadioTower className="w-8 h-8" />,
        challenge: "Managing thousands of distributed tower and fiber assets manually results in high OPEX, slow issue resolution, and prolonged network downtime.",
        solution: "Integra AITech deploys TowerSense and FSM Digital Twin to automate structural audits, detect anomalies via IoT, and dispatch engineers precisely when and where needed.",
        techStack: ["Computer Vision Analytics", "Edge IoT Sensors", "Digital Twin Modeling"],
        metrics: [
            { label: "Audit Cost Reduction", value: "80%" },
            { label: "Dispatch Accuracy", value: "99%" }
        ],
        theme: "blue"
    },
    {
        id: "utilities",
        title: "Utilities & Energy",
        icon: <Zap className="w-8 h-8" />,
        challenge: "Aging infrastructure like transformers and transmission lines are prone to failure, causing wide-area blackouts and massive hardware replacement costs.",
        solution: "We implement AI Nexus to aggregate thermal drone data and ground sensor telemetry, predicting mechanical failures before grid disruption occurs.",
        techStack: ["Predictive Machine Learning", "Time-Series Aggregation", "Drone Telemetry API"],
        metrics: [
            { label: "Downtime Prevented", value: "45%" },
            { label: "Maintenance Savings", value: "30%" }
        ],
        theme: "amber"
    },
    {
        id: "mining",
        title: "Mining & Heavy Industry",
        icon: <Pickaxe className="w-8 h-8" />,
        challenge: "Hazardous site environments require strict safety compliance and continuous equipment monitoring to prevent fatal accidents and workflow halts.",
        solution: "Smart Construct and Edge AI cameras continuously monitor PPE compliance, track vehicle movement, and alert teams to safety breaches in real-time.",
        techStack: ["Real-time Video Inference", "Rugged Edge Servers", "Spatial Geofencing"],
        metrics: [
            { label: "Safety Compliance", value: "100%" },
            { label: "Incident Response Time", value: "< 2s" }
        ],
        theme: "emerald"
    },
    {
        id: "government",
        title: "Government & Defense",
        icon: <Landmark className="w-8 h-8" />,
        challenge: "Operating secure communications networks across remote or classified areas demands hardware that runs independently of public cloud connectivity.",
        solution: "InfraGuard deploys localized micro data centers equipped with self-healing networks and encrypted, isolated edge intelligence.",
        techStack: ["Air-gapped Edge AI", "Micro Data Centers", "Encrypted Mesh Networks"],
        metrics: [
            { label: "Data Sovereignty", value: "100%" },
            { label: "Uptime Requirement", value: "99.999%" }
        ],
        theme: "slate"
    }
]

export default function IndustriesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                        Cross-Industry <span className="text-primary">Intelligence.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                        Our AI platforms generalize beyond pure telecom, bringing operational intelligence to any sector managing distributed critical infrastructure.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col gap-12">
                    {industries.map((ind, i) => {
                        return (
                            <motion.div
                                key={ind.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden"
                            >
                                <div className="grid lg:grid-cols-12 shrink-0">
                                    
                                    {/* Left Column: Title & Challenge */}
                                    <div className="lg:col-span-4 bg-gray-900 text-white p-10 flex flex-col justify-between">
                                        <div>
                                            <div className="p-4 bg-white/10 rounded-2xl w-min mb-8">
                                                {ind.icon}
                                            </div>
                                            <h2 className="text-3xl font-display font-bold mb-6">
                                                {ind.title}
                                            </h2>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flex items-center gap-2 text-red-300 font-semibold text-sm uppercase tracking-wider mb-3">
                                                <AlertCircle className="w-4 h-4" /> Industry Challenge
                                            </div>
                                            <p className="text-gray-300 leading-relaxed font-light">
                                                {ind.challenge}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Column: Solution, Tech Stack, Metrics */}
                                    <div className="lg:col-span-8 p-10 lg:p-12 flex flex-col justify-center">
                                        
                                        {/* Solution Mapping */}
                                        <div className="mb-10">
                                            <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                                                <ArrowRight className="w-4 h-4" /> Integra AITech Solution
                                            </div>
                                            <p className="text-xl text-gray-800 leading-relaxed">
                                                {ind.solution}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8 border-t border-gray-100 pt-8 mt-auto">
                                            
                                            {/* Tech Stack */}
                                            <div>
                                                <div className="flex items-center gap-2 text-gray-900 font-semibold mb-4">
                                                    <Layers className="w-5 h-5 text-gray-400" /> Technology Stack
                                                </div>
                                                <ul className="space-y-3">
                                                    {ind.techStack.map((tech, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                            {tech}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Outcome Metrics */}
                                            <div>
                                                <div className="flex items-center gap-2 text-gray-900 font-semibold mb-4">
                                                    <TrendingUp className="w-5 h-5 text-gray-400" /> Outcome Metrics
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {ind.metrics.map((metric, idx) => (
                                                        <div key={idx} className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-center">
                                                            <div className="text-2xl font-bold font-display text-primary mb-1">
                                                                {metric.value}
                                                            </div>
                                                            <div className="text-xs text-gray-600 font-medium uppercase tracking-wider">
                                                                {metric.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
