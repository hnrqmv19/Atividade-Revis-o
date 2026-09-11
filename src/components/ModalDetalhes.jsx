import { useEffect, useRef } from "react"

/**
 * Modal de detalhes de uma atividade.
 * Fecha pelo botão, pela tecla Escape ou clicando na área externa,
 * e move o foco para o botão de fechar ao abrir.
 */
export default function ModalDetalhes({ atividade, aoFechar }) {
  const botaoFecharRef = useRef(null)

  useEffect(() => {
    botaoFecharRef.current?.focus()

    function aoTeclar(evento) {
      if (evento.key === "Escape") {
        aoFechar()
      }
    }

    document.addEventListener("keydown", aoTeclar)
    return () => document.removeEventListener("keydown", aoTeclar)
  }, [aoFechar])

  if (!atividade) return null

  function aoClicarNoFundo(evento) {
    if (evento.target === evento.currentTarget) {
      aoFechar()
    }
  }

  return (
    <div className="modal-fundo" onMouseDown={aoClicarNoFundo}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
      >
        <button
          type="button"
          ref={botaoFecharRef}
          className="modal__fechar"
          onClick={aoFechar}
          aria-label="Fechar detalhes"
        >
          ×
        </button>
        <h2 id="modal-titulo" className="modal__titulo">
          {String(atividade.numero).padStart(2, "0")}. {atividade.titulo}
        </h2>
        <p>{atividade.descricao}</p>
        <ul className="modal__lista">
          <li>
            <strong>Etapa:</strong> {atividade.etapa}
          </li>
          <li>
            <strong>Tecnologia:</strong> {atividade.tecnologia}
          </li>
          <li>
            <strong>Status:</strong> {atividade.status}
          </li>
        </ul>
        {atividade.link && atividade.link !== "#" && (
          <a className="botao" href={atividade.link} target="_blank" rel="noreferrer">
            Abrir evidência
          </a>
        )}
      </div>
    </div>
  )
}
