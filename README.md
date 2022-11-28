# pokedex_angular

## Sobre
A aplicação se trata de uma pokedex simples (somente o frontend) consumindo a API https://pokeapi.co/docs/v2.

A tela inicial é basicamente um campo de pesquisa onde se pode procurar por qualquer pokemon, e um dashboard que exibe cards clicáveis dos pokemons com sua imagem e algumas poucas informações sobre.
![poke list](https://user-images.githubusercontent.com/50846424/204337811-ef0fe1d1-d3d5-41f3-822f-4e6cddbacee3.PNG)

Os pokemons são exibidos de forma paginada, com 100 em cada página, que pode ser trocada na parte de baixo da tela.
![pagination](https://user-images.githubusercontent.com/50846424/204339200-db794dc5-bd02-40fb-bfcd-623a969452e6.PNG)

Ao pesquisar sobre algum pokemon, seu respectivo card será exibido na tela.
![poke search](https://user-images.githubusercontent.com/50846424/204338338-58a9bb3c-980b-4858-ab26-c835d29cfa0c.PNG)

Ao clicar no card de qualquer pokemon, o usuário será redirecionado para a tela de detalhes sobre ele.
![poke details](https://user-images.githubusercontent.com/50846424/204338469-01531d9d-9510-4533-ab6c-65f773b2ca3d.PNG)


## Como executar a apliacação
Basta abrir um terminal na raiz do projeto e executar o comando `npm i` para instalar as dependências, e depois disso, o comando `ng serve` para subir a aplicação. Após isso basta abrir o navegador no endereço `http://localhost:4200/`.
