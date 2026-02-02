import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Phone, Mail } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleSocialClick = () => {
    toast({
      title: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀"
    });
  };

  return (
    <footer className="bg-dark-green py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-beige rounded-full flex items-center justify-center">
                <span className="text-primary-green font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-xl font-bold text-primary-beige">Mojo Dojo</span>
                <p className="text-sm text-primary-beige">Tattoo Studio</p>
              </div>
            </div>
            <p className="text-primary-beige leading-relaxed">
              Transformando sonhos em arte desde o primeiro traço. 
              Mais de 60 profissionais formados e atuando no mercado.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-primary-beige">Links Rápidos</span>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-beige hover:text-primary-beige transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-beige hover:text-primary-beige transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => document.getElementById('curso').scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-beige hover:text-primary-beige transition-colors text-left"
              >
                Curso
              </button>
              <button
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-beige hover:text-primary-beige transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold text-primary-beige">Contato</span>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-beige" />
                <span className="text-primary-beige">(11) 97816-9232</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-beige" />
                <span className="text-primary-beige">mojodojotattoo@gmail.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-4">
              <span className="text-sm text-primary-beige block mb-3">Siga-nos:</span>
              <div className="flex space-x-3">
                <button
                  onClick={handleSocialClick}
                  className="w-10 h-10 bg-primary-beige/10 hover:bg-primary-beige/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary-beige" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-primary-beige/20 pt-8 text-center"
        >
          <p className="text-primary-beige flex items-center justify-center space-x-2">
            <span>© 2024 Mojo Dojo Tattoo. Feito com</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>para futuros tatuadores.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;