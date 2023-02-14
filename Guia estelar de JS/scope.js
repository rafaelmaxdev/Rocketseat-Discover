// var é global e, também local

console.log("> existe x antes do bloco? ", x);

{
  var x = 0;
}

console.log("> existe x depois do bloco? ", x);

// hoisting, var sempre é elevado até o começo e redefinido depois no objeto pelo valor anterior ex:
/*
  console.log("> existe x antes do bloco? ", x);

  {
    var x = 0;
  }

  Fica:
  var x

  console.log("> existe x antes do bloco? ", x);

  {
    x = 0;
  }

  */
