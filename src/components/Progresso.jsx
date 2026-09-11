/**
 * O total de concluídas é sempre calculado a partir dos dados recebidos —
 * nunca guardado em estado separado, para não haver dessincronização.
 */
export default function Progresso({ atividades }) {
  const total = atividades.length
  const concluidas = atividades.filter((item) => item.status === "Concluída").length
  const percentual = total === 0 ? 0 : Math.round((concluidas / total) * 100)

  return (
    <div className="progresso">
      <span className="progresso__texto">
        {concluidas} concluídas de {total}
      </span>
      <div
        className="progresso__trilho"
        role="progressbar"
        aria-valuenow={percentual}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Percentual de atividades concluídas"
      >
        <div className="progresso__barra" style={{ width: `${percentual}%` }} />
      </div>
      <span className="progresso__texto">{percentual}%</span>
    </div>
  )
}
