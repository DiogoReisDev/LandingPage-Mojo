import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import LogoBackground from "@/components/LogoBackground";
import kitiniciante1 from "@/assets/kit/kit-iniciante.jpeg";
import kitiniciante2 from "@/assets/kit/kit-iniciante2.jpeg";
import kitiniciante3 from "@/assets/kit/kit-iniciante3.jpeg";

export default function KitProduct() {
  const { slug } = useParams();

  const images = [
    kitiniciante1,
    kitiniciante2,
    kitiniciante3,
  ];

  const product = useMemo(() => {
    if (slug !== "kit-iniciante") return null;
    return {
      name: "Kit Iniciante Mojo Dojo",
      priceKit: 875,
      priceCourseKit: 2387.9,
      stock: 5,
      description: `
Kit profissional pensado para quem quer iniciar na tatuagem com qualidade e segurança.

Inclui:
• Máquina EZ Caster Plus  
• Papel hectográfico  
• Stencil  
• Tintas  
• Batoques  
• Skins artificiais  
• Espátulas  
• Materiais de prática  

Produto ideal tanto para iniciantes quanto para quem quer montar seu primeiro setup profissional.
`,
    };
  }, [slug]);

  if (!product) return null;

  const [mainImage, setMainImage] = useState(images[0]);
  const [variant, setVariant] = useState("kit");
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [cep, setCep] = useState("");
  const [showFreightOptions, setShowFreightOptions] = useState(false);
  const [selectedFreight, setSelectedFreight] = useState(null);

  const [zoomIndex, setZoomIndex] = useState(null);

  const checkoutLinks = {
    kit: "https://mojodojo-estudio.pay.yampi.com.br/r/J4IUS93CPL",
    course: "https://mojodojo-estudio.pay.yampi.com.br/r/Q01RS9KFQ4",
  };

  function handleBuyNow() {
    const url = checkoutLinks[variant];
    if (!url) return;
    window.open(url, "_blank");
  }

  function handleVariantChange(type) {
    setVariant(type);
    setShowFreightOptions(false);
    setSelectedFreight(null);
  }

  function handleCalculateFreight() {
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length === 8) {
      setShowFreightOptions(true);
    }
  }

  const basePrice =
    variant === "kit" ? product.priceKit : product.priceCourseKit;

  const oldPrice = (basePrice * 1.3).toFixed(2);

  const installments =
    variant === "kit"
      ? `3x de R$ ${(basePrice / 3).toFixed(2)} sem juros`
      : `12x de R$ ${(basePrice / 12).toFixed(2)} sem juros`;

  const currentIndex = images.indexOf(mainImage);

  const nextImage = () =>
    setZoomIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setZoomIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-primary-green relative overflow-hidden">
      <Header />

      <LogoBackground theme="green" count={20} />

      <main className="container mx-auto px-4 pt-12 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* GALERIA */}
          <div className="space-y-6">
            <div className="border border-primary-beige/40 rounded-xl p-4 max-w-md mx-auto bg-primary-beige">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setMainImage(img)}
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden cursor-pointer border transition-all ${
                        mainImage === img
                          ? "border-primary-green scale-105"
                          : "border-primary-green/40"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <div
                  className="
                    w-full 
                    h-[75vw] 
                    max-w-full 
                    md:w-[75vw] 
                    md:max-w-[600px] 
                    md:h-[75vw] 
                    md:max-h-[400px]
                    bg-white 
                    rounded-xl 
                    overflow-hidden 
                    flex 
                    items-center 
                    justify-center 
                    cursor-zoom-in
                  "
                  onClick={() => setZoomIndex(currentIndex)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={mainImage}
                      src={mainImage}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* VARIAÇÃO */}
            <div className="border border-primary-beige/40 rounded-xl p-4 max-w-md mx-auto">
              <p className="text-primary-beige font-semibold mb-3 text-center">
                Escolha seu produto
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleVariantChange("kit")}
                  className={`px-6 py-2 rounded-full border font-semibold ${
                    variant === "kit"
                      ? "bg-primary-beige text-primary-green"
                      : "border-primary-beige text-primary-beige"
                  }`}
                >
                  Apenas Kit
                </button>

                <button
                  onClick={() => handleVariantChange("course")}
                  className={`px-6 py-2 rounded-full border font-semibold ${
                    variant === "course"
                      ? "bg-primary-beige text-primary-green"
                      : "border-primary-beige text-primary-beige"
                  }`}
                >
                  Curso + Kit
                </button>
              </div>
            </div>
          </div>

          {/* COMPRA */}
          <div className="p-6 space-y-5">
            <p className="text-primary-beige/70 text-sm font-semibold">
              {product.stock} unidades disponíveis em estoque
            </p>

            <h1 className="text-3xl font-bold text-primary-beige">
              {product.name}
            </h1>

            <div>
              <p className="text-primary-beige/80 line-through text-sm">
                De R$ {oldPrice}
              </p>
              <p className="text-4xl font-bold text-primary-beige">
                R$ {basePrice.toFixed(2)}
              </p>
              <p className="text-primary-beige/80 text-sm">{installments}</p>
            </div>

            <p className="text-primary-beige/70 text-sm">
              Cupons de desconto podem ser aplicados na confirmação da compra.
            </p>

            {/* FRETE */}
            <div>
              <p className="text-primary-beige/80 font-semibold mb-1">
                Calcular frete
              </p>
              <div className="flex gap-2">
                <input
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="w-36 rounded-full px-3 py-2 bg-primary-beige text-primary-green"
                  placeholder="CEP"
                />
                <Button
                  onClick={handleCalculateFreight}
                  className="
                    rounded-full 
                    px-4 
                    bg-primary-beige 
                    text-primary-green 
                    hover:bg-accent-beige 
                    hover:text-primary-green"
                >
                  OK
                </Button>
              </div>

              {showFreightOptions && (
                <div className="mt-4 space-y-3">
                  <label className="flex gap-2 text-primary-beige text-sm cursor-pointer">
                    <input
                      type="radio"
                      checked={selectedFreight === "pickup"}
                      onChange={() => setSelectedFreight("pickup")}
                    />
                    <div>
                      <p className="font-semibold">
                        Retirar gratuitamente no Estúdio Mojo Dojo
                      </p>
                      <p className="text-xs text-primary-beige/80">
                        Barueri – SP
                      </p>
                    </div>
                  </label>

                  <label className="flex gap-2 text-primary-beige text-sm cursor-pointer">
                    <input
                      type="radio"
                      checked={selectedFreight === "correios"}
                      onChange={() => setSelectedFreight("correios")}
                    />
                    <div>
                      <p className="font-semibold">Correios</p>
                      <p className="text-xs text-primary-beige/80">
                        Valores a partir de R$30 • cálculo no checkout
                      </p>
                    </div>
                  </label>
                </div>
              )}
            </div>

            <Button
              onClick={handleBuyNow}
              className="
                w-full 
                bg-primary-beige 
                text-primary-green 
                py-4 
                rounded-full 
                text-lg 
                font-bold
                hover:bg-accent-beige
                hover:text-primary-green
                transition
              "
            >
              Comprar agora
            </Button>

          </div>
        </div>

        {/* DESCRIÇÃO */}
        <div className="mt-16 border-t border-primary-beige pt-8">
          <h2 className="text-2xl font-bold text-primary-beige mb-3">
            Descrição do produto
          </h2>
          <p className="text-primary-beige whitespace-pre-line">
            {showFullDescription
              ? product.description
              : product.description.slice(0, 120) + "... "}
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="underline ml-2"
            >
              {showFullDescription ? "Ver menos" : "Ver mais"}
            </button>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
