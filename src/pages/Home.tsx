import { Link } from 'react-router-dom';
import MotoCard from '../components/MotoCard';
import { motos } from '../data/motos';

export default function Home() {
  const destacadas = motos.filter((m) => m.destacada);

  return (
    <main className="min-h-screen">

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-gold-700/20 to-transparent" style={{ right: '20%' }} />
          <div className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-gold-700/10 to-transparent" style={{ right: '40%' }} />

          <div className="absolute top-4 right-4 md:top-24 md:right-8 w-12 h-12 md:w-24 md:h-24 border border-gold-700/25 rotate-45" />
          <div className="absolute top-8 right-8 md:top-28 md:right-12 w-8 h-8 md:w-16 md:h-16 border border-gold-600/12 rotate-45" />
          <div className="absolute bottom-20 left-8 md:left-16 w-20 h-20 border border-gold-700/18 rotate-45" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gold-500/4 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <div className="animate-fade-up inline-flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold-600" />
            <p className="text-gold-600 font-body font-400 text-xs tracking-[0.5em] uppercase">
              Especialistas en
            </p>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold-600" />
          </div>

          <h1 className="animate-fade-up-delay-1 font-display text-[clamp(4.5rem,16vw,12rem)] leading-[0.9] tracking-widest text-white mb-0">
            MOTOS
          </h1>
          <h2 className="animate-fade-up-delay-1 font-display text-[clamp(3.5rem,13vw,10rem)] leading-[0.9] tracking-widest gold-text-gradient -mt-2 md:-mt-4 mb-10">
            2 TIEMPOS
          </h2>

          <p className="animate-fade-up-delay-2 text-gray-400 font-body font-300 text-base md:text-lg tracking-[0.25em] uppercase mb-10">
            Potencia · Adrenalina · Precisión
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/motos"
              className="btn-gold px-10 py-4 tracking-widest uppercase font-display text-xl min-w-[200px] text-center rounded-md flex items-center justify-center gap-2"
            >
              Ver Catálogo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="border border-gold-700/60 text-gold-400 px-10 py-4 tracking-widest uppercase font-display text-xl hover:bg-gold-500/8 hover:border-gold-500 transition-all duration-300 min-w-[200px] text-center rounded-md"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-[9px] tracking-[0.4em] uppercase font-body">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-600/50 to-transparent" />
        </div>
      </section>


      <section className="bg-[#0e0e0e] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1e1e1e]">
          {[
            { num: '7+', label: 'Modelos disponibles' },
            { num: '300cc', label: 'Máximo cilindraje' },
            { num: '100%', label: 'Original y garantizado' },
            { num: '24/7', label: 'Atención al cliente' },
          ].map(({ num, label }) => (
            <div key={label} className="stat-item px-4 md:px-8 py-2 text-center first:pl-0 last:pr-0">
              <p className="font-display text-3xl md:text-4xl text-gold-500 tracking-widest">{num}</p>
              <p className="text-gray-500 text-xs font-body tracking-wider uppercase mt-1.5 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body font-300 mb-3">
              Selección especial
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white tracking-widest leading-none">
                  MOTOS <span className="text-gold-500">DESTACADAS</span>
                </h2>
                <div className="gold-line mt-4" />
              </div>
              <Link
                to="/motos"
                className="text-gold-600 hover:text-gold-400 font-body text-sm tracking-widest uppercase transition-colors duration-200 flex items-center gap-2 self-start sm:self-auto"
              >
                Ver todas
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacadas.map((moto, i) => (
              <MotoCard key={moto.id} moto={moto} index={i} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 font-body text-sm mb-5">
              ¿Quieres ver todas las motos disponibles?
            </p>
            <Link
              to="/motos"
              className="btn-gold px-10 py-3.5 tracking-widest uppercase font-display text-lg inline-flex items-center gap-2 rounded-md"
            >
              Ver Catálogo Completo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body font-300 mb-3">
              ¿Por qué elegirnos?
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-widest leading-none">
              CALIDAD <span className="text-gold-500">GARANTIZADA</span>
            </h2>
            <div className="gold-line mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '⚙️',
                title: 'Mecánica de Alto Rendimiento',
                desc: 'Todas nuestras motos son revisadas y garantizadas por mecánicos especializados en 2 tiempos.',
              },
              {
                icon: '🏆',
                title: 'Las Mejores Marcas',
                desc: 'KTM, Husqvarna, Yamaha, Beta y más. Solo trabajamos con marcas de reconocimiento mundial.',
              },
              {
                icon: '📞',
                title: 'Soporte Personalizado',
                desc: 'Te acompañamos en todo el proceso de compra. Escríbenos por WhatsApp o llámanos directamente.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="feature-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 text-2xl group-hover:bg-gold-500/15 transition-colors duration-300">
                  {icon}
                </div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-3 leading-tight group-hover:text-gold-400 transition-colors duration-300">
                  {title}
                </h3>
                <div className="gold-line mb-4" style={{ width: '28px', height: '2px' }} />
                <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black border-t border-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gold-500/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-600/3 rounded-full blur-2xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body mb-5">
            ¿Listo para acelerar?
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white tracking-widest mb-5 leading-none">
            HABLA CON <span className="text-gold-500">NOSOTROS</span>
          </h2>
          <p className="text-gray-400 font-body text-lg mb-10 font-300">
            Llámanos o escríbenos ahora mismo
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573007442878"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 tracking-widest uppercase font-display text-xl rounded-md flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: 300 744 2878
            </a>
            <Link
              to="/contact"
              className="border border-gold-700/60 text-gold-400 px-8 py-4 tracking-widest uppercase font-display text-xl hover:bg-gold-500/8 hover:border-gold-500 transition-all duration-300 rounded-md"
            >
              Enviar mensaje
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer-root py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-7 h-7 border border-gold-600/70 rotate-45">
              <span className="font-display text-gold-500 text-xs -rotate-45 leading-none">2T</span>
            </div>
            <span className="font-display text-white text-lg tracking-widest">
              MOTO<span className="text-gold-500">2T</span>
            </span>
          </div>

          <p className="text-gray-700 text-xs font-body tracking-wider text-center">
            © {new Date().getFullYear()} Moto2T · Todos los derechos reservados
          </p>

          <a
            href="tel:3007442878"
            className="text-gray-600 hover:text-gold-500 text-xs font-body tracking-wider transition-colors duration-200"
          >
            📞 <span className="text-gold-700">300 744 2878</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
