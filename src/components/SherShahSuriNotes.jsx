import React, { useState } from 'react';

const SherShahSuriNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">⚙️ Sher Shah Suri (1540-1545) – The Great Administrator</h1>
          <p className="text-gray-400">The Sur Interregnum & Administrative Genius (5-Year Masterclass in Statecraft)</p>
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
                <div className="bg-yellow-900 p-4 rounded">
                  <h3 className="font-semibold text-yellow-200 mb-2">💰 Land Revenue Reforms (Patta System)</h3>
                  <p>Core economic reform making taxation systematic, predictable, less oppressive. Direct state-peasant relationship eliminating middlemen. Actual land measurement (Zabt). Fair cash tax. Patta (title deed) & Qabuliyat (agreement) provided security & clarity.</p>
                </div>
                <div className="bg-orange-900 p-4 rounded">
                  <h3 className="font-semibold text-orange-200 mb-2">🏛️ Administrative & Territorial Reorganization</h3>
                  <p>Framework for efficient empire governance. Hierarchical structure: Sarkar (District) → Pargana (Sub-District) → Village. Officers at each level (Shiqdar, Munsif, Amin, Fotadar). Standardized bureaucratic chain of command. Enhanced control & accountability.</p>
                </div>
                <div className="bg-red-900 p-4 rounded">
                  <h3 className="font-semibold text-red-200 mb-2">🛣️ Infrastructure, Economy & Currency</h3>
                  <p>Grand Trunk Road (Sadak-i-Azam): Sonargaon (Bengal) to Peshawar with sarais & trees. Standardized high-purity silver Rupiya & copper Dam. Replaced debased coins. Stabilized trade & revenue. Sarais as marketplaces & postal stations. Secure trade network.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">📚 Legacy & Historical Impact</h3>
                  <p>Akbar adopted & refined systems to build Mughal foundation. Proved good governance wins popular legitimacy. 5-year masterclass in centralized medieval administration. Systems were so effective they became blueprint for future empires. Non-dynastic ruler with lasting impact.</p>
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
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-200 mb-2">Land Revenue Core</p>
                  <p>DIRECT STATE-PEASANT relationship (Raiyotwari principle). ELIMINATED oppressive middlemen. ACTUAL LAND MEASUREMENT (Zabt) assessed average produce over multiple years. FAIR CASH TAX based on actual capacity. PATTA = title deed (peasant's land & tax). QABULIYAT = peasant's agreement deed. PROVIDED SECURITY & CLARITY to both parties. Reduced arbitrary demands.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-200 mb-2">Administration Core</p>
                  <p>HIERARCHICAL UNITS: Sarkar (District) → Pargana (Sub-District) → Village. SARKAR = Shiqdar-i-Shiqdaran (Military) + Munsif-i-Munsifan (Civil/Judicial). PARGANA = Shiqdar (Military) + Amin (Land Revenue) + Fotadar (Treasurer). STANDARDIZED BUREAUCRATIC CHAIN creates control & accountability. Clear reporting structure. Efficient coordination.</p>
                </div>
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-200 mb-2">Infrastructure Core</p>
                  <p>GRAND TRUNK ROAD (Sadak-i-Azam) = Sonargaon (Bengal) to Peshawar highway. SARAIS = inns & marketplaces at regular intervals. TREES for traveler safety & comfort. STANDARDIZED HIGH-PURITY SILVER RUPIYA (precursor to modern rupee) & copper Dam replaced debased coins. STABILIZED TRADE & REVENUE COLLECTION. Facilitated movement of troops, traders, officials.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Patta System Root Cause</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why was direct state-peasant link needed?</p>
                  <p>To prevent exploitation by middlemen (zamindars, iqtadars) who kept excess revenue and oppressed peasants, causing rebellion and flight.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why did middleman exploitation hurt state?</p>
                  <p>Reduced state revenue, caused agricultural instability, created pockets of disloyal, powerful intermediaries that challenged state authority.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What was root political-economy problem?</p>
                  <p>PRINCIPAL-AGENT PROBLEM. State (principal) could not monitor or control agents (middlemen), who acted in self-interest, not state's.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: How did Patta & Qabuliyat solve this?</p>
                  <p>Created TRANSPARENT, WRITTEN CONTRACT. State's terms clear on Patta, peasant's acceptance recorded in Qabuliyat. Reduced arbitrary demands. Peasant had legal document for appeal.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded border-l-4 border-orange-500 mt-4">
                  <p className="font-bold text-orange-200">Why #5 (Root Truth):</p>
                  <p>System designed to MAXIMIZE SUSTAINABLE REVENUE by PROTECTING PRIMARY PRODUCER. Secure, fairly taxed peasant would cultivate more land, produce more surplus, pay taxes willingly. Virtuous cycle of increased productivity & state income. Fair taxation = voluntary compliance.</p>
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
                <div className="bg-linear-to-r from-yellow-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-yellow-200 mb-2">🔧 The Brilliant Repairman</p>
                  <p>A brilliant repairman (Sher Shah) takes over broken-down, messy workshop (North India). Main fix was for farmers—engine of economy. Before him, local bullies would shake down farmers for random crop amounts.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">📋 Fair Receipts & Agreements</p>
                  <p>Sher Shah said, "No more bullies. You, farmer, deal directly with my office." Sent surveyors to measure every farm. Gave each farmer PRINTED RECEIPT (Patta) saying "You own this much land, your tax is this much money." Farmer signed AGREEMENT (Qabuliyat). Fair and clear.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-yellow-900 p-4 rounded">
                  <p className="font-semibold text-red-200 mb-2">🏛️ Organized Districts & Managers</p>
                  <p>Divided whole country into neat districts & sub-districts, each with manager, tax collector, security guard, all reporting to him. Created clear chain of command. Everyone knew their job, everyone reported up.</p>
                </div>
                <div className="bg-linear-to-r from-yellow-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-yellow-200 mb-2">🛣️ Super-Highway & Trade Network</p>
                  <p>Built huge, safe, tree-lined super-highway (Grand Trunk Road) with free guesthouses every few miles. Traders, soldiers, mail could travel fast. Guesthouses doubled as marketplaces. Made new, pure silver coins everyone could trust.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">🌟 The Fixer-King Legacy</p>
                  <p>Only ruled five years, but fixed system so well that next big empire (Mughals under Akbar) just used his instruction manual. He was ultimate fixer-king. Built systems so good they lasted centuries.</p>
                </div>
              </div>
            )}
          </div>

          {/* Land Revenue Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('revenue')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">💰 Land Revenue System - Patta & Qabuliyat</h2>
              <span className="text-2xl">{expandedSection === 'revenue' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'revenue' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Zabt (Land Measurement)</p>
                  <p>Surveyors measured every parcel of land with precision. Calculated average produce over multiple years. Determined fair cash tax based on actual land productivity & capacity to pay. No guesswork, no arbitrary amounts. Scientific, data-driven approach.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Patta (Title Deed)</p>
                  <p>Written document given to peasant. Stated: peasant's name, land area, description, tax amount in cash (not crops). Provided SECURITY OF TENURE. Peasant owned the land as long as tax was paid. Could not be arbitrarily evicted. Could even lease or sell land. Legal protection.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Qabuliyat (Agreement of Acceptance)</p>
                  <p>Peasant's signed agreement accepting the Patta terms. Peasant promised to pay tax amount in cash on time. State promised fair treatment & non-interference. Created BILATERAL CONTRACT with mutual obligations. Both parties had legal standing to enforce.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Why This Was Revolutionary</p>
                  <p>ELIMINATED MIDDLEMEN completely. No zamindars skimming surplus. Peasant paid directly to state officials. Tax amount fixed & predictable. Peasant knew exact obligation. Could plan production knowing tax. Not exploited by arbitrary local rulers. State got stable, predictable revenue. Win-win system.</p>
                </div>
              </div>
            )}
          </div>

          {/* Administration Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('admin')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🏛️ Administrative Reorganization - Sarkar & Pargana</h2>
              <span className="text-2xl">{expandedSection === 'admin' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'admin' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Three-Tier Hierarchy</p>
                  <p><span className="font-bold">Level 1 (Largest):</span> SARKAR = District. Had ~100 Parganas. <span className="font-bold">Level 2 (Middle):</span> PARGANA = Sub-District. Had ~10 Villages. <span className="font-bold">Level 3 (Smallest):</span> GRAM = Village. Lowest administrative unit with village headman.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Sarkar Officers</p>
                  <p><span className="font-bold">Shiqdar-i-Shiqdaran:</span> Military commander of district. Maintained order, collected revenue forcibly if needed, managed cavalry & troops. <span className="font-bold">Munsif-i-Munsifan:</span> Chief judge & civil administrator. Settled disputes, heard appeals, enforced laws, maintained records.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Pargana Officers</p>
                  <p><span className="font-bold">Shiqdar:</span> Military sub-commander. Smaller version of Sarkar's Shiqdar. <span className="font-bold">Amin:</span> Revenue officer. Collected taxes, oversaw land measurement, verified peasant payments. <span className="font-bold">Fotadar:</span> Treasurer. Managed money, paid salaries, handled financial records.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Advantages of This System</p>
                  <p>CLEAR CHAIN OF COMMAND. Each officer had specific duties. ACCOUNTABILITY = officers reported to superior, superior to central authority. COORDINATION = military & civil branches worked together. SPECIALIZATION = each officer expert in their function. CONTROL = central authority could monitor & punish corrupt officers. EFFICIENCY = reduced overlap, clear responsibility.</p>
                </div>
              </div>
            )}
          </div>

          {/* Infrastructure Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('infra')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🛣️ Infrastructure & Currency Reform</h2>
              <span className="text-2xl">{expandedSection === 'infra' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'infra' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Grand Trunk Road (Sadak-i-Azam)</p>
                  <p><span className="font-bold">Route:</span> Sonargaon (Bangladesh) through Bengal, Agra, to Peshawar (Northwest). Connected entire empire. <span className="font-bold">Features:</span> Well-paved, maintained regularly. <span className="font-bold">Sarais:</span> Caravanserais (rest houses) every ~7 km. Free lodging for travelers. <span className="font-bold">Trees:</span> Fruit & shade trees planted along road for traveler comfort.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Sarais (More Than Just Inns)</p>
                  <p><span className="font-bold">Function 1:</span> Rest houses for tired travelers, merchants, soldiers. Free stay & water. <span className="font-bold">Function 2:</span> Marketplaces where goods could be bought/sold. <span className="font-bold">Function 3:</span> Postal relay stations where messages could be handed over to next rider. <span className="font-bold">Security:</span> Guards stationed for traveler safety. Empire's eyes & ears on road.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Currency Reform - The Rupiya</p>
                  <p><span className="font-bold">Problem Before:</span> Debased coins of different weights, purity, value. No standard. Merchants & state lost money. <span className="font-bold">Solution:</span> Introduced STANDARDIZED HIGH-PURITY SILVER RUPIYA. Consistent weight, guaranteed purity. <span className="font-bold">Also created:</span> Copper DAM for smaller transactions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Why These Connected to Revenue Goals</p>
                  <p><span className="font-bold">Grand Trunk Road:</span> Movement of tax revenue from distant areas to capital. Secure transport. Official couriers. <span className="font-bold">Sarais:</span> Trade infrastructure = more commercial activity = more taxable transactions & goods. <span className="font-bold">Rupiya:</span> Peasants paid taxes in standardized coin, not debased currency. State's revenue preserved value. Merchants used Rupiya = stable, trustworthy trade = economic growth = more tax base.</p>
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
                <div className="bg-linear-to-r from-yellow-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-yellow-200 mb-2">Land Revenue = Economic Engine</p>
                  <p>Patta & Qabuliyat system was core economic foundation. Fair taxation of peasants produced predictable state revenue. Secure peasants cultivated more land, produced more surplus. Virtuous cycle of productivity.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-bold text-orange-200 mb-2">Administration = Control Mechanism</p>
                  <p>Sarkar & Pargana system enabled implementation of revenue reforms. Hierarchy allowed central authority to monitor distant areas. Officers collected taxes consistently. Clear chain ensured no revenue was stolen by middlemen.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-yellow-900 p-4 rounded">
                  <p className="font-bold text-red-200 mb-2">Infrastructure = Circulation System</p>
                  <p>Grand Trunk Road & Sarais facilitated movement of: (1) tax revenue to capital (2) official messengers for coordination (3) merchants & trade. Integrated empire physically. Sarais generated additional revenue through tolls & marketplace taxes.</p>
                </div>
                <div className="bg-linear-to-r from-yellow-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-yellow-200 mb-2">Currency = Lubricant</p>
                  <p>High-purity Rupiya enabled: (1) peasants to pay taxes in reliable coin (2) merchants to trade confidently (3) state to store value without loss. Economic stability increased trade volume, which increased tax base.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-purple-500 mt-4">
                  <p className="font-bold text-purple-300">Complete System Summary:</p>
                  <p>Revenue system generated predictable income. Administrative hierarchy collected that income efficiently. Infrastructure moved money, goods, people safely. Currency preserved value. All four worked together in virtuous cycle: Fair revenue → Satisfied peasants → More cultivation → More surplus → More taxes → Better infrastructure → More trade → Stronger economy → State power & legitimacy.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Patta & Qabuliyat Mechanism</p>
                  <p className="mb-2">How did Patta and Qabuliyat documents work together to create fairer land revenue system for both state and peasant?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: PATTA = printed title deed. Clearly stated peasant's land, land area, tax amount in cash (not crops). Gave SECURITY OF TENURE—peasant couldn't be evicted arbitrarily. Peasant owned land as long as tax paid. QABULIYAT = peasant's signed agreement accepting Patta terms. Promised to pay tax amount in cash on time. Created BILATERAL CONTRACT with mutual obligations. Both had legal standing to enforce. TOGETHER: Eliminated middlemen exploitation. Reduced arbitrary demands. Tax amount fixed & predictable. Peasant could plan production knowing exact obligation. Not exploited by local bullies. State got stable, predictable revenue. Both parties benefited. Fair for peasants (security, clarity, protection). Fair for state (reliable revenue, accountability).</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Grand Trunk Road & Sarais Support Goals</p>
                  <p className="mb-2">Explain how Grand Trunk Road and Sarais directly supported Sher Shah's administrative and economic goals. (Think: control, trade, revenue)</p>
                  <p className="text-gray-400 text-sm">💡 Answer: CONTROL: Road was main artery for imperial authority. Official couriers traveled safely, bringing messages from central government to distant Sarkars. Sarais housed state messengers & military movement. State could coordinate & control distant territories quickly. TRADE: Road connected Bengal to Peshawar—empire's richest regions. Sarais as marketplaces created safe, regulated trade hubs. Merchants trusted road's safety. Trade volume increased. REVENUE (3 ways): 1) Tax revenue moved safely from distant Parganas to capital without loss to bandits. 2) Marketplace taxes in Sarais generated additional state revenue. 3) More trade volume = more commercial activity = more taxable transactions. Merchants became wealthier, paid more indirect taxes. Administrative goal & Economic goal were unified through infrastructure: Safe roads = better control + more trade + more revenue.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Five-Year Rule & Greatest Administrator</p>
                  <p className="mb-2">Why is Sher Shah Suri, who ruled for only five years, considered one of greatest administrators in Indian history? What was his primary gift to future empires?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: BRIEF REIGN (1540-1545) but LASTING LEGACY. Most rulers with decades couldn't match his impact. WHY: He FIXED THE SYSTEM not just ruled it. He INVENTED administrative & revenue frameworks that actually worked. KEY INNOVATIONS: 1) Patta-Qabuliyat system eliminated middlemen corruption & made taxation fair. 2) Sarkar-Pargana hierarchy created bureaucratic accountability. 3) Grand Trunk Road unified empire & facilitated control & trade. 4) Rupiya standardized currency for stable commerce. PRIMARY GIFT TO FUTURE: He proved that GOOD GOVERNANCE could WIN POPULAR LEGITIMACY even for short-reigning, non-dynastic ruler. More importantly, he left an INSTRUCTION MANUAL for empire-building. Akbar adopted & refined Sher Shah's systems to build Mughal Empire's foundation. The systems were so effective, they became model for centuries. His greatness = not his conquests but his SYSTEMS. He showed empire-building ≠ just military might. It = fair administration + good infrastructure + accountable officials. This lesson transformed how empires were built in India.</p>
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
                  <p className="font-semibold text-yellow-300">Zabt (Land Measurement)</p>
                  <p>Scientific measurement of land parcels. Calculation of average produce over multiple years. Basis for fair tax assessment. Data-driven approach to revenue. No guesswork.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Patta (Title Deed)</p>
                  <p>Written document stating peasant's name, land area, description, tax amount. Gave security of tenure. Peasant owned land as long as tax paid. Legal protection document.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Qabuliyat (Agreement)</p>
                  <p>Peasant's signed agreement accepting Patta terms. Promised payment of tax amount in cash. Created bilateral contract. Both parties had legal standing to enforce.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Sarkar (District)</p>
                  <p>Major administrative division. Had ~100 Parganas. Headed by Shiqdar-i-Shiqdaran (military) & Munsif-i-Munsifan (civil). Primary level of imperial control.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Pargana (Sub-District)</p>
                  <p>Secondary administrative division. Had ~10 villages. Headed by Shiqdar (military), Amin (revenue), Fotadar (treasurer). Implemented district policies locally.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Grand Trunk Road (Sadak-i-Azam)</p>
                  <p>Main highway from Sonargaon (Bengal) to Peshawar. Connected empire. Had Sarais (rest houses) every ~7 km. Facilitated movement of troops, trade, officials, messages.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Sarais</p>
                  <p>Caravanserais (rest houses/inns) along roads. Free lodging for travelers. Doubled as marketplaces. Served as postal relay stations. Armed guards for security. Multi-purpose infrastructure.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-400">
                  <p className="font-semibold text-yellow-200">Rupiya (Silver Coin)</p>
                  <p>High-purity standardized silver coin. Precursor to modern Indian rupee. Consistent weight & value. Replaced debased coins. Stabilized trade & revenue collection.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-400">
                  <p className="font-semibold text-orange-200">Dam (Copper Coin)</p>
                  <p>Copper coin for smaller transactions. Standardized & reliable. Complemented Rupiya for everyday commerce. Enabled wider economic participation.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-400">
                  <p className="font-semibold text-red-200">Raiyotwari Principle</p>
                  <p>Direct relationship between state & peasant (rayat = peasant). Eliminated middlemen. State dealt directly with farmer for revenue collection. Peasant paid state, not local ruler.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-yellow-900 to-orange-900 rounded-lg border border-yellow-700">
          <p className="text-yellow-200">
            <span className="font-bold">💡 Remember:</span> Sher Shah Suri ruled for only FIVE YEARS but built systems so effective that the next great empire (Mughals under Akbar) adopted them directly. He proved that GOOD ADMINISTRATION wins loyalty more than military conquest alone. His Patta-Qabuliyat system eliminated oppressive middlemen & made taxation fair. His Sarkar-Pargana hierarchy created accountability. His Grand Trunk Road unified the empire. His Rupiya stabilized commerce. All four pillars worked together. When you study Akbar or later Mughal success, remember: they were using Sher Shah's instruction manual. He was the architect; they were the builders. A five-year reign that changed Indian history forever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SherShahSuriNotes;
