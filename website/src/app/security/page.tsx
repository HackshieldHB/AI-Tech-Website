import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Security | Integra AITech",
    description: "Cybersecurity and infrastructure protection at Integra AITech.",
}

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Security Hub</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Integra AITech prioritizes enterprise cybersecurity. The protection of physical infrastructure data, telemetry, and platform integrity forms the foundation of our engineering ethos.
                    </p>
                </div>

                <div className="space-y-12 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Infrastructure Security</h2>
                        <p className="mb-4">Our platform operates utilizing modern, defense-in-depth security practices designed for high-availability enterprise environments:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Secure Cloud Architecture:</strong> Hosted on certified, enterprise-grade cloud environments to ensure isolation and elasticity.</li>
                            <li><strong>Network Segmentation:</strong> Physical and logical networking boundaries to contain resources and minimize attack surfaces.</li>
                            <li><strong>Monitoring and Logging:</strong> Continuous 24/7 analysis of platform ingress/egress to maintain strict operational awareness.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Protection</h2>
                        <p>We deploy robust encryption standards across our infrastructure. All sensitive data is fully encrypted both in-transit and at-rest. Furthermore, strict Identity and Access Management (IAM) controls ensure that internal capabilities are granted strictly on a need-to-know basis.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Secure Development Practices</h2>
                        <p>Software and AI models are developed in alignment with Secure Software Development Life Cycle (SSDLC) protocols. Extensive testing, dependency vulnerability scanning, and peer review processes are enforced before any deployment to production pipelines.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Incident Response</h2>
                        <p>In the event of anomalous access or suspected compromise, our automated monitoring systems immediately detect deviations. We maintain comprehensive Incident Response Playbooks to enable rapid triage, containment, and transparent communication.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsible Disclosure</h2>
                        <p>We deeply respect the work of independent security researchers. If you have identified a potential vulnerability within our domains or platforms, please report it to our security team. We ask that researchers do not exploit vulnerabilities or compromise user data during investigation.</p>
                        <p className="mt-4">Please submit reports to: <a href="mailto:security@aitech.id" className="text-primary hover:underline font-medium">security@aitech.id</a></p>
                    </section>
                </div>
            </div>
        </main>
    )
}
