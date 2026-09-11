export default function Busca({ termo, aoDigitar }) {
  return (
    <div className="busca">
      <label htmlFor="busca-atividades" className="sr-only">
        Buscar atividade por título ou descrição
      </label>
      <input
        id="busca-atividades"
        className="busca__campo"
        type="search"
        placeholder="Buscar por título ou descrição..."
        value={termo}
        onChange={(evento) => aoDigitar(evento.target.value)}
      />
    </div>
  )
}
