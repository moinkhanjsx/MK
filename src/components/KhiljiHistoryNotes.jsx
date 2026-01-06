import React, { useState } from 'react';

const KhiljiHistoryNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">⚔️ Alauddin Khilji Notes</h1>
          <p className="text-gray-400">The Khilji Dynasty (1296-1316) - Wartime Command Economy</p>
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
                <div className="bg-red-900 p-4 rounded">
                  <h3 className="font-semibold text-red-200 mb-2">🎯 Military Ambitions & Campaigns</h3>
                  <p>Conquest of Devagiri, Gujarat, Chittor for wealth extraction and plunder. Goal: unlimited conquest and accumulation.</p>
                </div>
                <div className="bg-green-900 p-4 rounded">
                  <h3 className="font-semibold text-green-200 mb-2">💰 Economic & Market Reforms</h3>
                  <p>Price controls through Diwan-i-Riyasat & Shahna-i-Mandi. Goal: sustain massive army with low cost.</p>
                </div>
                <div className="bg-blue-900 p-4 rounded">
                  <h3 className="font-semibold text-blue-200 mb-2">🛡️ Administrative & Military Control</h3>
                  <p>Dagh (horse branding), Chehra (soldier registration). Goal: prevent corruption and ensure absolute loyalty.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">⚡ The Mongol Invasions</h3>
                  <p>Constant northwest threat requiring permanent standing army. Goal: defend and survive.</p>
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
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-200 mb-2">Military Goal</p>
                  <p>Unlimited conquest and wealth accumulation through plunder and tribute</p>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-200 mb-2">Economic Goal</p>
                  <p>Control prices of EVERYTHING to maintain large standing army at low cost</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-200 mb-2">Control Mechanism</p>
                  <p>Dagh & Chehra: prevent soldier corruption, ensure horses not switched, verify identity</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Defense Strategy</p>
                  <p>Massive army funded by price controls = permanent defense against Mongol invasions</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Price Controls</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why control prices?</p>
                  <p>To make huge permanent army affordable with low fixed salaries</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why need huge army?</p>
                  <p>Two ongoing wars: expansion in India + defense against Mongol invasions</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: Why permanent army?</p>
                  <p>Mongol threat constant & unpredictable. Also prevents noble rebellions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: How achieve low prices?</p>
                  <p>Government controls entire supply chain: buy from farmers fixed price → store in granaries → sell through licensed traders at fixed market price</p>
                </div>
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded border-l-4 border-blue-500 mt-4">
                  <p className="font-bold text-blue-200">Core Truth:</p>
                  <p>WARTIME COMMAND ECONOMY - All economic machinery subordinated to military power. Individual merchant profit sacrificed for state strength.</p>
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
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-red-200 mb-2">🎯 Two Big Goals</p>
                  <p>1) Conquer everywhere to get treasure. 2) Stop the scary Mongol bullies at the gate.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-yellow-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">👑 The Price Boss Strategy</p>
                  <p>Alauddin tells farmers: "I buy all wheat at THIS price." Tells shopkeepers: "You sell bread at THAT price." Has secret inspectors to catch cheaters. Everything—wheat, horses, clothes—gets controlled.</p>
                </div>
                <div className="bg-linear-to-r from-yellow-900 to-green-900 p-4 rounded">
                  <p className="font-semibold text-yellow-200 mb-2">🪪 No Cheating Allowed</p>
                  <p>Every soldier gets detailed description taken (Chehra). Every army horse gets branded like ranch cattle (Dagh). No one can switch a good horse for a bad one and pocket the difference.</p>
                </div>
                <div className="bg-linear-to-r from-green-900 to-blue-900 p-4 rounded">
                  <p className="font-semibold text-green-200 mb-2">⚔️ Running the Kingdom Like War</p>
                  <p>Raids southern kingdoms for gold treasure carts. Builds huge walls and giant armies to beat Mongol invaders. Everything = War. He's the strictest manager ever—whole kingdom is one giant war machine.</p>
                </div>
              </div>
            )}
          </div>

          {/* Systems Explained */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('systems')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">5️⃣ Key Systems Explained</h2>
              <span className="text-2xl">{expandedSection === 'systems' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'systems' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-200">Diwan-i-Riyasat</p>
                  <p>Ministry of Commerce. Sets all prices for essential goods. Manages procurement and distribution.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-bold text-orange-200">Shahna-i-Mandi</p>
                  <p>Market Controllers. Secret inspectors who catch vendors overcharging. Enforce price caps.</p>
                </div>
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-200">Dagh (Horse Branding)</p>
                  <p>Every army horse branded with unique mark. Prevents soldier from switching good horse for bad and pocketing difference.</p>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="font-bold text-green-200">Chehra (Soldier Registration)</p>
                  <p>Detailed physical description of each soldier recorded. Prevents impersonation and desertion.</p>
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
              <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - How It All Connected</h2>
              <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'synthesis' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-red-200 mb-2">🎯 Military Goals Created Need</p>
                  <p>Wanted to conquer + had to fight Mongols = Needed giant permanent army</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-green-900 p-4 rounded">
                  <p className="font-bold text-orange-200 mb-2">💰 Economic System Was the Engine</p>
                  <p>Price controls funded the army. Low prices = soldiers could live on low pay = army sustainable</p>
                </div>
                <div className="bg-linear-to-r from-green-900 to-blue-900 p-4 rounded">
                  <p className="font-bold text-green-200 mb-2">🛡️ Control Systems Were the Control Panel</p>
                  <p>Dagh & Chehra + spy inspectors = prevented corruption, prevented rebellion, kept system from breaking</p>
                </div>
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded border-l-4 border-blue-500 mt-4">
                  <p className="font-bold text-blue-200">Complete Picture:</p>
                  <p>Military ambitions → Need for army → Need for funding → Price controls → Need to prevent cheating → Dagh, Chehra, inspectors. All connected in ONE wartime command economy.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Connect Economic to Military</p>
                  <p className="mb-2">How were Alauddin's economic reforms directly connected to his military goals?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: Price controls made massive army affordable. Without low prices, couldn't sustain permanent force needed for conquest + Mongol defense.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: What were Dagh & Chehra?</p>
                  <p className="mb-2">What were the two main purposes of Dagh and Chehra systems?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: 1) Prevent corruption (soldiers replacing good horses with bad ones). 2) Prevent impersonation & desertion (detailed soldier records).</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Wartime Command Economy</p>
                  <p className="mb-2">Why is Alauddin's system described as a "wartime command economy"? What two wars?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: All economic machinery subordinated to military. Two wars: 1) Expansion through southern conquests. 2) Defense against Mongol invasions. Entire economy existed to sustain military.</p>
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
                  <span className="font-semibold text-red-300">1296-1316</span>
                  <span>Alauddin's reign - peak of Khilji power</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-orange-300">1303</span>
                  <span>Siege of Chittor - symbolic conquest of Rajput power</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-yellow-300">1299</span>
                  <span>Battle of Kili - defeated Mongol invasion</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-green-300">Devagiri, Gujarat</span>
                  <span>Southern campaigns for wealth extraction</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-blue-900 to-purple-900 rounded-lg border border-blue-700">
          <p className="text-blue-200">
            <span className="font-bold">💡 Remember:</span> Alauddin = "Price Boss King" who ran his entire kingdom like a war machine. Control prices → Fund army → Control soldiers → Win wars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KhiljiHistoryNotes;
