import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LogoBackground from "@/components/LogoBackground";
import fotomojo7 from "@/assets/fotoscurso/fotomojo7.jpeg";

const Hero = ({ onOpenModal }) => {
  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center hero-pattern pt-20 overflow-x-hidden"
    >
      {/* Fundo com logos flutuantes */}
      <LogoBackground count={12} />

      {/* Conteúdo real */}
      <div className="relative z-10 container mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary-green/10 px-4 py-2 rounded-full"
              >
                <Star className="w-4 h-4 text-primary-green fill-current" />
                <span className="text-sm font-medium text-black">Mais de 60 alunos formados</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-black leading-tight"
              >
                Workshop de
                <span className="block text-primary-green underline decoration-primary-green decoration-2 underline-offset-4">
                  Tatuagem
                </span>
                Presencial
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-black/80 max-w-lg leading-relaxed"
              >
                Transforme sua paixão em profissão no <strong>Mojo Dojo Tattoo</strong>. 
                Aprenda com profissionais experientes em um ambiente confortável e acolhedor.
              </motion.p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-green/10 rounded-full mb-2 mx-auto">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">36h</div>
                <div className="text-sm text-black/70">de curso</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-green/10 rounded-full mb-2 mx-auto">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">4/6</div>
                <div className="text-sm text-black/70">alunos por turma</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-green/10 rounded-full mb-2 mx-auto">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">60+</div>
                <div className="text-sm text-black/70">formados</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onOpenModal}
                className="bg-primary-green hover:bg-dark-green text-primary-beige px-8 py-4 rounded-full font-semibold text-lg shadow-green pulse-green group"
              >
                Inscreva-se Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => document.getElementById('curso').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-primary-beige px-8 py-4 rounded-full font-semibold text-lg"
              >
                Ver Conteúdo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 floating">
              <img  
                className="
                  w-full
                  aspect-[4/3]
                  md:aspect-[14/9]
                  rounded-2xl
                  overflow-hidden
                "
                alt="Estúdio de tatuagem moderno e confortável"
               src={fotomojo7} /> {/*https://images.unsplash.com/photo-1701394755769-b51c473949f4*/}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-green/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-beige/30 rounded-full blur-xl"></div>
            
            {/* Floating Badge */}
            <motion.a
              href="https://share.google/EErRcrRBnzCCxdrne"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="
                absolute
                top-full
                left-19
                mt-6
                inline-flex
                items-center
                gap-2
                bg-primary-green
                text-primary-beige
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                shadow-green
                backdrop-blur
                hover:bg-primary-green
                transition-colors
                cursor-pointer
              "
            >
              <Star className="w-4 h-4 fill-current" />
              <span>5.0 · Ver avaliações no Google</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;