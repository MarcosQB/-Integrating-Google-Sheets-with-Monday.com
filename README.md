# Integrating Google Sheets with Monday.com
### Proposta:
##### A área comercial de umas das organizações que trabalhei solicitou um funil de vendas que fosse alimentado pelos dados dos clientes que eles mantinham armazenados na plataforma de gestão de projetos Monday.com.


### Solução:
##### A fim de entregar o que me foi proposto, eu decidi transferir os dados do Monday para o Google Sheets me utilizando da programação de um script em linguagem JavaScript. E para tornar isso possível, a cada 12 horas o script é acionado automaticamente e faz requisições para a API do Monday que retorna os dados dos clientes e salva em uma planilhas do Google Sheets, assim, utilizo funções nativas do Sheets para realizar os calculos e criar o Funil de vendas. 


### Detalhes Técnicos
* ######  A interface de desenvolvimento utilizada foi o Google Apps Script;
* ######  A linguagem de programação utilizada foi a JavaScript;
* ###### Para tratar e armazenados os dados foi utilizado uma planilha da Google

#### [Confira o script clikando aqui!](https://github.com/MarcosQB/-Integrating-Google-Sheets-with-Monday.com/blob/main/Google%20Sheets%20Integration%20Monday.js)
