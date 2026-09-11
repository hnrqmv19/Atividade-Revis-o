export default function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="container rodape__conteudo">
        <p>
          © {ano} Henrique Vieira
        </p>
        <a href="#inicio">Voltar ao início</a>
      </div>
    </footer>
  )
}
