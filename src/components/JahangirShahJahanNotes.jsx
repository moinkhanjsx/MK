import React, { useState } from 'react';

const JahangirShahJahanNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">👑 Jahangir (1605-1627) & Shah Jahan (1628-1658)</h1>
          <p className="text-gray-400">Consolidation to Architectural Zenith - From Justice & Art to Magnificence</p>
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
                <div className="bg-cyan-900 p-4 rounded">
                  <h3 className="font-semibold text-cyan-200 mb-2">🎨 Jahangir: The Consolidator & Connoisseur</h3>
                  <p>Reign focused on justice, art, diplomacy, unique influence of powerful empress (Nur Jahan). Chain of Justice (Zanjir-i-Adl) for direct appeal. Diplomacy over war with treaties with Rajputs, held Deccan frontier, preferred stability over expansion. Peak of Mughal painting—exquisitely detailed naturalistic works, nature studies, portraiture. Personal artistic passion.</p>
                </div>
                <div className="bg-amber-900 p-4 rounded">
                  <h3 className="font-semibold text-amber-200 mb-2">🏛️ Shah Jahan: The Magnificent Builder</h3>
                  <p>Legacy = architecture as tool of statecraft. Buildings symbolized Mughal power, wealth, divine kingship. Taj Mahal (tomb for Mumtaz Mahal)—monumental, Persian-Islamic-Indian blend, universal symbol. Red Fort Delhi with Peacock Throne, Jama Masjid designed to overwhelm with imperial grandeur. Reign ended in devastating War of Succession (1657-58)—four sons fought, Aurangzeb won. Shattered family, established pattern of future conflicts.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">🔄 Continuity & Contrast</h3>
                  <p>CONTINUITY = both maintained Mansabdari & revenue systems, enjoyed Rajput peace, great culture patrons. CONTRAST = Jahangir's court was personal, eclectic, artist-driven. Shah Jahan's court was formal, ceremonial, architect-driven. Jahangir sought justice & beauty; Shah Jahan sought magnificence & awe. Different philosophies, same empire.</p>
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
                <div className="bg-cyan-900 bg-opacity-30 p-4 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-200 mb-2">Jahangir Core</p>
                  <p>EXTRAORDINARY POLITICAL INFLUENCE OF NUR JAHAN (wife), effective co-ruler latter half reign. Controlled promotions, issued royal orders (farmans), shaped foreign policy. CHAIN OF JUSTICE (Zanjir-i-Adl) = bell chain outside palace allowing subjects direct appeal to emperor. DIPLOMACY OVER WAR = secured empire through treaties with Rajputs (Mewar), held Deccan frontier, preferred stability to expansion. PEAK MUGHAL PAINTING = atelier produced exquisitely detailed, naturalistic works, especially nature studies & portraiture. Reflected personal artistic passion.</p>
                </div>
                <div className="bg-amber-900 bg-opacity-30 p-4 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-amber-200 mb-2">Shah Jahan Core</p>
                  <p>ARCHITECTURE AS TOOL OF STATECRAFT. Building projects symbolized Mughal power, wealth, divine kingship. TAJ MAHAL = ultimate expression for Mumtaz Mahal tomb. Monumental. Blended Persian, Islamic, Indian elements into universal symbol. RED FORT DELHI = Peacock Throne, overwhelming imperial grandeur. JAMA MASJID = designed to awe. Every structure projected absolute authority. WAR OF SUCCESSION (1657-58) = four sons fought all-against-all, Aurangzeb won. Shattered family, established succession conflict pattern.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Architecture as Instrument of Rule</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why build extravagant monuments?</p>
                  <p>To visually demonstrate emperor's absolute power, wealth, cultural supremacy to subjects & world.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why was visual demonstration important?</p>
                  <p>In vast, diverse empire with limited communication, MONUMENTS WERE PERMANENT PROPAGANDA. Made imperial power physically tangible & ever-present.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What message did specific buildings send?</p>
                  <p>TAJ MAHAL = infinite resources & devotion. RED FORT (Diwan-i-Aam/Khas) = daily rituals of submission, emperor as semi-divine center of universe.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was root political mechanism?</p>
                  <p>ARCHITECTURE AS LEGITIMIZATION. Built mosques (Jama Masjid) = protector of Islam. Built paradisiacal palaces & gardens = reign as golden age of order & harmony.</p>
                </div>
                <div className="bg-amber-900 bg-opacity-40 p-4 rounded border-l-4 border-amber-500 mt-4">
                  <p className="font-bold text-amber-200">Why #5 (Root Truth):</p>
                  <p>For Shah Jahan, SOVEREIGNTY WAS ITSELF A PERFORMANCE. Empire had to be SEEN to be believed. Buildings were not homes or tombs—PRIMARY INSTRUMENTS FOR CONSTRUCTING IMPERIAL IDENTITY & SECURING LEGACY.</p>
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
                <div className="bg-linear-to-r from-cyan-900 to-blue-900 p-4 rounded">
                  <p className="font-semibold text-cyan-200 mb-2">🎨 Jahangir: President of an Art Club</p>
                  <p>First rich king was like president of really cool art club. Loved paintings of flowers & animals so much kept diary about them. Fair—hung famous "Chain of Justice" so people could ring bell for help. Wife, Nur Jahan, was incredibly smart & powerful—almost like co-king—making big decisions & running lot of show. Kept peace by making smart deals with warrior families.</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-amber-900 p-4 rounded">
                  <p className="font-semibold text-blue-200 mb-2">🏛️ Shah Jahan: Ultimate City Builder</p>
                  <p>His son Shah Jahan was different. Ultimate CITY BUILDER but in real life. Wanted everyone look at stuff & say "Whoa!" Built stunning white marble TAJ MAHAL as tomb for favorite wife. Built huge red fort in Delhi with solid gold throne shaped like peacocks. Every building meant to make jaw drop & remind you how amazing & unbeatable he was.</p>
                </div>
                <div className="bg-linear-to-r from-amber-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-amber-200 mb-2">⚔️ The Succession War</p>
                  <p>But family life was messy. When he got old, his FOUR SONS FOUGHT BLOODY ALL-AGAINST-ALL WAR to see who would be next king. His youngest son, Aurangzeb, won. Battle tore family apart. Left bitter enemies among brothers.</p>
                </div>
              </div>
            )}
          </div>

          {/* Jahangir Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('jahangir')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🎨 Jahangir (1605-1627) - The Art Lover & Just Ruler</h2>
              <span className="text-2xl">{expandedSection === 'jahangir' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'jahangir' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Personal Interests & Philosophy</p>
                  <p><span className="font-bold">Passion:</span> Art, especially naturalistic painting. Kept detailed diary (Tuzuk-i-Jahangiri) describing gardens, animals, court events. <span className="font-bold">Justice obsession:</span> Instituted Chain of Justice—symbolic bell hanging outside palace allowing any subject to ring for direct imperial audience. <span className="font-bold">Temperament:</span> Curious, refined, cultured. Less warrior-king than patron-king.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Nur Jahan - The Co-Ruler</p>
                  <p><span className="font-bold">Who:</span> Jahangir's wife (married 1611). Persian noblewoman, daughter of Mirza Mirza. <span className="font-bold">Power:</span> Unprecedented for woman. Controlled court appointments, issued royal orders (farmans), shaped foreign policy. <span className="font-bold">Political role:</span> Effectively co-ruled empire, especially after Jahangir's health declined. <span className="font-bold">Family:</span> Her father was chief minister, her brother high official. Nur Jahan family dominated administration. <span className="font-bold">Legacy:</span> Most powerful woman in Mughal history. Shows women could wield real political power in imperial structure.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Foreign Policy & Stability</p>
                  <p><span className="font-bold">Rajput relations:</span> Continued Akbar's alliance system. Married into Rajput families. Mewar (Rana Amar Singh) eventually submitted. <span className="font-bold">Deccan:</span> Held frontier against Deccan sultanates but didn't major expansion. <span className="font-bold">Seaborne trade:</span> Engaged with European powers (Portuguese, English). Pragmatic diplomacy. <span className="font-bold">Overall:</span> Reign marked by stability, not conquest. Consolidated rather than expanded.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Mughal Painting at Peak</p>
                  <p><span className="font-bold">Atelier:</span> Court workshops produced finest Mughal miniatures. <span className="font-bold">Subject matter:</span> Nature studies (flowers, animals), court scenes, portraits, hunting scenes. <span className="font-bold">Style:</span> Exquisitely detailed, naturalistic, psychologically sensitive. <span className="font-bold">Artists:</span> Manohar, Basawan, Kesu Das among greatest. <span className="font-bold">Innovation:</span> Combined Persian techniques with Indian sensibility. Created unique Indo-Persian style. <span className="font-bold">Legacy:</span> Jahangir's patronage elevated painting to highest artistic achievement. His personal collecting elevated artists' status.</p>
                </div>
              </div>
            )}
          </div>

          {/* Shah Jahan Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('shahjahan')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🏛️ Shah Jahan (1628-1658) - The Monument Builder</h2>
              <span className="text-2xl">{expandedSection === 'shahjahan' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'shahjahan' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-amber-300">The Taj Mahal - Monument to Love & Power</p>
                  <p><span className="font-bold">Built for:</span> Mumtaz Mahal, beloved wife. Died in childbirth 1631 after 19 years marriage, 14 children. <span className="font-bold">When:</span> Construction 1632-1653 (21 years). <span className="font-bold">Where:</span> Agra. <span className="font-bold">Design:</span> White marble. Persian-Islamic-Indian architectural fusion. Symmetrical. Inlaid semi-precious stones. <span className="font-bold">Significance:</span> Monument to conjugal love. Also symbol of Shah Jahan's infinite resources & devotion to perfection. <span className="font-bold">Cost:</span> Estimated 2-3% of annual imperial revenue. Enormous expense. <span className="font-bold">Legacy:</span> Recognized worldwide as masterpiece. Symbol of eternal love. Most famous building in world.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Red Fort Delhi & Imperial Grandeur</p>
                  <p><span className="font-bold">Built:</span> 1638-1648. Massive red sandstone fort in Delhi. <span className="font-bold">Key structures:</span> Diwan-i-Aam (Hall of Public Audience), Diwan-i-Khas (Hall of Private Audience), Peacock Throne, harem quarters. <span className="font-bold">Peacock Throne:</span> Solid gold throne inlaid with precious stones. Took 7 years to make. Symbol of imperial magnificence. <span className="font-bold">Daily ritual:</span> Emperor sat in Diwan-i-Aam where people could see him. Semi-divine figure. Subjects submitted through visual awe. <span className="font-bold">Purpose:</span> Designed to overwhelm visitors, ambassadors, nobles with imperial power & sophistication.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Jama Masjid & Other Monuments</p>
                  <p><span className="font-bold">Jama Masjid:</span> Built 1644-1658 in Delhi. One of world's largest mosques. Red sandstone & marble. Housed 25,000 worshippers. <span className="font-bold">Purpose:</span> Demonstrated Shah Jahan as protector of Islam. Showed religious legitimacy. <span className="font-bold">Other projects:</span> Palaces, gardens, caravanserais. Empire filled with monumental architecture. Every structure designed to overwhelm & awe. <span className="font-bold">Architectural philosophy:</span> Every building was ideology projection. Built perfect paradise on earth. Golden age of order, harmony, magnificence under Shah Jahan.</p>
                </div>
              </div>
            )}
          </div>

          {/* War of Succession Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('succession')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">⚔️ War of Succession (1657-1658) - The Brutal Endgame</h2>
              <span className="text-2xl">{expandedSection === 'succession' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'succession' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">The Setup</p>
                  <p><span className="font-bold">Shah Jahan's age:</span> 65 in 1657. Growing infirm, health declining. <span className="font-bold">Sons:</span> Dara Shikoh (eldest, beloved), Shuja (governor Bengal), Aurangzeb (governor Deccan), Murad (youngest). <span className="font-bold">Problem:</span> No clear succession rule. Mughal tradition = all sons eligible. Strongest usually wins. Shah Jahan favored Dara Shikoh. Others felt threatened. <span className="font-bold">Trigger:</span> Shah Jahan became seriously ill (1657). Sons began positioning for throne.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">The Conflict</p>
                  <p><span className="font-bold">Dara Shikoh:</span> Eldest, cultured, Sufi-leaning, tolerant of Hinduism. Had imperial support but weak military. Wanted to continue Shah Jahan's cultural synthesis. <span className="font-bold">Aurangzeb:</span> Youngest but most militant. Orthodox Islamic, ambitious, militarily brilliant. Saw Dara as weakness. <span className="font-bold">Shuja & Murad:</span> Also claimed throne. Formed shifting alliances. <span className="font-bold">Battles:</span> 1657-58 saw multiple decisive battles. Aurangzeb defeated rivals one by one. <span className="font-bold">Brutality:</span> Brothers killed, maimed, imprisoned. Dara Shikoh captured & executed. Shuja fled to Arakan (Burma). Murad imprisoned. Aurangzeb won decisively.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Aftermath & Legacy</p>
                  <p><span className="font-bold">Shah Jahan:</span> Imprisoned in Red Fort (Agra Fort) by Aurangzeb. Held for 8 years until death (1666). Never saw outside world again. Watched Taj Mahal from prison window. Tragic end for great builder. <span className="font-bold">Aurangzeb:</span> Won completely. Became emperor 1658. Ruled for 49 years (longest Mughal reign). <span className="font-bold">Pattern:</span> War of Succession established terrible precedent. Future successions marked by violence, fratricide, imprisonment. <span className="font-bold">Impact:</span> Shattered family loyalty. Created internal weakness. Though Aurangzeb ruled long, constant warfare exhausted empire. Set stage for eventual Mughal decline.</p>
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
                <div className="bg-linear-to-r from-cyan-900 to-blue-900 p-4 rounded">
                  <p className="font-bold text-cyan-200 mb-2">Jahangir = Consolidation Through Culture & Justice</p>
                  <p>Jahangir inherited Akbar's empire. Focused on consolidating through culture (painting), justice (Chain), diplomacy (Rajput treaties). Created stable, wealthy platform. Nur Jahan's political skill secured administration. Reign was about enjoying & perfecting what Akbar created.</p>
                </div>
                <div className="bg-linear-to-r from-blue-900 to-amber-900 p-4 rounded">
                  <p className="font-bold text-blue-200 mb-2">Shah Jahan = Translation of Power into Stone</p>
                  <p>Shah Jahan took Jahangir's stability & wealth & transformed it into architecture. Didn't conquer new territories. Didn't innovate administration. Instead, used empire's riches to build monuments that made imperial ideology physically manifest. Taj Mahal, Red Fort, Jama Masjid = language of power in stone & marble.</p>
                </div>
                <div className="bg-linear-to-r from-amber-900 to-red-900 p-4 rounded">
                  <p className="font-bold text-amber-200 mb-2">War of Succession = Consequence of Concentration</p>
                  <p>Problem: Mughal system concentrated all power, wealth, legitimacy in single emperor. When succession unclear, all sons saw themselves as legitimate claimants. Whoever controlled military could win. Four sons fighting = empire's internal vulnerability. No institutional rules for succession = violence inevitable.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-orange-500 mt-4">
                  <p className="font-bold text-orange-300">Complete Picture:</p>
                  <p>JAHANGIR consolidated through culture & justice. Empire stable, rich, at peace. SHAH JAHAN used that stability to project power architecturally. Built greatest monuments empire ever saw. But concentrated power so much that succession became deadly contest. FOUR SONS FOUGHT—brutality shattered family. AURANGZEB won, but rule established by violence. Set pattern: future successions marked by fratricide. War of Succession = price of perfect absolute monarchy with no succession rules.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Primary Expression of Kingship Difference</p>
                  <p className="mb-2">How did primary expression of kingship differ between Jahangir and Shah Jahan?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: JAHANGIR = accessible justice & intimate art. Chain of Justice = subjects could directly appeal to emperor. Paintings showed personal taste & sensitivity. Court was artist-driven. Nur Jahan wielded visible power. Kingship expressed through interpersonal justice & cultural refinement. SHAH JAHAN = awe-inspiring architecture. Taj Mahal, Red Fort, Jama Masjid = impersonal monuments. Diwan-i-Aam ritual = semi-divine distance. Subjects submitted to visual grandeur, not personal justice appeal. Kingship expressed through overwhelming architectural language. JAHANGIR = warm, cultured, fair. SHAH JAHAN = cold, formal, awesome. One ruled through personal virtue, other through architectural intimidation.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Nur Jahan - Uniquely Powerful Woman</p>
                  <p className="mb-2">Why is Nur Jahan considered uniquely powerful figure in Mughal history? Describe TWO specific ways she exercised power during Jahangir's reign.</p>
                  <p className="text-gray-400 text-sm">💡 Answer: UNIQUE BECAUSE: Women typically excluded from political power in Islamic states. Yet Nur Jahan wielded real authority. Unprecedented. First major female political figure in empire. SPECIFIC POWER #1: COURT APPOINTMENTS. Controlled promotions of officials. Dispensed positions of power. Mansabdars had to please her for advancement. Nobles courted her favor. She shaped entire administrative elite. SPECIFIC POWER #2: ISSUED ROYAL ORDERS (farmans). Documents bearing her seal had legal authority. She shaped foreign policy, domestic decisions. Her written orders implemented imperial will. Combined with husband's authority but distinct from it. ADDITIONAL: Father & brother in high posts through her influence, creating family power network. Her wedding (1611) itself was major state ceremony. She was co-ruler in fact if not title. Unique in Mughal history that woman held actual political power, not just harem influence.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Architecture & Succession War Connection</p>
                  <p className="mb-2">How did Shah Jahan's architectural projects and War of Succession represent two sides of same coin?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: SURFACE: Architecture = magnificence & peace. War = conflict & violence. Seem opposite. DEEPER TRUTH: Both stem from CONCENTRATION OF ABSOLUTE POWER. ARCHITECTURAL SIDE: Shah Jahan could build Taj Mahal & Red Fort because empire was so wealthy, stable, centralized. All power/resources flowed to emperor. Could spend 2-3% annual revenue on single tomb without fear. This wealth & power concentration enabled monuments. SUCCESSION WAR SIDE: Same concentration meant when emperor weakened, all sons saw themselves as legitimate claimants to supreme power. No institutional limits. Whoever controlled military could take all. Four sons fought because imperial system had no succession rules. All power concentrated = sons fought savagely for it. BOTH SIDES OF SAME COIN: Absolute monarchy created wealth for monuments but also created deadly succession struggles. Shah Jahan's architectural glory depended on concentration of power. But that same concentration made succession bloody. Aurangzeb won throne through ruthlessness. Imprisoned his own father. Killed brothers. War of Succession was direct consequence of building monuments—exhausted treasury, showed wealth & power, made all sons desperate to control it.</p>
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
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Nur Jahan</p>
                  <p>Jahangir's wife, most powerful woman in Mughal history. Effectively co-ruled empire. Controlled court promotions, issued royal orders, shaped foreign policy. Unprecedented political authority for woman in Islamic state.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Chain of Justice (Zanjir-i-Adl)</p>
                  <p>Bell chain hung outside Jahangir's palace. Allowed any subject to ring for direct imperial audience to appeal injustice. Symbol of Jahangir's justice philosophy. Institutionalized access to emperor.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-300">Tuzuk-i-Jahangiri</p>
                  <p>Jahangir's personal diary/autobiography. Detailed accounts of court, gardens, animals, hunting expeditions, artistic commissions. Reveals personal interests & temperament. Invaluable historical source.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-amber-500">
                  <p className="font-semibold text-amber-300">Taj Mahal</p>
                  <p>Mausoleum built by Shah Jahan for Mumtaz Mahal (wife). Built 1632-1653 in Agra. White marble. Persian-Islamic-Indian architectural fusion. Symbol of eternal love & imperial magnificence. World-famous monument.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Red Fort (Lal Qila)</p>
                  <p>Massive red sandstone fort built by Shah Jahan in Delhi (1638-1648). Houses Diwan-i-Aam, Diwan-i-Khas, Peacock Throne. Designed to overwhelm with imperial power. Daily audience ritual showed emperor as semi-divine.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Peacock Throne</p>
                  <p>Solid gold throne inlaid with precious stones. Built by Shah Jahan, took 7 years. Housed in Red Fort. Ultimate symbol of imperial magnificence. Made of incredible wealth & craftsmanship.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Jama Masjid</p>
                  <p>Built by Shah Jahan (1644-1658) in Delhi. One of world's largest mosques. Red sandstone & marble. Housed 25,000 worshippers. Demonstrated Shah Jahan as protector of Islam.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Diwan-i-Aam</p>
                  <p>Hall of Public Audience in Red Fort. Where emperor sat in visual prominence for public subjects to see. Daily ritual of imperial display. Semi-divine distance maintained through physical architecture.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Diwan-i-Khas</p>
                  <p>Hall of Private Audience in Red Fort. For nobles & officials only. Where emperor held intimate counsel. Contrasted with public Diwan-i-Aam. Shows hierarchical access to authority.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">War of Succession (1657-1658)</p>
                  <p>Brutal conflict between Shah Jahan's four sons to control throne. Aurangzeb defeated rivals. Killed/imprisoned brothers. Imprisoned father. Established pattern of fratricidal succession conflicts. Set stage for Mughal decline.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-400">
                  <p className="font-semibold text-blue-200">Dara Shikoh</p>
                  <p>Eldest son of Shah Jahan. Cultured, Sufi-leaning, tolerant of Hinduism. Wanted to continue Akbar's cultural synthesis. Militarily weak. Defeated by Aurangzeb, executed. Represented alternate Mughal direction.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-amber-400">
                  <p className="font-semibold text-amber-200">Aurangzeb</p>
                  <p>Youngest son who won War of Succession. Orthodox Islamic, militarily brilliant, ambitious. Ruled 49 years (1658-1707). Longest Mughal reign. Established through fratricide. Represented conservative turn from Akbar's synthesis.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-cyan-900 to-amber-900 rounded-lg border border-cyan-700">
          <p className="text-cyan-200">
            <span className="font-bold">💡 Remember:</span> Jahangir & Shah Jahan were OPPOSITES in style but both served same empire. JAHANGIR = cultured, fair, justice-focused, personal. Chain of Justice shows he wanted direct connection with subjects. Nur Jahan's power shows empire was flexible about female authority when capable. SHAH JAHAN = builder, formal, awe-focused, impersonal. Taj Mahal & Red Fort created through overwhelming architectural language. BOTH together show Mughal empire at its HEIGHT—stable, wealthy, culturally sophisticated. But WAR OF SUCCESSION shows fatal flaw: absolute monarchy with no succession rules = violence inevitable. When concentration of power is total, succession becomes lethal competition. Four sons fighting nearly destroyed empire they inherited. Set pattern for future conflicts. Aurangzeb won but through brutality that weakened dynasty. Empire never recovered its family coherence after 1658. Two great rulers = followed by destructive succession war = beginning of Mughal decline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JahangirShahJahanNotes;
