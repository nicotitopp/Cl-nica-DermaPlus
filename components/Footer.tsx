import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-bg pt-20 pb-10 border-t border-pink-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-primary-text">
                <Sparkles size={24} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight">DermaPlus</span>
            </div>
            <p className="text-dark-secondary mb-6 leading-relaxed">
              Sacando la mejor versión de ti con tecnología estética avanzada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            
            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Servicios</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-dark-secondary hover:text-primary-text transition-colors">HydraFacial</a></li>
                <li><a href="#" className="text-dark-secondary hover:text-primary-text transition-colors">Terapia Láser</a></li>
                <li><a href="#" className="text-dark-secondary hover:text-primary-text transition-colors">Inyectables</a></li>
                <li><a href="#" className="text-dark-secondary hover:text-primary-text transition-colors">Análisis de Piel</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-dark-secondary">
                  <MapPin size={20} className="shrink-0 mt-0.5" />
                  <span>Calle 4A Sur,<br/>Cali, Valle del Cauca</span>
                </li>
                <li className="flex items-center gap-3 text-dark-secondary">
                  <Phone size={20} />
                  <span>(602) 123-4567-890</span>
                </li>
                <li className="flex items-center gap-3 text-dark-secondary">
                  <Mail size={20} />
                  <span>noshe@dermaplus.com</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center md:text-left">
          <p className="text-sm text-gray-400">© 2025 Clínica DermaPlus. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;