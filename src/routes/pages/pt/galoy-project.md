---
title: O Projeto Galoy
description: Conheça o Galoy, a infraestrutura bancária Bitcoin de código aberto que alimenta o Flash
---

## O que é o Galoy?

O Galoy é a infraestrutura bancária Bitcoin de código aberto que alimenta o Flash e outros aplicativos Bitcoin ao redor do mundo. Criado para tornar o Bitcoin e a Lightning Network acessíveis a comunidades globalmente, o Galoy fornece a base para serviços financeiros modernos e inclusivos construídos sobre Bitcoin.

## Missão do Galoy

A missão do Galoy é acelerar a adoção do Bitcoin tornando mais fácil construir soluções bancárias Bitcoin. Ao criar infraestrutura gratuita e de código aberto, o Galoy permite que empresas, comunidades e países forneçam serviços Bitcoin aos seus usuários sem ter que construir sistemas técnicos complexos do zero.

O projeto visa:

- Reduzir a barreira de entrada para serviços bancários Bitcoin
- Trazer inclusão financeira para bilhões de pessoas não bancarizadas em todo o mundo
- Criar padrões abertos e interoperáveis para bancos Bitcoin
- Fomentar um ecossistema global de aplicações financeiras Bitcoin

## Como o Flash Usa o Galoy

O Flash é construído sobre a infraestrutura do Galoy, aproveitando seus componentes testados em batalha para fornecer uma experiência de usuário perfeita. Os principais componentes do Galoy que alimentam o Flash incluem:

### Recursos Bancários Principais

- **Gerenciamento de Contas**: Registro de usuários, integração KYC e estruturas de conta
- **Carteiras Bitcoin e Lightning**: Infraestrutura segura de carteira para transações on-chain e Lightning
- **Processamento de Pagamentos**: Tratamento de depósitos, saques e transferências internas
- **Integração Lightning Network**: Gerenciamento de canais, liquidez e otimização de roteamento

### Infraestrutura Backend

- **Camada de API**: APIs RESTful e GraphQL para aplicações cliente
- **Sistema de Autenticação**: Autenticação e autorização segura de usuários
- **Motor de Contabilidade**: Sistema de escrituração por partidas dobradas para precisão financeira
- **Serviço de Notificação**: Notificações push para transações e atualizações de conta

### Ferramentas Administrativas

- **Ferramentas de Conformidade**: Monitoramento e relatórios de transações
- **Painel de Atendimento ao Cliente**: Ferramentas de gerenciamento e suporte ao usuário
- **Gerenciamento de Tesouraria**: Ferramentas para gerenciar reservas Bitcoin
- **Painel de Análise**: Insights sobre uso e desempenho do sistema

## Histórias de Sucesso do Galoy

Além do Flash, o Galoy alimenta várias aplicações Bitcoin bem-sucedidas em todo o mundo:

### Bitcoin Beach Wallet

A implementação original do Galoy foi lançada em El Zonte, El Salvador (conhecido como "Bitcoin Beach") antes do país adotar o Bitcoin como moeda legal. Esta carteira focada na comunidade provou que o Bitcoin poderia servir como dinheiro do dia a dia em uma economia local e ajudou a inspirar a adoção nacional do Bitcoin.

### Bitcoin Jungle

Uma iniciativa comunitária de Bitcoin na Costa Rica usando a infraestrutura Galoy para levar Bitcoin a comerciantes e residentes locais, focando na criação de economias circulares alimentadas por Bitcoin.

### Ibex Mercado

A Ibex aproveita a tecnologia do Galoy para fornecer serviços Bitcoin e Lightning Network para empresas em toda a América Latina, oferecendo processamento de pagamentos, serviços de remessa e ferramentas financeiras.

## Arquitetura Técnica

A arquitetura do Galoy é modular e flexível, permitindo que implementações como o Flash personalizem seus serviços mantendo a funcionalidade principal:

### Componentes Principais

- **Integração Bitcoin Core**: Conecta-se à rede Bitcoin para transações on-chain
- **Integração LND**: Alimenta as capacidades da Lightning Network
- **API GraphQL**: Fornece acesso a dados para aplicações cliente
- **MongoDB Seguro**: Armazena dados de usuários e transações
- **Backend NodeJS**: Gerencia lógica de aplicação e processos em segundo plano
- **Orquestração Kubernetes**: Garante operações confiáveis e escaláveis

### Recursos de Segurança

- **Armazenamento Frio Multi-assinatura**: Para gerenciamento seguro de reservas
- **Integração HSM**: Segurança de hardware para gerenciamento de chaves
- **Registro Abrangente**: Para monitoramento de segurança e conformidade
- **Auditorias de Segurança Regulares**: Por empresas de segurança terceirizadas

## Desenvolvimento de Código Aberto

O Galoy é completamente de código aberto, com todo o código disponível no GitHub sob licença MIT. Este compromisso com o código aberto garante:

- **Transparência**: Qualquer pessoa pode inspecionar o código para segurança ou funcionalidade
- **Colaboração**: Desenvolvedores em todo o mundo podem contribuir com melhorias
- **Soberania**: Os usuários podem auto-hospedar suas próprias instâncias se desejado
- **Inovação**: Recursos desenvolvidos por uma implementação beneficiam todas

## Envolvendo-se com o Galoy

Desenvolvedores interessados no Galoy podem contribuir de várias maneiras:

### Para Desenvolvedores

- **GitHub**: Explore e contribua para o [código do Galoy](https://github.com/GaloyMoney/galoy)
- **Documentação de Desenvolvimento**: Comece com a [documentação para desenvolvedores](https://dev.galoy.io)
- **Chat da Comunidade**: Junte-se às discussões no [Slack](https://join.slack.com/t/galoymoney-workspace/shared_invite/zt-rvnhsdb5-72AZCD_jzw6_Q05aCs0SgA)

### Para Empresas

- **Implantar o Galoy**: Lance sua própria plataforma bancária Bitcoin
- **Integração**: Conecte serviços existentes ao ecossistema Galoy
- **Personalização**: Adapte o Galoy às suas necessidades específicas de mercado

## Desenvolvimento Futuro

O projeto Galoy continua a evoluir com recursos que beneficiarão os usuários do Flash:

- **Sistema Federado**: Permitindo que diferentes instâncias Galoy interajam perfeitamente
- **Gerenciamento Avançado de Tesouraria**: Ferramentas para otimizar reservas Bitcoin
- **Recursos de Privacidade Aprimorados**: Melhorando a privacidade financeira do usuário
- **Rampas Fiat**: Melhor integração com sistemas financeiros tradicionais
- **SDKs para Desenvolvedores**: Facilitando a construção sobre o Galoy

## Recursos

- [Site do Galoy](https://galoy.io)
- [Repositório GitHub](https://github.com/GaloyMoney/galoy)
- [Documentação](https://dev.galoy.io)
- [Twitter](https://twitter.com/GaloyMoney)

À medida que o Flash continua a crescer, sua base na infraestrutura de código aberto do Galoy garante que ele permaneça na vanguarda da tecnologia financeira Bitcoin, mantendo a segurança e confiabilidade que os usuários esperam.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="breez-sdk" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Breez SDK
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="ibex-mercado" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      IBEX Mercado
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>