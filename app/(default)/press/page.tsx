export const metadata = {
    title: "Press - Servelink",
    description: "Press releases, media kit, and news about Servelink deployment platform.",
};

export default function Press() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Press & Media
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Stay updated with the latest news and announcements from Servelink.
                    </p>
                </div>

                <div className="mt-20 space-y-8">
                    <div className="rounded-lg border border-gray-200 p-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">Servelink Raises $10M Series A</h3>
                                <p className="mt-2 text-gray-600">December 1, 2024</p>
                                <p className="mt-4 text-gray-700">
                                    Servelink announces $10M Series A funding round led by TechVentures to accelerate platform development and expand globally.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">Servelink Launches Python Support</h3>
                                <p className="mt-2 text-gray-600">November 15, 2024</p>
                                <p className="mt-4 text-gray-700">
                                    New Python deployment capabilities with support for Django, Flask, and FastAPI frameworks now available.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                            >
                                Read More
                            </a>
                        </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">Servelink Partners with Major Cloud Providers</h3>
                                <p className="mt-2 text-gray-600">October 30, 2024</p>
                                <p className="mt-4 text-gray-700">
                                    Strategic partnerships with AWS, Google Cloud, and Azure to provide seamless multi-cloud deployment options.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 rounded-lg bg-gray-50 p-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center">Media Kit</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Logos & Assets</h3>
                            <p className="mt-2 text-gray-600">Download our official logos and brand assets for media use.</p>
                            <a href="#" className="mt-4 inline-block text-purple-600 hover:text-purple-700">Download ZIP</a>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Press Releases</h3>
                            <p className="mt-2 text-gray-600">Access our latest press releases and company announcements.</p>
                            <a href="#" className="mt-4 inline-block text-purple-600 hover:text-purple-700">View All</a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Media Contact</h2>
                    <p className="mt-4 text-gray-600">
                        For media inquiries, please contact our press team at{" "}
                        <a href="mailto:press@servel.ink" className="text-purple-600 hover:text-purple-700">
                            press@servel.ink
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
