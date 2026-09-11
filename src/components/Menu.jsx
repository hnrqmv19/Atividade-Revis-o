const links = [
  { href: "#inicio", texto: "Início" },
  { href: "#sobre", texto: "Sobre" },
  { href: "#atividades", texto: "Atividades" },
  { href: "#contato", texto: "Contato" },
]

export default function Menu() {
  return (
    <nav className="menu" aria-label="Navegação principal">
      <div className="container">
        <ul className="menu__lista">
          {links.map((link) => (
            <li key={link.href}>
              <a className="menu__link" href={link.href}>
                {link.texto}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
