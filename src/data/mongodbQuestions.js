export const mongodbQuestions = [
  {
    question: "🧠 1. What is MongoDB?",
    options: [
      "A. Relational database",
      "B. NoSQL document database",
      "C. Graph database",
      "D. Key-value store"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMongoDB is a NoSQL document database.\nStores data in flexible, JSON-like documents."
  },
  {
    question: "🧠 2. What is a MongoDB document?",
    options: [
      "A. SQL table row",
      "B. JSON-like data structure",
      "C. File on disk",
      "D. Database connection"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nDocuments are MongoDB's storage units.\nBSON format (Binary JSON) with dynamic schemas."
  },
  {
    question: "🧠 3. What is a MongoDB collection?",
    options: [
      "A. Group of databases",
      "B. Group of documents",
      "C. Group of indexes",
      "D. Group of queries"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nCollections are groups of MongoDB documents.\nSimilar to tables in relational databases."
  },
  {
    question: "🧠 4. What is BSON?",
    options: [
      "A. Binary JSON",
      "B. Basic SQL Object Notation",
      "C. Binary Structured Object Notation",
      "D. Both A and C"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nBSON = Binary JSON\nMongoDB's binary representation of JSON-like documents."
  },
  {
    question: "🧠 5. How do you connect to MongoDB?",
    options: [
      "A. Using mongo shell",
      "B. Using connection string",
      "C. Using MongoClient",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nMultiple ways to connect: mongo shell, drivers, connection strings.\nMongoClient for programmatic access."
  },
  {
    question: "🧠 6. What is the _id field?",
    options: [
      "A. Optional identifier",
      "B. Primary key (automatically created)",
      "C. Foreign key",
      "D. Index field"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n_id is MongoDB's primary key.\nAutomatically created ObjectId if not provided."
  },
  {
    question: "🧠 7. What is an ObjectId?",
    options: [
      "A. 12-byte identifier",
      "B. String ID",
      "C. Number ID",
      "D. UUID"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nObjectId is a 12-byte unique identifier.\nContains timestamp, machine ID, process ID, counter."
  },
  {
    question: "🧠 8. How do you insert a document?",
    options: [
      "A. db.collection.save()",
      "B. db.collection.insertOne()",
      "C. db.collection.insertMany()",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nsave() - insert or update\ninsertOne() - single document\ninsertMany() - multiple documents"
  },
  {
    question: "🧠 9. How do you find documents?",
    options: [
      "A. db.collection.find()",
      "B. db.collection.search()",
      "C. db.collection.query()",
      "D. db.collection.get()"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ndb.collection.find(query, projection)\nReturns cursor with matching documents."
  },
  {
    question: "🧠 10. What is a MongoDB query?",
    options: [
      "A. SQL statement",
      "B. JSON object",
      "C. String command",
      "D. Function call"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMongoDB queries are JSON objects.\n{field: value} syntax for matching documents."
  },
  {
    question: "🧠 11. What is $set operator?",
    options: [
      "A. Sets field value",
      "B. Sets multiple fields",
      "C. Sets array elements",
      "D. Sets document"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n$set sets the value of a field.\nUsed in update operations."
  },
  {
    question: "🧠 12. What is $push operator?",
    options: [
      "A. Pushes to array",
      "B. Pushes to stack",
      "C. Pushes updates",
      "D. Pushes documents"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n$push appends value to array field.\nAdds element to end of array."
  },
  {
    question: "🧠 13. What is an index in MongoDB?",
    options: [
      "A. Database catalog",
      "B. Data structure for fast queries",
      "C. Document counter",
      "D. Collection metadata"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nIndexes support efficient query execution.\nSimilar to indexes in relational databases."
  },
  {
    question: "🧠 14. How do you create an index?",
    options: [
      "A. db.collection.createIndex()",
      "B. db.collection.addIndex()",
      "C. db.collection.ensureIndex()",
      "D. db.collection.buildIndex()"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ndb.collection.createIndex({field: 1})\nCreates ascending index on field."
  },
  {
    question: "🧠 15. What is aggregation?",
    options: [
      "A. Data grouping",
      "B. Data transformation pipeline",
      "C. Data export",
      "D. Data import"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nAggregation processes data through pipeline stages.\nTransforms and analyzes document data."
  },
  {
    question: "🧠 16. What is $match in aggregation?",
    options: [
      "A. Matches documents",
      "B. Matches fields",
      "C. Matches patterns",
      "D. Matches arrays"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n$match filters documents in aggregation pipeline.\nSimilar to find() query."
  },
  {
    question: "🧠 17. What is $group in aggregation?",
    options: [
      "A. Groups documents by field",
      "B. Groups collections",
      "C. Groups databases",
      "D. Groups indexes"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n$group groups documents by specified field.\nCreates new documents with computed fields."
  },
  {
    question: "🧠 18. What is $lookup?",
    options: [
      "A. Looks up indexes",
      "B. Performs left outer join",
      "C. Looks up collections",
      "D. Looks up databases"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n$lookup performs left outer join between collections.\nJoins documents from different collections."
  },
  {
    question: "🧠 19. What is MongoDB Atlas?",
    options: [
      "A. MongoDB GUI",
      "B. Cloud database service",
      "C. Local MongoDB",
      "D. MongoDB driver"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMongoDB Atlas is cloud database service.\nHosted MongoDB with automated management."
  },
  {
    question: "🧠 20. What is mongoose?",
    options: [
      "A. MongoDB GUI",
      "B. ODM for Node.js",
      "C. MongoDB driver",
      "D. Database migration tool"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMongoose is Object Data Modeling library for MongoDB.\nProvides schema validation and middleware."
  },
  {
    question: "🧠 21. What is a mongoose schema?",
    options: [
      "A. Database schema",
      "B. Document structure definition",
      "C. Collection schema",
      "D. Index schema"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nSchema defines document structure and validation.\nSpecifies field types, defaults, validation rules."
  },
  {
    question: "🧠 22. What is a mongoose model?",
    options: [
      "A. Data model",
      "B. Constructor for documents",
      "C. Schema instance",
      "D. Database connection"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nModel is constructor compiled from schema.\nProvides interface for database operations."
  },
  {
    question: "🧠 23. What is middleware in mongoose?",
    options: [
      "A. Express middleware",
      "B. Schema middleware",
      "C. Model middleware",
      "D. Query middleware"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMongoose middleware functions execute before/after operations.\npre/post hooks for save, validate, etc."
  },
  {
    question: "🧠 24. What is population in mongoose?",
    options: [
      "A. Database seeding",
      "B. Referencing other documents",
      "C. Data validation",
      "D. Schema extension"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nPopulation replaces ObjectId references with actual documents.\nJoins data from multiple collections."
  },
  {
    question: "🧠 25. What is MongoDB Compass?",
    options: [
      "A. MongoDB driver",
      "B. GUI for MongoDB",
      "C. Command line tool",
      "D. Database migration tool"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMongoDB Compass is official GUI for MongoDB.\nVisual query builder, document editor, performance monitoring."
  },
  {
    question: "🧠 26. What is a replica set?",
    options: [
      "A. Multiple databases",
      "B. Group of mongod processes",
      "C. Backup strategy",
      "D. Sharding configuration"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nReplica set provides redundancy and high availability.\nPrimary and secondary nodes with automatic failover."
  },
  {
    question: "🧠 27. What is sharding?",
    options: [
      "A. Data partitioning",
      "B. Data replication",
      "C. Data compression",
      "D. Data encryption"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nSharding distributes data across multiple machines.\nHorizontal scaling for large datasets."
  },
  {
    question: "🧠 28. What is GridFS?",
    options: [
      "A. File storage specification",
      "B. Grid layout system",
      "C. File system grid",
      "D. Data grid"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nGridFS stores large files in MongoDB.\nSplits files into chunks for efficient storage."
  },
  {
    question: "🧠 29. What is MongoDB Stitch?",
    options: [
      "A. Database connector",
      "B. Serverless platform",
      "C. Authentication service",
      "D. API gateway"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMongoDB Stitch provides serverless backend services.\nFunctions, triggers, data access from client apps."
  },
  {
    question: "🧠 30. What is change streams?",
    options: [
      "A. Database migration",
      "B. Real-time data changes",
      "C. Schema changes",
      "D. Index changes"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nChange streams provide real-time notifications of data changes.\nListen to insert, update, delete operations."
  },
  {
    question: "🧠 DONKEY MONGODB TAKEAWAYS\n\nNoSQL flexibility\n\nDocument model power\n\nScalable architecture\n\nRich query language\n\nDeveloper-friendly",
    options: [
      "NoSQL flexibility",
      "Document model power",
      "Scalable architecture",
      "Rich query language",
      "Developer-friendly"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 NoSQL flexibility\n\nMongoDB revolutionized database development with its flexible document model!"
  }
];