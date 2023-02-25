# Bem-vido ao Guia de Contribuição do grupo Pizy

## Guia do Novo Contribuidor

Para obter uma visão geral do projeto, leia o [README](README.md). Aqui estão alguns recursos para ajudá-lo a começar com as contribuições de código aberto:

##### Documentações

- [Tutorial de Git](https://git-scm.com/docs)
- [Configurando git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)

##### Tutoriais

- [Entendendo Git](https://www.youtube.com/watch?v=6Czd1Yetaac&t=33s&ab_channel=FabioAkita)
- [Criando uma contribuição Open Source do zero](https://www.youtube.com/watch?v=mcd7lqpUzIA&t=1868s&ab_channel=Rocketseat)

## Começando a contribuir

### Issues

#### Criando uma nova issue

Se você identificar um problema com o repositório,
[pesquise se o problema já existe](https://github.com/gelzinn/pizy/issues).
Se um problema relacionado não existir, você pode
[abrir uma nova issue](https://github.com/gelzinn/pizy/issues/new).

#### Resolvendo uma issue

Examine nossos [problemas existentes](https://github.com/gelzinn/pizy/issues) para encontrar um que lhe interesse. Você pode restringir a pesquisa usando `rótulos` para filtrar.

Como regra geral, não atribuímos as issues a ninguém além dos mantenedores. Se você encontrar um problema para resolver, poderá abrir um PR com uma correção.

### Fazendo mudanças

#### Fazendo alterações na documentação

Clique em **Fazer uma contribuição** na parte inferior de qualquer página de documentação para fazer pequenas alterações, como erro de digitação, correção de frase ou link quebrado. Isso leva você ao arquivo `.md` onde você pode realizazr suas alterações e [solicitar um pull request](#pull-request) para revisão.

#### Fazendo alterações no código

##### Requerimentos

- [Node.js](https://nodejs.org/en/download/) >= 19.6.x
- [Pnpm](https://pnpm.io/installation) >= 7.x

1. Fork no repositório.

- Usando a linha de comando:
  - [Dê um fork no repositório](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) para que você possa fazer suas alterações sem afetar o projeto original até que você esteja pronto para dar merge.

2. Instale ou atualize o **Node.js**, até a versão especificada no `.tool-version`.

3. Crie uma nova branch a partir da **dev** e comece a relizar suas mudanças.

### Realizando commits

- Atualmente seguimos o padrão de commits abaixo:

- `chore` - atualizações de tarefas.

- `feat`- novo recurso.

- `fix` - solucionando um problema.

- `docs` - mudanças na documentação.

- `test` - alterações em testes.

- `build` - arquivos de build.

- `deps` - arquivos de dependências.

- `perf` - performance.

- `style` - formatações de **código**.

- `refactor` - refatorações.

- `ci` - integração contínua.

### Pull Request

Quando terminar as alterações, crie uma solicitação de pull request, também conhecida como PR.

- Não se esqueça de [atribuir o PR a uma issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) se você estiver resolvendo uma.

- Habilite o checkbox da opção para [habilitar os mantenedores à edição](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) para que a branch possa ser atualizada para o merge.
  Depois de enviar seu PR, um membro da equipe revisará sua proposta. Podemos fazer perguntas ou solicitar informações adicionais.

- Nós podemos pedir alterações adicionais antes de dar merge da sua branch, utilizando as [alterações sugeridas](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) ou comentários do pull request. Você pode aplicar as alterações sugeridas diretamente por meio da interface gráfica provida pelo Github, assim como pode fazer quaisquer outras alterações em seu fork e, em seguida, confirmá-las em seu branch que será automaticamente atualizado no pull request.

- Ao atualizar seu PR e aplicar as alterações, marque cada conversa como [resolvida](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).

- Se tiver algum problema, dê uma olhada nesse [tutorial de git](https://github.com/skills/resolve-merge-conflicts) para ajudá-lo a resolver conflitos de merge e outros problemas.
