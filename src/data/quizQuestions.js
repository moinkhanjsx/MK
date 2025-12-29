export const quizQuestions = [
  {
    question: "What is difference between == and equals()?",
    options: [
      "Both compare values",
      "Both compare references",
      "== compares references, equals() compares values",
      "== compares values, equals() compares references"
    ],
    correctAnswer: 2,
    explanation: "== → 'Are these two things same box?'\nequals() → 'Do these two boxes contain the same stuff?'\n\n== checks if they're the exact same object in memory, equals() checks if they have the same content."
  },
  {
    question: "String is immutable means?",
    options: [
      "String value can change",
      "String object cannot change",
      "String reference cannot change",
      "String memory location cannot change"
    ],
    correctAnswer: 1,
    explanation: "You cannot change the same string object. When you 'change' it → Java creates a new string. Like a sealed envelope - you can't change what's inside, you have to make a new one."
  },
  {
    question: "Why String is immutable?",
    options: [
      "For security",
      "For thread safety",
      "For performance",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "One rule → many benefits. Like sealed milk packet 🥛 — safe, shared, fast. Immutable strings are secure (can't be modified), thread-safe (no locking needed), and allow optimizations like string pooling."
  },
  {
    question: "Output?\nString s1 = \"Java\";\nString s2 = \"Java\";\nSystem.out.println(s1 == s2);",
    options: [
      "true",
      "false",
      "Compile error",
      "Runtime error"
    ],
    correctAnswer: 0,
    explanation: "String literals go into String Pool. Same text → same object. Java is smart - if you create the same string literal, it just points to the existing one in the pool to save memory."
  },
  {
    question: "Output?\nString s1 = new String(\"Java\");\nString s2 = new String(\"Java\");\nSystem.out.println(s1 == s2);",
    options: [
      "true",
      "false",
      "Compile error",
      "Runtime error"
    ],
    correctAnswer: 1,
    explanation: "new = new box every time 📦\nDifferent boxes → == false.\nWhen you use 'new', Java always creates a new object in memory, even if the content is the same."
  },
  {
    question: "Can we overload main()?",
    options: [
      "No",
      "Yes",
      "Only once",
      "Only static"
    ],
    correctAnswer: 1,
    explanation: "Java calls only:\npublic static void main(String[] args)\nOthers are ignored. You can have multiple main methods with different parameters, but JVM only calls the specific one."
  },
  {
    question: "Can we override static methods?",
    options: [
      "Yes",
      "No",
      "Sometimes",
      "Only final"
    ],
    correctAnswer: 1,
    explanation: "Static = belongs to class, not object. No object → no overriding. Static methods are hidden, not overridden. Child class can have its own static method with the same name, but it's not polymorphism."
  },
  {
    question: "Difference between final, finally, finalize()?",
    options: [
      "All same",
      "All different",
      "final & finally same",
      "finally & finalize() same"
    ],
    correctAnswer: 1,
    explanation: "final → stop changing ✋\nfinally → always runs 🔁\nfinalize() → before garbage collection 🗑️\n\nThree completely different concepts with similar names!"
  },
  {
    question: "Which keyword prevents inheritance?",
    options: [
      "static",
      "private",
      "final",
      "protected"
    ],
    correctAnswer: 2,
    explanation: "final class = 'No kids allowed' 👶❌\n\nWhen a class is marked final, no other class can extend it. It's like saying 'This design is complete - no one can modify it.'"
  },
  {
    question: "Can constructor be final?",
    options: [
      "Yes",
      "No",
      "Only private",
      "Only static"
    ],
    correctAnswer: 1,
    explanation: "Constructors cannot be inherited → no need for final. Constructors are never inherited anyway, so making them final would be meaningless. Java doesn't allow it."
  },
  {
    question: "What is default value of instance variable?",
    options: [
      "garbage",
      "null",
      "0 / false / null",
      "Undefined"
    ],
    correctAnswer: 2,
    explanation: "Java is polite → it gives defaults.\n\nNumbers → 0\nboolean → false\nObjects → null\n\nJava automatically initializes instance variables, but not local variables."
  },
  {
    question: "What about local variables default value?",
    options: [
      "0",
      "null",
      "Depends",
      "No default"
    ],
    correctAnswer: 3,
    explanation: "Local variables = your responsibility 😤\n\nJava doesn't give default values to local variables. You must initialize them before use, or you'll get a compile error."
  },
  {
    question: "Which collection allows duplicates?",
    options: [
      "Set",
      "Map",
      "List",
      "None"
    ],
    correctAnswer: 2,
    explanation: "List = attendance register → names can repeat.\n\nLists allow duplicate elements, Sets don't, Maps have unique keys but duplicate values are allowed."
  },
  {
    question: "Which collection is unordered?",
    options: [
      "ArrayList",
      "LinkedList",
      "HashSet",
      "TreeSet"
    ],
    correctAnswer: 2,
    explanation: "HashSet = throw items in bucket 🪣\n\nHashSet doesn't maintain insertion order. ArrayList and LinkedList maintain order, TreeSet maintains sorted order."
  },
  {
    question: "HashMap allows?",
    options: [
      "Duplicate keys",
      "Duplicate values",
      "Null keys only",
      "No nulls"
    ],
    correctAnswer: 1,
    explanation: "Keys = unique 🔑\nValues = whatever 😎\n\nHashMap allows duplicate values but not duplicate keys. It allows one null key and multiple null values."
  },
  {
    question: "How many null keys in HashMap?",
    options: [
      "0",
      "1",
      "Many",
      "Depends on JVM"
    ],
    correctAnswer: 1,
    explanation: "Only one key can be null.\n\nHashMap allows exactly one null key. If you try to put another null key, it will replace the existing one."
  },
  {
    question: "Which is thread-safe?",
    options: [
      "ArrayList",
      "HashMap",
      "Vector",
      "HashSet"
    ],
    correctAnswer: 2,
    explanation: "Vector = old but safe 🧓🛡️\n\nVector is synchronized (thread-safe) but slower. ArrayList, HashMap, and HashSet are not thread-safe by default."
  },
  {
    question: "What is JVM?",
    options: [
      "Compiler",
      "OS",
      "Virtual machine",
      "Hardware"
    ],
    correctAnswer: 2,
    explanation: "JVM = middleman that runs Java code.\n\nJVM (Java Virtual Machine) is an abstract computing machine that enables your computer to run Java programs, making Java platform-independent."
  },
  {
    question: "What happens if exception not handled?",
    options: [
      "Program continues",
      "JVM ignores",
      "Program crashes",
      "Compiler fixes"
    ],
    correctAnswer: 2,
    explanation: "Unhandled problem → program stops 🚨\n\nWhen an exception is not caught and handled, JVM prints stack trace and terminates the program abruptly."
  },
  {
    question: "Can try exist without catch?",
    options: [
      "No",
      "Yes",
      "Only finally",
      "Only checked"
    ],
    correctAnswer: 1,
    explanation: "try {\n   // code\n} finally {\n   // always runs\n}\n\nYes! try can exist with finally but without catch. finally block always executes, whether exception occurs or not."
  },
  {
    question: "Output?\nSystem.out.println(10 + 20 + \"Java\");",
    options: [
      "Java30",
      "1020Java",
      "30Java",
      "Compile error"
    ],
    correctAnswer: 2,
    explanation: "Java reads left to right\n10 + 20 = 30 → then \"Java\" joins → 30Java"
  },
  {
    question: "Output?\nSystem.out.println(\"Java\" + 10 + 20);",
    options: [
      "Java30",
      "Java1020",
      "1020Java",
      "Compile error"
    ],
    correctAnswer: 1,
    explanation: "Once String comes → everything becomes String 🍜"
  },
  {
    question: "Output?\nint x = 10;\nSystem.out.println(x++);",
    options: [
      "11",
      "10",
      "9",
      "Compile error"
    ],
    correctAnswer: 1,
    explanation: "Post-increment = print first, increase later"
  },
  {
    question: "Output?\nint x = 10;\nSystem.out.println(++x);",
    options: [
      "10",
      "11",
      "9",
      "Compile error"
    ],
    correctAnswer: 1,
    explanation: "Pre-increment = increase first, print later"
  },
  {
    question: "Is Java 100% object-oriented?",
    options: [
      "Yes",
      "No",
      "Sometimes",
      "Depends on JVM"
    ],
    correctAnswer: 1,
    explanation: "Primitive types (int, double) are not objects."
  },
  {
    question: "Can interface have methods with body?",
    options: [
      "No",
      "Yes, from Java 8",
      "Only static",
      "Only private"
    ],
    correctAnswer: 1,
    explanation: "Java 8 added default methods."
  },
  {
    question: "Can interface have variables?",
    options: [
      "No",
      "Yes, any type",
      "Only final",
      "public static final only"
    ],
    correctAnswer: 3,
    explanation: "Interface variables = constants only"
  },
  {
    question: "Which one breaks encapsulation?",
    options: [
      "private variables",
      "public getters",
      "public variables",
      "setters"
    ],
    correctAnswer: 2,
    explanation: "Public variable = open underwear in public 😐"
  },
  {
    question: "Which is faster?",
    options: [
      "String",
      "StringBuffer",
      "StringBuilder",
      "All same"
    ],
    correctAnswer: 2,
    explanation: "String → slow\nStringBuffer → safe but slow\nStringBuilder → fast but unsafe"
  },
  {
    question: "Which is synchronized?",
    options: [
      "String",
      "StringBuilder",
      "StringBuffer",
      "None"
    ],
    correctAnswer: 2,
    explanation: "Synchronized = thread-safe 🛡️"
  },
  {
    question: "Can we create object without new?",
    options: [
      "No",
      "Yes",
      "Only reflection",
      "Only clone"
    ],
    correctAnswer: 1,
    explanation: "Ways:\nclone()\nreflection\ndeserialization"
  },
  {
    question: "What is marker interface?",
    options: [
      "Interface with methods",
      "Interface with variables",
      "Empty interface",
      "Abstract class"
    ],
    correctAnswer: 2,
    explanation: "Marker interface = tag only (example: Serializable)"
  },
  {
    question: "Can abstract class have constructor?",
    options: [
      "No",
      "Yes",
      "Only default",
      "Only private"
    ],
    correctAnswer: 1,
    explanation: "Constructor is for child object creation"
  },
  {
    question: "Can abstract method be static?",
    options: [
      "Yes",
      "No",
      "Sometimes",
      "Only public"
    ],
    correctAnswer: 1,
    explanation: "Abstract = needs override\nStatic = cannot override\n❌ conflict"
  },
  {
    question: "What happens if constructor throws exception?",
    options: [
      "Object created",
      "JVM ignores",
      "Object not created",
      "Partial object"
    ],
    correctAnswer: 2,
    explanation: "No constructor success = no object 🧱❌"
  },
  {
    question: "Can we overload constructor?",
    options: [
      "No",
      "Yes",
      "Only once",
      "Only private"
    ],
    correctAnswer: 1,
    explanation: "Different parameters = different constructors."
  },
  {
    question: "Difference: Array vs ArrayList?",
    options: [
      "Same",
      "Array is dynamic",
      "ArrayList is fixed",
      "Array is fixed, ArrayList is dynamic"
    ],
    correctAnswer: 3,
    explanation: "Array = rigid steel\nArrayList = rubber band"
  },
  {
    question: "What is transient keyword?",
    options: [
      "Temporary variable",
      "Skip serialization",
      "Final variable",
      "Static variable"
    ],
    correctAnswer: 1,
    explanation: "Transient = \"Don't save me\" 💾❌"
  },
  {
    question: "What is serialization?",
    options: [
      "Object to file",
      "File to object",
      "Object to byte stream",
      "Database storage"
    ],
    correctAnswer: 2,
    explanation: "Object → bytes → save/send 📦"
  },
  {
    question: "What happens if return inside finally?",
    options: [
      "Exception thrown",
      "Return from try",
      "Return from finally",
      "Compile error"
    ],
    correctAnswer: 2,
    explanation: "finally is boss 😎\nIt overrides everything."
  },
  {
    question: "🧠 41. Output?\nInteger a = 100;\nInteger b = 100;\nSystem.out.println(a == b);",
    options: [
      "A. true",
      "B. false",
      "C. Compile error",
      "D. Runtime error"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nJava caches Integer values from -128 to 127.\nSame number → same object."
  },
  {
    question: "🧠 42. Output?\nInteger a = 200;\nInteger b = 200;\nSystem.out.println(a == b);",
    options: [
      "A. true",
      "B. false",
      "C. Compile error",
      "D. Runtime error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n200 is outside cache → new objects → different boxes 📦📦"
  },
  {
    question: "🧠 43. Output?\nSystem.out.println(10.0 / 0);",
    options: [
      "A. Infinity",
      "B. 0",
      "C. ArithmeticException",
      "D. Runtime error"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nFloating point has Infinity, integers don't."
  },
  {
    question: "🧠 44. Output?\nSystem.out.println(10 % 0);",
    options: [
      "A. 0",
      "B. Infinity",
      "C. ArithmeticException",
      "D. Runtime error"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nInteger divide by zero = 💥 crash."
  },
  {
    question: "🧠 45. Can this() and super() be together?",
    options: [
      "A. Yes",
      "B. No",
      "C. Only in static",
      "D. Only in abstract"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nOnly one constructor call allowed, and first line only."
  },
  {
    question: "🧠 46. Can constructor be static?",
    options: [
      "A. Yes",
      "B. No",
      "C. Only private",
      "D. Only default"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nConstructor = object creation\nStatic = class level\n❌ no match."
  },
  {
    question: "🧠 47. Which block runs first?",
    options: [
      "A. main()",
      "B. static block",
      "C. constructor",
      "D. instance block"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nClass loads → static runs first 🚀"
  },
  {
    question: "🧠 48. Order of execution?\nstatic → instance → constructor → main",
    options: [
      "A. static → instance → constructor → main",
      "B. main → static → constructor → instance",
      "C. static → main → constructor → instance",
      "D. main → constructor → static → instance"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nLoad class → create object → run main 🏃"
  },
  {
    question: "🧠 49. What is tight coupling?",
    options: [
      "A. Using interface",
      "B. Using inheritance",
      "C. Direct object creation",
      "D. Using abstraction"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nInterface = plug & play 🔌\nLoose coupling = easy changes."
  },
  {
    question: "🧠 50. Best way to achieve loose coupling?",
    options: [
      "A. new keyword",
      "B. inheritance",
      "C. interfaces",
      "D. static methods"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nInterface = freedom 🔌\nLoose coupling = easy maintenance."
  },
  {
    question: "🧠 FINAL DONKEY SUMMARY 🫏",
    options: [
      "== compares boxes",
      "equals() compares stuff",
      "Cache exists for small integers",
      "Static runs before everything",
      "Interface = freedom",
      "finally = boss",
      "new creates new boxes",
      "Constructor creates objects"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 equals() compares stuff\n\nFINALLY = boss ADD THESE"
  }
];