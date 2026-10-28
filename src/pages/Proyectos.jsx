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
      titulo: 'Gestor de Tareas y Flujos Kanban',
      descripcion: 'Aplicación web interactiva para la administración de actividades y proyectos en equipo.',
      enlace: 'https://github.com/mvaldes2026Git/Evaluacion-React-Frontend.git'
    },
    {
      id: 3,
      titulo: 'Sistema de Gestión Académica',
      descripcion: 'Proyecto de software para la administración de asignaturas e historial de alumnos.',
      enlace: null
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