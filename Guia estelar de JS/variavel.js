// var (mais antigo quase nunca utilizado) o valor pode ser reatribuído
var clima = "Quente";
clima = "Frio";

console.log(clima);
// Frio

// const o valor não pode ser reatribuído
const Clima = "Quente";
// clima = "Frio";

console.log(Clima);
// Quente
// Se for tentar reatribuí-lo: Error

// let pode ter o valor reatribuído
let CLIMA = "Quente";
CLIMA = "Frio";

console.log(CLIMA);
// Frio