export const metadata = {
    title: "About - Servelink",
    description: "Learn about Servelink's mission to simplify deployment for developers worldwide.",
};

export default function About() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        About Servelink
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        We're on a mission to make deployment as simple as pushing code.
                    </p>
                </div>

                <div className="mt-20 space-y-16">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Servelink was born from the frustration of complex deployment processes. We believe that deploying applications should be as simple as pushing code to a repository. Our platform eliminates the complexity of infrastructure management, allowing developers to focus on what they do best: building amazing applications.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                We envision a world where every developer, regardless of their experience level, can deploy and scale their applications effortlessly. From Laravel to Python, Node.js to React, we're building the deployment platform that works with your favorite technologies.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center">Our Values</h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                    <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Simplicity</h3>
                                <p className="mt-2 text-gray-600">We believe in making complex things simple and accessible to everyone.</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Reliability</h3>
                                <p className="mt-2 text-gray-600">Your applications deserve a platform you can trust with 99.9% uptime.</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Community</h3>
                                <p className="mt-2 text-gray-600">We're building a community where developers help each other succeed.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Join Our Journey</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Ready to simplify your deployment process? Join thousands of developers who trust Servelink to power their applications.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/pricing"
                                className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
