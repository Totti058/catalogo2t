import { Link } from 'react-router-dom';
import MotoCard from '../components/MotoCard';
import { motos } from '../data/motos';

export default function Home() {
  const destacadas = motos.filter((m) => m.destacada);

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large diagonal gold lines */}
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-700/20 to-transparent" style={{ right: '20%' }} />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-700/10 to-transparent" style={{ right: '40%' }} />

          {/* Corner decorations */}
          <div className="absolute top-24 right-8 md:right-16 w-24 h-24 border border-gold-700/20 rotate-45" />
          <div className="absolute top-28 right-12 md:right-20 w-16 h-16 border border-gold-600/10 rotate-45" />
          <div className="absolute bottom-20 left-8 md:left-16 w-20 h-20 border border-gold-700/15 rotate-45" />

          {/* Radial gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/3 rounded-full blur-3xl" />

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="animate-fade-up text-gold-600 font-body font-300 text-xs tracking-[0.5em] uppercase mb-6">
            Especialistas en
          </p>

          <h1 className="animate-fade-up-delay-1 font-display text-[clamp(4rem,15vw,11rem)] leading-none tracking-widest text-white mb-0">
            MOTOS
          </h1>

          <h2 className="animate-fade-up-delay-1 font-display text-[clamp(3rem,12vw,9rem)] leading-none tracking-widest gold-text-gradient -mt-4 md:-mt-6 mb-8">
            2 TIEMPOS
          </h2>

          <div className="animate-fade-up-delay-2 flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
            <p className="text-gray-400 font-body font-300 text-sm tracking-[0.3em] uppercase">
              Potencia · Adrenalina · Precisión
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/motos"
              className="btn-gold px-10 py-4 text-sm tracking-widest uppercase font-display text-lg min-w-[200px]"
            >
              Ver Catálogo
            </Link>
            <Link
              to="/contact"
              className="border border-gold-700 text-gold-400 px-10 py-4 text-sm tracking-widest uppercase font-display text-lg hover:bg-gold-500/5 hover:border-gold-500 transition-all duration-300 min-w-[200px]"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-[9px] tracking-[0.4em] uppercase font-body">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-600/50 to-transparent" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#111] border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#222]">
          {[
            { num: '7+', label: 'Modelos disponibles' },
            { num: '300cc', label: 'Máximo cilindraje' },
            { num: '100%', label: 'Original y garantizado' },
            { num: '24/7', label: 'Atención al cliente' },
          ].map(({ num, label }) => (
            <div key={label} className="px-6 py-2 text-center first:pl-0 last:pr-0">
              <p className="font-display text-3xl text-gold-500 tracking-widest">{num}</p>
              <p className="text-gray-500 text-xs font-body tracking-wider uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MOTOS DESTACADAS */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-14">
            <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body font-300 mb-3">
              Selección especial
            </p>
            <div className="flex items-end gap-6">
              <h2 className="font-display text-5xl md:text-6xl text-white tracking-widest leading-none">
                MOTOS <span className="text-gold-500">DESTACADAS</span>
              </h2>
            </div>
            <div className="gold-line mt-4" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destacadas.map((moto, i) => (
              <MotoCard key={moto.id} moto={moto} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <p className="text-gray-500 font-body text-sm mb-4">
              ¿Quieres ver todas las motos disponibles?
            </p>
            <Link
              to="/motos"
              className="btn-gold px-10 py-3 text-sm tracking-widest uppercase font-display text-base inline-block"
            >
              Ver Catálogo Completo →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6 bg-[#111] border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body font-300 mb-3">
              ¿Por qué elegirnos?
            </p>
            <h2 className="font-display text-5xl text-white tracking-widest">
              CALIDAD <span className="text-gold-500">GARANTIZADA</span>
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="bg-[#0a0a0a] border border-[#222] p-8 hover:border-gold-700/40 transition-colors duration-300 group"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-3 group-hover:text-gold-400 transition-colors">
                  {title}
                </h3>
                <div className="gold-line mb-4" style={{ width: '30px', height: '2px' }} />
                <p className="text-gray-500 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 px-6 bg-black border-t border-[#222] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-500/3 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body mb-4">
            ¿Listo para acelerar?
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-widest mb-4">
            HABLA CON <span className="text-gold-500">NOSOTROS</span>
          </h2>
          <p className="text-gray-400 font-body text-lg mb-8">
            Llámanos o escríbenos ahora mismo
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573007442878"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 text-sm tracking-widest uppercase font-display text-lg"
            >
              📱 WhatsApp: 300 744 2878
            </a>
            <Link
              to="/contact"
              className="border border-gold-700 text-gold-400 px-8 py-4 text-sm tracking-widest uppercase font-display text-lg hover:bg-gold-500/5 transition-colors duration-300"
            >
              Enviar mensaje
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-[#1a1a1a] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 border border-gold-600 rotate-45">
              <span className="font-display text-gold-500 text-xs -rotate-45 leading-none">2T</span>
            </div>
            <span className="font-display text-white text-lg tracking-widest">
              MOTO<span className="text-gold-500">2T</span>
            </span>
          </div>
          <p className="text-gray-700 text-xs font-body tracking-wider">
            © {new Date().getFullYear()} Moto2T. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs font-body">
            📞 <span className="text-gold-700">300 744 2878</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
