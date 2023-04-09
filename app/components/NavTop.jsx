import Link from "next/link";
import Image from "next/image";

export default function NavTop() {
  return (
    <nav className="nav-top">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <Link href="/" className="nav-top-logo">
          <Image
            src="https://bubblybeaks.com/wp-content/uploads/BubblyBeaks-Logo-2022-black.png"
            alt="Logo"
            height="100"
            width="300"
          />
        </Link>
        <li>
          <Link href="/test">saved</Link>
        </li>
      </ul>
    </nav>
  );
}
