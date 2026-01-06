import React from 'react';

const LiteratureSection = ({ expandedSection, toggleSection }) => (
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
);

export default LiteratureSection;
