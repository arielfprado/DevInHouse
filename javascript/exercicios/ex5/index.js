function comparacao() {
    let n1 = Number(prompt("Insira o primeiro valor: "));
    let n2 = Number(prompt("Insira o segundo valor: "));
    if(!n1 ||!n2) {
        alert("Erro - valors inseridos não são válidos");
        comparacao();
    } else {
        let soma = n1 + n2;

        let iguais = (n1 === n2) ? "" : "não ";

        let maiorMenor10 = (soma >= 10) ? "maior" : "menor";

        let maiorMenor20 = (soma >=20) ? "maior" : "menor";

        alert(`Os números ${n1} e ${n2} ${iguais}são iguais. Sua soma é ${soma}, que é ${maiorMenor10} que 10 e ${maiorMenor20} que 20`);
    }
}

comparacao();
