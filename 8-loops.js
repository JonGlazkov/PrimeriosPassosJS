console.log(`\n Trabalhando com Loops`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
    `Natal`,
    `Gramado`
)

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Natal";

console.log("\n Destinos Possíveis:");
console.log(listaDeDestinos); //Destinos disponíveis 

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let contador = 0;
let destinoExiste = false;
while (contador < 6) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Seu destino está disponível!");
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}

//Declaração de variável; condição ; incremento (adiciona)
for (let i = 0; i < 3 ; i++) {
    if (listaDeDestinos[i] == destino) {
        console.log("Seu destino está disponível!");
        destinoExiste = true;
    }
    contador += 1;
}