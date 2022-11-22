let objDevInHouse = {
    plataforma: "DevInHouse",
    cursos: {dados: ["SQL"],
    backend: ["Java", "Spring"],
    frontend: ["Javascript", "React"]},
    inovacao_constante: true
};

//1
let objUser = {
    nome: "Ariel",
    idade: 26,
    cidade: "Jundiaí"
};

//2
objDevInHouse["objUser"] = objUser;

//3
objDevInHouse["objUser"]["nome"] = "Ariel Faria do Prado";

//4
objDevInHouse["objUser"]["idade"] = String(objDevInHouse["objUser"]["idade"]);

//5
console.table(objDevInHouse);

