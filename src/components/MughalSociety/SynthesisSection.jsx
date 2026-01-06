import React from 'react';

const SynthesisSection = ({ expandedSection, toggleSection }) => (
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
);

export default SynthesisSection;
