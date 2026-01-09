import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="accueil" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619642737579-a7474bee1044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwZ2FyYWdlfGVufDF8fHx8MTc2Nzc3NjI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Garage MECATRONIC AUTO"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Excellence en<br />
            <span className="text-blue-400">Mécanique Automobile</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Des professionnels qualifiés à votre service pour l'entretien et la réparation 
            de votre véhicule. Expertise, qualité et confiance à Dugny depuis 2024.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              Prendre Rendez-vous
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm border border-white/20 transition-colors"
            >
              Nos Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
