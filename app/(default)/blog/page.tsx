export const metadata = {
    title: "Blog - Servelink",
    description: "Latest news, tutorials, and insights about deployment, development, and Servelink platform updates.",
};

export default function Blog() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Servelink Blog
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Stay updated with the latest deployment tips, platform updates, and developer insights.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <article className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl mb-2">🚀</div>
                                <div className="text-sm font-medium text-purple-700">Laravel</div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>September 15, 2025</span>
                                <span className="mx-2">•</span>
                                <span>8 min read</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                                Deploying Laravel Applications with Servelink
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Learn how to deploy your Laravel applications in minutes with our step-by-step guide. From database migrations to queue workers, we cover everything you need to know.
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">Laravel</span>
                                    <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">PHP</span>
                                </div>
                                <a href="/blog/deploying-laravel-applications" className="text-purple-600 hover:text-purple-700 text-sm font-medium">Read more →</a>
                            </div>
                        </div>
                    </article>

                    <article className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl mb-2">🐍</div>
                                <div className="text-sm font-medium text-green-700">Python</div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>September 10, 2025</span>
                                <span className="mx-2">•</span>
                                <span>12 min read</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors">
                                Python Deployment Best Practices
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Discover the best practices for deploying Django, Flask, and FastAPI applications. Learn about virtual environments, dependency management, and production optimizations.
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">Django</span>
                                    <span className="inline-block rounded-full bg-teal-100 px-2 py-1 text-xs text-teal-800">FastAPI</span>
                                </div>
                                <a href="/blog/python-deployment-best-practices" className="text-green-600 hover:text-green-700 text-sm font-medium">Read more →</a>
                            </div>
                        </div>
                    </article>

                    <article className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl mb-2">⚡</div>
                                <div className="text-sm font-medium text-orange-700">Node.js</div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>September 5, 2025</span>
                                <span className="mx-2">•</span>
                                <span>15 min read</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                                Node.js Microservices Architecture
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Building and deploying microservices with Node.js and Servelink's container support. Learn about service discovery, load balancing, and monitoring.
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <span className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">Microservices</span>
                                    <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs text-red-800">Docker</span>
                                </div>
                                <a href="/blog/nodejs-microservices-architecture" className="text-orange-600 hover:text-orange-700 text-sm font-medium">Read more →</a>
                            </div>
                        </div>
                    </article>

                    <article className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl mb-2">🗄️</div>
                                <div className="text-sm font-medium text-blue-700">Database</div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>September 28, 2025</span>
                                <span className="mx-2">•</span>
                                <span>10 min read</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                Database Scaling Strategies
                            </h3>
                            <p className="mt-2 text-gray-600">
                                How to scale your databases effectively with Servelink's managed database services. Master replication, sharding, and performance optimization.
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">PostgreSQL</span>
                                    <span className="inline-block rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800">MySQL</span>
                                </div>
                                <a href="/blog/database-scaling-strategies" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Read more →</a>
                            </div>
                        </div>
                    </article>

                    <article className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl mb-2">🔄</div>
                                <div className="text-sm font-medium text-yellow-700">CI/CD</div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>September 20, 2025</span>
                                <span className="mx-2">•</span>
                                <span>6 min read</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-yellow-600 transition-colors">
                                CI/CD Pipeline Optimization
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Optimize your continuous integration and deployment pipelines for faster releases. Learn about parallel builds, caching strategies, and automated testing.
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <span className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">GitHub Actions</span>
                                    <span className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">Docker</span>
                                </div>
                                <a href="/blog/cicd-pipeline-optimization" className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">Read more →</a>
                            </div>
                        </div>
                    </article>

                    <article className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl mb-2">🔒</div>
                                <div className="text-sm font-medium text-pink-700">Security</div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>September 15, 2025</span>
                                <span className="mx-2">•</span>
                                <span>9 min read</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 hover:text-pink-600 transition-colors">
                                Security Best Practices
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Essential security practices for deploying applications in production environments. Learn about SSL certificates, environment variables, and access controls.
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <span className="inline-block rounded-full bg-pink-100 px-2 py-1 text-xs text-pink-800">SSL</span>
                                    <span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">Security</span>
                                </div>
                                <a href="/blog/security-best-practices" className="text-pink-600 hover:text-pink-700 text-sm font-medium">Read more →</a>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
        </section>
    );
}
