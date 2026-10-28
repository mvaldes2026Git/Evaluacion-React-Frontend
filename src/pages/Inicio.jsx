import { Link } from 'react-router-dom';

export default function Inicio() {
  const tarjetasDestacadas = [
    { id: 1, icono: '</>', titulo: 'Desarrollo Frontend' },
    { id: 2, icono: '💻', titulo: 'Proyectos Reales' },
    { id: 3, icono: '👤', titulo: 'Aprendizaje Continuo' },
    { id: 4, icono: '★', titulo: 'Compromiso y Pasión' }
  ];

  return (
    <article className="pagina-inicio">
      <section className="hero" aria-labelledby="hero-title">
        <header>
          <h1 id="hero-title">Hola, soy Mauricio Valdés Paredes</h1>
          <h2>Desarrollador Frontend</h2>
        </header>

        <p>
          Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí,
          mis habilidades y proyectos.
        </p>

        <p>
          <Link to="/proyectos" className="btn-explorar" aria-label="Explorar sección de proyectos">
            Explorar
          </Link>
        </p>

        <figure role="img" aria-label="Imagen de presentación de Mauricio Valdés">
          <img
            src="/img/presentacion.jpg"
            alt="Presentación de Mauricio Valdés Paredes"
          />
        </figure>
      </section>

      <section className="destacados" aria-label="Aspectos destacados del perfil">
        <ul className="grid-destacados">
          {tarjetasDestacadas.map((card) => (
            <li key={card.id}>
              <article>
                <span aria-hidden="true">{card.icono}</span>
                <h3>{card.titulo}</h3>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}