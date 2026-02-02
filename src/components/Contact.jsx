import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = ({ onOpenModal }) => {
  const handleContact = () => {
    const message = encodeURIComponent(
      "Oi! Vim pelo site do Mojo Dojo e queria tirar uma dúvida."
    );
    const url = `https://wa.me/5511978169232?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: (
        <div className="space-y-2">
          {/* Número Polaris */}
          <a
            href="https://wa.me/5511982709605"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#f7ecd5] font-bold hover:underline"
          >
            (11) 98270-9605 - Polaris
          </a>

          {/* Número Digsan */}
          <a
            href="https://wa.me/5541992152784"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#f7ecd5] font-bold hover:underline"
          >
            (41) 99215-2784 - Digsan
          </a>
        </div>
      ),
      description: (
        <span className="text-primary-beige">
          Chame no WhatsApp para tirar suas dúvidas
        </span>
      ),
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "mojodojotattoo@gmail.com",
      description: (
        <span className="text-primary-beige">Envie sua mensagem</span>
      ),
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Barueri, SP",
      description: (
        <span className="text-primary-beige">Venha nos visitar</span>
      ),
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Domingos 10h às 14h30",
      description: (
        <span className="text-primary-beige">Durante o curso</span>
      ),
    },
  ];

  return (
    <section id="contato" className="py-20 bg-primary-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary-beige mb-6 text-shadow"
          >
            Pronto para Começar
            <span className="block text-accent-beige">Sua Jornada?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-beige max-w-2xl mx-auto mb-8"
          >
            Entre em contato conosco e garante sua vaga na próxima turma. Estamos
            aqui para esclarecer todas as suas dúvidas!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-beige/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-beige/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-beige rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-beige mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-beige font-medium mb-1">
                    {item.info}
                  </p>
                  <p className="text-primary-beige/70 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-primary-beige/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-primary-beige mb-4 text-center">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="flex justify-center">
                <a
                  href="https://www.instagram.com/mojodojo_tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-beige rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram Mojo Dojo Tattoo"
                >
                  <Instagram className="w-6 h-6 text-primary-green" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary-beige/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12"
          >
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary-beige rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle className="w-10 h-10 text-primary-green" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-beige">
                Garanta Sua Vaga!
              </h3>

              <p className="text-primary-beige leading-relaxed">
                As vagas são limitadas a apenas 6 alunos por turma para garantir
                o melhor aprendizado. Não perca a oportunidade de transformar
                sua paixão em profissão!
              </p>

              <div className="space-y-4">
                <Button
                  onClick={onOpenModal}
                  className="w-full bg-primary-beige hover:bg-accent-beige text-primary-green px-8 py-4 rounded-full font-semibold text-lg shadow-green pulse-green"
                >
                  Quero Me Inscrever
                </Button>

                <Button
                  onClick={handleContact}
                  variant="outline"
                  className="w-full border-2 border-primary-beige text-primary-beige hover:bg-primary-beige hover:text-primary-green px-8 py-4 rounded-full font-semibold"
                >
                  Tirar Dúvidas
                </Button>
              </div>

              <div className="pt-4 border-t border-primary-beige/20">
                <p className="text-primary-beige text-sm">
                  💡 <strong>Dica:</strong> Entre em contato o quanto antes! As
                  turmas costumam lotar rapidamente.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
