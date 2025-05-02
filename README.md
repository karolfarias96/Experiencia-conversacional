# FURIA Connect - Plataforma de Interação para Fãs

## 📋 Visão Geral

FURIA Connect é uma plataforma completa para fãs da FURIA Esports, organização brasileira de esportes eletrônicos. O projeto consiste em duas partes principais:

1. *Interface Web*: Uma plataforma interativa onde fãs podem acompanhar jogos ao vivo, interagir via chat e ver estatísticas dos jogadores e partidas.
2. *Bot Telegram (@FURIA_KAROLBOT)*: Um bot conversacional que fornece informações sobre equipes, jogadores e competições da FURIA.

## 🌟 Funcionalidades Principais

### Interface Web (FURIA Connect)
- *Transmissão ao vivo* de partidas com estatísticas em tempo real
- *Chat em tempo real* para torcedores interagirem durante as partidas
- *Estatísticas detalhadas* dos jogadores e equipes
- *Calendário de jogos* e notícias atualizadas
- *Design responsivo* com tema escuro e elementos neon para melhor experiência visual
- *Integração com o bot Telegram* para suporte direto ao usuário

### Bot Telegram (@FURIA_KAROLBOT)
- *Informações sobre equipes* de diferentes modalidades (CS2, LoL, Valorant, etc.)
- *Escalações atualizadas* dos times
- *Resposta a perguntas frequentes* sobre a organização
- *Interface conversacional amigável* com linguagem personalizada para fãs
- *Acesso rápido à logomarca* e informações institucionais

## 🗂️ Estrutura do Repositório

furia-connect/

│   ├── index.html               # Estrutura HTML principal
│   ├── styles.css               # Estilos e animações
│   └── script.js                # Funcionalidades JavaScript
│   ├── agent.json               # Configuração principal do agente
│   ├── package.json             # Metadados e versão
│   ├── intents/                 # Intents para o bot conversacional
│   │   ├── Default Welcome Intent.json
│   │   ├── Default Fallback Intent.json
│   │   ├── Direcionamento para os times.json
│   │   ├── Direcionamento para os times - CS.json
│   │   ├── Direcionamento para os times - LOL.json
│   │   ├── Logomarca.json
│   │   └── Quem somos_.json
│   └── usersays/                # Exemplos de entradas do usuário para cada intent
│       ├── Default Welcome Intent_usersays_pt-br.json
│       ├── Direcionamento para os times_usersays_pt-br.json
│       ├── Direcionamento para os times - CS_usersays_pt-br.json
│       ├── Direcionamento para os times - LOL_usersays_pt-br.json
│       ├── Logomarca_usersays_pt-br.json
│       └── Quem somos__usersays_pt-br.json
│

## 🖥️ Interface Web

A interface web da FURIA Connect foi desenvolvida com foco na experiência do usuário e estética que reflete a identidade visual da marca.

### Tecnologias Utilizadas
- *HTML5* para estrutura semântica
- *CSS3* para estilização e animações avançadas
- *JavaScript* para interatividade e funcionalidades em tempo real
- *Google Fonts* (Montserrat, Bebas Neue, Orbitron) para tipografia
- *Font Awesome* para ícones

### Características de Design
- *Tema escuro* com texturas sutis para conforto visual
- *Acentos em cores neon* (roxo, magenta e azul) para elementos interativos
- *Animações fluidas* para melhor feedback visual
- *Design responsivo* adaptado para diferentes dispositivos

### Seções Principais
1. *Hero* - Apresentação da plataforma com links rápidos
2. *Live Match* - Acompanhamento da partida atual com estatísticas
3. *Chat* - Interação em tempo real entre torcedores
4. *Player Stats* - Estatísticas detalhadas dos jogadores
5. *Upcoming Matches* - Calendário de próximos jogos
6. *News* - Últimas notícias e atualizações

### Integração com Bot Telegram
- Banner em destaque para divulgação do bot
- QR Code para acesso rápido
- Animações para chamar atenção para o recurso

## 🤖 Bot Telegram (@FURIA_KAROLBOT)

O bot Telegram foi desenvolvido para fornecer uma maneira rápida e conveniente para os fãs obterem informações sobre a FURIA Esports.

### Tecnologia
- Desenvolvido com Dialogflow (Google Cloud)
- Linguagem: Português do Brasil (pt-br)
- Plataforma: Telegram

### Principais Intents
1. *Boas-vindas* - Mensagens personalizadas com tom de voz da marca
2. *Times* - Informações sobre as diferentes modalidades (CS2, LoL, Valorant, etc.)
3. *Escalações* - Jogadores atuais de cada equipe
4. *Institucional* - História e informações sobre a organização
5. *Logomarca* - Acesso à identidade visual da marca

### Exemplos de Comandos
- "Times" - Mostra modalidades disponíveis
- "CS" ou "CS GO" - Exibe escalação atual do time de Counter-Strike
- "LOL" ou "League of Legends" - Mostra escalação do time de League of Legends
- "Logo" ou "Logomarca" - Exibe o símbolo da FURIA
- "Quem são vocês?" - Fornece informações institucionais

## ⚙️ Configuração e Instalação

### Interface Web
1. Clone o repositório:

2. Abra o arquivo index.html em um navegador web ou configure um servidor local

3. Clique em index.html

### Bot Telegram
1. Importação para Dialogflow:
cd furia-connect/telegram-bot
zip -r furia-bot.zip .

2. No console do Dialogflow:
   - Crie um novo agente
   - Vá para Configurações > Export and Import
   - Selecione "Import from zip" e carregue o arquivo furia-bot.zip

3. Configuração do Telegram:
   - No Dialogflow, vá para Integrations > Telegram
   - Siga as instruções para conectar com o BotFather do Telegram
   - Use o token gerado para finalizar a configuração

## 🚀 Tecnologias Utilizadas

### Web
- HTML5, CSS3, JavaScript
- Google Fonts
- Font Awesome

### Bot
- Dialogflow (NLP e gerenciamento de conversas)
- API do Telegram

## 📜 Regras de Contribuição

1. Crie um fork do repositório
2. Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade)
3. Faça commit das alterações (git commit -m 'feat: adiciona nova funcionalidade')
4. Push para a branch (git push origin feature/nova-funcionalidade)
5. Abra um Pull Request

### Padrões de Código
- Use nomes descritivos para variáveis e funções
- Siga o padrão de commits convencionais (feat, fix, docs, style, refactor, test, chore)
- Mantenha a identidade visual da marca em novas implementações

## 📝 Licença

Este projeto é propriedade da FURIA Esports e seu uso é restrito. Todos os direitos reservados.

## 📞 Contato

Para mais informações sobre a FURIA Esports, visite:
- Website: [FURIA.gg](https://furia.gg)
- Twitter: [@FURIA](https://twitter.com/FURIA)
- Instagram: [@furiagg](https://instagram.com/furiagg)
- Telegram: [@FURIA_KAROLBOT](https://t.me/FURIA_KAROLBOT)
