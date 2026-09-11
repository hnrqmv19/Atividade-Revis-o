const classePorStatus = {
  Concluída: "cartao__status--concluida",
  "Em andamento": "cartao__status--em-andamento",
  Planejada: "cartao__status--planejada",
}

/**
 * CardAtividade recebe todos os dados de uma entrega via props e não conhece
 * a lista completa — apenas representa um item.
 */
export default function CardAtividade({ atividade, aoAbrirDetalhes }) {
  const { numero, titulo, descricao, tecnologia, status } = atividade

  return (
    <article className="cartao">
      <div className="cartao__topo">
        <span className="cartao__numero">{String(numero).padStart(2, "0")} / 30</span>
        <span className={`cartao__status ${classePorStatus[status] ?? ""}`}>
          {status}
        </span>
      </div>
      <h3 className="cartao__titulo">{titulo}</h3>
      <p className="cartao__descricao">{descricao}</p>
      <div className="cartao__rodape">
        <span className="cartao__tecnologia">{tecnologia}</span>
        <button
          type="button"
          className="botao botao--secundario"
          onClick={() => aoAbrirDetalhes(atividade)}
        >
          Ver atividade
        </button>
      </div>
    </article>
  )
}
