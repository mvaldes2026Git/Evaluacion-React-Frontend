import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <article className="pagina-not-found" role="region" aria-labelledby="not-found-title">
      <header>
        <h1 id="not-found-title">404 - Página no encontrada</h1>
      </header>
      <p>La ruta a la que intentas acceder no existe o ha sido movida.</p>
      <p>
        <Link to="/" aria-label="Volver a la página principal de inicio">
          Volver al Inicio
        </Link>
      </p>
    </article>
  );
}