// src/ssg/markdown.ts
var htmlContent = {
  "markdown/plugins/typedDocumentNode.md": {
    "content": "\n## Usage with Typed Document Node\n\n```\nnpm i @graphql-codegen/typed-document-node\n```\n\nZeus can generate builders for [`TypedDocumentNode`][typed-document-node], a type-safe query\nrepresentation understood by most GraphQL clients (including Apollo, urql etc) by adding the\n`--typedDocumentNode` or `--td` flag to the CLI.\n\n### Generate Type-Safe Zeus Schema And TypedDocumentNode query builders\n\n```sh\n$ zeus https://yourschema.com/graphql ./  --typedDocumentNode\n# typedDocumentNode.ts file with typed document node builders is now in the output destination\n```\n\n### TypedDocumentNode + Apollo Client useMutation examples\n\nThe following example demonstrates usage with Apollo. Other clients should work similarly.\n\n```tsx\nimport { typedGql } from './zeus/typedDocumentNode';\nimport { $ } from './zeus';\nimport { useMutation } from '@apollo/client';\n\nconst myMutation = typedGql('mutation')({\n  cardById: [{ cardId: $('cardId', 'String!') }, { name: true }],\n});\n\nconst Main = () => {\n  const [mutate] = useMutation(myMutation);\n  // data response is typed\n  return (\n    <div\n      onClick={() => {\n        // this are typesafe vars\n        mutate({\n          variables: {\n            cardId: 'du1hn298u1eh',\n          },\n        });\n      }}\n    >\n      Click\n    </div>\n  );\n};\n```\n\n[typed-document-node]: https://www.graphql-code-generator.com/plugins/typed-document-node\n",
    "data": {
      "link": "plugins/typedDocumentNode",
      "title": "TypedDocumentNode",
      "order": 4,
      "category": "Plugins"
    },
    "excerpt": ""
  },
  "markdown/plugins/stucco.md": {
    "content": "\n## Usage with Stucco Subscriptions\n\nZeus can generate types for the Stucco Subscription library by adding the --stuccoSubscriptions flag to the CLI. All types in `data` are then inherited from the Zeus Query\n\n```sh\n$ zeus schema.graphql ./  --stuccoSubscriptions\n```\n\n```typescript\nstuccoSubscriptions(\n  (apiFetchResult) => [apiFetchResult.url],\n  'https://my.backend/graphql',\n)({ drawCard: { Attack: true } }).on((args) => args.drawCard.Attack);\n```\n",
    "data": {
      "link": "plugins/stucco",
      "title": "Stucco",
      "order": 3,
      "category": "Plugins"
    },
    "excerpt": ""
  },
  "markdown/plugins/react-query.md": {
    "content": "\n## Usage with React Query\n\nZeus can generate type-safe versions of React Query's `useQuery`, `useMutation` etc.. React hooks as `useTypedQuery`, `useTypedMutation` etc... by adding the `--reactQuery` flag to the CLI. All types `data` response are then inherited from the Zeus query. \u{1F680}\n\n```sh\n$ zeus schema.graphql ./  --reactQuery\n```\n\n```tsx\nimport { useTypedQuery } from './zeus/reactQuery';\n\nconst Main = () => {\n  const { data } = useTypedQuery({\n    // Get autocomplete here:\n    drawCard: {\n      name: true,\n    },\n  });\n  // data response is now typed\n  return <div>{data.drawCard.name}</div>;\n};\n```\n",
    "data": {
      "link": "plugins/react-query",
      "title": "React Query",
      "order": 2,
      "category": "Plugins"
    },
    "excerpt": ""
  },
  "markdown/plugins/apollo.md": {
    "content": "\n## Usage with Apollo GraphQL\n\nFrom 5.1.3 Zeus apollo should be used with graphql-typed-document-node\n\n```\nnpm i @graphql-codegen/typed-document-node\n```\n\n### Generate Type-Safe Zeus Schema And Apollo Client Type-Safe Hooks\n\n```sh\n$ zeus schema.graphql ./  --typedDocumentNode\n# apollo.ts file with typed hooks is now in the output destination\n```\n\n### TypedDocumentNode + Apollo Client useMutation examples\n\nThe following example demonstrates usage with Apollo. Other clients should work similarly.\n\n```tsx\nimport { typedGql } from './zeus/typedDocumentNode';\nimport { $ } from './zeus';\nimport { useMutation } from '@apollo/client';\n\nconst myMutation = typedGql('mutation')({\n  cardById: [{ cardId: $('cardId', 'String!') }, { name: true }],\n});\n\nconst Main = () => {\n  const [mutate] = useMutation(myMutation);\n  // data response is typed\n  return (\n    <div\n      onClick={() => {\n        // this are typesafe vars\n        mutate({\n          variables: {\n            cardId: 'du1hn298u1eh',\n          },\n        });\n      }}\n    >\n      Click\n    </div>\n  );\n};\n```\n\n[typed-document-node]: https://www.graphql-code-generator.com/plugins/typed-document-node\n",
    "data": {
      "link": "plugins/apollo",
      "title": "Apollo",
      "order": 1,
      "category": "Plugins"
    },
    "excerpt": ""
  },
  "markdown/index.md": {
    "content": "\nStrongly Typed GraphQL from the team at [GraphQL Editor](https://graphqleditor.com/?utm_source=graphql_zeus_github)\n\nGraphQL Zeus is the absolute best way to interact with your GraphQL endpoints in a type-safe way. Zeus uses your schema to generate Typescript types and strongly typed clients to unlock the power, efficiency, productivity and safety of Typescript on your GraphQL requests.\n\n## Features\n\n\u26A1\uFE0F Types mapped from your schema <br/>\n\u26A1\uFE0F Works with Apollo Client, React Query, Stucco Subscriptions _(\\*more coming soon...)_<br/>\n\u26A1\uFE0F Works with Subscriptions <br/>\n\u26A1\uFE0F Infer complex response types <br/>\n\u26A1\uFE0F Create reusable selection sets (like fragments) for use across multiple queries <br/>\n\u26A1\uFE0F Supports GraphQL Unions, Interfaces, Aliases and Variables<br/>\n\u26A1\uFE0F Handles **massive** schemas <br/>\n\u26A1\uFE0F Supports Browsers, Node.js and React Native in Javascript and Typescript <br/>\n\u26A1\uFE0F Schema downloader <br/>\n\u26A1\uFE0F JSON schema generation <br/>\n\n## Generate Types With Zeus CLI Example\n\nSimply run Zeus in your terminal to output your types file based on your graphql schema\n\n![](/images/zeus-bash-command.png)\n\n## Usage Example\n\nExample using a generated `chain` client. Queries, mutations and subscriptions are now type-safe in arguments, field selections and response types.\n\n![](/images/example.png)\n\n## Support And Community\n\n[Join our GraphQL Editor Channel on Slack!](https://join.slack.com/t/graphqleditor/shared_invite/enQtNDkwOTgyOTM5OTc1LWI4YjU3N2U5NGVkNzQ2NzY5MGUxMTJiNjFlZDM1Zjc2OWRmNTI0NDM3OWUxYTk4Yjk3MzZlY2QwOWUzZmM2NDI)\n\nLeave a GitHub star \u2B50\uFE0F \u{1F60A}\n\nSpread the word!\n\n## Contribute\n\nFor a complete guide to contributing to GraphQL Editor, see the [Contribution Guide](CONTRIBUTING.md).\n\n1.  Fork this repo\n2.  Create your feature branch: git checkout -b feature-name\n3.  Commit your changes: git commit -am 'Add some feature'\n4.  Push to the branch: git push origin my-new-feature\n5.  Submit a pull request\n\n## License\n\nMIT \u{1F54A}\n",
    "data": {
      "link": "",
      "title": ""
    },
    "excerpt": ""
  },
  "markdown/graphql/variables.md": {
    "content": "\n## GraphQL Variables\n\nIt's simple to perform queries with variables by using `useZeusVariables` function. It forces you to be type-safe also\n\n```ts\nimport { Gql, $ } from './zeus';\n\nconst addCardResult = await Gql('mutation')(\n  {\n    addCard: [\n      {\n        card: $('card'),\n      },\n      {\n        id: true,\n        description: true,\n        name: true,\n        Attack: true,\n        skills: true,\n        Children: true,\n        Defense: true,\n        cardImage: {\n          bucket: true,\n          region: true,\n          key: true,\n        },\n      },\n    ],\n  },\n  {\n    variables: {\n      Attack: 2,\n      Defense: 3,\n      description: 'Lord of the mountains',\n      name: 'Golrog',\n    },\n  },\n);\n```\n\n### TypedDocumentNode + Apollo Client useMutation examples\n\nThe following example demonstrates usage with Apollo. Other clients should work similarly.\n\n```tsx\nimport { typedGql } from './zeus/typedDocumentNode';\nimport { $ } from './zeus';\nimport { useMutation } from '@apollo/client';\n\nconst myMutation = typedGql('mutation')({\n  cardById: [{ cardId: $('cardId', 'String!') }, { name: true }],\n});\n\nconst Main = () => {\n  const [mutate] = useMutation(myMutation);\n  // data response is typed\n  return (\n    <div\n      onClick={() => {\n        // this are typesafe vars\n        mutate({\n          variables: {\n            cardId: 'du1hn298u1eh',\n          },\n        });\n      }}\n    >\n      Click\n    </div>\n  );\n};\n```\n\n[typed-document-node]: https://www.graphql-code-generator.com/plugins/typed-document-node\n",
    "data": {
      "link": "graphql/variables",
      "title": "Variables",
      "order": 2,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/graphql/scalars.md": {
    "content": "\n## Scalars\n\nIn Zeus you can encode and decode scalars\n\n### Decode\n\nDecode function is called every time scalar returns from backend before passing the result from Chain,Subscription functions\n\n```gql\nscalar JSON\nscalar Datetime\ntype Card{\n    info: JSON!\n    createdAt: Datetime\n}\ntype Query:{\n    drawCard: Card!\n}\n```\n\n```ts\nimport { Chain } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst data = await chain('query', {\n  scalars: {\n    JSON: {\n      encode: (e: unknown) => JSON.stringify(e),\n      decode: (e: unknown) => JSON.parse(e as string),\n    },\n    Datetime: {\n      decode: (e: unknown) => new Date(e as string),\n      encode: (e: unknown) => (e as Date).toISOString(),\n    },\n  },\n})({\n  drawCard: {\n    info: true,\n  },\n});\n```\n\nSo the `data.drawCard.info` will be of type `Date` as provided by decoder `ReturnType`\n\n### Encode Scalars\n\nYou can also encode scalars before sending them to backend\n\n```ts\nimport { Chain } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst listCardsAndDraw = await chain('query', {\n  scalars: {\n    JSON: {\n      encode: (e: unknown) => JSON.stringify(e),\n      decode: (e: unknown) => JSON.parse(e as string),\n    },\n    Datetime: {\n      decode: (e: unknown) => new Date(e as string),\n      encode: (e: unknown) => (e as Date).toISOString(),\n    },\n  },\n})({\n  drawCard: {\n    info: true,\n  },\n});\n```\n\nEncoders require value to be encoded to string and don't work with variables yet.\n\n## Place decoders and encoders in one place for reuse\n\n```ts\nimport { Chain, ZeusScalars } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\nconst scalars = ZeusScalars({\n  JSON: {\n    encode: (e: unknown) => JSON.stringify(e),\n    decode: (e: unknown) => JSON.parse(e as string),\n  },\n  Datetime: {\n    decode: (e: unknown) => new Date(e as string),\n    encode: (e: unknown) => (e as Date).toISOString(),\n  },\n});\n\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst listCardsAndDraw = await chain('query', {\n  scalars,\n})({\n  drawCard: {\n    info: true,\n  },\n});\n```\n",
    "data": {
      "link": "graphql/scalars",
      "title": "Scalars",
      "order": 6,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/graphql/interfaces-and-unions.md": {
    "content": '\n## GraphQL Unions\n\nYou can use Zeus with [GraphQL Unions](https://spec.graphql.org/June2018/#sec-Unions):\n\n```js\nconst { drawChangeCard } = await chain(\'query\')({\n  drawChangeCard: {\n    __typename: true,\n    \'...on EffectCard\': {\n      effectSize: true,\n      name: true,\n    },\n    \'...on SpecialCard\': {\n      effect: true,\n      name: true,\n    },\n  },\n});\n```\n\nResponse:\n\n```json\n{\n  "effectSize": 195.99532210956377,\n  "name": "Destinee",\n  "__typename": "EffectCard"\n}\n```\n\n## GraphQL Interfaces\n\nZeus works with [GraphQL Interfaces](http://spec.graphql.org/June2018/#sec-Interfaces)\n\n```ts\nconst { nameables } = await Gql(\'query\')({\n  nameables: {\n    __typename: true,\n    name: true,\n    \'...on CardStack\': {\n      cards: {\n        Defense: true,\n      },\n    },\n    \'...on Card\': {\n      Attack: true,\n    },\n  },\n});\n```\n\nResponse:\n\n```json\n{\n  "nameables": [\n    {\n      "__typename": "EffectCard",\n      "name": "Hector"\n    },\n    {\n      "__typename": "CardStack",\n      "name": "Scotty",\n      "cards": [\n        {\n          "Defense": 1950\n        },\n        {\n          "Defense": 76566\n        }\n      ]\n    },\n    {\n      "__typename": "SpecialCard",\n      "name": "Itzel"\n    }\n  ]\n}\n```\n',
    "data": {
      "link": "graphql/interfaces-and-unions",
      "title": "Interfaces and Unions",
      "order": 1,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/graphql/gql.md": {
    "content": "\n## Generate GraphQL Gql Strings\n\nUse the `Zeus` function to generate a gql string\n\n```js\nimport { Zeus } from './zeus';\n\nconst stringGql = Zeus('query', {\n  listCards: {\n    name: true,\n    skills: true,\n    Attack: true,\n  },\n});\n\n// stringGql value:\n// query{listCards{name skills Attack}}\n```\n",
    "data": {
      "link": "graphql/gql",
      "title": "Gql string",
      "order": 4,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/graphql/directives.md": {
    "content": "\n## GraphQL Directives\n\nZeus supports using directives on fields.\n\n```ts\nimport { Chain } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst listCardsAndDraw = await chain('query')({\n  drawCard: {\n    name: true,\n    skills: true,\n    Attack: `@skip(if: true)`,\n  },\n});\n```\n\nSo you need to put full string instead of `true`.\n\n### Use on object field\n\nUse directive on `drawCard`\n\n```ts\nimport { Chain } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst listCardsAndDraw = await chain('query')({\n  drawCard: {\n    __directives: `@skip(if:true)`,\n    name: true,\n    skills: true,\n  },\n});\n```\n\n### Use on function\n\n```ts\nimport { Chain } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst listCardsAndDraw = await chain('query')({\n  drawCard: {\n    name: true,\n    skills: true,\n    attack:[\n      {\n        cardId:['2312321']\n      },\n      {\n        __directives: `@skip(if:true)`,\n        name: true,\n        skills: true,\n      }\n    ]\n  }\n});\n```\n\n### Use it with variables\n\n```ts\nimport { Chain } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\nconst variables = useZeusVariables({\n    isDefense: 'Boolean!'\n})({\n    isDefense:true\n});\nconst { $ } = variables;\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst listCardsAndDraw = await chain('query')({\n  drawCard: {\n    name: true,\n    skills: true,\n    Attack: `@skip(if: ${$('isDefense')})`,\n  },\n  {\n      variables\n  }\n});\n```\n",
    "data": {
      "link": "graphql/directives",
      "title": "Directives",
      "order": 5,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/graphql/aliases.md": {
    "content": '\n## GraphQL Aliases\n\nZeus supports declaring aliases \u{1F978}\n\n```ts\nconst aliasedQueryExecute = await chain(\'query\')({\n  listCards: {\n    __alias: {\n      atak: {\n        attack: [\n          { cardID: [\'1\'] },\n          {\n            name: true,\n            description: true,\n          },\n        ],\n      },\n    },\n  },\n});\n```\n\nResponse:\n\n```json\n{\n  "listCards": [\n    {\n      "atak": [\n        {\n          "name": "Zelma",\n          "description": "Central"\n        }\n      ]\n    }\n  ]\n}\n```\n\nNow you can access properties type-safe like this\n\n```javascript\naliasedQueryExecute.listCards.map((c) => c.atak);\n```\n',
    "data": {
      "link": "graphql/aliases",
      "title": "Aliases",
      "order": 3,
      "category": "GraphQL"
    },
    "excerpt": ""
  },
  "markdown/examples/state.md": {
    "content": "\nWhen query returns an object and you want to store it in React State, you can use zeus to have 100% type-safe objects in your state.\n\nHaving the following schema:\n\n```graphql\ntype Query {\n  listUsers: [User!]\n}\n\ntype User {\n  createdAt: String!\n  firstName: String!\n  lastName: String!\n  age: Int\n  username: String!\n  id: String!\n}\n```\n\nYou can use zeus types to get the type of the objects received from GraphQL Backend\n\n```tsx\nimport React, { useState } from 'react';\nimport { GraphQLTypes, InputType, Selector, Chain } from './zeus';\n\nconst userSelector = Selector('User')({\n  createdAt: true,\n  firstName: true,\n  lastName: true,\n  id: true,\n});\n\ntype StoredUser = InputType<GraphQLTypes['User'], typeof userSelector>\n\nconst getFullName = (u:StoredUser) => u.firstName + ' ' + u.lastName\n\nexport const UsersList: React.FC = () => {\n  const [users, setUsers] = useState<Array<StoredUser>>([]);\n\n  useEffect(()=>{\n      Chain('https://yourschemaurl.com/graphql', {})('query')({\n        listUsers: userSelector\n      }).then( response => {\n        // 100% type-safe\n        setUsers(response.data)\n      })\n    };\n  },[])\n\n  return (\n    <div>\n      {users.map((u) => (\n        <div key={u.id} className=\"flex items-center\">\n          <div className=\"font-bold p-4 flex-1\">{getFullName(u)}</div>\n          <div className=\"p-4\">{u.createdAt}</div>\n        </div>\n      ))}\n    </div>\n  );\n};\n```\n",
    "data": {
      "link": "state",
      "title": "React State",
      "order": 2,
      "category": "Examples"
    },
    "excerpt": ""
  },
  "markdown/examples/forms.md": {
    "content": "\nTo use zeus with forms you should make use of it's generated ValueTypes. When submitting form using a mutation It is much easier and type-safe to do it using `ValueTypes`.\n\nHaving the following schema:\n\n```graphql\ntype Mutation {\n  createUser(user: CreateUser!): String\n}\n\ninput CreateUser {\n  firstName: String!\n  lastName: String!\n  age: Int\n  username: String!\n}\n```\n\nYou can use `ValueTypes['CreateUser']` as params for submit form function\n\n```ts\nconst submitForm = (values: ValueTypes['CreateUser']) => {\n  // ..,rest of the code, validation\n  return Chain('https://yourschemaurl.com/graphql', {\n    headers: {\n      Authorization: 'yourtoken',\n    },\n  })('mutation')({\n    createUser: [{ user: values }, true],\n  });\n};\n```\n",
    "data": {
      "link": "forms",
      "title": "Forms",
      "order": 1,
      "category": "Examples"
    },
    "excerpt": ""
  },
  "markdown/basics/use-as-a-library.md": {
    "content": "\n## Generate Code\n\nThis will be rarely used, but here you are! Generate Typescript and Javascript from GraphQL definitions\n\n```js\nimport { TreeToTS } from 'graphql-zeus';\nimport { Parser } from 'graphql-js-tree';\n\nconst schemaFileContents = `\ntype Query{\n    hello: String!\n}\nschema{\n    query: Query\n}\n`;\n\nconst typeScriptDefinition = TreeToTS.resolveTree(Parser.parse(schemaFileContents));\n```\n\n## Dynamically Fetch Schema\n\nThis is useful when you need your schema fetched from your GraphQL endpoint in-code\n\n```js\nimport { Utils } from 'graphql-zeus';\n\nUtils.getFromUrl('https://faker.graphqleditor.com/a-team/olympus/graphql').then((schemaContent) => {\n  // Use schema content here\n});\n```\n",
    "data": {
      "link": "library",
      "title": "Use as a library",
      "order": 5,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/subscriptions.md": {
    "content": "\n## Subscriptions\n\nZeus supports [GraphQL over WebSocket subscriptions](https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md) out-of-the-box and is compatible with many popular GraphQL servers.\n\nTwo implementations are supported:\n\n- **graphql-ws**: the modern WebSocket-based transport, implemented by [the graphql-ws package](https://www.npmjs.com/package/graphql-ws). It is the standard [used by Apollo](https://www.apollographql.com/docs/react/data/subscriptions/#choosing-a-subscription-library).\n- **legacy** (default): a transport based on raw WebSockets.\n\n### Generating the client\n\nTo use [graphql-ws](https://www.npmjs.com/package/graphql-ws) as your subscription transport you'll need to do the following:\n\n```sh\n# Generate the client\nzeus schema.gql ./ --subscriptions graphql-ws\n# Add graphql-ws to your project's dependencies\nnpm install graphql-ws\n```\n\nIf you want to use **legacy**, use `--subscriptions legacy` instead. You may need to install [ws](https://www.npmjs.com/package/ws) depending on your setup.\n\nNo matter what implementation you chose, usage is the same:\n\n```ts\n// Create a new Subscription with some authentication headers\nconst wsChain = Subscription('wss://localhost:4000/graphql', {\n  get headers() {\n    return { Authorization: `Bearer ${getToken()}` };\n  },\n});\n\n// Subscribe to new messages\nwsChain('subscription')({\n  message: {\n    body: true,\n  },\n}).on(({ message }) => {\n  console.log(message.body);\n});\n```\n\nIf you need to unsubscribe from a subscription (e.g. you are developing as Single Page App), you can do as follows:\n\n```ts\n// Subscribe to new messages\nconst onMessage = wsChain('subscription')({\n  message: {\n    body: true,\n  },\n});\nonMessage.on(({ message }) => {\n  console.log(message.body);\n});\n\n// Close the underlying connection\nonMessage.ws.close();\n```\n\nWhile you may use `wsChain('query')` or `wsChain('mutation')`, [Apollo strongly discourages this practice.](https://www.apollographql.com/docs/react/data/subscriptions/#3-split-communication-by-operation-recommended)\n",
    "data": {
      "link": "subscriptions",
      "title": "Subscriptions",
      "order": 8,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/spec.md": {
    "content": "\n## Zeus Spec\n\nPromise of type query data object is returned.\n\n```\nPROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({\n    ...FUNCTION_FIELD_PARAMS\n})(\n    ...QUERY_OBJECT\n).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )\n```\n\nSimple function params object\n\n```\nFUNCTION_FIELD_PARAMS = {\n  KEY: VALUE\n}\n```\n\nQuery object\n\n```\nQUERY_OBJECT = {\n    ...RETURN_PARAMS\n}\n```\n\nReturn params is an object containing RETURN_KEY - true if it is a `scalar`, RETURN_PARAMS if `type` otherwise it is a function where you pass field params and type return params.\n\n```\nRETURN_PARAMS = {\n    RETURN_KEY: true,\n    RETURN_KEY: {\n        ...RETURN_PARAMS\n    },\n    RETURN_FUNCTION_KEY:[\n        {\n            ...FUNCTION_FIELD_PARAMS\n        },\n        {\n            ...RETURN_PARAMS\n        }\n    ]\n}\n```\n\n### Use Alias Spec\n\n```\nRETURN_PARAMS = {\n  __alias: RETURN_PARAMS\n}\n```\n\nAccess aliased operation type-safe\n\n```\nPROMISE_RETURNING_OBJECT[ALIAS_STRING]\n```\n",
    "data": {
      "link": "spec",
      "title": "Specification",
      "order": 4,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/selector.md": {
    "content": "\n## Generate Reusable Selection Sets\n\nIn TypeScript Zeus can help make type-safe Zeus selection sets to reuse across queries.\n\n```ts\nimport { Selector, Chain } from './zeus';\n\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\nconst cardSelector = Selector('Card')({\n  name: true,\n  description: true,\n  Attack: true,\n  skills: true,\n  Defense: true,\n  cardImage: {\n    key: true,\n    bucket: true,\n  },\n});\n\nconst queryWithSelectionSet = await chain('query')({\n  drawCard: cardSelector,\n});\n```\n\n## Inferring the response type\n\nSometimes you would like to infer the response type. The it is best to use selectors\n\n```tsx\nimport { Selector, InputType, GraphQLTypes } from './zeus';\n\nexport const drawCardQuery = Selector(\"Query\"){\n  drawCard: {\n    Attack: true,\n    Children: true,\n    id: true,\n  },\n});\n\ntype InferredResponseType = InputType<GraphQLTypes['Query'], typeof drawCardQuery>;\n```\n",
    "data": {
      "link": "selector",
      "title": "Selector",
      "order": 1,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/javascript.md": {
    "content": "\n### JavaScript\n\nTo use with Javascript as an autocomplete tool you need to install Typescript, run the Zeus CLI, and then transform the result to JS using `tsc`\n\n```sh\n$ npm i -D typescript\n# OR\n# yarn add -D typescript\n```\n\nGenerate Zeus:\n\n```sh\n$ zeus schema.graphql ./\n```\n\nAnd transform it using Typescript:\n\n```sh\n$ npx tsc ./zeus/*.ts --declaration --target es5 --skipLibCheck\n# OR\n# yarn tsc ./zeus/*.ts --declaration --target es5 --skipLibCheck\n```\n\nThis will generate an `out.d.ts` file so that you can have autocompletion.\n",
    "data": {
      "link": "javascript",
      "title": "Javascript",
      "order": 6,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/getting-started.md": {
    "content": "\n## Getting Started\n\nUse the Zeus CLI to generate types and GraphQL clients based on your schema which you can then import into your projects to autocomplete, query and use GraphQL responses in a type-safe way.\n\n## Quick Start\n\n### Installation\n\n```sh\n$ npm i -g graphql-zeus\n# OR\n# yarn global add graphql-zeus\n```\n\nYou can also install locally to a project and then use as a npm or yarn script command or with `npx` or `yarn` directly eg:\n\n```sh\n$ npx zeus schema.graphql ./\n# OR\n# yarn zeus schema.graphql ./\n```\n\n### TypeScript\n\nZeus is Typescript native, you can refer to imported types directly from the generated output of the CLI\n\n```sh\n$ zeus schema.graphql ./\n```\n\n## Demo Endpoint\n\nAll demo code here is using the demo GraphQL endpoint of [Olympus Cards](https://app.graphqleditor.com/a-team/olympus) built with [GraphQL Editor](https://graphqleditor.com/). Feel free to check out the [GraphiQL interface](https://faker.graphqleditor.com/a-team/olympus/graphql) too.\n\n## Query With Zeus Chain Client\n\nYou can now use the Zeus `Chain` client from the generated output to make type-safe queries and mutations to your endpoint and receive type-safe responses.\n\n```ts\nimport { Chain } from './zeus';\n\n// Create a Chain client instance with the endpoint\nconst chain = Chain('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Query the endpoint with Typescript autocomplete for arguments and response fields\nconst listCardsAndDraw = await chain('query')({\n  cardById: [\n    {\n      cardId: 'da21ce0a-40a0-43ba-85c2-6eec2bf1ae21',\n    },\n    {\n      name: true,\n      description: true,\n    },\n  ],\n  listCards: {\n    name: true,\n    skills: true,\n    attack: [\n      { cardID: ['66c1af53-7d5e-4d89-94b5-1ebf593508f6', 'fc0e5757-4d8a-4f6a-a23b-356ce167f873'] },\n      {\n        name: true,\n      },\n    ],\n  },\n  drawCard: {\n    name: true,\n    skills: true,\n    Attack: true,\n  },\n});\n// listCardsAndDraw is now typed as the response of the query.\n```\n\nWhen querying a GraphQL field which takes an argument such as `cardById` above, then the fields are defined in terms of a tuple eg: cardById: `[ {...arguments} , {...response_selection_set} ]` the equivalent in gql syntax would be:\n\n```text\ncardById (cardId: \"da21ce0a-40a0-43ba-85c2-6eec2bf1ae21\") {\n  name\n  description\n}\n```\n\nFor fields which have no argument they receive only the response selection set object values.\n\nNote: `Chain` will also accept a second argument of fetch-like options to configure the client with properties such as `credentials`, `mode`, `headers` etc...\n\nNote: There is also an exported Zeus `Gql` convenience function is a Chain client pre-configured with the endpoint specified in the CLI.\n\n## Listen on a WebSocket - GraphQL Subscriptions\n\nUse the Zeus `Subscription` client creator in your generated output to create WebSocket connections to your GraphQL socket.\n\n```ts\nimport { Subscription } from './zeus';\n\n// Create a Subscription client instance with the endpoint\nconst sub = Subscription('https://faker.graphqleditor.com/a-team/olympus/graphql');\n\n// Call the client instance and listen for responses\nsub('subscription')({\n  deck: {\n    id: true,\n  },\n}).on((response) => {\n  console.log(response.deck);\n});\n```\n\n[Read more about subscriptions](./subscriptions)\n\n## Usage with NodeJS\n\nGenerates clients for use with Node.js\n\n```sh\n$ zeus schema.graphql ./  --node\n```\n\n## Usage with React Native\n\nAs normal\n\n```sh\n$ zeus schema.graphql ./\n```\n\n## Other CLI Options\n\nSpecify the output folder with second argument\n\n```sh\n$ zeus schema.graphql ./generated\n```\n\nOutput Typescript Only with `--typescript` flag\n\n```sh\n$ zeus schema.graphql ./ --typescript\n```\n\nLoad your schema from an URL with an URL in the first argument\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./\n```\n\nDownload and save GraphQL schema to a local path with `--graphql=savePath` flag\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --graphql=generated\n```\n\nGenerate and save a JSON schema to a local path with `--jsonSchema=savePath` flag\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --graphql=generated\n```\n\nAdd a header value with `--header=value` flag\n\n```sh\n$ zeus https://faker.graphqleditor.com/a-team/olympus/graphql ./ --header=Authorization:myNiceAuthHeader\n```\n\nGet help with Zeus CLI with:\n\n```sh\n$ zeus help\n```\n\n### Tip:\n\nAdd a script entry in your `package.json` file for quickly calling Zeus generation:\n\n```json\n\"scripts\": {\n//...\n\"generate\": \"zeus https://faker.graphqleditor.com/a-team/olympus/graphql zeusGenerated --typescript --header='My-Auth-Secret:JsercjjJY5MmghtHww6UF' --apollo\"\n},\n```\n",
    "data": {
      "link": "getting-started",
      "title": "Getting Started",
      "order": 0,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/esmodule.md": {
    "content": "\n#### Return with .js import for esModules\n\nDue to validity of `.js` imports in TS for esmodules you can use flag `es` to generate `.js` imports\n\n```sh\n$ zeus schema.graphql ./ --es\n```\n",
    "data": {
      "link": "esmodules",
      "title": "EsModules",
      "order": 3,
      "category": "Basics"
    },
    "excerpt": ""
  },
  "markdown/basics/custom.-fetch.md": {
    "content": "\n## Perform Queries with Thunder - An Abstracted Fetch Function\n\nWith Zeus `Thunder` you have total control of fetch function but will not lose the result type. \u26A1\uFE0F\n\n```js\nimport { Thunder } from './zeus';\n\n// Create thunder fetch client with endpoint, options and response handlers\nconst thunder = Thunder(async (query) => {\n  const response = await fetch('https://faker.graphqleditor.com/a-team/olympus/graphql', {\n    body: JSON.stringify({ query }),\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  if (!response.ok) {\n    return new Promise((resolve, reject) => {\n      response\n        .text()\n        .then((text) => {\n          try {\n            reject(JSON.parse(text));\n          } catch (err) {\n            reject(text);\n          }\n        })\n        .catch(reject);\n    });\n  }\n\n  const json = await response.json();\n\n  return json.data;\n});\n\n// Call thunder client with type-safe arguments, fields and get type-safe result type\nconst listCardsAndDraw = await thunder('query')({\n  cardById: [\n    {\n      cardId: 'sdsd',\n    },\n    {\n      description: true,\n    },\n  ],\n  listCards: {\n    name: true,\n    skills: true,\n    attack: [\n      { cardID: ['s', 'sd'] },\n      {\n        name: true,\n      },\n    ],\n  },\n  drawCard: {\n    name: true,\n    skills: true,\n    Attack: true,\n  },\n});\n```\n",
    "data": {
      "link": "custom-fetch",
      "title": "Custom fetch",
      "order": 7,
      "category": "Basics"
    },
    "excerpt": ""
  }
};
export {
  htmlContent
};
