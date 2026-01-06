import React from 'react';

const PartTwoPeshwa = ({ expandedSection, toggleSection }) => (
  <>
    {/* PART II: PESHWA ERA HEADER */}
    <div className="p-6 bg-linear-to-r from-purple-900 to-blue-900 border border-purple-700 rounded-lg text-center mt-8">
      <h2 className="text-3xl font-bold text-purple-200 mb-2">Part II: The Peshwa Era (1707-1818)</h2>
      <p className="text-purple-300 font-semibold">From Kingdom to Confederacy - Rise, Zenith & Panipat Catastrophe</p>
    </div>

    {/* Peshwa Era Chunking */}
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection('peshwaChunking')}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-white">1️⃣ Peshwa Era Chunking & Deconstruction</h2>
        <span className="text-2xl">{expandedSection === 'peshwaChunking' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'peshwaChunking' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
          <div className="bg-blue-900 p-4 rounded">
            <h3 className="font-semibold text-blue-200 mb-2">🏛️ Foundations: Balaji Vishwanath (1713-1720)</h3>
            <p>
              The Peshwa who secured Maratha POLITICAL LEGITIMACY & stable revenue from weakened Mughal court. <span className="font-bold">TREATY WITH SAYYID BROTHERS (1719)</span> = kingmakers of Mughal court. Formalized Maratha right to collect <span className="font-bold">CHAUTH & SARDESHMUKHI</span> throughout Deccan & South India = LEGAL-SANCTIONED REVENUE BASE. Consolidated <span className="font-bold">PESHWA'S ROLE</span> as chief executive, began power shift from Chhatrapati (king) to Peshwa's office. Stabilized finances after Shivaji's death & Aurangzeb wars.
            </p>
          </div>
          <div className="bg-purple-900 p-4 rounded">
            <h3 className="font-semibold text-purple-200 mb-2">⚔️ Military Zenith: Bajirao I (1720-1740)</h3>
            <p>
              Visionary commander who transformed Maratha policy from REGIONAL DEFENSE to PAN-INDIAN EXPANSION. Core strategy: <span className="font-bold">"LET US STRIKE THE TRUNK, THE BRANCHES WILL FALL."</span> Trunk = decaying Mughal power in North India. Executed RELENTLESS NORTHWARD EXPANSION: raided Malwa, Gujarat, Bundelkhand, established Maratha influence. Shifted geopolitical focus from DECCAN to ALL-INDIA AMBITION. Created network of loyal Maratha generals (Sindhia, Holkar, Pawar) in newly conquered regions. Military genius—never lost a battle.
            </p>
          </div>
          <div className="bg-red-900 p-4 rounded">
            <h3 className="font-semibold text-red-200 mb-2">📉 Peak & Disaster: Balaji Bajirao/Nanasaheb (1740-1761)</h3>
            <p>
              Reign saw MAXIMUM TERRITORIAL EXPANSION but at cost of overextension & internal rivalry. <span className="font-bold">THIRD BATTLE OF PANIPAT (1761)</span> = CATASTROPHIC DEFEAT. <span className="font-bold">CAUSE:</span> Direct conflict with AHMAD SHAH ABDALI (Durrani Empire) over control of North India (Punjab, Delhi). <span className="font-bold">EVENT:</span> Defeat due to poor coordination among Maratha generals, cut off from supply lines, faced superior heavy cavalry. <span className="font-bold">CONSEQUENCE:</span> Halted northward expansion, decimated Maratha elite, shattered Peshwa-led unity. Didn't destroy Maratha power but triggered FRAGMENTATION into loose confederacy of powerful families.
            </p>
          </div>
          <div className="bg-green-900 p-4 rounded">
            <h3 className="font-semibold text-green-200 mb-2">⚙️ Administration of the Confederacy</h3>
            <p>
              <span className="font-bold">CENTRAL (HUZUR DAFTAR):</span> Peshwa's secretariat in Pune = administrative heart managing diplomacy, central treasury, intelligence. <span className="font-bold">PROVINCIAL:</span> Relied on traditional village officers—DESHMUKH (revenue collector), DESHPANDE (record-keeper). Conquests governed by powerful appointed generals (Sindhia, Holkar) who gradually became autonomous. <span className="font-bold">JUDICIAL:</span> NYAYADHISH (Chief Justice) headed system. Justice based on Dharma-shastras & custom. Peshwa's court = highest appellate body. Decentralized but functional system managing vast territories.
            </p>
          </div>
        </div>
      )}
    </div>

    {/* Peshwa Era First Principles */}
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection('peshwaPrinciples')}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-white">2️⃣ Peshwa Era First Principles</h2>
        <span className="text-2xl">{expandedSection === 'peshwaPrinciples' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'peshwaPrinciples' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
          <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
            <p className="font-semibold text-blue-200 mb-2">1. Balaji Vishwanath - Legitimacy Through Mughal Sanction</p>
            <p>
              Primary achievement = <span className="font-bold">TREATY WITH SAYYID BROTHERS (1719)</span>. Sayyid brothers = Mughal kingmakers (controlled weak emperor Muhammad Shah). Treaty formalized Maratha right to collect <span className="font-bold">CHAUTH (25%) & SARDESHMUKHI (10%)</span> throughout Deccan & parts of South India. SIGNIFICANCE: Converted what was previously POLITICAL BLACKMAIL (under Shivaji—"pay or we raid") into LEGAL, SANCTIONED revenue right. Marathas became official tax collectors for Mughal emperor. BRILLIANT MOVE: Used Mughal legitimacy to fund Maratha expansion. Mughal emperor too weak to collect taxes himself, so outsourced to Marathas. Marathas got steady revenue stream + political recognition. Consolidated PESHWA'S ROLE as chief executive of Maratha state. Power began shifting from CHHATRAPATI (hereditary king, descendant of Shivaji) to PESHWA (appointed Prime Minister, but now becoming de facto ruler). Balaji Vishwanath was Brahmin (not warrior caste), showing administrative skill trumping birth status. PRINCIPLE: Secured FINANCIAL FOUNDATION (stable revenue) & POLITICAL LEGITIMACY (Mughal recognition) that enabled later expansion. Without this base, Bajirao I's aggressive campaigns would've been impossible to fund.
            </p>
          </div>
          <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
            <p className="font-semibold text-purple-200 mb-2">2. Bajirao I - "Strike the Trunk" Strategy</p>
            <p>
              Core strategy encapsulated in phrase: <span className="font-bold">"LET US STRIKE THE TRUNK, THE BRANCHES WILL FALL."</span> TRUNK = decaying Mughal power centered in North India (Delhi, Agra). BRANCHES = regional Mughal governors (Subadars), smaller kingdoms depending on Mughal support. LOGIC: Instead of conquering Deccan territories one-by-one (slow, expensive), strike at HEART of Mughal empire. Once Mughal center collapses, regional powers will submit without major battles. EXECUTED through DOCTRINE OF RELENTLESS NORTHWARD EXPANSION. Bajirao led lightning cavalry raids deep into Mughal provinces: <span className="font-bold">MALWA</span> (central India, rich agricultural zone), <span className="font-bold">GUJARAT</span> (wealthy trading ports), <span className="font-bold">BUNDELKHAND</span> (strategic buffer), even raided outskirts of DELHI. Never stayed to occupy—just extracted tribute, installed Maratha-loyal governors, moved on. Created NETWORK OF LOYAL MARATHA GENERALS in conquered regions: <span className="font-bold">SINDHIA</span> (Gwalior), <span className="font-bold">HOLKAR</span> (Indore), <span className="font-bold">PAWAR/GAEKWAD</span> (Baroda). These became semi-autonomous Maratha chiefs ruling distant provinces. SHIFTED GEOPOLITICAL FOCUS from Deccan defense to ALL-INDIA AMBITION. Marathas now saw themselves as potential heirs to Mughal Empire. MILITARY GENIUS: Bajirao never lost single battle (fought 41 battles). Combined mobility (light cavalry), speed (rapid marches), intelligence (knew when/where to strike). PRINCIPLE: Offensive as best defense. Don't wait for enemy to attack Deccan—take war to enemy territory. Make enemy react to you. KEY FLAW (revealed later): Created vast network of semi-autonomous chiefs who owed loyalty to Peshwa personally but had own territorial interests. When strong Peshwa (Bajirao) commanded, unity held. When weaker leadership or crisis came, these chiefs prioritized own interests.
            </p>
          </div>
          <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
            <p className="font-semibold text-red-200 mb-2">3. Third Battle of Panipat (1761) - Anatomy of Catastrophe</p>
            <p>
              <span className="font-bold">CONTEXT:</span> Balaji Bajirao (Nanasaheb), son of Bajirao I, continued expansion. Maratha Confederacy reached MAXIMUM TERRITORIAL EXTENT—controlled vast areas from Deccan to Punjab. But OVEREXTENDED geographically & politically. <span className="font-bold">CAUSE OF CONFLICT:</span> AHMAD SHAH ABDALI (ruler of Durrani/Afghan Empire) invaded North India repeatedly to plunder & establish control over Punjab/Delhi. Marathas, now dominant in North, directly challenged him. Competition for CONTROL OF NORTH INDIA—who would inherit crumbling Mughal Empire? <span className="font-bold">BATTLE (January 14, 1761):</span> Fought at Panipat (same historic battlefield, ~90km north of Delhi). Maratha army (~45,000-60,000 soldiers) vs. Afghan-Rohilla coalition (~40,000-60,000). TACTICAL ERRORS: (1) Poor coordination among Maratha generals—Sindhia, Holkar forces didn't cooperate effectively. Each had own territorial ambitions, resented Peshwa's nephew commanding. (2) Cut off from supply lines—besieged for months before battle, starving, unable to get reinforcements from Deccan. (3) Faced superior HEAVY CAVALRY charge—Afghan cavalry more disciplined in pitched battle than Maratha light cavalry optimized for raiding. (4) Artillery advantage neutralized—both sides had cannons, but Marathas couldn't use mobility advantage in set-piece battle. <span className="font-bold">OUTCOME:</span> CATASTROPHIC DEFEAT. Estimates: 40,000-70,000 Maratha soldiers killed (including leadership—Peshwa's son Vishwasrao, commander Sadashivrao Bhau). Abdali won but too exhausted to stay—withdrew to Afghanistan. <span className="font-bold">CONSEQUENCES:</span> (1) HALTED NORTHWARD EXPANSION permanently—Marathas never again attempted to dominate North. (2) DECIMATED MARATHA ELITE—leadership, trained soldiers, political unity destroyed. (3) SHATTERED PESHWA-LED UNITY—showed confederacy couldn't function effectively far from home base. (4) TRIGGERED FRAGMENTATION—powerful Maratha chiefs (Sindhia, Holkar, Bhonsle, Gaekwad) became EFFECTIVELY INDEPENDENT. Confederacy replaced centralized Peshwa authority. (5) Created power vacuum in North—eventually filled by BRITISH EAST INDIA COMPANY. Panipat prevented Marathas from consolidating all-India empire, allowed British to expand unchallenged. PRINCIPLE: Overextension + internal disunity + set-piece battle far from base = disaster. Marathas were masters of guerrilla warfare & decentralized raiding. Forced into conventional battle at extreme range with fractured command = defeat inevitable.
            </p>
          </div>
          <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
            <p className="font-semibold text-green-200 mb-2">4. Confederacy Administration - Decentralized Pragmatism</p>
            <p>
              <span className="font-bold">CENTRAL (HUZUR DAFTAR - Peshwa's Secretariat in Pune):</span> Administrative heart of confederacy. Managed: (1) DIPLOMACY—relations with other Indian states, European companies, Mughal court. (2) CENTRAL TREASURY—collection of tribute from confederacy members, funding Pune government. (3) INTELLIGENCE—network of spies, informants tracking political developments. (4) ROYAL CORRESPONDENCE—official communications, treaties, edicts. Peshwa remained symbolic head but real power increasingly with regional chiefs after Panipat. <span className="font-bold">PROVINCIAL ADMINISTRATION:</span> Relied on TRADITIONAL VILLAGE OFFICERS inherited from pre-Maratha systems. <span className="font-bold">DESHMUKH</span> = hereditary revenue collector at district level. Collected taxes from villages, sent portion to central treasury, kept commission. <span className="font-bold">DESHPANDE</span> = hereditary record-keeper maintaining land records, tax assessments, legal documents. System was PRAGMATIC—Marathas didn't replace existing administration, just took cut of revenue. Conquered territories governed by POWERFUL APPOINTED GENERALS (Sindhia in Gwalior, Holkar in Indore, Bhonsle in Nagpur, Gaekwad in Baroda, Peshwa in Pune). These became EFFECTIVELY AUTONOMOUS RULERS—collected revenue, maintained armies, conducted diplomacy, waged own wars. Owed nominal allegiance to Peshwa but acted independently. <span className="font-bold">JUDICIAL SYSTEM:</span> <span className="font-bold">NYAYADHISH</span> (Chief Justice) appointed by Peshwa headed system. Justice based on DHARMA-SHASTRAS (Hindu legal texts) & LOCAL CUSTOM. Village-level disputes settled by village council (panchayat). District-level by Deshmukh or appointed judge. Major cases/appeals went to PESHWA'S COURT (highest appellate body). System was DECENTRALIZED & FLEXIBLE—adapted to local customs, religions (Hindu, Muslim laws both applied). PRINCIPLE: Maratha administration was designed for CONFEDERACY, not centralized empire. Worked well for managing vast, diverse territories through local intermediaries. But also meant WEAK CENTRAL CONTROL—regional chiefs prioritized own interests, couldn't be commanded effectively in crisis (like Panipat). Confederacy was strong when threats were local/manageable, weak when facing unified external threat requiring coordinated response.
            </p>
          </div>
        </div>
      )}
    </div>

    {/* Peshwa 5 Whys */}
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection('peshwaWhys')}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Third Battle of Panipat (1761)</h2>
        <span className="text-2xl">{expandedSection === 'peshwaWhys' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'peshwaWhys' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
          <div className="bg-gray-900 p-3 rounded">
            <p className="font-semibold text-yellow-300">Why #1: Why did the Marathas lose at Panipat?</p>
            <p>Due to combination of STRATEGIC OVERREACH, TACTICAL ERRORS, INTERNAL DISUNITY on battlefield. Fought far from home base, cut off from supplies, generals didn't coordinate, faced disciplined enemy in set-piece battle (not guerrilla context where Marathas excelled).</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="font-semibold text-yellow-300">Why #2: Why were they overreached and disunited?</p>
            <p>Because campaign was launched FAR FROM POWER BASE in Deccan without secure supply lines or reliable allies in North. Maratha generals (Sindhia, Holkar) had own territorial ambitions, resented central Peshwa command. Unity that worked in Deccan raiding campaigns broke down in distant conventional battle.</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="font-semibold text-yellow-300">Why #3: Why launch such a risky campaign?</p>
            <p>To claim POLITICAL INHERITANCE of crumbling Mughal Empire & control over Delhi. Bajirao I's policy made dominating North India the ULTIMATE GOAL. After decades of expansion, Marathas saw themselves as natural heirs to Mughal power. Couldn't let Abdali (foreign invader) control North—would undermine Maratha claims.</p>
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <p className="font-semibold text-yellow-300">Why #4: What was the root strategic flaw?</p>
            <p>FAILURE TO CONSOLIDATE CONQUERED TERRITORIES into cohesive state. Expansion under Peshwas created AUTONOMOUS, RIVAL MARATHA CHIEFS (Holkar, Sindhia) whose coordination in distant battle was poor. Built military confederacy optimized for raiding & tribute extraction, NOT unified empire capable of coordinated campaigns at extreme range. Decentralized administration (practical for managing diversity) meant WEAK CENTRAL AUTHORITY in crisis.</p>
          </div>
          <div className="bg-amber-900 bg-opacity-40 p-4 rounded border-l-4 border-amber-500 mt-4">
            <p className="font-bold text-amber-200">Why #5 (Root Truth):</p>
            <p>
              Panipat was INEVITABLE RESULT OF LIMITLESS EXPANSION WITHOUT POLITICAL CONSOLIDATION. Marathas under Peshwas became MILITARY CONFEDERACY, not unified empire. Brilliant at raiding, extracting tribute, guerrilla warfare within familiar territory. But when faced with UNITED ENEMY AT EXTREMITY OF REACH requiring coordinated conventional battle, structural weaknesses shattered. Confederacy model worked for expansion (autonomous chiefs conquered independently) but FAILED for defense (chiefs prioritized own survival over collective good). ROOT TRUTH: You can't build empire on tribute & autonomous warlords—eventually, lack of unity kills you when facing coordinated threat. Marathas chose rapid expansion over administrative consolidation. Short-term success, long-term fragility. Panipat revealed what was always true: confederacy wasn't empire, just coalition of powerful families with shared interests. When interests diverged (crisis far from home), coalition collapsed.
            </p>
          </div>
        </div>
      )}
    </div>

    {/* Peshwa Feynman */}
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection('peshwaFeynman')}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-white">4️⃣ Feynman - Peshwa Era (Explain to 12-Year-Old)</h2>
        <span className="text-2xl">{expandedSection === 'peshwaFeynman' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'peshwaFeynman' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
          <div className="bg-linear-to-r from-blue-900 to-purple-900 p-4 rounded">
            <p className="font-semibold text-blue-200 mb-2">📜 The Smart Manager's Contract</p>
            <p>Think of Maratha kingdom like sports team. Smart manager (<span className="font-bold">BALAJI VISHWANATH</span>) gets them AWESOME OFFICIAL LEAGUE CONTRACT (treaty with Mughal kingmakers). Contract guarantees them STEADY INCOME from collecting fees in large territory. Now they're legit, rich, and ready to expand!</p>
          </div>
          <div className="bg-linear-to-r from-purple-900 to-red-900 p-4 rounded">
            <p className="font-semibold text-purple-200 mb-2">⚔️ The Superstar Coach's Winning Streak</p>
            <p>Then SUPERSTAR PLAYER-COACH (<span className="font-bold">BAJIRAO I</span>) takes over. He says, "Forget just our home league, let's conquer whole NATIONAL CHAMPIONSHIP!" He leads team on AMAZING WINNING STREAKS far from home. Never loses single game! Other star players (<span className="font-bold">SINDHIA, HOLKAR</span>) become captains of their own regional teams under main banner. Team is now biggest in country!</p>
          </div>
          <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
            <p className="font-semibold text-red-200 mb-2">💥 The Crushing Championship Loss</p>
            <p>His son (<span className="font-bold">BALAJI BAJIRAO</span>) becomes next manager. Team is now STRETCHED SUPER THIN across country. Regional captains don't always listen to headquarters. Manager decides to go for BIGGEST TROPHY of all—final championship game in far north (<span className="font-bold">PANIPAT</span>). But team is tired, captains argue, supplies run out, and they face BRUTAL opponent (<span className="font-bold">AHMAD SHAH ABDALI</span>). They get CRUSHED. Thousands of players die. Dream is shattered.</p>
          </div>
          <div className="bg-linear-to-r from-orange-900 to-green-900 p-4 rounded">
            <p className="font-semibold text-orange-200 mb-2">🤝 The Loose Club of Friends</p>
            <p>Team isn't destroyed, but never same. Headquarters (<span className="font-bold">PESHWA in PUNE</span>) is weakened. Regional captains become REAL BOSSES of their areas. Team is now LOOSE CLUB of powerful friends who sometimes cooperate, sometimes fight. They keep playing for another 50 years, but dream of being undisputed national champion is GONE. Eventually, new team (British) beats them one by one.</p>
          </div>
        </div>
      )}
    </div>

    {/* Peshwa Synthesis */}
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection('peshwaSynthesis')}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-white">6️⃣ Peshwa Era Synthesis</h2>
        <span className="text-2xl">{expandedSection === 'peshwaSynthesis' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'peshwaSynthesis' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
          <div className="bg-linear-to-r from-blue-900 to-purple-900 p-4 rounded">
            <p className="font-bold text-blue-200 mb-2">How Chunks Connect - Arc of Rise & Fall</p>
            <p>
              <span className="font-bold">BALAJI VISHWANATH</span> secured REVENUE & LEGITIMACY (treaty with Mughals) that funded expansion. <span className="font-bold">BAJIRAO I</span> set EXPANSIONIST POLICY ("strike the trunk") creating vast but decentralized network of Maratha chiefs. <span className="font-bold">BALAJI BAJIRAO</span> inherited system, pushed to breaking point at <span className="font-bold">PANIPAT</span>. After Panipat, <span className="font-bold">ADMINISTRATIVE SYSTEM</span> (always better at managing confederacy than centralized state) continued, but real power drifted to regional Maratha chiefs → era of full Confederacy. Foundation → Expansion → Overreach → Fragmentation = complete arc.
            </p>
          </div>
          <div className="bg-linear-to-r from-purple-900 to-red-900 p-4 rounded">
            <p className="font-bold text-purple-200 mb-2">Analogies to Technical Reality</p>
            <p>
              "Official league contract" = <span className="font-bold">TREATY WITH SAYYID BROTHERS</span> (1719 legal sanction for Chauth/Sardeshmukhi). "Star player-coach" = <span className="font-bold">BAJIRAO I</span> as military genius (41 battles, zero losses). "Regional team captains" = <span className="font-bold">MARATHA CHIEFS</span> (Sindhia, Holkar, Bhonsle, Gaekwad). "Championship game in far north" = <span className="font-bold">THIRD BATTLE OF PANIPAT</span> (1761 catastrophic defeat). "Loose club of powerful friends" = <span className="font-bold">MARATHA CONFEDERACY</span> post-1761 (five major houses, weak central authority).
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded border-l-4 border-red-500">
            <p className="font-bold text-red-300 mb-2">Complete Summary (Feynman Style)</p>
            <p>
              Smart manager first got Marathas steady income deal with official recognition. Then superstar coach led them on wild winning streaks across India, creating powerful regional captains who ruled distant areas. His son pushed this stretched-out team into final championship battle far from home, where they crashed badly against brutal opponent. After that, team became loose group of powerful regional captains, with original headquarters losing control, though they remained important for another 50 years before British conquered them all.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded border-l-4 border-orange-500">
            <p className="font-bold text-orange-300 mb-2">Key Lesson - Expansion vs. Consolidation</p>
            <p>
              CRITICAL INSIGHT: Marathas chose RAPID TERRITORIAL EXPANSION over POLITICAL CONSOLIDATION. Created military confederacy optimized for raiding, tribute extraction, decentralized conquest. Brilliant for expansion phase—autonomous chiefs conquered independently without waiting for central permission. But fatal flaw for defense/crisis—when facing unified external threat requiring coordinated response (Panipat), structural weakness killed them. Can't build lasting empire on autonomous warlords & tribute. Eventually, lack of unity = defeat when crisis comes. British learned this lesson—after defeating Marathas, built CENTRALIZED administration with direct British control. Marathas' confederacy model was transitional form—worked for overthrowing Mughals, failed for replacing them with stable empire.
            </p>
          </div>
        </div>
      )}
    </div>

    {/* Peshwa Self-Test */}
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection('peshwaSelfTest')}
        className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <h2 className="text-xl font-bold text-white">🧪 Peshwa Era Self-Test Questions</h2>
        <span className="text-2xl">{expandedSection === 'peshwaSelfTest' ? '−' : '+'}</span>
      </button>
      {expandedSection === 'peshwaSelfTest' && (
        <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-bold text-blue-300 mb-2">Q1: Contrast - Balaji Vishwanath vs. Bajirao I Goals</p>
            <p className="mb-2">How did the primary political goal of Balaji Vishwanath differ from that of Bajirao I?</p>
            <p className="text-gray-400 text-sm">💡 Answer: <span className="font-bold">BALAJI VISHWANATH</span> aimed for SECURE REVENUE & RECOGNITION WITHIN Deccan/Mughal system. His treaty with Sayyid Brothers (1719) sought to LEGITIMIZE Maratha collection of Chauth/Sardeshmukhi through MUGHAL SANCTION. Worked WITHIN existing imperial framework—Marathas as official tax collectors for Mughal emperor. Goal = stability, financial security, political legitimacy. Pragmatic, defensive posture. Recognized Maratha power was regional, needed Mughal recognition to consolidate. <span className="font-bold">BAJIRAO I</span> aimed for MARATHA HEGEMONY OVER entire system. His "strike the trunk" strategy meant REPLACING Mughal supremacy with Maratha dominance. Didn't want to work within Mughal system—wanted to OVERTHROW it. Aggressive, offensive, all-India ambition. Saw Marathas not as regional power but as HEIR TO MUGHAL EMPIRE. <span className="font-bold">FUNDAMENTAL DIFFERENCE:</span> Father (Balaji Vishwanath) = CONSOLIDATION within existing order. Son (Bajirao I) = TRANSFORMATION of entire political order. Father secured base camp. Son climbed mountain. Father's treaty provided financial resources. Son's campaigns used those resources to attempt imperial conquest. One was DEFENSIVE REALISM (secure what we have). Other was OFFENSIVE IDEALISM (conquer everything). Both were necessary—couldn't have Bajirao's expansion without Balaji's financial foundation. But different visions of Maratha role in India.</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-bold text-blue-300 mb-2">Q2: Analysis - "Strike the Trunk" Logic & Flaw</p>
            <p className="mb-2">The phrase "Let us strike the trunk, the branches will fall" perfectly summarizes Bajirao I's strategy. Who was the "trunk," what did "branches" represent, and what was the key flaw revealed later?</p>
            <p className="text-gray-400 text-sm">💡 Answer: <span className="font-bold">TRUNK</span> = decaying MUGHAL POWER centered in North India (Delhi, Agra). Imperial authority, central treasury, symbolic legitimacy. If Mughal center collapsed, entire system would fall. <span className="font-bold">BRANCHES</span> = regional Mughal SUBADARS (governors), smaller kingdoms depending on Mughal support (Awadh, Bengal, Hyderabad), local chiefs drawing legitimacy from Mughal titles. These would lose power once Mughal center fell. <span className="font-bold">LOGIC OF STRATEGY:</span> Don't waste time conquering each branch individually (slow, expensive). Strike at ROOT CAUSE of their power—Mughal central authority. Once Delhi falls, branches will submit peacefully. ECONOMICAL & DECISIVE. <span className="font-bold">KEY FLAW REVEALED LATER:</span> Logic assumed branches were PASSIVE, dependent on trunk. Reality: once trunk weakened, branches became INDEPENDENT, not submissive. Didn't fall—they GREW STRONGER as autonomous powers. Nizam of Hyderabad, Nawab of Awadh, Nawab of Bengal all became INDEPENDENT KINGDOMS after Mughal decline, not Maratha vassals. Marathas created power vacuum in North (weakened Mughals) but couldn't FILL it with unified Maratha rule. Instead, got FRAGMENTATION—multiple independent powers (including Marathas themselves splitting into confederacy). Also, "striking trunk" created NEW powerful enemy (AHMAD SHAH ABDALI) who invaded specifically BECAUSE Mughals were weak & North India was up for grabs. Panipat was consequence of power vacuum Marathas created. <span className="font-bold">DEEPER FLAW:</span> Strategy worked militarily (Marathas raided successfully) but failed POLITICALLY. Couldn't convert military victories into stable administration. Created vast empire of tribute-paying territories but not integrated state. Military conquest ≠ political consolidation. Branches didn't fall—they just stopped paying tribute to Mughal trunk & started resisting Maratha trunk instead.</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <p className="font-bold text-blue-300 mb-2">Q3: Synthesis - Administration Enabled Expansion & Caused Defeat</p>
            <p className="mb-2">How did the administrative structure of the Maratha state (reliance on Deshmukhs, powerful generals) both ENABLE rapid expansion under Peshwas and CONTRIBUTE TO defeat at Panipat and later rise of Confederacy?</p>
            <p className="text-gray-400 text-sm">💡 Answer: <span className="font-bold">HOW IT ENABLED EXPANSION:</span> (1) <span className="font-bold">DESHMUKH/DESHPANDE SYSTEM</span> = didn't require replacing existing administration. Marathas just took cut of revenue from hereditary local officers. PRAGMATIC—could conquer quickly without administrative burden of direct rule. Deshmukhs knew local conditions, spoke local languages, had local legitimacy. Marathas parasitically extracted revenue without governing. (2) <span className="font-bold">POWERFUL GENERALS SYSTEM</span> = autonomous Maratha chiefs (Sindhia, Holkar, Bhonsle) conquered independently without waiting for central permission. DECENTRALIZED conquest meant multiple simultaneous campaigns. Generals had own armies, own revenue bases, own initiative. Enabled RAPID TERRITORIAL EXPANSION—didn't need Peshwa to micromanage each conquest. (3) FLEXIBLE, ADAPTIVE—could incorporate diverse territories (Hindu, Muslim, tribal) without forcing uniformity. Chiefs adapted to local conditions. <span className="font-bold">HOW IT CONTRIBUTED TO DEFEAT AT PANIPAT:</span> (1) <span className="font-bold">WEAK CENTRAL AUTHORITY</span> = autonomous chiefs prioritized own interests over collective good. At Panipat, Holkar forces withdrew early (some sources), Sindhia forces didn't coordinate effectively. Each general thought: "Why should I sacrifice my army for Peshwa's glory?" (2) <span className="font-bold">NO UNIFIED COMMAND</span> = battle commanded by Peshwa's nephew Sadashivrao Bhau, but senior generals (with own armies & territories) resented taking orders from junior family member. Fractured command = poor coordination. (3) <span className="font-bold">SUPPLY PROBLEMS</span> = decentralized system meant no centralized logistics. Each general brought own supplies. When cut off from Deccan, couldn't organize unified supply system. (4) <span className="font-bold">DISTANT FROM BASE</span> = system worked in Deccan where Peshwa had direct control. At extreme northern range (Panipat), confederacy structure broke down. <span className="font-bold">HOW IT LED TO CONFEDERACY:</span> After Panipat, Peshwa authority collapsed. Powerful generals (who always had semi-autonomy) became FULLY INDEPENDENT. Why listen to weakened Peshwa when you have own army, territory, revenue? Confederacy was ALWAYS latent structure—Panipat just made it explicit. Strong Peshwa (Bajirao I) commanded loyalty through personal charisma & military success. Weak Peshwa post-Panipat couldn't. <span className="font-bold">SYNTHESIS:</span> Decentralized, flexible administrative structure was FEATURE for expansion (enabled rapid conquest without administrative burden) but BUG for defense/crisis (prevented unified response to external threat). Trade-off: expansion speed vs. long-term unity. Marathas chose speed, paid price in fragmentation.
            </p>
          </div>
        </div>
      )}
    </div>
  </>
);

export default PartTwoPeshwa;
