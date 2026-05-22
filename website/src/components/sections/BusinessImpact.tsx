"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/Card"

import { TrendingDown, Clock, ActivitySquare } from "lucide-react"

const impactStats = [
    {
        icon: <TrendingDown className="w-12 h-12 mb-4 text-red-400" />,
        title: "Cost Inefficiencies",
        desc: "Significant OPEX increases due to manual processes and unoptimized workflows.",
        color: "text-red-400",
        bg: "bg-red-500/5",
        border: "border-red-500/20"
    },
    {
        icon: <Clock className="w-12 h-12 mb-4 text-orange-400" />,
        title: "Downtime Disruption",
        desc: "Severe financial impact from unpredicted outages and SLA violations.",
        color: "text-orange-400",
        bg: "bg-orange-500/5",
        border: "border-orange-500/20"
    },
    {
        icon: <ActivitySquare className="w-12 h-12 mb-4 text-amber-400" />,
        title: "Operational Visibility",
        desc: "Productivity loss in field operations due to lack of real-time asset insights.",
        color: "text-amber-400",
        bg: "bg-amber-500/5",
        border: "border-amber-500/20"
    }
]

export default function BusinessImpact() {
    return (
        <section className="py-24 relative bg-card/20 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="The Cost of Inefficient Infrastructure Operations"
                    subtitle="Legacy tools and manual processes lead to massive financial and operational losses."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                    {impactStats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <Card className={`p-10 text-center h-full flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform ${stat.bg} ${stat.border}`}>
                                {stat.icon}
                                <h3 className={`text-2xl font-display font-semibold ${stat.color} tracking-tight`}>
                                    {stat.title}
                                </h3>
                                <p className="text-lg text-white/80 font-medium leading-relaxed">{stat.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
