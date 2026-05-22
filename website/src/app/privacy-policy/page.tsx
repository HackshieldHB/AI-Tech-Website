import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Integra AITech",
    description: "Integra AITech privacy policy and data protection guidelines.",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Privacy Policy</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Integra AITech respects your privacy and is committed to protecting the personal data collected through our website and digital enterprise services.
                    </p>
                </div>

                <div className="space-y-12 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We may collect various types of information from our users, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Contact information (name, email address, company name)</li>
                            <li>Website usage analytics and interaction data</li>
                            <li>Technical device and connection information</li>
                            <li>Communications submitted through forms or direct inquiries</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
                        <p className="mb-4">The information collected is strictly used for enterprise operations and service delivery, such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Responding to inquiries and support requests</li>
                            <li>Improving website functionality and user experience</li>
                            <li>Providing product information and relevant operational updates</li>
                            <li>Supporting ongoing customer relationships and service agreements</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
                        <p className="mb-4">We employ enterprise-grade security architecture to safeguard your data. Our protection measures include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>End-to-end encryption for transmitted data</li>
                            <li>Deployment on secure, compliant cloud infrastructure</li>
                            <li>Strictly restricted access controls prioritizing least-privilege principles</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
                        <p>We do not sell your personal information. However, trusted analytics or infrastructure service providers may process limited data strictly to maintain and improve our platform functionality, governed by signed data processing agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                        <p>We retain your data only as long as reasonably necessary to fulfill legitimate business purposes, comply with legal obligations, and enforce our agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Rights</h2>
                        <p>Under applicable regulations, you reserve the right to request access to your personal information, request corrections to inaccurate data, or request the deletion of your records from our systems.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
                        <p>If you have questions or concerns regarding this Privacy Policy or your personal data, please contact our compliance team at:</p>
                        <p className="mt-4"><a href="mailto:privacy@aitech.id" className="text-primary hover:underline font-medium">privacy@aitech.id</a></p>
                    </section>
                </div>
            </div>
        </main>
    )
}
