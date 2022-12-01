// Exportam functia direct, fara cuvantul cheie default.
export function Navigation() {
  // Functia returneaza HTML-ul ce va fi afisat pe ecran.
  return (
    <nav>
      <img src="https://www.itschool.ro/images/logo-itschool-light.svg" alt="Logo It School" />
      <ul>
        <li>
          <a href="#despre-noi">Despre noi</a>
        </li>
        <li>
          <a href="#cursuri">Cursuri IT School</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export function ExtraCmp() {
  return (
    <h1>Extra</h1>
  )
}