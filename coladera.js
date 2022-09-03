// Coladera de Eratostenes
// Del 1 al 1000

function coladera() {
    let numeros = [];
    let primos = [];

    for (let i = 0; i < 1000; i++) {
        numeros.push(true);
    }

    for (let i = 2; i < 1000; i++) {
        if (numeros[i]) {
            primos.push(i);
            for (let j = i * i; j < 1000; j += i) {
                numeros[j] = false;
            }
        }
    }

    for (let i = 2; i < 1000; i++) {
        if (numeros[i]) {
            console.log(i);
        }
    }
}

coladera();