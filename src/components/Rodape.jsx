export default function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="container rodape__conteudo">
        <p>
          © {ano} Seu Nome Aqui — Portfólio construído com React, HTML e CSS.
        </p>
        <a href="#inicio">Voltar ao início</a>
      </div>
    </footer>
  )
}
