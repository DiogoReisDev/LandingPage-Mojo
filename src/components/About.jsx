import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Trophy, Sparkles } from 'lucide-react';
import LogoBackground from "@/components/LogoBackground";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Ambiente Acolhedor",
      description: "Espaço confortável e ateliê pensado para seu aprendizado e bem-estar durante todo o curso."
    },
    {
      icon: Shield,
      title: "Acompanhamento Completo",
      description: "Investimos muito no seu desenvolvimento durante e após o curso, garantindo seu sucesso."
    },
    {
      icon: Trophy,
      title: "Experiência Comprovada",
      description: "Mais de 60 alunos já se formaram conosco e estão atuando profissionalmente no mercado."
    },
    {
      icon: Sparkles,
      title: "Materiais Inclusos",
      description: "Oferecemos todos os materiais necessários durante o curso, sem custos adicionais."
    }
  ];

  return (
    <section 
        id="sobre"
      className="relative py-20 bg-gradient-to-br from-primary-beige to-accent-beige overflow-hidden"
    >
      {/* Fundo com logos flutuantes */}
      <LogoBackground count={8} />

      {/* Conteúdo real */}
      <div className="relative z-10 container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-green/10 px-4 py-2 rounded-full mb-6"
          >
            <Heart className="w-4 h-4 text-primary-green fill-current" />
            <span className="text-sm font-medium text-black">Sobre o Mojo Dojo</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary-green mb-6"
          >
            Seu Sonho de Ser
            <span className="block text-primary-black underline decoration-primary-green decoration-2 underline-offset-4">
              Tatuador Começa Aqui
            </span>
          </motion.h2>

          {/*text-lg text-primary-green/80 max-w-3xl mx-auto leading-relaxed*/}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black max-w-3xl mx-auto leading-relaxed"
          >
            No <strong>Mojo Dojo Tattoo</strong>, acreditamos que cada pessoa tem o potencial de se tornar 
            um grande artista. Nossa missão é proporcionar o melhor ambiente de aprendizado, 
            com profissionais experientes e uma metodologia única que já formou mais de 60 tatuadores de sucesso.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 bg-primary-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-beige" />
              </div>
              <h3 className="text-xl font-bold text-primary-green mb-3">{feature.title}</h3>
              <p className="text-primary-green/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Studio Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative z-10">
            <img  
              className="w-full h-auto rounded-3xl shadow-green" 
              alt="Interior do estúdio Mojo Dojo Tattoo"
             src="https://images.unsplash.com/photo-1701394755769-b51c473949f4" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-green/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-beige/20 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;