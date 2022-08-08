const express = require('express');
const app = express();

var authors = [
  {
      id: 1,
      name: "Lawrence Nowell",
      nationality: "UK",
      books: ["Beowulf"]
  },
  {
      id: 2,
      name: "William Shakespeare",
      nationality: "UK",
      books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
      id: 3,
      name: "Charles Dickens",
      nationality: "US",
      books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
      id: 4,
      name: "Oscar Wilde",
      nationality: "UK",
      books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  },
]

  app.get("/:id", (req, res) => {
    const author = authors.find(
      (author) => author.id === Number(req.params.id)
    )
    res.json(`${author.name}, ${author.nationality}`)
  })

  app.get("/:id/books", (req, res) => {
    const author = authors.find(
      (author) => author.id === Number(req.params.id)
    )
    const books = author.books.join (", ")
    res.json(books)
    })

module.exports = app
// var authors = [
//   {
//     id: 1,
//     name: "Lawrence Nowell",
//     nationality: "UK",
//   },
//   {
//     id: 2,
//     name: "William Shakespeare",
//     nationality: "UK",
//   },
//   {
//     id: 3,
//     name: "Charles Dickens",
//     nationality: "US",
//   },
//   {
//     id: 4,
//     name: "Oscar Wilde",
//     nationality: "UK",
//   },
// ];
