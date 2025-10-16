export const metadata = {
    title: "Features - Servelink",
    description: "Discover all the powerful features of Servelink deployment platform for Laravel, Python, Node.js and other fullstack applications.",
};

export default function Features() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Everything you need to deploy
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Servelink provides all the tools and features you need to deploy, manage, and scale your applications effortlessly.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                            <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Lightning Fast Deployments</h3>
                        <p className="mt-2 text-gray-600">
                            Deploy your applications in seconds with our optimized infrastructure and global CDN.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Zero-Config Setup</h3>
                        <p className="mt-2 text-gray-600">
                            Automatic detection and configuration for Laravel, Python, Node.js, and other frameworks.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Database Management</h3>
                        <p className="mt-2 text-gray-600">
                            Built-in support for MySQL, PostgreSQL, MongoDB with automatic backups and scaling.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                            <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Real-time Monitoring</h3>
                        <p className="mt-2 text-gray-600">
                            Monitor your applications with detailed metrics, logs, and performance analytics.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Enterprise Security</h3>
                        <p className="mt-2 text-gray-600">
                            Bank-grade security with SSL certificates, DDoS protection, and compliance standards.
                        </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                            <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Custom Domains</h3>
                        <p className="mt-2 text-gray-600">
                            Use your own domain with automatic SSL certificates and custom configurations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
