/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em Celsius ou
    fahrenheit e faça a transformação de uma unidade para
    outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

function transformDegree(degree) {
  let total;

  let isCelsius = degree.toLowerCase().endsWith("c");
  let isFahrenheit = degree.toUpperCase().endsWith("F");
  if (isFahrenheit) {
    degree = Number(degree.slice(0, -1));
    if (!isNaN(degree)) {
      total = ((degree - 32) * 5) / 9;
      return total + "C";
    }
  } else if (isCelsius) {
    degree = Number(degree.slice(0, -1));
    total = (degree * 9) / 5 + 32;
    return total + "F";
  } else {
    throw new Error("Invalid degree");
  }
}

try {
  console.log(transformDegree("20c")); // 68F
} catch (error) {
  console.log(error.message);
}
