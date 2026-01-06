import React from 'react';

const PrinciplesSection = ({ expandedSection, toggleSection }) => (
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
);

export default PrinciplesSection;
