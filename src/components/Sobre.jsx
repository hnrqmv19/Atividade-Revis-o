const tecnologiasPraticadas = ["HTML", "CSS", "React", "Git", "Vercel"]

/**
 * Substitua o texto de exemplo por um relato autoral real,
 * evitando exagerar o nível de domínio nas tecnologias listadas.
 */
export default function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="container">
        <h2 className="secao__titulo">Sobre</h2>
        <p className="cabecalho__descricao">
          Cada uma das 30 entregas abaixo documenta uma
          etapa da atividade.
        </p>
        <ul className="sobre__tecnologias">
          {tecnologiasPraticadas.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
