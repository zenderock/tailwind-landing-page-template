import Script from "next/script";

export default function CheckoutPage() {
    return (
        <>
            <Script src="https://app.lemonsqueezy.com/js/lemon.js" />

            <div className="container py-20 mx-auto">
                <h1 className="text-4xl mb-10">Checkout</h1>
                <a href="https://[STORE].lemonsqueezy.com/checkout/buy/[VARIANT_ID]" className="lemonsqueezy-button">Purchase my Product</a>

            </div>
        </>
    );
}
