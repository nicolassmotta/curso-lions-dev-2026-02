# Resolução — Desafio: Explorando o Espaço 🚀

**Turma:** LionsDev  
**Módulo:** 01  
**Lista original:** `terminal_linux.md`

Sequência completa de comandos para montar a estação espacial usando só o terminal.

---

## Solução passo a passo

```bash
# 1. Criar o diretório principal
mkdir EstacaoEspacial

# 2. Entrar no novo diretório
cd EstacaoEspacial

# 3. Criar os módulos (seções) da estação
mkdir Habitacao Laboratorio Hangar

# 4. Criar os quartos dentro de Habitacao
mkdir Habitacao/Quarto1 Habitacao/Quarto2 Habitacao/Quarto3

# 5. Criar as áreas de pesquisa dentro de Laboratorio
mkdir Laboratorio/Pesquisa1 Laboratorio/Pesquisa2

# 6. Criar as baias das naves dentro de Hangar
mkdir Hangar/Nave1 Hangar/Nave2 Hangar/Nave3

# 7. Descomissionar o Hangar
#    (a flag -r é necessária para remover uma pasta com conteúdo dentro)
rm -r Hangar

# 8. Criar o arquivo de boas-vindas na raiz da estação
echo "Bem-vindos à Estação Espacial!" > BoasVindas.txt

# 9. Copiar o arquivo para o Laboratorio
cp BoasVindas.txt Laboratorio/

# 10. (BÔNUS) Alterar o conteúdo da cópia que está no Laboratorio
echo "Bem-vindos à Estação Espacial! Este é o laboratório!" > Laboratorio/BoasVindas.txt
```

---

## Conferindo o resultado

```bash
ls -R
cat BoasVindas.txt
cat Laboratorio/BoasVindas.txt
```

## Estrutura final

```
EstacaoEspacial/
├── BoasVindas.txt          "Bem-vindos à Estação Espacial!"
├── Habitacao/
│   ├── Quarto1/
│   ├── Quarto2/
│   └── Quarto3/
└── Laboratorio/
    ├── BoasVindas.txt      "Bem-vindos à Estação Espacial! Este é o laboratório!"
    ├── Pesquisa1/
    └── Pesquisa2/
```

O `Hangar` não aparece porque foi removido no passo 7.

---

## Observações

- O `mkdir` aceita vários nomes de uma vez (passo 3), o que evita repetir o comando.
- Também dá para criar as subpastas informando o caminho (`Habitacao/Quarto1`),
  sem precisar entrar em cada pasta com `cd` antes.
- No passo 10, o `>` **sobrescreve** o arquivo inteiro. Por isso a mensagem final
  do laboratório precisa ser escrita completa, e não só o trecho novo. Se a ideia
  fosse acrescentar uma linha ao que já existe, o comando seria `>>`.

---

<div align="center">
  <b>LionsDev</b> • Professor Nicolas Cardoso Motta<br>
  <i>Resolução do Desafio Prático de Terminal Linux — Módulo 01</i>
</div>
