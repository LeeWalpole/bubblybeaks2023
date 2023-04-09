import Link from "next/link";

export default function NavBottom() {
  return (
    <nav className="nav-bottom">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/list">Lists</Link>
        </li>
        <li>
          <Link href="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}
