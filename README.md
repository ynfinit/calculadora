# Calculadora

## Como funciona?

### Variáveis:

1. ***prompt***: Isso importa e configura a biblioteca prompt-sync, que é usada para receber entrada do usuário.

2. ***primeiroNumero***: Pergunta qual é o primeiro número e guarda dentro da variável.

3. ***operação***: Pergunta qual operação o usiario deseja usar e guarda dentro da variável.

4. ***segundoNumero***: Pergunta qual é o primeiro número e guarda dentro da variável.

### Switch Case para Operações:

O código utiliza um switch case para determinar qual operação matemática realizar com base no valor da variável operacao:

***case '+'***: Soma os dois números.

***case '-'***: Subtrai o segundo número do primeiro.

***case 'x'***: Multiplica os dois números.

***case '/'***: Divide o primeiro número pelo segundo.

***case '%'***: Calcula a porcentagem do primeiro número em relação ao segundo.

***dafault***: Se o usuário inserir uma operação inválida (que não seja +, -, x, /, %), o código exibe a mensagem 'Operação inválida, tente novamente.'.

Cada caso realiza a operação apropriada usando parseFloat para converter os números (que são inicialmente strings devido à entrada do usuário) em valores numéricos.

### Resumo:

Este código JavaScript cria uma calculadora simples que aceita entrada do usuário para dois números e uma operação matemática, executa a operação escolhida e exibe o resultado no console. É um exemplo útil para demonstrar o uso de entrada de usuário, switch case e operações matemáticas básicas em JavaScript.