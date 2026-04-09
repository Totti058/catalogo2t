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

      <section className="relative py-20 md:py-24 px-6 bg-black border-b border-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-700/20 to-transparent" style={{ right: '30%' }} />
          <div className="absolute top-1/2 right-16 -translate-y-1/2 w-32 h-32 border border-gold-800/15 rotate-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0a0a0a]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body font-300 mb-3 animate-fade-up">
            Catálogo completo
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white tracking-widest animate-fade-up-delay-1 leading-none">
            NUESTRAS <span className="text-gold-500">MOTOS</span>
          </h1>
          <div className="gold-line mt-5 animate-fade-up-delay-2" />
          <p className="text-gray-500 font-body text-sm mt-4 max-w-lg animate-fade-up-delay-2 leading-relaxed">
            {motos.length} modelos disponibles de las mejores marcas de motos 2 tiempos del mercado.
          </p>
        </div>
      </section>

      <section className="px-5 py-4 bg-[#0d0d0d] border-b border-[#1a1a1a] md:sticky md:top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-body font-500">CC:</span>
              <div className="flex gap-1.5 flex-wrap">
                {cilindrajeOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFiltroCC(opt)}
                    className={`px-3 py-1.5 text-xs tracking-widest uppercase font-body transition-all duration-200 ${
                      filtroCC === opt
                        ? 'filter-btn-active'
                        : 'filter-btn-inactive'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden sm:block w-px h-5 bg-[#2a2a2a]" />

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-body font-500">Marca:</span>
              <div className="flex flex-wrap gap-1.5">
                {marcaOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFiltroMarca(opt)}
                    className={`px-3 py-1.5 text-xs tracking-widest uppercase font-body transition-all duration-200 ${
                      filtroMarca === opt
                        ? 'filter-btn-active'
                        : 'filter-btn-inactive'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="sm:ml-auto">
              <span className="text-gray-600 text-xs font-body">
                <span className="text-gold-500 font-600 text-base font-display tracking-wider">{filtered.length}</span>
                <span className="ml-1.5">resultado{filtered.length !== 1 ? 's' : ''}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((moto, i) => (
                <MotoCard key={moto.id} moto={moto} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-28 text-center">
              <div className="w-20 h-20 rounded-full bg-[#161616] border border-[#252525] flex items-center justify-center mx-auto mb-6 text-3xl">
                🔍
              </div>
              <p className="font-display text-2xl text-gray-500 tracking-widest mb-2">
                SIN RESULTADOS
              </p>
              <p className="text-gray-700 font-body text-sm mt-2 mb-8">
                Intenta con otros filtros
              </p>
              <button
                onClick={() => { setFiltroCC('Todos'); setFiltroMarca('Todas'); }}
                className="btn-gold px-7 py-2.5 tracking-widest uppercase font-display text-base rounded-md"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d0d0d] border-t border-[#1a1a1a] text-center">
        <p className="text-gray-600 font-body text-sm mb-2">
          ¿No encontraste lo que buscabas?
        </p>
        <p className="text-gray-400 font-body mb-6 text-base">
          Escríbenos y encontramos la moto perfecta para ti
        </p>
        <a
          href="https://wa.me/573007442878"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold px-8 py-3.5 tracking-widest uppercase font-display text-lg inline-flex items-center gap-2 rounded-md"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Contactar por WhatsApp
        </a>
      </section>
    </main>
  );
}
