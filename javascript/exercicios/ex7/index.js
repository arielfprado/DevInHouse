//1
const numbers = [2, 4, 8, 16, 32, 64,128, 256, 512, 1024, 2048];

let sum = 0;

for(number of numbers) {
    sum += number;
}

console.log("A soma é igual a "+sum);

let mean = sum / numbers.length;

console.log("A média aritmética é igual a "+mean.toFixed(2));

//2

const notas = {
    bimestre1: 7.0,
    bimestre2: 3.7,
    bimestre3: 6.4,
    bimestre4: 8.6
};

let soma = 0;
let quantidade = 0;

for (bimestre in notas) {
    soma += notas[bimestre];
    quantidade++;
}

console.log("A soma das notas é igual a "+soma.toFixed(2));

let media = soma / quantidade;

if(media >= 7) {
    console.log("O aluno foi aprovado!")
} else {
    console.log("O aluno não foi aprovado com a nota "+media.toFixed(2));
}
