export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Mauricio Valdés Paredes. Todos los derechos reservados.</p>
    </footer>
  );
}