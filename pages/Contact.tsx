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
                <a target="blank_" href="https://www.google.com/maps/place/Gale%C5%A1njak/@43.9790841,15.3814958,1128m/data=!3m1!1e3!4m6!3m5!1s0x4761e04f538c63e7:0x50f2a3d385586140!8m2!3d43.9787249!4d15.3846242!16s%2Fm%2F06w1b4w?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D">
                  <MapPin size={24} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2">Visítanos</h3>
              <p className="text-dark-secondary">
                Calle 4A Sur<br />
                Cali, Valle del Cauca
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white p-8 rounded-[2rem] border border-pink-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center text-primary-text mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Información</h3>
              <p className="text-dark-secondary flex flex-col gap-2">
                <a href="tel:6021234567890" className="hover:text-primary-text transition-colors">(602) 123-4567-890</a>
                <a href="mailto:noshe@dermaplus.com" className="hover:text-primary-text transition-colors">noshe@dermaplus.com</a>
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
          <div className="lg:w-4/5 ">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;