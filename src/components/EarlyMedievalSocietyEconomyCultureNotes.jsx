import React, { useState } from 'react';

const EarlyMedievalSocietyEconomyCultureNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">🌸 Society, Economy & Culture in Early Medieval India</h1>
          <p className="text-gray-400">Social, Economic, and Cultural Transformations (c. 700-1200 CE)</p>
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
                  <h3 className="font-semibold text-blue-200 mb-2">🏰 Feudal Structure & Economic Changes</h3>
                  <p>Pyramid of land grants from king to samantas/brahmins. Rise of self-sufficient rural villages (*brahmadeya, agrahara*). Peasants tied to land. Urban revival from 9th century. Powerful Trade Guilds (*Shrenis*) controlling production, standards, banking.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">💖 Early Bhakti Movement</h3>
                  <p>Passionate theistic movement (6th-9th centuries) originating in Tamilakam (South). Alvars (Vishnu devotees) & Nayanars (Shiva devotees). Rejected ritual complexity & caste privilege. Emphasized personal love, song, emotional connection. Poetry in Tamil (*Divya Prabandham*, *Tirumurai*). Challenged Jain & Buddhist asceticism.</p>
                </div>
                <div className="bg-indigo-900 p-4 rounded">
                  <h3 className="font-semibold text-indigo-200 mb-2">🧠 Shankaracharya & Advaita Vedanta</h3>
                  <p>8th century philosopher. Core: Atman (individual soul) = Brahman (ultimate reality). Perceived world (*maya*) = illusion. Organized Hindu monasticism via four *mathas* (monasteries) across India. Standardized doctrine, countered Buddhism & Jainism with intellectual philosophy.</p>
                </div>
                <div className="bg-pink-900 p-4 rounded">
                  <h3 className="font-semibold text-pink-200 mb-2">🗣️ Rise of Regional Languages</h3>
                  <p>First major literary productions in regional languages (Apabhramsha, early Marathi, Telugu, Kannada). Catalysts: Bhakti saints composing in vernacular, regional court patronage. Languages needed to reach masses. Displaced Sanskrit monopoly. Formation of distinct regional literary identities.</p>
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
                  <p className="font-semibold text-blue-200 mb-2">Feudal System Core</p>
                  <p>PYRAMID OF LAND GRANTS. King grants land + villages to samantas/brahmins for military service or religious merit. Grantees sub-grant land = hierarchy of loyalty based on land control. SELF-SUFFICIENT RURAL ECONOMY centered on granted village. Peasants tied to land providing surplus. URBAN REVIVAL from 9th century. Trade Guilds (*Shrenis*) = powerful corporate bodies controlling production, standards, acting as banks, having militias.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-200 mb-2">Bhakti Movement Core</p>
                  <p>PASSIONATE THEISTIC MOVEMENT (6th-9th centuries, Tamilakam). ALVARS = Vishnu devotees. NAYANARS = Shiva devotees. REJECTED ritual complexity & caste privilege. Emphasized PERSONAL LOVE, SONG, EMOTIONAL CONNECTION with divine. Poetry in TAMIL (*Divya Prabandham*, *Tirumurai*) collected. CHALLENGED Jain & Buddhist asceticism. Revived mainstream Hinduism through emotional devotion.</p>
                </div>
                <div className="bg-indigo-900 bg-opacity-30 p-4 rounded border-l-4 border-indigo-500">
                  <p className="font-semibold text-indigo-200 mb-2">Shankaracharya & Advaita Core</p>
                  <p>SHANKARACHARYA (8th century) = philosopher providing intellectual framework for Hinduism. ADVAITA (Non-Dualism) = atman (individual soul) = Brahman (ultimate reality). Perceived world (*maya*) = illusion. ORGANIZED HINDU MONASTICISM via four *mathas* across India. Standardized doctrine. Countered Buddhism & Jainism with intellectual philosophy.</p>
                </div>
                <div className="bg-pink-900 bg-opacity-30 p-4 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-200 mb-2">Regional Languages Core</p>
                  <p>FIRST MAJOR LITERARY PRODUCTIONS in regional languages (Apabhramsha, Marathi, Telugu, Kannada). PRIMARY CATALYSTS = Bhakti saints composing in vernacular + regional court patronage. Bhakti poetry needed to REACH MASSES = used local languages. Displaced SANSKRIT MONOPOLY. Formation of DISTINCT REGIONAL LITERARY IDENTITIES. Languages became vehicles for high culture outside priestly circles.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Why Bhakti Emphasized Personal Devotion</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why seek alternative to ritualistic Vedic religion?</p>
                  <p>Complex rituals controlled by Brahmin priests were INACCESSIBLE to most people (lower castes, non-Sanskrit speakers). Priestly monopoly = exclusion.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why was accessibility so important in this period?</p>
                  <p>COMPETITIVE RELIGIOUS LANDSCAPE (Buddhism, Jainism) offered simpler, more EGALITARIAN paths to spiritual fulfillment. People had alternatives. Competition forced Hinduism to adapt.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What deeper human need did Bhakti address?</p>
                  <p>Need for EMOTIONAL FULFILLMENT & PERSONAL, LOVING RELATIONSHIP with divine. Abstract rituals or ascetic renunciation could not provide this intimate connection.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was root social mechanism of appeal?</p>
                  <p>OFFERED SPIRITUAL EMPOWERMENT & AGENCY to the disprivileged. By claiming intense love for God was ONLY QUALIFICATION, it BYPASSED hierarchy of caste, gender, literacy. Anyone could achieve salvation.</p>
                </div>
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded border-l-4 border-purple-500 mt-4">
                  <p className="font-bold text-purple-200">Why #5 (Root Truth):</p>
                  <p>Bhakti was DEMOCRATIZING FORCE in Indian religion. TRANSFERRED SPIRITUAL AUTHORITY from institutions (temples, priestly class) and texts (Vedas) to INDIVIDUAL'S HEART and to POET-SAINT who gave voice to emotion in people's tongue. Emotional truth {`>`} textual authority. Common person = saints.</p>
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
                <div className="bg-linear-to-r from-blue-900 to-cyan-900 p-4 rounded">
                  <p className="font-semibold text-blue-200 mb-2">🏰 The Decentralized Kingdom</p>
                  <p>Imagine king can't manage everything himself. Gives big pieces of land to top friends and generals, making them local bosses. They give smaller pieces to their friends. Everyone's loyalty tied to land they get. This made villages very important and self-sufficient. Each village had its own economy, mostly farming.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-semibold text-purple-200 mb-2">💖 The Beautiful Religious Change</p>
                  <p>At same time, something beautiful happening with religion, especially in the south. People tired of complicated ceremonies in language no one spoke (Sanskrit). Poet-saints started saying, "Forget all rules! Just love God with all your heart—sing to him, dance for him, think of him like best friend or parent." They sang amazing songs in local Tamil language everyone understood. Just pure emotion and love.</p>
                </div>
                <div className="bg-linear-to-r from-indigo-900 to-blue-900 p-4 rounded">
                  <p className="font-semibold text-indigo-200 mb-2">🧠 The Philosopher's Explanation</p>
                  <p>A bit later, super-smart philosopher named Shankara came and said, "Actually, God and you are same thing—like drop of water and ocean. Everything else we see is just magical illusion." He organized monks across the kingdom to teach this idea. Philosophy + devotion = complete picture of God.</p>
                </div>
                <div className="bg-linear-to-r from-pink-900 to-purple-900 p-4 rounded">
                  <p className="font-semibold text-pink-200 mb-2">🗣️ Local Languages Flourish</p>
                  <p>Because saints used everyday language and because every local boss wanted to support his own local culture, languages like Marathi, Telugu, Kannada started getting own rich literature. They moved out of shadow of ancient Sanskrit. It was time of local power, local language, very personal God.</p>
                </div>
              </div>
            )}
          </div>

          {/* Feudal System */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('feudal')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🏰 Feudal Structure in Detail</h2>
              <span className="text-2xl">{expandedSection === 'feudal' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'feudal' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Land Grant System</p>
                  <p><span className="font-bold">Pyramid structure:</span> King grants land to Samantas (military chiefs/barons). Samantas sub-grant to smaller chiefs. Each holder's loyalty based on land control. <span className="font-bold">Returns:</span> Military service from Samantas, religious merit/rituals from Brahmins.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Village Economy</p>
                  <p><span className="font-bold">Brahmadeya:</span> Villages granted to Brahmins. <span className="font-bold">Agrahara:</span> Settlements of Brahmin villages. <span className="font-bold">Self-sufficiency:</span> Villages produced own food, tools, clothes. Peasants tied to land, providing surplus to landholder. Local temple often controlled village activities.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Urban Revival & Guilds</p>
                  <p><span className="font-bold">9th century onwards:</span> Trade & urban centers grew despite rural focus. <span className="font-bold">Shrenis (Trade Guilds):</span> Powerful corporate bodies. Controlled production, set standards, acted as banks, had militias. Merchant guilds became wealthy and influential. Urban centers = craft production + trade.</p>
                </div>
              </div>
            )}
          </div>

          {/* Bhakti Saints */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('bhakti')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">💖 Bhakti Movement - Alvars & Nayanars</h2>
              <span className="text-2xl">{expandedSection === 'bhakti' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'bhakti' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Alvars (Vishnu Devotees)</p>
                  <p>Tamil poet-saints (6th-9th centuries). Devotees of Vishnu. 12 major Alvars composed passionate devotional poetry. Emphasized LOVE (*bhakti*) over ritual. Poetry collected as <span className="font-bold">*Divya Prabandham*</span>. Used Tamil—language of common people. Made spirituality accessible.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Nayanars (Shiva Devotees)</p>
                  <p>Tamil poet-saints (6th-9th centuries). Devotees of Shiva. 63 major Nayanars composed devotional hymns. Emphasized passionate LOVE for Shiva. Poetry collected as <span className="font-bold">*Tirumurai*</span>. Also used Tamil vernacular. Stories of their devotion became legends.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Revolutionary Impact</p>
                  <p>REJECTED caste hierarchy—saints came from multiple castes. REJECTED Vedic complexity—no Sanskrit monopoly. EMPHASIZED personal emotion over institutional authority. CHALLENGED Buddhism & Jainism by reviving Hinduism with emotional appeal. Made Hinduism ACCESSIBLE to all. Poetry in Tamil = poetry of masses.</p>
                </div>
              </div>
            )}
          </div>

          {/* Shankaracharya */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('shankara')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🧠 Shankaracharya & Advaita Vedanta</h2>
              <span className="text-2xl">{expandedSection === 'shankara' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'shankara' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-indigo-500">
                  <p className="font-semibold text-indigo-300">Shankara's Life & Mission</p>
                  <p>8th century philosopher. Lived 32 years but profoundly shaped Hindu philosophy. Goal: Counter the influence of Buddhism & Jainism through intellectual argument. Traveled across India. Wrote commentaries on Vedas. Provided philosophical framework for revived Hinduism.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Advaita (Non-Dualism)</p>
                  <p><span className="font-bold">Core principle:</span> ATMAN (individual soul) = BRAHMAN (ultimate reality). You are God. Difference = illusion. <span className="font-bold">Maya:</span> The perceived world of multiplicity is an illusion—not real, yet not entirely unreal. Like a dream.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Organizational Legacy</p>
                  <p>Established FOUR MATHAS (monasteries) across India: Sringeri (south), Dwarka (west), Badrinath (north), Jyotirmath (north). Centers of learning & authority. Standardized Advaita doctrine. Created institutional framework for Hindu monasticism. Countered Buddhist monasteries with Hindu alternative.</p>
                </div>
              </div>
            )}
          </div>

          {/* Regional Languages */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('languages')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🗣️ Rise of Regional Languages</h2>
              <span className="text-2xl">{expandedSection === 'languages' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'languages' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Move Beyond Sanskrit</p>
                  <p>For centuries, Sanskrit = only language of high literature & learning. Controlled by Brahmins. Most people spoke regional languages. This period = FIRST MAJOR LITERARY PRODUCTIONS in regional languages: Apabhramsha, early Marathi, Telugu, Kannada, Oriya. Sanskrit monopoly broken.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Bhakti Saints as Catalysts</p>
                  <p>Bhakti saints CHOSE vernacular languages intentionally. Why? To REACH THE MASSES. Devotion meant nothing if only priests could understand. Poetry in Tamil, Telugu, Marathi = poetry of the people. Saints gave literary prestige to regional languages. They became vehicles for spiritual expression.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Regional Court Patronage</p>
                  <p>Regional kings & courts patronized local literature as part of building regional identity. Wanted their own poets, their own epics, their own literary traditions. Court patronage = economic support for writers. Encouraged creation of regional literary works.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Literary Flowering</p>
                  <p>Regional languages developed DISTINCT LITERARY IDENTITIES. Tamil had ancient Sangam tradition, now revived. Telugu, Kannada, Marathi developed own unique styles influenced by Bhakti. Each region's language = expression of its cultural identity. Sanskrit slowly became language of learned circles only, not common culture.</p>
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
                  <p className="font-bold text-blue-200 mb-2">Power Becomes Local</p>
                  <p>FEUDAL STRUCTURE = decentralized political & economic centers. Kings gave land to regional chiefs. Created self-sufficient villages & local economies. Regional courts became important cultural patrons.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-pink-900 p-4 rounded">
                  <p className="font-bold text-purple-200 mb-2">Bhakti Uses Local Languages</p>
                  <p>BHAKTI MOVEMENT arose in this decentralized context. Poet-saints composed in regional languages to reach masses. Regional courts patronized Bhakti literature. Bhakti poetry became prestigious vehicle for regional languages. Emotional devotion + local language = cultural flowering.</p>
                </div>
                <div className="bg-linear-to-r from-indigo-900 to-purple-900 p-4 rounded">
                  <p className="font-bold text-indigo-200 mb-2">Philosophy Provides Intellectual Backbone</p>
                  <p>SHANKARACHARYA'S philosophy provided intellectual framework complementing Bhakti's emotional appeal. Advaita (you are God) validated Bhakti (love God, who is you). Philosophy + Devotion + Local Language = complete transformation of Hindu expression.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-500 mt-4">
                  <p className="font-bold text-yellow-300">Complete Picture:</p>
                  <p>Power became LOCAL with feudal grants. In world of local centers, new RELIGIOUS WAVE swept through. Poet-saints said path to God = loving devotion, not complicated rituals. They sang in LOCAL LANGUAGES everyone spoke. Great philosopher said our true self = God (*atman = brahman*). This focus on LOCAL LIFE, PERSONAL FAITH, people's own WORDS made languages like Marathi, Telugu grow into rich literary traditions. Early Medieval India = localization of power, emotion, and language.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Land Grants Enable Regional Languages</p>
                  <p className="mb-2">How did feudal practice of land grants contribute to conditions allowing regional languages to develop?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: Feudal system DECENTRALIZED power to regional chiefs and kings. Each region had own court and economy. These regional courts became PATRONS of local culture and literature. Without decentralization, power would remain with centralized Sanskrit-using bureaucracy. Feudalism ENABLED regional autonomy. Regional autonomy = cultural independence = regional language development. Land grants → regional power centers → regional patronage → regional literature.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Different Methods - Alvars/Nayanars vs Shankaracharya</p>
                  <p className="mb-2">Both were responding to Buddhist/Jain challenges. How did their methods differ fundamentally?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: ALVARS/NAYANARS = EMOTIONAL DEVOTION approach. Used POETRY & SONG in Tamil. Appealed to HEART and EMOTION. Made Hinduism accessible through FEELING & PERSONAL LOVE. Bottom-up movement—common people became saints through intense devotion. SHANKARACHARYA = INTELLECTUAL PHILOSOPHY approach. Used rigorous logic and Vedic interpretation (*Advaita*). Appealed to INTELLECT & REASON. Created institutional framework (mathas, monasteries). Top-down movement—established philosophical authority. One used people's poetry (emotional, vernacular). Other used priests' logic (intellectual, Sanskrit). Both countered Buddhist/Jain challenge but through completely different methods: heart vs. mind.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Revolutionary Act of Regional Languages</p>
                  <p className="mb-2">Why was use of regional languages by Bhakti saints not just practical choice but revolutionary act? What did it challenge?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: Using REGIONAL LANGUAGES was REVOLUTIONARY because it challenged BRAHMANICAL-SANSKRIT MONOPOLY on high culture and spiritual authority. Sanskrit = language of Vedas, priesthood, elite learning. By composing in Tamil, Telugu, Marathi, Bhakti saints said: "Sacred truth is NOT locked in Sanskrit. God speaks in your language. Your language is enough." This TRANSFERRED AUTHORITY from Brahmin-controlled Sanskrit texts to COMMON LANGUAGE {`&`} COMMON PEOPLE. It said: peasant devotee in local language {`>`} learned Brahmin in Sanskrit. CHALLENGED: Brahmanical hierarchy, Sanskrit monopoly, caste exclusivity, priestly authority. ENABLED: Democratic access to spirituality, regional cultural pride, new literary traditions. Revolutionary = redistributed power from elite institution to common people.</p>
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
                  <p className="font-semibold text-blue-300">Samanta</p>
                  <p>Military chief or baron. Received land grants from king in feudal system. Provided military service in return. Sub-granted land to smaller chiefs creating hierarchy.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Brahmadeya & Agrahara</p>
                  <p>Brahmadeya = villages granted to Brahmins as land grants. Agrahara = settlements of Brahmin villages. Both represent feudal grants to priestly class with tax exemptions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Shreni (Trade Guild)</p>
                  <p>Powerful corporate body controlling production, setting standards, acting as bank, having militias. Became very influential in 9th-12th centuries. Controlled urban economy and craft production.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Alvars & Nayanars</p>
                  <p>Alvars = Tamil Vishnu devotees (12 major). Nayanars = Tamil Shiva devotees (63 major). Both were 6th-9th century poet-saints who composed devotional Tamil poetry. Collected as *Divya Prabandham* and *Tirumurai*.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Bhakti</p>
                  <p>Devotion. Refers to passionate, personal devotion to a god as path to salvation. Emphasizes emotion over ritual, love over knowledge, direct connection over priestly intermediary.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Advaita Vedanta</p>
                  <p>Non-dualism. Shankaracharya's philosophical system. Core: atman (individual soul) = Brahman (ultimate reality). Perceived world (*maya*) = illusion.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-indigo-500">
                  <p className="font-semibold text-indigo-300">Matha</p>
                  <p>Monastery. Shankaracharya established four mathas (Sringeri, Dwarka, Badrinath, Jyotirmath) as centers of Hindu learning and Advaita teaching. Institutional framework for Hindu monasticism.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-purple-900 to-pink-900 rounded-lg border border-purple-700">
          <p className="text-purple-200">
            <span className="font-bold">💡 Remember:</span> Early Medieval India witnessed a TRIPLE TRANSFORMATION: Power became LOCAL (feudalism dispersed authority), Religion became EMOTIONAL (Bhakti emphasized personal devotion over ritual), and Language became VERNACULAR (regional languages displaced Sanskrit monopoly). These weren't separate changes—they were connected. Local courts patronized Bhakti saints. Saints composed in regional languages. Regional languages gained prestige. Together they created an era of LOCAL CULTURE, PERSONAL SPIRITUALITY, and PEOPLE'S VOICE. Shankaracharya provided intellectual validation through Advaita philosophy. The result: decentralization, democratization, and the birth of regional literary identities that would shape Indian culture for centuries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarlyMedievalSocietyEconomyCultureNotes;
