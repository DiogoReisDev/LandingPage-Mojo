import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import LogoBackground from "@/components/LogoBackground";
import fotomojo1 from "@/assets/fotoscurso/fotomojo1.jpeg";
import fotomojo18 from "@/assets/fotoscurso/fotomojo18.jpeg";

const PhotoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const photoCategories = [
    {
      category: "Trabalhos dos Alunos",
      photos: [
        fotomojo1,
        fotomojo18,
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
      ]
    },
    {
      category: "Ambiente de Aprendizado",
      photos: [
        "https://images.unsplash.com/photo-1517635728137-db30bef3c38e",
        "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      ]
    },
    {
      category: "Equipamentos e Materiais",
      photos: [
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
        "https://images.unsplash.com/photo-1580281657521-7c1a3c4a54c5",
        "https://images.unsplash.com/photo-1603575448367-c99ef6b3e44f"
      ]
    }
  ];

  const allPhotos = photoCategories.flatMap(category =>
    category.photos.map(photo => ({
      image: photo,
      category: category.category
    }))
  );

  // Auto-play em 12 segundos
  useEffect(() => {
    if (allPhotos.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % allPhotos.length);
    }, 12000);

    return () => clearInterval(timer);
  }, [allPhotos.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % allPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  // Modal controls
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section
      id="curso"
      className="relative py-20 bg-gradient-to-br from-primary-beige to-accent-beige overflow-x-hidden"
    >
      {/* Fundo com logos flutuantes */}
      <LogoBackground count={12} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-green/10 px-4 py-2 rounded-full mb-6"
          >
            <Camera className="w-4 h-4 text-primary-green fill-current" />
            <span className="text-sm font-medium text-black">
              Galeria de Fotos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary-green mb-6"
          >
            <span className="inline-block rounded-md bg-primary-green text-primary-beige px-2 py-1">
              Momentos Especiais do Nosso Estúdio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-black/80 max-w-2xl mx-auto"
          >
            Explore nossa galeria e veja de perto o ambiente, os trabalhos dos
            alunos e os momentos marcantes de cada turma.
          </motion.p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-green">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  className="w-full h-full object-cover"
                  alt={allPhotos[currentSlide]?.category}
                  src={allPhotos[currentSlide]?.image}
                />

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <span className="inline-block bg-primary-green px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {allPhotos[currentSlide]?.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Botões */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-beige/90 hover:bg-primary-beige rounded-full flex items-center justify-center shadow-green transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-primary-green" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-beige/90 hover:bg-primary-beige rounded-full flex items-center justify-center shadow-green transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-primary-green" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {allPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#0f2e1e] scale-125 shadow-green"
                    : "bg-[#3a5f4d] hover:bg-[#0f2e1e]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {photoCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <h3 className="text-xl font-bold text-primary-green mb-4 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.photos.map((photo, photoIndex) => (
                  <div
                    key={photoIndex}
                    className="relative group cursor-pointer"
                  >
                    <img
                      onClick={() => openModal(photo)}
                      className="w-full h-20 object-cover rounded-lg cursor-zoom-in group-hover:scale-105 transition-transform duration-300"
                      alt={category.category}
                      src={photo}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.img
            src={selectedImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileTap={{ scale: 1.4 }} // zoom ao segurar o clique
            transition={{ duration: 0.3 }}
            className="
              max-w-[90vw]
              max-h-[90vh]
              rounded-xl
              shadow-2xl
              cursor-zoom-in
            "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PhotoCarousel;
