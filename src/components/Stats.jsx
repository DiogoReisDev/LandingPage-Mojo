import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Calendar, BookOpen } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "60+",
      label: "Alunos Formados",
      description: "Profissionais atuando no mercado"
    },
    {
      icon: Clock,
      number: "36",
      label: "Horas de Curso",
      description: "4 horas por dia + intervalo"
    },
    {
      icon: Calendar,
      number: "5",
      label: "Dias seletos do Mês",
      description: "Cronograma flexível"
    },
    {
      icon: BookOpen,
      number: "4/6",
      label: "Alunos por Turma",
      description: "Atenção personalizada"
    }
  ];

  return (
    <section className="py-20 bg-primary-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary-beige mb-6 text-shadow"
          >
            Números que
            <span className="block text-accent-beige">
              Falam por Si
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-beige max-w-2xl mx-auto"
          >
            Nossa metodologia comprovada e dedicação aos alunos resultam em 
            profissionais qualificados e preparados para o mercado.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-primary-beige/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-beige/20 transition-colors">
                <stat.icon className="w-10 h-10 text-primary-beige" />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                className="text-5xl md:text-6xl font-bold text-primary-beige mb-2"
              >
                {stat.number}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-primary-beige mb-2">{stat.label}</h3>
              <p className="text-primary-beige/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;