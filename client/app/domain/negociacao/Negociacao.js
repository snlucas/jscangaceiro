class Negociacao {
  constructor(_data, _quantidade, _valor) {
    Object.assign(this, {
      _quantidade,
      _valor,
    });
    this._data = new Date(_data.getTime());
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}

let hoje = new Date();
const n1 = new Negociacao(hoje, 5, 700);
console.log(n1.data);
hoje.setDate(11);
console.log(n1.data);
