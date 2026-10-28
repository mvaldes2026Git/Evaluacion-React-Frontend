export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta-proyecto">
      <figure className="imagen-placeholder" aria-label="Vista previa del proyecto">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </figure>

      <section className="contenido-tarjeta">
        <header>
          <h3>{titulo}</h3>
        </header>
        <p>{descripcion}</p>
        <p>
          {enlace ? (
            <a
              href={enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-proyecto"
              aria-label={`Ver el proyecto ${titulo} en GitHub`}
            >
              Ver proyecto &rarr;
            </a>
          ) : (
            <span className="sin-enlace">Sin repositorio público</span>
          )}
        </p>
      </section>
    </article>
  );
}