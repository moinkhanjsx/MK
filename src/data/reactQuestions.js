export const reactQuestions = [
  {
    question: "🧠 1. What is JSX?",
    options: [
      "A. JavaScript XML",
      "B. Java Syntax Extension",
      "C. JSON XML Syntax",
      "D. JavaScript Extension"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nJSX = JavaScript XML\nAllows writing HTML-like syntax in JavaScript."
  },
  {
    question: "🧠 2. What is the virtual DOM?",
    options: [
      "A. A copy of the real DOM",
      "B. A lightweight representation of the DOM",
      "C. A browser API",
      "D. A React component"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nVirtual DOM is React's lightweight copy of the real DOM.\nUsed for efficient updates."
  },
  {
    question: "🧠 3. What does useState return?",
    options: [
      "A. A state value",
      "B. A setter function",
      "C. An array with state and setter",
      "D. A promise"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nuseState returns [state, setState]\nArray destructuring gives you both."
  },
  {
    question: "🧠 4. When does useEffect run?",
    options: [
      "A. Only on mount",
      "B. Only on unmount",
      "C. On mount and when dependencies change",
      "D. Every render"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nuseEffect runs after render.\nDependencies array controls when it re-runs."
  },
  {
    question: "🧠 5. What is a React key used for?",
    options: [
      "A. Styling components",
      "B. Identifying list items",
      "C. Event handling",
      "D. State management"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nKeys help React identify which items changed, added, or removed.\nPrevents unnecessary re-renders."
  },
  {
    question: "🧠 6. What is prop drilling?",
    options: [
      "A. Passing props through multiple components",
      "B. Drilling holes in components",
      "C. A React hook",
      "D. A lifecycle method"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nProp drilling = passing data down through component tree.\nContext API or state management solves this."
  },
  {
    question: "🧠 7. What does useMemo do?",
    options: [
      "A. Memoizes values",
      "B. Creates components",
      "C. Handles events",
      "D. Manages state"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nuseMemo caches expensive calculations.\nOnly re-computes when dependencies change."
  },
  {
    question: "🧠 8. What is reconciliation?",
    options: [
      "A. Component mounting",
      "B. Virtual DOM diffing",
      "C. State updates",
      "D. Event handling"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nReconciliation = React comparing virtual DOM with real DOM.\nDetermines what actually needs to update."
  },
  {
    question: "🧠 9. What is a higher-order component?",
    options: [
      "A. A component that returns another component",
      "B. A component with many props",
      "C. A component that uses hooks",
      "D. A built-in React component"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nHOC = function that takes a component and returns enhanced component.\nUsed for code reuse."
  },
  {
    question: "🧠 10. What does useCallback do?",
    options: [
      "A. Creates memoized functions",
      "B. Calls functions",
      "C. Handles callbacks",
      "D. Creates components"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nuseCallback memoizes functions.\nPrevents unnecessary re-renders of child components."
  },
  {
    question: "🧠 11. What is the Context API used for?",
    options: [
      "A. Managing global state",
      "B. Creating components",
      "C. Handling events",
      "D. Styling components"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nContext API provides global state without prop drilling.\nProvider/Consumer pattern."
  },
  {
    question: "🧠 12. What is a controlled component?",
    options: [
      "A. Component controlled by parent",
      "B. Component that controls its own state",
      "C. Component with many controls",
      "D. Built-in React component"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nControlled component = form element whose value is controlled by React state.\nuseState manages the value."
  },
  {
    question: "🧠 13. What does useRef return?",
    options: [
      "A. A DOM element",
      "B. An object with current property",
      "C. A function",
      "D. A state value"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseRef returns {current: value}\nUsed for DOM access or mutable values."
  },
  {
    question: "🧠 14. What is React.Fragment?",
    options: [
      "A. A component wrapper",
      "B. A way to group elements without extra DOM node",
      "C. A lifecycle method",
      "D. A hook"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nFragment groups children without adding extra div.\n<>...</> is shorthand syntax."
  },
  {
    question: "🧠 15. What is the purpose of React.memo?",
    options: [
      "A. Memoizes components",
      "B. Creates components",
      "C. Manages state",
      "D. Handles events"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nReact.memo prevents re-renders if props haven't changed.\nShallow comparison by default."
  },
  {
    question: "🧠 16. What is the difference between state and props?",
    options: [
      "A. State is mutable, props are immutable",
      "B. Props are mutable, state is immutable",
      "C. Both are mutable",
      "D. Both are immutable"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nProps = data passed from parent (read-only)\nState = internal component data (can change)"
  },
  {
    question: "🧠 17. What is a React portal?",
    options: [
      "A. A way to render children outside parent DOM hierarchy",
      "B. A routing solution",
      "C. A state management tool",
      "D. A testing utility"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nPortals render children into different DOM node.\nUseful for modals, tooltips, etc."
  },
  {
    question: "🧠 18. What does useReducer do?",
    options: [
      "A. Reduces array elements",
      "B. Manages complex state logic",
      "C. Reduces component re-renders",
      "D. Reduces bundle size"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseReducer manages state with reducer function.\nAlternative to useState for complex logic."
  },
  {
    question: "🧠 19. What is lazy loading in React?",
    options: [
      "A. Loading components on demand",
      "B. Loading images lazily",
      "C. Loading state lazily",
      "D. Loading props lazily"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nReact.lazy() loads components only when needed.\nImproves initial bundle size and performance."
  },
  {
    question: "🧠 20. What is the useLayoutEffect hook?",
    options: [
      "A. Same as useEffect",
      "B. Runs synchronously after DOM mutations",
      "C. Runs before render",
      "D. Runs on unmount only"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseLayoutEffect runs after DOM updates but before browser paint.\nUse for DOM measurements."
  },
  {
    question: "🧠 21. What is React.StrictMode?",
    options: [
      "A. Enables strict type checking",
      "B. Highlights potential problems",
      "C. Optimizes performance",
      "D. Manages state strictly"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nStrictMode highlights unsafe lifecycles, legacy API usage.\nHelps catch bugs in development."
  },
  {
    question: "🧠 22. What is the children prop?",
    options: [
      "A. Component's child elements",
      "B. Component's props",
      "C. Component's state",
      "D. Component's methods"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nchildren prop contains elements between opening/closing tags.\nAllows component composition."
  },
  {
    question: "🧠 23. What is a custom hook?",
    options: [
      "A. A built-in React hook",
      "B. A reusable function using built-in hooks",
      "C. A component wrapper",
      "D. A lifecycle method"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nCustom hook = function starting with 'use' that uses built-in hooks.\nEnables logic reuse across components."
  },
  {
    question: "🧠 24. What does useImperativeHandle do?",
    options: [
      "A. Handles imperative code",
      "B. Exposes imperative API to parent",
      "C. Handles events imperatively",
      "D. Creates imperative components"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseImperativeHandle customizes instance value exposed by ref.\nUsed with forwardRef."
  },
  {
    question: "🧠 25. What is React.forwardRef?",
    options: [
      "A. Forwards props to children",
      "B. Forwards refs to child components",
      "C. Forwards events",
      "D. Forwards state"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nforwardRef forwards ref to child component.\nAllows parent to access child's DOM node."
  },
  {
    question: "🧠 26. What is the useDeferredValue hook?",
    options: [
      "A. Defers expensive calculations",
      "B. Defers state updates",
      "C. Defers rendering",
      "D. Defers component mounting"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nuseDeferredValue defers updating non-urgent parts of UI.\nImproves performance for expensive operations."
  },
  {
    question: "🧠 27. What is React Suspense?",
    options: [
      "A. Suspends component rendering",
      "B. Handles async operations",
      "C. Manages loading states",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nSuspense handles loading states for async operations.\nWorks with lazy loading and data fetching."
  },
  {
    question: "🧠 28. What is the useTransition hook?",
    options: [
      "A. Transitions between routes",
      "B. Marks state updates as non-urgent",
      "C. Transitions between components",
      "D. Transitions CSS properties"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseTransition marks state updates as non-urgent.\nAllows UI to stay responsive during heavy updates."
  },
  {
    question: "🧠 29. What is React Server Components?",
    options: [
      "A. Components that run on server",
      "B. Components for server-side rendering",
      "C. Components that fetch server data",
      "D. All of the above"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nServer Components run on server, not in browser.\nReduce bundle size and improve performance."
  },
  {
    question: "🧠 30. What is the key difference between useEffect and useLayoutEffect?",
    options: [
      "A. useEffect is async, useLayoutEffect is sync",
      "B. useLayoutEffect runs before paint",
      "C. useEffect can cause layout shift",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nuseLayoutEffect runs synchronously after DOM mutations.\nUse for DOM measurements to prevent flicker."
  },
  {
    question: "🧠 DONKEY REACT TAKEAWAYS\n\nJSX is syntax sugar\n\nVirtual DOM enables efficiency\n\nHooks replaced classes\n\nState drives everything\n\nComponents are functions",
    options: [
      "JSX is syntax sugar",
      "Virtual DOM enables efficiency",
      "Hooks replaced classes",
      "State drives everything",
      "Components are functions"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 JSX is syntax sugar\n\nThese are the core principles of React!"
  },
  {
    question: "🧠 32. What is React's render method?",
    options: [
      "A. Returns JSX to display",
      "B. Updates the DOM",
      "C. Handles events",
      "D. Manages state"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nrender() returns JSX that describes what to display.\nReact calls this to know what to show."
  },
  {
    question: "🧠 33. What is component composition?",
    options: [
      "A. Combining multiple components",
      "B. Creating class components",
      "C. Using hooks together",
      "D. Managing state"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nComposition = building complex UIs from smaller components.\nBetter than inheritance for reusability."
  },
  {
    question: "🧠 34. What does setState do?",
    options: [
      "A. Directly modifies state",
      "B. Schedules state update",
      "C. Creates new state",
      "D. Deletes state"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nsetState is asynchronous - schedules update for next render.\nMultiple calls may batch together."
  },
  {
    question: "🧠 35. What is a pure component?",
    options: [
      "A. Component with no side effects",
      "B. Component that re-renders always",
      "C. Component with hooks",
      "D. Built-in component"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nPure component = predictable, no side effects.\nSame props = same output."
  },
  {
    question: "🧠 36. What is React.cloneElement?",
    options: [
      "A. Creates new component",
      "B. Clones DOM elements",
      "C. Clones React elements with new props",
      "D. Copies component state"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\ncloneElement creates copy of React element with new props.\nUseful for HOCs and component wrappers."
  },
  {
    question: "🧠 37. What is the useDebugValue hook?",
    options: [
      "A. Debugs component state",
      "B. Displays custom hook values in DevTools",
      "C. Logs errors",
      "D. Tests components"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseDebugValue displays custom label for custom hooks in DevTools.\nImproves debugging experience."
  },
  {
    question: "🧠 38. What is React's Error Boundary?",
    options: [
      "A. Catches JavaScript errors in component tree",
      "B. Validates props",
      "C. Handles network errors",
      "D. Manages state errors"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nError boundaries catch errors in render, lifecycle, constructors.\nDisplay fallback UI instead of crashing."
  },
  {
    question: "🧠 39. What is the useId hook?",
    options: [
      "A. Generates unique IDs",
      "B. Identifies components",
      "C. Creates component keys",
      "D. Manages DOM IDs"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nuseId generates unique IDs for accessibility attributes.\nConsistent across server and client rendering."
  },
  {
    question: "🧠 40. What is React's Concurrent Mode?",
    options: [
      "A. Runs multiple components simultaneously",
      "B. Enables interruptible rendering",
      "C. Handles concurrent state updates",
      "D. Manages concurrent API calls"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nConcurrent Mode allows React to interrupt rendering.\nPrioritizes urgent updates over non-urgent ones."
  },
  {
    question: "🧠 41. What is a React ref callback?",
    options: [
      "A. Function passed to ref prop",
      "B. Callback for state changes",
      "C. Event handler",
      "D. Lifecycle method"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nRef callback = function called with DOM element.\nAlternative to useRef for more control."
  },
  {
    question: "🧠 42. What is React's Profiler API?",
    options: [
      "A. Profiles component performance",
      "B. Creates user profiles",
      "C. Manages component props",
      "D. Handles component errors"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nProfiler measures render performance of component tree.\nHelps identify performance bottlenecks."
  },
  {
    question: "🧠 43. What is the useSyncExternalStore hook?",
    options: [
      "A. Syncs with external databases",
      "B. Subscribes to external state stores",
      "C. Syncs server and client state",
      "D. Manages external API calls"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseSyncExternalStore subscribes to external stores.\nEnables React to work with external state management."
  },
  {
    question: "🧠 44. What is React's startTransition?",
    options: [
      "A. Starts component transitions",
      "B. Marks non-urgent state updates",
      "C. Transitions between routes",
      "D. Starts animations"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nstartTransition wraps non-urgent updates.\nKeeps UI responsive during heavy computations."
  },
  {
    question: "🧠 45. What is a React component's displayName?",
    options: [
      "A. Component's name in DevTools",
      "B. Component's CSS class",
      "C. Component's HTML tag",
      "D. Component's key"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ndisplayName appears in React DevTools and error messages.\nDefaults to function name or 'Component'."
  },
  {
    question: "🧠 46. What is React's flushSync?",
    options: [
      "A. Forces synchronous state updates",
      "B. Flushes pending effects",
      "C. Clears component cache",
      "D. Resets component state"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nflushSync forces immediate DOM update.\nUse sparingly - can hurt performance."
  },
  {
    question: "🧠 47. What is a React element?",
    options: [
      "A. Instance of a component",
      "B. Plain object describing component",
      "C. DOM node",
      "D. Component function"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nReact element = plain object describing what to render.\nCreated by JSX or React.createElement()."
  },
  {
    question: "🧠 48. What is React's hydrate()?",
    options: [
      "A. Adds water to components",
      "B. Attaches event handlers to SSR HTML",
      "C. Initializes component state",
      "D. Loads component data"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nhydrate() attaches React to server-rendered HTML.\nMakes SSR pages interactive."
  },
  {
    question: "🧠 49. What is the useInsertionEffect hook?",
    options: [
      "A. Inserts components into DOM",
      "B. Runs before DOM mutations for CSS-in-JS",
      "C. Inserts styles into head",
      "D. Manages CSS animations"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nuseInsertionEffect runs before DOM mutations.\nDesigned for CSS-in-JS libraries to inject styles."
  },
  {
    question: "🧠 50. What is React's act() utility?",
    options: [
      "A. Makes components active",
      "B. Wraps updates for testing",
      "C. Activates concurrent features",
      "D. Starts component lifecycle"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nact() ensures all updates complete before assertions.\nUsed in testing to wait for async operations."
  },
  {
    question: "🧠 51. What is React's createRoot?",
    options: [
      "A. Creates component tree root",
      "B. Creates new React app",
      "C. Initializes Concurrent Mode",
      "D. Creates virtual DOM root"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\ncreateRoot enables Concurrent Mode features.\nNew way to render React apps (React 18+)."
  }
];