import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function KitIndex() {
  return (
    <div className="min-h-screen bg-primary-green">
      <Header />

      <main className="container mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-beige mb-6">
          Kits Mojo Dojo
        </h1>

        <p className="text-primary-beige/80 max-w-2xl mb-10">
          Por enquanto temos um kit disponível. Em breve, mais itens na loja.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/kit/kit-iniciante"
            className="bg-primary-beige/10 hover:bg-primary-beige/20 transition-colors rounded-2xl p-6 block"
          >
            <div className="aspect-[4/3] rounded-xl bg-primary-beige/10 mb-4" />
            <h2 className="text-xl font-semibold text-primary-beige">Kit Iniciante</h2>
            <p className="text-primary-beige/70 mt-2">
              Tudo pra começar com o pé direito.
            </p>
            <p className="text-primary-beige font-bold mt-4">
              Ver detalhes →
            </p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
