import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollClick = (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-rose-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-pink-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <ShieldCheck size={16} className="text-primary-text" fill="currentColor" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Clínica Certificada</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Revela tu <br/>
              <span className="relative inline-block">
                Resplandor Natural.
                {/* Underline decoration */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary -z-10 opacity-100" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-dark-secondary mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Tratamientos estéticos avanzados diseñados para tu perfil único de piel. Experimenta un cuidado científicamente probado en un entorno de lujo.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <button href="#contactform" onClick={(e) => handleScrollClick(e, 'contactform')} className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-dark font-bold text-lg py-3.5 px-8 rounded-full transition-all shadow-lg shadow-primary/30">
                Consulta Gratuita
              </button>
              <button href="#services" onClick={(e) => handleScrollClick(e, 'services')} className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 text-dark font-bold text-lg py-3.5 px-8 rounded-full transition-all">
                  Ver Servicios
                
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                alt="Mujer con piel radiante" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-light-bg p-3 rounded-full">
                    <Star className="text-yellow-400" fill="currentColor" size={24}/>
                </div>
                <div>
                    <div className="font-bold text-dark">Clínica 5 Estrellas</div>
                    <div className="text-sm text-dark-secondary">Más de 2,000 pacientes felices</div>
                </div>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/40 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;