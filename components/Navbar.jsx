import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar py-5">
      <Link className="text-white no-underline hover:underline" href="/">
        <h1 className="text-3xl font-bold">NextJs Practica</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Publicaciones</Link>
        </li>
      </ul>
    </nav>
  );
}
