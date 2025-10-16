export const metadata = {
    title: "Careers - Servelink",
    description: "Join our team and help build the future of deployment. Explore open positions at Servelink.",
};

export default function Careers() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Join Our Team
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Help us build the future of deployment. We're looking for passionate developers and engineers to join our mission.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                            <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">No open positions</h3>
                        <p className="mt-2 text-gray-600">
                            We're not currently hiring, but we're always interested in meeting talented people.
                            Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <div className="mt-6">
                            <a
                                href="mailto:careers@servel.ink"
                                className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                            >
                                Send Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 rounded-lg bg-gray-50 p-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center">Why Work at Servelink?</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Fast-Paced Environment</h3>
                            <p className="mt-2 text-gray-600">Work on cutting-edge technology and see your impact immediately.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Remote-First</h3>
                            <p className="mt-2 text-gray-600">Work from anywhere in the world with flexible hours.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Competitive Benefits</h3>
                            <p className="mt-2 text-gray-600">Health insurance, stock options, and professional development budget.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
