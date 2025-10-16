export const metadata = {
    title: "Deploying Laravel Applications with Servelink - Servelink Blog",
    description: "Learn how to deploy your Laravel applications in minutes with our step-by-step guide. From database migrations to queue workers, we cover everything you need to know.",
};

export default function BlogPost() {
    return (
        <article className="py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <a href="/blog" className="hover:text-purple-600">← Back to Blog</a>
                        <span className="mx-2">•</span>
                        <span>September 15, 2025</span>
                        <span className="mx-2">•</span>
                        <span>8 min read</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                        <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">Laravel</span>
                        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">PHP</span>
                        <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">Deployment</span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-6">
                        Deploying Laravel Applications with Servelink
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Learn how to deploy your Laravel applications in minutes with our step-by-step guide.
                        From database migrations to queue workers, we cover everything you need to know to get your Laravel app running in production.
                    </p>
                </div>

                {/* Author */}
                <div className="flex items-center mb-12 p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-purple-600 font-semibold">NG</span>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-900">NGOU PARE Ibrahim</div>
                        <div className="text-sm text-gray-600">Engineer @ Servelink</div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Deploying Laravel applications can be complex, especially when dealing with database migrations,
                        environment variables, and queue workers. With Servelink, we've simplified this process to just a few clicks.
                        In this comprehensive guide, we'll walk you through deploying a Laravel application from start to finish.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Prerequisites</h2>
                    <p className="text-gray-700 mb-4">
                        Before we begin, make sure you have the following:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                        <li>A Laravel application ready for deployment</li>
                        <li>A Servelink account (sign up for free if you haven't already)</li>
                        <li>Your application's environment variables configured</li>
                        <li>Database credentials ready</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 1: Connect Your Repository</h2>
                    <p className="text-gray-700 mb-4">
                        The first step is to connect your Laravel application's repository to Servelink.
                        We support GitHub, GitLab, and Bitbucket.
                    </p>

                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-400 text-sm ml-4">Terminal</span>
                        </div>
                        <pre className="text-green-400 text-sm">
                            <code>{`# Clone your Laravel repository
git clone https://github.com/yourusername/your-laravel-app.git
cd your-laravel-app

# Install dependencies
composer install --optimize-autoloader --no-dev

# Generate application key
php artisan key:generate`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 2: Configure Environment Variables</h2>
                    <p className="text-gray-700 mb-4">
                        Servelink automatically detects Laravel applications and provides a secure way to manage your environment variables.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-blue-700">
                                    <strong>Pro Tip:</strong> Never commit your .env file to version control.
                                    Servelink provides a secure environment variable management system.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 3: Database Configuration</h2>
                    <p className="text-gray-700 mb-4">
                        Servelink offers managed database services for MySQL and PostgreSQL.
                        Here's how to configure your Laravel application to use our managed database:
                    </p>

                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <pre className="text-green-400 text-sm">
                            <code>{`# In your Servelink dashboard, add these environment variables:
DB_CONNECTION=mysql
DB_HOST=your-db-host.servelink.com
DB_PORT=3306
DB_DATABASE=your-database-name
DB_USERNAME=your-username
DB_PASSWORD=your-secure-password`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 4: Queue Workers Configuration</h2>
                    <p className="text-gray-700 mb-4">
                        Laravel's queue system is essential for handling background jobs.
                        Servelink automatically manages queue workers for you.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    <strong>Important:</strong> Make sure to configure your queue driver to use Redis or database
                                    instead of the 'sync' driver for production.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 5: Deploy Your Application</h2>
                    <p className="text-gray-700 mb-4">
                        Once everything is configured, deploying is as simple as clicking a button in the Servelink dashboard.
                    </p>

                    <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-8">
                        <li>Go to your Servelink dashboard</li>
                        <li>Click "New Deployment"</li>
                        <li>Select your Laravel repository</li>
                        <li>Choose "Laravel" as your framework</li>
                        <li>Configure your build settings</li>
                        <li>Click "Deploy"</li>
                    </ol>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Post-Deployment Checklist</h2>
                    <p className="text-gray-700 mb-4">
                        After your application is deployed, make sure to complete these tasks:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Tasks</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Run database migrations: <code className="bg-gray-200 px-2 py-1 rounded text-sm">php artisan migrate</code>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Clear application cache: <code className="bg-gray-200 px-2 py-1 rounded text-sm">php artisan cache:clear</code>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Optimize for production: <code className="bg-gray-200 px-2 py-1 rounded text-sm">php artisan optimize</code>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                Test your application thoroughly
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monitoring and Maintenance</h2>
                    <p className="text-gray-700 mb-4">
                        Servelink provides comprehensive monitoring for your Laravel application:
                    </p>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                        <li>Real-time application logs</li>
                        <li>Performance metrics and analytics</li>
                        <li>Database query monitoring</li>
                        <li>Queue job monitoring</li>
                        <li>Error tracking and alerting</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
                    <p className="text-gray-700 mb-6">
                        Deploying Laravel applications with Servelink is straightforward and efficient.
                        Our platform handles all the complexity of infrastructure management, allowing you to focus on building great applications.
                    </p>

                    <p className="text-gray-700 mb-8">
                        If you have any questions or need help with your Laravel deployment,
                        don't hesitate to reach out to our support team at <a href="mailto:support@servel.ink" className="text-purple-600 hover:text-purple-700">support@servel.ink</a>.
                    </p>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">Ready to deploy your Laravel app?</h3>
                        <p className="text-purple-700 mb-4">
                            Get started with Servelink today and deploy your Laravel application in minutes.
                        </p>
                        <a
                            href="/pricing"
                            className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                        >
                            Start Free Trial
                        </a>
                    </div>
                </div>

                {/* Author Bio */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex items-start">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6">
                            <span className="text-purple-600 font-semibold text-lg">NG</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">NGOU PARE Ibrahim</h3>
                            <p className="text-gray-600 mb-2">Engineer @ Servelink</p>
                            <p className="text-gray-700">
                                NGOU PARE Ibrahim is a Laravel expert with over 2 years of experience in PHP development.
                                He specializes in application architecture and deployment strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
