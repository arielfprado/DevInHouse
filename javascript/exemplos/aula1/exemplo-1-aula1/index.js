let user = {
    nome: "Ariel",
    sobrenome: "Prado",
    idade: 26,
    cidade: "Jundiaí"
}

let computador = {
    marca: "Dell",
    cor: "cinza"
}

user["computador"]=computador;

user["idade"] = 256;

console.log(user);
console.table(user);

console.log(user.nome);
console.log(user["nome"]);