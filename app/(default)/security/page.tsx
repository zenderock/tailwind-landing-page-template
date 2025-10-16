export const metadata = {
    title: "Security - Servelink",
    description: "Learn about Servelink's security measures, compliance, and how we protect your applications and data.",
};

export default function Security() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Security & Compliance
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Your security is our priority. Learn about our comprehensive security measures and compliance standards.
                    </p>
                </div>

                <div className="mt-20 space-y-16">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 p-8">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Data Encryption</h3>
                            <p className="mt-2 text-gray-600">
                                All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your application code and sensitive data are protected with industry-standard encryption.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-8">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Infrastructure Security</h3>
                            <p className="mt-2 text-gray-600">
                                Our infrastructure is built on secure cloud providers with multiple layers of security, including network isolation, access controls, and continuous monitoring.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-8">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Continuous Monitoring</h3>
                            <p className="mt-2 text-gray-600">
                                24/7 security monitoring with automated threat detection, real-time alerts, and incident response capabilities to ensure your applications stay secure.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-8">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Access Controls</h3>
                            <p className="mt-2 text-gray-600">
                                Multi-factor authentication, role-based access controls, and regular access reviews ensure only authorized personnel can access your data and systems.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Compliance & Certifications</h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">SOC 2 Type II</h3>
                                <p className="mt-2 text-gray-600">Comprehensive security controls and processes audited by independent third parties.</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">GDPR Compliant</h3>
                                <p className="mt-2 text-gray-600">Full compliance with European data protection regulations and privacy requirements.</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                    <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">ISO 27001</h3>
                                <p className="mt-2 text-gray-600">International standard for information security management systems.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Security Features</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">Application Security</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        DDoS Protection
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Web Application Firewall (WAF)
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Automatic SSL Certificates
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Vulnerability Scanning
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">Data Protection</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center">
                                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Automated Backups
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Data Residency Controls
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Secure Key Management
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="mr-2 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Audit Logging
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-purple-50 p-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Security Incident Response</h2>
                        <p className="mt-4 text-center text-gray-700">
                            We have a dedicated security team and established incident response procedures to quickly address any security concerns. If you discover a security vulnerability, please report it to our security team.
                        </p>
                        <div className="mt-8 text-center">
                            <a
                                href="mailto:security@servel.ink"
                                className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                            >
                                Report Security Issue
                            </a>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Questions About Security?</h2>
                        <p className="mt-4 text-gray-600">
                            Our security team is available to answer any questions about our security measures and compliance.
                        </p>
                        <div className="mt-6">
                            <a
                                href="mailto:security@servel.ink"
                                className="text-purple-600 hover:text-purple-700 font-medium"
                            >
                                security@servel.ink
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
