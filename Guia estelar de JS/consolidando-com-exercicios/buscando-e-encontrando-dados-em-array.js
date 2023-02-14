/*
    = Buscando e contando dados em Arrays =

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e
        devolver os livros desse autor
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Marv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;

console.log("Número de categorias: ", totalCategories); // Número de categorias:  2
for (let category of booksByCategory) {
  console.log("Total de livros na categoria: ", category.category); // Total de livros na categoria:  Riqueza | Total de livros na categoria:  Inteligência Emocional
  console.log(category.books.length); // 3 | 3
}

countAuthors();

function countAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }

  console.log("Total de autores: ", authors.length); // Total de autores:  5
}

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }
  console.log(`Livros do autor ${author}: ${books.join(", ")}.`);
}
booksOfAuthor("George S. Clason"); // Livros do autor George S. Clason: O homem mais rico da Babilônia.
