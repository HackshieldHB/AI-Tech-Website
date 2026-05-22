import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/Card"

export default function TechnologyPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Core Technologies"
                    subtitle="Discover the machine learning architectures and data pipelines that distinguish our platform from legacy O&M systems."
                />

                <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
                    <Card className="p-8">
                        <h3 className="text-2xl font-bold font-display text-white mb-4">Computer Vision (Drone & CCTV)</h3>
                        <p className="text-muted-foreground mb-4">We employ customized state-of-the-art visual models trained on millions of telecom-specific images.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                            <li><strong className="text-secondary-light">YOLOv8 & SSD:</strong> Ultra-fast edge inference for real-time intrusion and safety gear (PPE) detection.</li>
                            <li><strong className="text-secondary-light">Vision Transformers (ViT):</strong> High-accuracy analysis of high-res drone photography for micro-crack and rust propagation detection.</li>
                        </ul>
                    </Card>

                    <Card className="p-8">
                        <h3 className="text-2xl font-bold font-display text-white mb-4">Predictive Analytics</h3>
                        <p className="text-muted-foreground mb-4">Moving from reactive repairs to guaranteed uptime via timeseries forecasting.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                            <li><strong className="text-secondary-light">LSTM Neural Networks:</strong> Identifying complex degradation patterns across multivariate sensor data (battery voltage + temperature).</li>
                            <li><strong className="text-secondary-light">Gradient Boosting (XGBoost):</strong> Feature importance modeling for root-cause analysis on massive datasets.</li>
                        </ul>
                    </Card>

                    <Card className="p-8">
                        <h3 className="text-2xl font-bold font-display text-white mb-4">Optimization Algorithms</h3>
                        <p className="text-muted-foreground mb-4">Maximizing resource allocation for fiber deployment and field tech dispatching.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                            <li><strong className="text-secondary-light">Graph Neural Networks:</strong> For highly complex, multi-constrained shortest-path fiber designs.</li>
                            <li><strong className="text-secondary-light">Reinforcement Learning:</strong> Autonomous dispatch algorithms that continuously improve dispatching efficiency reducing drive time.</li>
                        </ul>
                    </Card>

                    <Card className="p-8">
                        <h3 className="text-2xl font-bold font-display text-white mb-4">Data Architecture</h3>
                        <p className="text-muted-foreground mb-4">Petabyte-scale enterprise infrastructure handling high-frequency telemetry.</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                            <li><strong className="text-secondary-light">Edge-to-Cloud Continuum:</strong> On-site IoT gateways processing vision data locally to preserve bandwidth.</li>
                            <li><strong className="text-secondary-light">Streaming Engine:</strong> Apache Kafka digesting over 5M events/second globally with millisecond latency.</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    )
}
