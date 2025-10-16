export const metadata = {
    title: "Terms of Service - Servelink",
    description: "Terms of Service for Servelink deployment platform. Read our terms and conditions.",
};

export default function Terms() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Terms of Service
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Last updated: December 16, 2024
                    </p>

                    <div className="mt-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
                            <p className="mt-4 text-gray-700">
                                By accessing and using Servelink ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">2. Use License</h2>
                            <p className="mt-4 text-gray-700">
                                Permission is granted to temporarily download one copy of the materials on Servelink's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                                <li>modify or copy the materials</li>
                                <li>use the materials for any commercial purpose or for any public display</li>
                                <li>attempt to reverse engineer any software contained on the website</li>
                                <li>remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">3. Service Availability</h2>
                            <p className="mt-4 text-gray-700">
                                Servelink strives to maintain 99.9% uptime but does not guarantee uninterrupted service. We reserve the right to modify, suspend, or discontinue the service at any time with or without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">4. User Responsibilities</h2>
                            <p className="mt-4 text-gray-700">
                                Users are responsible for:
                            </p>
                            <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                                <li>Maintaining the confidentiality of their account credentials</li>
                                <li>All activities that occur under their account</li>
                                <li>Ensuring their applications comply with applicable laws and regulations</li>
                                <li>Not using the service for illegal or unauthorized purposes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">5. Payment Terms</h2>
                            <p className="mt-4 text-gray-700">
                                Payment for services is due in advance. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing with 30 days notice to existing customers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">6. Limitation of Liability</h2>
                            <p className="mt-4 text-gray-700">
                                In no event shall Servelink or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Servelink's website, even if Servelink or a Servelink authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">7. Privacy Policy</h2>
                            <p className="mt-4 text-gray-700">
                                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">8. Termination</h2>
                            <p className="mt-4 text-gray-700">
                                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">9. Changes to Terms</h2>
                            <p className="mt-4 text-gray-700">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900">10. Contact Information</h2>
                            <p className="mt-4 text-gray-700">
                                If you have any questions about these Terms of Service, please contact us at{" "}
                                <a href="mailto:legal@servel.ink" className="text-purple-600 hover:text-purple-700">
                                    legal@servel.ink
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
