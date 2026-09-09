# 🦁 Curso Lions Dev — Turma 2026/02

Repositório de **resoluções** do curso **Do Zero ao Herói** da **LionsDev**, turma 2026/02.

Aqui ficam os gabaritos dos exercícios feitos ao longo do curso: os exercícios que aparecem nos slides e são resolvidos ao vivo em aula, e as listas de exercícios entregues para prática individual.

> 📚 O material completo do curso — conteúdo teórico, slides, listas em PDF, provas e projeto final — está no repositório principal:
> <https://github.com/nicolassmotta/curso-lions-dev>

---

## 📁 Estrutura de Pastas

Cada módulo é dividido em duas pastas, uma para cada tipo de exercício:

```txt
moduloXX/
├── resolucao_exercicios_slides/   # Gabarito dos exercícios feitos em aula (slides)
└── resolucao_exercicios_listas/   # Gabarito das listas de exercícios
```

Dentro de `resolucao_exercicios_slides/` os arquivos são agrupados por assunto (`arrays/`, `objetos/`, `estruturas_decisao/`…), seguindo a ordem em que os temas aparecem nos slides.

### Convenções de extensão

| Quando usar | Extensão |
| ----------- | -------- |
| Resolução que é código JavaScript e roda com `node` | `.js` |
| Resolução de comandos de terminal, respostas em prosa ou passo a passo explicado | `.md` |

---

## 🗺️ Progresso das Aulas

| # | Módulo | Slides | Listas |
| - | ------ | ------ | ------ |
| 01 | **Introdução à Programação** | ✅ Atividade prática de terminal | ✅ 2 listas resolvidas |
| 02 | **Fundamentos de Programação** | ✅ Até as atividade de Laços de repetição (pág. 158) | ⏳ Ainda não aplicadas |

### Módulo 01 — Introdução à Programação

Terminal, navegação, manipulação de arquivos e pastas, Node e NPM.

| Tipo | Arquivo | Conteúdo |
| ---- | ------- | -------- |
| Slides | [atividade_pratica_terminal.md](modulo01/resolucao_exercicios_slides/atividade_pratica_terminal.md) | Criar as pastas `original` e `copia`, gerar e preencher o `index.txt`, copiar e apagar |
| Lista | [codigo_terminal.md](modulo01/resolucao_exercicios_listas/codigo_terminal.md) | Treino de comandos, completar comandos, achar o erro, prever o resultado e montar uma estrutura do zero |
| Lista | [terminal_linux.md](modulo01/resolucao_exercicios_listas/terminal_linux.md) | Desafio *Explorando o Espaço*: montar uma estação espacial só com comandos |

### Módulo 02 — Fundamentos de Programação

Variáveis, tipos de dados, entrada e saída, operadores, condicionais, arrays e objetos.

As 13 resoluções estão indexadas por página do slide em [`modulo02/resolucao_exercicios_slides/README.md`](modulo02/resolucao_exercicios_slides/README.md).

| Assunto | Páginas | Arquivos |
| ------- | ------- | -------- |
| Imprimir no terminal | 40 | `imprimir/` |
| Strings e concatenação | 48 | `string/` |
| Entrada de dados | 56, 64 | `entrada_dados/` |
| Operadores aritméticos | 79 | `operadores/` |
| Estruturas de decisão | 105 a 108 | `estruturas_decisao/` |
| Arrays | 128 a 130 | `arrays/` |
| Objetos | 140 | `objetos/` |

---

## 🚀 Como Rodar as Resoluções

As resoluções que pedem dados ao usuário usam o pacote [`prompt-sync`](https://www.npmjs.com/package/prompt-sync). Instale as dependências uma única vez, na raiz do repositório:

```bash
npm install
```

Depois, execute o arquivo que quiser pelo caminho completo:

```bash
node modulo02/resolucao_exercicios_slides/estruturas_decisao/par_impar.js
```

> 💡 O `package.json` da raiz declara `"type": "module"`. É isso que permite usar `import` no lugar de `require` nos arquivos `.js`.

---

## 📦 Dependências

| Pacote | Usado a partir de | Função |
| ------ | ----------------- | ------ |
| `prompt-sync` | Módulo 02 | Capturar entrada de dados do usuário no terminal |

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">
  <b>LionsDev</b> • Professor Nicolas Cardoso Motta
</div>
