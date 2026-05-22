"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { BrainCircuit, Network, Container } from "lucide-react"
import { SectionTitle } from "@/components/ui/SectionTitle"

const stackLayers = [
    {
        id: "intelligence",
        title: "Intelligence Layer",
        subtitle: "AI Models & Analytics",
        icon: <BrainCircuit className="w-8 h-8" />,
        desc: "Distributed deep learning models, real-time computer vision, and predictive forecasting analytics that turn raw data into strategic foresight.",
        techs: ["TensorFlow", "PyTorch", "OpenCV", "Scikit", "Hugging Face"],
        color: "bg-indigo-600",
        lightColor: "bg-indigo-50",
        textColor: "text-indigo-600",
        borderColor: "border-indigo-200"
    },
    {
        id: "connectivity",
        title: "Connectivity Layer",
        subtitle: "IoT & Edge Computing",
        icon: <Network className="w-8 h-8" />,
        desc: "Low-latency edge processing units and secure MQTT pipelines capturing telemetry directly from physical infrastructure assets.",
        techs: ["MQTT", "LoRaWAN", "Edge TPU", "5G Core", "Kafka"],
        color: "bg-emerald-600",
        lightColor: "bg-emerald-50",
        textColor: "text-emerald-600",
        borderColor: "border-emerald-200"
    },
    {
        id: "infrastructure",
        title: "Infrastructure Layer",
        subtitle: "Cloud & Microservices",
        icon: <Container className="w-8 h-8" />,
        desc: "Scalable, auto-healing containerized architecture running atop multi-cloud environments for high-availability enterprise SLA.",
        techs: ["Kubernetes", "Docker", "AWS", "PostgreSQL", "Terraform"],
        color: "bg-blue-600",
        lightColor: "bg-blue-50",
        textColor: "text-blue-600",
        borderColor: "border-blue-200"
    }
]

export default function PlatformTechStack() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionTitle
                        title="Platform Technology Stack"
                        subtitle="The robust engineering underlying the Integra AITech intelligence platform."
                    />
                </div>

                <div className="max-w-5xl mx-auto flex flex-col gap-6 relative z-10">
                    
                    {/* Vertical Connecting Line (Background) */}
                    <div className="absolute left-8 md:left-12 top-10 bottom-10 w-1 bg-gray-100 -z-10 rounded-full" />

                    {stackLayers.map((layer, i) => (
                        <motion.div
                            key={layer.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`bg-white rounded-3xl border ${layer.borderColor} p-6 md:p-10 shadow-xl shadow-gray-200/40 relative flex flex-col md:flex-row gap-8 items-start`}
                        >
                            {/* Icon Pillar */}
                            <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-white shadow-md ${layer.color} relative z-10`}>
                                {layer.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold tracking-widest uppercase mb-1 flex items-center gap-2">
                                        <span className={layer.textColor}>{layer.title}</span>
                                    </h3>
                                    <h4 className="text-2xl font-display font-medium text-gray-900 mb-4">
                                        {layer.subtitle}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        {layer.desc}
                                    </p>
                                </div>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-3">
                                    {layer.techs.map((tech, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`px-4 py-2 rounded-lg text-sm font-semibold border ${layer.lightColor} ${layer.textColor} ${layer.borderColor}`}
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
