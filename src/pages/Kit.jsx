import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import ProductCarousel from "@/components/ProductCarousel";

import img1 from "@/assets/kit/kit-iniciante.jpg";
import img2 from "@/assets/kit/kit-iniciante-2.jpg";
import img3 from "@/assets/kit/kit-iniciante-3.jpg";

export default function Kit() {
  const navigate = useNavigate();
  const kitImages = [img1, img2, img3];

  return (
    <div className="min-h-screen bg-primary-green">
      <Header />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-beige mb-6">
          Loja Mojo Dojo
        </h1>

        <p className="text-primary-beige/70 max-w-2xl mb-12">
          Kits selecionados para quem quer começar na tatuagem com estrutura profissional.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card do Kit Iniciante */}
          <div
            className="
              bg-primary-beige/10 backdrop-blur-sm rounded-2xl p-6
              transition-all duration-300
              hover:scale-[1.02]
              shadow-green
            "
          >
            {/* Área da imagem (carrossel clicável) */}
            <div
              className="
                aspect-[4/3]
                rounded-xl
                overflow-hidden
                mb-4
                bg-black/20
                transition-transform duration-500
                hover:scale-[1.05]
              "
            >
              <ProductCarousel
                images={kitImages}
                onClick={() => navigate("/kit/kit-iniciante")}
              />
            </div>

            <h2 className="text-xl font-semibold text-primary-beige">
              Kit Iniciante
            </h2>

            <p className="text-primary-beige/70 text-sm mt-2">
              Clique na imagem para ver a descrição completa e os detalhes do produto.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
