import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">À Propos de Nous</h2>
            <p className="text-lg text-gray-600 mb-6">
              MECATRONIC AUTO est votre garage de confiance situé à Dugny. Nous sommes spécialisés 
              dans l'entretien et la réparation de tous types de véhicules avec un service 
              professionnel et personnalisé.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe de mécaniciens qualifiés met son expertise à votre service pour 
              garantir la performance et la sécurité de votre véhicule.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Mécaniciens Qualifiés</h3>
                  <p className="text-gray-600">Équipe expérimentée et formée aux dernières technologies</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Équipement Moderne</h3>
                  <p className="text-gray-600">Outils de diagnostic et équipements professionnels</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Service Personnalisé</h3>
                  <p className="text-gray-600">Écoute, conseil et transparence pour chaque client</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir ?</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Devis gratuit et détaillé</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Tarifs transparents et compétitifs</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Pièces de qualité garanties</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Délais respectés</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Parking disponible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
