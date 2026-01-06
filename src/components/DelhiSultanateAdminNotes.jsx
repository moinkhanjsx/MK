import React, { useState } from 'react';

const DelhiSultanateAdminNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">⚙️ Delhi Sultanate Administration</h1>
          <p className="text-gray-400">The Administrative Framework & System (1206-1526)</p>
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
                <div className="bg-blue-900 p-4 rounded">
                  <h3 className="font-semibold text-blue-200 mb-2">🏛️ Central Administration (The "Head Office")</h3>
                  <p>The Sultan and core ministers in Delhi who set empire-wide policy. Includes: Sultan (apex), Wazir (chief minister & finance), Sadr-us-Sudur (religious affairs & justice), Ariz-i-Mumalik (military commander).</p>
                </div>
                <div className="bg-green-900 p-4 rounded">
                  <h3 className="font-semibold text-green-200 mb-2">🌾 Provincial & Revenue Administration (The "Field Offices")</h3>
                  <p>System for governing vast territories and collecting income. Core mechanism: Iqta system. Iqtadar/Muqti (holder) collected revenue, maintained law & order, supplied soldiers. Decentralized but controlled.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">⚖️ Legal & Religious Administration (The "Judges and Clergy")</h3>
                  <p>Separate hierarchy responsible for justice and Islamic law. Qazi (Islamic judge) in every major town. Sadr-us-Sudur supervised all Qazis. Applied Sharia law + Sultan's secular decrees (Zawabit).</p>
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
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-200 mb-2">Central Administration</p>
                  <p><strong>Sultan:</strong> Absolute apex. Chief executive, legislator, military commander, final court of appeal.</p>
                  <p><strong>Wazir:</strong> Chief minister & finance head (Diwan-i-Wizarat). Principal advisor, manages treasury.</p>
                  <p><strong>Sadr-us-Sudur:</strong> Head of Diwan-i-Risalat (Religious Affairs). Manages waqfs, appoints Qazis, link to ulema.</p>
                  <p><strong>Ariz-i-Mumalik:</strong> Head of Diwan-i-Arz (Military). Recruitment, salaries, training, soldier rolls (Chehra).</p>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-200 mb-2">Provincial & Revenue System</p>
                  <p><strong>Iqta:</strong> Territory whose revenue assigned to a noble/officer in lieu of salary.</p>
                  <p><strong>Iqtadar/Muqti:</strong> Holder of Iqta. Duties: 1) Collect land revenue, 2) Maintain law & order, 3) Maintain soldier contingent for Sultan's army.</p>
                  <p><strong>Key Insight:</strong> Decentralizes administration. Funds military without constant treasury transfers. Created powerful landed nobility.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Legal & Religious Administration</p>
                  <p><strong>Qazi:</strong> Islamic judge in every major town. Administered civil and criminal law based on Sharia.</p>
                  <p><strong>Sadr-us-Sudur:</strong> Chief Qazi/ecclesiastical officer. Appointed and supervised provincial Qazis.</p>
                  <p><strong>Zawabit:</strong> Sultan's secular decrees with legal force for state security, taxation, and matters not covered by Sharia.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - The Iqta System Engine</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why did Sultanate need Iqta system?</p>
                  <p>To govern vast empire without large, salaried bureaucracy that central treasury couldn't afford</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why couldn't treasury afford direct administration?</p>
                  <p>Economy was agrarian, cash was SCARCE, revenue collection was SLOW & INEFFICIENT over long distances</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: How did Iqta solve military funding?</p>
                  <p>PAYMENT-IN-KIND system. Instead of: collect cash → pay soldiers → send nobles salary. Now: give nobles RIGHT TO COLLECT REVENUE, condition they supply & pay troops themselves.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What political mechanism made it work?</p>
                  <p>CENTRAL CONTROL through REVOCABLE GRANTS. Iqta was NOT hereditary (initially). Sultan could transfer/revoke. Muqti's wealth & power depended entirely on Sultan's favor = loyalty guaranteed.</p>
                </div>
                <div className="bg-green-900 bg-opacity-40 p-4 rounded border-l-4 border-green-500 mt-4">
                  <p className="font-bold text-green-200">Why #5 (Root Truth):</p>
                  <p>It was a DECENTRALIZED, RESOURCE-FOR-LOYALTY BARGAIN. Sultan traded local revenue rights for military service & allegiance, creating powerful land-based nobility that was BOTH the empire's strength AND greatest source of instability when Sultan grew weak.</p>
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
              <h2 className="text-xl font-bold text-white">4️⃣ Feynman Technique (Pizza Franchise Analogy)</h2>
              <span className="text-2xl">{expandedSection === 'feynman' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'feynman' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-blue-900 to-cyan-900 p-4 rounded">
                  <p className="font-semibold text-blue-200 mb-2">🏛️ The Headquarters Setup</p>
                  <p>Imagine the Sultanate is a giant pizza franchise. The <strong>Sultan</strong> is the big boss at headquarters. He has main managers:</p>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>🏦 <strong>Wazir</strong> = Money Manager. Tracks income from every store, plans budget, pays HQ bills.</li>
                    <li>🛡️ <strong>Ariz</strong> = Head of Security. Hires guards, gives them uniforms, pays them, plans protection.</li>
                    <li>⚖️ <strong>Sadr</strong> = Head of Rules & Community. Makes sure stores follow rulebook, handles charity, appoints judges.</li>
                  </ul>
                </div>
                <div className="bg-linear-to-r from-green-900 to-teal-900 p-4 rounded">
                  <p className="font-semibold text-green-200 mb-2">🌾 The Manager's License System (Iqta)</p>
                  <p>Empire too big to run every store from HQ. So boss uses the <strong>"Manager's License" (Iqta)</strong> system.</p>
                  <p className="mt-2">He gives the license to a trusted person (<strong>Muqti</strong>). This manager's job:</p>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>1️⃣ Collect all customer payments (taxes) from that area</li>
                    <li>2️⃣ Keep big slice for himself as salary to run the store</li>
                    <li>3️⃣ Use some money to hire & train his own security team</li>
                    <li>4️⃣ Promise to send his security to help big boss when there's a big fight</li>
                  </ul>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-purple-200 mb-2">⚖️ The Rules & Judges</p>
                  <p>In each town, there's a <strong>Judge (Qazi)</strong> who settles fights between customers/employees using the rulebook. The Head of Rules (<strong>Sadr</strong>) appoints all judges.</p>
                  <p className="mt-2">The whole point: Big boss could control HUGE area without managing every little shop. Just had to keep managers happy and loyal. BUT if a manager got too rich and powerful, he might STOP LISTENING—which happened a lot!</p>
                </div>
              </div>
            )}
          </div>

          {/* Key Departments */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('departments')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">5️⃣ The Four Major Departments (Diwans)</h2>
              <span className="text-2xl">{expandedSection === 'departments' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'departments' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-bold text-blue-200">Diwan-i-Wizarat (Finance Department)</p>
                  <p><strong>Head:</strong> Wazir. <strong>Function:</strong> Manages treasury, collects revenue, pays salaries, handles state finances and budgets.</p>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="font-bold text-green-200">Diwan-i-Arz (Military Department)</p>
                  <p><strong>Head:</strong> Ariz-i-Mumalik. <strong>Function:</strong> Recruits soldiers, maintains descriptive rolls (Chehra), pays salaries, supplies equipment, trains army.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-bold text-purple-200">Diwan-i-Risalat (Religious Affairs Department)</p>
                  <p><strong>Head:</strong> Sadr-us-Sudur. <strong>Function:</strong> Manages religious grants (waqfs), appoints Qazis, oversees Islamic charity and religious patronage.</p>
                </div>
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-200">Diwan-i-Insha (Secretariat/Records)</p>
                  <p><strong>Head:</strong> Dabir-i-Khanah. <strong>Function:</strong> Maintains official records, issues decrees, manages correspondence, keeps state documents.</p>
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
                <div className="bg-linear-to-r from-blue-900 to-cyan-900 p-4 rounded">
                  <p className="font-bold text-blue-200 mb-2">Central Authority Set Policies</p>
                  <p>Sultan & ministers at Delhi made empire-wide decisions, laws, military strategy. Set the rules everyone must follow.</p>
                </div>
                <div className="bg-linear-to-r from-green-900 to-teal-900 p-4 rounded">
                  <p className="font-bold text-green-200 mb-2">Iqta System Implemented & Funded</p>
                  <p>Iqtadars (provincial governors) executed central policies in their regions. Collected revenue, maintained order, supplied soldiers. Iqta system = engine that DECENTRALIZED administration while maintaining CENTRAL CONTROL through revocable grants.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-bold text-purple-200 mb-2">Legal System Provided Stability</p>
                  <p>Qazis enforced Islamic law in both central and provincial areas. Sultan's Zawabit (decrees) handled state-specific matters. Legal system operated in PARALLEL, providing religious legitimacy and social stability across empire.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-500 mt-4">
                  <p className="font-bold text-yellow-300">Complete Picture:</p>
                  <p>The Delhi Sultanate was a THREE-LAYER system: 1) Central command (Sultan, ministers) set goals. 2) Iqta system implemented those goals regionally while funding the state through revenue-for-loyalty trades. 3) Legal/religious system provided stability and legitimacy. All three layers were interdependent. If the Sultan was strong, the system worked. If he was weak, the Iqtadars became independent, and the empire fragmented.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: The Iqta Bargain</p>
                  <p className="mb-2">Describe the "deal" between Sultan and Iqtadar. What did each give and get in return?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: SULTAN GIVES: Right to collect revenue from assigned territory. SULTAN GETS: Military service, troops, loyalty, political allegiance. IQTADAR GIVES: Soldiers, military service, obedience to Sultan's decrees. IQTADAR GETS: Right to keep portion of collected revenue as salary and profit. Fundamental bargain = resources for loyalty.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Wazir vs Ariz-i-Mumalik</p>
                  <p className="mb-2">How did the roles of Wazir and Ariz-i-Mumalik differ? Give one unique responsibility for each.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: WAZIR = Chief finance minister (Diwan-i-Wizarat). Focus: Manage treasury, collect empire-wide revenue, pay salaries, plan budgets. ARIZ = Military commander (Diwan-i-Arz). Focus: Recruit soldiers, maintain descriptive rolls (Chehra), pay military wages, supply equipment, train army. WAZIR = Money. ARIZ = Soldiers.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Sadr-us-Sudur's Dual Role</p>
                  <p className="mb-2">Sadr-us-Sudur appears in both religious and legal administration. What were his two distinct major functions?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: FUNCTION #1 (Religious/Administrative): Head of Diwan-i-Risalat. Manages waqf grants, handles religious charity, promotes Islamic scholarship. FUNCTION #2 (Legal/Judicial): Chief Qazi. Appoints and supervises provincial Qazis, ensures Islamic law (Sharia) applied uniformly across empire. He was the BRIDGE between religious institutions and the state.</p>
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
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Iqta</p>
                  <p>Territory whose revenue assigned to noble/officer in lieu of salary. Core unit of provincial administration.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Iqtadar/Muqti</p>
                  <p>Holder of Iqta. Governor who collected revenue, maintained order, supplied troops. Powerful provincial noble.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Waqf</p>
                  <p>Religious endowment/charitable grant. Managed by Sadr-us-Sudur. Generated income for religious institutions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Qazi</p>
                  <p>Islamic judge appointed in towns. Applied Sharia law to civil and criminal cases. Appointed by Sadr-us-Sudur.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Zawabit</p>
                  <p>Sultan's secular decrees with legal force. Covered matters not in Sharia (state security, taxation, etc).</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Chehra</p>
                  <p>Descriptive roll of soldiers. Physical description, unit assignment. Prevented impersonation and desertion.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Ulema</p>
                  <p>Class of Islamic scholars and clergy. Consulted on religious matters. Linked to state through Sadr-us-Sudur.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-blue-900 to-green-900 rounded-lg border border-blue-700">
          <p className="text-blue-200">
            <span className="font-bold">💡 Remember:</span> The Delhi Sultanate was a sophisticated THREE-LAYER SYSTEM: Central command → Iqta system for provincial implementation → Legal/religious system for stability. The Iqta was the ENGINE: it solved funding, administration, and military supply. But it also created powerful regional nobles whose loyalty depended on the Sultan's strength. A weak Sultan = fragmentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DelhiSultanateAdminNotes;
