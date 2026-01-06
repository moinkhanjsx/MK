import React from 'react';

const ChunkingSection = ({ expandedSection, toggleSection }) => (
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
);

export default ChunkingSection;
