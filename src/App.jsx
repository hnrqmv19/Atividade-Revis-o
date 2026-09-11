import { useEffect, useState } from "react"
import Cabecalho from "./components/Cabecalho.jsx"
import Menu from "./components/Menu.jsx"
import Sobre from "./components/Sobre.jsx"
import Atividades from "./components/Atividades.jsx"
import FormularioContato from "./components/FormularioContato.jsx"
import Rodape from "./components/Rodape.jsx"

const CHAVE_TEMA = "portfolio:tema"

function lerTemaSalvo() {
  if (typeof window === "undefined") return "claro"
  return window.localStorage.getItem(CHAVE_TEMA) ?? "claro"
}

export default function App() {
  const [tema, setTema] = useState(lerTemaSalvo)

  useEffect(() => {
    document.documentElement.setAttribute("data-tema", tema)
    window.localStorage.setItem(CHAVE_TEMA, tema)
  }, [tema])

  function alternarTema() {
    setTema((atual) => (atual === "claro" ? "escuro" : "claro"))
  }

  return (
    <div id="inicio">
      <Menu />
      <Cabecalho tema={tema} aoAlternarTema={alternarTema} />
      <main>
        <Sobre />
        <Atividades />
        <section id="contato" className="secao">
          <div className="container">
            <h2 className="secao__titulo">Contato</h2>
            <p className="secao__introducao">
              Envie uma mensagem sobre este portfólio (formulário de
              demonstração, sem envio real).
            </p>
            <FormularioContato />
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  )
}
