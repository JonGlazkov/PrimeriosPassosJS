console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`,
    `Natal`,
    `Gramado`
)

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos Possíveis:");
//console.log(listaDeDestinos); Destinos disponíveis 

// if (idadeComprador >= 18) {
//     console.log(`Os destinos que estão disponíveis são`, (listaDeDestinos));
//     console.log(`O destino escolhido foi`, (listaDeDestinos.splice(4, 1)));
//     //Removendo um item da lista (local na lista, quantos itens serão apagados)
// } else if (estaAcompanhada) {
//     console.log(`Os destinos que estão disponíveis são`,(listaDeDestinos));
//     console.log(`O destino escolhido foi`, (listaDeDestinos.splice(4, 1)));
// } else {
//     console.log("Você não pode escolher uma cidade por ser menor de idade");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(`Os destinos que estão disponíveis são`, (listaDeDestinos));
    console.log(`O destino escolhido foi`, (listaDeDestinos.splice(4, 1)));
    console.log(`Os destinos que sobraram foram`, (listaDeDestinos));
    //Removendo um item da lista (local na lista, quantos itens serão apagados)
} else {
    console.log("Você não pode escolher uma cidade por ser menor de idade");

}
console.log("Embarque: \n");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");;
} else {
    console.log("Você não pode embarcar!");
}




// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);