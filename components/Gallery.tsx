export function Gallery() {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      alt: 'Atelier mécanique MECATRONIC AUTO',
    },
    {
      url: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800',
      alt: 'Diagnostic électronique',
    },
    {
      url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800',
      alt: 'Équipement professionnel',
    },
    {
      url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800',
      alt: 'Intervention mécanique',
    },
    {
      url: 'https://images.unsplash.com/photo-1632823469217-ea70e4839a0e?w=800',
      alt: 'Réparation moteur',
    },
    {
      url: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800',
      alt: 'Garage MECATRONIC AUTO',
    },
  ];

  return (
    <section id="galerie" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Garage</h2>
          <p className="text-xl text-gray-600">
            Découvrez nos installations et notre équipement professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow aspect-video"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
