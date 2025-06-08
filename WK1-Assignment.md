# MongoDB Week 1 Assignment

## Overview
This repository contains the solution for Week 1 of the MongoDB assignment. It includes scripts for setting up a MongoDB database, performing CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Prerequisites
- MongoDB Community Edition or MongoDB Atlas account
- `mongosh` or MongoDB Compass installed
- Node.js (optional, for running scripts if needed)

## Setup Instructions
1. **Install MongoDB**:
   - Local: Download and install MongoDB Community Edition from [MongoDB's website](https://www.mongodb.com/try/download/community).
   - Atlas: Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2. **Create Database and Collection**:
   - Connect to MongoDB using `mongosh`:
     ```bash
     mongosh
     ```
   - Run:
     ```javascript
     use plp_bookstore
     db.createCollection("books")
     ```

3. **Populate the Database**:
   - Run the `insert_books.js` script to insert 10 book documents:
     ```bash
     mongosh < insert_books.js
     ```

4. **Run Queries**:
   - Execute the queries in `queries.js` using `mongosh`:
     ```bash
     mongosh < queries.js
     ```
   - Alternatively, use MongoDB Compass to run queries manually.

## Files
- `insert_books.js`: Script to insert 10 book documents into the `books` collection.
- `queries.js`: Contains all CRUD operations, advanced queries, aggregation pipelines, and indexing commands.
- `README.md`: This file, explaining setup and execution.
- `screenshot.png`: Screenshot of MongoDB Compass or Atlas showing the `books` collection.

## Notes
- Ensure you have a stable MongoDB connection (local or Atlas).
- The `queries.js` file is organized by task for clarity.
- Use `explain("executionStats")` to analyze index performance.

## Screenshot
The `screenshot.png` file shows the `plp_bookstore` database with the `books` collection in MongoDB Compass or Atlas.

## Submission
This repository will be submitted via GitHub Classroom for autograding and instructor review.