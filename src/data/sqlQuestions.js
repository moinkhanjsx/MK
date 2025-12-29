export const sqlQuestions = [
  {
    question: "🧠 1. What does SQL stand for?",
    options: [
      "A. Structured Query Language",
      "B. Simple Query Language",
      "C. Standard Query Language",
      "D. Systematic Query Language"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nSQL = Structured Query Language\nStandard language for managing relational databases."
  },
  {
    question: "🧠 2. What is a database?",
    options: [
      "A. Collection of data",
      "B. Organized collection of structured data",
      "C. File storage system",
      "D. Programming language"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nDatabase is organized collection of structured data.\nStored and accessed electronically from computer system."
  },
  {
    question: "🧠 3. What is a table in SQL?",
    options: [
      "A. Database container",
      "B. Collection of related data entries",
      "C. SQL command",
      "D. Data type"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nTable is collection of related data entries.\nConsists of rows and columns, like spreadsheet."
  },
  {
    question: "🧠 4. What is a primary key?",
    options: [
      "A. First column in table",
      "B. Unique identifier for each record",
      "C. Password for database",
      "D. Main table in database"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nPrimary key uniquely identifies each record in table.\nCannot contain NULL values, must be unique."
  },
  {
    question: "🧠 5. What is a foreign key?",
    options: [
      "A. Key from another country",
      "B. Field that references primary key in another table",
      "C. External database connection",
      "D. Backup key"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nForeign key establishes relationship between two tables.\nReferences primary key in related table."
  },
  {
    question: "🧠 6. What does SELECT do?",
    options: [
      "A. Inserts data",
      "B. Updates data",
      "C. Retrieves data from database",
      "D. Deletes data"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nSELECT retrieves data from one or more tables.\nMost commonly used SQL command."
  },
  {
    question: "🧠 7. What does INSERT do?",
    options: [
      "A. Retrieves data",
      "B. Adds new records to table",
      "C. Modifies existing records",
      "D. Removes records"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nINSERT adds new records to table.\nINSERT INTO table_name VALUES (value1, value2, ...)"
  },
  {
    question: "🧠 8. What does UPDATE do?",
    options: [
      "A. Adds new records",
      "B. Modifies existing records",
      "C. Retrieves data",
      "D. Creates tables"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nUPDATE modifies existing records in table.\nUPDATE table_name SET column = value WHERE condition"
  },
  {
    question: "🧠 9. What does DELETE do?",
    options: [
      "A. Removes entire table",
      "B. Removes specific records",
      "C. Removes database",
      "D. Removes columns"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nDELETE removes specific records from table.\nDELETE FROM table_name WHERE condition"
  },
  {
    question: "🧠 10. What is WHERE clause?",
    options: [
      "A. Specifies table name",
      "B. Specifies condition for filtering records",
      "C. Specifies column names",
      "D. Specifies database name"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nWHERE clause filters records based on condition.\nUsed in SELECT, UPDATE, DELETE statements."
  },
  {
    question: "🧠 11. What does ORDER BY do?",
    options: [
      "A. Orders table creation",
      "B. Sorts result set by specified columns",
      "C. Orders database operations",
      "D. Orders SQL commands"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nORDER BY sorts result set in ascending/descending order.\nORDER BY column_name ASC/DESC"
  },
  {
    question: "🧠 12. What does GROUP BY do?",
    options: [
      "A. Groups tables together",
      "B. Groups records with same values",
      "C. Groups databases",
      "D. Groups SQL statements"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nGROUP BY groups records with identical values.\nOften used with aggregate functions like COUNT, SUM."
  },
  {
    question: "🧠 13. What is JOIN in SQL?",
    options: [
      "A. Combines tables",
      "B. Combines databases",
      "C. Combines columns",
      "D. Combines rows"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nJOIN combines rows from two or more tables.\nBased on related column between tables."
  },
  {
    question: "🧠 14. What is INNER JOIN?",
    options: [
      "A. Returns all records",
      "B. Returns matching records only",
      "C. Returns left table records",
      "D. Returns right table records"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nINNER JOIN returns records with matching values in both tables.\nDefault join type."
  },
  {
    question: "🧠 15. What is LEFT JOIN?",
    options: [
      "A. Returns matching records",
      "B. Returns all records from left table",
      "C. Returns all records from right table",
      "D. Returns no matching records"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nLEFT JOIN returns all records from left table.\nMatching records from right table, NULL for no matches."
  },
  {
    question: "🧠 16. What is COUNT() function?",
    options: [
      "A. Counts characters",
      "B. Returns number of records",
      "C. Counts words",
      "D. Counts tables"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nCOUNT() returns number of records matching condition.\nCOUNT(*) counts all rows, COUNT(column) counts non-NULL values."
  },
  {
    question: "🧠 17. What is SUM() function?",
    options: [
      "A. Adds numbers",
      "B. Returns total sum of numeric column",
      "C. Sums all columns",
      "D. Sums table rows"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nSUM() returns total sum of numeric column values.\nIgnores NULL values."
  },
  {
    question: "🧠 18. What is AVG() function?",
    options: [
      "A. Average of all columns",
      "B. Average of numeric column",
      "C. Average table size",
      "D. Average query time"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nAVG() returns average value of numeric column.\nSUM(column) / COUNT(column)"
  },
  {
    question: "🧠 19. What is MAX() function?",
    options: [
      "A. Maximum table size",
      "B. Maximum column length",
      "C. Highest value in column",
      "D. Maximum database size"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nMAX() returns highest value in specified column.\nWorks with numeric, string, date types."
  },
  {
    question: "🧠 20. What is MIN() function?",
    options: [
      "A. Minimum table size",
      "B. Minimum column length",
      "C. Lowest value in column",
      "D. Minimum database size"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nMIN() returns lowest value in specified column.\nWorks with numeric, string, date types."
  },
  {
    question: "🧠 21. What is CREATE TABLE?",
    options: [
      "A. Creates database",
      "B. Creates new table in database",
      "C. Creates index",
      "D. Creates view"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nCREATE TABLE creates new table with specified columns.\nDefines column names, data types, constraints."
  },
  {
    question: "🧠 22. What is ALTER TABLE?",
    options: [
      "A. Alters database structure",
      "B. Modifies existing table structure",
      "C. Alters query results",
      "D. Alters user permissions"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nALTER TABLE modifies existing table structure.\nAdd/drop columns, modify constraints, etc."
  },
  {
    question: "🧠 23. What is DROP TABLE?",
    options: [
      "A. Removes table data only",
      "B. Removes entire table structure",
      "C. Removes table columns",
      "D. Removes table indexes"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nDROP TABLE removes entire table and its data.\nIrreversible operation - use with caution!"
  },
  {
    question: "🧠 24. What is a view in SQL?",
    options: [
      "A. Visual representation of data",
      "B. Virtual table based on result set of SQL statement",
      "C. Database diagram",
      "D. Table preview"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nView is virtual table from SQL query result.\nDoesn't store data, provides different data presentation."
  },
  {
    question: "🧠 25. What is an index in SQL?",
    options: [
      "A. Table of contents",
      "B. Data structure for fast data retrieval",
      "C. Column numbering",
      "D. Row numbering"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nIndex improves query performance.\nSpeeds up data retrieval operations."
  },
  {
    question: "🧠 26. What is normalization?",
    options: [
      "A. Data standardization",
      "B. Process of organizing data to minimize redundancy",
      "C. Data compression",
      "D. Data encryption"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNormalization organizes data to reduce redundancy.\nDivides large tables into smaller, related tables."
  },
  {
    question: "🧠 27. What is denormalization?",
    options: [
      "A. Data removal",
      "B. Combining tables to improve read performance",
      "C. Data compression",
      "D. Data validation"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nDenormalization combines tables to improve performance.\nAccepts redundancy for faster queries."
  },
  {
    question: "🧠 28. What is a stored procedure?",
    options: [
      "A. Stored data",
      "B. Pre-compiled SQL code stored in database",
      "C. Stored queries",
      "D. Stored functions"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nStored procedure is pre-compiled SQL code.\nCan be executed with parameters, improves performance."
  },
  {
    question: "🧠 29. What is a trigger in SQL?",
    options: [
      "A. Database alarm",
      "B. Automatic action responding to database events",
      "C. Query timer",
      "D. Performance monitor"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nTrigger executes automatically when event occurs.\nINSERT, UPDATE, DELETE on specified table."
  },
  {
    question: "🧠 30. What is ACID in databases?",
    options: [
      "A. Atomicity, Consistency, Isolation, Durability",
      "B. Automated, Consistent, Isolated, Durable",
      "C. Advanced, Complex, Integrated, Dynamic",
      "D. All, Complete, Integrated, Database"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nACID = properties ensuring reliable database transactions.\nAtomicity, Consistency, Isolation, Durability."
  },
  {
    question: "🧠 DONKEY SQL TAKEAWAYS\n\nStructured data power\n\nRelationships matter\n\nQueries are king\n\nPerformance optimization\n\nData integrity first",
    options: [
      "Structured data power",
      "Relationships matter",
      "Queries are king",
      "Performance optimization",
      "Data integrity first"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Structured data power\n\nSQL provides the foundation for organized, relational data management!"
  }
];