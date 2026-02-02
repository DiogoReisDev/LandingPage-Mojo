import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, BookOpen, Palette, Zap, Shield, Users, Award } from 'lucide-react';
import LogoBackground from "@/components/LogoBackground";

const CourseContent = () => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      icon: BookOpen,
      title: "Fundamentos da Tatuagem",
      duration: "9 horas",
      topics: [
        "História e evolução da tatuagem",
        "Anatomia da pele e cicatrização",
        "Tipos de pele e cuidados específicos",
        "Biossegurança e esterilização",
        "Legislação e normas sanitárias"
      ]
    },
    {
      icon: Palette,
      title: "Técnicas e Estilos",
      duration: "12 horas",
      topics: [
        "Diferentes estilos de tatuagem",
        "Uso de cores e pigmentos",
        "Composição e design",
        "Adaptação de desenhos para pele"
      ]
    },
    {
      icon: Zap,
      title: "Equipamentos e Materiais",
      duration: "9 horas",
      topics: [
        "Máquinas de tatuar (bobina e rotativa)",
        "Agulhas e configurações",
        "Tintas e pigmentos profissionais",
        "Manutenção de equipamentos",
        "Montagem e desmontagem"
      ]
    },
    {
      icon: Shield,
      title: "Prática Supervisionada",
      duration: "6 horas",
      topics: [
        "Prática em pele sintética",
        "Primeiras tatuagens supervisionadas",
        "Correção de técnicas",
        "Desenvolvimento do estilo pessoal",
        "Portfólio e documentação"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Turmas Pequenas",
      description: "Máximo 6 alunos por turma para atenção personalizada"
    },
    {
      icon: Award,
      title: "Certificado",
      description: "Certificado de conclusão reconhecido no mercado"
    },
    {
      icon: Shield,
      title: "Suporte Contínuo",
      description: "Acompanhamento após o curso para seu desenvolvimento"
    }
  ];

  return (
    <section
      id="curso"
      className="relative py-20 bg-gradient-to-br from-primary-beige to-accent-beige overflow-x-hidden"
    >
      {/* Fundo com logos flutuantes */}
      <LogoBackground count={12} />

      {/* Conteúdo real */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-green/10 px-4 py-2 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-primary-green fill-current" />
            <span className="text-sm font-medium text-black">Conteúdo do Curso</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary-green mb-6"
          >
            Aprenda Tudo Sobre
            <span className="block text-black underline decoration-primary-green decoration-2 underline-offset-4">
              Tatuagem de forma Profissional
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/80 max-w-3xl mx-auto leading-relaxed"
          >
            Nosso curso completo de 36 horas abrange desde os fundamentos básicos até técnicas avançadas, 
            preparando você para atuar profissionalmente no mercado da tatuagem.
          </motion.p>
        </div>

        {/* Course Modules */}
        <div className="max-w-4xl mx-auto mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveModule(activeModule === index ? -1 : index)}
                className="w-full glass-effect rounded-2xl p-6 text-left hover:shadow-green transition-all duration-300 card-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-green rounded-xl flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-primary-beige" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-green">{module.title}</h3>
                      <p className="text-primary-green/70">{module.duration}</p>
                    </div>
                  </div>
                  {activeModule === index ? (
                    <ChevronDown className="w-6 h-6 text-primary-green" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-primary-green" />
                  )}
                </div>
              </button>
              
              {activeModule === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 glass-effect rounded-2xl p-6"
                >
                  <h4 className="text-lg font-semibold text-primary-green mb-4">Tópicos abordados:</h4>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                        <span className="text-primary-green/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 bg-primary-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary-beige" />
              </div>
              <h3 className="text-xl font-bold text-primary-green mb-3">{benefit.title}</h3>
              <p className="text-primary-green/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;