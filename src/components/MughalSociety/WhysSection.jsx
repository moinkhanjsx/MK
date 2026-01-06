import React from 'react';

const WhysSection = ({ expandedSection, toggleSection }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
    <button
      onClick={() => toggleSection('whys')}
      className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
    >
      <h2 className="text-xl font-bold text-white">3️⃣ The 5 Whys - Bhakti Movement's Mass Appeal</h2>
      <span className="text-2xl">{expandedSection === 'whys' ? '−' : '+'}</span>
    </button>
    {expandedSection === 'whys' && (
      <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
        <div className="bg-gray-900 p-3 rounded">
          <p className="font-semibold text-yellow-300">Why #1: Why did people (especially lower castes) embrace Bhakti?</p>
          <p>Offered direct, accessible path to spiritual salvation without Brahminical rituals, Sanskrit texts, priestly mediation. No gatekeepers. No literacy requirement. No caste restrictions.</p>
        </div>
        <div className="bg-gray-900 p-3 rounded">
          <p className="font-semibold text-yellow-300">Why #2: Why was bypassing priests & rituals so appealing?</p>
          <p>Orthodox CASTE SYSTEM denied spiritual equality & social dignity to majority. Brahminical Hinduism = Brahmin priests monopoly over spiritual authority. Vedas only in Sanskrit (Brahmin knowledge). Rituals expensive & Brahmin-mediated. Lower castes = ritually impure, spiritually limited.</p>
        </div>
        <div className="bg-gray-900 p-3 rounded">
          <p className="font-semibold text-yellow-300">Why #3: What deeper need did "equality before God" address?</p>
          <p>Need for SOCIAL DIGNITY & PERSONAL AGENCY. In rigid hierarchy, individual had no voice (birth determined destiny). Bhakti provided framework where devotee's LOVE & FAITH mattered more than birth. Personal connection to divine = personal validation. Song & devotion = form of self-expression unavailable in caste system.</p>
        </div>
        <div className="bg-gray-900 p-3 rounded">
          <p className="font-semibold text-yellow-300">Why #4: What was root social mechanism?</p>
          <p>SPIRITUAL EMPOWERMENT AS SOCIAL CRITIQUE. By claiming divine is in everyone's heart, Bhakti inherently CHALLENGED LEGITIMACY OF CASTE-BASED POWER. If god accepts Mirabai's devotion despite being woman, then caste (which denies women equality) can't be divinely ordained. Spiritual equality implied social equality should exist.</p>
        </div>
        <div className="bg-amber-900 bg-opacity-40 p-4 rounded border-l-4 border-amber-500 mt-4">
          <p className="font-bold text-amber-200">Why #5 (Root Truth):</p>
          <p>Bhakti was NOT just religious trend—it was QUIET SOCIAL REVOLUTION. Used language of devotion to question earthly hierarchies. Made it profoundly popular & resilient because it was spiritually empowering (offered salvation) WHILE BEING socially subversive (challenged caste). Masses embraced it because: 1) direct salvation path, 2) spiritual equality validation, 3) social critique wrapped in devotion (harder to suppress than political rebellion).</p>
        </div>
      </div>
    )}
  </div>
);

export default WhysSection;
