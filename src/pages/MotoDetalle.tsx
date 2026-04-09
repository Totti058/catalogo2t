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

      <div className="px-6 py-4 bg-[#0d0d0d] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex items-center gap-1 text-xs font-body tracking-widest">
          <Link to="/" className="text-gray-600 hover:text-gold-400 transition-colors duration-200 uppercase">
            Inicio
          </Link>
          <span className="breadcrumb-sep">/</span>
          <Link to="/motos" className="text-gray-600 hover:text-gold-400 transition-colors duration-200 uppercase">
            Catálogo
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="text-gold-500 uppercase truncate max-w-[160px] sm:max-w-none">{moto.nombre}</span>
        </div>
      </div>


      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div className="animate-fade-up">
              <div className="relative overflow-hidden bg-[#111] border border-[#1e1e1e] rounded-2xl aspect-[4/3] img-placeholder">
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

                <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-gold-500/50 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-gold-500/50 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-gold-500/50 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-gold-500/50 rounded-br-2xl" />
              </div>

              <div className="flex gap-3 mt-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex-1 aspect-video bg-[#111] border border-[#1e1e1e] rounded-xl flex items-center justify-center opacity-30 cursor-not-allowed"
                  >
                    <span className="text-[#333] text-xs font-body">+</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up-delay-1">
              <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                <span className="border border-gold-600/40 text-gold-500 text-xs tracking-[0.25em] uppercase px-3 py-1.5 font-body rounded-md">
                  {moto.marca}
                </span>
                <span className="border border-[#2a2a2a] text-gray-500 text-xs tracking-[0.25em] uppercase px-3 py-1.5 font-body rounded-md">
                  2 Tiempos
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-widest leading-[0.95] mb-3">
                {moto.nombre}
              </h1>
              <div className="gold-line mb-8" />


              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: 'Cilindraje', value: `${moto.cilindraje}cc` },
                  { label: 'Marca', value: moto.marca },
                  { label: 'Tipo', value: '2 Tiempos' },
                  { label: 'Disponibilidad', value: 'En stock' },
                ].map(({ label, value }) => (
                  <div key={label} className="spec-tile">
                    <p className="text-gray-600 text-[9px] tracking-[0.3em] uppercase font-body mb-1.5">
                      {label}
                    </p>
                    <p className="font-display text-white text-xl tracking-wider">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="price-box mb-8">
                <p className="text-gray-600 text-[9px] tracking-[0.3em] uppercase font-body mb-1.5">
                  Precio
                </p>
                <p className="font-display text-4xl md:text-5xl text-gold-500 tracking-widest">
                  ${moto.precio.toLocaleString('es-CO')}
                </p>
                <p className="text-gray-600 text-xs font-body mt-2">
                  Precio de venta al público · Consulta financiación
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 text-[9px] tracking-[0.3em] uppercase font-body mb-3">
                  Descripción
                </p>
                <p className="text-gray-400 font-body text-sm leading-relaxed">
                  {moto.descripcion}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/573007442878?text=Hola, me interesa la ${encodeURIComponent(moto.nombre)} (${moto.cilindraje}cc) por $${moto.precio.toLocaleString('es-CO')}. ¿Está disponible?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-4 tracking-widest uppercase font-display text-lg text-center flex-1 rounded-md flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Comprar por WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="border border-gold-700/60 text-gold-400 px-6 py-4 tracking-widest uppercase font-display text-lg hover:bg-gold-500/8 hover:border-gold-500 transition-all duration-300 text-center flex-1 rounded-md"
                >
                  Más información
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1a1a1a] flex items-center gap-3">
                <span className="text-gray-600 text-xs font-body">¿Prefieres llamar?</span>
                <a
                  href="tel:3007442878"
                  className="text-gold-500 font-body text-sm hover:text-gold-300 transition-colors duration-200 font-600"
                >
                  300 744 2878
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relacionadas.length > 0 && (
        <section className="py-16 px-6 bg-[#0d0d0d] border-t border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="text-gold-600 text-xs tracking-[0.4em] uppercase font-body mb-2">
                También te puede interesar
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white tracking-widest leading-none">
                MOTOS <span className="text-gold-500">SIMILARES</span>
              </h2>
              <div className="gold-line mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relacionadas.map((m) => (
                <div key={m.id} className="related-card group">
                  <div className="h-44 img-placeholder overflow-hidden">
                    <img
                      src={m.imagen}
                      alt={m.nombre}
                      className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl md:text-2xl text-white tracking-wider group-hover:text-gold-400 transition-colors duration-200 leading-tight mb-3">
                      {m.nombre}
                    </h3>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-gold-500 font-display text-xl tracking-wider">
                        ${m.precio.toLocaleString('es-CO')}
                      </span>
                      <Link
                        to={`/motos/${m.id}`}
                        className="btn-gold px-4 py-2 text-xs tracking-widest uppercase font-display rounded-md flex items-center gap-1"
                      >
                        Ver
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-10 px-6 text-center bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <Link
          to="/motos"
          className="text-gray-500 hover:text-gold-400 transition-colors duration-200 font-body text-sm tracking-widest uppercase inline-flex items-center gap-2"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Volver al catálogo
        </Link>
      </div>
    </main>
  );
}
