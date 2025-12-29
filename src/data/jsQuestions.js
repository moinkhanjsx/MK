export const jsQuestions = [
  {
    question: "🧠 1. Output?\nconsole.log(typeof null);",
    options: [
      "A. \"null\"",
      "B. \"object\"",
      "C. \"undefined\"",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nJavaScript bug from 1995.\nnull is not object, but JS says it is 🤡"
  },
  {
    question: "🧠 2. Output?\nconsole.log([] == []);",
    options: [
      "A. true",
      "B. false",
      "C. undefined",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nTwo arrays = two boxes 📦📦\nDifferent boxes → false"
  },
  {
    question: "🧠 3. Output?\nconsole.log([] == false);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n[] → \"\" → 0\nfalse → 0\n0 == 0 → true 😵"
  },
  {
    question: "🧠 4. Output?\nconsole.log(0 == \"0\");",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n== does type conversion.\nSame value → true."
  },
  {
    question: "🧠 5. Output?\nconsole.log(0 === \"0\");",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n=== = strict\nNumber ≠ String ❌"
  },
  {
    question: "🧠 6. Output?\nconsole.log(\"5\" - 1);",
    options: [
      "A. 4",
      "B. \"4\"",
      "C. NaN",
      "D. error"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n- forces number conversion."
  },
  {
    question: "🧠 7. Output?\nconsole.log(\"5\" + 1);",
    options: [
      "A. 6",
      "B. \"6\"",
      "C. \"51\"",
      "D. error"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\n+ loves strings ❤️\nIt concatenates."
  },
  {
    question: "🧠 8. Output?\nconsole.log(true + true);",
    options: [
      "A. true",
      "B. 2",
      "C. false",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\ntrue → 1\n1 + 1 = 2"
  },
  {
    question: "🧠 9. Output?\nconsole.log([] + {});",
    options: [
      "A. \"[object Object]\"",
      "B. \"{}\"",
      "C. error",
      "D. NaN"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n[] → \"\"\n{} → \"[object Object]\"\n\"\" + that = same string"
  },
  {
    question: "🧠 10. Output?\nconsole.log({} + []);",
    options: [
      "A. \"[object Object]\"",
      "B. 0",
      "C. error",
      "D. NaN"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B (in browser)\n\n🫏 Explanation:\nJS treats {} as empty block, not object 😐\nThen +[] → 0"
  },
  {
    question: "🧠 11. Output?\nlet a;\nconsole.log(a);",
    options: [
      "A. null",
      "B. undefined",
      "C. error",
      "D. 0"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nDeclared but not assigned = undefined."
  },
  {
    question: "🧠 12. Output?\nconsole.log(undefined == null);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. NaN"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nJS considers them loosely equal 🤝"
  },
  {
    question: "🧠 13. Output?\nconsole.log(undefined === null);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. NaN"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nStrict check → different types ❌"
  },
  {
    question: "🧠 14. Output?\nvar x = 10;\n(function() {\n  console.log(x);\n  var x = 20;\n})();",
    options: [
      "A. 10",
      "B. 20",
      "C. undefined",
      "D. error"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nvar is hoisted 🪄\nDeclared first, assigned later."
  },
  {
    question: "🧠 15. Output?\nconsole.log(foo);\nvar foo = \"bar\";",
    options: [
      "A. \"bar\"",
      "B. undefined",
      "C. error",
      "D. null"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nvar hoisting → declaration up, value stays down."
  },
  {
    question: "🧠 16. Output?\nconsole.log(foo);\nlet foo = \"bar\";",
    options: [
      "A. \"bar\"",
      "B. undefined",
      "C. error",
      "D. null"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nlet is in temporal dead zone ☠️"
  },
  {
    question: "🧠 17. Output?\nconsole.log(typeof NaN);",
    options: [
      "A. \"NaN\"",
      "B. \"number\"",
      "C. \"undefined\"",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNaN = Not a Number\nBut type = number 🤡"
  },
  {
    question: "🧠 18. Output?\nconsole.log(NaN == NaN);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNaN doesn't trust even itself 😐"
  },
  {
    question: "🧠 19. Output?\nconsole.log([] === []);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nReference comparison → different arrays."
  },
  {
    question: "🧠 20. Output?\nconsole.log(!!\"\");",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n\"\" → false\n!! makes it boolean → false"
  },
  {
    question: "🧠 21. Output?\nconsole.log(1 + \"2\" + 3);",
    options: [
      "A. 6",
      "B. 15",
      "C. \"123\"",
      "D. \"33\""
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nNumber + String = String\nThen everything sticks together."
  },
  {
    question: "🧠 22. Output?\nconsole.log(1 + 2 + \"3\");",
    options: [
      "A. \"33\"",
      "B. \"123\"",
      "C. 6",
      "D. error"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n1 + 2 = 3\n3 + \"3\" = \"33\""
  },
  {
    question: "🧠 23. Output?\nconsole.log(true == \"true\");",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\n\"true\" is not converted to boolean.\nJS doesn't go that far."
  },
  {
    question: "🧠 24. Output?\nconsole.log(false == \"\");",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. NaN"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nfalse → 0\n\"\" → 0\n0 == 0 → true 😐"
  },
  {
    question: "🧠 25. Output?\nconsole.log([] == ![]);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n![] → false\n[] → \"\" → 0\nfalse → 0\n0 == 0 → true 🤯"
  },
  {
    question: "🧠 26. Output?\nconsole.log(typeof []);",
    options: [
      "A. \"array\"",
      "B. \"object\"",
      "C. \"list\"",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nArrays are objects in JS."
  },
  {
    question: "🧠 27. Output?\nconsole.log(Array.isArray([]));",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nThis is the correct way to check arrays."
  },
  {
    question: "🧠 28. Output?\nconsole.log(typeof function() {});",
    options: [
      "A. \"object\"",
      "B. \"function\"",
      "C. \"method\"",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nFunctions are first-class citizens."
  },
  {
    question: "🧠 29. Output?\nconsole.log(+\"10\");",
    options: [
      "A. \"10\"",
      "B. 10",
      "C. NaN",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nUnary + converts string to number."
  },
  {
    question: "🧠 30. Output?\nconsole.log(+true);",
    options: [
      "A. true",
      "B. 1",
      "C. false",
      "D. NaN"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\ntrue → 1\nfalse → 0"
  },
  {
    question: "🧠 31. Output?\nconsole.log(parseInt(\"10px\"));",
    options: [
      "A. 10",
      "B. NaN",
      "C. \"10\"",
      "D. error"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nStops reading at non-number."
  },
  {
    question: "🧠 32. Output?\nconsole.log(parseInt(\"px10\"));",
    options: [
      "A. 10",
      "B. NaN",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nStarts with text → immediate fail."
  },
  {
    question: "🧠 33. Output?\nconsole.log(isNaN(\"hello\"));",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n\"hello\" → cannot become number → NaN → true"
  },
  {
    question: "🧠 34. Output?\nconsole.log(Number.isNaN(\"hello\"));",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nStricter than isNaN.\nOnly true for actual NaN."
  },
  {
    question: "🧠 35. Output?\nconsole.log(0.1 + 0.2 === 0.3);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. sometimes"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nFloating point math is drunk 🍺\n0.30000000000000004"
  },
  {
    question: "🧠 36. Output?\nconsole.log(Math.max());",
    options: [
      "A. 0",
      "B. undefined",
      "C. -Infinity",
      "D. error"
    ],
    correctAnswer: 2,
    explanation: "✅ Correct: C\n\n🫏 Explanation:\nNo arguments → lowest possible number."
  },
  {
    question: "🧠 37. Output?\nconsole.log(Math.min());",
    options: [
      "A. 0",
      "B. Infinity",
      "C. undefined",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNo arguments → highest possible number."
  },
  {
    question: "🧠 38. Output?\nconsole.log(typeof NaN === typeof undefined);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNaN → number\nundefined → undefined\nNot same."
  },
  {
    question: "🧠 39. Output?\nconsole.log(!![]);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nEmpty array is still an object → truthy."
  },
  {
    question: "🧠 40. Output?\nconsole.log([] ? \"yes\" : \"no\");",
    options: [
      "A. yes",
      "B. no",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nAll objects are truthy, even empty ones."
  },
  {
    question: "🧠 DONKEY FINAL TAKEAWAYS\n\nJS lies politely\n\n== is dangerous ☠️\n\nObjects & arrays = truthy\n\nParsing is tricky\n\nFloating math is broken by design",
    options: [
      "JS lies politely",
      "== is dangerous ☠️",
      "Objects & arrays = truthy",
      "Parsing is tricky",
      "Floating math is broken by design"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 JS lies politely\n\nThese are the key takeaways from JavaScript's weird behaviors!"
  },
  {
    question: "🧠 41. Output?\nconsole.log([] == []);",
    options: [
      "A. true",
      "B. false",
      "C. undefined",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nArrays compare by reference, not value.\nTwo different boxes 📦📦 → false."
  },
  {
    question: "🧠 42. Output?\nconsole.log({} == {});",
    options: [
      "A. true",
      "B. false",
      "C. undefined",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nSame rule as arrays.\nDifferent objects → false."
  },
  {
    question: "🧠 43. Output?\nconsole.log([] == \"\");",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n[] → \"\"\n\"\" == \"\" → true 🤯"
  },
  {
    question: "🧠 44. Output?\nconsole.log([] == 0);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n[] → \"\" → 0\n0 == 0 → true"
  },
  {
    question: "🧠 45. Output?\nconsole.log(null == 0);",
    options: [
      "A. true",
      "B. false",
      "C. undefined",
      "D. error"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnull only equals undefined, nothing else."
  },
  {
    question: "🧠 46. Output?\nconsole.log(null >= 0);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nRelational operators convert null → 0\n0 >= 0 → true 😵"
  },
  {
    question: "🧠 47. Output?\nconsole.log(null > 0);",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nnull → 0\n0 > 0 → false"
  },
  {
    question: "🧠 48. Output?\nconsole.log(\"2\" > \"12\");",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\nString comparison is dictionary-style 📖\n\"2\" comes after \"1\" → true"
  },
  {
    question: "🧠 49. Output?\nconsole.log(2 > \"12\");",
    options: [
      "A. true",
      "B. false",
      "C. error",
      "D. undefined"
    ],
    correctAnswer: 1,
    explanation: "✅ Correct: B\n\n🫏 Explanation:\nNumber vs string → string becomes number\n2 > 12 → false"
  },
  {
    question: "🧠 50. Output?\nconsole.log([] + []);",
    options: [
      "A. \"\"",
      "B. []",
      "C. error",
      "D. NaN"
    ],
    correctAnswer: 0,
    explanation: "✅ Correct: A\n\n🫏 Explanation:\n[] → \"\"\n\"\" + \"\" → \"\" (empty string)"
  }
];