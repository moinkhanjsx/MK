import React, { useState } from 'react';

const AurangzebNotes = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold text-white mb-2">👑 Aurangzeb (1658-1707) & The Decline of the Mughals</h1>
          <p className="text-gray-400">Religious Orthodoxy, Imperial Overstretch, and the Unraveling of an Empire</p>
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
                  <h3 className="font-semibold text-red-200 mb-2">⚔️ Aurangzeb's Policies: The Catalysts</h3>
                  <p>Religious orthodoxy moved away from Akbar's Sulh-i-Kul. Reimposed Jizya tax on non-Muslims. Selectively destroyed prominent Hindu temples (Kashi Vishwanath, Kesava Deo) seen as centers of rebellion. Life's focus = conquest of Deccan. 25+ year war against Marathas and sultanates of Bijapur & Golconda. Militarily successful but politically & financially catastrophic. Drained treasury, tied down imperial army in unwinnable guerrilla war.</p>
                </div>
                <div className="bg-orange-900 p-4 rounded">
                  <h3 className="font-semibold text-orange-200 mb-2">📉 Administrative & Economic Decay: The Internal Rot</h3>
                  <p>Mansabdari system collapsed under own weight. Too many nobles created (Mansabdar inflation) but insufficient land (Jagir) to pay them. Led to corruption, factionalism, military morale collapse. Agrarian crisis from constant warfare. Oppressive taxation to fund Deccan campaigns combined with corruption drove peasants into rebellion or protection of local zamindars & emerging powers like Marathas. State broke social contract with peasantry.</p>
                </div>
                <div className="bg-purple-900 p-4 rounded">
                  <h3 className="font-semibold text-purple-200 mb-2">🌍 Rise of Regional Powers: The External Challenge</h3>
                  <p>Marathas under Shivaji & Peshwas perfected guerrilla warfare (Ganimi Kava), evolved into pan-Indian confederacy, challenged Mughal authority, claimed tax collection rights (Chauth). Sikhs transformed from religious community into military brotherhood (Khalsa) under Guru Gobind Singh. Successor States = Awadh (Saadat Khan), Hyderabad (Nizam-ul-Mulk), Bengal became powerful autonomous kingdoms. Jat rebellions around Agra & Delhi symbolized revolt of agrarian classes against Mughal elite.</p>
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
                  <p className="font-semibold text-red-200 mb-2">Religious Policy Shift</p>
                  <p>CONSCIOUS MOVE AWAY FROM AKBAR'S SULH-I-KUL (universal peace). Reimposed Jizya—tax on non-Muslims seen as paying for protection (Dhimmi status). SELECTIVELY DESTROYED prominent Hindu temples (Kashi Vishwanath in Varanasi, Kesava Deo in Mathura)—targeted centers of political rebellion, not random destruction. MOTIVATION: Religious orthodoxy combined with political strategy—weaken Hindu nobility's religious prestige, enforce Islamic supremacy, eliminate symbols of Hindu resistance.</p>
                </div>
                <div className="bg-orange-900 bg-opacity-30 p-4 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-200 mb-2">Military Policy - The Deccan Obsession</p>
                  <p>DECCAN CONQUEST WAS LIFE'S FOCUS. 25+ YEAR WAR (roughly 1680s-1707) against Marathas, Bijapur Sultanate, Golconda Sultanate. MILITARILY SUCCESSFUL—captured Bijapur (1686), Golconda (1687), pursued Maratha leader Sambhaji relentlessly. BUT POLITICALLY & FINANCIALLY CATASTROPHIC. Army tied down in harsh terrain against guerrilla tactics (Ganimi Kava). Morale problems—soldiers exhausted. Treasury depleted by constant campaign funding. Supply lines stretched impossibly thin. CORE PROBLEM: "Forever war"—could win battles, never decisive victory. Guerrillas always retreat, regroup, return. Classic imperial overstretch.</p>
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
              <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Deccan Campaigns & Imperial Decline</h2>
              <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'whys' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #1: Why did Deccan wars weaken empire?</p>
                  <p>Consumed colossal portion of imperial treasury & professional army for 25+ years. Massive drain on resources.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #2: Why was this consumption so damaging?</p>
                  <p>Created MASSIVE FINANCIAL DEFICIT. To fund it, taxes increased on core provinces (Agra, Delhi). Mansabdari system diluted—more revenue-granting posts created. Economic system strained to breaking point.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #3: What was result of financial & administrative strain?</p>
                  <p>Broke TWO PILLARS OF STATE: 1) PEASANT LOYALTY—high taxes from wars. 2) NOBLE LOYALTY—Jagir shortages, corruption, empty promises. Both core constituencies alienated simultaneously.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded">
                  <p className="font-semibold text-yellow-300">Why #4: What was root strategic error?</p>
                  <p>IMPERIAL OVERSTRETCH. Mughal army & bureaucracy optimized for controlling North India. In Deccan's harsh terrain against Maratha guerrilla tactics, "forever war"—could win battles, never decisive victory, could never disengage.</p>
                </div>
                <div className="bg-amber-900 bg-opacity-40 p-4 rounded border-l-4 border-amber-500 mt-4">
                  <p className="font-bold text-amber-200">Why #5 (Root Truth):</p>
                  <p>The Deccan was the "GRAVEYARD OF THE MUGHAL EMPIRE." Aurangzeb's obsession with total conquest FATALLY WEAKENED THE IMPERIAL CORE—left it financially bankrupt, administratively hollow, vulnerable to rebellion everywhere when he died. One man's dream of total control accelerated empire's disintegration.</p>
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
                  <p className="font-semibold text-red-200 mb-2">⚔️ The Strict King & His Rules</p>
                  <p>Aurangzeb was very strict, hard-working king who took over after big family fight. Believed in following religion's rules VERY STRICTLY. Made life harder for people of other faiths by adding special tax (Jizya). Destroyed some of their religious buildings he saw as rebellion centers. Unlike his ancestor Akbar who was cool with everyone, Aurangzeb said "My rules, my religion, period."</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-yellow-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">💰 The Forever War That Broke Everything</p>
                  <p>But his BIGGEST PROJECT was forever war in hot, mountainous south (Deccan). He poured ALL his money and BEST SOLDIERS into this war for DECADES. Super-fast Maratha horsemen (Ganimi Kava = hit and run) learned to bleed his army without being caught. He could win battles but could never WIN. Like fighting ghosts that disappear and come back.</p>
                </div>
                <div className="bg-linear-to-r from-yellow-900 to-orange-900 p-4 rounded">
                  <p className="font-semibold text-yellow-200 mb-2">📉 The Crumbling System</p>
                  <p>To pay for south war, he had to TAX FARMERS IN NORTH HARDER. Farmers became poor and ANGRY. To keep generals happy, he handed out empty job titles & promises (Mansabdar system broke). Generals became corrupt and DISLOYAL. System that worked for centuries started falling apart.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-red-900 p-4 rounded">
                  <p className="font-semibold text-orange-200 mb-2">🌍 New Powers Rise While King is Away</p>
                  <p>While Aurangzeb was stuck in south, NEW POWERS GREW LIKE WEEDS back home. West = Marathas became entire confederacy, not just rebels. North = Sikhs became FIERCE WARRIOR COMMUNITY (Khalsa). His own governors in places like Awadh & Hyderabad started acting like INDEPENDENT KINGS. Delhi no longer controlled anything.</p>
                </div>
                <div className="bg-linear-to-r from-red-900 to-purple-900 p-4 rounded">
                  <p className="font-semibold text-red-200 mb-2">💀 The End</p>
                  <p>When Aurangzeb finally died (age 88), he left behind BROKE TREASURY, BROKEN ARMY, EMPIRE WHERE EVERY CORNER ruled by someone not listening to Delhi. He was LAST POWERFUL MUGHAL, but his long reign planted all seeds for collapse. Strict rule + forever war + broken system = empire shattered into pieces.</p>
                </div>
              </div>
            )}
          </div>

          {/* Aurangzeb's Policies Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('aurangzeb')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">⚔️ Aurangzeb (1658-1707) - The Last Great Mughal & His Undoing</h2>
              <span className="text-2xl">{expandedSection === 'aurangzeb' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'aurangzeb' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Rise to Power & Philosophy</p>
                  <p><span className="font-bold">Background:</span> Fourth son. Won War of Succession (1657-58) against brothers through ruthlessness. Imprisoned father Shah Jahan. Orthodox Islamic upbringing under conservative tutors. <span className="font-bold">Philosophy:</span> Rejected Akbar's Sulh-i-Kul (universal peace). Believed in Islamic supremacy & strict Sharia interpretation. <span className="font-bold">Personality:</span> Ascetic, hardworking, personally pious, militarily brilliant. Unlike pleasure-loving emperors, lived simply. Spent 49 years on throne (1658-1707)—longest Mughal reign. Age when died: 88. Worked until death.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Religious Policy & Temple Destruction</p>
                  <p><span className="font-bold">Jizya Tax:</span> Reimposed after Akbar abolished it. Tax on non-Muslims (Hindus, Sikhs, Jains, Christians) in lieu of military service & "protection." Created Dhimmi status—non-Muslims lower legal status. <span className="font-bold">Temple Destruction:</span> SELECTIVE, not random destruction. Targeted famous temples seen as rebellion centers: Kashi Vishwanath (Varanasi—holiest Hindu site), Kesava Deo (Mathura—Krishna birthplace), Somnath temple. <span className="font-bold">Motivation:</span> Political + religious. Eliminate symbols of Hindu nobility's power, enforce Islamic supremacy, prevent temples from financing rebellions. <span className="font-bold">Impact:</span> Alienated Hindu nobility—major blow to Akbar's Mansabdari system which relied on Hindu-Muslim elite unity. Created grievances that fueled rebellions (Rajput, Jat, Maratha).</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">The Deccan Campaigns (1680s-1707)</p>
                  <p><span className="font-bold">Timeline:</span> Roughly 1680 onward, intensified after death of Shivaji (1680). Aurangzeb personally led campaign for 25+ years. <span className="font-bold">Opponents:</span> Marathas (guerrilla confederation), Bijapur Sultanate (weak but persistent), Golconda Sultanate (rich diamond sultanate). <span className="font-bold">Victories:</span> Captured Bijapur (1686), Golconda (1687), killed Maratha leader Sambhaji (1689). Seemed like victory. <span className="font-bold">Reality:</span> Marathas never fully defeated. Shivaji's son Rajaram escaped to Jinji Fort. Successor Sambha Raj led guerrilla resistance. Ganimi Kava (hit-and-run) tactics bled army. <span className="font-bold">Cost:</span> Estimated 2-3 crore (20-30 million) soldiers mobilized over 25 years. Thousands died. Treasury drained. Supply lines stretched across entire subcontinent. <span className="font-bold">Result:</span> Military exhaustion, peasant suffering from high taxes, administrative chaos.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Personal Life & Legacy</p>
                  <p><span className="font-bold">Family:</span> Married several times. Had many sons (at least 18 children). Compared to Shah Jahan's close family, Aurangzeb's sons were often estranged. <span className="font-bold">Asceticism:</span> Unlike other Mughal emperors, lived simply. Sewed caps, copied Quran as hobby. Wore coarse clothes despite wealth. Gave up wine, music (forbidden in strict Islam). Court less luxurious than predecessors. <span className="font-bold">Deathbed regret:</span> Historical accounts suggest he died unhappy, worried about empire's state. Left instructions not to build grand tomb (contrary to Mughal tradition). <span className="font-bold">Legacy:</span> PARADOX. Last powerful Mughal—maintained empire at peak territorial extent. But policies planted seeds of decline: religious alienation, financial exhaustion, administrative collapse. His long reign (49 years) prevented succession disputes but also prevented reform. By death, empire was hollow.</p>
                </div>
              </div>
            )}
          </div>

          {/* Administrative Decay Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('decay')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">📉 Administrative & Economic Decay - The Internal Collapse</h2>
              <span className="text-2xl">{expandedSection === 'decay' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'decay' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Mansabdari System Collapse</p>
                  <p><span className="font-bold">What happened:</span> Too many Mansabdars (nobles) created but not enough Jagirs (land assignments) to pay them. <span className="font-bold">Why:</span> To fund Deccan wars without raising central tax too much, Aurangzeb created more Mansabdari positions with land grants. But there weren't enough available lands. <span className="font-bold">Result:</span> MANSABDAR INFLATION. Created expectations without delivery. <span className="font-bold">Consequences:</span> 1) Corruption—nobles squeezed peasants harder to extract more revenue. 2) Factional conflicts—nobles fought over limited Jagirs. 3) Military decline—demoralized soldiers, poorly paid Mansabdars couldn't recruit good cavalry. 4) Service quality collapse—nobles looked for kickbacks rather than good administration. <span className="font-bold">System breakdown:</span> What had worked under Akbar (empire-wide meritocratic elite serving emperor) became patronage network of corrupt nobles.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-500">
                  <p className="font-semibold text-red-300">Agrarian Crisis & Peasant Distress</p>
                  <p><span className="font-bold">Taxation:</span> To fund Deccan wars, imperial treasury demanded more revenue. Taxes on peasants increased dramatically. Estimates suggest 50% increase in some regions over Akbar's reign. <span className="font-bold">Corruption:</span> Revenue officials & local zamindars took additional cuts. Peasants paid MORE than official tax. <span className="font-bold">Result:</span> Peasants impoverished. Many abandoned lands. Some became dacoits (bandits). Others sought protection from local strongmen (zamindars, Maratha chiefs). <span className="font-bold">Social breakdown:</span> State-peasant contract broken. Peasants no longer believed state would protect them or use taxes for public good. <span className="font-bold">Long-term damage:</span> Agricultural production declined. Tax revenue declined despite higher rates (counterintuitive—higher taxes = lower revenue). Vicious cycle: less revenue = more desperate taxation = more peasant flight = less revenue.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Religious Policy & Elite Alienation</p>
                  <p><span className="font-bold">Hindu nobility:</span> Akbar's great achievement was integrating Hindu nobility into Mansabdari system. They served as generals, administrators, governors. Jaipur, Jodhpur, Amber Rajput states were integrated. <span className="font-bold">Aurangzeb's shift:</span> Temple destruction + Jizya = signal that Hindu nobles were no longer fully trusted. Some Hindu Mansabdars resigned or joined regional powers. <span className="font-bold">Sikh transformation:</span> Guru Gobind Singh (10th Sikh Guru) transformed Sikhs from peaceful community into KHALSA—militant brotherhood (1699). Aurangzeb's persecutions were key trigger. <span className="font-bold">Result:</span> Elite fragmentation. Instead of united North Indian aristocracy serving emperor, split along religious lines. Hindu nobles felt unwelcome. Muslim nobles felt resentment that Hindus still held high positions. System of elite consensus broke down.</p>
                </div>
              </div>
            )}
          </div>

          {/* Rise of Regional Powers Detail */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('regional')}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">🌍 Rise of Regional Powers - The Empire Breaks into Pieces</h2>
              <span className="text-2xl">{expandedSection === 'regional' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'regional' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Marathas: From Rebellion to Confederacy</p>
                  <p><span className="font-bold">Foundation:</span> Shivaji (1627-1680) founded Maratha state in Western India. Rebel against Mughal & Bijapur authority. <span className="font-bold">Military innovation:</span> GANIMI KAVA = "guerrilla tactics." Light cavalry raids, rapid retreats, avoided pitched battles. Suited to mountain terrain. <span className="font-bold">After Shivaji:</span> Son Sambhaji continued resistance. Despite Aurangzeb's capture & execution of Sambhaji (1689), Marathas never fully suppressed. <span className="font-bold">Peshwas:</span> Under Peshwa Balaji Viswanath & successors, Marathas evolved into PAN-INDIAN CONFEDERACY. Claims extended from Western Deccan to Central India to even South India. <span className="font-bold">Chauth & Sardeshmukhi:</span> Maratha system of collecting 25% of tax revenue (Chauth = tribute for protection, Sardeshmukhi = hereditary right). Effectively parallel government collecting taxes alongside Mughal officials. <span className="font-bold">Impact:</span> By 18th century, Marathas were PRIMARY political force in India. Mughal emperors had little real authority—Marathas effectively ruled most of subcontinent through Chauth collection.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Sikhs: Religious Community to Military Brotherhood</p>
                  <p><span className="font-bold">Background:</span> Sikhism founded by Guru Nanak (~1469-1539)—syncretic faith combining Hindu & Islamic elements. Pacifist spiritual community. <span className="font-bold">Aurangzeb's persecution:</span> Jizya tax applied to Sikhs. Guru Tegh Bahadur (9th Guru) executed (1675) for refusing conversion. <span className="font-bold">Guru Gobind Singh (10th Guru):</span> (1666-1708) TRANSFORMED Sikhs into KHALSA—"pure ones," warrior brotherhood (1699). Required uncut hair, turban, martial training, oath of loyalty. Changed from spiritual sect to military order. <span className="font-bold">Banda Bahadur:</span> After Guru Gobind Singh's death, Banda Bahadur led Sikh uprising against Mughals (1710s). Established Sikh state in Punjab. <span className="font-bold">Later Sikh Misls:</span> After Banda Bahadur's defeat, Punjab fragmented into 12 Sikh Misls (warrior bands). Eventually unified by Maharaja Ranjit Singh (1780s-1839) into powerful Sikh Empire. <span className="font-bold">Significance:</span> Sikhs went from persecuted minority to regional power controlling Punjab—one of subcontinent's wealthiest regions.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Successor States: Governors Become Kings</p>
                  <p><span className="font-bold">Pattern:</span> As central Mughal authority weakened, regional governors declared de facto independence while nominally acknowledging emperor. <span className="font-bold">Awadh:</span> Saadat Khan (later titled Burhan-ul-Mulk) became first Nawab (1722). Established quasi-independent state. Initially paid tribute to Delhi but increasingly autonomous. Eventually became one of richest, most powerful regional kingdoms. <span className="font-bold">Hyderabad:</span> Nizam-ul-Mulk (also called Asaf Jah) founded Hyderabadi state (1724). Declared independence from Delhi. Established powerful kingdom in Deccan. By 18th century, Nizam was independent ruler comparable to European princes. <span className="font-bold">Bengal:</span> Bengal governors gradually became independent. Murshid Quli Khan established Bengal as autonomous state. Bengal developed into richest region of India with its own military, treasury, diplomacy. <span className="font-bold">Other states:</span> Karnataka, Tamil Nadu saw similar fragmentation. Old Mughal provinces became independent kingdoms. <span className="font-bold">Result:</span> By 1700s, "Mughal Empire" existed in name only. Real power was with regional Nawabs, Rajas, Peshwas. Delhi emperor was figurehead—had little actual control.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Jat Rebellion: The Agrarian Uprising</p>
                  <p><span className="font-bold">Who:</span> Jats = agricultural caste dominant in areas around Agra, Delhi, Mathura. <span className="font-bold">Grievance:</span> Heavy taxation, oppressive administration. Felt alienated by Aurangzeb's Hindu-disfavoring policies. <span className="font-bold">Rebellion:</span> Gokul Singh (1690s) led Jat uprising. Raja Surajmal (1707-1763) created powerful Jat state (Bharatpur). Controlled vast areas. <span className="font-bold">Significance:</span> Symbolized that EVEN PEASANT CLASSES were rebelling against Mughal rule. Not just elite challenges (Marathas, Sikhs) but mass rebellions. <span className="font-bold">Impact:</span> Showed Mughal legitimacy had collapsed among common people. Ruled through force alone, not consent.</p>
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
              <h2 className="text-xl font-bold text-white">6️⃣ Synthesis - The Vicious Cycle of Decline</h2>
              <span className="text-2xl">{expandedSection === 'synthesis' ? '−' : '+'}</span>
            </button>
            {expandedSection === 'synthesis' && (
              <div className="px-6 pb-6 border-t border-gray-700 space-y-4 text-gray-300">
                <div className="bg-linear-to-r from-red-900 to-orange-900 p-4 rounded">
                  <p className="font-bold text-red-200 mb-2">Chunk 1 → Chunk 2: Policies Cause Decay</p>
                  <p>Aurangzeb's DECCAN WARS directly caused ADMINISTRATIVE DECAY by draining finances. War consumed 25+ years & massive treasury. To fund war without breaking empire immediately, Aurangzeb created more Mansabdari positions (but without sufficient Jagirs). Result = Mansabdar inflation, corruption, morale collapse. Agricultural taxation increased to fund war, causing peasant distress, reduced productivity, less tax revenue. Vicious cycle: war drained treasury → more taxation → peasant suffering → less revenue → more desperate measures.</p>
                </div>
                <div className="bg-linear-to-r from-orange-900 to-purple-900 p-4 rounded">
                  <p className="font-bold text-orange-200 mb-2">Chunk 2 → Chunk 3: Decay Creates Power Vacuum</p>
                  <p>ADMINISTRATIVE DECAY (Chunk 2) directly enabled RISE OF REGIONAL POWERS (Chunk 3). Weak center created power vacuum. When Mughal government lost peasant loyalty (through excessive taxation), peasants turned to local strongmen—zamindars, Maratha chiefs, Sikh leaders. When Mughal government lost elite loyalty (through Mansabdari crisis & religious alienation), nobles declared independence, became Nawabs. Marathas, Sikhs, successor states filled the void left by Mughal administrative collapse.</p>
                </div>
                <div className="bg-linear-to-r from-purple-900 to-red-900 p-4 rounded">
                  <p className="font-bold text-purple-200 mb-2">Chunk 3 → Chunk 1: Regional Powers Drain Remaining Resources</p>
                  <p>RISE OF REGIONAL POWERS (Chunk 3) then FURTHER DRAINED the weak IMPERIAL CENTER. Marathas collected Chauth (25% taxes) from Mughal territories. Sikhs raided North India. Successor states no longer paid tribute to Delhi. Empire went from controlling 80%+ of subcontinent to controlling maybe 20% by 1700s. Remaining territories provided insufficient revenue for even maintaining Delhi's administrative apparatus. Vicious cycle completed: weak center → regional powers emerge → regional powers drain remaining resources → center becomes even weaker → cycle continues.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded border-l-4 border-orange-500 mt-4">
                  <p className="font-bold text-orange-300">The Complete Cycle:</p>
                  <p>AURANGZEB'S RELIGIOUS POLICIES & DECCAN WARS → financial exhaustion & elite alienation → ADMINISTRATIVE DECAY through Mansabdari crisis, peasant distress, elite fragmentation → loss of central control → RISE OF REGIONAL POWERS (Marathas, Sikhs, successor states) who filled power vacuum → these regional powers further drained remaining Mughal resources → empire became hollow shell. By 1707 (Aurangzeb's death), empire was largest territorially but smallest in actual power. Controlled little, collected less tax, commanded no genuine loyalty. Successors were minor figures trying to maintain dignity in Delhi while real power lay with Peshwas, Nawabs, Rajas, British.</p>
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
                  <p className="font-bold text-blue-300 mb-2">Q1: Deccan Campaigns & Mansabdari Crisis Connection</p>
                  <p className="mb-2">Explain direct link between Aurangzeb's Deccan campaigns and the crisis in the Mansabdari system. How did one cause the other?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: DIRECT CAUSATION: Deccan campaigns consumed massive treasury funds over 25 years. To maintain army morale without raising central tax too much (which would cause peasant rebellion), Aurangzeb created MORE Mansabdari positions with land grants (Jagirs). PROBLEM: There weren't enough available lands to grant. MANSABDAR INFLATION resulted. Too many nobles, insufficient Jagirs. CONSEQUENCES: Nobles competing for same limited Jagirs = corruption (squeezing peasants harder), factionalism (fighting over posts), military morale collapse (demoralized soldiers), administrative decay (nobles looking for kickbacks, not service). THE MECHANISM: War funding → more Mansabdari positions created → not enough land → inflation → system breakdown. What had worked under Akbar (meritocratic elite serving empire) became patronage network where nobles fought each other for survival rather than serving state. Deccan war directly destroyed the administrative system that held empire together.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q2: Marathas vs. Sikhs - Different Nature of Challenge</p>
                  <p className="mb-2">Marathas and Sikhs both emerged as powerful forces during Aurangzeb's reign. How did NATURE of their challenge to Mughal authority DIFFER?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: MARATHAS = ECONOMIC + TERRITORIAL CHALLENGE. Started as rebellion. Evolved into pan-Indian confederacy. Perfected guerrilla tactics (Ganimi Kava). Challenge was about POWER & RESOURCES: claiming right to collect taxes (Chauth = 25% of revenue), territorial expansion, military dominance. By 18th century, Marathas effectively ruled most of India ALONGSIDE Mughals—they collected parallel taxes, had their own military, exercised real authority. Challenge was material & political. SIKHS = RELIGIOUS + POLITICAL TRANSFORMATION. Started as peaceful religious community. Persecution (Jizya, execution of Guru Tegh Bahadur) transformed them into militant brotherhood (Khalsa, 1699). Challenge was about SOVEREIGNTY & IDENTITY: establishing right to exist as independent political-religious entity, not subject to Islamic state authority. Guru Gobind Singh's Khalsa oath was about loyalty to faith, not emperor. After Aurangzeb, Banda Bahadur & later Misls established Sikh state—challenge was about RELIGIOUS AUTONOMY. DIFFERENCE: Marathas challenged for TERRITORY & TAX RIGHTS (resource competition). Sikhs challenged for RELIGIOUS SOVEREIGNTY & IDENTITY (spiritual-political independence). MARATHAS were pragmatic power-seekers; SIKHS were faith-driven sovereign community. Both weakened Mughal authority but through different mechanisms—one through resource-draining, other through withdrawal of spiritual legitimacy.</p>
                </div>
                <div className="bg-gray-900 p-4 rounded">
                  <p className="font-bold text-blue-300 mb-2">Q3: Successor States & British Conquest Connection</p>
                  <p className="mb-2">How did rise of Successor States (Awadh, Hyderabad, etc.) in 18th century directly shape political landscape that British East India Company later encountered and conquered?</p>
                  <p className="text-gray-400 text-sm">💡 Answer: FRAGMENTED POLITICAL LANDSCAPE: By 1750s, India was not unified Mughal Empire but collection of independent kingdoms—Awadh, Hyderabad, Bengal, Maratha Confederacy, Sikh Misls, Rajput states. No central authority. Each state pursued self-interest. STRATEGIC ADVANTAGE FOR BRITISH: This fragmentation was CRUCIAL to British success. British used "divide and conquer"—played states against each other, formed alliances with some against others. If India had remained unified under strong central power, British EIC would have been repelled militarily. But fragmented India meant no coordinated resistance. SPECIFIC EXAMPLES: 1) Battle of Plassey (1757)—Bengal Nawab Ahmad Shah fought cousin Mir Jafar over succession; British supported Mir Jafar; victory gave British control of Bengal. If Bengal had been unified & allied with other states, British would have lost. 2) Awadh—British manipulated Nawabs, eventually annexed Awadh (1856). 3) Maratha wars—Britain fought 3 wars against Maratha Confederacy (1775-1818); eventual victory possible because Marathas couldn't unite against common enemy. 4) Nizam of Hyderabad—remained independent ally of British, showing no central resistance. STRUCTURAL RESULT: Successor States created by Aurangzeb's decay became the CHESS BOARD on which British played. No united Indian military, no unified diplomacy, no shared interest in resisting foreign power. British conquered not a unified empire but patchwork of competing kingdoms. HISTORICAL IRONY: Aurangzeb was last Mughal to seriously try to rule all-India empire. His failure to maintain unity, his policies that fragmented elite & alienated communities, created conditions for foreign conquest. His 49-year reign planted seeds not just for Mughal decline but for European colonization of Asia.</p>
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
                  <p className="font-semibold text-red-300">Aurangzeb</p>
                  <p>Last powerful Mughal emperor (1658-1707). Orthodox Islamic conservative. Won War of Succession by imprisoning father Shah Jahan. 49-year reign. Pursued Deccan conquest for 25+ years. Reimposed Jizya, destroyed temples. Policies alienated Hindu nobility, exhausted treasury. Died age 88. Left empire hollow despite largest territorial extent.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-300">Sulh-i-Kul (Universal Peace)</p>
                  <p>Akbar's philosophy of religious & social tolerance. Attempted synthesis of Hindu & Islamic cultures. Abolished Jizya, allowed Hindu temples, integrated Hindu nobility. Aurangzeb rejected this, returned to Islamic orthodoxy. Shift from Sulh-i-Kul to orthodoxy = reversal of Akbar's policy = alienation of Hindu elites.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-300">Jizya Tax</p>
                  <p>Tax on non-Muslims (Hindus, Sikhs, Jains) in Muslim states. Created Dhimmi status—lower legal status for non-Muslims. In exchange for tax, state provided "protection." Aurangzeb reimposed Jizya after Akbar abolished it. Economically harmful & symbolically demeaning for Hindu populations.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-red-400">
                  <p className="font-semibold text-red-200">Deccan Campaigns</p>
                  <p>25+ year military offensive by Aurangzeb (roughly 1680s-1707) to conquer southern sultanates & crush Marathas. Captured Bijapur (1686), Golconda (1687). Militarily successful but politically & financially catastrophic. Drained treasury, exhausted army, never achieved decisive victory over Marathas. Classic imperial overstretch—won battles, never won war.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-400">
                  <p className="font-semibold text-orange-200">Ganimi Kava (Guerrilla Warfare)</p>
                  <p>Maratha military tactic perfected by Shivaji. "Guerrilla tactics"—light cavalry raids, rapid retreats, avoided pitched battles. Suited to mountain terrain. Bled Aurangzeb's army without being caught. Exemplifies why Deccan was "forever war"—Marathas never decisively defeated but never surrendered either.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-400">
                  <p className="font-semibold text-yellow-200">Mansabdar Inflation</p>
                  <p>Too many nobles (Mansabdars) created but insufficient land (Jagirs) to pay them. System collapsed under own weight. Consequences: corruption (nobles squeezed peasants), factionalism (fighting over posts), military morale collapse, administrative decay. Directly caused by Deccan war funding needs.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-purple-500">
                  <p className="font-semibold text-purple-300">Marathas & Confederacy</p>
                  <p>Started as rebellion under Shivaji against Mughal authority. Evolved under Peshwas into pan-Indian confederacy controlling most of subcontinent by 18th century. Used Ganimi Kava tactics. Collected Chauth (25% tax) from Mughal territories, effectively ruling alongside weakened empire. By 1750s, Marathas were primary political power in India.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-300">Khalsa (Sikh Brotherhood)</p>
                  <p>Martial brotherhood established by Guru Gobind Singh (1699). Transformed Sikhs from peaceful religious community into warrior order. Required uncut hair, turban, martial training, oath of loyalty. Response to Aurangzeb persecution. By 18th century, Sikhs had established powerful state in Punjab under Banda Bahadur & later Misls.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-300">Successor States</p>
                  <p>Independent kingdoms that emerged as Mughal authority collapsed. Key examples: Awadh (Saadat Khan, 1722), Hyderabad (Nizam-ul-Mulk, 1724), Bengal, Karnataka. Nominally acknowledged Mughal emperor but were autonomous. Developed own militaries, treasuries, diplomacy. By 18th century, real power lay with Nawabs, not Delhi emperor.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-300">
                  <p className="font-semibold text-orange-200">Chauth</p>
                  <p>Maratha system of collecting 25% of tax revenue from territories. Essentially "protection tribute"—in exchange for not raiding, states paid Chauth to Marathas. Created parallel government alongside weakened Mughal administration. By 18th century, Marathas were principal revenue collectors across India.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-300">Jat Rebellion</p>
                  <p>Agrarian uprising by Jats (agricultural caste) against Mughal authority. Led by Gokul Singh (1690s) & later Raja Surajmal (established Bharatpur state). Symbolized that even peasant classes rebelled. Showed Mughal legitimacy collapsed among common people—ruled through force, not consent.</p>
                </div>
                <div className="bg-gray-900 p-3 rounded border-l-4 border-indigo-500">
                  <p className="font-semibold text-indigo-200">Guru Gobind Singh (10th Sikh Guru)</p>
                  <p>(1666-1708) Transformed Sikhs into militant Khalsa brotherhood. Response to Aurangzeb persecution. Established "pure ones" warrior order with martial code. Death marked end of human Gurus—Sikh community took Guru Granth Sahib (holy scripture) as eternal Guru. Legacy = Sikhs became major political-military force.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 p-6 bg-linear-to-r from-red-900 to-orange-900 rounded-lg border border-red-700">
          <p className="text-red-200">
            <span className="font-bold">💡 Remember:</span> Aurangzeb was PARADOX—last POWERFUL Mughal (49-year reign, strong military, largest territorial extent) but also FIRST MUGHAL whose policies directly CAUSED DECLINE. His obsession with religious orthodoxy & Deccan conquest drained treasury, alienated elites, broke Mansabdari system, impoverished peasants. Created power vacuum filled by Marathas, Sikhs, successor states. When Aurangzeb died at 88, empire controlled everything but nothing—vast on map but hollow internally. No real revenue, no loyal elites, no happy peasants. Regional powers had actual authority. HISTORICAL IRONY: Aurangzeb was like a doctor prescribing poison. The patient (empire) got sicker with every treatment. He was brilliant administrator & military strategist—but his VISION (Islamic orthodoxy, total Deccan conquest) was incompatible with holding a diverse, vast subcontinent. His long reign prevented succession disputes but also prevented anyone from changing course. By time of his death, course was already irreversible. His 49-year reign planted seeds not just for Mughal decline but for British colonization of India. Fragmented empire was easy target for EIC. ULTIMATE LESSON: Individual leader's ideology & obsessions can shape entire civilization's trajectory. Aurangzeb single-handedly transformed Mughal empire from synthesis-based power to doctrine-based power—and doctrine could not hold together diversity of subcontinent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AurangzebNotes;
