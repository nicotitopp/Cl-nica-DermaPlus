import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                alt="Interior de Clínica DermaPlus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/50 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/50 rounded-full -z-10 blur-2xl"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre DermaPlus</h2>
            
            <p className="text-lg text-dark-secondary mb-6 leading-relaxed">
              DermaPlus es una clínica estética de primer nivel dedicada a redefinir el cuidado de la piel mediante una combinación perfecta de precisión médica y lujo. Fundada por dermatólogos líderes, creemos que el verdadero resplandor proviene de una piel sana y bien nutrida.
            </p>
            
            <p className="text-lg text-dark-secondary mb-8 leading-relaxed">
              Nos especializamos en tratamientos avanzados no invasivos adaptados a tu perfil biológico único. En DermaPlus, no solo tratamos la piel; te empoderamos para abrazar tu belleza natural con confianza, utilizando tecnología de punta y métodos probados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-light-bg rounded-xl text-primary-text">
                  <Award size={24} />
                </div>
                <span className="font-bold text-dark">Expertos Certificados</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-light-bg rounded-xl text-primary-text">
                  <Heart size={24} />
                </div>
                <span className="font-bold text-dark">Atención Personal</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-light-bg rounded-xl text-primary-text">
                  <Users size={24} />
                </div>
                <span className="font-bold text-dark">+2k Pacientes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;