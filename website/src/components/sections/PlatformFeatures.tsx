"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ShieldCheck, ActivitySquare, Server, Layers, Wrench, CheckCircle2 } from "lucide-react"

const features = [
    {
        id: "monitoring",
        title: "Real-Time Infrastructure Monitoring",
        desc: "Ingest telemetry directly from cell towers and data centers to a centralized command hub. Gain total visibility over network health without physical site visits.",
        bullets: ["Live power utilization metrics", "Instant intrusion alerts", "Automated anomaly flagging"],
        icon: <ActivitySquare className="w-6 h-6" />
    },
    {
        id: "predictive",
        title: "Predictive Maintenance AI",
        desc: "Transition from reactive break-fix processes to autonomous forecasting. Our proprietary machine learning layers analyze degradation patterns to foresee hardware failures.",
        bullets: ["Dynamic lifetime health scoring", "Automated parts-ordering workflows", "Zero-downtime service windows"],
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        id: "fieldops",
        title: "AI-Powered Field Service Operations",
        desc: "Orchestrate your entire mobile workforce intelligently. Route technicians based on skill, location, and real-time site access conditions determined by edge intelligence.",
        bullets: ["Smart algorithmic dispatching", "Geofenced safety validations", "Mobile AR troubleshooting guides"],
        icon: <Wrench className="w-6 h-6" />
    },
    {
        id: "digitaltwin",
        title: "Digital Twin Infrastructure Visualization",
        desc: "Interact with exact 3D replicas of your physical assets. Overlay live data atop spatial models to conduct remote diagnostics and spatial planning.",
        bullets: ["High-fidelity spatial rendering", "Real-time thermal mapping overlay", "Scenario disruption simulation"],
        icon: <Layers className="w-6 h-6" />
    },
    {
        id: "edge",
        title: "Edge AI Data Processing",
        desc: "Achieve millisecond latency by running deep learning models directly on localized micro-datacenters attached to telecom infrastructure.",
        bullets: ["Offline inference capability", "Massive egress cost reduction", "Military-grade data privacy"],
        icon: <Server className="w-6 h-6" />
    }
]

const fallbackImageSrc = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"

function getFeatureImage(featureId: string) {
    return `/images/features/${
        featureId === "monitoring" ? "network-ops-dashboard.png" :
        featureId === "predictive" ? "ai-anomaly-dashboard.png" :
        featureId === "fieldops" ? "field-service-ui.png" :
        featureId === "digitaltwin" ? "digital-twin-ui.png" :
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
    return (
        <section className="py-32 relative bg-gray-50 border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">
                        Platform Capabilities
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                        A robust suite of enterprise-grade tools designed to extract intelligence from physical infrastructure.
                    </p>
                </div>

                <div className="flex flex-col gap-32">
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 0
                        return (
                            <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                
                                {/* Text Content */}
                                <motion.div 
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 w-full"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-8 shadow-sm">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
                                        {feature.desc}
                                    </p>
                                    <ul className="space-y-4">
                                        {feature.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Real UI Image Representation */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex-1 w-full relative"
                                >
                                    {/* Abstract UI Backdrop */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-emerald-500/5 rounded-[2rem] -rotate-1 scale-[1.03] -z-10 blur-xl" />
                                    
                                    <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-4 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative overflow-hidden">
                                        <div className="relative rounded-2xl overflow-hidden border border-gray-100/50 bg-gray-50 aspect-[4/3]">
                                            <FeatureImage featureId={feature.id} title={feature.title} />
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
