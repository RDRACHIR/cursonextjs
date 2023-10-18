import Link from "next/link";

export const metadata = {
  title: "Oficial Store",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>

        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>Productos</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
