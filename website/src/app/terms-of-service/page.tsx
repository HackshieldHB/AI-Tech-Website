import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Integra AITech",
    description: "Terms of Service for using the Integra AITech website and platform.",
}

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Terms of Service</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        These terms govern the use of the Integra AITech website, enterprise platforms, and related digital services.
                    </p>
                </div>

                <div className="space-y-12 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Use of Website</h2>
                        <p>By accessing this website, users agree to use the site only for lawful purposes. Any attempt to compromise the security, infrastructure, or operational integrity of the site is strictly prohibited.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
                        <p>All content presented on this platform—including but not limited to text, visuals, branding, graphics, and software concepts—are the exclusive intellectual property of Integra AITech. Unauthorized reproduction or distribution is prohibited.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Platform Information</h2>
                        <p>Descriptions of products, services, architectures, and operations provided on this site are for informational purposes. Functional specifics, features, and service capabilities are subject to evolve and may change without prior notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
                        <p>Integra AITech shall not be held responsible or liable for any direct, indirect, or consequential damages arising from the use or misuse of the information and materials provided on this website.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. External Links</h2>
                        <p>Our website may contain hyperlinks to external resources or third-party platforms. Integra AITech does not endorse or govern the content of these external entities and isn't accountable for their practices or policies.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Updates to Terms</h2>
                        <p>We reserve the right to update or modify these Terms of Service periodically to adapt to newly established operational and legal paradigms. Continued use of the website following any changes constitutes acceptance of the modified terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
                        <p>This agreement, and any disputes arising from the use of this website, shall be governed by and construed in accordance with the applicable laws of the Republic of Indonesia.</p>
                    </section>
                </div>
            </div>
        </main>
    )
}
