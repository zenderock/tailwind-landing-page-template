import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="text-title mb-12 text-center text-3xl font-semibold md:text-4xl lg:text-5xl">Get in touch with our team</h1>
                <div data-shade="950" className="relative grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between p-[--card-padding] sm:p-12">
                        <div>
                            <h3 className="text-title mb-3">General Support</h3>
                            <a href="mailto:support@servel.ink" className="link variant-animated intent-primary my-3 text-2xl">support@servel.ink</a>
                            <p className="mt-3 text-sm">24/7 deployment assistance</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-[--card-padding] sm:p-12">
                        <div>
                            <h3 className="text-title mb-3">Enterprise Sales</h3>
                            <a href="mailto:sales@servel.ink" className="link variant-animated intent-primary my-3 text-2xl">sales@servel.ink</a>
                            <p className="mt-3 text-sm">Custom deployment solutions</p>
                        </div>
                    </div>
                </div>
                <div className="h-3 invert [--stripes-color:theme(colors.white/0.15)] [background-image:linear-gradient(-45deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] dark:invert-0"></div>
                <div className="border px-4 py-12 lg:px-0 lg:py-24">
                    <form action="" className="lg:card variant-mixed mx-auto max-w-lg sm:p-16">
                        <div>
                            <h3 className="text-title text-xl font-semibold">Start your deployment journey</h3>
                            <p className="mt-4 text-sm">Tell us about your project and we'll help you deploy it with Servelink. Whether it's Laravel, Python, or Node.js, we've got you covered.</p>
                        </div>

                        <div className="mt-12 space-y-4">
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                    htmlFor="name"
                                >
                                    Full name
                                </label>
                                <input
                                    id="name"
                                    className="form-input w-full py-2"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                    htmlFor="email"
                                >
                                    Work Email
                                </label>
                                <input
                                    id="email"
                                    className="form-input w-full py-2"
                                    type="email"
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                    htmlFor="framework"
                                >
                                    Framework/Technology
                                </label>
                                <select
                                    id="framework"
                                    name="framework"
                                    className="form-input w-full py-2"
                                >
                                    <option value="">Select your framework</option>
                                    <option value="laravel">Laravel (PHP)</option>
                                    <option value="django">Django (Python)</option>
                                    <option value="flask">Flask (Python)</option>
                                    <option value="fastapi">FastAPI (Python)</option>
                                    <option value="nodejs">Node.js</option>
                                    <option value="react">React</option>
                                    <option value="nextjs">Next.js</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                    htmlFor="project"
                                >
                                    Project Description
                                </label>
                                <input
                                    id="project"
                                    className="form-input w-full py-2"
                                    type="text"
                                    placeholder="Brief description of your project"
                                />
                            </div>

                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                    htmlFor="deployment"
                                >
                                    Deployment Type
                                </label>
                                <select
                                    id="deployment"
                                    name="deployment"
                                    className="form-input w-full py-2"
                                >
                                    <option value="">Select deployment type</option>
                                    <option value="web-app">Web Application</option>
                                    <option value="api">API/Backend</option>
                                    <option value="fullstack">Fullstack App</option>
                                    <option value="microservice">Microservice</option>
                                    <option value="static">Static Site</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                    htmlFor="msg"
                                >
                                    Additional Requirements
                                </label>
                                <textarea
                                    id="msg"
                                    className="form-input w-full py-2"
                                    rows={4}
                                    placeholder="Tell us about your specific needs, database requirements, scaling needs, etc."
                                ></textarea>
                            </div>

                            <div className="mt-6">
                                <button className="btn w-full bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
                                    Start Deployment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}