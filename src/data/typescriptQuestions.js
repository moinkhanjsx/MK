export const typescriptQuestions = [
  {
    question: "🧠 1. What is TypeScript?",
    options: [
      "A. A superset of JavaScript",
      "B. A subset of JavaScript",
      "C. A replacement for JavaScript",
      "D. A new programming language"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nTypeScript = JavaScript + Types\nIt adds type checking to JavaScript."
  },
  {
    question: "🧠 2. Output?\nlet x: number = \"hello\";",
    options: [
      "A. No error",
      "B. Type error",
      "C. Runtime error",
      "D. Syntax error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nTypeScript catches this at compile time.\nString can't be assigned to number type."
  },
  {
    question: "🧠 3. What does 'any' type mean?",
    options: [
      "A. No type checking",
      "B. All types allowed",
      "C. Opt out of type checking",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nany = escape hatch 🚪\nTells TypeScript: \"I know what I'm doing!\""
  },
  {
    question: "🧠 4. What is interface used for?",
    options: [
      "A. Define object shape",
      "B. Define function shape",
      "C. Create contracts",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\ninterface = blueprint 📋\nDefines structure of objects, functions, classes."
  },
  {
    question: "🧠 5. What does 'readonly' do?",
    options: [
      "A. Makes property immutable",
      "B. Makes property optional",
      "C. Makes property private",
      "D. Makes property public"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nreadonly = can't change after creation 🔒\nLike const but for object properties."
  },
  {
    question: "🧠 6. What is a union type?",
    options: [
      "A. string | number",
      "B. string & number",
      "C. string + number",
      "D. string, number"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nUnion = OR type\nCan be this OR that."
  },
  {
    question: "🧠 7. What is type inference?",
    options: [
      "A. TypeScript guesses types",
      "B. Manual type declaration",
      "C. Type conversion",
      "D. Type checking"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nlet x = 5; // TypeScript knows it's number\nNo need to write: let x: number = 5;"
  },
  {
    question: "🧠 8. What does '?' mean in type?",
    options: [
      "A. Optional property",
      "B. Required property",
      "C. Nullable property",
      "D. Undefined property"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nname?: string means name is optional\nCan be present or absent."
  },
  {
    question: "🧠 9. What is a tuple?",
    options: [
      "A. Array with fixed types and length",
      "B. Array with any types",
      "C. Object with array",
      "D. Array of objects"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nlet x: [string, number] = [\"age\", 25]\nExact types in exact positions."
  },
  {
    question: "🧠 10. What is 'never' type?",
    options: [
      "A. Function that never returns",
      "B. Empty value",
      "C. Null value",
      "D. Undefined value"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nUsed for functions that throw errors or infinite loops.\nThey never reach the end."
  },
  {
    question: "🧠 11. What is type assertion?",
    options: [
      "A. as keyword",
      "B. Telling compiler the type",
      "C. Type casting",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nlet x = value as string\nYou're telling TS: \"Trust me, it's a string!\""
  },
  {
    question: "🧠 12. What is a generic?",
    options: [
      "A. Reusable type parameter",
      "B. Any type",
      "C. Optional type",
      "D. Union type"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nfunction identity<T>(arg: T): T { return arg; }\nT is placeholder for any type."
  },
  {
    question: "🧠 13. What does 'extends' do in generics?",
    options: [
      "A. Constrains generic type",
      "B. Extends a class",
      "C. Inherits properties",
      "D. Creates subtype"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n<T extends string> means T must be string or subtype.\nSets boundaries for generic."
  },
  {
    question: "🧠 14. What is 'keyof'?",
    options: [
      "A. Gets all keys of type",
      "B. Gets all values of type",
      "C. Gets key-value pairs",
      "D. Gets object keys"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ntype Keys = keyof Person\nGets union of all property names."
  },
  {
    question: "🧠 15. What is 'typeof' in TypeScript?",
    options: [
      "A. Gets type of value",
      "B. Gets runtime type",
      "C. Checks type",
      "D. Converts type"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nlet person = {name: 'John'};\ntype Person = typeof person;"
  },
  {
    question: "🧠 16. What is intersection type?",
    options: [
      "A. Type1 & Type2",
      "B. Type1 | Type2",
      "C. Type1 + Type2",
      "D. Type1, Type2"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nIntersection = AND type\nMust have all properties from both types."
  },
  {
    question: "🧠 17. What is 'unknown' type?",
    options: [
      "A. Type-safe version of any",
      "B. Same as any",
      "C. Same as never",
      "D. Same as void"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nunknown = safer any\nMust check type before using."
  },
  {
    question: "🧠 18. What is enum?",
    options: [
      "A. Named constants",
      "B. Array of values",
      "C. Object type",
      "D. String literal"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nenum Color { Red, Green, Blue }\nGives names to numeric values."
  },
  {
    question: "🧠 19. What is type alias?",
    options: [
      "A. Custom name for type",
      "B. Same as interface",
      "C. Type conversion",
      "D. Type checking"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ntype Name = string;\nGives a name to any type."
  },
  {
    question: "🧠 20. What is 'void' type?",
    options: [
      "A. Function returns nothing",
      "B. Empty value",
      "C. Null value",
      "D. Undefined value"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nfunction log(): void { console.log('hi'); }\nNo return value."
  },
  {
    question: "🧠 21. What is a literal type?",
    options: [
      "A. Exact value as type",
      "B. String type",
      "C. Number type",
      "D. Boolean type"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nlet x: 'hello' = 'hello';\nType is exact value, not just string."
  },
  {
    question: "🧠 22. What is mapped type?",
    options: [
      "A. Transform properties of type",
      "B. Map data structure",
      "C. Array map function",
      "D. Object mapping"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ntype Readonly<T> = { readonly [P in keyof T]: T[P] }\nTransforms each property."
  },
  {
    question: "🧠 23. What is conditional type?",
    options: [
      "A. Type based on condition",
      "B. If-else for types",
      "C. T extends U ? X : Y",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\ntype IsString<T> = T extends string ? true : false\nLike ternary for types."
  },
  {
    question: "🧠 24. What is 'strictNullChecks'?",
    options: [
      "A. Prevents null/undefined bugs",
      "B. Allows null everywhere",
      "C. Checks for null values",
      "D. Removes null"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nMakes null and undefined separate types.\nCan't assign null to string without explicit union."
  },
  {
    question: "🧠 25. What is index signature?",
    options: [
      "A. [key: string]: ValueType",
      "B. Dynamic property names",
      "C. Object with any keys",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\ninterface Dict { [key: string]: number }\nAllows any string key with number value."
  },
  {
    question: "🧠 26. What is 'Partial<T>'?",
    options: [
      "A. Makes all properties optional",
      "B. Makes all properties required",
      "C. Removes properties",
      "D. Adds properties"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nPartial<Person> makes all Person properties optional.\nBuilt-in utility type."
  },
  {
    question: "🧠 27. What is 'Required<T>'?",
    options: [
      "A. Makes all properties required",
      "B. Makes all properties optional",
      "C. Adds required properties",
      "D. Removes properties"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nRequired<Person> removes all optional modifiers.\nOpposite of Partial."
  },
  {
    question: "🧠 28. What is 'Pick<T, K>'?",
    options: [
      "A. Selects specific properties",
      "B. Removes properties",
      "C. Adds properties",
      "D. Changes property types"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nPick<Person, 'name' | 'age'>\nCreates type with only selected properties."
  },
  {
    question: "🧠 29. What is 'Omit<T, K>'?",
    options: [
      "A. Removes specific properties",
      "B. Adds properties",
      "C. Selects properties",
      "D. Changes property types"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nOmit<Person, 'password'>\nCreates type without specified properties."
  },
  {
    question: "🧠 30. What is 'Record<K, T>'?",
    options: [
      "A. Object with specific keys and value type",
      "B. Array of records",
      "C. Database record",
      "D. Type recording"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nRecord<string, number> = object with string keys and number values.\nShorthand for index signature."
  },
  {
    question: "🧠 31. What does 'as const' do?",
    options: [
      "A. Makes value readonly and literal",
      "B. Converts to constant",
      "C. Type assertion",
      "D. Creates constant"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nconst arr = [1, 2] as const\nMakes it readonly tuple of literals."
  },
  {
    question: "🧠 32. What is 'infer' keyword?",
    options: [
      "A. Extracts type in conditional",
      "B. Infers variable type",
      "C. Type inference",
      "D. Creates type"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\ntype ReturnType<T> = T extends (...args: any[]) => infer R ? R : any\nCaptures return type."
  },
  {
    question: "🧠 33. What is namespace?",
    options: [
      "A. Groups related code",
      "B. Module system",
      "C. Type grouping",
      "D. Class grouping"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nnamespace Utils { export function log() {} }\nOrganizes code, but modules are preferred now."
  },
  {
    question: "🧠 34. What is declaration merging?",
    options: [
      "A. Combining multiple declarations",
      "B. Merging types",
      "C. Interface extension",
      "D. All of the above"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nDeclare same interface twice = TypeScript merges them.\nAdds all properties together."
  },
  {
    question: "🧠 35. What is 'this' parameter?",
    options: [
      "A. Defines this type in function",
      "B. Binds this context",
      "C. Arrow function this",
      "D. Class this"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nfunction f(this: Type, arg: string) {}\nFirst parameter named 'this' defines its type."
  },
  {
    question: "🧠 36. What is abstract class?",
    options: [
      "A. Base class with abstract methods",
      "B. Interface with implementation",
      "C. Cannot be instantiated",
      "D. Both A and C"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nabstract class Animal { abstract makeSound(): void; }\nMust be extended, can't create instance directly."
  },
  {
    question: "🧠 37. What is 'private' vs '#'?",
    options: [
      "A. # is runtime private, private is compile-time",
      "B. Same thing",
      "C. # is TypeScript, private is JavaScript",
      "D. private is stronger"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nprivate = TypeScript only (erased at runtime)\n# = JavaScript private (truly private)"
  },
  {
    question: "🧠 38. What is type guard?",
    options: [
      "A. Narrows type in condition",
      "B. Protects type",
      "C. Type checking function",
      "D. Both A and C"
    ],
    correctAnswer: 3,
    explanation: "✅ Correct: D\n\n🫏 Explanation:\nif (typeof x === 'string') { /* x is string here */ }\nTypeScript understands type in this block."
  },
  {
    question: "🧠 39. What is 'is' keyword?",
    options: [
      "A. User-defined type guard",
      "B. Type check",
      "C. Type comparison",
      "D. Boolean check"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nfunction isString(x: any): x is string { return typeof x === 'string'; }\nTells TS the return type narrows."
  },
  {
    question: "🧠 40. What is 'Exclude<T, U>'?",
    options: [
      "A. Removes types from union",
      "B. Excludes properties",
      "C. Removes values",
      "D. Filters type"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nExclude<'a' | 'b' | 'c', 'a'> = 'b' | 'c'\nRemoves matching types from union."
  }
];
