import React, { useState } from 'react';

const TughlaqHistoryNotes = ({ onBack }) => {
  const [expandedSection, setExpandedSection] = useState('overview');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="text-blue-400 hover:text-blue-300 mb-4 flex items-center gap-2 transition-colors"
          >
            ← Back to Quiz
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">👑 Tughlaq Dynasty Notes</h1>
          <p className="text-gray-400">The Period of Grand Ambition and Administrative Turmoil (1320-1414)</p>
        </div>

        {/* Study Sections */}
        <div className="space-y-4">
          {/* Chunking Section */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('chunking')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">1️⃣ Chunking & Deconstruction</h2>
              <span className="text-2xl">{expandedSection === 'chunking' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'chunking' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-green-900 p-4 rounded">
                  <h3 className="font-semibold text-green-200 mb-2">🏗️ Ghiyas-ud-din (1320-1325): The Foundation</h3>
                  <p>Restored stability after Khilji chaos. Practical administrator, built Tughlaqabad, strengthened defenses. Died suspiciously soon after his son Muhammad's return.</p>
                </div>
                <div className="bg-red-900 p-4 rounded">
                  <h3 className="font-semibold text-red-200 mb-2">⚡ Muhammad bin Tughlaq (1325-1351): The Reckless Genius</h3>
                  <p>Intellectual visionary but catastrophically unrealistic. Four major failed projects: Tax Policy (Doab), Capital Shift (Delhi→Daulatabad), Token Currency (copper coins), and Qarachil Expedition.</p>
                </div>
                <div className="bg-blue-900 p-4 rounded">
                  <h3 className="font-semibold text-blue-200 mb-2">☮️ Firoz Shah (1351-1388): The Pious Consolidator</h3>
                  <p>Reversed unpopular measures, cancelled agricultural loans, built welfare projects (canals, hospitals). Made noble positions hereditary—good short-term but weakened military for future.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">💥 Decline & Legacy (1388-1414+)</h3>
                  <p>Rapid disintegration after Firoz Shah. Weak successors + powerful nobles = loss of central control. Timur's invasion (1398) sacked Delhi. Dynasty effectively ended. "Grand Failure."</p>
                </div>
              </div>
            )}
          </div>

          {/* First Principles Section */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('principles')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">2️⃣ First Principles</h2>
              <span className="text-2xl">{expandedSection === 'principles' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'principles' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-200 mb-2">Ghiyas-ud-din's Core</p>
                  <p>Restore stability and administrative order through practical, efficient governance</p>
                </div>
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-200 mb-2">Muhammad's Core</p>
                  <p>Intellectual visionary but complete disconnect between theory and ground-level implementation = widespread suffering</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-200 mb-2">Firoz Shah's Core</p>
                  <p>Win loyalty by reversing unpopular measures, focus on welfare projects, but institutionalize hereditary Iqtas = erode central control</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Legacy Core</p>
                  <p>Grand ambition followed by catastrophic failure. Weakness invites external invasion = total fragmentation</p>
                </div>
              </div>
            )}
          </div>

          {/* 5 Whys Section */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('whys')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Token Currency Collapse</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why did token currency fail?</p>
                  <p>People could easily forge copper coins at home</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why was forgery so easy?</p>
                  <p>Copper coins had NO intrinsic value + no anti-forgery security features to prevent copying</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: Why no anti-forgery measures?</p>
                  <p>Muhammad OVERESTIMATED state authority & UNDERESTIMATED public ingenuity. Assumed decree alone would work.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What economic law doomed it?</p>
                  <p>GRESHAM'S LAW: "Bad money drives out good." People hoarded silver, flooded market with fake copper = economic collapse</p>
                </div>
                <div className="bg-red-900 bg-opacity-40 p-4 rounded border-l-4 border-red-500 mt-4">
                  <p className="font-bold text-red-200">Why #5 (Root Truth):</p>
                  <p>Muhammad's reforms FAILED due to LACK OF CONSULTATION, PILOT TESTING, and SENSITIVITY TO GROUND REALITIES. Philosopher-king whose ideas broke on contact with reality.</p>
                </div>
              </div>
            )}
          </div>

          {/* Feynman Technique */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('feynman')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">4️⃣ Feynman Technique (Simple Explanation)</h2>
              <span className="text-2xl">{expandedSection === 'feynman' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'feynman' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-green-900 to-teal-900 p-4 rounded">
                  <p className="font-semibold text-green-200 mb-2">🏗️ The Practical King (Ghiyas)</p>
                  <p>A smart, hard-working king who fixed his kingdom after chaos. Built strong cities and good defenses. But something suspicious happened—he died right after his son came back.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-red-200 mb-2">⚡ The Too-Smart-For-His-Own-Good King (Muhammad)</p>
                  <p>Super intelligent but completely out of touch. He had four mega-bad ideas: 1) "Pay more taxes!" (farmers starved). 2) "Move the whole capital city!" (1,000 km away, then moved back). 3) "Use fake money!" (people made counterfeits at home). 4) "Go climb the Himalayas!" (army died).</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-purple-900 p-4 rounded">
                  <p className="font-semibold text-blue-200 mb-2">☮️ The Nice King (Firoz Shah)</p>
                  <p>Opposite of Muhammad. He said "No more crazy ideas!" Forgave debts, built canals, fixed old monuments, made nobles happy by letting their kids inherit jobs. But made the army weak.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-purple-200 mb-2">💥 The Invasion (Timur)</p>
                  <p>After Firoz died, the kingdom fell apart with lots of fighting between nobles. A scary invader from the north (Timur the Conqueror) attacked. The weak kingdom couldn't defend itself, so Delhi got destroyed. The Tughlaq dynasty ended.</p>
                </div>
              </div>
            )}
          </div>

          {/* Major Policies & Projects */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('policies')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">5️⃣ Muhammad's Four Failed Projects</h2>
              <span className="text-2xl">{expandedSection === 'policies' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'policies' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-200">1️⃣ Tax Policy in the Doab</p>
                  <p>Drastically raised land revenue in fertile Ganga-Yamuna region. Combined with drought = famine. Farmers rebelled. Widespread depopulation.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-bold text-orange-200">2️⃣ Capital Shift (1327)</p>
                  <p>Moved capital from Delhi to Devagiri (renamed Daulatabad), 1,000+ km away. Forced entire population to relocate. Massive suffering. Eventually reversed.</p>
                </div>
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-200">3️⃣ Token Currency (1330)</p>
                  <p>Introduced cheap copper/bronze coins as "equal to silver." No anti-forgery measures. People made counterfeits at home. Gresham's Law: bad money drove out good. Economic collapse.</p>
                </div>
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-200">4️⃣ Qarachil Expedition</p>
                  <p>Disastrous military campaign in the Himalayas. Decimated the army. Massive casualties. Complete failure with no strategic gain.</p>
                </div>
              </div>
            )}
          </div>

          {/* Synthesis */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('synthesis')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - The Complete Arc</h2>
              <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'synthesis' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-green-900 to-teal-900 p-4 rounded">
                  <p className="font-bold text-green-200 mb-2">Phase 1: STABILITY</p>
                  <p>Ghiyas-ud-din builds strong foundation. Order, efficiency, good governance. State is STRONG.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-red-200 mb-2">Phase 2: CHAOS</p>
                  <p>Muhammad destroys it with radical experiments (taxes, moving capital, fake money, bad wars). Widespread suffering, rebellions, depopulation. State is SHATTERED.</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-purple-900 p-4 rounded">
                  <p className="font-bold text-blue-200 mb-2">Phase 3: REPAIR (BUT WEAK)</p>
                  <p>Firoz Shah focuses on welfare & appeasement. Makes nobles happy by giving them hereditary jobs. Short-term: loyalty recovered. Long-term: central control eroded, military weakened.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-bold text-purple-200 mb-2">Phase 4: TOTAL COLLAPSE</p>
                  <p>After Firoz dies, weak successors can't control powerful nobles. Internal fragmentation. Timur invades 1398. Delhi sacked. Dynasty ends. COMPLETE FAILURE.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-500 mt-4">
                  <p className="font-bold text-yellow-300">The Lesson:</p>
                  <p>Big dreams without careful planning (Muhammad) + too much compromise that weakens defense (Firoz) = disaster when external enemies attack. The Tughlaq story is about how a dynasty rises brilliantly, falls spectacularly, tries to recover, but can't, and finally shatters.</p>
                </div>
              </div>
            )}
          </div>

          {/* Self-Test Questions */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('selftest')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🧪 Self-Test Questions</h2>
              <span className="text-2xl">{expandedSection === 'selftest' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'selftest' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q1: Contrast Governing Approaches</p>
                  <p className="mb-2">How did the core governing approach of Muhammad bin Tughlaq differ from that of Firoz Shah Tughlaq? Use one key policy from each to illustrate.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: Muhammad = Top-down radical experiments with no ground consultation (Token Currency failed). Firoz = Bottom-up appeasement to win loyalty (cancelled taxes, built welfare projects). Muhammad broke things; Firoz tried to fix them but weakened the state.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Short-Term vs Long-Term Effects</p>
                  <p className="mb-2">Explain how Firoz Shah's policy of making noble positions hereditary helped him in the short term but hurt the Delhi Sultanate in the long term.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: SHORT-TERM: Nobles got what they wanted (hereditary jobs) = loyalty, stability, peace. LONG-TERM: Central authority weakened, nobles became too powerful, military efficiency declined. When Timur attacked, weak state couldn't defend itself.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Fundamental Flaw Analysis</p>
                  <p className="mb-2">What was Muhammad bin Tughlaq's fundamental flaw in character or methodology that caused his projects to fail?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: LACK OF CONSULTATION + NO PILOT TESTING + DISCONNECT FROM GROUND REALITY. He was a brilliant theorist but completely unaware of what his policies did to real people. He overestimated state authority and underestimated public ingenuity (token currency forgery).</p>
                </div>
              </div>
            )}
          </div>

          {/* Key Dates & Facts */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('dates')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">📅 Key Dates & Facts</h2>
              <span className="text-2xl">{expandedSection === 'dates' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'dates' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-2 text-gray-300">
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-green-300">1320-1325</span>
                  <span>Ghiyas-ud-din Tughlaq - Founder, restores stability</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-red-300">1325-1351</span>
                  <span>Muhammad bin Tughlaq - 4 catastrophic projects</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-blue-300">1327</span>
                  <span>Capital shift: Delhi → Devagiri (Daulatabad)</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-yellow-300">1330</span>
                  <span>Token currency introduced - economic collapse follows</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-purple-300">1351-1388</span>
                  <span>Firoz Shah Tughlaq - Consolidation & welfare focus</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-pink-300">1398</span>
                  <span>Timur's invasion - sacks Delhi, dynasty effectively ends</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-orange-300">1320-1414</span>
                  <span>Full Tughlaq Dynasty span - 94 years of dramatic rise & fall</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-purple-900 to-pink-900 rounded-lg border border-purple-700">
          <p className="text-purple-200">
            <span className="font-bold">💡 Remember:</span> Tughlaq Dynasty = Three Kings, Three Approaches. GHIYAS = Practical Stability. MUHAMMAD = Brilliant Chaos. FIROZ = Kind Weakness. Together they show how a kingdom can rise spectacularly, crash disastrously, try to recover, but ultimately collapse because of internal breakdown.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TughlaqHistoryNotes;
