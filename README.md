
# Movie Finder

Movie Finder é uma aplicação web desenvolvida com Next.js, que permite aos usuários buscar informações sobre filmes utilizando a API OMDb. A aplicação exibe detalhes como título, ano de lançamento, gênero, diretor, e muito mais.

## Sumário

- Pré-requisitos
- Instalação
- Configuração
- Execução
- Scripts Disponíveis
- Tecnologias Utilizadas
- Licença

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- **Node.js** (versão 14.x ou superior)
- **npm** (gerenciador de pacotes do Node.js) ou **yarn** ou **pnpm** ou **bun**
- **API Key** para a [OMDb API](http://www.omdbapi.com/apikey.aspx) (Nesse caso, já deixei cadastrado a minha chave, para facilitar a avaliação.)

## Instalação

Clone o repositório para sua máquina local e instale as dependências:

```bash
git clone https://github.com/seu-usuario/movie-finder.git
cd movie-finder
npm install
```

ou, caso utilize **yarn**:

```bash
yarn install
```

ou, caso utilize **pnpm**:

```bash
pnpm install
```

ou, caso utilize **bun**:

```bash
bun install
```


## Execução

Após a instalação e configuração, você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

ou

```bash
pnpm dev
```

ou

```bash
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em execução.

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Compila a aplicação para produção.
- **`npm run start`**: Inicia o servidor em modo de produção.
- **`npm run lint`**: Executa o ESLint para verificar o código em busca de problemas.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de páginas estáticas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para construção de layouts responsivos.
- **OMDb API**: API utilizada para buscar informações detalhadas sobre filmes.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática opcional.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
