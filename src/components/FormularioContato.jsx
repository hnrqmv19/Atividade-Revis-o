import { useState } from "react"

const valoresIniciais = { nome: "", email: "", assunto: "", mensagem: "" }

/**
 * Formulário controlado. Não há backend: o envio é simulado e apenas
 * confirma visualmente que os dados foram validados pelo navegador.
 */
export default function FormularioContato() {
  const [valores, setValores] = useState(valoresIniciais)
  const [enviado, setEnviado] = useState(false)

  function aoMudarCampo(campo) {
    return (evento) => {
      setValores((atual) => ({ ...atual, [campo]: evento.target.value }))
    }
  }

  function aoEnviar(evento) {
    evento.preventDefault()
    setEnviado(true)
    setValores(valoresIniciais)
  }

  return (
    <form className="formulario" onSubmit={aoEnviar} noValidate={false}>
      <div className="campo">
        <label htmlFor="contato-nome">Nome</label>
        <input
          id="contato-nome"
          name="nome"
          type="text"
          required
          value={valores.nome}
          onChange={aoMudarCampo("nome")}
        />
      </div>
      <div className="campo">
        <label htmlFor="contato-email">E-mail</label>
        <input
          id="contato-email"
          name="email"
          type="email"
          required
          value={valores.email}
          onChange={aoMudarCampo("email")}
        />
      </div>
      <div className="campo">
        <label htmlFor="contato-assunto">Assunto</label>
        <input
          id="contato-assunto"
          name="assunto"
          type="text"
          required
          value={valores.assunto}
          onChange={aoMudarCampo("assunto")}
        />
      </div>
      <div className="campo">
        <label htmlFor="contato-mensagem">Mensagem</label>
        <textarea
          id="contato-mensagem"
          name="mensagem"
          rows={4}
          required
          value={valores.mensagem}
          onChange={aoMudarCampo("mensagem")}
        />
      </div>
      <button type="submit" className="botao">
        Enviar mensagem
      </button>
      {enviado && (
        <p className="formulario__confirmacao" role="status">
          Mensagem validada e "enviada" com sucesso (envio simulado, sem backend).
        </p>
      )}
    </form>
  )
}
