export const nodejsQuestions = [
  {
    question: "🧠 1. What is Node.js?",
    options: [
      "A. A JavaScript framework",
      "B. JavaScript runtime built on Chrome's V8 engine",
      "C. A database",
      "D. A web browser"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNode.js is a JavaScript runtime environment.\nUses Chrome's V8 engine to execute JS outside the browser."
  },
  {
    question: "🧠 2. What is npm?",
    options: [
      "A. Node Package Manager",
      "B. Node Programming Module",
      "C. New Project Manager",
      "D. Node Process Monitor"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nnpm is the package manager for Node.js.\nInstalls, manages, and shares JavaScript packages."
  },
  {
    question: "🧠 3. What is the event loop?",
    options: [
      "A. A for loop",
      "B. Mechanism for handling asynchronous operations",
      "C. Error handling system",
      "D. Memory management"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nEvent loop handles asynchronous operations.\nAllows Node.js to perform non-blocking I/O operations."
  },
  {
    question: "🧠 4. What is a module in Node.js?",
    options: [
      "A. A file containing reusable code",
      "B. A database table",
      "C. A web page",
      "D. A CSS file"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nModules are encapsulated code units.\nCan be imported/exported using require() or import."
  },
  {
    question: "🧠 5. What does require() do?",
    options: [
      "A. Creates a new file",
      "B. Imports a module",
      "C. Runs a function",
      "D. Declares a variable"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nrequire() imports modules in CommonJS.\nLoads and caches modules for use in the application."
  },
  {
    question: "🧠 6. What is package.json?",
    options: [
      "A. Node.js configuration file",
      "B. Project metadata and dependencies",
      "C. Database schema",
      "D. API documentation"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\npackage.json contains project info, dependencies, scripts.\nCreated with npm init, manages project configuration."
  },
  {
    question: "🧠 7. What is Express.js?",
    options: [
      "A. Database for Node.js",
      "B. Web framework for Node.js",
      "C. Testing framework",
      "D. Build tool"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nExpress.js is a minimal web framework for Node.js.\nProvides routing, middleware, and HTTP utilities."
  },
  {
    question: "🧠 8. What is middleware in Express?",
    options: [
      "A. Database connection",
      "B. Functions that access request/response objects",
      "C. Error handlers",
      "D. Route handlers"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMiddleware functions process requests/responses.\nCan modify req/res objects, end response cycle, call next()."
  },
  {
    question: "🧠 9. What is the fs module?",
    options: [
      "A. File System module",
      "B. Financial Services module",
      "C. Full Stack module",
      "D. Function Storage module"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nfs module provides file system operations.\nRead, write, delete files and directories."
  },
  {
    question: "🧠 10. What is asynchronous programming?",
    options: [
      "A. Code that runs in parallel",
      "B. Code that doesn't block execution",
      "C. Multi-threaded code",
      "D. Synchronous code"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nAsynchronous code doesn't block the execution thread.\nUses callbacks, promises, or async/await."
  },
  {
    question: "🧠 11. What is a Promise?",
    options: [
      "A. A guarantee",
      "B. Object representing eventual completion of async operation",
      "C. Error handler",
      "D. Callback function"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nPromise represents async operation's eventual result.\nCan be pending, fulfilled, or rejected."
  },
  {
    question: "🧠 12. What is async/await?",
    options: [
      "A. Synchronous keywords",
      "B. Syntax for handling promises",
      "C. Loop construct",
      "D. Error handling"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nasync/await provides synchronous-like syntax for promises.\nMakes asynchronous code easier to read and write."
  },
  {
    question: "🧠 13. What is the process object?",
    options: [
      "A. Current Node.js process information",
      "B. Operating system process",
      "C. Browser process",
      "D. Database process"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nprocess object provides info about current Node.js process.\nAccess environment variables, command line args, etc."
  },
  {
    question: "🧠 14. What is the http module?",
    options: [
      "A. HTTP client and server",
      "B. HTML parser",
      "C. HTTPS encryption",
      "D. HTTP cookies"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nhttp module creates HTTP servers and clients.\nFoundation for web applications in Node.js."
  },
  {
    question: "🧠 15. What is a stream in Node.js?",
    options: [
      "A. Water flow",
      "B. Sequence of data chunks",
      "C. Error flow",
      "D. Function chain"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nStreams handle reading/writing data in chunks.\nEfficient for large files, network data."
  },
  {
    question: "🧠 16. What is the path module?",
    options: [
      "A. File system paths",
      "B. URL routing",
      "C. Directory navigation",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\npath module provides utilities for file/directory paths.\nCross-platform path operations."
  },
  {
    question: "🧠 17. What is the os module?",
    options: [
      "A. Operating System information",
      "B. Online services",
      "C. Object storage",
      "D. Open source"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nos module provides operating system-related utilities.\nCPU info, memory, platform, etc."
  },
  {
    question: "🧠 18. What is the crypto module?",
    options: [
      "A. Cryptocurrency",
      "B. Cryptographic functions",
      "C. Compression",
      "D. Encoding"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\ncrypto module provides cryptographic functionality.\nHashing, encryption, digital signatures."
  },
  {
    question: "🧠 19. What is the buffer class?",
    options: [
      "A. Data storage",
      "B. Temporary data storage for binary data",
      "C. Memory buffer",
      "D. Cache system"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nBuffer handles binary data directly.\nWorks with streams, file I/O, network operations."
  },
  {
    question: "🧠 20. What is the cluster module?",
    options: [
      "A. Database clustering",
      "B. Load balancing across CPU cores",
      "C. Server clustering",
      "D. Data clustering"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\ncluster module enables load balancing across processes.\nUtilizes multiple CPU cores for better performance."
  },
  {
    question: "🧠 21. What is the child_process module?",
    options: [
      "A. Process management",
      "B. Spawning child processes",
      "C. Thread management",
      "D. Memory management"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nchild_process spawns new processes.\nExecute system commands, run other programs."
  },
  {
    question: "🧠 22. What is the events module?",
    options: [
      "A. Event handling system",
      "B. Calendar events",
      "C. Error events",
      "D. User events"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nevents module provides EventEmitter class.\nFoundation for Node.js event-driven architecture."
  },
  {
    question: "🧠 23. What is the util module?",
    options: [
      "A. Utility functions",
      "B. User interface",
      "C. Unit testing",
      "D. URL parsing"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nutil module provides utility functions.\npromisify, inspect, inherits, etc."
  },
  {
    question: "🧠 24. What is the querystring module?",
    options: [
      "A. Database queries",
      "B. URL query string parsing",
      "C. SQL queries",
      "D. Search queries"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nquerystring parses and formats URL query strings.\nHandles URL parameters."
  },
  {
    question: "🧠 25. What is the url module?",
    options: [
      "A. URL parsing and formatting",
      "B. Website URLs",
      "C. API endpoints",
      "D. Link management"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nurl module provides URL parsing and formatting utilities.\nLegacy module, use URL constructor instead."
  },
  {
    question: "🧠 26. What is the zlib module?",
    options: [
      "A. Zip file handling",
      "B. Data compression",
      "C. File archiving",
      "D. Data encryption"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nzlib provides compression/decompression using gzip.\nReduces data size for storage/transmission."
  },
  {
    question: "🧠 27. What is the dns module?",
    options: [
      "A. Domain Name System lookups",
      "B. DNS server",
      "C. Network configuration",
      "D. Domain registration"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ndns module performs DNS lookups.\nResolve domain names to IP addresses."
  },
  {
    question: "🧠 28. What is the net module?",
    options: [
      "A. Internet access",
      "B. Network communication",
      "C. TCP/UDP servers and clients",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nnet module provides TCP/UDP server and client functionality.\nLow-level network communication."
  },
  {
    question: "🧠 29. What is the dgram module?",
    options: [
      "A. Data grams",
      "B. UDP datagram sockets",
      "C. Data streaming",
      "D. Data compression"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\ndgram implements UDP datagram sockets.\nConnectionless network communication."
  },
  {
    question: "🧠 30. What is the readline module?",
    options: [
      "A. File reading",
      "B. Command line input",
      "C. Line-by-line reading",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nreadline provides interface for reading data line by line.\nUseful for CLI applications and file processing."
  },
  {
    question: "🧠 DONKEY NODEJS TAKEAWAYS\n\nJavaScript on server\n\nEvent-driven architecture\n\nNon-blocking I/O\n\nnpm ecosystem power\n\nFull-stack JavaScript",
    options: [
      "JavaScript on server",
      "Event-driven architecture",
      "Non-blocking I/O",
      "npm ecosystem power",
      "Full-stack JavaScript"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 JavaScript on server\n\nNode.js revolutionized web development with server-side JavaScript!"
  }
];