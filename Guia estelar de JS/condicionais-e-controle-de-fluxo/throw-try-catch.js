// throw

function sayMyName(name) {
  if (name === "") {
    throw "Nome é obrigatório";
  }

  console.log(name);
}

// try...catch
try {
  sayMyName("Rafael");
} catch (e) {
  console.log(e); // Nome é obrigatório
}

console.log("após o try/catch");
