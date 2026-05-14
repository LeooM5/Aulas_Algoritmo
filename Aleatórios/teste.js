class Celular {
  constructor(ram, processador, armazenamento) {
    ((this.ram = ram),
      (this.processador = processador),
      (this.armazenamento = armazenamento));
  }
}

class teste extends Celular {
  constructor(a, b, c) {
    super(a, b, c);
    this.a = a;
    this.b = b;
    this.c = c;
    this.ram = 10;
    this.processador = "teste";
    this.armazenamento = 5
  }
}

let oi = new teste(1, 1, 1);

const S24Ultra = new Celular(12, "Snapadragon 8 Gen 3", 256);

console.log(S24Ultra);
console.log(oi);
