let nomeHeroi = "superDio";

let xp = 500;

//Estrutura de decisão para classificar o herói

let nivelHeroi;

if (xp < 1000) {
    nivelHeroi = "ferro";
}
else if (xp >= 1001 && xp <= 2000) {
    nivelHeroi = "Bronze";
}
else if (xp >= 2001 && xp <= 5000) {
    nivelHeroi = "Prata ";
}
else if (xp >= 6001 && xp <= 7000) {
    nivelHeroi = "Ouro ";
}
else if (xp >= 7001 && xp <= 8000) {
    nivelHeroi = "platina Diamante";
}
else if (xp >= 8001 && xp <= 9000) {
    nivelHeroi = "Ascendente";
}
else if (xp >= 9001 && xp <= 10000) {
    nivelHeroi = "Imortal";
}
else  if(xp >= 100001) {
    nivelHeroi = "Radiante";
}
// Exibe a classificação herói
console.log(`O herói ${nomeHeroi} está no nível ${nivelHeroi} com o xp de ${xp}.`);
