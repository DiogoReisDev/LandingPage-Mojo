import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoVerde from "@/assets/logo/logo-bg.png";

const Header = ({ onOpenModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(location.pathname !== "/");

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 50);
      return;
    }

    doScroll();
  };

  // ✅ FUNÇÃO ADICIONADA (NÃO REMOVE NADA)
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-green' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={handleLogoClick}   /* ✅ ÚNICA ALTERAÇÃO AQUI */
            className="flex items-center space-x-3 cursor-pointer select-none"
            title="Voltar para o início"
          >
            <div className="w-12 h-12 bg-[#E6D8C1] rounded-full flex items-center justify-center">
              <img
                src={LogoVerde}
                alt="Mojo Dojo Tattoo"
                className="h-30 w-auto"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-green">Mojo Dojo</h1>
              <p className="text-sm text-primary-green/70">Tattoo Studio</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-primary-green hover:text-dark-green transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-primary-green hover:text-dark-green transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('curso')} className="text-primary-green hover:text-dark-green transition-colors font-medium">
              Curso
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-primary-green hover:text-dark-green transition-colors font-medium">
              Galeria
            </button>

            <Link to="/kit" className="text-primary-green hover:text-dark-green transition-colors font-medium">
              Kit Tattoo
            </Link>

            <button onClick={() => scrollToSection('contato')} className="text-primary-green hover:text-dark-green transition-colors font-medium">
              Contato
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contato')}
              className="flex items-center space-x-2 text-primary-green hover:text-dark-green transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium underline-offset-4 hover:underline">
                Entre em contato
              </span>
            </button>

            <Button
              onClick={onOpenModal}
              className="bg-primary-green hover:bg-dark-green text-primary-beige px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-green"
            >
              Inscreva-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-green p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`
              md:hidden mt-4 py-4
              border-t border-primary-green/20
              ${!isScrolled ? "glass-soft" : ""}
            `}
          >
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-primary-green hover:text-dark-green font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-primary-green hover:text-dark-green font-medium text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('curso')} className="text-primary-green hover:text-dark-green font-medium text-left">
                Curso
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-primary-green hover:text-dark-green font-medium text-left">
                Galeria
              </button>

              <Link
                to="/kit"
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-green hover:text-dark-green font-medium text-left"
              >
                Kit Tattoo
              </Link>

              <button onClick={() => scrollToSection('contato')} className="text-primary-green hover:text-dark-green font-medium text-left">
                Contato
              </button>

              <Button
                onClick={() => {
                  onOpenModal();
                  setIsMenuOpen(false);
                }}
                className="bg-primary-green hover:bg-dark-green text-primary-beige w-full mt-4 rounded-full font-medium"
              >
                Inscreva-se Agora
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
