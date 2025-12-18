import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-12 pb-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ponte en Contacto</h1>
          <p className="text-dark-secondary text-lg">
            ¿Tienes preguntas sobre nuestros tratamientos o quieres agendar una consulta? Estamos aquí para ayudarte a alcanzar tus objetivos estéticos.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            {/* Address */}
            <div className="bg-white p-8 rounded-[2rem] border border-pink-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center text-primary-text mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visítanos</h3>
              <p className="text-dark-secondary">
                Calle Glow 123<br />
                Beverly Hills, CA 90210
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white p-8 rounded-[2rem] border border-pink-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center text-primary-text mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Información</h3>
              <p className="text-dark-secondary flex flex-col gap-2">
                <a href="tel:5551234567" className="hover:text-primary-text transition-colors">(555) 123-4567</a>
                <a href="mailto:hola@dermaplus.com" className="hover:text-primary-text transition-colors">hola@dermaplus.com</a>
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 rounded-[2rem] border border-pink-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center text-primary-text mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Horario</h3>
              <ul className="text-dark-secondary space-y-2">
                <li className="flex justify-between">
                  <span>Lun - Vie</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-medium">Cerrado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/4">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;