function verificadorFibonacci(numero) {
    let a = 0, b = 1;  
    if (numero === a || numero === b) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }   
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
        
        if (b === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
    }
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}
function  main() {
    const numero = parseInt(prompt("Informe um número: "));
    const numeroFormatado = isNaN(numero) ? "informado" : numero;
    const novoNumero = confirm(verificadorFibonacci(numeroFormatado))
    if (novoNumero) {
        return main()
    }
}