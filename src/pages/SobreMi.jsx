export default function SobreMi() {
  const intereses = [
    'Desarrollo web y tecnologías frontend',
    'Aprender nuevas herramientas y frameworks',
    'Construir proyectos que generen un impacto real'
  ];

  return (
    <article className="pagina-sobre-mi">
      <section className="presentacion" aria-labelledby="sobre-mi-title">
        <figure role="img" aria-label="Foto de perfil de Mauricio Valdés">
          <img
            src="/img/perfil.jpg"
            alt="Foto de Mauricio Valdés Paredes"
            style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }}
          />
        </figure>

        <header>
          <h1 id="sobre-mi-title">Sobre mí</h1>
        </header>

        <p>
          Soy <strong>Mauricio Valdés Paredes</strong>, estudiante de Ingeniería Civil Informática.
          Me apasiona el desarrollo web y me interesa crear soluciones tecnológicas que mejoren la experiencia de las personas.
        </p>
      </section>

      <section className="estudios" aria-labelledby="estudios-title">
        <h2 id="estudios-title">¿Qué estudio?</h2>
        <p>
          Estudio Ingeniería Civil Informática en el Instituto Tecnológico de la Universidad Católica de Temuco.
        </p>
      </section>

      <section className="intereses" aria-labelledby="intereses-title">
        <h2 id="intereses-title">¿Qué me interesa?</h2>
        <ul>
          {intereses.map((interes, index) => (
            <li key={index}>{interes}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}