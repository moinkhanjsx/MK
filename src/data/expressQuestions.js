export const expressQuestions = [
  {
    question: "🧠 1. What is Express.js?",
    options: [
      "A. A database ORM",
      "B. Minimal web framework for Node.js",
      "C. Testing framework",
      "D. Build tool"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nExpress.js is a minimal, flexible web framework for Node.js.\nProvides robust features for web and mobile applications."
  },
  {
    question: "🧠 2. How do you create an Express app?",
    options: [
      "A. const app = express()",
      "B. const app = new Express()",
      "C. const app = require('express')()",
      "D. const app = Express.create()"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nconst express = require('express');\nconst app = express();\nCreates an Express application instance."
  },
  {
    question: "🧠 3. What does app.listen() do?",
    options: [
      "A. Listens for events",
      "B. Starts the server on specified port",
      "C. Listens for HTTP requests",
      "D. All of the above"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\napp.listen(port, callback) binds and listens for connections on the specified port.\nStarts the HTTP server."
  },
  {
    question: "🧠 4. What is middleware in Express?",
    options: [
      "A. Database layer",
      "B. Functions that access req, res, next",
      "C. Error handlers",
      "D. Route definitions"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMiddleware functions have access to request, response, and next function.\nCan modify req/res objects or end request-response cycle."
  },
  {
    question: "🧠 5. How do you use middleware?",
    options: [
      "A. app.use(middleware)",
      "B. app.middleware(middleware)",
      "C. app.add(middleware)",
      "D. app.apply(middleware)"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\napp.use() mounts middleware function at specified path.\nExecutes for every request to that path."
  },
  {
    question: "🧠 6. What is app.get()?",
    options: [
      "A. Gets app configuration",
      "B. Routes HTTP GET requests",
      "C. Retrieves data",
      "D. Gets middleware"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\napp.get(path, callback) routes HTTP GET requests to specified path.\nHandles GET requests with callback function."
  },
  {
    question: "🧠 7. What is the req object?",
    options: [
      "A. Request configuration",
      "B. HTTP request object",
      "C. Database query",
      "D. Response object"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nreq contains information about the HTTP request.\nHeaders, parameters, body, URL, etc."
  },
  {
    question: "🧠 8. What is the res object?",
    options: [
      "A. Result object",
      "B. HTTP response object",
      "C. Database result",
      "D. Request object"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nres sends response to client.\nMethods like res.send(), res.json(), res.status()."
  },
  {
    question: "🧠 9. What does res.send() do?",
    options: [
      "A. Sends email",
      "B. Sends HTTP response",
      "C. Sends data to database",
      "D. Sends files"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nres.send() sends HTTP response with content.\nAutomatically sets Content-Type based on data type."
  },
  {
    question: "🧠 10. What does res.json() do?",
    options: [
      "A. Parses JSON",
      "B. Sends JSON response",
      "C. Converts to JSON",
      "D. Validates JSON"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nres.json() sends JSON response.\nSets Content-Type to application/json and stringifies object."
  },
  {
    question: "🧠 11. What is routing in Express?",
    options: [
      "A. URL navigation",
      "B. Determining how app responds to client requests",
      "C. Database routing",
      "D. File system routing"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nRouting refers to determining how application responds to client requests for specific endpoints.\nURI (path) and HTTP method."
  },
  {
    question: "🧠 12. What is route parameters?",
    options: [
      "A. Query string parameters",
      "B. URL path parameters",
      "C. POST body parameters",
      "D. Header parameters"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nRoute parameters are named URL segments.\nAccessed via req.params, e.g., /users/:id"
  },
  {
    question: "🧠 13. What is query parameters?",
    options: [
      "A. URL path parameters",
      "B. URL query string parameters",
      "C. Route parameters",
      "D. Body parameters"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nQuery parameters appear after ? in URL.\nAccessed via req.query, e.g., /search?q=term"
  },
  {
    question: "🧠 14. What is body-parser middleware?",
    options: [
      "A. Parses request body",
      "B. Parses URL body",
      "C. Parses JSON body",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nbody-parser parses incoming request bodies.\nMakes req.body available for POST requests."
  },
  {
    question: "🧠 15. What is CORS?",
    options: [
      "A. Cross-Origin Resource Sharing",
      "B. Code Organization and Reuse System",
      "C. Client Object Response System",
      "D. Configuration Object Resource Sharing"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nCORS is a mechanism that allows restricted resources on a web page.\nFrom another domain outside the domain from which the resource originated."
  },
  {
    question: "🧠 16. How do you handle CORS in Express?",
    options: [
      "A. app.use(cors())",
      "B. app.cors()",
      "C. app.enable('cors')",
      "D. Manual headers"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nconst cors = require('cors');\napp.use(cors());\nEnables CORS for all routes."
  },
  {
    question: "🧠 17. What is express.static()?",
    options: [
      "A. Static file serving middleware",
      "B. Static method",
      "C. Static routing",
      "D. Static configuration"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nexpress.static() serves static files like images, CSS, JS.\nMakes files in specified directory accessible."
  },
  {
    question: "🧠 18. What is app.use(express.json())?",
    options: [
      "A. Enables JSON parsing",
      "B. Sends JSON responses",
      "C. Logs JSON data",
      "D. Validates JSON"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nexpress.json() parses incoming JSON requests.\nMakes req.body available as parsed JSON object."
  },
  {
    question: "🧠 19. What is error handling middleware?",
    options: [
      "A. Middleware with 4 parameters",
      "B. Middleware that catches errors",
      "C. Middleware defined after routes",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nError handling middleware: function(err, req, res, next)\nMust be defined after other app.use() and routes."
  },
  {
    question: "🧠 20. What is next() function?",
    options: [
      "A. Goes to next route",
      "B. Calls next middleware in stack",
      "C. Moves to next request",
      "D. Ends response"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnext() passes control to next middleware function.\nIf not called, request hangs."
  },
  {
    question: "🧠 21. What is app.all()?",
    options: [
      "A. Handles all HTTP methods",
      "B. Gets all routes",
      "C. Applies to all apps",
      "D. All middleware"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\napp.all() handles all HTTP methods for specified path.\nGET, POST, PUT, DELETE, etc."
  },
  {
    question: "🧠 22. What is route chaining?",
    options: [
      "A. Multiple routes in chain",
      "B. Chaining middleware",
      "C. Multiple handlers for same route",
      "D. Route inheritance"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\napp.route('/users').get(handler).post(handler)\nChain multiple HTTP methods for same path."
  },
  {
    question: "🧠 23. What is res.status()?",
    options: [
      "A. Gets response status",
      "B. Sets HTTP status code",
      "C. Checks status",
      "D. Status middleware"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nres.status(code) sets HTTP response status code.\nReturns response object for chaining."
  },
  {
    question: "🧠 24. What is express.Router()?",
    options: [
      "A. Route navigation",
      "B. Creates modular route handlers",
      "C. Router configuration",
      "D. Route optimization"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nexpress.Router() creates modular, mountable route handlers.\nOrganizes routes into separate files."
  },
  {
    question: "🧠 25. What is app.set()?",
    options: [
      "A. Sets application settings",
      "B. Sets environment variables",
      "C. Sets configuration",
      "D. Sets middleware"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\napp.set(name, value) assigns setting name to value.\nSettings like 'view engine', 'trust proxy', etc."
  },
  {
    question: "🧠 26. What is app.get() for settings?",
    options: [
      "A. Gets route handler",
      "B. Gets application setting",
      "C. Gets environment variable",
      "D. Gets configuration"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\napp.get(name) retrieves setting value.\nOpposite of app.set()."
  },
  {
    question: "🧠 27. What is helmet middleware?",
    options: [
      "A. Security middleware",
      "B. Performance middleware",
      "C. Logging middleware",
      "D. Compression middleware"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nHelmet helps secure Express apps by setting HTTP headers.\nPrevents common security vulnerabilities."
  },
  {
    question: "🧠 28. What is morgan middleware?",
    options: [
      "A. Authentication middleware",
      "B. HTTP request logger",
      "C. Error handling middleware",
      "D. Compression middleware"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nMorgan logs HTTP requests.\nProvides various logging formats and customization."
  },
  {
    question: "🧠 29. What is express-rate-limit?",
    options: [
      "A. Rate limiting middleware",
      "B. Performance limiter",
      "C. Request limiter",
      "D. Bandwidth limiter"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nexpress-rate-limit limits repeated requests.\nPrevents brute force attacks and abuse."
  },
  {
    question: "🧠 30. What is session middleware?",
    options: [
      "A. User session management",
      "B. Server session storage",
      "C. Session timeout handling",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nSession middleware manages user sessions.\nStores session data on server, sends session ID to client."
  },
  {
    question: "🧠 DONKEY EXPRESS TAKEAWAYS\n\nMinimal but powerful\n\nMiddleware architecture\n\nRouting made simple\n\nRequest/response cycle\n\nEcosystem of packages",
    options: [
      "Minimal but powerful",
      "Middleware architecture",
      "Routing made simple",
      "Request/response cycle",
      "Ecosystem of packages"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Minimal but powerful\n\nExpress.js provides the foundation for Node.js web applications!"
  }
];