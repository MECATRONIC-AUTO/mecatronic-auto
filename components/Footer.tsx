import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MECATRONIC AUTO</h3>
            <p className="text-gray-400">
              Votre garage de confiance à Dugny pour l'entretien et la réparation de votre véhicule.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>24 rue de la Prévoyance, DUGNY</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:0602294324" className="hover:text-white">06 02 29 43 24</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:bounouh@mecatronicauto.com" className="hover:text-white">
                  bounouh@mecatronicauto.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <div className="space-y-2 text-gray-400">
              <p>Lundi - Vendredi : 8h00 - 18h00</p>
              <p>Samedi : 9h00 - 13h00</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MECATRONIC AUTO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
