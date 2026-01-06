import React from 'react';

const ArtSection = ({ expandedSection, toggleSection }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
    <button
      onClick={() => toggleSection('art')}
      className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
    >
      <h2 className="text-xl font-bold text-white">🏛️ Art & Architecture: The Mughal Aesthetic</h2>
      <span className="text-2xl">{expandedSection === 'art' ? '−' : '+'}</span>
    </button>
    {expandedSection === 'art' && (
      <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
        <div className="bg-gray-900 p-3 rounded border-l-4 border-orange-500">
          <p className="font-semibold text-orange-300">Architecture: The Indo-Islamic Synthesis</p>
          <p><span className="font-bold">Persian Elements:</span> Arches (more elegant than Indian corbels), domes (mathematical precision, soaring height), minarets (towering, decorative), calligraphy (Islamic artistic tradition), pointed arches. <span className="font-bold">Indian Elements:</span> Intricate stone decoration (arabesques, floral patterns), pietra dura (semi-precious stone inlay—uniquely Mughal), jali (latticed screens), garden layout oriented to cardinal directions. <span className="font-bold">Key monuments:</span> TAJ MAHAL (marble tomb, perfect symmetry, pietra dura), RED FORT Delhi (palace, residential comfort, fortress), AGRA FORT, LAHORE FORT, FATEHPUR SIKRI, JAMA MASJID Delhi. <span className="font-bold">Charbagh (Four Garden):</span> Characteristic Mughal garden. Central water channel dividing into four quadrants (Islamic paradise garden concept). Symmetry, water, shade—paradise garden on earth. Used widely in palaces, tombs, mosques. <span className="font-bold">Innovation:</span> Created style recognized as uniquely Mughal (not purely Persian, not purely Indian). Appealed to both Muslim & Hindu populations. Demonstrated inclusive empire through aesthetics.</p>
        </div>
        <div className="bg-gray-900 p-3 rounded border-l-4 border-pink-500">
          <p className="font-semibold text-pink-300">Painting: Indo-Persian Miniature Art</p>
          <p><span className="font-bold">Technique:</span> Small paintings on paper/vellum. Intricate detail, brilliant colors, gold leaf. Mughal ateliers organized by emperor, produced specialized works. <span className="font-bold">Style development:</span> Early Mughal painting influenced by Persian miniatures (Timurid tradition). Over time, absorbed Indian elements—local flora/fauna, Indian faces, Indian composition principles. <span className="font-bold">Peak under Jahangir:</span> Emperor was passionate art lover. Patronage produced exquisite NATURE STUDIES—flowers, animals, birds painted with naturalistic detail & scientific accuracy. His court artist Abu'l Hasan created masterpieces. <span className="font-bold">Subject matter:</span> Court scenes, hunts, battles, nature studies, portraiture (especially Akbar & Jahangir), illustrations of literary texts (Akbarnama, Dastan-i-Amir Hamza). <span className="font-bold">Characteristics:</span> Naturalism (not Islamic abstraction), perspective (Persian innovation), human figures (unlike some Islamic traditions), brilliant colors, narrative detail. <span className="font-bold">Innovation:</span> Created unique Indo-Persian style not seen before. Bridged Persian & Indian artistic traditions. Represents pinnacle of Mughal cultural synthesis.</p>
        </div>
      </div>
    )}
  </div>
);

export default ArtSection;
