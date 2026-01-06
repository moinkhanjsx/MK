import React from 'react';

const PartOneShivaji = ({ expandedSection, toggleSection }) => (
  <>
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
            <h3 className="font-semibold text-blue-200 mb-2">👨‍👩‍👦 Formative Influences & Early Life</h3>
            <p>
              The people, values, and environment that shaped Shivaji's vision and character. <span className="font-bold">SHAHAJI BHONSLE (father)</span> = military adventurer providing legacy of ambition. <span className="font-bold">JIJABAI (mother)</span> = primary ideological influence instilling Hindavi Swarajya (self-rule), dharma, administrative wisdom. <span className="font-bold">DADOJI KONDDEV (guardian/teacher)</span> = practical training in land revenue management, administration, fortification from managing Pune jagir.
            </p>
          </div>
          <div className="bg-orange-900 p-4 rounded">
            <h3 className="font-semibold text-orange-200 mb-2">⚙️ Central Administration (Ashtapradhan Mandal)</h3>
            <p>
              Council of EIGHT MINISTERS forming brain of state, ensuring specialized & accountable governance. <span className="font-bold">PESHWA</span> (Prime Minister), <span className="font-bold">AMATYA</span> (Finance), <span className="font-bold">MANTRI</span> (Intelligence), <span className="font-bold">SENAPATI</span> (Military Commander), <span className="font-bold">SUMANT</span> (Foreign Affairs), <span className="font-bold">NYAYADHISH</span> (Justice), <span className="font-bold">PANDITRAO</span> (Religious Affairs), <span className="font-bold">SACHIV</span> (Royal Orders & Accounts). No single point of failure = distributed power.
            </p>
          </div>
          <div className="bg-green-900 p-4 rounded">
            <h3 className="font-semibold text-green-200 mb-2">🏰 Military System & Fort Administration</h3>
            <p>
              Organizational & tactical innovations allowing smaller force to challenge empires. <span className="font-bold">MAVLE INFANTRY</span> = highly mobile soldiers from Western Ghats, expert in guerilla tactics. <span className="font-bold">NAVY</span> = pioneering maritime force challenging Portuguese/Siddis, securing Konkan coast & trade. <span className="font-bold">FORT NETWORK</span> (300+ forts) = dual-control system with HAVALDAR (military commandant) + SABNIS (civilian revenue officer). <span className="font-bold">GANIMI KAVA</span> (Guerilla Warfare) = mobility, surprise, attrition using terrain advantage against larger conventional armies.
            </p>
          </div>
          <div className="bg-purple-900 p-4 rounded">
            <h3 className="font-semibold text-purple-200 mb-2">💰 Revenue & Economic System</h3>
            <p>
              Taxation principles funding state while ensuring peasant loyalty & expanding political influence. <span className="font-bold">RYOTWARI PRINCIPLE</span> = direct tax link with peasant (Ryot), bypassing exploitative middlemen. <span className="font-bold">CHAUTH (25%)</span> = protection tax on neighboring territories (Mughal, Bijapur); paid = no raids, tool for revenue + political influence. <span className="font-bold">SARDESHMUKHI (10%)</span> = additional levy as hereditary "Sardeshmukh" (chief overlord) of Maharashtra, claimed on top of Chauth.
            </p>
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
        <h2 className="text-xl font-bold text-white">2️⃣ First Principles for Each Chunk</h2>
        <span className="text-2xl">{expandedSection === 'principles' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'principles' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
          <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
            <p className="font-semibold text-blue-200 mb-2">1. Formative Influences - The Trinity of Vision</p>
            <p>
              <span className="font-bold">SHAHAJI BHONSLE:</span> Military adventurer serving Deccan Sultanates. Provided LEGACY OF AMBITION & MILITARY SKILL. But Shivaji's kingdom was independent project, not continuation of father's service. <span className="font-bold">JIJABAI:</span> PRIMARY IDEOLOGICAL INFLUENCE. Instilled sense of HINDAVI SWARAJYA (self-rule for Hindu Marathi people), dharma (righteous duty), administrative wisdom. She was architect of his worldview. <span className="font-bold">DADOJI KONDDEV:</span> Administrator of Pune jagir, practical mentor. Taught GROUND-LEVEL SKILLS: land revenue management, administrative procedures, fort building & maintenance. Theory (Jijabai) + Practice (Dadoji) = Complete statesman. These three influences created leader who combined ideological vision with practical administrative capability & military heritage.
            </p>
          </div>
          <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
            <p className="font-semibold text-orange-200 mb-2">2. Ashtapradhan Mandal - Specialization & Checks</p>
            <p>
              COORDINATED COUNCIL OF EIGHT MINISTERS with clearly defined roles. NO SINGLE POINT OF FAILURE. Each minister specialized in domain: <span className="font-bold">PESHWA</span> = general administration & council coordination (later became hereditary Prime Minister under Peshwa rule). <span className="font-bold">AMATYA</span> = managed state income, expenditure, treasury (finance minister). <span className="font-bold">MANTRI</span> = intelligence, espionage, royal correspondence (interior minister + spy chief). <span className="font-bold">SENAPATI</span> = military organization, recruitment, operations (commander-in-chief). <span className="font-bold">SUMANT</span> = diplomacy & relations with other states (foreign minister). <span className="font-bold">NYAYADHISH</span> = civil & criminal justice (chief justice). <span className="font-bold">PANDITRAO</span> = religious affairs, charity, ritual guidance (high priest). <span className="font-bold">SACHIV</span> = drafted royal orders, checked accounts (secretary + accountant general). PRINCIPLE: Distributed responsibility prevented concentration of power. Each minister accountable to Shivaji but had autonomy in domain. Failure in one area didn't collapse entire system. Modern equivalent = Cabinet system with portfolio ministers.
            </p>
          </div>
          <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
            <p className="font-semibold text-green-200 mb-2">3. Military System - Asymmetric Warfare Architecture</p>
            <p>
              <span className="font-bold">MAVLE INFANTRY:</span> Recruited from Western Ghats hill tribes. HIGHLY MOBILE, LOYAL, TERRAIN-EXPERT. Not heavily armored (mobility over protection). Expert climbers, knew mountain passes, could march long distances quickly. <span className="font-bold">NAVY:</span> PIONEERING INNOVATION. Built fleet to protect Konkan coast (400km coastline), challenge European Portuguese control of sea trade, fight Siddis of Janjira, secure maritime revenue. Ships built at shipyards in Kalyan, Bhivandi. <span className="font-bold">FORT NETWORK:</span> Over 300 forts = backbone of defense & territorial control. DUAL-CONTROL SYSTEM: HAVALDAR (military commandant—defense, garrison, weapons) + SABNIS (civilian officer—revenue collection, supplies, records). This prevented military commander from becoming autonomous warlord (couldn't control finances) & ensured fort remained administratively functional even during siege. <span className="font-bold">GANIMI KAVA (Guerilla Warfare):</span> Doctrine of MOBILITY, SURPRISE, ATTRITION. Used terrain (mountains, forests) to negate advantage of larger Mughal/Adilshahi conventional armies. Ambush supply convoys, raid isolated garrisons, retreat to forts when pursued, avoid pitched battles unless overwhelming advantage. Goal = make occupation unsustainable through persistent harassment. PRINCIPLE: When conventionally weaker, change rules of engagement. Make enemy's strengths (size, artillery, cavalry) irrelevant by denying them favorable battlefield.
            </p>
          </div>
          <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
            <p className="font-semibold text-purple-200 mb-2">4. Revenue System - Direct Extraction & Political Tribute</p>
            <p>
              <span className="font-bold">RYOTWARI PRINCIPLE:</span> State established DIRECT TAX LINK with peasant (Ryot), bypassing zamindars/jagirdars (feudal intermediaries). Land surveyed, assessment based on productivity, peasant paid directly to state collectors. ADVANTAGE: Fair assessment (no middleman exploitation), peasant loyalty (knew state protected them from feudal lords), state got full revenue (no leakage to intermediaries). Precursor to British Ryotwari system. <span className="font-bold">CHAUTH (25%):</span> PROTECTION TAX levied on neighboring territories (Mughal Deccan, Bijapur, Golconda). "Pay us 1/4 of your land revenue, we won't raid you." Not conquest—POLITICAL BLACKMAIL/PROTECTION RACKET. Territory remained under original ruler, but paid Marathas for peace. Generated massive revenue WITHOUT administrative burden of direct rule. Extended Maratha influence far beyond core territory. <span className="font-bold">SARDESHMUKHI (10%):</span> ADDITIONAL LEVY claimed by Shivaji as hereditary SARDESHMUKH (chief headman/overlord) of entire Maharashtra region. Historical claim to overlordship. Collected on top of Chauth. Total extraction from neighboring territories = 35% of their revenue. PRINCIPLE: Ryotwari funded core state. Chauth + Sardeshmukhi funded military expansion & created political dependence. Enemies paid for their own potential conquest.
            </p>
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
        <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Ganimi Kava (Guerilla Warfare)</h2>
        <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'whys' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
          <div className="bg-gray-900 p-3 rounded">
            <p className="font-semibold text-yellow-300">Why #1: Why was guerrilla warfare used?</p>
            <p>Because Maratha force was initially MUCH SMALLER & LESS EQUIPPED than established imperial armies (Mughal, Adilshahi Bijapur). Couldn't win conventional pitched battles. Needed different approach.</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="font-semibold text-yellow-300">Why #2: Why did smaller forces succeed with this method?</p>
            <p>It exploited enemy's WEAKNESSES: slow-moving heavy artillery (immobile in mountains), long vulnerable supply lines (easy to raid), unfamiliarity with Deccan terrain (Marathas knew every pass, valley, water source). Enemy's conventional strengths became liabilities in guerilla context.</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="font-semibold text-yellow-300">Why #3: What was the core tactical advantage?</p>
            <p>
              <span className="font-bold">INITIATIVE & ASYMMETRY.</span> Shivaji's forces CHOSE when, where, how to fight. Ambush convoys at narrow passes (enemy can't deploy full force). Cut supply lines to starving garrisons. Harass isolated units. When enemy pursues, retreat to mountain forts (impregnable to conventional siege). Fight only when overwhelming local advantage. Enemy constantly reactive, never able to bring full strength to bear.
            </p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="font-semibold text-yellow-300">Why #4: What was the root strategic mechanism?</p>
            <p>
              <span className="font-bold">ATTRITION & PSYCHOLOGICAL WARFARE.</span> Goal was NOT to win pitched battles but to ERODE enemy's will, resources, morale over time. Every convoy lost = supplies don't reach army. Every garrison harassed = troops exhausted, afraid. Every failed expedition = political embarrassment, financial drain. Make continued occupation POLITICALLY & FINANCIALLY UNSUSTAINABLE. Eventually enemy concludes: "This territory costs more to hold than it's worth."
            </p>
          </div>
          <div className="bg-amber-900 bg-opacity-40 p-4 rounded border-l-4 border-amber-500 mt-4">
            <p className="font-bold text-amber-200">Why #5 (Root Truth):</p>
            <p>
              Shivaji was master of ASYMMETRIC CONFLICT. He turned Marathas' geographical knowledge, mobility, lack of formal baggage (no heavy artillery to slow them) into STRATEGIC ADVANTAGE. Proved that resilient, ideologically motivated force could REDEFINE RULES OF WAR against conventional power. Not about winning battles—about making enemy's victory so costly it becomes defeat. Core truth: In asymmetric conflict, weaker side wins by CHANGING THE GAME, not playing enemy's game better. Mughals played chess (formal battles, territorial control). Shivaji played guerrilla warfare (attrition, mobility, will-breaking). Different rule sets = Mughal advantages neutralized.
            </p>
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
        <h2 className="text-xl font-bold text-white">4️⃣ Feynman Technique (Explain to 12-Year-Old)</h2>
        <span className="text-2xl">{expandedSection === 'feynman' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'feynman' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
          <div className="bg-linear-to-r from-blue-900 to-orange-900 p-4 rounded">
            <p className="font-semibold text-blue-200 mb-2">🦊 The Smart Fox vs. Big Bear</p>
            <p>
              Imagine a clever young prince, SHIVAJI, growing up in hills of Maharashtra. His mom taught him about justice & ruling for the people. His teacher taught him how to manage land & money. When he started his own kingdom, he knew he couldn't beat huge Mughal army in straight fight. So he played DIFFERENT GAME—like smart fox against big bear.
            </p>
          </div>
          <div className="bg-linear-to-r from-orange-900 to-green-900 p-4 rounded">
            <p className="font-semibold text-orange-200 mb-2">⚔️ The Mountain Fighters</p>
            <p>
              His tough hill soldiers (<span className="font-bold">MAVLE</span>) would set AMBUSHES in mountains, attack supply carts, then DISAPPEAR into forests. This was <span className="font-bold">GUERILLA WARFARE</span>. Like playing hide-and-seek but with swords. Enemy gets frustrated—can't catch you, keeps losing supplies, soldiers get tired & scared.
            </p>
          </div>
          <div className="bg-linear-to-r from-green-900 to-purple-900 p-4 rounded">
            <p className="font-semibold text-green-200 mb-2">🏰 The Hilltop Bases</p>
            <p>
              He built HUNDREDS OF FORTS on hilltops as secure bases. Each fort had TWO BOSSES: one for fighting (<span className="font-bold">HAVALDAR</span>) & one for managing supplies & money (<span className="font-bold">SABNIS</span>). This way, fighting boss couldn't become dictator (didn't control money), & forts could hold out for ages because supplies were well-managed.
            </p>
          </div>
          <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
            <p className="font-semibold text-purple-200 mb-2">👥 The Team of Eight Experts</p>
            <p>
              To run kingdom, he had team of EIGHT TOP EXPERTS (<span className="font-bold">ASHTAPRADHAN</span>)—one for money (<span className="font-bold">AMATYA</span>), one for army (<span className="font-bold">SENAPATI</span>), one for spying (<span className="font-bold">MANTRI</span>), one for laws (<span className="font-bold">NYAYADHISH</span>), etc. Like well-coordinated sports team where everyone has specific position.
            </p>
          </div>
          <div className="bg-linear-to-r from-pink-900 to-red-900 p-4 rounded">
            <p className="font-semibold text-pink-200 mb-2">💰 The Smart Money System</p>
            <p>
              For money, he made sure FARMERS PAID TAXES DIRECTLY to him, cutting out greedy middlemen (<span className="font-bold">RYOTWARI</span>). Fair for farmers, more money for him. He also told richer neighboring lands: "Pay me quarter of your taxes as PROTECTION FEE (<span className="font-bold">CHAUTH</span>), & I won't raid you." This made him powerful & funded his army. Genius at using clever tricks, strong forts, fair rules, & smart taxes to build powerful kingdom from scratch!
            </p>
          </div>
        </div>
      )}
    </div>

    {/* Synthesis Section */}
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection('synthesis')}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - How Everything Connects</h2>
        <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'synthesis' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
          <div className="bg-linear-to-r from-blue-900 to-orange-900 p-4 rounded">
            <p className="font-bold text-blue-200 mb-2">How the Chunks Connect</p>
            <p>
              The <span className="font-bold">FORMATIVE INFLUENCES</span> (Jijabai's vision + Dadoji's training + Shahaji's legacy) provided VISION & INITIAL SKILLS. To realize this vision, Shivaji built <span className="font-bold">CENTRAL ADMINISTRATION (Ashtapradhan)</span> for governance, <span className="font-bold">MILITARY SYSTEM</span> for security & expansion, <span className="font-bold">REVENUE SYSTEM</span> to fund both. The <span className="font-bold">GUERILLA TACTICS</span> allowed smaller state to SURVIVE against empires (couldn't be conquered conventionally), while <span className="font-bold">RYOTWARI & CHAUTH</span> systems provided sustainable income & extended political influence beyond core territory without administrative burden of direct conquest.
            </p>
          </div>
          <div className="bg-linear-to-r from-orange-900 to-green-900 p-4 rounded">
            <p className="font-bold text-orange-200 mb-2">Mapping Analogies to Reality</p>
            <p>
              "Smart fox vs. big bear" = <span className="font-bold">GANIMI KAVA</span> (guerilla warfare—asymmetric conflict where weaker side changes rules). "Hilltop bases with two bosses" = <span className="font-bold">FORTS with HAVALDAR & SABNIS</span> (dual control preventing power concentration). "Team of eight experts" = <span className="font-bold">ASHTAPRADHAN MANDAL</span> (specialized ministerial council). "Protection fee" = <span className="font-bold">CHAUTH</span> (25% tax on neighboring territories for not being raided). "Direct farmer tax" = <span className="font-bold">RYOTWARI</span> (eliminating exploitative intermediaries).
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded border-l-4 border-green-500">
            <p className="font-bold text-green-300 mb-2">Complete Paragraph Summary (Feynman Style)</p>
            <p>
              Inspired by his mother & teacher, Shivaji built kingdom using clever mountain warfare to beat bigger enemies. He ran it with team of eight specialist ministers, funded it by taxing farmers directly & charging nearby areas protection fee. He secured his land with network of well-run hill forts. His mix of smart fighting, fair taxes, & good management made Marathas major power. The guerilla warfare made him unconquerable, the administrative system made his state functional, the revenue system made it financially sustainable, & the fort network made it physically secure. All four pillars reinforced each other—can't have successful guerilla campaign without secure fort bases, can't maintain forts without revenue, can't collect revenue without administrative system, can't build administrative system without military security. INTEGRATED SYSTEM where each component enabled others.
            </p>
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
            <p className="font-bold text-blue-300 mb-2">Q1: Checks & Balances in Fort Administration</p>
            <p className="mb-2">How did the dual administration of forts (Havaldar and Sabnis) prevent any single officer from becoming too powerful and ensure the fort's effectiveness?</p>
            <p className="text-gray-400 text-sm">💡 Answer: The DUAL-CONTROL SYSTEM created SEPARATION OF POWERS at fort level. <span className="font-bold">HAVALDAR</span> = military commandant responsible for DEFENSE: garrison management, weapons maintenance, military discipline, fortification repairs, combat readiness. <span className="font-bold">SABNIS</span> = civilian administrative officer responsible for SUPPLIES & REVENUE: food storage, revenue collection from fort's villages, financial accounts, civilian administration. <span className="font-bold">WHY THIS PREVENTED POWER CONCENTRATION:</span> Havaldar controlled soldiers but NOT finances (couldn't pay them independently = couldn't rebel). Sabnis controlled money but NOT military force (couldn't use garrison for personal gain). Both reported DIRECTLY to Shivaji. If Havaldar became corrupt, Sabnis could report financial irregularities. If Sabnis mismanaged, Havaldar could report supply problems affecting defense. <span className="font-bold">ENSURED EFFECTIVENESS:</span> Military readiness (Havaldar's job) couldn't be neglected because supplies (Sabnis's job) were managed separately. Fort remained combat-ready (Havaldar) while being financially sustainable (Sabnis). During siege, Havaldar managed defense while Sabnis managed rationing. NEITHER could become autonomous warlord. Modern equivalent = military base with commanding officer (military) + base administrator (civilian logistics). Prevents military coup from single rogue commander.</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-bold text-blue-300 mb-2">Q2: Ryotwari vs. Jagirdari - Fundamental Difference</p>
            <p className="mb-2">Shivaji's Ryotwari principle and the Mughal Jagirdari system represented two different relationships between the state and the peasant. What was the fundamental difference?</p>
            <p className="text-gray-400 text-sm">💡 Answer: <span className="font-bold">RYOTWARI (Shivaji)</span> = DIRECT relationship. State surveyed land, assessed productivity, peasant (Ryot) paid tax DIRECTLY to state revenue collectors. NO intermediaries. <span className="font-bold">ADVANTAGES:</span> Fair assessment (based on actual land quality, not arbitrary), peasant knew exact obligation, state received full revenue (no leakage), peasant had direct recourse to state if oppressed. Created PEASANT LOYALTY—they knew Shivaji protected them from feudal exploitation. <span className="font-bold">JAGIRDARI (Mughal)</span> = INDIRECT relationship through INTERMEDIARIES. Emperor granted land revenue rights (Jagir) to military officers (Mansabdars/Jagirdars) as salary. Jagirdar collected revenue from peasants, kept portion, sent remainder to state. <span className="font-bold">PROBLEMS:</span> Jagirdars maximized extraction (temporary assignment = squeeze peasants while possible), peasants had no protection from exploitation, state revenue uncertain (depended on Jagirdar's honesty), Jagirdars became mini-kings in their territories. <span className="font-bold">FUNDAMENTAL DIFFERENCE:</span> Ryotwari = state treated peasant as DIRECT SUBJECT with rights. Jagirdari = peasant was subject of Jagirdar, not directly of emperor. Ryotwari built STATE-PEASANT BOND. Jagirdari created FEUDAL HIERARCHY where intermediary's interest conflicted with both state & peasant. Shivaji's system made peasants stakeholders in Maratha state success. Mughal system made peasants victims of Jagirdar's greed. LONG-TERM IMPACT: Marathas had loyal peasant base. Mughals faced peasant revolts when Jagirdars over-extracted.</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-bold text-blue-300 mb-2">Q3: Chauth & Sardeshmukhi - Political Statement</p>
            <p className="mb-2">The taxes Chauth and Sardeshmukhi were more than just revenue tools. What political statement did their collection make, and how did they help expand Maratha influence without direct conquest?</p>
            <p className="text-gray-400 text-sm">💡 Answer: <span className="font-bold">CHAUTH (25%)</span> = "protection tax" on Mughal/Bijapur territories. <span className="font-bold">SARDESHMUKHI (10%)</span> = overlordship tax as hereditary Sardeshmukh. Combined 35% of territory's revenue. <span className="font-bold">POLITICAL STATEMENT:</span> Collection asserted that Marathas were PARALLEL POWER to Mughals in Deccan. By demanding & collecting these taxes, Shivaji said: "Your nominal sovereignty over this land is acknowledged, but you PAY US to maintain it." Flipped power dynamic—Mughals technically ruled but PAID Marathas for privilege. Sardeshmukhi claim = "I am hereditary overlord of ALL Maharashtra; you're temporary occupier." Challenged Mughal legitimacy by asserting deeper historical claim. <span className="font-bold">EXPANDING INFLUENCE WITHOUT CONQUEST:</span> Traditional conquest = defeat army, occupy territory, install administration, garrison troops, collect revenue. EXPENSIVE & RISKY. Chauth/Sardeshmukhi = take 35% of revenue WITHOUT administrative burden. Original ruler stayed in place (doing administrative work), Marathas just collected tribute. <span className="font-bold">ADVANTAGES:</span> Generated MASSIVE revenue with MINIMAL costs (small force to enforce collection, no occupation garrisons needed). Extended Maratha POLITICAL INFLUENCE far beyond core territory—territories paying tribute became DEPENDENT. Created web of tributary relationships making Marathas regional hegemon without formal empire. If ruler stopped paying, Maratha raids devastated territory. If ruler paid, Marathas protected them from other raiders. <span className="font-bold">MECHANISM:</span> Created situation where paying tribute was CHEAPER than resistance. Made Maratha power SELF-FUNDING—expansion paid for itself through tribute. By 18th century, Marathas collected Chauth from territories across India—Delhi, Bengal, Hyderabad. Became effective rulers through economic extraction without formal conquest. BRILLIANT political innovation turning military threat into sustainable revenue stream & political hegemony.
            </p>
          </div>
        </div>
      )}
    </div>
  </>
);

export default PartOneShivaji;
