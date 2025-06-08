// queries.js
use('plp_bookstore');

// 1. Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" }).pretty();

// 2. Find books published after a certain year (e.g., 1950)
db.books.find({ published_year: { $gt: 1950 } }).pretty();

// 3. Find books by a specific author (e.g., Harper Lee)
db.books.find({ author: "Harper Lee" }).pretty();

// 4. Update the price of a specific book (e.g., The Great Gatsby)
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 9.99 } }
);

// 5. Delete a book by its title (e.g., The Hobbit)
db.books.deleteOne({ title: "The Hobbit" });


// Task 3: Advanced Queries

// 1. Find books that are in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
}).pretty();

// 2. Use projection to return only title, author, and price
db.books.find(
  { in_stock: true },
  { title: 1, author: 1, price: 1, _id: 0 }
).pretty();

// 3. Sort books by price (ascending)
db.books.find().sort({ price: 1 }).pretty();

// 4. Sort books by price (descending)
db.books.find().sort({ price: -1 }).pretty();

// 5. Pagination: 5 books per page, first page
db.books.find().skip(0).limit(5).pretty();

// 6. Pagination: 5 books per page, second page
db.books.find().skip(5).limit(5).pretty();


// Task 4: Aggregation Pipelines

// 1. Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]).pretty();

// 2. Author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]).pretty();

// 3. Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $concat: [{ $toString: "$_id" }, "0s"] },
      count: 1,
      _id: 0
    }
  }
]).pretty();


// Task 5: Indexing

// 1. Create an index on the title field
db.books.createIndex({ title: 1 });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Use explain() to demonstrate performance (example with title search)
db.books.find({ title: "The Great Gatsby" }).explain("executionStats");

// 4. Use explain() for compound index (example with author and year)
db.books.find({ author: "Harper Lee", published_year: 1960 }).explain("executionStats");