import Book from "../models/book.js";

async function run() {
  const book = new Book({
    name: "Преступление и накозание",
    author: "Фёдор Достоевский",
    publication_year: 1866,
  });

  await book.save();
}
run();

function getBook(req, res, next) {
  try {
    res.send("hello world");
  } catch (err) {
    console.log(err);
  }
}
export default getBook;
