---
title: Breez SDK
description: Conheça o Breez SDK que alimenta os recursos da Lightning Network do Flash
---

## O que é o Breez SDK?

O Breez SDK é um poderoso kit de ferramentas de código aberto que permite aos desenvolvedores integrar rapidamente as capacidades da Lightning Network do Bitcoin em aplicações móveis e web. Como uma das tecnologias principais que alimentam o Flash, o Breez SDK lida com as operações complexas da Lightning Network nos bastidores, permitindo uma experiência de usuário perfeita.

## Como o Flash Usa o Breez SDK

O Flash aproveita o Breez SDK para fornecer vários recursos principais da Lightning Network:

### Pagamentos Instantâneos

O Breez SDK permite que o Flash processe pagamentos Lightning em milissegundos, independentemente do valor da transação. Isso torna possível:

- Enviar Bitcoin globalmente sem esperar confirmações do blockchain
- Processar micropagamentos tão pequenos quanto alguns satoshis
- Suportar pagamentos em fluxo para serviços pay-per-use
- Permitir liquidações instantâneas para comerciantes

### Experiência Lightning Simplificada

Um dos maiores desafios com a Lightning Network é gerenciar canais, liquidez e backups. O Breez SDK lida com essas complexidades automaticamente, permitindo que o Flash ofereça:

- Configuração Lightning sem configuração para novos usuários
- Gerenciamento automático de canais e liquidez
- Backups seguros e criptografados dos estados dos canais
- Processo de recuperação simplificado se um dispositivo for perdido

### Integração LSP

O Breez SDK conecta o Flash a Provedores de Serviços Lightning (LSPs), que fornecem a infraestrutura necessária para operação confiável da Lightning:

- Liquidez de entrada para receber pagamentos
- Criação e gerenciamento de canais
- Assistência de roteamento para pagamentos
- Otimização de taxas em toda a rede

## Capacidades Técnicas

O Breez SDK fornece ao Flash vários recursos técnicos avançados:

### Arquitetura Não Custodial

Ao contrário de muitas carteiras Lightning que mantêm fundos de usuários, o Breez SDK permite funcionalidade não custodial:

- Os usuários mantêm o controle de suas chaves privadas
- Nenhum terceiro pode congelar ou apreender fundos
- O Flash nunca tem acesso aos fundos dos usuários
- Experiência financeira auto-soberana

### Suporte Multi-Plataforma

O design versátil do Breez SDK suporta o Flash em múltiplas plataformas:

- Integração nativa iOS
- Integração nativa Android
- Compatibilidade com navegador web
- Suporte para aplicação desktop

### Recursos Avançados de Pagamento

Com o Breez SDK, o Flash pode suportar diversos tipos de pagamento:

- Pagamentos Lightning padrão
- Suporte a Lightning Address (formato user@domain.com)
- Compatibilidade LNURL para fluxos de pagamento aprimorados
- Keysend para pagamentos diretos sem faturas
- Pagamentos espontâneos para nós

### Backup e Recuperação Simplificados

O Breez SDK fornece ao Flash mecanismos robustos de backup:

- Backups criptografados do estado do canal
- Compatibilidade com backup estático de canal
- Opções de integração com armazenamento em nuvem
- Recuperação a partir da frase semente quando necessário

## Componentes do Breez SDK

O Breez SDK consiste em vários componentes que o Flash utiliza:

### Módulo Lightning Principal

Este lida com as operações fundamentais da Lightning Network:

- Criação e gerenciamento de canais de pagamento
- Construção e assinatura de transações
- Monitoramento do estado do canal
- Gerenciamento de tabela de roteamento

### Interface Blockchain

Conecta-se ao blockchain Bitcoin para operações on-chain:

- Monitoramento de transações on-chain
- Abertura e fechamento de canais
- Verificação de transação de financiamento
- Sincronização da cadeia

### Motor de Processamento de Pagamentos

Lida com todos os aspectos de envio e recebimento de pagamentos:

- Criação e análise de faturas
- Busca de caminho de pagamento
- Suporte a pagamentos multi-parte
- Rastreamento de status de pagamento

### Camada de Segurança

Garante que os fundos permaneçam seguros:

- Armazenamento criptografado para dados sensíveis
- Gerenciamento seguro de chaves
- Integração de torre de vigilância para segurança do canal
- Mecanismos de proteção contra fraude

## Vantagens para Usuários do Flash

Ao construir sobre o Breez SDK, o Flash oferece benefícios significativos aos usuários:

### Experiência de Usuário Simplificada

- Sem necessidade de entender canais ou liquidez
- Configuração instantânea sem conhecimento técnico
- Pagamentos funcionam de forma confiável sem intervenção do usuário
- Recuperação é simples se um dispositivo for perdido

### Máximo Controle Financeiro

- Design não custodial mantém os usuários no controle
- Sem KYC necessário para funcionalidade básica
- Transações privadas sem intermediários
- Autocustódia sem complexidade técnica

### Capacidades Avançadas

- Suporte aos recursos mais recentes da Lightning
- Atualizações regulares com novas funcionalidades
- Compatibilidade com o ecossistema Lightning mais amplo
- Acesso a tipos de pagamento inovadores à medida que surgem

## Contribuindo para o Breez SDK

O Breez SDK é um projeto de código aberto que recebe contribuições de desenvolvedores:

- **Repositório GitHub**: [Breez SDK no GitHub](https://github.com/breez/breez-sdk)
- **Documentação**: Guias abrangentes para implementação
- **Comunidade**: Comunidade ativa de desenvolvedores para suporte

## Desenvolvimento Futuro

O Breez SDK continua a evoluir com novos recursos que aprimorarão o Flash:

- **Suporte a Canais Taproot**: Para privacidade aprimorada e taxas mais baixas
- **BOLT12 Offers**: Padrão de pagamento Lightning de próxima geração
- **Gerenciamento de Taxas Aprimorado**: Para melhor confiabilidade de pagamento
- **Otimizações de Ponto de Venda**: Para aceitação por comerciantes
- **Melhorias de Interface Web**: Para melhor suporte multi-plataforma

## Recursos

- [Site do Breez](https://breez.technology)
- [Breez SDK GitHub](https://github.com/breez/breez-sdk)
- [Documentação para Desenvolvedores](https://breez.github.io/breez-sdk/)
- [Twitter](https://twitter.com/Breez_Tech)

À medida que o Flash continua a crescer, o Breez SDK fornece a base sólida necessária para funcionalidade confiável e amigável da Lightning Network. Esta parceria entre o Flash e a Breez Technology representa a natureza colaborativa do ecossistema Bitcoin de código aberto, onde componentes especializados trabalham juntos para criar experiências excepcionais para o usuário.

<!-- Navigation links -->
<div class="flex justify-between items-center mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
  <div class="w-1/3 text-left">
    <a href="third-party-vendors" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
      </svg>
      Todas as Integrações
    </a>
  </div>
  <div class="w-1/3 text-center">
    <!-- Optional center content -->
  </div>
  <div class="w-1/3 text-right">
    <a href="galoy-project" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md">
      Projeto Galoy
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</div>