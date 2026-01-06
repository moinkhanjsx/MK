import React from 'react';

const EconomySection = ({ expandedSection, toggleSection }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
    <button
      onClick={() => toggleSection('economy')}
      className="w-full p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
    >
      <h2 className="text-xl font-bold text-white">💰 Economic Structure: Agriculture, Village, Trade</h2>
      <span className="text-2xl">{expandedSection === 'economy' ? '−' : '+'}</span>
    </button>
    {expandedSection === 'economy' && (
      <div className="px-6 pb-6 border-t border-gray-700 space-y-3 text-gray-300">
        <div className="bg-gray-900 p-3 rounded border-l-4 border-green-500">
          <p className="font-semibold text-green-300">Agricultural Base & Revenue System</p>
          <p><span className="font-bold">Economy:</span> Predominantly agrarian. Agriculture = primary wealth source. <span className="font-bold">Staples:</span> Wheat (North), rice (East & South), cotton (Western India), indigo (dye crop, high-value export). <span className="font-bold">Zabt system (under Akbar-Todar Mal):</span> Land measurement, assessment, tax collection streamlined for cash income maximization. <span className="font-bold">Revenue split:</span> State took 1/3 to 1/2 of production as tax (varied by region/emperor). Farmer kept remainder for family & market sale. <span className="font-bold">Stability:</span> Under Akbar, system was relatively fair. Farmer knew what tax to expect. Under weak emperors or Aurangzeb's warfare, taxation became oppressive (higher rates, corruption). <span className="font-bold">Urban supply:</span> Agricultural surplus supported cities, courts, armies. Cities depended on smooth food flow from countryside.</p>
        </div>
        <div className="bg-gray-900 p-3 rounded border-l-4 border-blue-500">
          <p className="font-semibold text-blue-300">Village Economy: Jajmani System & Caste-Based Exchange</p>
          <p><span className="font-bold">Unit:</span> Village was semi-self-sufficient economic unit. 100-500 families typically. <span className="font-bold">Occupational division:</span> Different castes did different jobs—Brahmin (priest/teacher), Kshatriya (landlord/warrior), Vaishya (merchant), Shudra (artisan/laborer), Untouchables (waste removal, leatherwork). <span className="font-bold">Jajmani system:</span> Non-cash, caste-based barter. Farmer (patron/Jajman) received services from artisan/barber/blacksmith (Jajman's dependents). In exchange, artisan received grain share at harvest. Blacksmith maintained farm tools, received grain. Barber cut hair, shaved, received grain. No money changed hands—all in kind (grain). <span className="font-bold">Stability:</span> System created stable, predictable economic relationships. Everyone knew their role, their income (grain share). <span className="font-bold">Dark side:</span> Reinforced caste hierarchy. Castes couldn't change jobs—hereditary occupation. Untouchables (waste removers, leather workers) got least grain, had lowest status. System kept lower castes in permanent subordination. <span className="font-bold">Resilience:</span> System didn't need imperial oversight to function. Villages self-regulated. Survived even when central authority weakened (18th century collapse).</p>
        </div>
        <div className="bg-gray-900 p-3 rounded border-l-4 border-yellow-500">
          <p className="font-semibold text-yellow-300">Internal & External Trade</p>
          <p><span className="font-bold">Internal trade:</span> Robust. Spice trade (Kerala spices), textile trade (Bengal muslins, Gujarat cotton), metalwork, gemstones. Trading guilds organized commerce. Towns grew as trade hubs. <span className="font-bold">Pre-European trade:</span> Flourished along Indian Ocean. Arab, Persian, Chinese traders came to Indian ports. Indian goods (spices, textiles, indigo) exported westward. <span className="font-bold">European arrival:</span> Portuguese (Vasco da Gama 1498) rounded Cape, reached India seeking spices. Established coastal factories. Dutch, English, French followed. Set up trading posts: Goa (Portuguese), Calcutta/Bengal (English), Pondicherry (French), Surat (initially mixed). <span className="font-bold">Change mechanism:</span> Europeans brought new demand, new capital, new organization. Started monopolizing Indian trade through force (Portuguese naval power). Shifted trade from Indian Ocean (balanced multilateral) to European-controlled (colonial). <span className="font-bold">Long-term impact:</span> Began erosion of Indian merchant power. Wealth flow redirected from Indian ports to European ports. Created "factory" system—small fortified posts, initially for trade, later bases for territorial conquest. Subtle but revolutionary change to India's position in global economy.</p>
        </div>
      </div>
    )}
  </div>
);

export default EconomySection;
