import TarjetaProyecto from '../components/TarjetaProyecto';

export default function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: 'Evaluación React Frontend - Portafolio',
      descripcion: 'Aplicación SPA creada con React y React Router v6. Estructurada con semántica HTML5 pura (0 divs) y soporte WAI-ARIA.',
      enlace: 'https://github.com/mvaldes2026Git/Evaluacion-React-Frontend.git'
    },
    {
      id: 2,
      titulo: 'App de rutas mediante gráfos',
      descripcion: 'App para poder medir todas las rutas posibles entre dos puntos mediante el uso de gráfos con Python.',
      enlace: 'https://github.com/PieroSotoUCT/rutas-grafos.git'
    }
  ];

  return (
    <article className="pagina-proyectos">
      <header>
        <h1>Mis Proyectos</h1>
        <p>Algunos de los proyectos en los que he trabajado.</p>
      </header>

      <section className="lista-proyectos" aria-label="Colección de proyectos desarrollados">
        <ul>
          {listaProyectos.map((proyecto) => (
            <li key={proyecto.id}>
              <TarjetaProyecto
                titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                enlace={proyecto.enlace}
              />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}