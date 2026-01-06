import React from 'react';

const KeyTermsSection = ({ expandedSection, toggleSection }) => (
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
);

export default KeyTermsSection;
