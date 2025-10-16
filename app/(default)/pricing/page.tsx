import Link from 'next/link';

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
                    <p className="text-body">Deploy Laravel, Python, Node.js apps in minutes. Pay only for what you use, scale when you need it.</p>
                </div>

                <div className="mt-20 grid gap-6 md:grid-cols-5 md:gap-0 dark:[--ui-soft-bg:var(--ui-bg)]">
                    <div className="card flex flex-col justify-between space-y-8 border md:col-span-2 md:my-[--card-radius] md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-title font-medium">Hobby Plan</h2>
                                <span className="text-title my-3 block text-2xl font-semibold">$0 / mo</span>
                                <p className="text-sm">Free forever</p>
                            </div>
                            <button onClick={payFree} className="btn variant-outlined sz-md bg-white rounded-2xl">
                                <span className="btn-label"> Get Started</span>
                            </button>
                            <hr className="border-dashed" />
                            <ul className="list-outside list-image-[url(/dark-check.svg)] space-y-3 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                                <li>Basic Analytics Dashboard</li>
                                <li>Illimited projects</li>
                                <li>Email and Chat Support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white bg-ui dark:bg-ui-soft border shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--ui-border-color:theme(colors.gray.700/0.5)]">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-title font-medium">Pay as you Go</h2>
                                    <span className="text-title my-3 block text-4xl font-black text-transparent bg-gradient-to-bl from-purple-900 to-purple-300 bg-clip-text">$1 / mo</span>
                                    <p className="text-sm">Pro Plan</p>
                                </div>
                                <button onClick={payPro} className="btn variant-primary sz-md bg-purple-500 text-white rounded-2xl">
                                    <span className="btn-label">Get Started</span>
                                </button>
                            </div>
                            <div>
                                <div className="text-title text-sm font-medium">Everything in free plus :</div>
                                <ul className="text-title mt-4 list-outside list-image-[url(/dark-check.svg)] space-y-3 pl-5 text-sm *:pl-2 dark:list-image-[url(/check.svg)]">
                                    <li>Advanced Analytics Dashboard</li>
                                    <li>Illimited projects</li>
                                    <li>Email and Chat Support</li>
                                    <li>20+ members</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}