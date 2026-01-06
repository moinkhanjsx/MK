import React, { useState } from 'react';

const TurkishInvasionsNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">🏹 The Arrival of Islam and Turkish Invasions</h1>
          <p className="text-gray-400">Turkish Invasions (11th-12th Centuries) and the Establishment of Muslim Rule in North India</p>
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
                  <h3 className="font-semibold text-red-200 mb-2">🏹 Mahmud of Ghazni (c. 1000-1027): The Plunderer</h3>
                  <p>Phase of repeated, devastating raids (17 major raids over 27 years) for wealth, NOT territory. Exposed India's political and military vulnerabilities. Famous Somnath raid (1025). Pattern: hit, loot, retreat.</p>
                </div>
                <div className="bg-orange-900 p-4 rounded">
                  <h3 className="font-semibold text-orange-200 mb-2">⚔️ Muhammad Ghori (c. 1175-1206): The Conqueror</h3>
                  <p>Phase of sustained military campaigns aimed at PERMANENT CONQUEST. Battles of Tarain (1191 & 1192) against Prithviraj Chauhan = turning point. First: defeated. Second: won decisively with reorganized cavalry. Appointed slave-generals (Mamluks) as governors.</p>
                </div>
                <div className="bg-blue-900 p-4 rounded">
                  <h3 className="font-semibold text-blue-200 mb-2">📊 Causes of Turkish Success & Indian Defeat</h3>
                  <p>Turkish superiority: cavalry mobility, mounted archers, feigned retreat tactics. Indian weakness: chronic disunity (kingdoms fought each other), outdated armies (slow war elephants), defensive mindset. Divided kingdoms defeated one by one.</p>
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
                  <p className="font-semibold text-red-200 mb-2">Mahmud of Ghazni Core</p>
                  <p>SULTAN OF GHAZNAVID EMPIRE (Afghanistan). Launched 17 MAJOR RAIDS over 27 years. PRIMARY MOTIVE = SYSTEMATIC PLUNDER of temple wealth (gold, jewels). Pattern: HIT, LOOT, RETREAT. Did NOT aim to annex territory, only drain wealth. Somnath (1025) = most famous.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-200 mb-2">Muhammad Ghori Core</p>
                  <p>SULTAN OF GHURID EMPIRE. Goal = PERMANENT TERRITORIAL CONQUEST & EMPIRE-BUILDING in India. Battles of Tarain = definitive turning point. FIRST (1191) = defeated. SECOND (1192) = won with reorganized cavalry + superior tactics. Appointed SLAVE-GENERALS (Mamluks) as governors.</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-200 mb-2">Turkish Military Superiority Core</p>
                  <p>LIGHT CAVALRY & MOUNTED ARCHERS = mobility, speed, flexibility. FEIGNED RETREAT tactic = breaks enemy formations (used at Second Tarain). Turkish command structure = unified, coordinated. Single chain of command = tactical advantage.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Indian Weakness Core</p>
                  <p>CHRONIC DISUNITY = kingdoms fought each other, failed to unite. Viewed neighbors as RIVALS not ALLIES. OUTDATED ARMIES = slow war elephants + heavy infantry vulnerable to fast cavalry. DEFENSIVE MINDSET = set-piece battles to defend kingdoms, not strategic elimination of invader bases.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Political Disunity</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why did disunity lead to defeat?</p>
                  <p>Allowed invaders to fight and conquer kingdoms one by one using "divide and conquer" strategy.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why couldn't kingdoms unite against common enemy?</p>
                  <p>Primary political loyalty was to own clan/dynasty. Viewed neighboring kingdoms as RIVALS, not allies. No incentive to cooperate.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: Why was there no concept of "united India"?</p>
                  <p>Political ideology was SEGMENTARY. Authority was LOCAL and RITUAL (based on dharma & caste), not territorial and national. King's duty = protect own janapada (realm), not civilizational entity.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was root political mechanism?</p>
                  <p>ABSENCE OF CENTRALIZED IMPERIAL STRUCTURE after Gupta decline (c. 550 CE). For 500+ years, regionalism was norm. No administrative or military framework for collective defense.</p>
                </div>
                <div className="bg-red-900 bg-opacity-40 p-4 rounded border-l-4 border-red-500 mt-4">
                  <p className="font-bold text-red-200">Why #5 (Root Truth):</p>
                  <p>Indian subcontinent was GEOGRAPHICAL REGION, not POLITICAL UNIT. Invading Turks = unified political force with single chain of command. India = series of fragmented regional powers. This ASYMMETRY decided outcome. Organization beats fragmentation.</p>
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
                  <p className="font-semibold text-red-200 mb-2">🏠 The Neighborhood & First Robber</p>
                  <p>North India = big neighborhood with lots of separate, powerful families, each in own house. They don't get along, always arguing over fences/gardens. First robber named Mahmud from far town shows up. Doesn't want to move in; just wants to break into fancy living rooms (temples), steal gold & jewels, run back home. Does this 17 times. By the time one family gathers guards, he's already gone. Families never team up to guard neighborhood.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">🏹 The Serious Gang Leader</p>
                  <p>Later, more serious gang leader named Muhammad Ghori shows up. Doesn't just want jewelry; wants to take over houses themselves. First tries to take biggest house (Prithviraj Chauhan's) and gets beaten. But comes back next year with better plan: uses fast horses to trick guards and wins. Once takes main houses, leaves own trusted lieutenants in charge.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-pink-200 mb-2">❌ Why They Lost?</p>
                  <p>Families too busy with own fights to build common wall or neighborhood watch. Security was slow (like using elephants) while robbers had fast horses and could strike suddenly. Never chased robbers all way back to their own town to stop them for good. Disunity + outdated defense = defeat.</p>
                </div>
              </div>
            )}
          </div>

          {/* Mahmud's Raids */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('mahmud')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🏹 Mahmud of Ghazni - Details</h2>
              <span className="text-2xl">{expandedSection === 'mahmud' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'mahmud' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-300">Empire & Motivation</p>
                  <p><span className="font-semibold">Base:</span> Ghaznavid Empire in Afghanistan (modern Ghazni). <span className="font-semibold">Goal:</span> NOT conquest. Systematic plunder of temple wealth—gold, jewels, diamonds—to fund Central Asian empire and enhance personal prestige.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-bold text-orange-300">Scale & Pattern</p>
                  <p>17 MAJOR RAIDS over 27 years (c. 1000-1027). Each raid = hit temples, collect treasure, retreat before united resistance. Pattern exploited Indian disunity—by the time kingdoms mobilized defense, he was gone. Rinse and repeat.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-300">The Somnath Raid (1025)</p>
                  <p>Most famous raid. Temple of Somnath in Gujarat was extremely wealthy and sacred to Hindu pilgrims. Mahmud's army plundered it, destroyed the lingam (idol), transported immense wealth back to Ghazni. Became legendary symbol of Muslim invasions desecrating temples.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-300">Historical Impact</p>
                  <p>Raids exposed India's vulnerability + wealth. Demonstrated that fragmented kingdoms couldn't mount coordinated defense. Set precedent for later, more ambitious invasions by Muhammad Ghori. Indian states spent resources recovering from raids rather than preparing against future threats.</p>
                </div>
              </div>
            )}
          </div>

          {/* Muhammad Ghori */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('ghori')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">⚔️ Muhammad Ghori - Conquest Strategy</h2>
              <span className="text-2xl">{expandedSection === 'ghori' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'ghori' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Empire & Objective</p>
                  <p>Sultan of Ghurid Empire (Afghanistan). Unlike Mahmud, goal = PERMANENT TERRITORIAL CONQUEST. Aim to build an empire in India, not just raid for wealth. Administrative settlements in conquered lands.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">First Battle of Tarain (1191)</p>
                  <p>Fought Prithviraj Chauhan (Chauhan kingdom, strong Rajput power). Muhammad Ghori's cavalry was defeated. Ghori himself was wounded. Ghori retreated back to Afghanistan. Prithviraj won decisively. Seemed like Indian victory.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Second Battle of Tarain (1192) - TURNING POINT</p>
                  <p>Muhammad Ghori returned next year with REORGANIZED CAVALRY ARMY and NEW TACTICS. Key innovation: FEIGNED RETREAT. Used light cavalry to fake withdrawal, broke Prithviraj's formations. Decisive Turkish victory. Resulted in fall of Delhi and Ajmer. This victory = breakthrough moment.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Administrative Legacy</p>
                  <p>After victories, appointed his SLAVE-GENERALS (Mamluks) as GOVERNORS of conquered territories. Qutb-ud-din Aibak = most famous. These slave-generals laid administrative foundation for Delhi Sultanate. Loyalty to Ghori = direct chain of command = organized rule.</p>
                </div>
              </div>
            )}
          </div>

          {/* Military Comparison */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('military')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">⚔️ Turkish vs Indian Military</h2>
              <span className="text-2xl">{expandedSection === 'military' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'military' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-4 rounded border-l-4 border-cyan-500">
                  <p className="font-bold text-cyan-300">Turkish Advantages</p>
                  <p><span className="font-semibold">Cavalry:</span> Expert use of LIGHT CAVALRY & MOUNTED ARCHERS. Speed + flexibility = tactical mobility. Could strike quickly, maneuver unpredictably. <span className="font-semibold">Tactics:</span> FEIGNED RETREAT = deliberately fake retreat to break enemy formation, then turn and counterattack. Superior coordinated tactics from unified command.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-300">Indian Disadvantages</p>
                  <p><span className="font-semibold">Army Composition:</span> Over-reliance on SLOW WAR ELEPHANTS & HEAVY INFANTRY. Elephants impressive but vulnerable to fast cavalry attacks. Infantry too slow to respond. <span className="font-semibold">Tactics:</span> Defensive, SET-PIECE BATTLES focused on defending own kingdoms. Lacked strategic vision to eliminate invader bases in Afghanistan. Static defense vs. mobile offense = disadvantage.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-bold text-purple-300">The Asymmetry</p>
                  <p>Turkish forces = unified command, coordinated tactics, mobile strategy. Indian kingdoms = fragmented forces, disunited strategy, defensive posture. This asymmetry meant Turks could concentrate force at one point while Indians were scattered across borders defending multiple kingdoms.</p>
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
                  <p className="font-bold text-red-200 mb-2">How Phases Built</p>
                  <p>MAHMUD'S RAIDS = proof of concept. Demonstrated that India was vulnerable and wealthy. Exposed disunity. Set precedent. MUHAMMAD GHORI = capitalized on revealed weakness with permanent conquest strategy. CAUSES OF SUCCESS = explain why both phases possible, rooting in political & military realities.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-bold text-orange-200 mb-2">How Analogies Map</p>
                  <p>"Separate families" = independent Rajput & regional kingdoms. "Fast horses vs. slow elephants" = Turkish cavalry mobility vs. Indian static formations. "Leaving lieutenants in charge" = appointment of slave-generals (Mamluks) as governors. "Never chasing robbers home" = Indians didn't eliminate Turkish bases in Afghanistan.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-red-500 mt-4">
                  <p className="font-bold text-red-300">Complete Picture:</p>
                  <p>Robber from afar raided Indian temples many times for treasure, showing families couldn't stop him because never worked together. Gang leader came to take over homes for good. Lost first big fight but won second using faster horses and clever tricks. Families lost because always fighting each other, used slow guards like elephants, never teamed up to drive invaders away permanently. This allowed gang leader's friends to become new landlords, starting new rule of Delhi Sultanate.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Contrast in Objectives</p>
                  <p className="mb-2">What was fundamental difference in objective of Mahmud of Ghazni's invasions versus Muhammad Ghori's campaigns?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: MAHMUD = PLUNDER for wealth. Goal = steal temple treasure (gold, jewels) and retreat. Hit, loot, leave. No interest in governing or annexing territory. 17 raids over 27 years. MUHAMMAD GHORI = PERMANENT CONQUEST. Goal = take over kingdoms and establish empire in India. Appoint governors, administer territories, build lasting rule. Fundamentally different: Mahmud = extractive raids. Ghori = transformative conquest.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Tarain Turning Point</p>
                  <p className="mb-2">What NEW TACTIC did Muhammad Ghori successfully employ in Second Battle of Tarain (1192) that he had not used in First Battle (1191)?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: FEIGNED RETREAT. In the first battle, Ghori was defeated straight-up—his cavalry couldn't break Prithviraj's formations. In the second battle, Ghori developed new tactic: he deliberately staged a cavalry retreat, making Prithviraj think he was winning. As Prithviraj pursued the "retreating" cavalry, his tight formations broke apart. Then Ghori's cavalry turned and counterattacked the scattered Indian forces. This tactical innovation = key to breakthrough. Shows military adaptation and superior tactical thinking.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Synthesis - Two Causes of Defeat</p>
                  <p className="mb-2">Explain how BOTH "political disunity" and "military tactics" worked together to cause defeat of Indian kingdoms. Use one example for each.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: POLITICAL DISUNITY example: After Mahmud raided Somnath (1025), the other kingdoms didn't unite to chase him back to Afghanistan and eliminate his base. Each kingdom focused on its own defense. If they had coordinated a unified pursuit, they could have destroyed the Ghaznavid threat permanently. Instead, fragmentation allowed repeated raids. MILITARY TACTICS example: Second Tarain (1192). Prithviraj's heavy cavalry and war elephants in traditional formations were static and vulnerable. Ghori's LIGHT CAVALRY with FEIGNED RETREAT tactic deliberately broke these formations. Indian military doctrine (defensive, set-piece battles) couldn't counter Turkish tactical innovation (mobile, deceptive maneuvers). Disunity = no coordinated defense. Poor tactics = exploited by superior tactics.</p>
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
                  <p className="font-semibold text-red-300">Ghaznavid Empire</p>
                  <p>Empire centered in modern Afghanistan (Ghazni). Base for Mahmud's invasions. Turkish/Afghan dynasty that controlled trade routes. Source of Mahmud's power and wealth.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Ghurid Empire</p>
                  <p>Empire that succeeded Ghaznavids in Afghanistan. Base for Muhammad Ghori. Smaller but more ambitious in conquest. Muhammad Ghori transformed it from raid-based to conquest-based power.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Somnath Temple</p>
                  <p>Famous temple in Gujarat. Extremely wealthy and sacred to Hindus. Mahmud's most famous raid (1025). Plundered, idol destroyed. Symbol of temple destruction in invasions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Battles of Tarain</p>
                  <p>Two battles (1191 & 1192) between Muhammad Ghori and Prithviraj Chauhan. First = Ghori defeated. Second = Ghori won decisively. Second = turning point, enabled permanent Muslim conquest of North India. Established Delhi Sultanate.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Feigned Retreat</p>
                  <p>Tactical maneuver. Deliberately stage cavalry retreat to break enemy formations. Used successfully by Ghori at Second Tarain. Indian armies trained in traditional set-piece formations, unprepared for this deception.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Slave-Generals (Mamluks)</p>
                  <p>Military slaves appointed as governors by Muhammad Ghori. Qutb-ud-din Aibak = most famous. Established in India after Ghori's victories. Loyal to Ghori. Became founders of Delhi Sultanate after Ghori's death.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Janapada</p>
                  <p>Realm or territorial domain in Indian political tradition. King's duty = protect own janapada. Concept was local, not national. Contributed to lack of all-India unity against invaders.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-red-900 to-orange-900 rounded-lg border border-red-700">
          <p className="text-red-200">
            <span className="font-bold">💡 Remember:</span> Turkish invasions succeeded NOT because they were invincible, but because India was FRAGMENTED. Mahmud's raids showed that disunited kingdoms couldn't coordinate defense. Muhammad Ghori's permanent conquest was possible because Indian political tradition was local and segmentary, not national. Military advantage (cavalry vs. elephants) was real, but POLITICAL FRAGMENTATION was the fatal flaw. One organized force vs. multiple fragmented powers = asymmetrical outcome. The invasions exposed structural weaknesses in the Indian political system that had existed for 500+ years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TurkishInvasionsNotes;
