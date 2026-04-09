import { Link } from 'react-router-dom';
import { Moto } from '../types/moto.types';

interface MotoCardProps {
  moto: Moto;
  index?: number;
}

export default function MotoCard({ moto, index = 0 }: MotoCardProps) {
  const delayClass =
    index % 4 === 0
      ? 'animate-fade-up'
      : index % 4 === 1
      ? 'animate-fade-up-delay-1'
      : index % 4 === 2
      ? 'animate-fade-up-delay-2'
      : 'animate-fade-up-delay-3';

  return (
    <div
      className={`moto-card group bg-[#111111] border border-[#1e1e1e] hover:border-gold-600/40 overflow-hidden relative ${delayClass}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <div className="relative overflow-hidden h-70 sm:h-70 aspect-[4/3] img-placeholder">
        <img
          src={moto.imagen}
          alt={moto.nombre}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && !parent.querySelector('.placeholder-inner')) {
              const ph = document.createElement('div');
              ph.className =
                'placeholder-inner w-full h-full flex flex-col items-center justify-center gap-3';
              ph.innerHTML = `
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 38 Q15 25 30 28 Q42 30 52 22" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                  <circle cx="16" cy="40" r="6" stroke="#D4AF37" stroke-width="2" fill="none"/>
                  <circle cx="44" cy="40" r="6" stroke="#D4AF37" stroke-width="2" fill="none"/>
                  <path d="M22 40 L38 40" stroke="#D4AF37" stroke-width="1.5"/>
                  <path d="M32 20 L38 28" stroke="#D4AF37" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span style="color:#444;font-size:11px;font-family:Barlow,sans-serif;letter-spacing:0.15em;text-transform:uppercase;">Imagen próximamente</span>
              `;
              parent.appendChild(ph);
            }
          }}
        />

        <div className="absolute top-3 right-3 bg-black/85 backdrop-blur-sm border border-gold-600/50 px-2.5 py-1 rounded-md z-10">
          <span className="font-display text-gold-500 text-sm tracking-widest">
            {moto.cilindraje}cc
          </span>
        </div>

        <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm border border-[#2e2e2e] px-2.5 py-1 rounded-md z-10">
          <span className="text-gray-300 text-[10px] font-body font-600 tracking-widest uppercase">
            {moto.marca}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      <div className="p-5">
        <h3 className="font-display text-2xl md:text-[1.6rem] text-white tracking-wider leading-tight mb-1.5 group-hover:text-gold-300 transition-colors duration-300">
          {moto.nombre}
        </h3>

        <div className="flex items-center gap-2 mb-5">
          <div className="gold-line" style={{ width: '24px', height: '2px' }} />
          <span className="text-gray-500 text-[10px] font-body font-500 tracking-[0.2em] uppercase">
            2 Tiempos
          </span>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="text-gray-600 text-[9px] tracking-[0.3em] uppercase font-body mb-0.5">
              Precio
            </p>
            <p className="font-display text-gold-500 text-xl tracking-wide truncate">
              ${moto.precio.toLocaleString('es-CO')}
            </p>
          </div>

          <Link
            to={`/motos/${moto.id}`}
            className="btn-gold px-4 py-2 text-xs tracking-widest uppercase font-display flex-shrink-0 flex items-center gap-1.5 rounded-md"
          >
            Ver más
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
