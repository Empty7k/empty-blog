```text
================================================================
                       empty's brain_
                    SYSTEM_MANIFEST // 001
================================================================
FILE     : README.TXT
SYSTEM   : empty's brain_
PROTOCOL : THE WIRED / NAVI
STATUS   : ALWAYS UNDER CONSTRUCTION
PALETTE  : CYBERIA_PURPLE
================================================================
```

```text
01 // OVERVIEW                                      ABOUT_SYSTEM.TXT
----------------------------------------------------------------
```

Um espaço pessoal na web para guardar interesses, leituras, músicas e
pequenas transmissões. Uma página própria para explorar com calma,
fora do ritmo das redes sociais.

O sistema reúne referências da Old Web, Cybercore, Neocities, Windows
97/98 e da atmosfera de *Serial Experiments Lain*. Janelas chanfradas,
preto profundo e lavanda fazem parte da linguagem visual da Wired.

Todas as rotas compartilham o mesmo shell: cabeçalho, barra de status,
diretório lateral, caminho do arquivo aberto e rodapé técnico.

```text
02 // DIRECTORY_MAP                                 FILE_SYSTEM_TREE
----------------------------------------------------------------

EMPTY'S BRAIN_ (ROOT)
|
|-- /            INDEX.HTM
|                Home: about, transmissions e signal monitor
|
|-- /favorites   PERSONAL_DATABASE
|                Anime, games, series, youtube e manga
|
|-- /music       AUDIO_ARCHIVE.LOG
|                Artistas, álbuns, player visual e link externo
|
|-- /library     TEXT_ARCHIVE
|   |            Índice de leituras e autores; em construção
|   |
|   `-- /pessoa  FERNANDO_PESSOA.TXT
|                Leitor de poesia e textos de Fernando Pessoa
|
|-- /gallery     VISUAL_FILES
|                Contact sheet e inspetor de arquivos
|                Diretório vazio, preparado para imagens futuras
|
`-- /cobrakai    MEDIA_SHRINE / COBRA_KAI
                 Dossiê pessoal: navegação, notas, citações
                 e imagens anexadas
```

`/pessoa` é uma rota própria, acessada pela biblioteca. O player da
página de música é visual: o link para o Spotify abre um serviço externo.

```text
03 // SYSTEM_COMPONENTS                              HARDWARE_LOG.TXT
----------------------------------------------------------------

RUNTIME    : Node.js + npm
INTERFACE  : React / React DOM
ROUTING    : React Router
STYLES     : CSS
BUILD      : Vite
OUTPUT     : dist/
```

```text
04 // LOCAL_CONNECTION                                  BOOT_SEQ.TXT
----------------------------------------------------------------
```

É necessário ter Node.js e npm instalados. A versão atual do Vite
requer Node.js 20.19+ na série 20 ou 22.12+.

```sh
git clone https://github.com/Empty7k/empty-blog.git
cd empty-blog
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal. Para gerar e conferir
a versão de produção localmente:

```sh
npm run build
npm run preview
```

```text
05 // SOURCE_DIRECTORY                                FILE_INDEX.TXT
----------------------------------------------------------------

empty-blog/
|-- public/                 Arquivos estáticos
|-- src/
|   |-- components/        Shell e componentes compartilhados
|   |-- images/            Imagens e GIFs importados pelo código
|   |-- pages/             Páginas e estilos de cada módulo
|   |-- App.jsx            Rotas e shell da aplicação
|   |-- App.css            Estilos compartilhados
|   `-- index.jsx          Entrada do React
|-- index.html             Entrada HTML do Vite
|-- vite.config.mjs        Configuração do Vite
|-- vercel.json            Build e diretório de saída na Vercel
|-- package.json           Dependências e comandos
`-- README.md              Este manifesto

================================================================
END OF TRANSMISSION_                          [ CONNECTION CLOSED ]
================================================================
```
