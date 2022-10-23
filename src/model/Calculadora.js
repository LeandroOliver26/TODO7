class Calculadora {
  static async soma(numero1, numero2) {
    return numero1 + numero2;
  }

  static async subtracao(numero1, numero2){
    return numero1 - numero2;
  }

  static async divisao(numero1, numero2){

    return numero1 / numero2;
  }

  static async multiplicacao(numero1, numero2){
    if (numero2 = 0){
      return (erro);
    }
    else{
      return numero1 / numero2
    }

    return numero1 * numero2;
  }
}



module.exports = Calculadora;
