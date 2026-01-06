import React, { useState } from 'react';

const SlaveHistoryNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">📚 Slave Dynasty Notes</h1>
          <p className="text-gray-400">Delhi Sultanate (1206-1290 AD) - MPSC Competitive Exam Guide</p>
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
                <div className="bg-gray-900 p-4 rounded">
                  <h3 className="font-semibold text-amber-400 mb-2">📌 Foundation & Qutb-ud-Din Aibak (1206-1210)</h3>
                  <p>Establishment of the first independent Muslim kingdom in Delhi as capital</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <h3 className="font-semibold text-orange-400 mb-2">📌 Expansion & Iltutmish (1211-1236)</h3>
                  <p>Real consolidator: Introduced Iqta System & Tanka Currency</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <h3 className="font-semibold text-yellow-400 mb-2">📌 Crisis & Razia Sultan (1236-1240)</h3>
                  <p>First female ruler; faced opposition from "The Forty" noble oligarchy</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <h3 className="font-semibold text-red-400 mb-2">📌 Consolidation & Balban (1266-1287)</h3>
                  <p>Strict disciplinarian; "Blood and Iron" policy; absolute centralization</p>
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
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-200 mb-2">Mamluks = Slave-Soldiers from Central Asia</p>
                  <p>Their status and wealth depended entirely on master's loyalty</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Iqta System = Feudal Military Structure</p>
                  <p>Land revenue to nobles in exchange for maintaining soldiers</p>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-200 mb-2">Tanka = Silver Currency</p>
                  <p>Standardized commerce and economic stability</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Root Cause</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1:</p>
                  <p>They were literally purchased as military slaves from Central Asia</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2:</p>
                  <p>Slave-soldiers were seen as more loyal than free nobles in Turko-Persian tradition</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3:</p>
                  <p>They had no local power base or family ambitions—identity tied solely to master</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4:</p>
                  <p>Created meritocratic elite to bypass traditional aristocratic power structures</p>
                </div>
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded border-l-4 border-blue-500 mt-4">
                  <p className="font-bold text-blue-200">Core Truth:</p>
                  <p>"Slave" denotes a military-bureaucratic institution, not actual servitude. System allowed capable slaves to become Sultans.</p>
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
                <div className="bg-gradient-to-r from-amber-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-amber-200 mb-2">🏆 The Basic Story</p>
                  <p>A powerful coach (Muhammad Ghori) wins a tournament in India, leaves his best bought player (Aibak) in charge to start a team in Delhi.</p>
                </div>
                <div className="bg-gradient-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">👥 The Real Team Builder (Iltutmish)</p>
                  <p>Makes team rules strong: designs official uniforms (silver coin), keeps bullies away (Mongols), creates Iqta system.</p>
                </div>
                <div className="bg-gradient-to-r from-red-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-red-200 mb-2">⚡ The Crisis (Razia)</p>
                  <p>Capable daughter leads briefly, but senior players don't accept female leader, kick her out.</p>
                </div>
                <div className="bg-gradient-to-r from-pink-900 to-purple-900 p-4 rounded">
                  <p className="font-semibold text-pink-200 mb-2">🛡️ The Strict Manager (Balban)</p>
                  <p>Takes charge: must be feared, fires troublemakers, builds strong fence against bullies, cares about discipline.</p>
                </div>
              </div>
            )}
          </div>

          {/* Key Rulers Comparison */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('rulers')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">5️⃣ Quick Ruler Comparison</h2>
              <span className="text-2xl">{expandedSection === 'rulers' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'rulers' && (
              <div className="px-6 pb-6 border-t border-gray-700">
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gray-900 p-4 rounded">
                    <p className="font-bold text-amber-400">Aibak: Established the kingdom</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <p className="font-bold text-orange-400">Iltutmish: Real Founder - gave it systems (Iqta, Tanka)</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <p className="font-bold text-yellow-400">Razia: Capable but constrained by politics</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded">
                    <p className="font-bold text-red-400">Balban: Strict Disciplinarian - absolute centralization</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Important Dates */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('dates')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">📅 Important Dates</h2>
              <span className="text-2xl">{expandedSection === 'dates' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'dates' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-2 text-gray-300">
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-blue-300">1206</span>
                  <span>Aibak founds Delhi Sultanate</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-green-300">1211-1236</span>
                  <span>Iltutmish's reign - Real consolidation</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-yellow-300">1236-1240</span>
                  <span>Razia Sultan - First female ruler</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-red-300">1266-1287</span>
                  <span>Balban - Absolute centralization</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-purple-300">1290</span>
                  <span>Slave Dynasty ends</span>
                </div>
              </div>
            )}
          </div>

          {/* Revision Checklist */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('checklist')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">✅ Revision Checklist</h2>
              <span className="text-2xl">{expandedSection === 'checklist' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'checklist' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-2 text-gray-300">
                <label className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <input type="checkbox" className="w-5 h-5" /> What "Slave" actually meant
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <input type="checkbox" className="w-5 h-5" /> Why Mamluks were more loyal
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <input type="checkbox" className="w-5 h-5" /> The Iqta system & feudal hierarchy
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <input type="checkbox" className="w-5 h-5" /> The Forty and their power struggles
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <input type="checkbox" className="w-5 h-5" /> Why Razia couldn't maintain power
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <input type="checkbox" className="w-5 h-5" /> Balban's "Blood and Iron" policy
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-white">
                  <input type="checkbox" className="w-5 h-5" /> Indo-Islamic architecture synthesis
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg border border-blue-700">
          <p className="text-blue-200">
            <span className="font-bold">💡 Study Tip:</span> If you can explain each ruler in one simple sentence (like to a 12-year-old), you've understood it well!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlaveHistoryNotes;
