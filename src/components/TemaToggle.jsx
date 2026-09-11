/**
 * Alterna entre tema claro e escuro.
 * O estado e a persistência em localStorage ficam em App.jsx (fonte única de verdade).
 */
export default function TemaToggle({ tema, aoAlternarTema }) {
  const escuro = tema === "escuro"

  return (
    <button
      type="button"
      className="botao botao--secundario botao--icone"
      onClick={aoAlternarTema}
      aria-pressed={escuro}
    >
      {escuro ? "Tema claro" : "Tema escuro"}
    </button>
  )
}
