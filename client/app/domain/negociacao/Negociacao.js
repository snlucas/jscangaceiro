class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}

const n1 = new Negociacao(new Date(), 5, 700);
Object.freeze(n1);

n1._quantidade = 50;
console.log(">>> Quantidade: ", n1.quantidade);
console.log(">>> Data: ", n1.data);
console.log(">>> Valor: ", n1.valor);
console.log(">>> Volume: ", n1.volume);
