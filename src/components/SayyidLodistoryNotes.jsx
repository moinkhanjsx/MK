import React, { useState } from 'react';

const SayyidLodistoryNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">🏰 Sayyid & Lodi Dynasties Notes</h1>
          <p className="text-gray-400">The Final Chapter of the Delhi Sultanate (1414-1526)</p>
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
                <div className="bg-gray-700 p-4 rounded">
                  <h3 className="font-semibold text-gray-200 mb-2">🌙 Sayyid Dynasty (1414-1451): Shadow of Power</h3>
                  <p>Puppet rulers following Timur's invasion. Weak central authority. Sultan was just the most prominent among regional governors. Authority confined to Delhi and Doab region. Lowest point of Sultanate's power.</p>
                </div>
                <div className="bg-amber-900 p-4 rounded">
                  <h3 className="font-semibold text-amber-200 mb-2">🛡️ Bahlul Lodi (1451-1489): Foundation by Consensus</h3>
                  <p>Afghan chief who founded Lodi dynasty through negotiation and tribal loyalty. Ruled by *primus inter pares* (first among equals). Shared authority with other Afghan chiefs. Expanded kingdom diplomatically, not just by force.</p>
                </div>
                <div className="bg-red-900 p-4 rounded">
                  <h3 className="font-semibold text-red-200 mb-2">🌟 Sikandar Lodi (1489-1517): Centralization & Culture</h3>
                  <p>Most capable Lodi ruler. Tried to centralize power and reduce noble influence. Patron of Persian learning. Shifted capital from Delhi to Agra (1506) to better control Gangetic plain and monitor rebellious nobles.</p>
                </div>
                <div className="bg-pink-900 p-4 rounded">
                  <h3 className="font-semibold text-pink-200 mb-2">💥 Ibrahim Lodi (1517-1526): Autocracy & Disintegration</h3>
                  <p>Violated Afghan tribal compact. Treated nobles with arrogance, attempted autocratic control. Mass rebellions: Daulat Khan Lodi, Rana Sanga. Invited Babur to invade. First Battle of Panipat (1526): Ibrahim killed, Delhi Sultanate ends.</p>
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
                <div className="bg-gray-700 bg-opacity-30 p-4 rounded border-l-4 border-gray-500">
                  <p className="font-semibold text-gray-200 mb-2">Sayyid Core</p>
                  <p>Puppet rulers after Timur. Authority confined to Delhi. Transitional phase. Lowest prestige point of Sultanate.</p>
                </div>
                <div className="bg-amber-900 bg-opacity-30 p-4 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-amber-200 mb-2">Bahlul's Core</p>
                  <p>Afghan tribal principle: *Primus inter pares* (first among equals). Power through consulting chiefs, not absolute decree. Decentralized authority = built empire through inclusion.</p>
                </div>
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-200 mb-2">Sikandar's Core</p>
                  <p>Centralize authority and reduce noble power. Patron of Persian culture. Capital shift to Agra = better administrative control and surveillance of nobles.</p>
                </div>
                <div className="bg-pink-900 bg-opacity-30 p-4 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-200 mb-2">Ibrahim's Fatal Flaw</p>
                  <p>Broke the tribal compact. Autocracy + arrogance toward nobles = rebellion. Invited external conqueror. Ended the dynasty and the entire Sultanate.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - The Afghan Tribal System</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why was tribal system so crucial for Bahlul?</p>
                  <p>He was a tribal chief; his power came from loyalty of other independent Afghan chiefs, not divine-right monarchy</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why did loyalty depend on this system?</p>
                  <p>Afghans valued tribal independence and CONSULTATIVE LEADERSHIP. Chiefs felt respected and included = provided troops and allegiance</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What was practical benefit for expansion?</p>
                  <p>LOW-COST EMPIRE BUILDING. By offering shared spoils and governorships, could incorporate Afghan regions without constant warfare</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was the fatal flaw?</p>
                  <p>Created POWERFUL, ENTRENCHED NOBILITY that saw state as collective enterprise. Any Sultan trying to act autocratic threatened their traditional rights.</p>
                </div>
                <div className="bg-amber-900 bg-opacity-40 p-4 rounded border-l-4 border-amber-500 mt-4">
                  <p className="font-bold text-amber-200">Why #5 (Root Truth):</p>
                  <p>Rise and fall were TWO SIDES OF THE SAME COIN. Collaborative tribal system that BUILT the empire (Bahlul) also DOOMED it when later Sultan (Ibrahim) tried to dismantle it, turning partners into rebels.</p>
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
                <div className="bg-linear-to-r from-gray-700 to-gray-600 p-4 rounded">
                  <p className="font-semibold text-gray-200 mb-2">🌙 The Weak President (Sayyid Dynasty)</p>
                  <p>After a big crash (Timur's invasion), Delhi was like a club with a weak president. He only controlled the clubhouse. Other regions ran themselves. The Sayyids were just caretakers.</p>
                </div>
                <div className="bg-linear-to-r from-amber-900 to-yellow-900 p-4 rounded">
                  <p className="font-semibold text-amber-200 mb-2">🛡️ The Popular Gang Leader (Bahlul Lodi)</p>
                  <p>An Afghan named Bahlul took over. His rule was like running a team where he was the captain, but all the star players had a real say. He made deals with them, shared the prize money (land and loot). They helped him beat other teams. This worked great and made the team big again.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-red-200 mb-2">🌟 The Stricter Boss (Sikandar Lodi)</p>
                  <p>Bahlul's son Sikandar was stricter. He wanted to be MORE of a boss than a captain. He moved the team's main clubhouse from Delhi to a new city, Agra, to keep closer watch on star players. He also loved books and poetry.</p>
                </div>
                <div className="bg-linear-to-r from-pink-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-pink-200 mb-2">💥 The Terrible Boss & The Invader (Ibrahim & Babur)</p>
                  <p>Sikandar's son Ibrahim was a TERRIBLE boss. He ordered star players around, insulted them, and tried to take their stuff. The players got furious. Two biggest players, Daulat Khan and Rana Sanga, sent a message to brilliant fighter Babur from the north: "Come beat up our boss, and we'll help you." Babur came with better guns and tactics. At Panipat in 1526, Ibrahim's team fell apart because half his players didn't want to help him. He LOST, and Babur started the Mughal Empire. The old Delhi team was finished forever.</p>
                </div>
              </div>
            )}
          </div>

          {/* Key Systems */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('systems')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">5️⃣ Key Concepts & Events</h2>
              <span className="text-2xl">{expandedSection === 'systems' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'systems' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-amber-900 bg-opacity-30 p-4 rounded border-l-4 border-amber-500">
                  <p className="font-bold text-amber-200">Primus inter Pares</p>
                  <p>"First among equals" - Afghan tribal system. Chief consulted other chiefs, shared power. NOT absolute monarchy. Built loyalty through respect and inclusion.</p>
                </div>
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-200">Capital Shift to Agra (1506)</p>
                  <p>Sikandar moved capital from Delhi to Agra. Strategic advantage: Better control of Gangetic plain, easier to monitor rebellious nobles, more centralized administration.</p>
                </div>
                <div className="bg-pink-900 bg-opacity-30 p-4 rounded border-l-4 border-pink-500">
                  <p className="font-bold text-pink-200">Daulat Khan Lodi's Rebellion</p>
                  <p>Governor of Lahore. Insulted by Ibrahim's arrogance. Rebelled and invited Babur to attack. Directly caused the First Battle of Panipat (1526).</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-bold text-purple-200">First Battle of Panipat (1526)</p>
                  <p>Babur vs Ibrahim Lodi. Babur had better artillery and cavalry tactics (*Tulughma*). Ibrahim's own nobles didn't support him. He was defeated and KILLED. Delhi Sultanate ENDED. Mughal Empire began.</p>
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
              <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - The Final Arc</h2>
              <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'synthesis' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-gray-700 to-gray-600 p-4 rounded">
                  <p className="font-bold text-gray-200 mb-2">Phase 1: BROKEN STATE</p>
                  <p>Sayyids = puppet rulers after Timur. Authority broken. Only control Delhi. Other regions independent. Sultanate at its lowest point.</p>
                </div>
                <div className="bg-linear-to-r from-amber-900 to-yellow-900 p-4 rounded">
                  <p className="font-bold text-amber-200 mb-2">Phase 2: REVIVAL THROUGH PARTNERSHIP</p>
                  <p>Bahlul uses Afghan tribal system (primus inter pares). Shares power with other chiefs. Builds empire through diplomacy & inclusion, not force. Creates strong but decentralized state.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-red-200 mb-2">Phase 3: CENTRALIZATION ATTEMPT</p>
                  <p>Sikandar tries to strengthen central control and reduce noble power. Moves capital to Agra for better oversight. Creates cultural patronage. But growing tension between Sultan and entrenched nobility.</p>
                </div>
                <div className="bg-linear-to-r from-pink-900 to-red-900 p-4 rounded">
                  <p className="font-bold text-pink-200 mb-2">Phase 4: DESTRUCTION OF THE PACT</p>
                  <p>Ibrahim violates tribal compact. Treats nobles as subjects, not partners. Mass rebellion. Nobles invite Babur. Panipat 1526 = Ibrahim killed, Delhi Sultanate ENDED. Mughal Empire begins.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-500 mt-4">
                  <p className="font-bold text-yellow-300">The Lesson:</p>
                  <p>The SAME system that BUILT the Lodi empire (tribal partnership) also DOOMED it when a later Sultan tried to DISMANTLE it. Rise and fall = two sides of same coin. The dynasty destroyed by the system that created it.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Contrast Bahlul's Method vs Prior Sultans</p>
                  <p className="mb-2">How did Bahlul Lodi's method of gaining and keeping power fundamentally differ from that of Alauddin Khilji or Balban?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: Bahlul = Consultative, tribal partnership (primus inter pares). Shared power and spoils with Afghan chiefs. Built empire through diplomacy. Alauddin/Balban = Centralized autocracy. Used force, price controls, strict control. Bahlul INCLUDED nobles as partners; earlier sultans treated them as subjects.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Ibrahim's Actions → Panipat Chain</p>
                  <p className="mb-2">Trace the direct chain of events: How did Ibrahim Lodi's treatment of his nobility lead to the First Battle of Panipat?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: Ibrahim treated nobles arrogantly, violated tribal compact. Daulat Khan Lodi rebelled (insulted). Rana Sanga rebelled. They invited Babur from Kabul to invade as a better alternative. Babur accepted. At Panipat 1526, nobles didn't support Ibrahim, so he lost and was killed. Sultanate ended.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Destroyed by Its Own System</p>
                  <p className="mb-2">The Lodi dynasty was "destroyed by the very system that created it." Explain this statement.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: Bahlul BUILT the empire using tribal partnership (primus inter pares). This created powerful, entrenched nobility who expected to be partners, not subjects. When Ibrahim tried to change the system to absolute autocracy, the nobles—who had been empowered by the old system—rebelled instead of obeying. The same decentralized system that gave Bahlul flexibility to expand and build also made nobles too strong to control when a later Sultan tried to rule absolutely.</p>
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
                  <span className="font-semibold text-gray-300">1414-1451</span>
                  <span>Sayyid Dynasty - Weak puppet rulers after Timur</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-amber-300">1451-1489</span>
                  <span>Bahlul Lodi - Founded Lodi dynasty through tribal consensus</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-red-300">1489-1517</span>
                  <span>Sikandar Lodi - Most capable, tried to centralize, moved capital to Agra</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-pink-300">1506</span>
                  <span>Agra founded by Sikandar as new capital</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-purple-300">1517-1526</span>
                  <span>Ibrahim Lodi - Violated tribal pact, mass rebellions</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-yellow-300">1526</span>
                  <span>First Battle of Panipat - Babur defeats & kills Ibrahim, Sultanate ENDS</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900 p-3 rounded">
                  <span className="font-semibold text-orange-300">1414-1526</span>
                  <span>Sayyid & Lodi era - 112 years, final chapter of Delhi Sultanate</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-amber-900 to-red-900 rounded-lg border border-amber-700">
          <p className="text-amber-200">
            <span className="font-bold">💡 Remember:</span> Sayyid = Broken. Bahlul = Revival through Partnership. Sikandar = Centralization. Ibrahim = Arrogance & Destruction. The system that built the empire (tribal equality) also doomed it when a Sultan tried to become an absolute autocrat. The Delhi Sultanate ended in 1526 when Ibrahim Lodi was killed at Panipat, inviting Mughal rule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SayyidLodistoryNotes;
