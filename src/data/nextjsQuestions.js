export const nextjsQuestions = [
  {
    question: "🧠 1. What is Next.js?",
    options: [
      "A. A React framework",
      "B. A Node.js runtime",
      "C. A database",
      "D. A CSS framework"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nNext.js is a React framework for production.\nProvides SSR, SSG, routing, and optimization out of the box."
  },
  {
    question: "🧠 2. What does SSR stand for?",
    options: [
      "A. Server-Side Rendering",
      "B. Single-Page Rendering",
      "C. Static Site Rendering",
      "D. Server-Side Routing"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nSSR = Server-Side Rendering\nPages rendered on server for each request."
  },
  {
    question: "🧠 3. What is SSG?",
    options: [
      "A. Server-Side Generation",
      "B. Static Site Generation",
      "C. Single-Page Generation",
      "D. Server-Side Graphics"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nSSG = Static Site Generation\nPages pre-built at build time, served as static files."
  },
  {
    question: "🧠 4. What is the pages directory for?",
    options: [
      "A. Storing images",
      "B. File-based routing",
      "C. Component storage",
      "D. API endpoints"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nPages directory enables file-based routing.\nEach .js/.jsx/.ts/.tsx file becomes a route."
  },
  {
    question: "🧠 5. What is getStaticProps?",
    options: [
      "A. Fetches data at build time",
      "B. Fetches data on client",
      "C. Fetches data on server per request",
      "D. Fetches data from API"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ngetStaticProps runs at build time.\nReturns props for static generation."
  },
  {
    question: "🧠 6. What is getServerSideProps?",
    options: [
      "A. Runs at build time",
      "B. Runs on client",
      "C. Runs on server for each request",
      "D. Runs after hydration"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\ngetServerSideProps runs on server for every request.\nEnables SSR with fresh data."
  },
  {
    question: "🧠 7. What is the app directory?",
    options: [
      "A. New routing system (App Router)",
      "B. Stores application data",
      "C. Contains API routes",
      "D. Stores components"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nApp directory introduces App Router.\nNew way to organize routes and layouts (Next.js 13+)."
  },
  {
    question: "🧠 8. What is middleware in Next.js?",
    options: [
      "A. Server-side code that runs before requests",
      "B. Client-side routing logic",
      "C. Database connection layer",
      "D. Component wrapper"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nMiddleware runs before request reaches page.\nCan redirect, rewrite, modify headers, etc."
  },
  {
    question: "🧠 9. What is next.config.js?",
    options: [
      "A. Component configuration",
      "B. Application configuration file",
      "C. Database config",
      "D. API configuration"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnext.config.js customizes Next.js behavior.\nConfigure build, routing, images, etc."
  },
  {
    question: "🧠 10. What is the _app.js file?",
    options: [
      "A. Main application component",
      "B. API route handler",
      "C. Configuration file",
      "D. Layout component"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n_app.js wraps all pages.\nUsed for global styles, state management, layouts."
  },
  {
    question: "🧠 11. What is getStaticPaths?",
    options: [
      "A. Generates static paths for dynamic routes",
      "B. Creates API paths",
      "C. Defines routing paths",
      "D. Sets up file paths"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ngetStaticPaths specifies which paths to pre-render.\nUsed with dynamic routes and SSG."
  },
  {
    question: "🧠 12. What is ISR?",
    options: [
      "A. Incremental Static Regeneration",
      "B. Internal Server Rendering",
      "C. Instant Static Rendering",
      "D. Interactive Server Rendering"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nISR updates static pages after build time.\nCombines benefits of static and dynamic rendering."
  },
  {
    question: "🧠 13. What is the api directory?",
    options: [
      "A. Stores API documentation",
      "B. Creates API routes",
      "C. Contains API keys",
      "D. API configuration"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nAPI directory creates serverless API routes.\nFiles in pages/api/ or app/api/ become endpoints."
  },
  {
    question: "🧠 14. What is next/image?",
    options: [
      "A. Image processing library",
      "B. Optimized image component",
      "C. Image upload utility",
      "D. Image gallery component"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNext.js Image component optimizes images automatically.\nLazy loading, resizing, modern formats."
  },
  {
    question: "🧠 15. What is next/head?",
    options: [
      "A. Adds HTML head elements",
      "B. Component for page headers",
      "C. Navigation component",
      "D. SEO optimization tool"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nHead component manages document head.\nAdds meta tags, title, scripts, etc."
  },
  {
    question: "🧠 16. What is next/link?",
    options: [
      "A. External link component",
      "B. Optimized client-side navigation",
      "C. Link to API routes",
      "D. Social media links"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nLink component enables client-side navigation.\nPre-fetches pages for instant loading."
  },
  {
    question: "🧠 17. What is the public directory?",
    options: [
      "A. Stores private files",
      "B. Static assets served directly",
      "C. Contains components",
      "D. API routes"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nPublic directory serves static files.\nImages, fonts, etc. accessible at root URL."
  },
  {
    question: "🧠 18. What is next/script?",
    options: [
      "A. Runs scripts on server",
      "B. Optimized script loading",
      "C. Code execution utility",
      "D. Script minification tool"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nScript component optimizes third-party scripts.\nControls loading strategy and performance."
  },
  {
    question: "🧠 19. What is revalidate in ISR?",
    options: [
      "A. Page refresh interval",
      "B. Cache invalidation time",
      "C. Rebuild frequency",
      "D. Update check period"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nrevalidate specifies how often to check for updates.\nTime in seconds for cache invalidation."
  },
  {
    question: "🧠 20. What is the loading.js file?",
    options: [
      "A. Loads external libraries",
      "B. Loading UI for routes",
      "C. Page loading indicator",
      "D. Asset loading configuration"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nloading.js shows loading UI during navigation.\nPart of App Router suspense boundaries."
  },
  {
    question: "🧠 21. What is not-found.js?",
    options: [
      "A. 404 error page",
      "B. Missing file handler",
      "C. Route not found component",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nnot-found.js handles 404 errors in App Router.\nCustom 404 page for unmatched routes."
  },
  {
    question: "🧠 22. What is layout.js?",
    options: [
      "A. Page layout component",
      "B. Shared UI across routes",
      "C. Component styling",
      "D. Route configuration"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nlayout.js shares UI between routes.\nNavigation, footer, etc. persist across navigation."
  },
  {
    question: "🧠 23. What is template.js?",
    options: [
      "A. Page template",
      "B. Re-rendered layout on navigation",
      "C. Component wrapper",
      "D. Route template"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\ntemplate.js re-renders on navigation unlike layout.js.\nUseful for modals, themes, etc."
  },
  {
    question: "🧠 24. What is next/font?",
    options: [
      "A. Font loading utility",
      "B. Optimized font loading",
      "C. Font styling component",
      "D. Typography library"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNext.js font optimization loads fonts efficiently.\nReduces layout shift and improves performance."
  },
  {
    question: "🧠 25. What is getInitialProps?",
    options: [
      "A. Initializes component props",
      "B. Legacy data fetching method",
      "C. Sets initial state",
      "D. Component initialization"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\ngetInitialProps is legacy (Pages Router).\nReplaced by getStaticProps/getServerSideProps."
  },
  {
    question: "🧠 26. What is next/dynamic?",
    options: [
      "A. Dynamic imports",
      "B. Code splitting utility",
      "C. Dynamic component loading",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\ndynamic() enables code splitting and lazy loading.\nReduces initial bundle size."
  },
  {
    question: "🧠 27. What is the _document.js file?",
    options: [
      "A. Document configuration",
      "B. Customizes HTML document",
      "C. API documentation",
      "D. Component docs"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n_document.js customizes <html>, <head>, <body>.\nUsed for global styles, meta tags."
  },
  {
    question: "🧠 28. What is next/router?",
    options: [
      "A. Server-side routing",
      "B. Client-side navigation",
      "C. API routing",
      "D. File routing"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseRouter hook enables programmatic navigation.\nAccess route info, navigate between pages."
  },
  {
    question: "🧠 29. What is the .next directory?",
    options: [
      "A. Source code",
      "B. Build output",
      "C. Configuration files",
      "D. Static assets"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n.next directory contains build output.\nGenerated during next build command."
  },
  {
    question: "🧠 30. What is next export?",
    options: [
      "A. Exports components",
      "B. Static HTML export",
      "C. API export",
      "D. Configuration export"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnext export generates static HTML files.\nCreates static version of Next.js app."
  },
  {
    question: "🧠 DONKEY NEXTJS TAKEAWAYS\n\nFile-based routing\n\nSSR & SSG power\n\nApp Router revolution\n\nBuilt-in optimizations\n\nFull-stack framework",
    options: [
      "File-based routing",
      "SSR & SSG power",
      "App Router revolution",
      "Built-in optimizations",
      "Full-stack framework"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 File-based routing\n\nNext.js combines the best of React with production-ready features!"
  },
  {
    question: "🧠 32. What is fallback in getStaticPaths?",
    options: [
      "A. Error handling",
      "B. Loading state for non-pre-rendered pages",
      "C. Default route",
      "D. Backup API"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nfallback controls behavior for non-pre-generated paths.\ntrue = show loading, false = 404, 'blocking' = server-render."
  },
  {
    question: "🧠 33. What is next/head vs Head from next/document?",
    options: [
      "A. Same thing",
      "B. next/head for pages, Head for _document",
      "C. next/head is deprecated",
      "D. Head is for client-side"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnext/head manages head in page components.\nHead from next/document manages head in _document.js."
  },
  {
    question: "🧠 34. What is the useRouter hook?",
    options: [
      "A. Server-side routing",
      "B. Client-side navigation and route info",
      "C. API routing",
      "D. File system routing"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseRouter provides navigation methods and current route info.\nAccess query params, pathname, push(), replace(), etc."
  },
  {
    question: "🧠 35. What is shallow routing?",
    options: [
      "A. Routes without data fetching",
      "B. Updates URL without running getStaticProps/getServerSideProps",
      "C. Client-side only routing",
      "D. Static route generation"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nShallow routing changes URL without re-running data methods.\nUseful for query param changes without full re-render."
  },
  {
    question: "🧠 36. What is next-sitemap?",
    options: [
      "A. SEO optimization package",
      "B. Automatic sitemap generation",
      "C. Search engine crawler",
      "D. Meta tag manager"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnext-sitemap automatically generates sitemap.xml.\nImproves SEO by helping search engines discover pages."
  },
  {
    question: "🧠 37. What is the _error.js page?",
    options: [
      "A. 404 error page",
      "B. Global error handling",
      "C. Build error page",
      "D. API error handler"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n_error.js handles errors across the app.\nCustom error pages for different error codes."
  },
  {
    question: "🧠 38. What is next-pwa?",
    options: [
      "A. Progressive Web App package",
      "B. Adds PWA features to Next.js",
      "C. Performance monitoring",
      "D. Web worker manager"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnext-pwa adds service worker, manifest, offline support.\nTurns Next.js app into a Progressive Web App."
  },
  {
    question: "🧠 39. What is the difference between next dev and next build?",
    options: [
      "A. dev is for development, build creates production bundle",
      "B. dev builds static files, build runs server",
      "C. dev is faster, build is optimized",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nnext dev = development server with hot reload.\nnext build = production build with optimizations."
  },
  {
    question: "🧠 40. What is next start?",
    options: [
      "A. Starts development server",
      "B. Starts production server",
      "C. Starts build process",
      "D. Starts testing"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnext start runs the production build.\nServes optimized, static files."
  },
  {
    question: "🧠 41. What is the env.local file?",
    options: [
      "A. Local environment variables",
      "B. Build configuration",
      "C. Package configuration",
      "D. Database config"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n.env.local stores local environment variables.\nLoaded in development, not committed to git."
  },
  {
    question: "🧠 42. What is next-auth?",
    options: [
      "A. Authentication library for Next.js",
      "B. User session management",
      "C. API authentication",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nNextAuth.js provides authentication for Next.js.\nSupports OAuth, email, credentials, etc."
  },
  {
    question: "🧠 43. What is the pages/_middleware.js file?",
    options: [
      "A. API middleware",
      "B. Route middleware",
      "C. Global middleware",
      "D. Component middleware"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n_middleware.js runs before page requests.\nCan redirect, rewrite, add headers for specific routes."
  },
  {
    question: "🧠 44. What is next-seo?",
    options: [
      "A. SEO optimization package",
      "B. Meta tag management",
      "C. Search engine optimization",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nnext-seo provides React components for SEO.\nManages meta tags, Open Graph, Twitter cards, etc."
  },
  {
    question: "🧠 45. What is ISR revalidation?",
    options: [
      "A. Page refresh",
      "B. Cache invalidation",
      "C. Background regeneration",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nISR revalidation updates pages in background.\nCombines static speed with dynamic freshness."
  },
  {
    question: "🧠 46. What is next-mdx-remote?",
    options: [
      "A. Markdown processor",
      "B. MDX rendering for Next.js",
      "C. Content management",
      "D. Blog platform"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnext-mdx-remote renders MDX content in Next.js.\nEnables JSX in Markdown for blogs/documentation."
  },
  {
    question: "🧠 47. What is the .env.production file?",
    options: [
      "A. Production environment variables",
      "B. Development config",
      "C. Build variables",
      "D. Deployment config"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n.env.production loaded only in production.\nSeparate from development environment variables."
  },
  {
    question: "🧠 48. What is next-themes?",
    options: [
      "A. Theme management for Next.js",
      "B. CSS framework",
      "C. Color scheme handler",
      "D. Styling library"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nnext-themes provides theme switching (dark/light mode).\nPersists theme preference, SSR compatible."
  },
  {
    question: "🧠 49. What is next-i18next?",
    options: [
      "A. Internationalization library",
      "B. Language translation",
      "C. Multi-language support",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nnext-i18next enables internationalization.\nServer-side and client-side translations."
  },
  {
    question: "🧠 50. What is next-swc?",
    options: [
      "A. CSS processor",
      "B. JavaScript compiler",
      "C. Build optimizer",
      "D. Code minifier"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nSWC is Rust-based compiler used by Next.js.\nFaster than Babel for compilation and minification."
  },
  {
    question: "🧠 51. What is the turbo option in next.config.js?",
    options: [
      "A. Performance optimization",
      "B. Build caching system",
      "C. Development server",
      "D. Production deployment"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nTurbo mode enables advanced caching.\nSpeeds up builds by caching computations."
  }
];