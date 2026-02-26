class Celular {
  constructor(ram, processador, armazenamento) {
    ((this.ram = ram),
      (this.processador = processador),
      (this.armazenamento = armazenamento));
  }
}

const S24Ultra = new Celular(12, "Snapadragon 8 Gen 3", 256);

console.log(S24Ultra);

let array = [];

let objeto = {};

console.log(array);
console.log(objeto);

let frutas = ["banana", "tomate", "cereja", "maça", "abacaxi"];
console.log(frutas);
let frutasArmazenas = frutas;
console.log(frutasArmazenas);
frutas.unshift("kiwi");
console.log(frutas);
console.log(frutasArmazenas);

let n1 = 0;
console.log(n1);
let n2 = n1
console.log(n2);

n1 += 2;
console.log(n1);
console.log(n2);
