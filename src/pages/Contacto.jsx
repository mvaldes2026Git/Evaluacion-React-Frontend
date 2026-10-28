import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setError('Por favor, completa todos los campos obligatorios.');
      setEnviado(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      setEnviado(false);
      return;
    }

    setError('');
    setEnviado(true);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <article className="pagina-contacto">
      <header>
        <h1>Contacto</h1>
        <p>¿Tienes alguna pregunta o propuesta?</p>
        <p>¡Me encantaría saber de ti!</p>
      </header>

      <section className="contenedor-formulario" aria-label="Formulario de contacto directo">
        {enviado && (
          <p role="status" className="mensaje-exito">
            ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
          </p>
        )}

        {error && (
          <p role="alert" className="mensaje-error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend className="sr-only">Datos de contacto</legend>

            <p>
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </p>

            <p>
              <label htmlFor="email">Correo electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </p>

            <p>
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </p>

            <button type="submit">Enviar mensaje</button>
          </fieldset>
        </form>
      </section>
    </article>
  );
}