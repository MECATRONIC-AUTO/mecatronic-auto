export function Pricing() {
  const tarifs = [
    {
      category: 'T1',
      price: '45€',
      description: 'Entretien courant et petites réparations',
    },
    {
      category: 'T2',
      price: '55€',
      description: 'Réparations mécaniques standard',
    },
    {
      category: 'T3',
      price: '65€',
      description: 'Interventions techniques complexes',
    },
    {
      category: 'T4',
      price: '75€',
      description: 'Diagnostic électronique et interventions spécialisées',
    },
  ];

  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Tarifs</h2>
          <p className="text-xl text-gray-600">
            Tarification horaire transparente selon le type d'intervention
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tarifs.map((tarif, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{tarif.category}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4">{tarif.price}</div>
                <p className="text-sm text-gray-600">HT / heure</p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700">{tarif.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            * Tarifs indicatifs hors fournitures. Devis gratuit sur demande.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Demander un Devis Gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
