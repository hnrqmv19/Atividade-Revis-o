# Portfólio de Desenvolvimento Web — Roteiro de Revisão

Homepage em React que reúne, em sequência numerada de 1 a 30, as entregas
práticas do roteiro da disciplina (Universidade Senai Cimatec — Prof. Celso
Barreto). Cada item documenta uma etapa: HTML semântico, CSS, componentização
React, interatividade e publicação com Git e Vercel.

## Tecnologias

- React 18
- Vite
- CSS puro (variáveis, Flexbox e Grid) — sem bibliotecas de componentes prontas
- Git / GitHub
- Vercel

## Pré-requisitos

- Node.js 18 ou superior
- npm
- Git

## Instalação e execução local

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura de pastas

```
src/
  components/   componentes React (Cabecalho, Menu, CardAtividade, Filtro,
                Busca, Progresso, ModalDetalhes, FormularioContato, Sobre,
                Rodape, TemaToggle, Atividades)
  data/         atividades.js — fonte única das 30 entregas
  styles/       variables.css (tokens) e global.css
public/         arquivos estáticos
```

## Funcionalidades implementadas

- Estrutura semântica (header, nav, main, section, footer) com um único `h1`.
- Sistema visual com variáveis CSS, Flexbox e CSS Grid responsivo.
- Responsividade testada em ~360px, ~768px e ~1440px.
- Componentização (Cabecalho, Rodape, CardAtividade) com dados via props.
- Lista renderizada com `map` e `key` estável a partir de `src/data/atividades.js`.
- Status condicional (Planejada, Em andamento, Concluída).
- Filtro por tecnologia e busca por texto, sem mutar os dados originais.
- Contador e barra de progresso derivados dos dados (não guardados em estado).
- Modal de detalhes acessível (fecha com botão, `Escape` ou clique fora).
- Formulário de contato controlado, com validação nativa e confirmação simulada.
- Alternância de tema claro/escuro persistida em `localStorage`.

## Autor

- Nome: _(preencher)_
- Turma: _(preencher)_

## Links

- Repositório remoto: _(adicionar URL após o passo 29 do roteiro)_
- Aplicação publicada na Vercel: _(adicionar URL após o passo 30 do roteiro)_

## Checklist de publicação

- [ ] `git status` limpo e `.gitignore` cobrindo `node_modules` e `dist`
- [ ] Commits descritivos ao longo do desenvolvimento
- [ ] Tag `v1.0.0` criada após a versão final validada
- [ ] Repositório remoto criado e branch `main` enviada
- [ ] Projeto importado e publicado na Vercel
- [ ] URL pública testada em janela anônima (menu, filtro, busca, modal, formulário, responsividade)
