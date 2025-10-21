import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://changelog.servel.ink"
                target="_blank"
                className="btn-sm shadow-none text-gray-800  hover:bg-gray-50 hover:text-purple-600"
              >
                Changelog
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="btn-sm shadow-none text-gray-800  hover:bg-gray-50 hover:text-purple-600"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/waitlist"
                className="btn-sm bg-purple-600 font-bold text-white shadow-sm hover:bg-purple-700"
              >
                Join the Waitlist
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </header>
  );
}
