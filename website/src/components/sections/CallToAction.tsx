"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, PhoneCall } from "lucide-react"

export default function CallToAction() {
    return (
        <section className="py-32 relative bg-gray-900 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
                        Build the Future of <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Intelligent Infrastructure.</span>
                    </h2>
                    
                    <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                        Join leading enterprise operators transforming their physical asset lifecycle with AI-driven operations.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-900/30 rounded-xl transition-all" asChild>
                            <Link href="/demo">
                                Request Demo
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto gap-2 bg-white/5 hover:bg-white/10 text-white border-white/20 rounded-xl transition-all backdrop-blur-sm" asChild>
                            <Link href="/contact">
                                <PhoneCall className="w-5 h-5 mr-1 text-gray-400" />
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
