import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar py-5">
      <Link className="text-white no-underline hover:underline link" href="/">
        <h1 className="text-3xl font-bold">NextJs Practica</h1>
      </Link>
      <ul>
        <li>
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link href="/tienda" className="link">
            Tienda
          </Link>
        </li>
        <li>
          <Link href="/posts" className="link">
            Publicaciones
          </Link>
        </li>
      </ul>
    </nav>
  );
}
