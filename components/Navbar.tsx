import React from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path ? "text-dark font-bold" : "text-dark-secondary hover:text-primary-text transition-colors";

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
    <nav className="sticky top-0 z-50 w-full bg-light-bg/80 backdrop-blur-md border-b border-pink-100 py-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-primary-text">
            <Sparkles size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-dark">DermaPlus</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={isActive('/')}>Inicio</Link>
          <a href="#about" onClick={(e) => handleScrollClick(e, 'about')} className="text-dark-secondary hover:text-primary-text transition-colors">Nosotros</a>
          <a href="#services" onClick={(e) => handleScrollClick(e, 'services')} className="text-dark-secondary hover:text-primary-text transition-colors">Servicios</a>
          <Link to="/contact" className={isActive('/contact')}>Contacto</Link>
          <Link to="/dashboard" className={isActive('/dashboard')}>Acceso Personal</Link>
        </div>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="bg-primary hover:bg-primary-hover text-dark font-bold py-2.5 px-6 rounded-full transition-colors text-sm shadow-md shadow-primary/20">
            Reservar Cita
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-pink-100 p-4 flex flex-col gap-4 shadow-lg">
          <Link to="/" className="text-dark font-medium py-2" onClick={() => setIsOpen(false)}>Inicio</Link>
          <a href="#about" className="text-dark font-medium py-2" onClick={(e) => handleScrollClick(e, 'about')}>Nosotros</a>
          <a href="#services" className="text-dark font-medium py-2" onClick={(e) => handleScrollClick(e, 'services')}>Servicios</a>
          <Link to="/contact" className="text-dark font-medium py-2" onClick={() => setIsOpen(false)}>Contacto</Link>
          <Link to="/dashboard" className="text-dark font-medium py-2" onClick={() => setIsOpen(false)}>Panel de Control</Link>
          <Link to="/contact" className="bg-primary text-center text-dark font-bold py-3 rounded-xl shadow-sm" onClick={() => setIsOpen(false)}>
            Reservar Cita
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;