import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src="/images/logo.png" alt="Logo" width={130} height={100} />
    </Link>
  );
}
