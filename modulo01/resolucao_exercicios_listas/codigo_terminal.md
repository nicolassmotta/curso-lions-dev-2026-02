# Resolução — Lista de Código: Terminal e Primeiros Passos

**Turma:** LionsDev  
**Módulo:** 01  
**Lista original:** `codigo_terminal.md`

---

## Parte 0 — Treino rápido (aquecimento)

```bash
pwd                          # 1. mostra a pasta atual
ls                           # 2. lista os arquivos da pasta atual
mkdir projeto                # 3. cria a pasta projeto
cd projeto                   # 4. entra na pasta projeto
touch index.js               # 5. cria o arquivo vazio index.js
echo "Lions" > nota.txt      # 6. cria nota.txt já com o texto dentro
cat nota.txt                 # 7. mostra o conteúdo de nota.txt
cp nota.txt nota_backup.txt  # 8. copia o arquivo
mv nota_backup.txt copia.txt # 9. renomeia a cópia
cd ..                        # 10. volta uma pasta acima
```

> O `mv` serve tanto para **mover** quanto para **renomear**: renomear é mover
> o arquivo para o mesmo lugar com outro nome.

---

## Parte 1 — Complete o comando

| # | Comando completo | Lacuna |
| - | ---------------- | ------ |
| 1 | `mkdir src` | `mkdir` |
| 2 | `cd src` | `src` |
| 3 | `touch app.js` | `app.js` |
| 4 | `cat app.js` | `cat` |
| 5 | `node app.js` | `node` |
| 6 | `npm install prompt-sync` | `install` (ou a forma curta `i`) |

---

## Parte 2 — Ache o erro

**1. `mkdir Nova Pasta`**  
O terminal separa os argumentos pelo espaço, então ele entende dois nomes e cria
**duas** pastas: `Nova` e `Pasta`. Correção — use aspas ou escape o espaço:

```bash
mkdir "Nova Pasta"
# ou
mkdir Nova\ Pasta
```

**2. `rm lixo`**  
Falha porque `lixo` é uma pasta e, sem flag, o `rm` só apaga arquivos. Falta a
flag `-r` (recursivo), que apaga a pasta e tudo que está dentro dela:

```bash
rm -r lixo
```

**3. `cd..`**  
Falta o espaço entre o comando e o argumento. O terminal lê `cd..` como um
comando único chamado "cd..", que não existe. Correção:

```bash
cd ..
```

**4. `npm iniciar`**  
O npm não tem o comando `iniciar` — os comandos são em inglês. O certo é `init`
(e o `-y` aceita todas as perguntas com o valor padrão):

```bash
npm init -y
```

---

## Parte 3 — Prever o resultado

Estado final depois da sequência:

```
loja/
├── produtos.js
└── dados/
    └── lista.json   (contendo [])
```

O último `ls` roda **dentro de `loja`** (o `cd ..` voltou de `dados` para `loja`),
então ele mostra:

```
dados  produtos.js
```

Repare que `lista.json` **não** aparece: ele está dentro de `dados`, e o `ls` sem
argumento lista só o primeiro nível da pasta atual.

---

## Parte 4 — Desafio de sequência

### Monte a estrutura

```bash
# a partir de uma pasta vazia
mkdir meu-app
cd meu-app

touch index.js
npm init -y                     # cria o package.json

mkdir src
touch src/funcoes.js

mkdir src/dados
echo "ok" > src/dados/config.txt
```

Conferindo o resultado:

```bash
ls -R
```

```
meu-app/
├── index.js
├── package.json
└── src/
    ├── funcoes.js
    └── dados/
        └── config.txt   (contendo "ok")
```

### Rode seu primeiro código

```bash
echo "console.log('App no ar!');" > index.js
node index.js
```

Saída esperada no terminal:

```
App no ar!
```

> Também dá para escrever o `console.log` direto no VS Code em vez de usar o
> `echo` — o resultado é o mesmo.

---

<div align="center">
  <b>LionsDev</b> • Professor Nicolas Cardoso Motta<br>
  <i>Resolução da Lista de Código: Terminal e Primeiros Passos — Módulo 01</i>
</div>
