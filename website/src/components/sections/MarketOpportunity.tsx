"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/Card"
import { TowerControl, Map, BrainCircuit } from "lucide-react"

const markets = [
    {
        title: "Tower Market",
        value: "Global Scale",
        desc: "expanding telecommunication tower infrastructure",
        icon: <TowerControl className="w-8 h-8" />,
        borderColor: "border-blue-500/30",
        bg: "bg-blue-500/5",
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/20"
    },
    {
        title: "Fiber Investment",
        value: "Edge Connectivity",
        desc: "accelerating deployment of next-gen fiber networks",
        icon: <Map className="w-8 h-8" />,
        borderColor: "border-purple-500/30",
        bg: "bg-purple-500/5",
        iconColor: "text-purple-400",
        iconBg: "bg-purple-500/20"
    },
    {
        title: "AI Market",
        value: "AI Transformation",
        desc: "rapidly integrating predictive intelligence",
        icon: <BrainCircuit className="w-8 h-8" />,
        borderColor: "border-emerald-500/30",
        bg: "bg-emerald-500/5",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/20"
    }
]

export default function MarketOpportunity() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionTitle
                    title="Global Market Opportunity"
                    subtitle="Rising infrastructure complexity and the demands of 5G networks make AI-driven automation essential for telecom operators seeking to control costs and improve reliability."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    {markets.map((market, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className={`p-10 h-full flex flex-col items-center text-center ${market.borderColor} ${market.bg} hover:-translate-y-2 transition-transform shadow-xl`}>
                                <div className={`p-5 rounded-2xl mb-8 ${market.iconBg} ${market.iconColor}`}>
                                    {market.icon}
                                </div>
                                <h3 className="text-2xl font-bold font-display text-white mb-4">{market.title}</h3>
                                <div className={`text-3xl lg:text-4xl font-extrabold font-display mb-4 ${market.iconColor} tracking-tight`}>
                                    {market.value}
                                </div>
                                <p className="text-lg text-white/80">{market.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
