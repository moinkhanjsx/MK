import React from 'react';

const ReligiousSection = ({ expandedSection, toggleSection }) => (
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
);

export default ReligiousSection;
