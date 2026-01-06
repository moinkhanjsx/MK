import React, { useState } from 'react';

const TripartiteStruggleNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">⚔️ The Tripartite Struggle & Regional Kingdoms</h1>
          <p className="text-gray-400">Political Landscape of Early Medieval India (c. 750-1200 CE)</p>
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
                  <h3 className="font-semibold text-red-200 mb-2">⚔️ The Tripartite Struggle (c. 750-950 CE)</h3>
                  <p>Core 200-year conflict between three major dynasties over control of Kannauj. Not a single war but series of sporadic campaigns and shifting alliances. Mutual weakening of all three created power vacuum for later Turkic invasions.</p>
                </div>
                <div className="bg-yellow-900 p-4 rounded">
                  <h3 className="font-semibold text-yellow-200 mb-2">👑 The Contending Dynasties</h3>
                  <p>Palas (Bengal), Pratiharas (West/North), Rashtrakutas (Deccan). Each had different strengths and contributions. Pala = naval power. Pratihara = cavalry defense. Rashtrakuta = central strategy + architecture.</p>
                </div>
                <div className="bg-blue-900 p-4 rounded">
                  <h3 className="font-semibold text-blue-200 mb-2">🏛️ The Chola Empire (850-1279 CE)</h3>
                  <p>Paramount South Indian power. Exceptional for organized bureaucracy, village self-government assemblies (Ur, Sabha, Nagaram), powerful navy, and peak Dravidian architecture (Brihadeeswara Temple).</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">🎨 Other Significant Regional Kingdoms</h3>
                  <p>Chandellas (Khajuraho temples), Paramaras (Bhojeshwar Temple, King Bhoja polymath), Solankis (Modhera Sun Temple, Dilwara Jain temples, trade control). Each region had unique culture & architecture.</p>
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
                  <p className="font-semibold text-red-200 mb-2">Tripartite Struggle Core</p>
                  <p>THREE-WAY CONTEST for Kannauj. NOT a single war but SERIES OF CAMPAIGNS over 200 years with shifting alliances. Resulted in MUTUAL WEAKENING of all three empires. Created power vacuum for Turkic invasions.</p>
                </div>
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-200 mb-2">Contending Dynasties Core</p>
                  <p>PALAS: Naval power + Buddhist patronage. PRATIHARAS: Cavalry strength + Hindu orthodoxy + defense against Arabs. RASHTRAKUTAS: Central location + strategic advantage + rock-cut architecture (Kailashnath, Ellora).</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-200 mb-2">Chola Empire Core</p>
                  <p>HIGHLY ORGANIZED BUREAUCRACY with DECENTRALIZED local self-government (Ur, Sabha, Nagaram assemblies = unique feature). POWERFUL NAVY with Indian Ocean expeditions. Peak Dravidian architecture. Tamil literature patronage.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Regional Kingdoms Core</p>
                  <p>CHANDELLAS = Khajuraho temples with erotic sculptures. PARAMARAS = King Bhoja (polymath), learning patronage. SOLANKIS = Maru-Gurjara style architecture, control of western trade ports. Each region flourished independently.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Why Kannauj Mattered</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why was Kannauj so important?</p>
                  <p>Former capital of Harshavardhana's powerful 7th century empire. Symbolized legitimate sovereignty over North India.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why did a symbolic capital confer legitimacy?</p>
                  <p>In early medieval Indian tradition, controlling a previous paramount power's capital = claim to being universal ruler (Chakravartin). Political tradition, not just military strategy.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What practical advantage did Kannauj offer?</p>
                  <p>Located in fertile Ganga-Yamuna Doab (economic heartland of North India). Guaranteed massive revenue and control of trade routes.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was the root geopolitical mechanism?</p>
                  <p>BALANCE-OF-POWER CONFLICT. No single empire strong enough to eliminate other two and hold Kannauj permanently. Led to cyclical, draining stalemate—mutual exhaustion.</p>
                </div>
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded border-l-4 border-blue-500 mt-4">
                  <p className="font-bold text-blue-200">Why #5 (Root Truth):</p>
                  <p>Struggle was for POLITICAL LEGITIMACY and ECONOMIC SUPREMACY, not just territory. Its indecisive end proved MILITARY MIGHT ALONE could not unify India during this period. Led to REGIONALISM as defining political system.</p>
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
                  <p className="font-semibold text-red-200 mb-2">🎪 The Playground Drama</p>
                  <p>Three big kids—East (Pala), West (Pratihara), South (Rashtrakuta)—all want control of the coolest treehouse called Kannauj. It's the biggest, has best view, everyone respects whoever owns it. For 200 years they fight, push each other out, team up, fight again. They spend so much energy they all get tired, none becomes the undisputed boss.</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-cyan-900 p-4 rounded">
                  <p className="font-semibold text-blue-200 mb-2">🏛️ The Super-Organized Southern Kid</p>
                  <p>Meanwhile down south, a completely different kid named Chola doesn't care about the northern treehouse. He builds his own amazing clubhouse (Brihadeeswara Temple) with really fair rules. He lets each neighborhood in his area run their own affairs. He's a great sailor, builds huge fleet, becomes friends (sometimes bully) with kids across ocean, trades toys and ideas.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-purple-200 mb-2">🎨 Other Local Champions</p>
                  <p>In other parts of playground, other kids are also doing great things. Chandellas building treehouses with incredibly cool detailed carvings (Khajuraho). Solankis building beautiful sundials and marble temples. Paramaras have a king who's genius at everything. It's time of lots of local champions, not one big boss.</p>
                </div>
              </div>
            )}
          </div>

          {/* Key Dynasties */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('dynasties')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">5️⃣ The Three Dynasties in Detail</h2>
              <span className="text-2xl">{expandedSection === 'dynasties' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'dynasties' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-bold text-blue-300">Pala Empire (Bengal & Bihar)</p>
                  <p><span className="font-semibold">Core:</span> Eastern regions. <span className="font-semibold">Strength:</span> Naval power controlling Bay of Bengal trade routes (lucrative). <span className="font-semibold">Contribution:</span> Major patrons of Mahayana Buddhism. Built Nalanda University and Vikramashila—centers of Buddhist learning attracting scholars from across Asia.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-300">Pratihara Empire (Western & North India)</p>
                  <p><span className="font-semibold">Core:</span> Often controlled Kannauj (the prize). <span className="font-semibold">Strength:</span> Cavalry-based "firepower" and positioned as main defense against Arab invasions from Sindh. <span className="font-semibold">Contribution:</span> Patrons of architecture and Hindu orthodoxy. Champions of "Hindu" identity against Islamic expansion.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-300">Rashtrakuta Empire (Deccan)</p>
                  <p><span className="font-semibold">Core:</span> Southernmost contender. <span className="font-semibold">Strength:</span> Strategic central location allowing attacks on BOTH northern rivals simultaneously. <span className="font-semibold">Contribution:</span> World-class rock-cut architecture—Kailashnath Temple at Ellora, carved from single rock, is masterpiece of Dravidian architecture.</p>
                </div>
              </div>
            )}
          </div>

          {/* Chola Administration */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('chola')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🏛️ Chola Empire - Organization & Culture</h2>
              <span className="text-2xl">{expandedSection === 'chola' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'chola' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Administration & Self-Government</p>
                  <p>HIGHLY ORGANIZED & DECENTRALIZED system. <span className="font-bold">Ur</span> = general village assembly. <span className="font-bold">Sabha</span> = brahmin village assembly. <span className="font-bold">Nagaram</span> = merchant town assembly. Local self-government was UNIQUE FEATURE of Chola system.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Military & Maritime Power</p>
                  <p>Maintained POWERFUL NAVY launching expeditions to Sri Lanka, Maldives, Southeast Asia (Srivijaya). Protected Indian Ocean trade. Expanded Chola influence across entire maritime network. Naval dominance = economic advantage.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Cultural & Architectural Peak</p>
                  <p><span className="font-bold">Brihadeeswara Temple at Thanjavur</span> (built by Rajendra I) = peak of Dravidian temple architecture. Stone structure 216 feet tall, magnificently carved. Patrons of Tamil literature and bronze sculpture. Cultural flourishing.</p>
                </div>
              </div>
            )}
          </div>

          {/* Other Kingdoms */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('others')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🎨 Other Regional Kingdoms</h2>
              <span className="text-2xl">{expandedSection === 'others' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'others' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Chandellas (Bundelkhand)</p>
                  <p>Builders of <span className="font-bold">Khajuraho Temples</span> (11th century). Famous for <span className="font-bold">Nagara-style architecture</span> and intricate <span className="font-bold">erotic sculptures</span> (unique in Hindu temple tradition). Represent regional artistic achievement.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Paramaras (Malwa)</p>
                  <p>Patrons of learning and art. King <span className="font-bold">Bhoja</span> (11th century) was legendary polymath—scholar, poet, architect. Built <span className="font-bold">Bhojeshwar Temple</span>. Represented intellectual and artistic patronage.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Solankis (Gujarat)</p>
                  <p>Master builders in <span className="font-bold">Maru-Gurjara style</span> architecture. Built <span className="font-bold">Sun Temple at Modhera</span> and <span className="font-bold">Jain Temples at Mount Abu (Dilwara)</span>. Controlled key western trade ports, managing profitable commerce.</p>
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
              <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - The Big Picture</h2>
              <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'synthesis' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-red-200 mb-2">How the Chunks Connect</p>
                  <p>TRIPARTITE STRUGGLE = defining North Indian conflict. THREE CONTENDING DYNASTIES = its actors. CHOLA = parallel, independent southern rise unaffected by northern stalemate. OTHER KINGDOMS = evidence that no-hegemon era allowed diverse regional cultures, economies, architecture to flourish.</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-cyan-900 p-4 rounded">
                  <p className="font-bold text-blue-200 mb-2">How Analogies Map to Reality</p>
                  <p>"Coolest treehouse" = Kannauj. "Super-organized kid with ships" = Chola naval + administrative power. "Letting neighborhoods run themselves" = Ur, Sabha, Nagaram assemblies. "Treehouses with carvings" = Nagara-style temples like Khajuraho.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-500 mt-4">
                  <p className="font-bold text-yellow-300">Complete Picture:</p>
                  <p>Three empires in north spent centuries fighting over most important city, Kannauj, which tired them all out. While they fought, super-organized empire in south (Cholas) became powerful through navy, self-governance, temples. All across India, other regional kingdoms thrived during this time, each building unique monuments. It was era of many local champions instead of one ruler.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Connection Between Struggle & Regional Flourishing</p>
                  <p className="mb-2">How did the Tripartite Struggle ultimately create conditions for Regional Kingdoms like Chandellas and Paramaras to flourish?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: The Tripartite Struggle EXHAUSTED all three major dynasties in north through endless campaigns and shifting alliances. This exhaustion created a POWER VACUUM—no single force could dominate. Regional kingdoms like Chandellas and Paramaras were able to BUILD THEIR OWN POWER without competing with overwhelming northern empire. The political fragmentation ENABLED regionalism and local cultural flourishing.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Different Kinds of Power—Chola vs Pratihara</p>
                  <p className="mb-2">Chola and Pratihara represent different kinds of strength. Compare them: one was organizational/naval, the other was military/defensive. What were they specifically?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: PRATIHARA: Strength was CAVALRY-BASED "firepower" and defensive role as bulwark against Arab invasions from Sindh. Military-focused. CHOLA: Strength was ORGANIZED BUREAUCRACY (Ur/Sabha/Nagaram assemblies) and POWERFUL NAVY protecting Indian Ocean trade. Administrative and maritime-focused. Pratihara = military dominance. Chola = organizational/commercial advantage.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Chola Village Administration & Merchant Trade</p>
                  <p className="mb-2">If you were a merchant in a Chola-era brahmin village, which assembly would handle village affairs, and what major advantage did Chola system provide for your trade?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: ASSEMBLY: In a brahmin village (agrahara), the <span className="font-bold">SABHA</span> (brahmin assembly) handled affairs. For merchant towns, the <span className="font-bold">NAGARAM</span> assembly did. ADVANTAGE: Chola's DECENTRALIZED self-government meant local merchants had SAY in local rules. The POWERFUL NAVY provided security for trade routes & protected merchant ships in Indian Ocean. This = both local autonomy + maritime security for commerce.</p>
                </div>
              </div>
            )}
          </div>

          {/* Key Terms */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('terms')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">📚 Key Terms & Concepts</h2>
              <span className="text-2xl">{expandedSection === 'terms' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'terms' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-2 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Kannauj</p>
                  <p>Former capital of Harshavardhana's empire. Symbolized sovereignty over North India. Prize of Tripartite Struggle. Located in fertile Ganga-Yamuna Doab.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Chakravartin</p>
                  <p>Universal ruler in Indian political tradition. Controlling capital of previous paramount power = claim to Chakravartin status. Central to legitimacy concept.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Ur, Sabha, Nagaram</p>
                  <p>Chola village assemblies. Ur = general village. Sabha = brahmin village. Nagaram = merchant town. Represented local self-government (unique to Chola).</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Brihadeeswara Temple</p>
                  <p>Built by Rajendra I. Peak of Dravidian temple architecture. 216 feet tall. Located in Thanjavur. Exemplifies Chola cultural achievement.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Nagara & Maru-Gurjara Architecture</p>
                  <p>Nagara = northern temple style used by Chandellas (Khajuraho). Maru-Gurjara = style of Solankis (Modhera, Dilwara temples).</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Nalanda & Vikramashila</p>
                  <p>Major centers of Buddhist learning founded by Palas. Nalanda = most famous ancient university, attracting scholars from across Asia. Vikramashila = contemporary Buddhist center.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-amber-900 to-orange-900 rounded-lg border border-amber-700">
          <p className="text-amber-200">
            <span className="font-bold">💡 Remember:</span> Early Medieval India was defined by FRAGMENTATION, not unity. The Tripartite Struggle exhausted the major powers, allowing regional kingdoms to flourish independently. It was an era of local champions, each building magnificent monuments and developing unique cultures. The Cholas in particular showed how ORGANIZATION and NAVAL POWER could create prosperity without needing to control the symbolic capital of Kannauj. Regionalism wasn't weakness—it was the defining political reality that enabled cultural diversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripartiteStruggleNotes;
