

class Carros {

    marca;
    cor;
    gastoMediaPorKm;

    constructor(marca, cor, gastoMediaPorKm) {

        this.marca = marca;
        this.cor = cor;
        this.gastoMediaPorKm = gastoMediaPorKm;
    }
    /* Cálculo para saber o gasto do percurso de acordo com a distância, valor do combustível e consumo do veículo.*/
    GastoPercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMediaPorKm * precoCombustivel;
    }
}

/* Valores dos atributos */
const uno = new Carros('Fiat', 'Preto', 1 / 12);
const fordKa = new Carros('Ford', 'Vermelho', 1 / 13);

console.log('R$:', uno.GastoPercurso(436, 5.58).toFixed(2));
console.log('R$:', fordKa.GastoPercurso(436, 5.58).toFixed(2));
