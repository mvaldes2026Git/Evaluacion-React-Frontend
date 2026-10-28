export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta-proyecto">
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
            aria-label={`Ver el proyecto ${titulo} en GitHub`}
          >
            Ver proyecto &rarr;
          </a>
        ) : (
          <span>Sin repositorio público</span>
        )}
      </p>
    </article>
  );
}