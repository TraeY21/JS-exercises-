// Escreva uma funcao que recebe um numero e retorne o seguinte: 
// Numero divisivel por 3 = Fizz 
// Numero divisivel por 5 = Buzz 
// Numero divisivel por 3 e 5 = FizzBuzz 
// Numero nao divisivel por 3 e 5 = Retorna o propio numero 
// Checar se o numero e realmente um numero
// Use a funcao com numeros de 0 a 100

const oni = (n) => {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    } else if (n % 3 === 0) {
        return 'Fizz';
    } else if (n % 5 === 0) {
        return 'Buzz';
    } else {
        return n;
    }
};

for (let i = 0; i < 100; i++) {
    console.log(i, oni(i));
}