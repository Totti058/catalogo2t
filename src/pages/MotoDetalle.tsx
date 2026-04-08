import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motos } from '../data/motos';
import { Moto } from '../types/moto.types';

export default function MotoDetalle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [moto, setMoto] = useState<Moto | null>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const found = motos.find((m) => m.id === Number(id));
    if (!found) {
      navigate('/motos', { replace: true });
    } else {
      setMoto(found);
      setImgError(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, navigate]);

  if (!moto) return null;

  const relacionadas = motos
    .filter((m) => m.id !== moto.id && (m.cilindraje === moto.cilindraje || m.marca === moto.marca))
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-20 bg-[#0a0a0a]">
      {/* Breadcrumb */}
      <div className="px-6 py-4 bg-[#0d0d0d] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-body tracking-widest">
          <Link to="/" className="text-gray-600 hover:text-gold-400 transition-colors uppercase">
            Inicio
          </Link>
          <span className="text-[#333]">/</span>
          <Link to="/motos" className="text-gray-600 hover:text-gold-400 transition-colors uppercase">
            Catálogo
          </Link>
          <span className="text-[#333]">/</span>
          <span className="text-gold-500 uppercase">{moto.nombre}</span>
        </div>
      </div>

      {/* MAIN DETAIL */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: Image */}
            <div className="animate-fade-up">
              <div className="relative overflow-hidden bg-[#111] border border-[#222] aspect-[4/3] img-placeholder">
                {!imgError ? (
                  <img
                    src={moto.imagen}
                    alt={moto.nombre}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 52 Q20 33 40 38 Q56 42 70 28" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" fill="none"/>
                      <circle cx="20" cy="56" r="9" stroke="#D4AF37" strokeWidth="2.5" fill="none"/>
                      <circle cx="60" cy="56" r="9" stroke="#D4AF37" strokeWidth="2.5" fill="none"/>
                      <path d="M29 56 L51 56" stroke="#D4AF37" strokeWidth="2"/>
                      <path d="M43 26 L52 38" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    <span className="text-gray-600 text-xs font-body tracking-[0.3em] uppercase">
                      Imagen próximamente
                    </span>
                  </div>
                )}

                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold-500/60" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold-500/60" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold-500/60" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold-500/60" />
              </div>

              {/* Thumbnail row placeholder */}
              <div className="flex gap-3 mt-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex-1 aspect-video bg-[#111] border border-[#222] flex items-center justify-center opacity-40 cursor-not-allowed"
                  >
                    <span className="text-[#333] text-xs font-body">+</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Info */}
            <div className="animate-fade-up-delay-1">
              {/* Marca + badge */}
              <div className="flex items-center gap-3 mb-3">
                <span className="border border-gold-600/40 text-gold-500 text-xs tracking-[0.3em] uppercase px-3 py-1 font-body">
                  {moto.marca}
                </span>
                <span className="border border-[#333] text-gray-500 text-xs tracking-[0.3em] uppercase px-3 py-1 font-body">
                  2 Tiempos
                </span>
              </div>

              {/* Name */}
              <h1 className="font-display text-4xl md:text-5xl text-white tracking-widest leading-tight mb-2">
                {moto.nombre}
              </h1>
              <div className="gold-line mb-6" />

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: 'Cilindraje', value: `${moto.cilindraje}cc` },
                  { label: 'Marca', value: moto.marca },
                  { label: 'Tipo', value: '2 Tiempos' },
                  { label: 'Disponibilidad', value: 'En stock' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#111] border border-[#1e1e1e] p-4">
                    <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-body mb-1">
                      {label}
                    </p>
                    <p className="font-display text-white text-lg tracking-wider">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="bg-[#111] border border-gold-700/30 p-5 mb-8">
                <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-body mb-1">
                  Precio
                </p>
                <p className="font-display text-4xl text-gold-500 tracking-widest">
                  ${moto.precio.toLocaleString('es-CO')}
                </p>
                <p className="text-gray-600 text-xs font-body mt-1">
                  Precio de venta al público · Consulta financiación
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-body mb-3">
                  Descripción
                </p>
                <p className="text-gray-400 font-body text-sm leading-relaxed">
                  {moto.descripcion}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/573007442878?text=Hola, me interesa la ${encodeURIComponent(moto.nombre)} (${moto.cilindraje}cc) por $${moto.precio.toLocaleString('es-CO')}. ¿Está disponible?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-4 text-sm tracking-widest uppercase font-display text-base text-center flex-1"
                >
                  📱 Comprar por WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="border border-gold-700 text-gold-400 px-6 py-4 text-sm tracking-widest uppercase font-display text-base hover:bg-gold-500/5 transition-colors duration-300 text-center flex-1"
                >
                  Más información
                </Link>
              </div>

              {/* Phone */}
              <div className="mt-5 pt-5 border-t border-[#1a1a1a] flex items-center gap-2">
                <span className="text-gray-600 text-xs font-body">¿Prefieres llamar?</span>
                <a
                  href="tel:3007442878"
                  className="text-gold-500 font-body text-sm hover:text-gold-300 transition-colors font-600"
                >
                  300 744 2878
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELACIONADAS */}
      {relacionadas.length > 0 && (
        <section className="py-14 px-6 bg-[#111] border-t border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-gold-600 text-xs tracking-[0.4em] uppercase font-body mb-2">
                También te puede interesar
              </p>
              <h2 className="font-display text-3xl text-white tracking-widest">
                MOTOS <span className="text-gold-500">SIMILARES</span>
              </h2>
              <div className="gold-line mt-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relacionadas.map((m, i) => (
                <div key={m.id} className="group bg-[#0a0a0a] border border-[#222] hover:border-gold-700/40 overflow-hidden transition-all duration-300">
                  <div className="h-40 img-placeholder overflow-hidden">
                    <img
                      src={m.imagen}
                      alt={m.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-xl text-white tracking-wider group-hover:text-gold-400 transition-colors">
                      {m.nombre}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-gold-500 font-display text-lg">${m.precio.toLocaleString('es-CO')}</span>
                      <Link
                        to={`/motos/${m.id}`}
                        className="btn-gold px-4 py-1.5 text-xs tracking-widest uppercase font-display"
                      >
                        Ver →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back button */}
      <div className="py-10 px-6 text-center bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <Link
          to="/motos"
          className="text-gray-500 hover:text-gold-400 transition-colors font-body text-sm tracking-widest uppercase inline-flex items-center gap-2"
        >
          ← Volver al catálogo
        </Link>
      </div>
    </main>
  );
}
