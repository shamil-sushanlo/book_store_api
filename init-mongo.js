db = db.getSiblingDB('book_store');


db.createCollection('book');
db.myCollection.insertMany([
  { name: "book1", costs: 3000 },
  { name: "book2", costs: 2500 }
]);


