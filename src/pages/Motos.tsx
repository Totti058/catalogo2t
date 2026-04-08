import { useState } from 'react';
import MotoCard from '../components/MotoCard';
import { motos } from '../data/motos';

const cilindrajeOptions = ['Todos', '125cc', '250cc', '300cc'];
const marcaOptions = ['Todas', ...Array.from(new Set(motos.map((m) => m.marca))).sort()];

export default function Motos() {
  const [filtroCC, setFiltroCC] = useState('Todos');
  const [filtroMarca, setFiltroMarca] = useState('Todas');

  const filtered = motos.filter((m) => {
    const ccMatch =
      filtroCC === 'Todos' || m.cilindraje === parseInt(filtroCC);
    const marcaMatch = filtroMarca === 'Todas' || m.marca === filtroMarca;
    return ccMatch && marcaMatch;
  });

  return (
    <main className="min-h-screen pt-20 bg-[#0a0a0a]">
      {/* Page header */}
      <section className="relative py-20 px-6 bg-black border-b border-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-700/20 to-transparent" style={{ right: '30%' }} />
          <div className="absolute top-1/2 right-24 -translate-y-1/2 w-32 h-32 border border-gold-800/15 rotate-45" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black to-[#0a0a0a]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body font-300 mb-3 animate-fade-up">
            Catálogo completo
          </p>
          <h1 className="font-display text-6xl md:text-7xl text-white tracking-widest animate-fade-up-delay-1">
            NUESTRAS <span className="text-gold-500">MOTOS</span>
          </h1>
          <div className="gold-line mt-4 animate-fade-up-delay-2" />
          <p className="text-gray-500 font-body text-sm mt-4 max-w-lg animate-fade-up-delay-2">
            {motos.length} modelos disponibles de las mejores marcas de motos 2 tiempos del mercado.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 py-6 bg-[#111] border-b border-[#1a1a1a] sticky top-16 md:top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          {/* Cilindraje filter */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs tracking-widest uppercase font-body">CC:</span>
            <div className="flex gap-1">
              {cilindrajeOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFiltroCC(opt)}
                  className={`px-3 py-1.5 text-xs tracking-widest uppercase font-body transition-all duration-200 ${
                    filtroCC === opt
                      ? 'bg-gold-500 text-black font-600'
                      : 'border border-[#333] text-gray-500 hover:border-gold-700 hover:text-gold-400'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-[#333]" />

          {/* Marca filter */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-xs tracking-widest uppercase font-body">Marca:</span>
            <div className="flex flex-wrap gap-1">
              {marcaOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFiltroMarca(opt)}
                  className={`px-3 py-1.5 text-xs tracking-widest uppercase font-body transition-all duration-200 ${
                    filtroMarca === opt
                      ? 'bg-gold-500 text-black font-600'
                      : 'border border-[#333] text-gray-500 hover:border-gold-700 hover:text-gold-400'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="ml-auto">
            <span className="text-gray-600 text-xs font-body">
              <span className="text-gold-500 font-600">{filtered.length}</span> resultado{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((moto, i) => (
                <MotoCard key={moto.id} moto={moto} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <p className="font-display text-2xl text-gray-600 tracking-widest">
                NO HAY RESULTADOS
              </p>
              <p className="text-gray-700 font-body text-sm mt-2">
                Intenta con otros filtros
              </p>
              <button
                onClick={() => { setFiltroCC('Todos'); setFiltroMarca('Todas'); }}
                className="mt-6 btn-gold px-6 py-2 text-xs tracking-widest uppercase font-display text-sm"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-14 px-6 bg-[#111] border-t border-[#1a1a1a] text-center">
        <p className="text-gray-500 font-body text-sm mb-2">
          ¿No encontraste lo que buscabas?
        </p>
        <p className="text-gray-400 font-body mb-4">
          Escríbenos y encontramos la moto perfecta para ti
        </p>
        <a
          href="https://wa.me/573007442878"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold px-8 py-3 text-sm tracking-widest uppercase font-display text-base inline-block"
        >
          📱 Contactar por WhatsApp
        </a>
      </section>
    </main>
  );
}
