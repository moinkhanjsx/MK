import React from 'react';

const FeynmanSection = ({ expandedSection, toggleSection }) => (
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
);

export default FeynmanSection;
