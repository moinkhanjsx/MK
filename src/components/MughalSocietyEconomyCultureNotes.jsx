import React, { useState } from 'react';
import ChunkingSection from './MughalSociety/ChunkingSection';
import PrinciplesSection from './MughalSociety/PrinciplesSection';
import WhysSection from './MughalSociety/WhysSection';
import FeynmanSection from './MughalSociety/FeynmanSection';
import ReligiousSection from './MughalSociety/ReligiousSection';
import ArtSection from './MughalSociety/ArtSection';
import LiteratureSection from './MughalSociety/LiteratureSection';
import EconomySection from './MughalSociety/EconomySection';
import SynthesisSection from './MughalSociety/SynthesisSection';
import SelfTestSection from './MughalSociety/SelfTestSection';
import KeyTermsSection from './MughalSociety/KeyTermsSection';

const MughalSocietyEconomyCultureNotes = ({ onBack }) => {
  const [expandedSection, setExpandedSection] = useState('overview');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="text-blue-400 hover:text-blue-300 mb-4 flex items-center gap-2 transition-colors"
          >
            ← Back to Quiz
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">🎨 Society, Economy & Culture under the Mughals</h1>
          <p className="text-gray-400">Religious Movements, Art & Architecture, Literature, and Economic Systems</p>
        </div>

        <div className="space-y-4">
          <ChunkingSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <PrinciplesSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <WhysSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <FeynmanSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <ReligiousSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <ArtSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <LiteratureSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <EconomySection expandedSection={expandedSection} toggleSection={toggleSection} />
          <SynthesisSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <SelfTestSection expandedSection={expandedSection} toggleSection={toggleSection} />
          <KeyTermsSection expandedSection={expandedSection} toggleSection={toggleSection} />
        </div>

        <div className="mt-8 p-6 bg-linear-to-r from-purple-900 to-orange-900 rounded-lg border border-purple-700">
          <p className="text-purple-200">
            <span className="font-bold">💡 Remember:</span> Mughal era's society was COMPLEX SYNTHESIS. ECONOMIC SURPLUS (agriculture, trade) funded CULTURAL MAGNIFICENCE (Taj Mahal, painting, courts). RELIGIOUS MOVEMENTS (Bhakti, Sikhism) offered spiritual equality while VILLAGE ECONOMIES (Jajmani) reinforced caste hierarchy—TENSION that made Bhakti powerful. BHAKTI SAINTS created REGIONAL LITERATURE that elevated local languages from dialects to prestigious mediums. ART & ARCHITECTURE combined Persian & Indian elements into unique synthesis reflecting inclusive empire. LITERATURE split into elite Persian (court) vs. popular regional (masses). ECONOMY was internally robust (agriculture + trade) but EUROPEAN ARRIVAL began subtle transformation—trade posts → military bases → territorial conquest. Mughal era looks internally beautiful (culture, art, harmony) but EXTERNAL VULNERABILITY (no unified naval power, competing regional interests) made it susceptible to European conquest. By 18th century, combination of internal weakening (Aurangzeb's wars, succession conflicts) + external European pressure = collapse of synthesis, fragmentation into regional pieces, eventual colonialism. Society-Economy-Culture was mutually reinforcing system that worked brilliantly under strong, tolerant emperors (Akbar, Jahangir, Shah Jahan) but proved fragile when center weakened or became intolerant (Aurangzeb) OR when external powers (European traders) exploited weakness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MughalSocietyEconomyCultureNotes;
