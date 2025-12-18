import React from 'react';
import { Droplets, Zap, Smile, Sparkles, Activity, Leaf } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-light-bg border border-pink-50 p-8 rounded-[2rem] shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary-hover flex flex-col items-start gap-4 group">
    <div className="p-3 bg-primary/40 rounded-2xl text-primary-text mb-2 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-dark">{title}</h3>
    <p className="text-dark-secondary leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: Droplets,
      title: "HydraFacial",
      description: "Limpieza profunda, extracción e hidratación. Descubre una nueva capa de piel con una exfoliación suave y rejuvenecedora."
    },
    {
      icon: Zap,
      title: "Terapia Láser",
      description: "Tecnología de vanguardia para la eliminación de cicatrices y renovación cutánea, restaurando el tono juvenil de tu piel."
    },
    {
      icon: Smile,
      title: "Inyectables Antiedad",
      description: "Tratamientos administrados por expertos para suavizar líneas de expresión, restaurar volumen y realzar tus contornos naturales."
    },
    {
      icon: Sparkles,
      title: "Peelings Químicos",
      description: "Peelings personalizados para tratar el acné, la hiperpigmentación y los signos del envejecimiento, revelando una piel luminosa."
    },
    {
      icon: Activity,
      title: "Análisis de Piel",
      description: "Herramientas de diagnóstico avanzado para entender las necesidades únicas de tu piel y seguir tu progreso en el tiempo."
    },
    {
      icon: Leaf,
      title: "Sueros de Bienestar",
      description: "Terapia de vitaminas intravenosas para potenciar la hidratación, inmunidad y salud de la piel desde el interior."
    }
  ];

  return (
    <section id="services" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Servicios Personalizados</h2>
          <p className="text-dark-secondary text-lg">
            Explora nuestra gama de tratamientos científicamente probados, diseñados para obtener resultados reales y visibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;