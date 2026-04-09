import { useState, FormEvent } from 'react';

interface FormState {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log('Formulario enviado:', form);

    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
      setForm({ nombre: '', email: '', mensaje: '' });
    }, 1200);
  };

  return (
    <main className="min-h-screen pt-20 bg-[#0a0a0a]">

      <section className="relative py-20 md:py-24 px-6 bg-black border-b border-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/4 rounded-full blur-3xl" />
          <div className="absolute top-8 right-12 w-24 h-24 border border-gold-800/15 rotate-45" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-gold-600 text-xs tracking-[0.5em] uppercase font-body font-300 mb-3 animate-fade-up">
            Estamos para ti
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white tracking-widest animate-fade-up-delay-1 leading-none">
            CONTAC<span className="text-gold-500">TANOS</span>
          </h1>
          <div className="gold-line mt-5 animate-fade-up-delay-2" />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          <div className="lg:col-span-2 space-y-6 animate-fade-up">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white tracking-widest mb-3 leading-none">
                HABLA CON <span className="text-gold-500">NOSOTROS</span>
              </h2>
              <div className="gold-line mb-5" />
              <p className="text-gray-500 font-body text-sm leading-relaxed">
                ¿Tienes preguntas sobre alguna moto? ¿Quieres más información sobre precios o disponibilidad? Escríbenos o llámanos directamente.
              </p>
            </div>

            <div className="contact-info-card p-6 group">
              <p className="text-gray-600 text-[10px] tracking-[0.4em] uppercase font-body mb-2">
                Teléfono · WhatsApp
              </p>
              <a
                href="tel:3007442878"
                className="font-display text-3xl md:text-4xl text-gold-500 tracking-widest hover:text-gold-300 transition-colors duration-200 block"
              >
                300 744 2878
              </a>
              <p className="text-gray-600 text-xs font-body mt-1.5">
                Llamadas y mensajes de texto
              </p>
            </div>

            <a
              href="https://wa.me/573007442878"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-4 tracking-widest uppercase font-display text-lg flex items-center justify-center gap-3 w-full rounded-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chatear por WhatsApp
            </a>

            <div className="space-y-5 pt-4 border-t border-[#1a1a1a]">
              {[
                { icon: '📍', label: 'Ubicación', value: 'Colombia · Atención nacional' },
                { icon: '🕐', label: 'Horario', value: 'Lunes a Sábado · 8am - 6pm' },
                { icon: '⚡', label: 'Respuesta', value: 'En menos de 1 hora' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#161616] border border-[#222] flex items-center justify-center flex-shrink-0 text-base">
                    {icon}
                  </div>
                  <div>
                    <p className="text-gray-600 text-[9px] tracking-[0.3em] uppercase font-body mb-0.5">
                      {label}
                    </p>
                    <p className="text-gray-300 font-body text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 animate-fade-up-delay-1">
            <div className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />

              {enviado ? (
                <div className="py-16 text-center">
                  <div className="success-icon mb-6">
                    <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-white tracking-widest mb-2">
                    ¡MENSAJE ENVIADO!
                  </h3>
                  <div className="gold-line mx-auto mb-5" />
                  <p className="text-gray-500 font-body text-sm mb-10 max-w-xs mx-auto leading-relaxed">
                    Hemos recibido tu mensaje. Te contactaremos pronto.
                  </p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="btn-gold px-8 py-3 tracking-widest uppercase font-display text-base rounded-md"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl md:text-3xl text-white tracking-widest mb-1 leading-none">
                    ENVIAR <span className="text-gold-500">MENSAJE</span>
                  </h2>
                  <div className="gold-line mb-8" style={{ width: '28px', height: '2px' }} />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-500 text-[9px] tracking-[0.35em] uppercase font-body mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="input-dark w-full px-4 py-3.5 font-body text-sm rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-500 text-[9px] tracking-[0.35em] uppercase font-body mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="input-dark w-full px-4 py-3.5 font-body text-sm rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-500 text-[9px] tracking-[0.35em] uppercase font-body mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="¿En qué moto estás interesado? ¿Tienes alguna pregunta?"
                        className="input-dark w-full px-4 py-3.5 font-body text-sm resize-none rounded-lg"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full py-4 tracking-widest uppercase font-display text-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 rounded-lg"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensaje
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-gray-700 text-xs font-body text-center">
                      O contáctanos directamente al{' '}
                      <a href="tel:3007442878" className="text-gold-600 hover:text-gold-400 transition-colors duration-200">
                        300 744 2878
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl md:text-3xl text-white tracking-widest leading-none">
              📞 <span className="text-gold-500">300 744 2878</span>
            </p>
            <p className="text-gray-600 font-body text-xs mt-2 tracking-wider">
              Llamadas · WhatsApp · SMS
            </p>
          </div>
          <a
            href="https://wa.me/573007442878"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 tracking-widest uppercase font-display text-lg rounded-md flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Abrir WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
