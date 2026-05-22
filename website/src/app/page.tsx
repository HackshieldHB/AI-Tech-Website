import HeroSection from "@/components/sections/HeroSection"
import IndustryProblem from "@/components/sections/IndustryProblem"
import AIPlatformOverview from "@/components/sections/AIPlatformOverview"
import DataFlowVisualization from "@/components/sections/DataFlowVisualization"
import PlatformEcosystem from "@/components/sections/PlatformEcosystem"
import PlatformFeatures from "@/components/sections/PlatformFeatures"
import UseCasesGrid from "@/components/sections/UseCasesGrid"
import ArchitectureDiagram from "@/components/sections/ArchitectureDiagram"
import EnterpriseTrustLayer from "@/components/sections/EnterpriseTrustLayer"
import CallToAction from "@/components/sections/CallToAction"

export default function Home() {
    return (
        <main className="min-h-screen bg-background flex flex-col items-center">
            {/* 1. Hero Section */}
            <div className="w-full">
                <HeroSection />
            </div>

            {/* 2. Industry Problem */}
            <div className="w-full">
                <IndustryProblem />
            </div>

            {/* 3. AI Platform Engine */}
            <div className="w-full">
                <AIPlatformOverview />
            </div>

            {/* 4. Data Flow Visualization */}
            <div className="w-full">
                <DataFlowVisualization />
            </div>

            {/* 5. Product Ecosystem */}
            <div className="w-full">
                <PlatformEcosystem />
            </div>

            {/* 6. Platform Features */}
            <div className="w-full">
                <PlatformFeatures />
            </div>

            {/* 7. Enterprise Use Cases */}
            <div className="w-full">
                <UseCasesGrid />
            </div>

            {/* 8. Platform Architecture */}
            <div className="w-full">
                <ArchitectureDiagram />
            </div>

            {/* 9. Enterprise Trust Layer */}
            <div className="w-full">
                <EnterpriseTrustLayer />
            </div>

            {/* 10. Call To Action */}
            <div className="w-full">
                <CallToAction />
            </div>
        </main>
    )
}
