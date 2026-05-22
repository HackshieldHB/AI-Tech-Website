"use client"

import * as React from "react"
import { SectionTitle } from "@/components/ui/SectionTitle"
import AIArchitectureLayers from "@/components/visualizations/AIArchitectureLayers"

export default function ArchitectureDiagram() {
    return (
        <section className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(30,58,138,0.2),transparent_70%)]">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Platform Architecture"
                    subtitle="Explore the 6-layer intelligent computing architecture driving our systems, from raw data IoT ingestion to predictive analytics."
                    alignment="center"
                />

                <div className="mt-16 relative">
                    {/* Background grid for aesthetic depth */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

                    <AIArchitectureLayers />
                </div>
            </div>
        </section>
    )
}
