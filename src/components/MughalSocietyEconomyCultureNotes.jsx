import React, { useState } from 'react';

const MughalSocietyEconomyCultureNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">🎨 Society, Economy & Culture under the Mughals</h1>
          <p className="text-gray-400">Religious Movements, Art & Architecture, Literature, and Economic Systems</p>
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
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">🙏 Religious Movements: Bhakti & Sikhism</h3>
                  <p>Evolution of popular, devotional faiths challenging social orthodoxy. Bhakti = personal devotion to single god over ritual/caste/priestly mediation. Kabir (formless god, social unity), Guru Nanak (Sikhism, monotheism, equality, honest labor, community service), Mirabai (intense personal devotion, transcending gender & caste). Sikhism evolved from peaceful community to militant brotherhood (Khalsa) under Guru Gobind Singh (1699) in response to persecution. Created shared identity (5 Ks) & duty to resist injustice.</p>
                </div>
                <div className="bg-orange-900 p-4 rounded">
                  <h3 className="font-semibold text-orange-200 mb-2">🏛️ Art & Architecture: The Mughal Aesthetic</h3>
                  <p>Perfect synthesis of Persian (arches, domes, minarets) & Indian (decoration, stone craftsmanship) styles. Charbagh gardens, monumental tombs (Taj Mahal), forts (Agra, Lahore), mosques. Mughal paintings = unique Indo-Persian style—naturalistic detail, portraiture, perspective. Peaked under Jahangir with exquisite nature studies. Grand, synthesized aesthetic projecting imperial ideology. Visible legacy of Mughal achievement.</p>
                </div>
                <div className="bg-pink-900 p-4 rounded">
                  <h3 className="font-semibold text-pink-200 mb-2">📖 Literature: Court & Countryside</h3>
                  <p>Persian = language of administration & high culture. Histories (Akbarnama), poetry flourished at court. Regional languages = primary drivers through Bhakti saints. Tulsidas's Ramcharitmanas (Awadhi) made Ramayana accessible to masses. Surdas's Sursagar (Braj Bhasha) = poetic devotion to Krishna. Period solidified Hindi, Bengali, Marathi as major literary vehicles. Court Persian elite culture vs. popular regional vernacular literature.</p>
                </div>
                <div className="bg-green-900 p-4 rounded">
                  <h3 className="font-semibold text-green-200 mb-2">💰 Economic Structure: Agriculture, Villages & Trade</h3>
                  <p>Agriculture = primary wealth source. Mughal land revenue system (Zabt) maximized cash income from stable, high-yield staples (wheat, cotton, indigo). Village economy = Jajmani system (non-cash, caste-based exchange of services/goods) provided local stability but reinforced caste hierarchies. Internal trade robust. External trade boomed with European Companies (Portuguese, Dutch, English, French) establishing coastal factories. Began shift of global trade power to Europe, sowing seeds for colonial rule.</p>
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
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Bhakti Core Principle</p>
                  <p>EMPHASIZED PERSONAL DEVOTION (bhakti) to single god over ritual, caste hierarchy, priestly mediation. Offered direct, accessible path to spiritual salvation without Brahminical rituals or Sanskrit texts (literacy gate). REVOLUTIONARY: Bypassed priestly classes, challenged caste system's spiritual legitimacy. Made salvation available to all (low castes, women, untouchables). Personal faith & emotional connection = path to divine. Accessibility = mass appeal. Language = local vernacular (not Sanskrit elite monopoly). Saints like Kabir taught formless god beyond religion boundaries. Guru Nanak founded Sikhism on same accessibility principles—one god, no priest needed, equality among all.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-200 mb-2">Architectural Synthesis & Painting Innovation</p>
                  <p>ARCHITECTURE = PERFECT FUSION OF PERSIAN & INDIAN ELEMENTS. Persian innovations: arches (instead of Indian corbels), domes (structural engineering marvel), minarets (elegant towers), calligraphy. Indian innovations: intricate stone decoration, pietra dura (semi-precious stone inlay), garden orientation to cardinal directions. RESULT = Indo-Islamic style unique to Mughal empire. Not purely Islamic, not purely Indian—hybrid that resonated in both communities. PAINTING = Indo-Persian innovation. Mughal ateliers combined Persian miniature techniques with Indian subject matter & Indian artistic sensibility. Naturalistic detail (not Islamic abstraction), perspective (Persian influence), portraiture (Persian + Indian). Peak under Jahangir = exquisite nature studies (flowers, animals, court scenes). Innovation created entirely new artistic tradition.</p>
                </div>
                <div className="bg-pink-900 bg-opacity-30 p-4 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-200 mb-2">Literature: Elite Persian vs. Popular Regional Languages</p>
                  <p>PERSIAN = OFFICIAL LANGUAGE OF ADMINISTRATION & HIGH CULTURE. Court histories (Abul Fazl's Akbarnama, chronicles, administrative records). Persian poetry = elite accomplishment, courtly entertainment. Marked status & education level. REGIONAL LANGUAGES = DRIVEN BY BHAKTI SAINTS. Made religious texts accessible in vernacular. Tulsidas's Ramcharitmanas (Awadhi)—retelling of Ramayana for masses, became cultural backbone of Hindi-speaking regions. Surdas's Sursagar (Braj Bhasha)—devotional poetry to Krishna, spread by communities. These texts SOLIDIFIED Hindi, Bengali, Marathi as major literary languages (no longer just local dialects but vehicles of high literature). IMPACT: Literacy spread, regional identities strengthened, Persian-Sanskrit monopoly on literature broken.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Bhakti Movement's Mass Appeal</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why did people (especially lower castes) embrace Bhakti?</p>
                  <p>Offered direct, accessible path to spiritual salvation without Brahminical rituals, Sanskrit texts, priestly mediation. No gatekeepers. No literacy requirement. No caste restrictions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why was bypassing priests & rituals so appealing?</p>
                  <p>Orthodox CASTE SYSTEM denied spiritual equality & social dignity to majority. Brahminical Hinduism = Brahmin priests monopoly over spiritual authority. Vedas only in Sanskrit (Brahmin knowledge). Rituals expensive & Brahmin-mediated. Lower castes = ritually impure, spiritually limited.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What deeper need did "equality before God" address?</p>
                  <p>Need for SOCIAL DIGNITY & PERSONAL AGENCY. In rigid hierarchy, individual had no voice (birth determined destiny). Bhakti provided framework where devotee's LOVE & FAITH mattered more than birth. Personal connection to divine = personal validation. Song & devotion = form of self-expression unavailable in caste system.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was root social mechanism?</p>
                  <p>SPIRITUAL EMPOWERMENT AS SOCIAL CRITIQUE. By claiming divine is in everyone's heart, Bhakti inherently CHALLENGED LEGITIMACY OF CASTE-BASED POWER. If god accepts Mirabai's devotion despite being woman, then caste (which denies women equality) can't be divinely ordained. Spiritual equality implied social equality should exist.</p>
                </div>
                <div className="bg-amber-900 bg-opacity-40 p-4 rounded border-l-4 border-amber-500 mt-4">
                  <p className="font-bold text-amber-200">Why #5 (Root Truth):</p>
                  <p>Bhakti was NOT just religious trend—it was QUIET SOCIAL REVOLUTION. Used language of devotion to question earthly hierarchies. Made it profoundly popular & resilient because it was spiritually empowering (offered salvation) WHILE BEING socially subversive (challenged caste). Masses embraced it because: 1) direct salvation path, 2) spiritual equality validation, 3) social critique wrapped in devotion (harder to suppress than political rebellion).</p>
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
                <div className="bg-linear-to-r from-purple-900 to-blue-900 p-4 rounded">
                  <p className="font-semibold text-purple-200 mb-2">🙏 The Devotion Wave</p>
                  <p>Imagine a time when ordinary people were tired of fancy priests saying they weren't pure enough for heaven. Poet-singers like KABIR & MIRABAI started saying: "God doesn't care about caste or purity. He just wants your love & singing." They sang in regular people's language, not fancy Sanskrit. A teacher named GURU NANAK started Sikhism on similar ideas—one God, all people equal. Later, when rulers started hurting them for their beliefs, Sikhs formed warrior brotherhood (KHALSA) to protect themselves & fight injustice.</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-blue-200 mb-2">🏛️ The Builders & Artists</p>
                  <p>Meanwhile, Mughal emperors were world-class builders. They mixed Persian style (fancy arches & domes) with Indian style (beautiful stone decoration) to create wonders like TAJ MAHAL—white marble perfection. They also loved art. Their painters created detailed, beautiful pictures of animals, flowers, & court scenes—mixing Persian and Indian styles to create something completely new & stunning.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">📖 The Story Tellers</p>
                  <p>Kings listened to Persian poets at court. But regular people loved poets like TULSIDAS who rewrote the big epic Ramayana (Ramcharitmanas) in their local language so everyone could understand it. SURDAS wrote beautiful poetry about love for Krishna in language farmers could understand. These local-language stories became SUPER POPULAR and helped create Hindi, Marathi, Bengali literature as we know them.</p>
                </div>
                <div className="bg-linear-to-r from-pink-900 to-green-900 p-4 rounded">
                  <p className="font-semibold text-pink-200 mb-2">💰 The Village Economy & Global Connection</p>
                  <p>Economy ran on farming. Villages were self-contained units where different castes did different jobs (blacksmith, farmer, priest) & exchanged services for payment (JAJMANI SYSTEM). Felt fair locally even though caste rules were strict. But then something HUGE happened: EUROPEAN TRADERS (English, French, Dutch) arrived on the coast. They set up little shops (factories) buying Indian goods & selling European goods. This started changing India forever—slowly, trade power moved to Europe & eventually, these traders became rulers.</p>
                </div>
              </div>
            )}
          </div>

          {/* Religious Movements Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('religious')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🙏 Religious Movements: Bhakti & Sikhism</h2>
              <span className="text-2xl">{expandedSection === 'religious' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'religious' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Bhakti Movement Core</p>
                  <p><span className="font-bold">Period:</span> ~15th-18th centuries, peak during Mughal era. <span className="font-bold">Core idea:</span> Personal devotion (Bhakti) to god more important than rituals, caste, priests. <span className="font-bold">Accessibility:</span> Open to all—men, women, low castes, untouchables. No Sanskrit requirement, no priestly mediation. Singing, dancing, emotional connection = legitimate spiritual path. <span className="font-bold">Geography:</span> Pan-Indian movement. North (Kabir, Nanak), West (Jnaneswari, Tukaram), South (Alvar saints), each region developed local expression.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Key Bhakti Saints</p>
                  <p><span className="font-bold">Kabir (1440-1518):</span> Weaver-poet. Preached formless god beyond Hindu-Muslim divide. Rejected both religion's orthodoxies. Songs = social critique (caste, priests, false piety). "Why go to mosque or temple? God is in your heart." Became symbol of Hindu-Muslim unity (both claim him). <span className="font-bold">Guru Nanak (1469-1539):</span> Founded Sikhism. Monotheism (one god, Ik Onkar). Equality (Guru ka Langar = free community meal breaking caste divisions). Honest labor (Kirat Karo) + community service (Sewa). <span className="font-bold">Mirabai (1498-1547):</span> Royal woman who rejected marriage duty to dedicate life to Krishna devotion. Radical—women usually confined. Her songs expressing personal love of god became massively popular. Symbolized that devotion transcends gender, caste, family duty.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Sikhism: From Peace to Militancy</p>
                  <p><span className="font-bold">Early Sikhism (Nanak through 9th Guru Tegh Bahadur):</span> Peaceful community. Emphasis on meditation (Naam Jaap), honesty (Sat), sharing (Vand Chakna). <span className="font-bold">Persecution:</span> Later Gurus faced Mughal persecution, especially under Aurangzeb. 9th Guru Tegh Bahadur executed (1675) for defending Hindu rights. <span className="font-bold">Khalsa Formation (1699):</span> Guru Gobind Singh (10th Guru) transformed Sikhs into KHALSA (pure warrior brotherhood) in response. Required 5 Ks: Kesh (uncut hair), Kangha (comb), Kara (steel bangle), Kachha (shorts), Kirpan (sword). Khalsa oath = duty to fight injustice, defend weak. <span className="font-bold">Militarization:</span> Turned spiritual community into military order. After Gobind Singh's death, Banda Bahadur led Sikh uprising. Later, Maharaja Ranjit Singh created powerful Sikh empire. <span className="font-bold">Significance:</span> Religious response to persecution became political movement. Bhakti-inspired equality philosophy crystallized into distinct political identity.</p>
                </div>
              </div>
            )}
          </div>

          {/* Art & Architecture Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('art')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🏛️ Art & Architecture: The Mughal Aesthetic</h2>
              <span className="text-2xl">{expandedSection === 'art' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'art' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Architecture: The Indo-Islamic Synthesis</p>
                  <p><span className="font-bold">Persian Elements:</span> Arches (more elegant than Indian corbels), domes (mathematical precision, soaring height), minarets (towering, decorative), calligraphy (Islamic artistic tradition), pointed arches. <span className="font-bold">Indian Elements:</span> Intricate stone decoration (arabesques, floral patterns), pietra dura (semi-precious stone inlay—uniquely Mughal), jali (latticed screens), garden layout oriented to cardinal directions. <span className="font-bold">Key monuments:</span> TAJ MAHAL (marble tomb, perfect symmetry, pietra dura), RED FORT Delhi (palace, residential comfort, fortress), AGRA FORT, LAHORE FORT, FATEHPUR SIKRI, JAMA MASJID Delhi. <span className="font-bold">Charbagh (Four Garden):</span> Characteristic Mughal garden. Central water channel dividing into four quadrants (Islamic paradise garden concept). Symmetry, water, shade—paradise garden on earth. Used widely in palaces, tombs, mosques. <span className="font-bold">Innovation:</span> Created style recognized as uniquely Mughal (not purely Persian, not purely Indian). Appealed to both Muslim & Hindu populations. Demonstrated inclusive empire through aesthetics.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Painting: Indo-Persian Miniature Art</p>
                  <p><span className="font-bold">Technique:</span> Small paintings on paper/vellum. Intricate detail, brilliant colors, gold leaf. Mughal ateliers organized by emperor, produced specialized works. <span className="font-bold">Style development:</span> Early Mughal painting influenced by Persian miniatures (Timurid tradition). Over time, absorbed Indian elements—local flora/fauna, Indian faces, Indian composition principles. <span className="font-bold">Peak under Jahangir:</span> Emperor was passionate art lover. Patronage produced exquisite NATURE STUDIES—flowers, animals, birds painted with naturalistic detail & scientific accuracy. His court artist Abu'l Hasan created masterpieces. <span className="font-bold">Subject matter:</span> Court scenes, hunts, battles, nature studies, portraiture (especially Akbar & Jahangir), illustrations of literary texts (Akbarnama, Dastan-i-Amir Hamza). <span className="font-bold">Characteristics:</span> Naturalism (not Islamic abstraction), perspective (Persian innovation), human figures (unlike some Islamic traditions), brilliant colors, narrative detail. <span className="font-bold">Innovation:</span> Created unique Indo-Persian style not seen before. Bridged Persian & Indian artistic traditions. Represents pinnacle of Mughal cultural synthesis.</p>
                </div>
              </div>
            )}
          </div>

          {/* Literature Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('literature')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">📖 Literature: Persian Court & Regional Vernacular</h2>
              <span className="text-2xl">{expandedSection === 'literature' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'literature' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Persian: Language of Elite Culture</p>
                  <p><span className="font-bold">Status:</span> Official administrative language. Language of court, nobility, high culture. <span className="font-bold">Literature:</span> Histories (Abul Fazl's AKBARNAMA—chronicle of Akbar's reign, literary masterpiece; other chronicles documenting reigns), poetry (Ghazals, Mathnawi), administrative records. <span className="font-bold">Prestige:</span> Speaking Persian = mark of education, status, court connection. Brahmin intellectuals learned Persian for career advancement. <span className="font-bold">Scope:</span> Limited to elite audiences (court, nobility, educated merchants). Majority of population didn't understand Persian.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Regional Languages: Bhakti Saints & Literary Revolution</p>
                  <p><span className="font-bold">Bhakti saints = primary drivers of regional literature.</span> Used vernacular languages deliberately to reach masses. Sang in local languages, not Sanskrit or Persian. <span className="font-bold">Tulsidas (1532-1623):</span> Hindu saint. Wrote RAMCHARITMANAS in AWADHI language. Retelling of Ramayana epic in accessible language & devotional tone. Became cultural foundation of Hindi-speaking North India. Even today, widely read & recited. <span className="font-bold">Surdas (~1540-1610):</span> Blind poet. Wrote SURSAGAR in BRAJ BHASHA. Over 5000 poems of intense devotion to Krishna. Language so beautiful it became model for Hindi poetry. <span className="font-bold">Mirabai:</span> Wrote devotional poems in LOCAL LANGUAGES (Rajasthan). Personal, emotional, beautiful. Spread across North India. <span className="font-bold">Regional solidification:</span> These texts solidified Hindi, Bengali, Marathi, Kannada, Tamil as MAJOR LITERARY LANGUAGES. No longer just local dialects—now recognized vehicles of high literature, religious wisdom, artistic expression. <span className="font-bold">Impact:</span> Literacy spread beyond elite. Regional identities strengthened. Persian-Sanskrit monopoly on literature broken. Common person could read/understand important texts in their language.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">The Language Divide: Elite vs. Popular</p>
                  <p><span className="font-bold">Elite culture (court):</span> Persian court histories, Persian poetry, Sanskrit intellectual texts (Brahmin scholars). Elite audiences understood both Sanskrit & Persian. <span className="font-bold">Popular culture (masses):</span> Regional language devotional poetry, folk tales, songs. Common people understood only their regional language. <span className="font-bold">Divergence:</span> During Mughal period, elite & popular culture increasingly separated. Not integrated. Palace culture (Persian-Sanskrit) vs. street culture (regional languages). <span className="font-bold">Later significance:</span> This language split helped shape modern Indian regional identities. Hindi, Bengali, Marathi consciousness based partly on Bhakti saint literature establishing regional language prestige.</p>
                </div>
              </div>
            )}
          </div>

          {/* Economic Structure Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('economy')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">💰 Economic Structure: Agriculture, Village, Trade</h2>
              <span className="text-2xl">{expandedSection === 'economy' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'economy' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Agricultural Base & Revenue System</p>
                  <p><span className="font-bold">Economy:</span> Predominantly agrarian. Agriculture = primary wealth source. <span className="font-bold">Staples:</span> Wheat (North), rice (East & South), cotton (Western India), indigo (dye crop, high-value export). <span className="font-bold">Zabt system (under Akbar-Todar Mal):</span> Land measurement, assessment, tax collection streamlined for cash income maximization. <span className="font-bold">Revenue split:</span> State took 1/3 to 1/2 of production as tax (varied by region/emperor). Farmer kept remainder for family & market sale. <span className="font-bold">Stability:</span> Under Akbar, system was relatively fair. Farmer knew what tax to expect. Under weak emperors or Aurangzeb's warfare, taxation became oppressive (higher rates, corruption). <span className="font-bold">Urban supply:</span> Agricultural surplus supported cities, courts, armies. Cities depended on smooth food flow from countryside.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Village Economy: Jajmani System & Caste-Based Exchange</p>
                  <p><span className="font-bold">Unit:</span> Village was semi-self-sufficient economic unit. 100-500 families typically. <span className="font-bold">Occupational division:</span> Different castes did different jobs—Brahmin (priest/teacher), Kshatriya (landlord/warrior), Vaishya (merchant), Shudra (artisan/laborer), Untouchables (waste removal, leatherwork). <span className="font-bold">Jajmani system:</span> Non-cash, caste-based barter. Farmer (patron/Jajman) received services from artisan/barber/blacksmith (Jajman's dependents). In exchange, artisan received grain share at harvest. Blacksmith maintained farm tools, received grain. Barber cut hair, shaved, received grain. No money changed hands—all in kind (grain). <span className="font-bold">Stability:</span> System created stable, predictable economic relationships. Everyone knew their role, their income (grain share). <span className="font-bold">Dark side:</span> Reinforced caste hierarchy. Castes couldn't change jobs—hereditary occupation. Untouchables (waste removers, leather workers) got least grain, had lowest status. System kept lower castes in permanent subordination. <span className="font-bold">Resilience:</span> System didn't need imperial oversight to function. Villages self-regulated. Survived even when central authority weakened (18th century collapse).</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Internal & External Trade</p>
                  <p><span className="font-bold">Internal trade:</span> Robust. Spice trade (Kerala spices), textile trade (Bengal muslins, Gujarat cotton), metalwork, gemstones. Trading guilds organized commerce. Towns grew as trade hubs. <span className="font-bold">Pre-European trade:</span> Flourished along Indian Ocean. Arab, Persian, Chinese traders came to Indian ports. Indian goods (spices, textiles, indigo) exported westward. <span className="font-bold">European arrival:</span> Portuguese (Vasco da Gama 1498) rounded Cape, reached India seeking spices. Established coastal factories. Dutch, English, French followed. Set up trading posts: Goa (Portuguese), Calcutta/Bengal (English), Pondicherry (French), Surat (initially mixed). <span className="font-bold">Change mechanism:</span> Europeans brought new demand, new capital, new organization. Started monopolizing Indian trade through force (Portuguese naval power). Shifted trade from Indian Ocean (balanced multilateral) to European-controlled (colonial). <span className="font-bold">Long-term impact:</span> Began erosion of Indian merchant power. Wealth flow redirected from Indian ports to European ports. Created "factory" system—small fortified posts, initially for trade, later bases for territorial conquest. Subtle but revolutionary change to India's position in global economy.</p>
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
              <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - How Society, Culture & Economy Connected</h2>
              <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'synthesis' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-green-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-green-200 mb-2">Economy Funded Culture & Art</p>
                  <p>AGRICULTURAL SURPLUS (Zabt system) funded imperial courts, armies, patronage. Emperors had wealth to commission Taj Mahal, support painters, fund poets. Akbar & Jahangir could maintain large ateliers of artists because agricultural revenue was stable & substantial. No agricultural surplus = no resources for art/literature patronage. Economic stability directly enabled cultural flourishing.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-purple-900 p-4 rounded">
                  <p className="font-bold text-orange-200 mb-2">Bhakti Movement Inspired Regional Literature</p>
                  <p>BHAKTI SAINTS deliberately wrote in REGIONAL LANGUAGES to reach masses. This choice directly created corpus of Hindi, Bengali, Marathi literature. Saints weren't just religious—they were LITERARY REVOLUTIONARIES. By making devotion available in local language, they elevated local language to vehicle of high literature. Tulsidas's Ramcharitmanas didn't just spread Bhakti—it ESTABLISHED HINDI as major literary language.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-green-900 p-4 rounded">
                  <p className="font-bold text-purple-200 mb-2">Jajmani System & Bhakti Contradiction</p>
                  <p>JAJMANI SYSTEM = Village economy REINFORCED CASTE HIERARCHY. Hereditary occupations, unequal grain shares, permanent status distinctions. BHAKTI MOVEMENT = Spiritual ideology that CHALLENGED caste equality. "God sees all souls equally." Deep contradiction: economic system kept people in caste boxes; religious movement offered escape through personal devotion. This contradiction was DYNAMIC TENSION that drove the movement's power. Spiritual equality preaching made caste inequalities VISIBLE & PAINFUL—motivated people to seek spiritual compensation for material injustice.</p>
                </div>
                <div className="bg-linear-to-r from-pink-900 to-blue-900 p-4 rounded">
                  <p className="font-bold text-pink-200 mb-2">Mughal Tolerance & Cultural Flourishing</p>
                  <p>AKBAR'S SULH-I-KUL (universal peace) ALLOWED Bhakti saints, Hindu artists, local languages to flourish within Mughal empire. Akbar employed Hindu artists (Dasavant), patronized Sanskrit scholars, allowed temple construction. This TOLERANCE created environment where Bhakti + Indo-Islamic art synthesis could happen simultaneously. AURANGZEB'S ORTHODOXY suppressed this environment. Jizya tax, temple destruction, religious restrictions killed the syncretic space. Militarized Sikhism partly in response. Religious tolerance = cultural synthesis; religious orthodoxy = cultural fragmentation.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-orange-500 mt-4">
                  <p className="font-bold text-orange-300">The Complete Picture:</p>
                  <p>MUGHAL ECONOMY (agricultural surplus, trade wealth) funded MUGHAL ART & ARCHITECTURE (Taj Mahal, fort construction, painting ateliers). BHAKTI MOVEMENT (spiritual egalitarianism) inspired REGIONAL LITERATURE (Tulsidas, Surdas) which elevated regional languages from dialects to literary mediums. VILLAGE JAJMANI SYSTEM (caste-based exchange) provided economic stability but reinforced caste hierarchy, creating social need that Bhakti spiritual equality addressed. SIKHISM (Bhakti-inspired + response to persecution) crystallized into military brotherhood as politicization of spiritual movement. EUROPEAN TRADE ARRIVAL (coastal factories) began subtle but revolutionary shift—wealth flow redirecting from Indian merchants to European companies, setting stage for colonial rule. ALL CONNECTED: Economic stability enabled culture, culture addressed spiritual/social needs created by economic hierarchy, religious tolerance enabled cultural synthesis, but European trade arrival would eventually undermine both the economic surplus & the cultural environment. By 18th century, when imperial authority weakened, European trade dominance was increasing, cultural patronage declined, Bhakti movement faded in favor of political/military movements. Mughal era's society-economy-culture synthesis = beautiful moment in history, soon to be disrupted by global forces.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Bhakti & Regional Literature Connection</p>
                  <p className="mb-2">How did Bhakti Movement directly contribute to development of regional literature (Hindi, Marathi) during Mughal period? Name one saint & language they used.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: BHAKTI SAINTS deliberately chose REGIONAL LANGUAGES instead of Sanskrit/Persian to spread devotional message to masses. This created massive corpus of literature in local languages, establishing them as vehicles of high literature. SPECIFIC EXAMPLE #1: TULSIDAS wrote RAMCHARITMANAS in AWADHI language. It was vernacular retelling of Ramayana with devotional tone. Became foundational text for Hindi literature & North Indian culture. SPECIFIC EXAMPLE #2: SURDAS wrote SURSAGAR in BRAJ BHASHA. Over 5000 poems of devotion to Krishna. So beautiful & influential that Braj Bhasha became recognized as major literary language. SPECIFIC EXAMPLE #3: MIRABAI wrote in LOCAL RAJASTHANI languages. Devotional poems spread across North, influenced regional literature development. MECHANISM: Saints made deliberate choice to use vernacular because: 1) reach common people (who didn't know Sanskrit/Persian), 2) emotional expression flowed better in native language, 3) spiritual message was democratic (available to all, not just educated elite). RESULT: These texts didn't just spread religion—they ELEVATED regional languages from dialects to prestigious literary mediums. Established that important ideas (religion, philosophy, poetry) could be expressed in local languages. This legitimized regional languages & became foundation for modern Hindi, Marathi, Bengali literature.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Jajmani vs. Bhakti Ideology Contradiction</p>
                  <p className="mb-2">Jajmani system & Bhakti saints presented contradictory views of caste. Explain the contradiction.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: JAJMANI SYSTEM = REINFORCED CASTE HIERARCHY. Village economy organized by hereditary castes. Different castes had different jobs (determined by birth). Blacksmith = son was blacksmith. Barber = son was barber. Untouchable = forced to do waste removal. Exchange was in grain (not money)—upper castes received better grain shares, lower castes worse shares. System LOCKED people into permanent caste roles. Reinforced idea that caste was natural, ordained, unchangeable. BHAKTI IDEOLOGY = CHALLENGED CASTE HIERARCHY. Saints taught "God sees all souls equally." Caste doesn't matter for salvation. "God doesn't care if you're untouchable, women, low caste—God accepts your devotion." Essentially saying: spiritual equality should exist, caste-based discrimination is wrong. CONTRADICTION: Economic system said "stay in your caste role," spiritual ideology said "caste doesn't matter." Village system was practical (kept economy running, everyone knew role) but unjust (locked people in). Bhakti was ideologically liberating (offered spiritual escape) but didn't change practical economic realities. SIGNIFICANCE: This contradiction was DYNAMIC & POWERFUL. It made Bhakti SO APPEALING to lower castes—offered validation that their caste status didn't define their spiritual worth. The very injustice of Jajmani system created audience HUNGRY for Bhakti's message of equality. BUT also shows why Bhakti remained primarily spiritual—didn't fundamentally transform village economy (Jajmani continued for centuries).</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: European Trading Companies' Two Fundamental Changes</p>
                  <p className="mb-2">Arrival of European companies (EIC, French, Dutch) in Mughal era introduced two fundamental changes to India's economic & political landscape. What were they?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: CHANGE #1 (ECONOMIC): SHIFT OF TRADE CONTROL from Indian merchants to European companies. PRE-EUROPEAN = Indian merchants (Hindu, Muslim traders) controlled Indian Ocean trade. Goods flowed through Indian ports, wealth accumulated in Indian hands. EUROPEAN ARRIVAL = European companies (especially English EIC) systematically monopolized trade. Used naval power (cannon, ships) to dominate coasts. Established "factories" (fortified posts) at strategic locations. Excluded Indian merchants from profitable trade. Wealth flow REVERSED—instead of Indian merchants exporting goods & keeping profits, Europeans controlled export & extracted profits to Europe. By 18th-19th centuries, India became exporter of raw materials (cotton, indigo, spices) under European control & importer of European manufactured goods. This transfer of economic control was SUBTLE at first (just trading posts) but REVOLUTIONARY in long term. CHANGE #2 (POLITICAL): FROM MERCANTILE PRESENCE TO TERRITORIAL RULE. INITIAL = European companies were traders, not rulers. Operated on Mughal emperor's sufferance. Paid taxes, negotiated with governors. BUT trading posts became MILITARY BASES. Companies built walls, cannons, armies. As Mughal authority weakened (18th century), companies weren't content with trade—started conquering territory. EIC captured Bengal (Battle of Plassey 1757), Mysore, eventually entire subcontinent. MECHANISM: Trading presence → military fortification → political leverage → territorial conquest. LONG TERM: Trade was gateway to political domination. Europeans didn't invade India with armies initially—they arrived as merchants, established trade posts, built military strength, then conquered politically. CONSEQUENCE: India went from being ruled by Indian empires to being ruled by European colonial power. Not conquest by military invasion but by gradual transformation of trading relationship into colonial relationship. TWO CHANGES INTERCONNECTED: Economic control (monopoly on trade) enabled political control (funded military armies). Both happened simultaneously, both sowed seeds for colonialism.</p>
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
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Bhakti (Devotion)</p>
                  <p>Personal emotional devotion to god, central to Bhakti movement. Emphasized sincere love over ritual purity. Made salvation accessible to all without priestly mediation or caste restriction.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Kabir (1440-1518)</p>
                  <p>Weaver-poet saint. Preached formless god beyond Hindu-Muslim divide. Rejected priestly classes & caste. Songs were social critique. Symbol of communal harmony between religions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Guru Nanak (1469-1539)</p>
                  <p>Founder of Sikhism. Preached monotheism, equality (Langar = free community meal), honest labor (Kirat Karo), community service (Sewa). Non-violent spiritual community initially.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Mirabai (1498-1547)</p>
                  <p>Royal woman saint. Renounced family duty for devotion to Krishna. Wrote devotional poetry transcending gender & caste norms. Symbol of spiritual equality & personal agency.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Khalsa (1699)</p>
                  <p>Militant Sikh brotherhood established by Guru Gobind Singh. Required 5 Ks (uncut hair, comb, bracelet, shorts, sword). Transformed Sikhs into warrior order to resist persecution.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Taj Mahal</p>
                  <p>White marble mausoleum built by Shah Jahan for Mumtaz Mahal. Perfect example of Indo-Islamic architectural synthesis. Symbol of Mughal aesthetic excellence.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Charbagh (Four Garden)</p>
                  <p>Characteristic Mughal garden with water channel dividing into four quadrants. Represents Islamic paradise garden concept. Used in palaces, tombs, mosques.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Pietra Dura</p>
                  <p>Semi-precious stone inlay technique. Uniquely Mughal innovation. Intricate floral patterns inlaid in marble. Peak example = Taj Mahal inlay work. Requires extraordinary craftsmanship.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-indigo-500">
                  <p className="font-semibold text-indigo-300">Akbarnama</p>
                  <p>History of Akbar's reign written by Abul Fazl in Persian. Literary masterpiece chronicling administration, policies, achievements. Illustrated with paintings. Key historical source.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-lime-500">
                  <p className="font-semibold text-lime-300">Tulsidas & Ramcharitmanas</p>
                  <p>Saint-poet who wrote Ramcharitmanas in Awadhi language. Vernacular retelling of Ramayana epic. Made epic accessible to masses. Became cultural foundation of Hindi-speaking North India.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-fuchsia-500">
                  <p className="font-semibold text-fuchsia-300">Surdas & Sursagar</p>
                  <p>Blind poet saint. Wrote over 5000 devotional poems in Braj Bhasha. Personal, intense love poetry for Krishna. Established Braj Bhasha as major literary language.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-amber-200">Jajmani System</p>
                  <p>Non-cash, caste-based village economic exchange. Different castes provided services (blacksmith, barber, priest); farmer provided grain payment. Reinforced caste hierarchy while providing stability.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-rose-500">
                  <p className="font-semibold text-rose-300">Zabt Revenue System</p>
                  <p>Land measurement, assessment, tax collection system under Akbar & Todar Mal. Streamlined & rationalized revenue collection. Maximized cash income from agriculture for state treasury.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-sky-500">
                  <p className="font-semibold text-sky-300">European Trading Companies</p>
                  <p>Portuguese (Goa), Dutch (Cochin), English (EIC, Calcutta), French (Pondicherry) established coastal factories for trade. Started as traders, evolved into military/territorial powers. Gateway to colonialism.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-purple-900 to-orange-900 rounded-lg border border-purple-700">
          <p className="text-purple-200">
            <span className="font-bold">💡 Remember:</span> Mughal era's society was COMPLEX SYNTHESIS. ECONOMIC SURPLUS (agriculture, trade) funded CULTURAL MAGNIFICENCE (Taj Mahal, painting, courts). RELIGIOUS MOVEMENTS (Bhakti, Sikhism) offered spiritual equality while VILLAGE ECONOMIES (Jajmani) reinforced caste hierarchy—TENSION that made Bhakti powerful. BHAKTI SAINTS created REGIONAL LITERATURE that elevated local languages from dialects to prestigious mediums. ART & ARCHITECTURE combined Persian & Indian elements into unique synthesis reflecting inclusive empire. LITERATURE split into elite Persian (court) vs. popular regional (masses). ECONOMY was internally robust (agriculture + trade) but EUROPEAN ARRIVAL began subtle transformation—trade posts → military bases → territorial conquest. Mughal era looks internally beautiful (culture, art, harmony) but EXTERNAL VULNERABILITY (no unified naval power, competing regional interests) made it susceptible to European conquest. By 18th century, combination of internal weakening (Aurangzeb's wars, succession conflicts) + external European pressure = collapse of synthesis, fragmentation into regional pieces, eventual colonialism. Society-Economy-Culture was mutually reinforcing system that worked brilliantly under strong, tolerant emperors (Akbar, Jahangir, Shah Jahan) but proved fragile when center weakened or became intolerant (Aurangzeb) OR when external powers (European traders) exploited weakness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MughalSocietyEconomyCultureNotes;
