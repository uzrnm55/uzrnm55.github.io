import React from 'react';

const Gear: React.FC = () => {
  const gearItems = [
    {
      id: 1,
      name: 'Panhandle Pirates Team Jersey',
      image: 'tshirt.jpg',
      description: 'Official team jersey with embroidered logo and player number customization available. Made from high-quality, breathable fabric perfect for competition and practice.',
      category: 'Shirts & Apparel'
    },
    {
      id: 2,
      name: 'Competition Swim Cap',
      image: 'centeredLogo.jpg',
      description: 'High-quality silicone swim cap with team logo, perfect for competitions. Provides excellent fit and durability for intense water polo matches.',
      category: 'Swimwear'
    },
    {
      id: 3,
      name: 'Team Backpack',
      image: 'centeredLogo.jpg',
      description: 'Durable backpack with team logo, perfect for carrying gear to practices and competitions. Features multiple compartments and comfortable straps.',
      category: 'Accessories'
    }
  ];

  return (
    <section id="gear" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Team Gear & Merchandise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Show your team spirit with official Panhandle Pirates gear. Quality apparel and equipment for players and fans.
          </p>
        </div>

        {/* Gear Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {gearItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300">
              {/* Item Image */}
              <div className="aspect-square bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Item Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{item.name}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gear;
