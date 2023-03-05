// criando uma calculadora 
function calculadora() 

    // definindo as operações e peando o valor de entrada do usuário
    // usamos "/n" para fazer uma quebra de linha
    const operacao = Number(prompt('escolha ma opção: \n1 - soma (+) \n 2 - subtração (-) \n 3 - multiplicação (*) \4 - divisão real (/) \n 5 - divisão inteira (%) \n 6 - potenciação (**)'));

    // verificação se a operação é válida 
    if (!operacao || operacao >= 7) {
        alert('erro - operação inválida');
        calculadora();
    } else {
        // deefinindo as variáveis
        // todas as entradas devem ser do tipo number
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // verificando se as variáveis são válidas
        if(!n1 || !n2) {
            alert('erro - parâmetros inválidos');
            calculadora();
        } else {
            
            // definindo as funções
            function soma(){
                resultado = n1 + n2;
                
                // mostrando p resultado usando template strigs
                alert('${n1} + ${n2} = ${resultado}');
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert('${n1} - ${n2} = ${resultado}');
            novaOperação();
            } 
             function muultiplicacao() {
                resultado = n1 * n2;
                alert('${n1} * ${n2} = ${resultado}');
                novaOperacao();
             }
             
        }
    }