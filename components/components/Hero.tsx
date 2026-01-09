import { Wrench, Clock, Award } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="pt-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            MECATRONIC AUTO
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Votre Garage de Confiance à Dugny
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Expertise, qualité et service professionnel pour l'entretien et la réparation de votre véhicule
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Prendre Rendez-vous
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <Wrench className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p>Mécaniciens qualifiés et expérimentés</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapidité</h3>
            <p>Service efficace et délais respectés</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Qualité</h3>
            <p>Pièces de qualité et garanties</p>
          </div>
        </div>
      </div>
    </section>
  );
}
