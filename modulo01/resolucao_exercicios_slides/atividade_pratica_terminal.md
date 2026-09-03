# Módulo 01 — Resolução do Exercício dos Slides

**Atividade Prática — Comandos Básicos do Terminal**

O enunciado pede: criar duas pastas (`original` e `copia`), navegar até `original`,
criar o arquivo `index.txt`, preenchê-lo com algum conteúdo, copiá-lo para `copia`
e por fim apagar o arquivo da pasta `original`.

---

## Relembrando os comandos

| Comando | Para que serve |
| ------- | -------------- |
| `pwd` | mostra em qual pasta você está |
| `ls` | lista o conteúdo da pasta atual |
| `cd Pasta` | entra em uma pasta |
| `mkdir Nome-da-Pasta` | cria uma pasta |
| `touch Nome-do-Arquivo` | cria um arquivo vazio |
| `echo "Mensagem" > Arquivo.txt` | escreve um texto dentro de um arquivo |
| `cp Pasta/Arquivo.txt Outra-Pasta` | copia um arquivo |
| `rm Nome-do-Arquivo.txt` | apaga um arquivo |
| `rm -r Nome-da-Pasta` | apaga uma pasta e todo o conteúdo dela |

---

## Solução passo a passo

```bash
# 1. Criar as duas pastas (mkdir aceita mais de um nome de uma vez)
mkdir original copia

# 2. Navegar para a pasta original
cd original

# 3. Criar o arquivo index.txt
touch index.txt

# 4. Preencher o arquivo com algum conteúdo
echo "Bem-vindo ao curso da LionsDev!" > index.txt

# 5. Conferir se o conteúdo foi gravado
cat index.txt

# 6. Copiar o arquivo para a pasta copia
#    (o .. significa "a pasta de cima", porque estamos dentro de original)
cp index.txt ../copia

# 7. Apagar o arquivo da pasta original
rm index.txt

# 8. Conferir o resultado: original vazia, copia com o arquivo
ls
ls ../copia
```

---

## Estrutura final

```
.
├── original/        (vazia — o arquivo foi apagado no passo 7)
└── copia/
    └── index.txt    (contendo "Bem-vindo ao curso da LionsDev!")
```

> **Atenção:** o `>` do `echo` **sobrescreve** o arquivo inteiro. Se quiser
> acrescentar uma linha sem apagar o que já existe, use `>>`.

---

<div align="center">
  <b>LionsDev</b> • Professor Nicolas Cardoso Motta<br>
  <i>Resolução do Exercício dos Slides — Módulo 01</i>
</div>
