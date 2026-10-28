export default function Habilidades() {
  const tecnologias = [
    { id: 'html', nombre: 'HTML', nivel: '90%' },
    { id: 'css', nombre: 'CSS', nivel: '85%' },
    { id: 'js', nombre: 'JavaScript', nivel: '85%' },
    { id: 'react', nombre: 'React', nivel: '70%' },
    { id: 'ts', nombre: 'TypeScript', nivel: '60%' },
    { id: 'python', nombre: 'Python', nivel: '50%' }
  ];

  const herramientas = ['Git', 'GitHub', 'VS Code', 'Figma', 'Node.js'];

  return (
    <article className="pagina-habilidades">
      <header>
        <h1>Habilidades y Lenguajes</h1>
      </header>

      <section className="tecnologias" aria-labelledby="tecnologias-title">
        <h2 id="tecnologias-title">Tecnologías</h2>
        <ul className="lista-tecnologias">
          {tecnologias.map((tec) => (
            <li key={tec.id}>
              <article>
                <h3>{tec.nombre}</h3>
                <p>Nivel: {tec.nivel}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="herramientas" aria-labelledby="herramientas-title">
        <h2 id="herramientas-title">Herramientas</h2>
        <ul className="lista-herramientas">
          {herramientas.map((herramienta, index) => (
            <li key={index}>
              <span className="badge-herramienta">{herramienta}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}