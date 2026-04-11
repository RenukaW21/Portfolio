"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

// ─────────────────── BUG FIX DATA ───────────────────
const bugQuestions = [
  {
    id: 1,
    title: "Array Transformation",
    code: `function double(arr) {\n  return arr.map(num => {\n    num * 2;\n  });\n}\nconsole.log(double([1, 2, 3]));\n// Output: [undefined, undefined, undefined]`,
    options: [
      "Should use .filter() instead of .map()",
      "Missing return statement inside arrow function",
      "Wrong variable name — should be 'n'",
      "Array must be copied first with spread"
    ],
    correct: 1,
    explanation: "The arrow function uses a block body `{}` but never returns a value. Without an explicit `return num * 2`, each iteration produces `undefined`."
  },
  {
    id: 2,
    title: "Loop Count",
    code: `let count = 0;\nfor (let i = 0; i <= 10; i++) {\n  count += i;\n}\nconsole.log(count);\n// Expected: 45, Got: 55`,
    options: [
      "Should use var instead of let",
      "count should be initialised to 1",
      "Loop condition should be i < 10, not i <= 10",
      "Missing semicolon after count += i"
    ],
    correct: 2,
    explanation: "`i <= 10` includes 10 in the sum (0+1+…+10 = 55). To sum 1–9 the condition should be `i < 10` which gives 45."
  },
  {
    id: 3,
    title: "Arrow Function & this",
    code: `const user = {\n  name: "Renuka",\n  greet: () => {\n    console.log("Hello, " + this.name);\n  }\n};\nuser.greet(); // Hello, undefined`,
    options: [
      "Template literals should be used here",
      "Arrow functions don't bind their own `this`",
      "user.name is undefined",
      "Missing parentheses on greet"
    ],
    correct: 1,
    explanation: "Arrow functions inherit `this` from the surrounding scope (global/module), so `this.name` is `undefined`. Use a regular function expression to get the correct `this`."
  },
  {
    id: 4,
    title: "Async / Await",
    code: `async function fetchData() {\n  const data = fetch("https://api.example.com");\n  const json = data.json();\n  console.log(json);\n}`,
    options: [
      "fetch() URL is invalid",
      "json() needs square brackets",
      "Missing await before fetch() and data.json()",
      "async keyword is unnecessary here"
    ],
    correct: 2,
    explanation: "`fetch()` returns a Promise. Without `await`, `data` is a Promise object — calling `.json()` on it throws an error. Both calls need `await`."
  },
  {
    id: 5,
    title: "Array Filter",
    code: `const nums = [1, 2, 3, 4, 5];\nconst evens = nums.filter(n => n % 2);\nconsole.log(evens);\n// Expected [2,4], Got [1,3,5]`,
    options: [
      "Should use .map() instead of .filter()",
      "Condition should be n % 2 === 0",
      "Missing return keyword",
      "Wrong starting array"
    ],
    correct: 1,
    explanation: "`n % 2` is truthy for odd numbers (1, 3, 5). To keep even numbers the condition must be `n % 2 === 0`."
  }
];

// ─────────────────── CODE OUTPUT DATA ───────────────────
const outputQuestions = [
  {
    id: 1,
    title: "Type Coercion",
    code: `console.log(1 + "2" + 3);`,
    options: ["6", '"123"', '"15"', "NaN"],
    correct: 1,
    explanation: "JS evaluates left-to-right. `1 + \"2\"` → `\"12\"` (number coerced to string), then `\"12\" + 3` → `\"123\"`."
  },
  {
    id: 2,
    title: "typeof Surprise",
    code: `console.log(typeof null);`,
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    correct: 2,
    explanation: "This is a famous JS bug — `typeof null` returns `\"object\"`. It has been this way since JS 1.0 and was never fixed to maintain backward compatibility."
  },
  {
    id: 3,
    title: "Floating Point",
    code: `console.log(0.1 + 0.2 === 0.3);`,
    options: ["true", "false", "NaN", "TypeError"],
    correct: 1,
    explanation: "`0.1 + 0.2` actually equals `0.30000000000000004` due to IEEE 754 floating-point precision. So the comparison is `false`."
  },
  {
    id: 4,
    title: "Rest Parameters",
    code: `const arr = [1, 2, 3, 4];\nconst [a, b, ...rest] = arr;\nconsole.log(rest);`,
    options: ["[1, 2]", "[3, 4]", "[2, 3, 4]", "[4]"],
    correct: 1,
    explanation: "Destructuring assigns `a=1`, `b=2`, and rest collects remaining values — `[3, 4]`."
  },
  {
    id: 5,
    title: "Nested Ternary",
    code: `let x = 5;\nconst r = x > 3 ? x > 4 ? "big" : "medium" : "small";\nconsole.log(r);`,
    options: ['"medium"', '"small"', '"big"', "undefined"],
    correct: 2,
    explanation: "`x > 3` is true, so we evaluate the inner ternary: `x > 4` is also true (5 > 4), so the result is `\"big\"`."
  }
];

// ─────────────────── SHARED GAME ENGINE ───────────────────
type Question = {
  id: number; title: string; code: string;
  options: string[]; correct: number; explanation: string;
};

function GameEngine({ questions, accent }: { questions: Question[]; accent: string }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const isCorrect = selected === q.correct;
  const total = questions.length;

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correct) setScore(s => s + 1);
  }

  function next() {
    if (current + 1 >= total) { setDone(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
  }

  function restart() {
    setCurrent(0); setSelected(null); setScore(0); setDone(false);
  }

  if (done) {
    const pct = Math.round((score / total) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 py-10"
      >
        <div className="text-7xl font-black" style={{ color: accent, fontFamily: "var(--font-bricolage)" }}>
          {score}/{total}
        </div>
        <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>
          {pct === 100 ? "🏆 Perfect score!" : pct >= 60 ? "💪 Nice work!" : "📚 Keep learning!"}
        </p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          {pct === 100 ? "You nailed every question." : `You got ${score} out of ${total} correct (${pct}%).`}
        </p>
        <button
          onClick={restart}
          style={{ background: accent, color: "#fff", borderRadius: 999, padding: "12px 32px", fontWeight: 700, fontSize: 14 }}
        >
          Play Again ↺
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Progress + Score */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {questions.map((_, i) => (
            <div key={i} style={{
              width: 28, height: 4, borderRadius: 999,
              background: i < current ? accent : i === current ? accent + "80" : "var(--border, #ddd)"
            }} />
          ))}
        </div>
        <span style={{ font: "700 13px/1 var(--font-bricolage)", color: "var(--muted)" }}>
          Score: <span style={{ color: accent }}>{score}</span>/{total}
        </span>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          {/* Title */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: accent, marginBottom: 8 }}>
            Q{current + 1} · {q.title}
          </p>

          {/* Code block */}
          <div style={{
            background: "#0d1117", borderRadius: 16, padding: "20px 24px",
            border: "1px solid rgba(255,255,255,0.08)", marginBottom: 20,
          }}>
            <pre style={{
              color: "#e6edf3", fontSize: "clamp(12px,1.3vw,14px)",
              lineHeight: 1.75, fontFamily: "ui-monospace, 'Cascadia Code', monospace",
              margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word",
            }}>
              {q.code}
            </pre>
          </div>

          {/* Options */}
          <p style={{ fontSize: 13, fontWeight: 600, color: "var(--fg)", marginBottom: 12, opacity: 0.7 }}>
            What is the issue?
          </p>
          <div className="flex flex-col gap-3">
            {q.options.map((opt, i) => {
              let bg = "var(--card, #fff)";
              let border = "1.5px solid var(--border, #e5e7eb)";
              let color = "var(--fg)";
              if (selected !== null) {
                if (i === q.correct) { bg = "#d1fae5"; border = "1.5px solid #10b981"; color = "#065f46"; }
                else if (i === selected && selected !== q.correct) { bg = "#fee2e2"; border = "1.5px solid #ef4444"; color = "#991b1b"; }
              }
              return (
                <motion.button
                  key={i}
                  onClick={() => choose(i)}
                  whileHover={selected === null ? { x: 4 } : {}}
                  style={{
                    textAlign: "left", padding: "14px 18px", borderRadius: 14,
                    background: bg, border, color, fontSize: 14, fontWeight: 500,
                    cursor: selected !== null ? "default" : "pointer",
                    transition: "background 0.25s, border 0.25s",
                  }}
                >
                  <span style={{ fontWeight: 700, opacity: 0.5, marginRight: 10 }}>
                    {["A", "B", "C", "D"][i]}.
                  </span>
                  {opt}
                </motion.button>
              );
            })}
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: 20, padding: "14px 18px", borderRadius: 14,
                  background: isCorrect ? "#d1fae540" : "#fee2e240",
                  border: `1.5px solid ${isCorrect ? "#10b981" : "#ef4444"}`,
                }}
              >
                <p style={{ fontWeight: 700, color: isCorrect ? "#065f46" : "#991b1b", marginBottom: 4 }}>
                  {isCorrect ? "✓ Correct!" : "✗ Not quite."}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--fg)", opacity: 0.8 }}>
                  {q.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          {selected !== null && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={next}
              style={{
                marginTop: 16, background: accent, color: "#fff",
                borderRadius: 999, padding: "12px 32px", fontWeight: 700, fontSize: 14,
                float: "right",
              }}
            >
              {current + 1 >= total ? "See Results →" : "Next →"}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─────────────────── PAGE ───────────────────
export default function PlaygroundPage() {
  const [activeGame, setActiveGame] = useState<"bug" | "output">("bug");

  const games = [
    {
      id: "bug" as const,
      emoji: "🐛",
      title: "Bug Fix Challenge",
      desc: "Spot the bug in the code snippet. 5 questions — can you get them all?",
      accent: "#002DFF",
    },
    {
      id: "output" as const,
      emoji: "🔮",
      title: "Code Output Predictor",
      desc: "Predict what the code logs. Test your JS intuition across tricky edge cases.",
      accent: "#7c3aed",
    },
  ];

  const active = games.find(g => g.id === activeGame)!;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Navbar />

      <main style={{ maxWidth: 820, margin: "0 auto", padding: "120px 24px 80px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p style={{ color: "#002DFF", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
            Interactive
          </p>
          <h1
            style={{
              fontFamily: "var(--font-bricolage), sans-serif",
              fontSize: "clamp(40px,7vw,80px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
              color: "var(--fg)",
            }}
          >
            Playground
          </h1>
          <p style={{ marginTop: 16, fontSize: 16, color: "var(--muted)", lineHeight: 1.6 }}>
            Two mini-games to test your developer instincts. For fun.
          </p>
        </motion.div>

        {/* Game Selector */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {games.map((g) => (
            <motion.button
              key={g.id}
              onClick={() => setActiveGame(g.id)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              style={{
                textAlign: "left", padding: "24px 28px", borderRadius: 24,
                background: activeGame === g.id ? g.accent : "var(--card, #fff)",
                border: `2px solid ${activeGame === g.id ? g.accent : "var(--border, #e5e7eb)"}`,
                color: activeGame === g.id ? "#fff" : "var(--fg)",
                transition: "all 0.25s",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 10 }}>{g.emoji}</div>
              <div style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: "clamp(16px,2vw,20px)", letterSpacing: "-0.02em" }}>
                {g.title}
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.5, marginTop: 6, opacity: activeGame === g.id ? 0.8 : 0.6 }}>
                {g.desc}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Game Area */}
        <motion.div
          key={activeGame}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "var(--card, #fff)",
            borderRadius: 32,
            padding: "36px 40px",
            border: "1.5px solid var(--border, #e5e7eb)",
          }}
        >
          {/* Game header strip */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            marginBottom: 28, paddingBottom: 20,
            borderBottom: "1px solid var(--border, #e5e7eb)",
          }}>
            <span style={{ fontSize: 24 }}>{active.emoji}</span>
            <div>
              <h2 style={{ fontFamily: "var(--font-bricolage)", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em", color: "var(--fg)" }}>
                {active.title}
              </h2>
            </div>
            <div style={{ marginLeft: "auto", padding: "4px 14px", borderRadius: 999, background: active.accent + "18", color: active.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}>
              5 QUESTIONS
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeGame === "bug" && (
              <motion.div key="bug" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <GameEngine questions={bugQuestions} accent="#002DFF" />
              </motion.div>
            )}
            {activeGame === "output" && (
              <motion.div key="output" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <GameEngine questions={outputQuestions} accent="#7c3aed" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </main>
    </div>
  );
}
