import React, { useState } from 'react';

const MughalFoundersNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">👑 The Founders of the Mughal Empire: Babur & Humayun</h1>
          <p className="text-gray-400">Foundation and Fragile Consolidation (1526-1556)</p>
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
                  <h3 className="font-semibold text-red-200 mb-2">⚔️ Babur (1526-1530): The Founder's Gambit</h3>
                  <p>Chagatai Turkic prince from Ferghana (Central Asia). Two decisive victories establish empire: Panipat (1526) using Ottoman artillery/cavalry tactics, Khanwa (1527) defeating Rana Sanga of Mewar. Authored *Tuzuk-i-Baburi* (Baburnama)—frank autobiography in Turkish. Founder through military innovation.</p>
                </div>
                <div className="bg-orange-900 p-4 rounded">
                  <h3 className="font-semibold text-orange-200 mb-2">😔 Humayun (1530-1556): The Heir's Struggle</h3>
                  <p>Inherited militarily secure but administratively fragile empire. Struggled with Sher Shah Suri (brilliant Afghan administrator). Defeated at Chausa (1539) and Kannauj (1540), lost all territory. 15-year exile in Persia. Returned 1555 with Safavid help, recaptured Delhi but died shortly after. Preserver through exile and recovery.</p>
                </div>
                <div className="bg-yellow-900 p-4 rounded">
                  <h3 className="font-semibold text-yellow-200 mb-2">📊 Causes of Success & Failure</h3>
                  <p>Babur's success: superior military technology (cannon, matchlocks), effective tactics, fighting disunified rivals. Humayun's failure: poor administration, lack of governance focus, overconfidence, facing singularly capable opponent (Sher Shah Suri). Humayun's legacy: recovery kept Mughal claim alive, Persian connections influenced later culture.</p>
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
                  <p className="font-semibold text-red-200 mb-2">Babur Core</p>
                  <p>CHAGATAI TURKIC PRINCE from Ferghana (Central Asia), driven from homeland. Founded empire on TWO DECISIVE VICTORIES. PANIPAT (1526) = Ottoman-style artillery + cavalry tactics (*Tulughma*) defeated larger Lodi army. KHANWA (1527) = defeated Rana Sanga of Mewar, crushed powerful Rajput confederacy. Wrote TUZUK-I-BABURI (Baburnama)—frank autobiography in Turkish, unparalleled historical insight.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-200 mb-2">Humayun Core</p>
                  <p>INHERITED EMPIRE militarily secure but administratively fragile. Faced SHER SHAH SURI, brilliant Afghan administrator & strategist. DEFEATS at Chausa (1539) and Kannauj (1540). LOST ALL TERRITORY, fled to Persia. 15-YEAR EXILE. RETURNED 1555 with Safavid Persian help. Recaptured Delhi but died shortly after. Real achievement = RECOVERY, not rule. Kept Mughal claim alive for son Akbar.</p>
                </div>
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-200 mb-2">Success & Failure Causes Core</p>
                  <p>BABUR SUCCESS = superior military technology/tactics (cannon, matchlocks, mobile cavalry) + effective terrain use + fighting disunified Indian rivals. HUMAYUN FAILURE = poor administration + lack of governance focus + overconfidence + singularly capable opponent (Sher Shah Suri built robust, popular state). HUMAYUN LEGACY = recovery preserved dynasty, Persian connections influenced later Mughal culture & politics.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Panipat Victory</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why could smaller army win?</p>
                  <p>Because of superior battlefield tactics and technology.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: What specific tactical advantage?</p>
                  <p>Used DEFENSIVE, FORTIFIED center with CANNONS CHAINED TOGETHER (Ottoman Rumi method) + fast cavalry wings to envelope enemy.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: Why vulnerable to these tactics?</p>
                  <p>Indian armies relied on FRONTAL CHARGES by massed ELEPHANTS & INFANTRY, which were DECIMATED by cannon fire and unable to respond to flanking maneuvers.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was root of military mismatch?</p>
                  <p>DIVERGENT MILITARY EVOLUTION. Babur brought latest EARLY MODERN GUNPOWDER WARFARE from Central Asian-Persian theater. Lodi army still optimized for LATE MEDIEVAL INDIAN WARFARE.</p>
                </div>
                <div className="bg-red-900 bg-opacity-40 p-4 rounded border-l-4 border-red-500 mt-4">
                  <p className="font-bold text-red-200">Why #5 (Root Truth):</p>
                  <p>Panipat = CLASH OF MILITARY SYSTEMS, not just armies. Babur's victory marked INTRODUCTION OF EARLY MODERN WARFARE into Indian subcontinent. Technological & tactical shift that would define empire-building for centuries. Old Indian warfare vs. new gunpowder warfare.</p>
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
                  <p className="font-semibold text-red-200 mb-2">👑 Babur: The Mountain Prince</p>
                  <p>Tough, smart prince from mountains keeps losing his own kingdom. So he looks at India and thinks, "I'll try my luck there." Shows up with secret weapons: big metal guns on wheels and super-well-trained horse riders. At first big fight (Panipat), he digs trench, chains guns together, lets huge enemy army charge at him. They get blasted by guns, then his fast horses attack from sides. He wins.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">🏆 Two Great Victories</p>
                  <p>Next, he beats most famous warrior-king of time (Rana Sanga) in another huge battle (Khanwa). Now he's the boss. He also loves writing and keeps super-honest diary about wins, losses, gardens, even how much he misses his homeland. Writes it all down in *Baburnama*—tells the real story.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-pink-200 mb-2">😔 Humayun: The Unlucky Son</p>
                  <p>His son, Humayun, is nice guy but not tough or focused. Loves studying stars more than running country. Super-efficient smart former enemy named Sher Shah Suri kicks him out of India completely. Humayun runs away, lives as guest in foreign kingdom for 15 years. Never gives up. With help from hosts, sneaks back, takes Delhi just year before he dies.</p>
                </div>
                <div className="bg-linear-to-r from-pink-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-pink-200 mb-2">🔄 Legacy & Continuation</p>
                  <p>Real job of Humayun = not let family's claim disappear, so his amazing son Akbar could get second chance to build empire. Father = great fighter who started everything. Son = unlucky one who almost lost it but kept dream alive for next generation. Together they lay foundation for Akbar's greatness.</p>
                </div>
              </div>
            )}
          </div>

          {/* Babur Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('babur')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">👑 Babur (1526-1530) - The Founder</h2>
              <span className="text-2xl">{expandedSection === 'babur' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'babur' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Origins & Ambition</p>
                  <p><span className="font-bold">Born:</span> 1483 in Ferghana (Central Asia). <span className="font-bold">Heritage:</span> Chagatai Turk, descendant of Timur. <span className="font-bold">Early struggle:</span> Lost homeland to Uzbeks. Wandered Central Asia for years. <span className="font-bold">Vision:</span> Turned eyes toward wealthy, politically fragmented India as path to empire.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Battle of Panipat (1526) - Founding Victory</p>
                  <p><span className="font-bold">Opponent:</span> Ibrahim Lodi (Delhi Sultan). <span className="font-bold">Babur's forces:</span> ~12,000 men. <span className="font-bold">Lodi forces:</span> ~100,000 men (mostly infantry & elephants). <span className="font-bold">Tactic:</span> Chained cannon together, created defensive line, used mobile cavalry for flanking. <span className="font-bold">Result:</span> Decisive victory. Established Mughal rule in Delhi.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Battle of Khanwa (1527) - Securing Empire</p>
                  <p><span className="font-bold">Opponent:</span> Rana Sanga of Mewar, powerful Rajput king + Rajput confederacy. <span className="font-bold">Significance:</span> More dangerous than Lodi—unified powerful Hindu kingdoms. <span className="font-bold">Result:</span> Babur defeated Rana Sanga decisively. Prevented united Indian resistance to Mughal rule. Secured North India for Mughals.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Legacy & Baburnama</p>
                  <p><span className="font-bold">Personality:</span> Intelligent, cultured, military genius, lived only 47 years. <span className="font-bold">Baburnama:</span> Personal autobiography in Turkish (written for his son). Describes battles, personal life, gardens, philosophy, losses, loves. <span className="font-bold">Historical value:</span> Most authentic primary source on early Mughal period. Reveals Babur's character—honest, reflective, not just a conqueror.</p>
                </div>
              </div>
            )}
          </div>

          {/* Humayun Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('humayun')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">😔 Humayun (1530-1556) - The Heir's Struggle</h2>
              <span className="text-2xl">{expandedSection === 'humayun' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'humayun' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Inheritance & Character</p>
                  <p><span className="font-bold">Inherited:</span> Military secure but administratively fragile empire. <span className="font-bold">Character:</span> Unlike father Babur, Humayun was more interested in astronomy, philosophy, wine, books than governance. <span className="font-bold">Problem:</span> Lacked father's focus, discipline, and military brilliance. Empire needed strong administrator—he wasn't one.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Sher Shah Suri - The Rival</p>
                  <p><span className="font-bold">Who:</span> Afghan military commander, brilliant administrator, built robust state. <span className="font-bold">Strategy:</span> Reorganized army, collected taxes efficiently, won people's loyalty through good governance. <span className="font-bold">Threat:</span> More effective than Humayun. Used administrative superiority + military prowess to defeat Humayun.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">The Defeats & Exile</p>
                  <p><span className="font-bold">Chausa (1539):</span> Humayun defeated, army scattered. <span className="font-bold">Kannauj (1540):</span> Final defeat. Lost all Indian territory. <span className="font-bold">Exile:</span> Fled to Persia. Lived as guest at Safavid Persian court for 15 years (1540-1555). Seemed like empire was lost forever.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Return & Brief Glory</p>
                  <p><span className="font-bold">Safavid support:</span> Persian king provided army to help Humayun. <span className="font-bold">Return (1555):</span> Retook Punjab and Delhi. Reclaimed throne. <span className="font-bold">Brief reign:</span> Only ruled for ~6 months. Died in 1556 falling from steps (accident/illness). <span className="font-bold">Real achievement:</span> Kept Mughal dynasty alive for son Akbar, preventing complete extinction.</p>
                </div>
              </div>
            )}
          </div>

          {/* Military Innovation */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('military')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">⚙️ Military Innovation & Gunpowder Warfare</h2>
              <span className="text-2xl">{expandedSection === 'military' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'military' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Babur's Technological Advantage</p>
                  <p><span className="font-bold">Cannons:</span> Ottoman-style artillery, mounted on wheels, mobile. <span className="font-bold">Matchlocks:</span> Early firearms for infantry. <span className="font-bold">Cavalry tactics:</span> Light, mobile cavalry for rapid deployment. <span className="font-bold">Formation:</span> Defensive fortified center with offensive flanks (*Tulughma*). All innovations from Central Asian & Ottoman warfare.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Indian Medieval Warfare</p>
                  <p><span className="font-bold">War elephants:</span> Primary force, impressive but vulnerable to cannon. <span className="font-bold">Heavy infantry:</span> Foot soldiers in tight formations. <span className="font-bold">Strategy:</span> Frontal, direct charge. <span className="font-bold">Weakness:</span> Static, unable to adapt to mobile, multi-directional attacks. Optimized for medieval battlefield, not early modern.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Why Panipat Mattered</p>
                  <p><span className="font-bold">Turning point:</span> Demonstrated that medieval Indian military system was OUTDATED against gunpowder warfare. <span className="font-bold">Impact:</span> All future Indian empires had to adopt gunpowder technology. <span className="font-bold">Legacy:</span> Introduction of early modern warfare into subcontinent. Changed military evolution of India for next 300 years.</p>
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
              <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - How It Connected</h2>
              <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'synthesis' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-red-200 mb-2">Babur = Military Founder</p>
                  <p>Uses INNOVATION to conquer. Brings gunpowder warfare to India. Defeats larger armies through superior tactics + technology. Establishes empire militarily, but leaves administrative groundwork incomplete. Military genius, but not administrator.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-yellow-900 p-4 rounded">
                  <p className="font-bold text-orange-200 mb-2">Humayun = Transitional Figure</p>
                  <p>Inherits militarily secure empire but without strong administrative base. Lacks father's genius. Sher Shah Suri, brilliant administrator, exploits this weakness. Humayun loses empire but refuses to let dynasty die. 15-year exile, then return kept Mughal claim alive.</p>
                </div>
                <div className="bg-linear-to-r from-yellow-900 to-red-900 p-4 rounded">
                  <p className="font-bold text-yellow-200 mb-2">Connection: Strength & Weakness</p>
                  <p>Babur's MILITARY GENIUS created empire quickly. But military conquest ≠ empire building. Need administration (like Sher Shah showed). Humayun couldn't provide it. His exile seemed like failure, but his RETURN kept dynasty alive for son Akbar, who had BOTH military skill AND administrative genius.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-red-500 mt-4">
                  <p className="font-bold text-red-300">Complete Picture:</p>
                  <p>Prince from mountains uses new guns & clever plans to win two huge fights, becomes ruler of Delhi. Writes honest diary about life. Nice son inherits but loses everything to brilliant enemy. Son lives abroad 15 years but fights way back just in time to pass kingdom to his own son. Father = great fighter who started everything. Son = unlucky one who almost lost it but kept dream alive. Together = foundation for Akbar's greatness.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Babur vs Humayun Legacy</p>
                  <p className="mb-2">What was PRIMARY DIFFERENCE in Babur's and Humayun's legacies? One = founding, other = preserving. What did each actually achieve?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: BABUR = FOUNDER through military conquest. Achieved: Defeated Ibrahim Lodi (Panipat 1526), defeated Rana Sanga (Khanwa 1527), established Mughal rule in Delhi, introduced gunpowder warfare. Legacy = EMPIRE CREATED. BUT: Poor administration left empire vulnerable. HUMAYUN = PRESERVER through exile & recovery. Achieved: Lost empire to Sher Shah Suri, fled to Persia for 15 years, returned to recapture Delhi in 1555. Legacy = DYNASTY SURVIVED. His return wasn't conquering new lands—it was PREVENTING EXTINCTION of family's claim. Without Humayun's return, Mughal dynasty might have been forgotten. He kept it alive for Akbar.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Khanwa More Significant Than Panipat?</p>
                  <p className="mb-2">Why is Battle of Khanwa (1527) considered even MORE significant for Mughal survival than First Battle of Panipat? (Hint: Consider nature of defeated foe)</p>
                  <p className="text-gray-400 text-sm">💡 Answer: PANIPAT (1526) = defeated Ibrahim Lodi, a single sultan with disorganized state. Victory was important militarily but Lodi was just one ruler. KHANWA (1527) = defeated Rana Sanga of Mewar + RAJPUT CONFEDERACY. This was UNIFIED, organized resistance from multiple powerful kingdoms joined together. If Rana Sanga had won, he could have united entire Hindu India AGAINST Mughal rule. Khanwa prevented THIS united resistance. Panipat won the capital; Khanwa secured empire's survival by preventing unified Indian opposition. Khanwa = defeat of organized collective resistance. Without Khanwa victory, Mughals would have faced continuous, unified rebellion from every region.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Persia Connection & Long-term Impact</p>
                  <p className="mb-2">How did Humayun's long exile in Persia INDIRECTLY contribute to future of Mughal Empire beyond just his return? (Think: cultural, political, strategic influences)</p>
                  <p className="text-gray-400 text-sm">💡 Answer: CULTURAL: Humayun adopted Persian court culture, art, literature during 15-year exile. When he returned, brought Persian ideas back. Later Mughals, especially Akbar, heavily influenced by this Persian heritage. Persian became court language, art became Indo-Persian fusion. POLITICAL: Gained alliance with Safavid Persian empire through marriage & support. This Persian connection became lasting diplomatic advantage for Mughals. STRATEGIC: Learned Persian administrative systems during exile. Brought these ideas back. Influenced Mughal governance structure. In long term, Persia became cultural partner not enemy—influenced Mughal civilization, language, aesthetics for 300 years. Without Humayun's exile & Persian connection, Mughal Empire might have remained purely Central Asian/Turkish. Persian connection made it Indo-Persian civilization—the hallmark of classical Mughal culture.</p>
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
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Chagatai Turk</p>
                  <p>Central Asian Turkic people. Descendants of Chagatai Khan (grandson of Genghis Khan). Babur was Chagatai Turk from Ferghana. Heritage crucial to understanding Babur's military culture & ambitions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Tulughma</p>
                  <p>Central Asian cavalry tactic. Mobile, flexible cavalry formations used for flanking & surrounding enemy. Babur used this combined with Ottoman cannon tactics at Panipat. Proven effective against static Indian formations.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Tuzuk-i-Baburi (Baburnama)</p>
                  <p>Autobiography of Babur written in Turkish. Personal memoir describing battles, life, gardens, philosophy. Most authentic primary source on early Mughal period. Shows Babur's character—military genius but also reflective, honest, cultured.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Battle of Panipat (1526)</p>
                  <p>First great battle of Mughal Empire. Babur (12,000 men) defeated Ibrahim Lodi (100,000). Established Mughal rule in Delhi. Introduced gunpowder warfare to India. Turning point in Indian history.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Battle of Khanwa (1527)</p>
                  <p>Second great victory. Babur defeated Rana Sanga of Mewar + Rajput confederacy. Prevented unified Indian resistance to Mughal rule. Secured North India for Mughals. More significant for survival than Panipat.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Sher Shah Suri</p>
                  <p>Afghan military commander & administrator. Defeated Humayun, drove him into exile. Built robust, popular state through efficient governance & administration. Showed that administration = important as military conquest for empire.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-400">
                  <p className="font-semibold text-red-200">Safavid Persia</p>
                  <p>Persian empire. Provided refuge to Humayun during exile (1540-1555). Supported Humayun's return to India. Connection became lasting diplomatic advantage. Persian culture profoundly influenced Mughal civilization.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-red-900 to-pink-900 rounded-lg border border-red-700">
          <p className="text-red-200">
            <span className="font-bold">💡 Remember:</span> Babur was a MILITARY GENIUS who conquered India using superior gunpowder warfare technology and tactics. But MILITARY CONQUEST ≠ EMPIRE BUILDING. He created the empire quickly but left it administratively fragile. Sher Shah Suri exploited this weakness. Humayun seemed like a failure—lost everything, went into exile. But his REAL ACHIEVEMENT was KEEPING THE MUGHAL CLAIM ALIVE during 15 years in Persia. His return in 1555 wasn't about conquering more; it was about PREVENTING DYNASTY EXTINCTION. This allowed his son Akbar to inherit not just a name, but a living dynasty. Akbar, with BOTH military brilliance AND administrative genius, would build the Mughal Empire into classical civilization. Babur = founder through military innovation. Humayun = preserver through resilience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MughalFoundersNotes;
