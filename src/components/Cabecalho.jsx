import TemaToggle from "./TemaToggle.jsx"

/**
 * Cabeçalho da homepage: identidade do autor e acesso rápido às atividades.
 * Substitua os textos de exemplo pelos seus dados reais.
 */
export default function Cabecalho({ tema, aoAlternarTema }) {
  return (
    <header className="cabecalho">
      <div className="container cabecalho__conteudo">
        <div className="cabecalho__identidade">
          <div>
            <h1 className="cabecalho__titulo">Henrique Vieira</h1>
            <p className="cabecalho__meta">
              Desenvolvimento Full Stack 2026.2
            </p>
            <p className="cabecalho__descricao">
              Portfólio acadêmico com as 30 entregas práticas do roteiro de
              revisão: HTML, CSS, React, Git e Vercel.
            </p>
          </div>
        </div>
        <div className="cabecalho__acoes">
          <a className="botao" href="#atividades">
            Ver atividades
          </a>
          <TemaToggle tema={tema} aoAlternarTema={aoAlternarTema} />
        </div>
      </div>
    </header>
  )
}
