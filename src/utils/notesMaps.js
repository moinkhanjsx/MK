// Notes Components Centralized Mapping
// Instead of: if (showKhilji) return <KhiljiNotes...> else if (showTughlaq) return <TughlaqNotes...>
// Use: notesComponentsMap[openNotes]

import SlaveHistoryNotes from '../components/SlaveHistoryNotes';
import KhiljiHistoryNotes from '../components/KhiljiHistoryNotes';
import TughlaqHistoryNotes from '../components/TughlaqHistoryNotes';
import SayyidLodistoryNotes from '../components/SayyidLodistoryNotes';
import DelhiSultanateAdminNotes from '../components/DelhiSultanateAdminNotes';
import DelhiSocietyEconomyCultureNotes from '../components/DelhiSocietyEconomyCultureNotes';
import TripartiteStruggleNotes from '../components/TripartiteStruggleNotes';
import TurkishInvasionsNotes from '../components/TurkishInvasionsNotes';
import EarlyMedievalSocietyEconomyCultureNotes from '../components/EarlyMedievalSocietyEconomyCultureNotes';
import MughalFoundersNotes from '../components/MughalFoundersNotes';
import SherShahSuriNotes from '../components/SherShahSuriNotes';
import AkbarNotes from '../components/AkbarNotes';
import JahangirShahJahanNotes from '../components/JahangirShahJahanNotes';
import AurangzebNotes from '../components/AurangzebNotes';
import MughalAdministrationNotes from '../components/MughalAdministrationNotes';
import MughalSocietyEconomyCultureNotes from '../components/MughalSocietyEconomyCultureNotes';
import MarathaEmpireNotes from '../components/MarathaEmpireNotes';

/**
 * Centralized mapping of note types to their React components
 * Benefits:
 * - Single source of truth for all study materials
 * - Easy to add new notes without touching App.jsx
 * - Replaced 15+ if statements with 1 map lookup
 * - Can iterate over this to build navigation UI dynamically
 */
export const NOTES_COMPONENTS_MAP = {
  // Part I: Early Medieval India (750-1200)
  'tripartite-struggle': TripartiteStruggleNotes,
  'turkish-invasions': TurkishInvasionsNotes,
  'early-medieval-society': EarlyMedievalSocietyEconomyCultureNotes,

  // Part II: Delhi Sultanate (1206-1526)
  'slave-dynasty': SlaveHistoryNotes,
  'khilji-dynasty': KhiljiHistoryNotes,
  'tughlaq-dynasty': TughlaqHistoryNotes,
  'sayyid-lodi': SayyidLodistoryNotes,
  'delhi-admin': DelhiSultanateAdminNotes,
  'delhi-society': DelhiSocietyEconomyCultureNotes,

  // Part III: Mughal Empire (1526-1857)
  'mughal-founders': MughalFoundersNotes,
  'sher-shah-suri': SherShahSuriNotes,
  'akbar': AkbarNotes,
  'jahangir-shah-jahan': JahangirShahJahanNotes,
  'aurangzeb': AurangzebNotes,
  'mughal-admin': MughalAdministrationNotes,
  'mughal-society': MughalSocietyEconomyCultureNotes,

  // Part IV: Maratha Empire (1640s-1818)
  'maratha-empire': MarathaEmpireNotes,
};

/**
 * Study materials metadata - for building navigation UI
 * Can be used to create a tree structure, search functionality, etc.
 */
export const HISTORY_NOTES_STRUCTURE = {
  'part-i': {
    title: 'Part I: Early Medieval India (750-1200)',
    description: 'FOUNDATIONAL SECTION',
    color: 'from-amber-900 to-orange-900',
    icon: '🏛️',
    notes: [
      {
        id: 'tripartite-struggle',
        title: '⚔️ Tripartite Struggle & Regional Kingdoms',
        description: 'Kannauj conflict, Palas, Pratiharas, Rashtrakutas, Cholas',
        color: 'amber-600',
      },
      {
        id: 'turkish-invasions',
        title: '🏹 Turkish Invasions & Islamic Arrival',
        description: 'Mahmud of Ghazni, Muhammad Ghori - turning point',
        color: 'red-600',
      },
      {
        id: 'early-medieval-society',
        title: '🌸 Feudalism, Bhakti & Regional Languages',
        description: 'Feudal decentralization, philosophy, cultural development',
        color: 'purple-600',
      },
    ],
  },
  'part-ii': {
    title: 'Part II: The Delhi Sultanate (1206-1526)',
    description: 'CORE SECTION',
    color: 'from-purple-900 to-indigo-900',
    icon: '👑',
    notes: [
      {
        id: 'slave-dynasty',
        title: '📚 Slave Dynasty',
        description: 'Military slavery to high office - Aibak to Iltutmish era',
        color: 'blue-600',
      },
      {
        id: 'khilji-dynasty',
        title: '⚔️ Alauddin Khilji',
        description: 'Wartime economy, price controls, military strategy',
        color: 'orange-600',
      },
      {
        id: 'tughlaq-dynasty',
        title: '👑 Tughlaq Dynasty',
        description: 'Stability → Chaos → Recovery → Collapse',
        color: 'purple-600',
      },
      {
        id: 'sayyid-lodi',
        title: '🏰 Sayyid & Lodi Dynasties',
        description: 'Final chapter: Partnership to autocratic collapse (1414-1526)',
        color: 'amber-600',
      },
      {
        id: 'delhi-admin',
        title: '⚙️ Delhi Sultanate Administration',
        description: 'Central command, Iqta provinces, legal/religious systems',
        color: 'cyan-600',
      },
      {
        id: 'delhi-society',
        title: '🎨 Society, Economy & Culture',
        description: 'Social hierarchy, agrarian economy, Indo-Islamic art',
        color: 'rose-600',
      },
    ],
  },
  'part-iii': {
    title: 'Part III: The Mughal Empire (1526-1857)',
    description: 'MOST IMPORTANT SECTION',
    color: 'from-red-900 to-pink-900',
    icon: '👑',
    notes: [
      {
        id: 'mughal-founders',
        title: '👑 The Founders: Babur & Humayun',
        description: 'Foundation & consolidation (1526-1556) - Panipat, Sher Shah era',
        color: 'red-900',
      },
      {
        id: 'sher-shah-suri',
        title: '⚙️ Sher Shah Suri - The Great Administrator',
        description: 'Patta System, Grand Trunk Road, Currency Reform (1540-1545)',
        color: 'yellow-900',
      },
      {
        id: 'akbar',
        title: '👑 Akbar - The Empire Builder',
        description: 'Mansabdari, Sulh-i-Kul, Fatehpur Sikri, Navratnas (1556-1605)',
        color: 'amber-900',
      },
      {
        id: 'jahangir-shah-jahan',
        title: '👑 Jahangir & Shah Jahan',
        description: 'Justice to Magnificence - Taj Mahal, Red Fort (1605-1658)',
        color: 'indigo-900',
      },
      {
        id: 'aurangzeb',
        title: '👑 Aurangzeb - The Last Great Mughal & Decline',
        description: 'Religious orthodoxy, Deccan campaigns, imperial overstretch (1658-1707)',
        color: 'red-900',
      },
      {
        id: 'mughal-admin',
        title: '⚙️ Mughal Administration',
        description: 'Mansabdari, Jagirdari, Central & Provincial systems (Detailed for Mains)',
        color: 'blue-900',
      },
      {
        id: 'mughal-society',
        title: '🎨 Mughal Society, Economy & Culture',
        description: 'Religious movements, architecture, trade, Jajmani system',
        color: 'purple-900',
      },
    ],
  },
  'part-iv': {
    title: 'Part IV: The Maratha Empire (1640s-1818)',
    description: 'ABSOLUTELY VITAL FOR MPSC',
    color: 'from-orange-900 to-red-900',
    icon: '⚔️',
    notes: [
      {
        id: 'maratha-empire',
        title: '⚔️ Maratha Empire - Complete Study Guide',
        description: 'PARTS I-VI: Shivaji | Peshwas | Confederacy | Relations | Comparative Studies | Impact (1627-1818)',
        color: 'orange-900',
      },
    ],
  },
};

/**
 * Get component for a specific notes type
 * @param {string} notesType - The notes type key
 * @returns {React.Component} The component to render
 */
export const getNotesComponent = (notesType) => {
  return NOTES_COMPONENTS_MAP[notesType];
};

/**
 * Get metadata for a specific notes type
 * @param {string} notesType - The notes type key
 * @returns {Object} Notes metadata with title, description, etc.
 */
export const getNotesMetadata = (notesType) => {
  for (const part of Object.values(HISTORY_NOTES_STRUCTURE)) {
    const note = part.notes?.find(n => n.id === notesType);
    if (note) return note;
  }
  return null;
};

/**
 * Get all notes in a specific part
 * @param {string} partKey - The part key ('part-i', 'part-ii', etc.)
 * @returns {Array} Array of notes in that part
 */
export const getNotesByPart = (partKey) => {
  return HISTORY_NOTES_STRUCTURE[partKey]?.notes || [];
};

/**
 * Get all parts
 * @returns {Array} Array of all parts with their metadata
 */
export const getAllParts = () => {
  return Object.entries(HISTORY_NOTES_STRUCTURE).map(([key, part]) => ({
    key,
    ...part,
  }));
};
