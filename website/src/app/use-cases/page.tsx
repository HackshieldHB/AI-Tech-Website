"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Activity, ShieldCheck, HardHat, Layers, TrendingUp, Cpu, Server } from "lucide-react"

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (isInView) {
            let start = 0
            const duration = 2000 // 2 seconds
            const increment = value / (duration / 16)

            const timer = setInterval(() => {
                start += increment
                if (start >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)
            return () => clearInterval(timer)
        }
    }, [value, isInView])

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    )
}

const useCases = [
    {
        title: "Smart Utility Transformation",
        icon: <Activity className="w-8 h-8 text-primary" />,
        problem: "A national utility provider faced uncontrollable OPEX due to reactive maintenance practices on aging grid transformers. Unplanned downtime averaged 14 hours per incident.",
        implementation: "Deployment of AI Nexus across 5,000 sub-stations. Thermal drone sweeps were aggregated with existing ground telemetry to build an active digital twin of transformer health.",
        tech: ["Computer Vision (Thermal)", "AI Nexus Platform", "Time-Series Predictive DB"],
        results: [
            { label: "Downtime Reduction", value: 45, suffix: "%" },
            { label: "Maintenance Savings", value: 30, suffix: "%" }
        ]
    },
    {
        title: "Tower Security & Asset Protection",
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        problem: "A vast TowerCo network suffered continuous diesel fuel theft and battery vandalism in remote areas, leading to $2M+ in annual equipment losses.",
        implementation: "Integrated TowerSense edge computing nodes on 1,200 high-risk sites. High-definition camera feeds and door sensors trigger autonomous alarms using local video inference without needing active cloud connection.",
        tech: ["Edge Video Inference", "LoRaWAN Sensors", "TowerSense Analytics"],
        results: [
            { label: "Theft Prevention", value: 92, suffix: "%" },
            { label: "False Alarms Cut", value: 85, suffix: "%" }
        ]
    },
    {
        title: "Construction Digitization",
        icon: <HardHat className="w-8 h-8 text-primary" />,
        problem: "A major fiber rollout project spanning 2,000km was stalled by manual contractor verification, leading to multi-month invoicing delays and severe quality control issues.",
        implementation: "Rolled out Smart Construct to 450 field teams. GPS-tagged photo evidence was instantly verified by central AI models for trench depth and conduit laying quality.",
        tech: ["Smart Construct Mobile", "Geo-Spatial Mapping", "Automated Image Verification"],
        results: [
            { label: "Reporting Transparency", value: 100, suffix: "%" },
            { label: "Faster Completion", value: 25, suffix: "%" }
        ]
    },
    {
        title: "Field Service Efficiency",
        icon: <Layers className="w-8 h-8 text-primary" />,
        problem: "MNO engineers struggled with high mean-time-to-repair (MTTR) as field teams lacked direct contextual access to underlying active equipment data on-site.",
        implementation: "FSM Digital Twin empowered teams to pull live performance logs and 3D rack configurations directly to their tablets via AR overlay while standing at the site.",
        tech: ["FSM Digital Twin", "Augmented Reality UI", "Cloud Infrastructure DB"],
        results: [
            { label: "First-Time Fix Rate", value: 95, suffix: "%" },
            { label: "Reduced MTTR", value: 40, suffix: "%" }
        ]
    }
]

export default function UseCasesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Real-World <span className="text-primary">Impact.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                        Discover how Integra AITech's solutions are driving quantifiable digital transformation across telecom, utilities, and infrastructure projects.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-16">
                    {useCases.map((uc, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-200"
                        >
                            <div className="flex flex-col lg:flex-row gap-12">
                                
                                {/* Storytelling Section */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-4 rounded-xl bg-blue-50 text-primary border border-blue-100 shadow-sm">
                                            {uc.icon}
                                        </div>
                                        <h2 className="text-3xl font-bold font-display text-gray-900 leading-tight">
                                            {uc.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2 border-l-2 border-red-500 pl-3">The Problem</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {uc.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2 border-l-2 border-green-500 pl-3">The Implementation</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {uc.implementation}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2 border-l-2 border-blue-500 pl-3">Technology Used</h4>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {uc.tech.map((techItem, idx) => (
                                                    <span key={idx} className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 flex items-center gap-2">
                                                        <Cpu className="w-4 h-4 text-primary" /> {techItem}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Results KPI Column */}
                                <div className="lg:w-72 shrink-0 bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col justify-center gap-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-bl-full opacity-30 pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white to-transparent rounded-tr-full opacity-30 pointer-events-none" />
                                    
                                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider border-b border-blue-200 pb-2 flex items-center gap-2 relative z-10">
                                        <TrendingUp className="w-4 h-4" /> Measured Results
                                    </h4>
                                    
                                    {uc.results.map((res, rIdx) => (
                                        <div key={rIdx} className="relative z-10">
                                            <div className="text-5xl font-display font-bold text-gray-900 mb-2 drop-shadow-sm">
                                                <AnimatedCounter value={res.value} suffix={res.suffix} />
                                            </div>
                                            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                                                {res.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}
