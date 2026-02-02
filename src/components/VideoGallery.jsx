import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoModal from '@/components/VideoModal';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Turma Janeiro 2024",
      description: "Acompanhe o desenvolvimento dos alunos durante o curso",
      thumbnail: "Estudantes aprendendo tatuagem em sala de aula moderna",
      videoUrl: "https://www.youtube.com/embed/5m4f1j_V6mI" 
    },
    {
      id: 2,
      title: "Depoimentos dos Formandos",
      description: "Histórias de sucesso dos nossos ex-alunos",
      thumbnail: "Ex-alunos felizes mostrando seus certificados de conclusão",
      videoUrl: "https://www.youtube.com/embed/5m4f1j_V6mI"
    },
    {
      id: 3,
      title: "Técnicas Avançadas",
      description: "Demonstração de técnicas profissionais de tatuagem",
      thumbnail: "Instrutor demonstrando técnicas avançadas de tatuagem",
      videoUrl: "https://www.youtube.com/embed/5m4f1j_V6mI"
    },
    {
      id: 4,
      title: "Ambiente do Estúdio",
      description: "Conheça nosso espaço e equipamentos",
      thumbnail: "Tour pelo estúdio moderno e bem equipado",
      videoUrl: "https://www.youtube.com/embed/5m4f1j_V6mI"
    }
  ];

  return (
    <>
      <section id="galeria" className="py-20 bg-primary-green">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-primary-beige mb-6 text-shadow"
            >
              Veja Nossos Alunos
              <span className="block text-accent-beige">
                em Ação
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-beige max-w-2xl mx-auto"
            >
              Acompanhe o progresso das turmas que já passaram pelo nosso estúdio 
              e veja os resultados incríveis que nossos alunos alcançaram.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-green">
                  <img 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt={video.thumbnail} src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870" />
                  
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary-beige rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-green ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                    <p className="text-white/80 text-sm">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <VideoModal videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </>
  );
};

export default VideoGallery;