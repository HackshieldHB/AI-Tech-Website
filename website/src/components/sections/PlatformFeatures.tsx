"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ShieldCheck, ActivitySquare, Server, Layers, Wrench, CheckCircle2 } from "lucide-react"

const features = [
    {
        id: "monitoring",
        title: "Real-Time Infrastructure Monitoring",
        desc: "Ingest telemetry directly from cell towers and data centers to a centralized command hub. Gain total visibility over network health without physical site visits.",
        bullets: ["Live power utilization metrics", "Instant intrusion alerts", "Automated anomaly flagging"],
        icon: ActivitySquare,
        color: "from-blue-500 to-cyan-400",
        bg: "bg-blue-50",
        accent: "text-blue-600",
        ring: "ring-blue-200",
    },
    {
        id: "predictive",
        title: "Predictive Maintenance AI",
        desc: "Transition from reactive break-fix processes to autonomous forecasting. Our proprietary machine learning layers analyze degradation patterns to foresee hardware failures.",
        bullets: ["Dynamic lifetime health scoring", "Automated parts-ordering workflows", "Zero-downtime service windows"],
        icon: ShieldCheck,
        color: "from-violet-500 to-purple-400",
        bg: "bg-violet-50",
        accent: "text-violet-600",
        ring: "ring-violet-200",
    },
    {
        id: "fieldops",
        title: "AI-Powered Field Service Operations",
        desc: "Orchestrate your entire mobile workforce intelligently. Route technicians based on skill, location, and real-time site access conditions determined by edge intelligence.",
        bullets: ["Smart algorithmic dispatching", "Geofenced safety validations", "Mobile AR troubleshooting guides"],
        icon: Wrench,
        color: "from-emerald-500 to-teal-400",
        bg: "bg-emerald-50",
        accent: "text-emerald-600",
        ring: "ring-emerald-200",
    },
    {
        id: "digitaltwin",
        title: "Digital Twin Infrastructure Visualization",
        desc: "Interact with exact 3D replicas of your physical assets. Overlay live data atop spatial models to conduct remote diagnostics and spatial planning.",
        bullets: ["High-fidelity spatial rendering", "Real-time thermal mapping overlay", "Scenario disruption simulation"],
        icon: Layers,
        color: "from-orange-500 to-amber-400",
        bg: "bg-orange-50",
        accent: "text-orange-600",
        ring: "ring-orange-200",
    },
    {
        id: "edge",
        title: "Edge AI Data Processing",
        desc: "Achieve millisecond latency by running deep learning models directly on localized micro-datacenters attached to telecom infrastructure.",
        bullets: ["Offline inference capability", "Massive egress cost reduction", "Military-grade data privacy"],
        icon: Server,
        color: "from-rose-500 to-pink-400",
        bg: "bg-rose-50",
        accent: "text-rose-600",
        ring: "ring-rose-200",
    },
]

const fallbackImageSrc = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"

function getFeatureImage(featureId: string) {
    return `/images/features/${
        featureId === "monitoring"  ? "network-ops-dashboard.png"   :
        featureId === "predictive"  ? "ai-anomaly-dashboard.png"    :
        featureId === "fieldops"    ? "field-service-ui.png"        :
        featureId === "digitaltwin" ? "digital-twin-ui.png"         :
        "edge-compute-dashboard.png"
    }`
}

function FeatureImage({ featureId, title }: { featureId: string; title: string }) {
    const [src, setSrc] = React.useState(getFeatureImage(featureId))
    return (
        <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover w-full h-full"
            onError={() => setSrc(fallbackImageSrc)}
        />
    )
}

export default function PlatformFeatures() {
    const [activeId, setActiveId] = React.useState(features[0].id)
    const active = features.find(f => f.id === activeId)!

    return (
        <section className="py-32 relative bg-gray-50 border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                        Platform Capabilities
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                        A robust suite of enterprise-grade tools designed to extract intelligence from physical infrastructure.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">

                    {/* Left: Tab List */}
                    <div className="lg:w-72 flex-shrink-0">
                        <div className="lg:sticky lg:top-28 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                            {features.map((feat) => {
                                const Icon = feat.icon
                                const isActive = feat.id === activeId
                                return (
                                    <button
                                        key={feat.id}
                                        onClick={() => setActiveId(feat.id)}
                                        className={`group relative flex-shrink-0 flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 border
                                            ${isActive
                                                ? `bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-gray-100 ${feat.accent}`
                                                : "bg-transparent border-transparent text-gray-500 hover:bg-white/60 hover:text-gray-700"
                                            }`}
                                    >
                                        {/* Active indicator bar */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="featureTabIndicator"
                                                className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-gradient-to-b ${feat.color}`}
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200
                                            ${isActive ? `${feat.bg} ${feat.accent}` : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}
                                        >
                                            <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                                        </div>
                                        <span className={`text-sm font-semibold leading-tight hidden lg:block ${isActive ? feat.accent : ""}`}>
                                            {feat.title}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right: Content Pane */}
                    <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="flex flex-col lg:flex-row items-start gap-10"
                            >
                                {/* Text */}
                                <div className="flex-1 w-full">
                                    <div className={`w-14 h-14 rounded-2xl ${active.bg} ${active.accent} flex items-center justify-center mb-8 shadow-sm ring-2 ${active.ring}`}>
                                        <active.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-5 leading-tight">
                                        {active.title}
                                    </h3>
                                    <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                                        {active.desc}
                                    </p>
                                    <ul className="space-y-3">
                                        {active.bullets.map((bullet, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.08 }}
                                                className="flex items-center gap-3 text-gray-700 font-medium"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                                {bullet}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image */}
                                <div className="flex-1 w-full relative">
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${active.color} opacity-10 rounded-[2rem] -rotate-1 scale-[1.03] -z-10 blur-xl`} />
                                    <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-4 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative overflow-hidden">
                                        <div className="relative rounded-2xl overflow-hidden border border-gray-100/50 bg-gray-50 aspect-[4/3]">
                                            <FeatureImage featureId={active.id} title={active.title} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
