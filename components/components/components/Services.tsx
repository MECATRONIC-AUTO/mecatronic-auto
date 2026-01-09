import { Wrench, Search, Battery, Droplet, Wind, Gauge, AlertCircle, Settings } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Révision & Entretien',
      description: 'Entretien complet selon préconisations constructeur',
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Diagnostic Électronique',
      description: 'Diagnostic complet avec valise professionnelle',
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Mécanique Générale',
      description: 'Réparation moteur, boîte, embrayage, distribution',
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Pneumatiques',
      description: 'Montage, équilibrage, géométrie',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Climatisation',
      description: 'Recharge et réparation système de climatisation',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Freinage',
      description: 'Plaquettes, disques, contrôle système de freinage',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Contrôle Technique',
      description: 'Préparation et contre-visite',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Amortisseurs',
      description: 'Remplacement et diagnostic suspension',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600">
            Un service complet pour tous vos besoins automobiles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
