# Descrição

Simples aplicação para gerenciamento de eventos de churrasco, onde cada evento contém informações simples:

- Título do evento (obrigatório)
- Data
- Lista de participantes (Nome e valor de contribuição)

### Informações
- O fluxo de login não contém validação
- Para CRUD dos eventos utilizamos JSON Server, sendo necessário executá-lo para que a aplicação funcione corretamente. O arquivo *db.json* fica responsável por armazenar os dados da aplicação
- Adicionado um delay de 1,5s para simular requisições reais, exibindo loader animado.
- Ao criar um evento:
  - Somente datas futuras são permitidas
  - Máscara para datas
  - Máscara para valor de contribuição do participante
- Toasts para principais notificações de sucesso/erro
- Design responsivo

# Iniciando

- Clonar repositório em algum diretório no seu computador:

```
$ git clone https://github.com/gustavomanca/barbecue-management
```

- Navegar até o diretório: 

```
$ cd barbecue-management
```

# Instalação

``` 
$ yarn
```
ou
```
$ yarn install
```

# Iniciar servidor
```
$ npx json-server --watch db.json --port 5000
```

# Iniciar App

```
$ yarn start
```

# Tecnologias utilizadas:
- ReactJS
- Typescript
- React Router
- Context API
- Axios
- Styled Components
- Polished
- Plop.js
- CogoToast
- ESLint
- Husky/Lint Staged

