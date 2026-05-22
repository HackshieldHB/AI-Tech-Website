import type { Metadata } from "next"
import { SectionTitle } from "@/components/ui/SectionTitle"
import AIArchitectureLayers from "@/components/visualizations/AIArchitectureLayers"
import PlatformTechStack from "@/components/sections/PlatformTechStack"
import TelecomMap from "@/components/visualizations/TelecomMapClient"

export const metadata: Metadata = {
    title: "Platform Ecosystem | Integra AITech",
    description: "Deep dive into the architecture that powers our industrial AI infrastructure solutions."
}

export default function PlatformPage() {
    return (
        <main className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                        Unified Intelligence <span className="text-primary">Platform.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                        Explore the high-performance architecture empowering Integra AITech's industrial ecosystem.
                    </p>
                </div>

                {/* Tech Stack Infographic Section */}
                <div className="mb-10">
                    <PlatformTechStack />
                </div>

                {/* Core Architecture App-to-Data Visualizer */}
                <div className="mb-24">
                    <AIArchitectureLayers />
                </div>

                {/* GIS Maps / Visualizer */}
                <div className="mt-24">
                    <h3 className="text-2xl font-display font-bold mb-6 text-center text-gray-900">
                        Global Network Telemetry
                    </h3>
                    <p className="text-center text-gray-600 font-light max-w-2xl mx-auto mb-12">
                        Our spatial intelligence integration provides real-time visibility into edge node health, fiber deployment, and hardware telemetry across complex geographies.
                    </p>
                    <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 p-2 bg-white">
                        <TelecomMap />
                    </div>
                </div>

            </div>
        </main>
    )
}
