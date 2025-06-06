# playground

🧪 Testes Automatizados com Cypress

Este repositório contém um projeto de automação de testes end-to-end desenvolvido com o Cypress e executado com Yarn, utilizando a linguagem de programação JavaScript.

O objetivo deste projeto é validar o comportamento de aplicações web de forma rápida, confiável e legível, promovendo qualidade contínua no desenvolvimento.

🚀 Tecnologias Utilizadas

  ✅ Cypress — Framework de testes E2E moderno e intuitivo

  ✅ JavaScript — Linguagem base para criação dos testes

  ✅ Node.js — Ambiente de execução

  ✅ Yarn — Gerenciador de pacotes usado no projeto

📁 Estrutura do Projeto

bash
  Copiar
  Editar
  📦 cypress/
   ┣ 📂 e2e/             # Testes automatizados
   ┣ 📂 fixtures/        # Massa de dados estática (JSON)
   ┣ 📂 support/         # Comandos e configurações globais
  ┣ 📄 cypress.config.js # Configurações do Cypress
  ┣ 📄 package.json      # Dependências e scripts
  
📦 Como instalar
  Antes de começar, certifique-se de ter o Node.js e o Yarn instalados na sua máquina.

  bash
  Copiar
  Editar
  git clone https://github.com/JosianeBernardo/playground.git
  cd playground
  yarn install
  
🧪 Como executar os testes
  Modo interativo (interface do Cypress):
    bash
    Copiar
    Editar
    yarn cypress open
    Modo headless (terminal):
      bash
      Copiar
      Editar
      yarn cypress run
  
⚙️ Pré-requisitos
  Node.js (versão recomendada: 18.x ou superior)

  Yarn instalado globalmente
  Instale com:

    bash
    Copiar
    Editar
    npm install -g yarn
    
💡 Dicas
  Personalize suas fixtures e comandos customizados dentro da pasta support/.

  Utilize variáveis de ambiente para controlar diferentes cenários de execução.

  Integre facilmente com ferramentas de CI como GitHub Actions, GitLab CI ou Jenkins.

📄 Licença
  Este projeto está licenciado sob a Licença MIT.
