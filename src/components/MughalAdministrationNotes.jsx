import React, { useState } from 'react';

const MughalAdministrationNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">⚙️ Mughal Administration (Detailed for Mains)</h1>
          <p className="text-gray-400">The Bureaucratic Engine - Central, Provincial & Revenue Systems</p>
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
                  <h3 className="font-semibold text-blue-200 mb-2">🏛️ Central Administration: The Headquarters</h3>
                  <p>Emperor = absolute sovereign, final source of authority (military, judicial, administrative). Key ministers: Wazir/Vakil (prime minister, Diwan-i-Wizarat, revenue/finance), Mir Bakshi (military, Diwan-i-Arz, Mansabdari system), Sadr-us-Sudur (religious/judicial, charity, Qazis), Diwan-i-Khalisa (Crown lands, royal treasury, direct imperial control). Central decision-making, policy setting, high-level appointments.</p>
                </div>
                <div className="bg-green-900 p-4 rounded">
                  <h3 className="font-semibold text-green-200 mb-2">🗺️ Provincial Administration: The Field Offices</h3>
                  <p>Subahs (provinces) headed by Subahdar (provincial governor, military/law & order). Each Subah had Provincial Diwan (central appointee, manages provincial revenue, checks Subahdar power). Bakshi (provincial military), Faujdar (district commander, law & order, suppression of rebellion), Kotwal (town magistrate, policing, census, prices, sanitation). Replicated hierarchical structure across empire implementing central policy.</p>
                </div>
                <div className="bg-orange-900 p-4 rounded">
                  <h3 className="font-semibold text-orange-200 mb-2">💰 Revenue Administration: The Financial Spine</h3>
                  <p>Land classification: Khalisa (crown land, direct imperial treasury), Jagir (assignment to Mansabdar as salary), Inam (revenue-free grants to religious/scholars). Diwan-i-Tan allocates Jagirs (prevents discontent). Regular cycle of land measurement (Zabt/Bandobast), assessment (Dahlsal), Jagir transfer (Paibaqi) prevents Jagirdars from developing local roots. System stability depends on constant assessment & transfer mechanisms. Financial engine directly linked to elite loyalty.</p>
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
                  <p className="font-semibold text-blue-200 mb-2">Central Authority Structure</p>
                  <p>EMPEROR = ABSOLUTE SOVEREIGN. All authority derives from emperor. Not limited by law or council (unlike European monarchies). Final decision-maker on all matters. WAZIR = Prime Minister, head of Diwan-i-Wizarat (revenue/finance). Manages imperial income/expenditure, controls state treasury. Most powerful minister after emperor. MIR BAKSHI = Head of Diwan-i-Arz (military). Manages Mansabdari system—recruitment, payment, promotion, intelligence on nobles/soldiers. Essentially military HR director. SADR-US-SUDUR = Head of religious/judicial. Appoints Qazis (judges), oversees Islamic law, distributes charity. DIWAN-I-KHALISA = Controller of Crown Lands. Reports directly to emperor. Manages royal personal treasury (most important revenue source). Key feature = separate from Wazir's control, checks executive power.</p>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-200 mb-2">Provincial Hierarchy & Checks</p>
                  <p>SUBAHDAR = Provincial governor, primarily military commander. Keeps peace, suppresses rebellion. Reports to emperor & Wazir. PROVINCIAL DIWAN = Appointed by central Diwan. Manages provincial revenue, finances. Separate from Subahdar—checks his power, reports independently to HQ. CRITICAL CHECK: Subahdar controls military, Diwan controls money. Neither can act alone without friction. If Subahdar tries rebellion, lacks direct treasury access. If Diwan tries embezzlement, lacks military protection. BAKSHI = Provincial version of Mir Bakshi. Handles military musters, Mansabdar assignments. FAUJDAR = District commander. Maintains law & order, suppresses dacoits, collects taxes via force if needed. KOTWAL = Town magistrate. Policing, census, price controls (prevents hoarding), sanitation (public health officer). Sophisticated local administration.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-200 mb-2">Revenue System & Land Categories</p>
                  <p>THREE LAND TYPES: 1) KHALISA = Crown lands. Revenue goes directly to royal treasury. Usually best lands, controlled by emperor personally. Smallest percentage of total land but highest revenue quality. 2) JAGIR = Assignment of revenue rights to Mansabdar. Not ownership—temporary right to collect taxes. Goes to Mansabdar as salary to maintain himself & his military contingent. Majority of cultivated land. 3) INAM = Revenue-free grants. Given to religious scholars, holy men, favored nobles as rewards. Created loyal ally network without spending treasury money. DIWAN-I-TAN = Allocates Jagirs to prevent discontent. Complex task—match rank (Zat) to Jagir value. REGULAR MEASUREMENT = Zabt/Bandobast measures land, Dahlsal assesses rates, Jagirdars reassigned constantly (Paibaqi = transfer). Goal = prevent Jagirdars from developing permanent local power bases, maintain emperor's ultimate control over all land.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Jagirdari System as Financial Engine</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why pay nobles with land revenue instead of cash?</p>
                  <p>Central treasury lacked vast liquid cash reserves needed to pay thousands of Mansabdars & their troops regularly.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why did treasury lack such cash?</p>
                  <p>Economy predominantly agrarian. Revenue came slowly as harvest-based taxes, not regular cash flow. Agriculture = base, not industry. No rapid-turning cash markets.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: How did Jagir system solve cash flow problem?</p>
                  <p>DECENTRALIZED SALARY PAYMENTS. State assigned RIGHT TO COLLECT REVENUE from specific area to noble. Noble then used income to pay himself & maintain military contingent. State transferred revenue stream, not cash. Noble became tax collector for his own salary.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What controlled Jagirdars from becoming independent?</p>
                  <p>FREQUENT TRANSFER (Paibaqi). Jagirs not permanent. Mansabdar transferred to different Jagir every few years. Prevented local power base building. Maintained loyalty to emperor, not land. Constant reassignment = constant dependence on central authority for next posting.</p>
                </div>
                <div className="bg-amber-900 bg-opacity-40 p-4 rounded border-l-4 border-amber-500 mt-4">
                  <p className="font-bold text-amber-200">Why #5 (Root Truth):</p>
                  <p>Jagirdari system was CLEVER FISCAL BARGAIN linking imperial expansion to elite loyalty. Converted conquered land into immediate patronage for ruling class. BUT success depended ENTIRELY on: 1) CONSTANT SUPPLY OF NEW LAND (expansion conquests) to assign as Jagirs, 2) RIGOROUS CENTRAL OVERSIGHT to manage transfers, prevent corruption, reassess regularly. When expansion stopped (18th century) & central control weakened (post-Aurangzeb), system collapsed. No new Jagirs to reward loyal nobles = discontent. No strong oversight = Jagirdars dug in locally, became hereditary, ignored central authority. System's genius was also its fatal vulnerability—depended on perpetual expansion & constant central vigilance.</p>
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
                <div className="bg-linear-to-r from-blue-900 to-indigo-900 p-4 rounded">
                  <p className="font-semibold text-blue-200 mb-2">🏢 The Company Structure</p>
                  <p>Mughal Empire = giant company. EMPEROR = CEO with absolute power. At HEADQUARTERS (Delhi/Agra), four top managers: 1) CFO (Wazir)—handles all money & budget. 2) Head of HR & Defense (Mir Bakshi)—hires managers, soldiers, gives ranks, checks work. 3) Head of Legal & Charity (Sadr)—runs law courts, gives donations. 4) Royal Accountant (Diwan-i-Khalisa)—manages CEO's personal bank account (from his own farms).</p>
                </div>
                <div className="bg-linear-to-r from-indigo-900 to-green-900 p-4 rounded">
                  <p className="font-semibold text-indigo-200 mb-2">🗺️ The Branch Network</p>
                  <p>Company has branches all over country (PROVINCES). Each branch has: 1) BRANCH MANAGER (Subahdar)—keeps peace. 2) BRANCH ACCOUNTANT (Diwan)—handles money, watches the manager (sent from HQ). 3) SECURITY HEAD (Faujdar)—handles district security. 4) CITY MAYOR (Kotwal)—manages town police, census, prices, cleanliness. Key = BRANCH ACCOUNTANT is separate from MANAGER. Neither can act alone. Manager can't steal (no direct treasury), Accountant can't defend himself (no military).</p>
                </div>
                <div className="bg-linear-to-r from-green-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-green-200 mb-2">💳 The Salary Coupon System</p>
                  <p>How do you pay all managers & soldiers? NOT with cash. No enough money. Instead, give them SALARY COUPON (JAGIR). Coupon says: "You can collect tax money from these 100 villages & use it as your pay." Manager uses village taxes to pay himself, soldiers, administrative costs. But here's KEY TRICK: YOU MOVE MANAGERS TO DIFFERENT VILLAGES EVERY FEW YEARS (PAIBAQI = transfer). Prevents manager getting too cozy, starting own mini-company in villages. Keeps him loyal to main company because he knows next job depends on CEO's goodwill.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">🏠 The Three Land Types</p>
                  <p>Land divided three ways: 1) KHALISA = CEO's personal land. Tax money goes directly to CEO's personal account. CEO's own business. 2) JAGIR = Manager gets salary-coupon to collect taxes. 3) INAM = Free gift land to religious people, holy men. No taxes collected. CEO's way of buying loyalty of spiritual community. WHOLE SYSTEM = salary coupons constantly moved around to keep managers loyal, prevent local empires, funding everything through agriculture taxes.</p>
                </div>
              </div>
            )}
          </div>

          {/* Central Administration Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('central')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🏛️ Central Administration - The Headquarters</h2>
              <span className="text-2xl">{expandedSection === 'central' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'central' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">The Emperor: Absolute Authority</p>
                  <p><span className="font-bold">Position:</span> Absolute sovereign. Final decision-maker on all matters—military, judicial, administrative. <span className="font-bold">Authority source:</span> Not constitutional/elected but traditional Islamic monarchy + conquest legitimacy. <span className="font-bold">Powers:</span> Appointed/dismissed all ministers. Made final appointments to key positions. Could override any decision. Controlled royal treasury (Khalisa lands). Declared policy. <span className="font-bold">Limitations:</span> In theory none. In practice, depended on competence of ministers, military support, bureaucratic cooperation. Weak emperor = ministers ruled. <span className="font-bold">Diwani-i-Aam ritual:</span> Daily public audience where emperor heard petitions, dispensed justice personally. Reinforced divine authority.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Wazir/Vakil: Prime Minister & Financial Chief</p>
                  <p><span className="font-bold">Title:</span> Wazir (Persian) or Vakil (representative). <span className="font-bold">Department:</span> Diwan-i-Wizarat (Revenue & Finance ministry). <span className="font-bold">Responsibilities:</span> Overall revenue administration, budget management, manages state income/expenditure, supervises all revenue officials in provinces, appoints provincial Diwans, controls state treasury (except Khalisa). <span className="font-bold">Power:</span> Most powerful minister after emperor. Direct access to emperor. Controls finances = controls everything else (can't fight wars, pay army, build monuments without money). <span className="font-bold">Rank:</span> Highest rank (Zat) in Mansabdari system. <span className="font-bold">Tenure:</span> Served emperor at will. Powerful Wazirs could influence policy, weak ones could be removed by emperor or military pressure.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Mir Bakshi: Military Administrator & HR Director</p>
                  <p><span className="font-bold">Department:</span> Diwan-i-Arz (Military ministry). <span className="font-bold">Responsibilities:</span> Manages Mansabdari system—recruitment, salary payment, promotion, intelligence on nobles. Musters soldiers (checked their rolls, fitness). Supervised imperial cavalry, artillery. <span className="font-bold">Key function:</span> Gatekeeper to imperial favor. Controlled promotions, Mansab ranks, Jagir assignments (usually under Diwan-i-Tan oversight). Power = controls who gets what rank, who gets command of armies. <span className="font-bold">Intelligence:</span> Spymaster role. Collected information on nobles' loyalty, activities. <span className="font-bold">Interaction:</span> Worked closely with Wazir—if Mansabdar wasn't paid (Wazir's job), Mir Bakshi heard complaints. Friction between them = administrative paralysis.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Sadr-us-Sudur: Religious & Judicial Authority</p>
                  <p><span className="font-bold">Department:</span> Religious & Judicial ministry. <span className="font-bold">Responsibilities:</span> Appointed Qazis (Islamic judges) throughout empire. Oversaw Islamic law implementation (Sharia). Distributed charity (Zakat). Managed religious endowments (Waqfs). Supervised religious scholars. <span className="font-bold">Authority:</span> Religious legitimacy for empire. Could declare emperor's actions Islamically justified or condemned. Had respect of Muslim population. <span className="font-bold">Scope:</span> Parallel to Wazir in some sense—had own budget, own official network, own importance to state. <span className="font-bold">Limitation:</span> In practice, emperor controlled Sadr's appointments, could override religious decisions if politically important.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Diwan-i-Khalisa: Royal Accountant & Direct Imperial Control</p>
                  <p><span className="font-bold">Department:</span> Crown Lands ministry. Directly under emperor. <span className="font-bold">Responsibility:</span> Manages Khalisa lands (crown lands). These were best agricultural lands, yielded highest revenue. Revenue went directly to royal treasury for emperor's personal use (wars, monuments, gifts, royal household expenses). <span className="font-bold">Significance:</span> Separate from Wazir's control = direct check on Wazir's power. Emperor didn't depend entirely on Wazir-controlled treasury. Had independent revenue source. <span className="font-bold">Percentage:</span> Khalisa lands were roughly 20% of empire but yielded disproportionate revenue (highest quality land). <span className="font-bold">Use:</span> Funded imperial armies, monuments (Taj Mahal, Red Fort), gifts to nobles, imperial household. Made emperor financially independent from Wazir in key ways.</p>
                </div>
              </div>
            )}
          </div>

          {/* Provincial Administration Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('provincial')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🗺️ Provincial Administration - The Field Offices</h2>
              <span className="text-2xl">{expandedSection === 'provincial' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'provincial' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Subah: The Province & Subahdar (Governor)</p>
                  <p><span className="font-bold">Unit:</span> Subah = province. Empire divided into 15 Subahs (varied historically). <span className="font-bold">Subahdar:</span> Provincial governor, usually high-ranking Mansabdar (Zat 5000+). <span className="font-bold">Role:</span> Military commander of province. Kept peace, suppressed rebellions, defended against invasions. Collected taxes with army backing. <span className="font-bold">Power:</span> Vast. Controlled provincial army, appointed district officers, judged cases in appeal. De facto king of province. <span className="font-bold">Limitation:</span> Monitored by Provincial Diwan (sees all financial records), by Mir Bakshi (intelligence network), by emperor (can be removed instantly). No permanent tenure. Could be transferred to different province or removed. <span className="font-bold">Ambition problem:</span> Powerful Subahdar with loyal army could rebel. Solution = frequent rotation, Diwan oversight, threat of removal.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Provincial Diwan: Financial Watchdog & Check on Subahdar</p>
                  <p><span className="font-bold">Appointment:</span> Central Diwan (Wazir) appointed Provincial Diwan. NOT by Subahdar. <span className="font-bold">Role:</span> Manages provincial revenue, finances, tax collection. Keeps financial records. Reports directly to central Diwan & Wazir. <span className="font-bold">Key function:</span> CHECK ON SUBAHDAR. Subahdar controls military, Diwan controls money. If Subahdar tries rebellion, Diwan could cut his funds (no pay for army). Subahdar can't dismiss Diwan—answers only to center. <span className="font-bold">Separate chains:</span> Subahdar reports militarily to Mir Bakshi. Diwan reports financially to central Diwan. Both report to emperor. Neither can act alone. <span className="font-bold">Tension:</span> Friction between Subahdar & Diwan common (who has ultimate provincial authority?). Referee = emperor. Smart empire managed friction to prevent either from dominating.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Sarkar & Faujdar: The District Level</p>
                  <p><span className="font-bold">Unit:</span> Sarkar = district, subdivision of Subah. Province divided into 5-10 Sarkars. <span className="font-bold">Faujdar:</span> District commander. Usually Mansabdar with rank 500-2000. <span className="font-bold">Responsibilities:</span> Maintain law & order, suppress dacoits (bandits), suppress rebellions, collect taxes via force if needed, defend district from invasion. <span className="font-bold">Military:</span> Commanded soldiers, cavalry. Police function + military function combined. <span className="font-bold">Authority:</span> Could judge cases, execute justice summarily. Had to answer to Subahdar militarily, provincial officials financially. <span className="font-bold">Importance:</span> Faujdar was muscle of state. If Faujdar corrupt, could extort peasants. If incompetent, dacoits raided freely. Quality of governance depended on Faujdar quality.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Kotwal: The Town Officer</p>
                  <p><span className="font-bold">Role:</span> Town magistrate & police chief. Appointed for each major city/town. <span className="font-bold">Responsibilities:</span> 1) POLICING—patrol city, arrest criminals, maintain order. 2) CENSUS—maintain register of population, households, occupations. 3) PRICE CONTROL—monitor market prices, prevent hoarding, regulate guilds. 4) SANITATION—maintain cleanliness, manage waste, prevent plague/disease. 5) TAX COLLECTION—in cities, collected taxes on merchants, craftsmen. <span className="font-bold">Authority:</span> Could arrest, imprison, fine, execute punishment. <span className="font-bold">Sophistication:</span> Kotwal role shows sophisticated urban administration. Not just police but also public health, economic regulation, census. State concerned with citizen welfare, market efficiency, disease prevention.</p>
                </div>
              </div>
            )}
          </div>

          {/* Revenue Administration Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('revenue')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">💰 Revenue Administration - The Financial Spine</h2>
              <span className="text-2xl">{expandedSection === 'revenue' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'revenue' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">The Three Land Categories</p>
                  <p><span className="font-bold">KHALISA (Crown Lands):</span> Revenue went directly to royal treasury. Best agricultural land (usually). Highest revenue per acre. Roughly 20% of cultivated land. Managed by Diwan-i-Khalisa under emperor's direct control. No intermediary. Emperor's personal property income. Used for imperial wars, monuments, household. ADVANTAGE: Emperor financially independent. DISADVANTAGE: Takes best lands out of Jagir market. <span className="font-bold">JAGIR (Assignment Land):</span> Majority of cultivated land (~60-70%). Assigned to Mansabdars as salary. Jagirdar collected taxes but didn't own land. Temporary assignment, frequently transferred. When Mansabdar's rank increased, Jagir value increased. When demoted, lost Jagir. Tied elite income directly to imperial favor. <span className="font-bold">INAM (Grant Land):</span> Revenue-free land (~10-20%). Granted to religious scholars, holy men, temples, favored nobles. No taxes collected. Way of building loyal elite without spending treasury. Created stakeholder class (everyone getting Inam wanted state to remain stable & grateful to them).</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Land Measurement & Assessment: Zabt, Bandobast, Dahlsal</p>
                  <p><span className="font-bold">ZABT/BANDOBAST:</span> Regular measurement of land. Surveyors measured fields, recorded dimensions, soil quality, irrigation access. Updated regularly to account for new fields, abandoned lands, changes. Accurate measurement = accurate tax assessment. <span className="font-bold">DAHLSAL:</span> Assessment of tax rates based on land quality. Different rates for different soils. Irrigated land paid more. Unirrigated (Barani) less. Temple lands (Inam) assessed as zero. System tried to be rational & fair. <span className="font-bold">Regularity:</span> Measurements updated every 5-10 years (varied by emperor). Regular updates prevented Jagirdars from claiming lands had declined in value (excuse to reduce taxes paid to state). <span className="font-bold">Efficiency:</span> Under Akbar & Todar Mal, system was rigorous. Under weak emperors, became corrupted (officials bribed, measurements falsified).</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Jagir Allocation & Transfer: Diwan-i-Tan & Paibaqi</p>
                  <p><span className="font-bold">DIWAN-I-TAN:</span> Department responsible for allocating Jagirs. Received requests from Mansabdars who wanted Jagir assignments, transfers, increases. Tried to match Mansabdar rank to appropriate Jagir value. Avoided creating discontent. <span className="font-bold">Rank-to-Jagir match:</span> Higher rank = higher Jagir value. But complex—inflation of ranks over time created shortage of high-value Jagirs. By Aurangzeb's time, system was strained. <span className="font-bold">PAIBAQI (Transfer):</span> Regular transfer of Jagirs. Mansabdar served in one Jagir for few years, then transferred to different location. Prevented locals from building family dynasties, from identifying too much with local area. Maintained dependence on empire for next posting. <span className="font-bold">Strategic benefit:</span> Transfer prevented permanent Jagirdar dynasties. If Jagir stayed in family for generations, eventually Jagirdar wouldn't obey emperor (why care? own the land anyway). <span className="font-bold">Control mechanism:</span> Frequent transfer = constant control. Jagirdar knows next posting depends on current loyalty & performance. Always looking over shoulder.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">The Mansabdari-Jagirdari Link: How Revenue System Funded Elite</p>
                  <p><span className="font-bold">System connection:</span> Mansabdari = rank system. Jagirdari = salary system. Directly connected. <span className="font-bold">How worked:</span> Mansabdar got rank (e.g., Zat 3000/Sawar 2000). Rank determined salary required. Diwan-i-Tan assigned Jagir worth equivalent salary. Jagirdar collected revenue from assigned villages, used it to pay himself & maintain military contingent. <span className="font-bold">Example:</span> Mansabdar gets Zat 3000 rank (must maintain 3000 soldiers). Assigned Jagir expected to yield revenue for 3000-soldier unit. Jagirdar collects taxes, pays soldiers from collection, keeps remainder. <span className="font-bold">Crisis linkage:</span> If too many Mansabdars created (Aurangzeb's problem), insufficient Jagirs to pay them. Frustrated nobles. If Jagir revenue declined (bad harvests, corruption, peasant flight), couldn't pay soldiers. Military morale collapsed. <span className="font-bold">Dependency:</span> Elite depended entirely on empire for Jagir assignments. Couldn't accumulate hereditary wealth (transferred every few years). Forced to stay loyal to get next good posting.</p>
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
              <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - How the Three Pillars Connected</h2>
              <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'synthesis' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-blue-900 to-green-900 p-4 rounded">
                  <p className="font-bold text-blue-200 mb-2">Central → Provincial: Policy Implementation</p>
                  <p>CENTRAL ADMINISTRATION designed policy & appointed officers. These officers deployed in PROVINCIAL ADMINISTRATION to enforce policy. Emperor set direction, Wazir managed finances, Mir Bakshi managed military. These directives filtered down through Subahdars & Diwans. Checks at center (Wazir vs. Mir Bakshi) replicated at province (Subahdar vs. Diwan). System ensured no single provincial officer had unchecked power. Prevents rebellion, maintains loyalty.</p>
                </div>
                <div className="bg-linear-to-r from-green-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-green-200 mb-2">Provincial → Revenue: Authority Backed by Force</p>
                  <p>PROVINCIAL ADMINISTRATION enforced REVENUE ADMINISTRATION through military power. Subahdar & Faujdar ensured peasants paid taxes (coercion if necessary). Without provincial military enforcement, peasants would refuse to pay taxes. Farmers = base of economy but also potential rebels. Provincial military kept them in line, made tax collection possible. Revenue system collected; provincial military enforced collection.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-blue-900 p-4 rounded">
                  <p className="font-bold text-orange-200 mb-2">Revenue → Central: Funding the Entire State</p>
                  <p>REVENUE ADMINISTRATION funded CENTRAL ADMINISTRATION entirely. Revenue from Khalisa lands went to royal treasury (funded emperor's wars, monuments). Revenue from Jagirs funded elite salaries (maintained Mansabdari system, army). Revenue from Inam funded religious loyalty (temples, scholars). Without steady agricultural revenue, empire couldn't function. Collapse of revenue system = collapse of empire (happened in 18th century). Revenue WAS the base everything else rested on.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-orange-500 mt-4">
                  <p className="font-bold text-orange-300">The Complete System:</p>
                  <p>CENTRAL ADMINISTRATION set policy, managed finances, appointed all officers, maintained emperor's authority. PROVINCIAL ADMINISTRATION implemented policy through Subahdars, Diwans, Faujdars, Kotwals. Checks between military (Subahdar) & finance (Diwan) prevented provincial rebellions. REVENUE ADMINISTRATION classified land, assessed taxes, allocated Jagirs, maintained land records. System was UNIFIED vertically: emperor → Wazir → Subahdar → Faujdar; and horizontally: Diwan watching Subahdar, Provincial Diwan watching Faujdar. FUNDING came from Khalisa lands (direct), Jagirs (elite-collected), Inam (religious loyalty). CONTROL came from frequent Jagir transfer (Paibaqi), Mansabdari rank system (advancement through loyalty), intelligence networks (Mir Bakshi spymaster). RESILIENCE came from replicated structure (if one Subah rebelled, others remained loyal; if one officer corrupted, others checked him). COHERENCE came from Islamic law framework (Qazis, Sadr overseeing justice) + Islamic legitimacy (emperor as Protector of Islam). System was sophisticated, balanced, self-correcting (in theory). Worked brilliantly under strong emperors (Akbar, Shah Jahan). Collapsed when emperor weak or obsessed with conquest (Aurangzeb's Deccan wars, 18th-century succession conflicts) because system depended on central authority & constant oversight.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Provincial Checks & Balances</p>
                  <p className="mb-2">How did Mughal administration create a system of checks & balances at provincial level between Subahdar & Provincial Diwan? What was primary responsibility of each?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: SUBAHDAR = Provincial governor, military commander. Kept peace, suppressed rebellions, controlled provincial army. PRIMARY RESPONSIBILITY = law & order, military defense, force-backed tax collection. PROVINCIAL DIWAN = Financial manager, appointed by central Diwan (not by Subahdar). Managed provincial revenue, finances, tax collection, kept financial records. PRIMARY RESPONSIBILITY = accurate revenue assessment, tax record-keeping, reporting to center. CHECKS & BALANCES: Neither alone could govern effectively. If Subahdar tried rebellion, Diwan could cut his funds—no money for army = can't rebel. If Diwan tried embezzlement, Subahdar could use military to punish him (though Diwan reported to center for protection). SEPARATION OF POWER = classic check-and-balance. Subahdar = executive power (military), Diwan = financial power. Both reported separately to center—Subahdar to Mir Bakshi militarily, Diwan to central Diwan financially, both to emperor. Tension between them = feature, not bug. Referee = emperor. RESULT: No single provincial officer had unchecked power. Rebellion difficult (Diwan could deny funds), embezzlement difficult (Subahdar's military could intervene), corruption difficult (both watched by center). System was brilliant under strong emperor, failed under weak emperor (no referee).</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Fiscal-Military Loop - Mansabdari & Jagirdari Connection</p>
                  <p className="mb-2">Explain direct connection between Mansabdari system (rank) & Jagirdari system (payment). How did crisis in one inevitably cause crisis in other?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: DIRECT LINK: Mansabdari = rank system determining how many soldiers officer must maintain. Jagirdari = salary system assigning land revenue to pay officers. Rank determines salary requirement; Jagir provides salary. Mansabdar with Zat 3000/Sawar 2000 must maintain 3000 soldiers. Requires Jagir of equivalent revenue. If rank increases, Jagir must increase proportionally. If Jagir decreases (bad harvest, corruption), can't pay soldiers. CRISIS LINKAGE: When too many Mansabdars created (like Aurangzeb), not enough Jagirs to assign. Frustrated nobles. "I have Zat 2000 rank but assigned Jagir worth only 1000—where's my extra salary?" CONSEQUENCE #1: Nobles resentful, disloyal. CONSEQUENCE #2: Can't maintain full soldier contingent—military quality declines. CONSEQUENCE #3: Diwan-i-Tan under impossible pressure trying to allocate insufficient Jagirs. Corruption emerges—bribes to get better Jagir, false records, etc. CONSEQUENCE #4: If Jagir revenue declines (peasants flee due to oppressive taxation, harvests fail), Mansabdar can't pay soldiers even if Jagir assignment stays same. Soldiers desert, morale collapses. VICIOUS CYCLE: Aurangzeb's Deccan wars required more soldiers = more Mansabdars created = insufficient Jagirs = corruption & discontent = military morale collapse = Deccan wars prolonged (desperate measures) = higher taxation = peasant flight = Jagir revenue declines = even fewer resources = more chaos. ONE SYSTEM'S CRISIS = OTHER SYSTEM'S CRISIS. Can't separate them.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Control & Loyalty - Khalisa Lands & Jagir Transfer</p>
                  <p className="mb-2">Diwan-i-Khalisa (Crown Lands) & practice of frequent Jagir transfer (Paibaqi) served same core purpose for Emperor. What was that purpose?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: CORE PURPOSE = MAINTAINING CENTRAL IMPERIAL CONTROL & PREVENTING LOCAL POWER BASES. KHALISA LANDS: Crown lands (best land) directly controlled by emperor through Diwan-i-Khalisa. Revenue went to royal treasury, not to Jagirdars. WHY? Ensures emperor always has independent revenue source. Doesn't depend entirely on Wazir's treasury. Can fund imperial armies, monuments, gifts without asking Wazir. CONTROL MECHANISM: Keeps portion of land under direct control = keeps portion of revenue independent. PAIBAQI (Frequent Transfer): Jagirs transferred every few years to different Mansabdars. WHY? If Jagir stays in family permanently, Jagirdar eventually feels he owns land (hereditary, not temporary). Stops obeying emperor (why care? it's mine anyway). Becomes local king instead of imperial servant. By rotating Jagirs, prevents permanent local dynasties. Forces Jagirdars to remain dependent on emperor for next posting. Always loyal to get next good assignment. PSYCHOLOGICAL MECHANISM: Jagirdar never secure. Could get better Jagir (if loyal), worse Jagir (if disloyal), or no Jagir (if rebellious). Kept in constant state of dependence. BOTH SERVE SAME PURPOSE: Khalisa = emperor's direct control & independence. Paibaqi = prevents Jagirdars' independence & local power. TOGETHER: Emperor maintains control of all land (directly through Khalisa, indirectly through rotating Jagir assignments). Elite forced to stay loyal (dependent on emperor for good postings). No feudal local nobles (who would own land & challenge emperor). System brilliant for centralization = fatal flaw when empire fragmented (18th century—transferred Jagirs became hereditary when central authority weakened, creating exactly the local dynasties that tore empire apart).</p>
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
                  <p className="font-semibold text-blue-300">Diwan-i-Wizarat (Revenue Ministry)</p>
                  <p>Central department headed by Wazir/Vakil. Managed imperial revenue, finances, budget. Appointed provincial Diwans. Oversaw all revenue officials. Most important ministry—controlled money = controlled empire.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Diwan-i-Arz (Military Ministry)</p>
                  <p>Department headed by Mir Bakshi. Managed Mansabdari system—recruitment, payment, promotion, intelligence. Spymaster role. Gatekeeper to imperial favor through rank promotion. Musters soldiers, checked fitness.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Diwan-i-Khalisa (Crown Lands Ministry)</p>
                  <p>Department directly under emperor. Managed Crown Lands revenue. Most valuable lands, went directly to royal treasury. Made emperor financially independent from Wazir. Key check on executive power.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Wazir/Vakil</p>
                  <p>Prime Minister. Head of Diwan-i-Wizarat. Managed imperial finances, supervised Diwans. Most powerful minister after emperor. Highest rank in Mansabdari system. Direct access to emperor.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Mir Bakshi</p>
                  <p>Military administrator, head of Diwan-i-Arz. Managed Mansabdari system, promotions, salary payment. Spymaster with intelligence network. Controlled who gets command of armies through rank assignment.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Sadr-us-Sudur</p>
                  <p>Head of religious & judicial ministry. Appointed Qazis, oversaw Islamic law. Distributed charity (Zakat). Provided religious legitimacy for empire. Parallel importance to Wazir in spiritual matters.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Subah (Province)</p>
                  <p>Major administrative unit. Empire divided into 15 Subahs. Headed by Subahdar (governor), usually high-ranking Mansabdar. Each Subah had own Diwan reporting to center, creating check on Subahdar.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-indigo-500">
                  <p className="font-semibold text-indigo-300">Subahdar (Governor)</p>
                  <p>Provincial governor, military commander. Kept peace, suppressed rebellion, controlled provincial military. Powerful but monitored by Provincial Diwan & Mir Bakshi. Could be transferred/removed.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Provincial Diwan</p>
                  <p>Financial manager of province, appointed by central Diwan. Reported separately to center. Checked Subahdar's power through financial oversight. Neither officer could act alone—separated authority.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-lime-500">
                  <p className="font-semibold text-lime-300">Sarkar (District)</p>
                  <p>Subdivision of province. Each province divided into 5-10 Sarkars. Headed by Faujdar (district commander). Layer of local administration between province & villages.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-rose-500">
                  <p className="font-semibold text-rose-300">Faujdar</p>
                  <p>District commander, usually Mansabdar rank 500-2000. Maintained law & order, suppressed dacoits, collected taxes, defended district. Combined police + military functions. Reported to Subahdar.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-teal-500">
                  <p className="font-semibold text-teal-300">Kotwal</p>
                  <p>Town magistrate & police chief. Policing, census, price controls, sanitation. Combined law enforcement + public health + economic regulation. Shows sophisticated urban administration.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-amber-300">Khalisa (Crown Lands)</p>
                  <p>Crown lands directly controlled by emperor. Best agricultural land (~20% of cultivated). Revenue went directly to royal treasury. Managed by Diwan-i-Khalisa. Made emperor financially independent.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-400">
                  <p className="font-semibold text-orange-200">Jagir (Assignment Land)</p>
                  <p>Land assignment to Mansabdar as salary. Jagirdar collected taxes but didn't own land. Frequent transfer (Paibaqi) prevented hereditary dynasties. Tied elite loyalty to constant reassignment.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-sky-500">
                  <p className="font-semibold text-sky-300">Inam (Grant Land)</p>
                  <p>Revenue-free land granted to religious scholars, temples, favored nobles. No taxes collected. Created loyal stakeholder class. Cheaper than paying salary from treasury.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-violet-500">
                  <p className="font-semibold text-violet-300">Zabt/Bandobast (Land Measurement)</p>
                  <p>Regular measurement & survey of land. Updated every 5-10 years. Recorded field dimensions, soil quality, irrigation access. Accurate measurement = accurate tax assessment. Prevented Jagirdars' false claims.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-fuchsia-500">
                  <p className="font-semibold text-fuchsia-300">Dahlsal (Tax Assessment)</p>
                  <p>Assessment of tax rates based on land quality. Different rates for irrigated vs. unirrigated. Temple lands assessed as zero. System tried to be rational & proportional.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-400">
                  <p className="font-semibold text-green-200">Diwan-i-Tan (Jagir Department)</p>
                  <p>Department responsible for allocating Jagirs. Matched Mansabdar ranks to appropriate Jagir values. Tried to prevent discontent from rank-Jagir mismatches. Critical to elite morale.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-400">
                  <p className="font-semibold text-red-200">Paibaqi (Jagir Transfer)</p>
                  <p>Frequent transfer of Jagirs every few years to different Mansabdars. Prevented hereditary Jagirdars, local dynasties. Maintained elite dependence on emperor for good postings. Control mechanism for centralization.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-blue-900 to-orange-900 rounded-lg border border-blue-700">
          <p className="text-blue-200">
            <span className="font-bold">💡 Remember:</span> Mughal administration was SOPHISTICATED SYSTEM of CHECKS & BALANCES. Emperor at top had absolute authority but depended on capable ministers. Central Administration (Wazir, Mir Bakshi, Sadr) designed policy but had separate jurisdictions (prevented any single minister's dominance). Provincial Administration replicated central structure—Subahdar (military) vs. Diwan (financial)—prevented provincial rebellion. Revenue Administration classified land, assessed taxes, allocated Jagirs—funded entire system. System was BRILLIANT UNDER STRONG EMPERORS (Akbar, Shah Jahan) who actively managed tensions between officials. COLLAPSED UNDER WEAK EMPERORS or emperors obsessed with conquests (Aurangzeb's Deccan = neglected center). KEY TO SYSTEM = CENTRAL OVERSIGHT. Frequent transfers (Paibaqi), regular reassessments (Zabt), intelligence networks (Mir Bakshi)—all required constant central vigilance. When central authority weakened, system decayed. Jagirs became hereditary (should be temporary). Officials ignored transfer orders (should be rotated). Corruption flourished (should be checked). HISTORICAL LESSON: Administrative system only works as well as the authority enforcing it. Brilliant structures mean nothing if emperor can't/won't enforce them. By 18th century, Mughal emperors lacked power to maintain system discipline → system collapsed → regional powers filled void → empire fragmented. System was TOOL—good as the hand wielding it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MughalAdministrationNotes;
