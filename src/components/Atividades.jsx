import { useMemo, useState } from "react"
import atividades from "../data/atividades.js"
import CardAtividade from "./CardAtividade.jsx"
import Filtro from "./Filtro.jsx"
import Busca from "./Busca.jsx"
import Progresso from "./Progresso.jsx"
import ModalDetalhes from "./ModalDetalhes.jsx"

export default function Atividades() {
  const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState("Todos")
  const [termoBusca, setTermoBusca] = useState("")
  const [atividadeAberta, setAtividadeAberta] = useState(null)

  const atividadesFiltradas = useMemo(() => {
    const termo = termoBusca.trim().toLowerCase()

    return atividades.filter((item) => {
      const combinaTecnologia =
        tecnologiaSelecionada === "Todos" || item.tecnologia === tecnologiaSelecionada

      const combinaBusca =
        termo === "" ||
        item.titulo.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo)

      return combinaTecnologia && combinaBusca
    })
  }, [tecnologiaSelecionada, termoBusca])

  return (
    <section id="atividades" className="secao">
      <div className="container">
        <div className="secao__cabecalho">
          <div>
            <h2 className="secao__titulo">30 atividades</h2>
            <p className="secao__introducao">
              Resultados numerados de 1 a 30, produzidos com HTML, CSS, React,
              Git e Vercel ao longo do roteiro de revisão.
            </p>
          </div>
        </div>

        <Progresso atividades={atividades} />

        <div className="controles">
          <Filtro
            selecionado={tecnologiaSelecionada}
            aoSelecionar={setTecnologiaSelecionada}
          />
          <Busca termo={termoBusca} aoDigitar={setTermoBusca} />
        </div>

        {atividadesFiltradas.length === 0 ? (
          <p className="busca__vazio" role="status">
            Nenhuma atividade encontrada para os filtros selecionados.
          </p>
        ) : (
          <div className="grade-atividades">
            {atividadesFiltradas.map((atividade) => (
              <CardAtividade
                key={atividade.id}
                atividade={atividade}
                aoAbrirDetalhes={setAtividadeAberta}
              />
            ))}
          </div>
        )}
      </div>

      {atividadeAberta && (
        <ModalDetalhes
          atividade={atividadeAberta}
          aoFechar={() => setAtividadeAberta(null)}
        />
      )}
    </section>
  )
}
