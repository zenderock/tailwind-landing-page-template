"use client";

export default function Pricing() {
    const payFree = () => {
        window.location.href = "https://lemonsqueezy.servel.ink/buy/f6a47da3-9ce5-4b1c-a59d-c625d315355a";
    }
    const payPro = () => {
        window.location.href = "https://lemonsqueezy.servel.ink/buy/15cf523c-bb20-4f24-bc85-5a976a642468";
    }
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-title text-center text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
                    <p className="text-body">Deploy your Laravel, Python, Node.js apps in minutes. Pay only for what you use.</p>
                </div>

                <div className="mt-20 grid gap-6 md:grid-cols-5 md:gap-0 dark:[--ui-soft-bg:var(--ui-bg)]">
                    <div className="card flex flex-col justify-between space-y-8 border md:col-span-2 md:my-[--card-radius] md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4 p-6 md:p-0">
                            <div>
                                <h2 className="text-title font-medium">Free</h2>
                                <span className="text-title my-3 block text-2xl font-semibold">€0 / mo</span>
                                <p className="text-sm">Free forever</p>
                            </div>
                            <button onClick={payFree} className="btn variant-outlined sz-md bg-white rounded-2xl cursor-not-allowed">
                                <span className="btn-label">Get Started</span>
                            </button>
                            <hr className="border-dashed" />
                            <ul className="list-outside list-image-[url(/dark-check.svg)] space-y-3 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                                <li>1 team</li>
                                <li>1 member</li>
                                <li>2 projects</li>
                                <li>100 MB RAM</li>
                                <li>0.3 CPU</li>
                                <li>Community support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white bg-ui dark:bg-ui-soft border shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--ui-border-color:theme(colors.gray.700/0.5)]">
                        <div className="grid gap-6 sm:grid-cols-2 p-6 md:p-0">
                            <div className="space-y-4 ">
                                <div>
                                    <h2 className="text-title font-medium">Pro</h2>
                                    <span className="text-title my-3 block text-4xl font-black text-transparent bg-gradient-to-bl from-purple-900 to-purple-300 bg-clip-text">€3 / mo</span>
                                    <p className="text-sm">500 MB RAM included</p>
                                </div>
                                <button onClick={payPro} className="btn variant-primary sz-md bg-purple-500/50 cursor-not-allowed text-white rounded-2xl">
                                    <span className="btn-label">Get Started</span>
                                </button>
                            </div>
                            <div>
                                <div className="text-title text-sm font-medium">Everything in Free plus:</div>
                                <ul className="text-title mt-4 list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-5 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                                    <li>Unlimited teams</li>
                                    <li>Unlimited members</li>
                                    <li>Unlimited projects</li>
                                    <li>Up to 8 GB RAM</li>
                                    <li>Up to 4 CPU</li>
                                    <li>Custom domains</li>
                                    <li>Priority support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-title text-center text-3xl font-semibold mb-12">Detailed Comparison</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white dark:bg-ui-soft rounded-lg overflow-hidden shadow-lg">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-800">
                                    <th className="text-left p-4 font-semibold text-title border-b dark:border-gray-700">Resource</th>
                                    <th className="text-center p-4 font-semibold text-title border-b dark:border-gray-700">Free</th>
                                    <th className="text-center p-4 font-semibold text-title border-b dark:border-gray-700">Pro (€3/mo)</th>
                                    <th className="text-center p-4 font-semibold text-title border-b dark:border-gray-700">Additional Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">Teams</td>
                                    <td className="p-4 text-center text-body">1</td>
                                    <td className="p-4 text-center text-body">Unlimited</td>
                                    <td className="p-4 text-center text-body">-</td>
                                </tr>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">Members</td>
                                    <td className="p-4 text-center text-body">1</td>
                                    <td className="p-4 text-center text-body">Unlimited</td>
                                    <td className="p-4 text-center text-body">-</td>
                                </tr>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">Projects</td>
                                    <td className="p-4 text-center text-body">2</td>
                                    <td className="p-4 text-center text-body">Unlimited</td>
                                    <td className="p-4 text-center text-body">-</td>
                                </tr>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">RAM</td>
                                    <td className="p-4 text-center text-body">100 MB</td>
                                    <td className="p-4 text-center text-body">500 MB</td>
                                    <td className="p-4 text-center text-purple-600 dark:text-purple-400 font-medium">+1€ / 500 MB</td>
                                </tr>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">CPU</td>
                                    <td className="p-4 text-center text-body">0.3</td>
                                    <td className="p-4 text-center text-body">1</td>
                                    <td className="p-4 text-center text-purple-600 dark:text-purple-400 font-medium">+2€ / CPU</td>
                                </tr>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">Traffic</td>
                                    <td className="p-4 text-center text-body">5 GB</td>
                                    <td className="p-4 text-center text-body">10 GB</td>
                                    <td className="p-4 text-center text-purple-600 dark:text-purple-400 font-medium">+1€ / 10 GB</td>
                                </tr>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">Storage</td>
                                    <td className="p-4 text-center text-body">100 MB</td>
                                    <td className="p-4 text-center text-body">10 GB</td>
                                    <td className="p-4 text-center text-purple-600 dark:text-purple-400 font-medium">+1€ / 10 GB</td>
                                </tr>
                                <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">Inactive Projects</td>
                                    <td className="p-4 text-center text-body text-xs">
                                        <span className="text-amber-600 dark:text-amber-400">Paused after 5 days</span>
                                        <br />
                                        <span className="text-red-600 dark:text-red-400">Deleted after 7 days</span>
                                    </td>
                                    <td className="p-4 text-center text-body">No deactivation</td>
                                    <td className="p-4 text-center text-body">-</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 font-medium text-title">Custom Domains</td>
                                    <td className="p-4 text-center text-body">-</td>
                                    <td className="p-4 text-center text-body">✓</td>
                                    <td className="p-4 text-center text-body">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-body text-sm mb-6">Accepted Payment Methods</p>
                        <div className="flex items-center justify-center gap-8 flex-wrap">
                            <div className="flex items-center justify-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-16 w-24 transition-transform hover:scale-105">
                                <img src="/images/visa-logo.png" alt="Visa" className="max-h-full max-w-full object-contain" />
                            </div>
                            <div className="flex items-center justify-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-16 w-24 transition-transform hover:scale-105">
                                <img src="/images/mastercard-logo.png" alt="Mastercard" className="max-h-full max-w-full object-contain" />
                            </div>
                            <div className="flex items-center justify-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-16 w-24 transition-transform hover:scale-105">
                                <img src="/images/mtn-mobile-money.png" alt="MTN Mobile Money" className="max-h-full max-w-full object-contain" />
                            </div>
                            <div className="flex items-center justify-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-16 w-24 transition-transform hover:scale-105">
                                <img src="/images/orange-money.png" alt="Orange Money" className="max-h-full max-w-full object-contain" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}