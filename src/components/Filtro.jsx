const opcoes = ["Todos", "HTML", "CSS", "React", "Git", "Vercel"]

/**
 * Filtro controlado: não altera o array original de atividades,
 * apenas informa ao componente pai qual tecnologia está selecionada.
 */
export default function Filtro({ selecionado, aoSelecionar }) {
  return (
    <div className="filtro__grupo" role="group" aria-label="Filtrar por tecnologia">
      {opcoes.map((opcao) => (
        <button
          key={opcao}
          type="button"
          className="filtro__botao"
          aria-pressed={selecionado === opcao}
          onClick={() => aoSelecionar(opcao)}
        >
          {opcao}
        </button>
      ))}
    </div>
  )
}
