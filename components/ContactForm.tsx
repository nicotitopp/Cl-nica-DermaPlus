import React, { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contactform" className="py-20 bg-white">
      <div className="bg-light-bg rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-pink-100 h-full">

        {/* Image Side */}
        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[auto]">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
            alt="Interior de la clínica"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-2">¿Lista para brillar?</h3>
            <p className="opacity-90">Únete a más de 10,000 personas que han transformado su piel con DermaPlus.</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          {submitted ? (
            <div className="flex flex-col items-center text-center space-y-4 py-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold">¡Solicitud Recibida!</h2>
              <p className="text-dark-secondary text-lg max-w-md">
                Gracias por elegir DermaPlus. Nuestro equipo te contactará pronto para confirmar tu cita.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-primary-text font-bold hover:underline"
              >
                Reservar otra cita
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">Comienza tu Viaje</h2>
              <p className="text-dark-secondary mb-8">Completa el formulario para reservar tu plan de consulta gratuita.</p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 ml-1">Nombre Completo</label>
                  <input
                    required
                    type="text"
                    id="name"
                    placeholder="Ej. María García"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 ml-1">Correo Electrónico</label>
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="maria@ejemplo.com"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold mb-2 ml-1">Teléfono</label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    placeholder="+34 600 000 000"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="treatment" className="block text-sm font-bold mb-2 ml-1">Tratamiento de Interés</label>
                  <div className="relative">
                    <select
                      id="treatment"
                      required
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      defaultValue=""
                    >
                      <option value="" disabled>Selecciona un tratamiento...</option>
                      <option value="hydrafacial">HydraFacial</option>
                      <option value="laser">Terapia Láser</option>
                      <option value="injectables">Inyectables Antiedad</option>
                      <option value="peels">Peelings Químicos</option>
                      <option value="other">Otro / No estoy segura</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                <button
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-hover disabled:bg-gray-300 disabled:cursor-not-allowed text-dark font-bold text-lg py-3.5 rounded-full transition-all shadow-md shadow-primary/20 mt-4 flex justify-center"
                >
                  {loading ? 'Enviando...' : 'Obtener mi Consulta Gratuita'}
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                  Al enviar, aceptas nuestros Términos y Política de Privacidad.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>

  );
};

export default ContactForm;