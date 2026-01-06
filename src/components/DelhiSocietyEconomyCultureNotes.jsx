import React, { useState } from 'react';

const DelhiSocietyEconomyCultureNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">🎨 Society, Economy & Culture</h1>
          <p className="text-gray-400">The Social, Economic, and Cultural Fabric of Delhi Sultanate (1206-1526)</p>
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
                  <h3 className="font-semibold text-red-200 mb-2">👥 Social Structure & Composition</h3>
                  <p>Hierarchy from ruling elite to common people. Turkish-Persian Muslim elite at top, Indian Muslim converts below, vast Hindu majority at base in caste hierarchy. Slavery was established institution.</p>
                </div>
                <div className="bg-yellow-900 p-4 rounded">
                  <h3 className="font-semibold text-yellow-200 mb-2">💰 Economic Systems & Activities</h3>
                  <p>Predominantly agrarian. Land revenue (Kharaj) = primary income (1/3 to 1/2 produce). Iqta system = fiscal-military backbone. Trade/commerce flourished: internal roads/sarais, external with Islamic world & Southeast Asia, regulated markets, bimetallic currency.</p>
                </div>
                <div className="bg-blue-900 p-4 rounded">
                  <h3 className="font-semibold text-blue-200 mb-2">🏛️ Cultural & Architectural Synthesis</h3>
                  <p>Indo-Islamic architecture born: Islamic traits (arches, domes, minarets) + Indian traits (decorative motifs, corbelling, stone masonry). Persian official language. Amir Khusrau exemplified synthesis. Sufism + manuscript illumination.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">🙏 Religious Life & Interactions</h3>
                  <p>Official Islamic state. Orthodox Sharia vs Mystic Sufism (Chishti, Suhrawardi orders). Hindu society continued at village level. Elite syncretism but also conflict (temple destruction, jizya tax). Two populations, one shared space.</p>
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
                  <p className="font-semibold text-red-200 mb-2">Society Core</p>
                  <p>SHARPLY DIVIDED by political power and religion. Turkish-Persian elite → Indian Muslim converts → Hindu majority (caste hierarchy). Sultan/nobility apex. Slavery established. Most lived as peasants bearing tax burden.</p>
                </div>
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-200 mb-2">Economy Core</p>
                  <p>PREDOMINANTLY AGRARIAN. Land revenue (Kharaj) = 1/3 to 1/2 of produce = primary state income. Iqta system = fiscal-military backbone linking revenue to military service. Trade + commerce = secondary but important.</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-200 mb-2">Culture Core</p>
                  <p>INDO-ISLAMIC FUSION was pragmatic & ground-up. Islamic patrons + Indian artisans = hybrid style. Persian official language. Amir Khusrau = synthesis exemplar. Sufism used local language and music for devotion.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Religion Core</p>
                  <p>OFFICIAL ISLAM but with TWO STREAMS: Orthodox (Sharia, Ulema) vs Mystic (Sufism, local devotion). Hindu society undisturbed at village level. Elite syncretism balanced with conflict and tension.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Indo-Islamic Architecture</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why did new architectural style emerge?</p>
                  <p>New Muslim rulers needed to build mosques, tombs, forts in India using local materials and craftsmen</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why use local craftsmen and materials?</p>
                  <p>Practical and economical. Skilled Indian stonemasons available, trained in indigenous temple-building traditions</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What happened when local craftsmen followed Islamic designs?</p>
                  <p>They INTERPRETED new requirements through existing skills. Used corbelling to mimic true arches. Applied intricate floral/geometric carving to fill spaces meant for calligraphy.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was root cultural mechanism?</p>
                  <p>TECHNOLOGICAL & AESTHETIC SYNTHESIS. Islamic patrons = function/form. Indian artisans = technique/decoration. Result = hybrid that was neither purely old nor purely new.</p>
                </div>
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded border-l-4 border-blue-500 mt-4">
                  <p className="font-bold text-blue-200">Why #5 (Root Truth):</p>
                  <p>CULTURAL FUSION was pragmatic, GROUND-UP PROCESS driven by necessities of construction & daily interaction between patrons & artisans. More important than official policy. The STONE itself tells story of adaptation.</p>
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
                  <p className="font-semibold text-red-200 mb-2">👥 The People & Society</p>
                  <p>A new group of bosses move into a big neighborhood. They speak Persian, have their own rules. They're at the top, their friends below them. But all the regular people—farmers, traders, craftspeople—keep living similar lives. Some get taxed more. Some convert to the new religion. Most just keep their customs, following caste rules in villages.</p>
                </div>
                <div className="bg-linear-to-r from-yellow-900 to-amber-900 p-4 rounded">
                  <p className="font-semibold text-yellow-200 mb-2">💰 How They Made Money</p>
                  <p>The main job for most people was farming. The bosses' main income was a big share of the crops—like taking 1/3 of everything grown. They used this to pay soldiers and build cities. Trade was also big. New roads and markets were set up, and they made their own coins (combining silver and copper).</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-cyan-900 p-4 rounded">
                  <p className="font-semibold text-blue-200 mb-2">🏛️ Buildings & Art</p>
                  <p>The bosses say, "Build us a tall tower with arches and domes—our way." But all the best builders are locals with their own style. So they figure it out. They use their old methods to create new shapes. Mix the boss's love for big domes and tall towers with their own amazing skill for carving beautiful patterns into stone. Created brand-new look—two art styles merged into one.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-purple-200 mb-2">🙏 Religion & Spirit</p>
                  <p>The bosses follow their own religion, and it becomes the official one. But some holy men from the new religion sing beautiful poems and talk about love and connection to God in a simple way. They use the local language and music. Many people from both religions are attracted to them. It's like a slow blend of old and new spiritual ways happening naturally.</p>
                </div>
              </div>
            )}
          </div>

          {/* Key Features */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('features')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">5️⃣ Key Economic & Social Features</h2>
              <span className="text-2xl">{expandedSection === 'features' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'features' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-200">Kharaj (Land Revenue)</p>
                  <p>Tax on produce. Typically 1/3 to 1/2 of harvest collected by state. Primary income source. Borne by peasants and lower classes.</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="font-bold text-blue-200">Internal Trade Network</p>
                  <p>Roads connecting major cities. Sarais (inns) for merchants. Regulated markets. Delhi became major commercial center. Textiles, spices, manufactured goods.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-bold text-purple-200">External Trade</p>
                  <p>Connections to Islamic world (Persian Gulf, Central Asia) and Southeast Asia. Indian textiles and spices exported. Luxury goods imported. Integrated into larger Afro-Eurasian trade network.</p>
                </div>
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="font-bold text-green-200">Bimetallic Currency</p>
                  <p>Silver Tanka and copper Jital introduced by Iltutmish. Standardized coinage allowed trade. Helped regulate economy.</p>
                </div>
                <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="font-bold text-red-200">Jizya Tax</p>
                  <p>Special tax on non-Muslims (mainly Hindus). Paid in exchange for religious exemption and state protection. Source of tension and social friction.</p>
                </div>
              </div>
            )}
          </div>

          {/* Architecture */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('architecture')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🏛️ Indo-Islamic Architecture & Culture</h2>
              <span className="text-2xl">{expandedSection === 'architecture' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'architecture' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Qutub Minar Complex</p>
                  <p>Started by Qutb-ud-din Aibak. Tall minaret (tower). Islamic feature (minaret). Indian feature (intricate stone carving). Shows fusion perfectly.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Alai Darwaza (Alauddin's Gate)</p>
                  <p>Built by Alauddin Khalji. First structure in India with true Islamic arch and dome. Combination of Islamic geometry with Indian stone carving mastery.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Tughlaqabad Fort</p>
                  <p>Ghiyas-ud-din Tughlaq. Massive fortification. Practical military architecture. Uses corbelling (Indian technique) and defensive planning.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Persian Language & Literature</p>
                  <p>Official court language. Administrative documents in Persian. Literary works patronized. Sanskrit and regional languages (Hindavi) continued among common people.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Amir Khusrau (1253-1325)</p>
                  <p>Exemplar of synthesis. Composed poetry in BOTH Persian and Hindavi. Innovative in music. Bridged cultures. Patronized by Delhi rulers.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Sufi Music (Qawwali)</p>
                  <p>Mystic saints used music and devotional singing. Often in local languages. Attracted both Muslim and Hindu followers. Emphasis on love, personal connection to God.</p>
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
                <div className="bg-linear-to-r from-yellow-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-yellow-200 mb-2">Economic Resources Fund Social Structure</p>
                  <p>LAND REVENUE & TRADE provided wealth. This wealth funded the elite class, paid soldiers, supported nobility. Economic prosperity = strong social hierarchy with rich rulers and powerful nobles.</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-cyan-900 p-4 rounded">
                  <p className="font-bold text-blue-200 mb-2">Wealth Enables Cultural Patronage</p>
                  <p>Elite's resources funded architectural projects (Qutub Minar, Alai Darwaza), literary patronage (Amir Khusrau), religious endowments (waqfs). Grand monuments and cultural achievements = symbols of power.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-bold text-purple-200 mb-2">Religion Influenced Social & Cultural Expression</p>
                  <p>Official Islam shaped elite culture (Persian language, Islamic law). But SUFISM used local languages and music, attracting common people. Religious syncretism = cultural fusion (Amir Khusrau, Qawwali).</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-red-200 mb-2">Social Divisions Shaped Economic Extraction</p>
                  <p>Peasants (Hindu & Muslim) bore tax burden. Elite (Turkish-Persian nobles) collected and benefited. Caste system + religious divisions = multiple layers of extraction and separation.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-500 mt-4">
                  <p className="font-bold text-yellow-300">Complete Picture:</p>
                  <p>The Delhi Sultanate was an INTEGRATED SYSTEM where ECONOMY generated resources, SOCIETY organized people into hierarchy to control them, and CULTURE expressed the power of elites while slowly FUSING with local traditions. The stone monuments, Persian courts, and Sufi songs were all expressions of the same underlying system—where new rulers used resources extracted from peasants to build monuments that would outlast them.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Iqta System's Multi-Role</p>
                  <p className="mb-2">How did the Iqta system connect a Muqti's economic function to his social/political role?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: ECONOMIC: Muqti collected land revenue from assigned territory = his primary income source. POLITICAL: Muqti was a noble with power to govern, appoint officials, maintain order. MILITARY: Muqti supplied soldiers to Sultan = defense responsibility. SOCIAL: Muqti's wealth & status came from Iqta, so his LOYALTY to Sultan determined his PROSPERITY. The three were inseparable—economic function = political power = social status.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Qutub Minar's Architectural Fusion</p>
                  <p className="mb-2">How does Qutub Minar physically demonstrate Indo-Islamic synthesis? Name one Islamic and one Indian feature.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: ISLAMIC FEATURE: The minaret itself (tall tower)—Islamic tradition for call to prayer. Arches and dome design. INDIAN FEATURE: Intricate stone carving covering the surface—floral and geometric patterns carved into stone—Indian masonry tradition. SYNTHESIS: A structure that is functionally Islamic (minaret) but decorated with Indian craftsmanship. Combines patrons' vision with artisans' skill.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Orthodox vs Sufi Approaches</p>
                  <p className="mb-2">Contrast Orthodox Ulema and Sufi saints in religious life. How did each interact with broader population?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: ORTHODOX ULEMA: Based on Sharia law. Supported state (Diwan-i-Risalat). Focused on legal/theological correctness. Interaction: Top-down, through courts, legal authority, scholarly debate. Elite audience. SUFI SAINTS: Mystical, personal devotion. Used local language and music (qawwali). Emphasized love and direct connection to God. Interaction: Bottom-up, through poetry, singing, direct appeal to hearts. Attracted BOTH Muslim AND Hindu followers. More accessible to common people.</p>
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
                  <p className="font-semibold text-yellow-300">Kharaj</p>
                  <p>Land revenue tax. 1/3 to 1/2 of agricultural produce. Primary state income. Borne by peasants.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Jizya</p>
                  <p>Tax on non-Muslims (mainly Hindus). Paid for religious exemption and state protection. Source of social friction.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Sarais</p>
                  <p>Inns along trade routes. Provided lodging and rest for merchants. Facilitated internal trade network.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Tanka & Jital</p>
                  <p>Bimetallic currency. Silver Tanka (higher value) and copper Jital (lower value). Standardized coinage by Iltutmish.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Corbelling</p>
                  <p>Indian stone construction technique. Stacking stones in steps to mimic arch effect. Used to create Islamic forms with Indian methods.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Qawwali</p>
                  <p>Sufi devotional music. Used singing, poetry, local language. Created ecstatic religious experience. Attracted common followers.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Chishti & Suhrawardi Orders</p>
                  <p>Major Sufi orders in Sultanate. Emphasized personal devotion, love, music. Very popular especially Chishti.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-red-900 to-purple-900 rounded-lg border border-red-700">
          <p className="text-red-200">
            <span className="font-bold">💡 Remember:</span> The Delhi Sultanate INTEGRATED SYSTEM: ECONOMY (agrarian taxes, trade) provided resources → SOCIETY (elite-dominated hierarchy) extracted and controlled them → CULTURE (Indo-Islamic fusion, Sufi poetry) expressed power and created lasting beauty. New rulers + local artisans + shared space = pragmatic fusion more important than official policy. The monuments and music tell stories of adaptation and coexistence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DelhiSocietyEconomyCultureNotes;
