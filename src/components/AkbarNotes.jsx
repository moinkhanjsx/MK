import React, { useState } from 'react';

const AkbarNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">👑 Akbar (1556-1605) - The Empire Builder</h1>
          <p className="text-gray-400">The Construction of a Composite, Centralized Mughal Empire</p>
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
                  <h3 className="font-semibold text-red-200 mb-2">⚔️ Political & Military Consolidation</h3>
                  <p>Shaky start—13-year-old Akbar nearly loses throne. Second Battle of Panipat (1556) with Bairam Khan secures crown. Shift from conquest to alliance through Rajput marriages & honorable Mansabdari integration. Expansion into Gujarat, Bengal, Deccan establishes Mughal dominance over North India.</p>
                </div>
                <div className="bg-yellow-900 p-4 rounded">
                  <h3 className="font-semibold text-yellow-200 mb-2">⚙️ Administrative Machinery</h3>
                  <p>Two core systems: Mansabdari (unified ranking for officials with dual Zat & Sawar ranks), Land Revenue (systematic Zabt/Bandobast with fixed Dashala cash rates). Under Todar Mal: careful land measurement, fixed rates based on 10-year crop averages, standardized units, written records. Maximized & stabilized state income.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">🕌 Religious Policy & Philosophy</h3>
                  <p>Ibadat Khana (House of Worship) for theological debates expanded to Hindu, Jain, Christian, Zoroastrian scholars. Sulh-i-Kul (Universal Peace) philosophy—tolerance & justice for all communities. Din-i-Ilahi (Divine Faith)—personal elitist spiritual order blending faiths, not public religion, symbol of supreme spiritual authority.</p>
                </div>
                <div className="bg-orange-900 p-4 rounded">
                  <h3 className="font-semibold text-orange-200 mb-2">🎨 Cultural Project & Legacy</h3>
                  <p>Navratnas (Nine Jewels)—Birbal, Tansen, Todar Mal, Abul Fazl representing cultural fusion. Fatehpur Sikri—purpose-built capital with Persian-Indian fusion architecture, Buland Darwaza, Ibadat Khana. Akbarnama—official chronicle by Abul Fazl, theoretical justification of divine-light kingship ideology.</p>
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
                  <p className="font-semibold text-red-200 mb-2">Political & Military Core</p>
                  <p>SECOND BATTLE OF PANIPAT (1556) = battle for survival & reassertion after Humayun's death. Akbar age 13 with regent Bairam Khan defeated Hemu. RAJPUT POLICY = shift from conquest to alliance through marriage alliances (Amber princess) & honorable Mansabdari integration. Turned potential foes into core pillars. EXPANSION = conquered Gujarat (sea trade access), Bengal (agrarian base), initial Deccan forays. Established Mughal dominance North India.</p>
                </div>
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-200 mb-2">Administrative Core</p>
                  <p>MANSABDARI = unified ranking system for all imperial officials from governors to commanders. Each Mansabdar held DUAL RANK: ZAT (personal pay grade & official status) + SAWAR (number of cavalrymen must maintain). Created CENTRALIZED, HIERARCHICAL SERVICE loyal directly to emperor. LAND REVENUE (Zabt/Bandobast) = systematic, centralized cash-based revenue. Under Todar Mal: careful measurement (Zabt), fixed cash rates (Dashala) based on 10-year average crop prices, standardized units, written records (Patta). MAXIMIZED & STABILIZED state income.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Religious Core</p>
                  <p>IBADAT KHANA (House of Worship) = initially Islamic theological debates, later expanded to Hindu, Jain, Christian, Zoroastrian scholars. SULH-I-KUL (Universal Peace) = resulting philosophy of tolerance & justice for all religious communities, state's guiding principle. DIN-I-ILAHI (Divine Faith) = personal, elitist spiritual order for select nobles, blended elements from various faiths. NOT public religion but symbol of Akbar's supreme spiritual authority.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-200 mb-2">Cultural Core</p>
                  <p>NAVRATNAS (Nine Jewels) = court of luminaries: Birbal (wit), Tansen (music), Raja Todar Mal (finance), Abul Fazl (scholar). Symbolized cultural fusion. FATEHPUR SIKRI = purpose-built capital city reflecting vision—architectural fusion of Persian & Indian styles, housed Buland Darwaza (Gujarat victory commemoration) & Ibadat Khana. AKBARNAMA = official chronicle by Abul Fazl, theoretical justification of Akbar's ideology of divine-light inspired kingship.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Mansabdari Dual Ranks</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why was new ranking system needed?</p>
                  <p>To centralize control over diverse, previously feudal nobility and military.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why did centralizing control require dual rank?</p>
                  <p>To SEPARATE personal prestige & salary (Zat) from MILITARY OBLIGATION (Sawar). Gave emperor fine-tuned control.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What problem did this solve?</p>
                  <p>Prevented nobles from becoming permanently powerful in one region. High Zat with low Sawar = high status but little military power. Emperor could adjust Sawar to control noble's actual troop strength.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was root administrative mechanism?</p>
                  <p>DIRECT FINANCIAL & MILITARY DEPENDENCE on crown. Salaries paid from central treasury or Jagir assignments. Troop rolls (Chehra) & horses (Dagh) inspected to ensure compliance.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded border-l-4 border-orange-500 mt-4">
                  <p className="font-bold text-orange-200">Why #5 (Root Truth):</p>
                  <p>Mansabdari system was ULTIMATE TOOL FOR IMPERIAL INTEGRATION. Dissolved old ethnic (Turani, Irani, Rajput) & functional (military vs. civil) identities into single, hierarchical service whose only legitimacy source was Emperor. Unified empire through bureaucratic dependence.</p>
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
                  <p className="font-semibold text-red-200 mb-2">👑 The Teenage King Who Almost Lost Everything</p>
                  <p>Imagine teenage king Akbar who almost loses throne right at start. After surviving, he decides to build kingdom differently. Instead of fighting everyone, he makes friends with bravest warrior clans (Rajputs) by marrying their princesses & giving leaders important army-government jobs.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-yellow-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">📊 Smart Report Card System</p>
                  <p>To run huge kingdom, he invents smart report card system for top officers—Mansabdari. Every officer got TWO SCORES: one for PAY GRADE & IMPORTANCE (Zat), another for HOW MANY HORSEMEN they must bring to war (Sawar). Akbar could change second number to keep them from getting too powerful.</p>
                </div>
                <div className="bg-linear-to-r from-yellow-900 to-green-900 p-4 rounded">
                  <p className="font-semibold text-yellow-200 mb-2">🌾 Fair, Fixed Taxes</p>
                  <p>For taxes, he had genius minister Todar Mal who measured all farmland & set fair, fixed cash tax so farmers weren't surprised. Farmers knew exactly what they owed. Akbar knew exactly how much revenue he'd get. Everyone happy.</p>
                </div>
                <div className="bg-linear-to-r from-green-900 to-purple-900 p-4 rounded">
                  <p className="font-semibold text-green-200 mb-2">🕌 "Peace for All" Philosophy</p>
                  <p>In religion, he was super curious. Built "Discussion Room" to hear from wise people of all faiths—Muslims, Hindus, Jains, Christians, Zoroastrians. Main idea: "Peace for All"—his government should be fair to everyone, no matter their religion.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-purple-200 mb-2">🎭 Superstar Team & Beautiful City</p>
                  <p>He loved arts & learning. His court was like superstar team of poets (Abul Fazl), singers (Tansen), thinkers. Even built whole new beautiful red sandstone city (Fatehpur Sikri) to show off his ideas. Not just conqueror—genius manager who mixed different people & ideas to build something strong & new.</p>
                </div>
              </div>
            )}
          </div>

          {/* Political & Military Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('political')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">⚔️ Political & Military Consolidation</h2>
              <span className="text-2xl">{expandedSection === 'political' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'political' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Second Battle of Panipat (1556) - Crisis</p>
                  <p><span className="font-bold">Akbar's age:</span> Only 13 years old. <span className="font-bold">Regent:</span> Bairam Khan governed. <span className="font-bold">Opponent:</span> Hemu, Sur general. <span className="font-bold">Significance:</span> Battle for survival & reassertion after Humayun's death. Victory secure Mughal throne. Showed Akbar would not be weak. Established him as legitimate ruler.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Rajput Policy - From Enemy to Alliance</p>
                  <p><span className="font-bold">Before Akbar:</span> Mughals conquered Rajputs, created resentment, constant rebellion. <span className="font-bold">Akbar's innovation:</span> MARRIAGE ALLIANCES—married Rajput princesses (like Amber's Jodha Bai). <span className="font-bold">Integration:</span> Offered Rajput leaders honorable positions in Mansabdari system. Gave them power & prestige without threatening imperial authority. <span className="font-bold">Result:</span> Rajputs became loyal pillars of empire, not permanent enemies.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Territorial Expansion</p>
                  <p><span className="font-bold">Gujarat (1572):</span> Provided access to sea trade. Economic boost. Gave Akbar control of western trade routes. <span className="font-bold">Bengal (1576):</span> Rich agrarian base. Densest agricultural region. Massive revenue increase. <span className="font-bold">Deccan initial forays:</span> Established Mughal presence in south. Created vassal relationships. Dominated North India completely.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Why This Strategy Succeeded</p>
                  <p>Made potential enemies into partners. Married alliances = familial bonds. Mansabdari integration = shared power structure. Offered Rajputs legitimate path to wealth & prestige. They benefited from empire's growth. Akbar got their military strength & territorial knowledge. Both sides won. Prevented constant rebellion that plagued earlier Mughal rulers.</p>
                </div>
              </div>
            )}
          </div>

          {/* Administrative Machinery Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('admin')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">⚙️ Administrative Machinery - Mansabdari & Revenue</h2>
              <span className="text-2xl">{expandedSection === 'admin' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'admin' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Mansabdari System - Dual Rank Innovation</p>
                  <p><span className="font-bold">Zat (Personal Rank):</span> Determined officer's salary, status, official position. High Zat = high pay & prestige. <span className="font-bold">Sawar (Military Rank):</span> Determined how many cavalry (horsemen) officer must maintain. High Sawar = obligation to bring more troops. <span className="font-bold">Separation:</span> Could have high Zat but low Sawar (prestigious but limited military power). Could adjust independently. <span className="font-bold">Result:</span> Emperor had fine control. Prevented any single noble from accumulating too much military or political power.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Loyalty Mechanism</p>
                  <p><span className="font-bold">Financial dependence:</span> Salaries paid from imperial treasury (or Jagir land assignments). Mansabdars depended on emperor for income. <span className="font-bold">Military inspection:</span> Chehra (troop rolls) checked regularly. Dagh (horse branding) marked imperial horses. Officers had to maintain stated number of troops or lose rank/pay. <span className="font-bold">Career mobility:</span> Could rise/fall based on performance & loyalty. Ranks adjusted frequently. Created competitive environment where loyalty paid.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Zabt & Bandobast - Revenue System</p>
                  <p><span className="font-bold">Todar Mal's system:</span> Measured every parcel of agricultural land. Calculated average produce over 10-year period (Dashala). <span className="font-bold">Fair tax:</span> Fixed cash rate based on 10-year average, not current year. Peasants couldn't be exploited by bad harvest. <span className="font-bold">Standardization:</span> Same measurement units, same tax rate in similar lands. Transparent, predictable. <span className="font-bold">Result:</span> Maximized revenue while making it sustainable. Peasants satisfied = better productivity.</p>
                </div>
              </div>
            )}
          </div>

          {/* Religious Policy Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('religion')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🕌 Religious Policy & Philosophy</h2>
              <span className="text-2xl">{expandedSection === 'religion' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'religion' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Ibadat Khana (House of Worship)</p>
                  <p><span className="font-bold">Started as:</span> Place for Islamic theological debates. Akbar invited Muslim scholars to discuss Quran, Sharia, Islamic philosophy. <span className="font-bold">Expanded to:</span> Hindu pandits, Jain monks, Christian missionaries, Zoroastrian priests invited to debate. <span className="font-bold">Purpose:</span> Akbar listened to different perspectives, asked challenging questions. Intellectual curiosity about truth across faiths. <span className="font-bold">Result:</span> Akbar realized no single faith had monopoly on wisdom.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Sulh-i-Kul (Universal Peace)</p>
                  <p><span className="font-bold">Philosophy:</span> Tolerance & justice for all religious communities. Not religious syncretism—didn't force blending. <span className="font-bold">State principle:</span> Imperial government treats all religions fairly. No state favoritism to Islam. <span className="font-bold">Practical:</span> Removed discriminatory taxes on non-Muslims (Jizya), appointed Hindus to high posts, protected temple rights, employed Christians & Zoroastrians. <span className="font-bold">Result:</span> Diverse population saw Mughal rule as legitimate & beneficial, not foreign occupation.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Din-i-Ilahi (Divine Faith) - Misunderstood</p>
                  <p><span className="font-bold">NOT:</span> Public religion to replace Islam or Hinduism. Never had mass following. <span className="font-bold">IS:</span> Personal, elitist spiritual order for select nobles only. Required initiation ceremony. <span className="font-bold">Blended elements:</span> Monotheism (Islamic), karma/reincarnation (Hindu), light of God (Sufi/Christian), truth-seeking (Zoroastrian). <span className="font-bold">Real purpose:</span> Symbol of Akbar's supreme spiritual authority. Nobles who joined showed ultimate loyalty to emperor. Personal cult of emperor as divine figure. <span className="font-bold">Political tool:</span> Bound elite directly to emperor spiritually, not just administratively.</p>
                </div>
              </div>
            )}
          </div>

          {/* Cultural Legacy Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('cultural')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🎨 Cultural Project & Legacy</h2>
              <span className="text-2xl">{expandedSection === 'cultural' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'cultural' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Navratnas (Nine Jewels)</p>
                  <p><span className="font-bold">Birbal:</span> Wit, counsel, poet. Represented Hindu intellectual. <span className="font-bold">Tansen:</span> Greatest musician of age. Court singer. Represented Hindu music traditions. <span className="font-bold">Raja Todar Mal:</span> Finance minister, revenue architect, Hindu administrator. <span className="font-bold">Abul Fazl:</span> Scholar, chronicler, closest advisor. Muslim intellectual. <span className="font-bold">Others:</span> Raja Man Singh (Rajput general), Faizi (poet), Baz Bahadur (musician). Court symbolized cultural fusion—Hindu, Muslim, Persian, Indian all represented.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Fatehpur Sikri - The Purpose-Built Capital</p>
                  <p><span className="font-bold">Vision:</span> Akbar wanted city that expressed his ideals. Built new capital from scratch. <span className="font-bold">Architecture:</span> Fusion of Persian & Indian styles. Red sandstone (Indian material). Mughal arches (Persian influence). Hindu temple elements adapted. <span className="font-bold">Buland Darwaza:</span> Gate of magnificence. 54-meter high. Built to commemorate Gujarat conquest. Symbolized imperial power. <span className="font-bold">Ibadat Khana:</span> Housed in palace. Central to Akbar's vision of enlightened rule. <span className="font-bold">Abandonment:</span> After 14 years, city abandoned (water shortage). But legacy = architectural masterpiece expressing hybrid culture.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Akbarnama - Written Ideology</p>
                  <p><span className="font-bold">Author:</span> Abul Fazl, Akbar's closest advisor. <span className="font-bold">NOT just history:</span> Official chronicle but also ideological document. <span className="font-bold">Justification of kingship:</span> Presents Akbar as divinely inspired ruler. Light of God manifest in emperor. <span className="font-bold">Political philosophy:</span> Explains why Mansabdari system works, why Rajputs should be included, why Sulh-i-Kul is just. <span className="font-bold">Cultural legacy:</span> Most important Mughal text. Became model for how future rulers projected power & legitimacy.</p>
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
                  <p className="font-bold text-red-200 mb-2">Military → Administrative Power</p>
                  <p>Military consolidation (Panipat, Rajput alliances, expansion) provided stable territory & loyal elite. This enabled implementation of centralized Mansabdari & revenue systems. Couldn't administer what he couldn't conquer.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-yellow-900 p-4 rounded">
                  <p className="font-bold text-orange-200 mb-2">Administration → Revenue → Culture</p>
                  <p>Efficient Zabt/Bandobast & Mansabdari systems generated stable, predictable revenue. This wealth funded cultural projects—Fatehpur Sikri, Navratnas, Akbarnama. Culture became tool for projecting ideology.</p>
                </div>
                <div className="bg-linear-to-r from-yellow-900 to-purple-900 p-4 rounded">
                  <p className="font-bold text-yellow-200 mb-2">Religion = Ideological Glue</p>
                  <p>Sulh-i-Kul (universal peace) justified inclusion of Rajputs, Hindus, Christians in political & administrative machinery. Made diverse empire feel like collaborative project, not foreign occupation. Religious tolerance made Mansabdari system acceptable to diverse groups.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-orange-500 mt-4">
                  <p className="font-bold text-orange-300">Complete System Summary:</p>
                  <p>MILITARY success (Panipat, Rajput alliances, expansion) → created stable state. ADMINISTRATION (Mansabdari, Zabt/Bandobast) → extracted wealth efficiently. RELIGION (Sulh-i-Kul) → legitimized diverse inclusion. CULTURE (Navratnas, Fatehpur Sikri, Akbarnama) → projected ideology & unified diverse population through shared cultural vision. All four pillars supported each other, creating first truly composite, centralized, functioning Indian empire.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Zat & Sawar Dual Control</p>
                  <p className="mb-2">How did dual rank system (Zat & Sawar) within Mansabdari give Akbar direct control over both personal status AND military power of nobles?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: ZAT = personal pay & status. Salaries paid from imperial treasury. High Zat meant high prestige & high income. SAWAR = military obligation. Number of cavalry officer must maintain. High Sawar meant obligation to provide troops. SEPARATION: Could give high Zat (status & pay) with low Sawar (small military obligation). Prevented noble from becoming simultaneously prestigious AND militarily dangerous. Could adjust each independently. High Zat official with low Sawar was prestigious but had limited troops = couldn't rebel. CONTROL: Akbar rotated Mansabdars, adjusted Sawar numbers, withheld promotions. Every Mansabdar depended on emperor for both income & career advancement. Made rebellion economically irrational & politically dangerous. Officers had no independent power base. Created system where only source of legitimacy & reward was loyalty to emperor.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Rajput Policy & Religious Policy Connection</p>
                  <p className="mb-2">How did Akbar's Rajput Policy and Religious Policy of Sulh-i-Kul work together to strengthen empire?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: RAJPUT POLICY = included former enemies in Mansabdari, gave them honorable positions, married their daughters. Offered them power & prestige within imperial structure. But could have created resentment—why should conquered Rajputs be loyal to Mughal (Muslim) emperor? SULH-I-KUL = universal peace philosophy. Religious tolerance & justice for all. Removed Jizya tax, appointed Hindus to high posts, protected temples. Made Mughal rule BENEFICIAL to Hindus/Rajputs, not oppressive. Rajputs could see themselves as PARTNERS in empire, not subordinates. Religious policy transformed political integration from conquest to genuine partnership. Together: Integration + tolerance = Rajputs willingly served because they benefited. They had property rights, religious freedom, political power. Formed core of Mughal military & administration. Made empire stronger militarily (used Rajput military skill) & politically (Rajput loyalty prevented constant rebellion).</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Din-i-Ilahi - Personal Cult Not Public Religion</p>
                  <p className="mb-2">Din-i-Ilahi often misunderstood. Explain why it was personal imperial cult, not public religion meant to replace Islam/Hinduism.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: COMMON MISCONCEPTION: Din-i-Ilahi was Akbar's failed attempt to create new universal religion. REALITY: NOT public religion. Never had mass following. ACTUAL PURPOSE: Personal spiritual order for elite nobility only. Required initiation ceremony. Only select Mansabdars joined. BLENDED ELEMENTS: Monotheism (Islamic), karma/reincarnism (Hindu), light of God (Sufi), truth-seeking (Zoroastrian). But blend was PERSONAL to Akbar, not meant for masses. Most Mughal population remained Muslim or Hindu. DIN-I-ILAHI WAS: Symbol of Akbar's supreme spiritual authority. Bound elite directly to emperor spiritually. Nobles who joined Din-i-Ilahi swore absolute loyalty & saw emperor as divine figure. POLITICAL TOOL: Made imperial authority sacred, beyond question. Complemented Mansabdari (administrative binding) with spiritual binding. Why not public religion? Would alienate Muslim ulema & Hindu masses. Instead, kept empire religiously diverse (Sulh-i-Kul) while binding elite spiritually to emperor. Smart strategy: Religious tolerance for masses, spiritual cult for elite.</p>
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
                  <p className="font-semibold text-red-300">Mansabdari</p>
                  <p>Unified ranking system for imperial officials & military. Each Mansabdar held dual rank: Zat (personal pay/status) & Sawar (military obligation/cavalry count). Created centralized service loyal to emperor.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Zat (Personal Rank)</p>
                  <p>Determined Mansabdar's salary & official status. Higher Zat = higher pay & prestige. Independent of military rank.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Sawar (Military Rank)</p>
                  <p>Determined number of cavalry (horsemen) Mansabdar must maintain. Independent of personal rank. Could be adjusted to control military power.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Zabt (Land Measurement)</p>
                  <p>Systematic measurement of agricultural land. Basis for Akbar's revenue system. Careful, scientific approach to taxation.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Bandobast (Revenue Administration)</p>
                  <p>Organization & administration of Akbar's revenue system. Under Todar Mal, created efficient centralized collection.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Dashala (10-Year Average)</p>
                  <p>Average crop produce calculated over 10 years. Basis for fair fixed cash tax. Protected peasants from single bad year.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Jagir (Land Grant)</p>
                  <p>Land granted to Mansabdars as salary supplement. Revocable by emperor. Created additional financial dependence on crown.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Ibadat Khana (House of Worship)</p>
                  <p>Akbar's palace for religious debates. Initially Islamic, later expanded to Hindu, Jain, Christian, Zoroastrian scholars. Intellectual inquiry space.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-400">
                  <p className="font-semibold text-yellow-200">Sulh-i-Kul (Universal Peace)</p>
                  <p>Philosophy of tolerance & justice for all religions. State principle of Akbar's reign. Made diverse population feel included in empire.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-400">
                  <p className="font-semibold text-orange-200">Din-i-Ilahi (Divine Faith)</p>
                  <p>Akbar's personal spiritual order for select nobles. Blended faiths. Symbol of emperor's supreme spiritual authority. Political tool, not public religion.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-400">
                  <p className="font-semibold text-red-200">Navratnas (Nine Jewels)</p>
                  <p>Nine greatest luminaries of Akbar's court. Included Birbal, Tansen, Todar Mal, Abul Fazl. Represented cultural fusion of empire.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-400">
                  <p className="font-semibold text-purple-200">Fatehpur Sikri</p>
                  <p>Purpose-built capital city (1571-1585). Architectural fusion of Persian & Indian styles. Housed imperial palace & Ibadat Khana. Expressed Akbar's ideological vision.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-400">
                  <p className="font-semibold text-pink-200">Akbarnama</p>
                  <p>Official chronicle by Abul Fazl. Ideological document justifying Akbar's kingship & policies. Model for Mughal political philosophy.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-red-900 to-orange-900 rounded-lg border border-red-700">
          <p className="text-red-200">
            <span className="font-bold">💡 Remember:</span> Akbar was NOT just a military conqueror. He was a SYSTEM BUILDER. His genius was organizational, not just martial. MANSABDARI = integrated diverse ethnicities (Turk, Persian, Rajput) into single, loyal bureaucracy. ZABT/BANDOBAST = made taxation fair & sustainable. SULH-I-KUL = ideological justification for including diverse religions. FATEHPUR SIKRI & AKBARNAMA = cultural projection of ideology. All four worked together. Each innovation solved a real problem: How do you hold a diverse, conquered empire together without constant rebellion? Answer: Give conquered elites genuine power (Mansabdari), make taxation fair (Zabt), guarantee religious freedom (Sulh-i-Kul), project shared cultural vision (Art/Architecture). Akbar created a FUNCTIONING COMPOSITE EMPIRE where diverse groups saw themselves as partners, not subjects. This is why he's considered greatest Mughal. Not his conquests (others conquered), but his SYSTEMS that made empire stable, legitimate, & powerful for 80+ years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkbarNotes;
