const fleet = [
  {
    title: 'Bike Individual Aro 20 e 26',
    detail: 'Bike individual sem rodinha para passeio no parque.',
    price: 'R$ 12,00 / hora',
  },
  {
    title: 'Triciclo Família 35',
    detail: '3 lugares, com assento frontal para criança até 20 kg.',
    price: 'R$ 35,00 / hora',
  },
  {
    title: 'Bike Individual com Cadeirinha',
    detail: 'Cadeirinha para crianças de até 13 kg.',
    price: 'R$ 13,00 / hora',
  },
]

const rentalRules = [
  'Para alugar: documento físico obrigatório.',
  'Comprovante de residência pode ser digital (incluindo app com endereço).',
  'Durante o uso do equipamento, o documento fica retido na loja.',
  'Não fazemos reserva de equipamento: basta chegar, cadastrar e alugar.',
  'Bikes sem rodinha.',
]

const contractArticles = [
  'Art. 1: Responsabilidade por roubo, perda e danos por mau uso.\nValores de reposição: Bike Aro 20 R$ 450,00 | Bike Aro 26 R$ 700,00 | Triciclo R$ 4.500,00.',
  'Art. 2: Valores por hora com tolerância de 10 minutos.',
  'Art. 3: Horário de locação - Seg-Sex: 09h às 15h50 | Sáb-Dom-Feriados: 09h às 16h50.',
  'Art. 4: Atraso após encerramento gera multa em valor duplicado.',
]

const pulseStrip = [
  'Aluguel por hora',
  'Retirada imediata na loja',
  'Sem reserva de equipamento',
  'Confira o contrato de locação'
]

function App() {
  return (
    <div className="site-flow min-h-screen bg-(--color-night) text-slate-100">
      <section className="editorial-hero section-fade flow-section relative isolate overflow-hidden px-6 pb-24 pt-10 md:px-12 md:pb-32">
        <div className="absolute inset-0 -z-20 hero-grid" />
        <div className="absolute -left-16 top-20 -z-10 h-72 w-72 rounded-full bg-(--color-lime)/30 blur-3xl parallax-slow" />
        <div className="absolute -right-20 top-0 -z-10 h-80 w-80 rounded-full bg-(--color-cyan)/25 blur-3xl parallax-fast" />
        <div className="absolute bottom-0 left-1/2 -z-10 h-60 w-60 -translate-x-1/2 rounded-full bg-(--color-orange)/25 blur-3xl parallax-slow" />

        <header
          className="landing-header mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 py-5 sm:flex-row sm:items-center"
          aria-label="Cabecalho da landing"
        >
          <div className="brand-stamp text-xl font-black tracking-[0.2em] text-white md:text-2xl">
            BIKE.COM
          </div>
          <p className="header-meta text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Locacao no Parque do Carmo
          </p>
        </header>

        <div className="hero-layout mx-auto mt-10 grid w-full max-w-6xl gap-10 md:mt-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="hero-copy-zone">
            <p className="hero-kicker inline-flex rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-200">
              Em frente ao Parque do Carmo
            </p>
            <h1 className="hero-title mt-6 max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl">
              Pedale o parque.
              <span className="paulista-highlight mt-2 block text-(--color-lime)">Viva São Paulo.</span>
            </h1>
            <p className="premium-copy mt-6 max-w-xl text-base md:text-lg">
              A BIKE.COM transforma um simples passeio em uma experiência memorável.
              Alugue sua bicicleta a poucos passos do Parque do Carmo e aproveite rotas
              verdes, ar livre e liberdade total.
            </p>


            <div className="hero-actions mt-9 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=Av.+Oswaldo+Pucci,+Sao+Paulo,+SP,+Brasil,+08270-700"
                target="_blank"
                rel="noreferrer"
                className="cta-primary rounded-full bg-(--color-lime) px-7 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300"
              >
                Como Chegar
              </a>
              <a
                href="https://www.parquedocarmo.net/"
                target="_blank"
                rel="noreferrer"
                className="cta-secondary rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] transition hover:bg-white/10"
              >
                Ver Parque
              </a>
            </div>
            <p className="hero-proof mt-4 text-sm text-slate-300">
              Cadastro rapido na loja, sem etapas digitais obrigatorias.
            </p>
          </div>

          <div className="address-panel glass-card elevate-card reveal-card rounded-3xl p-6 md:p-8">
            <p className="address-stamp">Ponto oficial BIKE.COM</p>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Endereço
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
              Av. Oswaldo Pucci, 60
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              São Paulo, SP, Brasil, 08270-700
            </p>

            <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <div className="soft-chip elevate-card reveal-card rounded-2xl p-4">
                <p className="text-slate-300">Aluguel | Seg-Sex</p>
                <p className="mt-1 text-xl font-black text-white">09h - 15h50</p>
              </div>
              <div className="soft-chip elevate-card reveal-card rounded-2xl p-4">
                <p className="text-slate-300">Aluguel | Sáb-Dom-Feriados</p>
                <p className="mt-1 text-xl font-black text-white">09h - 16h50</p>
              </div>
            </div>

            <div className="soft-chip elevate-card reveal-card mt-4 rounded-2xl p-4 text-sm text-slate-100">
              <p className="font-bold text-white">Telefone BIKE.COM: (11) 2597-1415</p>
              <p className="mt-1 text-slate-300">Funcionamento da loja: Seg-Sex 09h às 17h | Sáb-Dom-Feriados 09h às 18h</p>
              <p className="mt-1 text-slate-300">Parque do Carmo: 05h30 às 20h00 (todos os dias)</p>
            </div>

            <div className="mini-map-shell soft-chip elevate-card reveal-card mt-4 rounded-2xl p-3">
              <p className="px-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Mini mapa da loja
              </p>
              <div className="relative mt-3 h-44 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80">
                <iframe
                  title="Mapa da BIKE.COM"
                  src="https://www.google.com/maps?q=Av.+Oswaldo+Pucci,+60,+Sao+Paulo,+SP,+08270-700&z=16&output=embed"
                  className="mini-map-frame h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                className="mt-3 inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-cyan-200/40 hover:bg-white/8"
                href="https://maps.google.com/?q=Av.+Oswaldo+Pucci,+Sao+Paulo,+SP,+Brasil,+08270-700"
                target="_blank"
                rel="noreferrer"
              >
                Abrir no mapa
              </a>
            </div>

          </div>
        </div>

        <div className="editorial-ribbon mx-auto mt-12 max-w-6xl" aria-hidden="true">
          <div className="editorial-ribbon-track">
            {[...pulseStrip, ...pulseStrip].map((item, index) => (
              <span key={`${item}-${index}`} className="editorial-ribbon-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="plan-stage section-fade flow-section relative px-6 py-20 md:px-12 parallax-panel">
        <div className="mx-auto max-w-6xl">
          <h3 className="section-title text-3xl font-black text-white md:text-4xl">
            Escolha seu ritmo
          </h3>
          <p className="premium-copy mt-3 max-w-2xl">
            Planos de aluguel BIKE.COM - valores por hora e opções para individual e família.
          </p>

          <div className="plan-grid mt-10 grid gap-5 md:grid-cols-3">
            {fleet.map((plan, index) => (
              <article key={plan.title} className="plan-card elevate-card reveal-card group rounded-3xl p-6">
                <p className="plan-index">0{index + 1}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Plano
                </p>
                <h4 className="mt-3 text-2xl font-extrabold text-white">{plan.title}</h4>
                <p className="mt-3 text-sm text-slate-300">{plan.detail}</p>
                <p className="mt-6 text-xl font-black text-(--color-lime)">{plan.price}</p>
                <span className="plan-sash" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-fade story-stage px-6 pb-20 pt-16 md:px-12">
        <div className="story-shell soft-panel reveal-card mx-auto grid max-w-6xl gap-10 rounded-4xl p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="story-copy">
            <p className="stage-label">Base local // Street Service</p>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
              Experiência BIKE.COM 
            </p>
            <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">
              Sua nova memória de fim de semana começa aqui.
            </h3>
            <p className="premium-copy mt-4 max-w-2xl">
              Estrutura prática, localização estratégica e atendimento de quem conhece o
              bairro. Locação presencial: chegou, cadastrou e pedalou.
            </p>
            <div className="story-strip mt-7" aria-hidden="true">
              <span>Cadastro rápido</span>
              <span>Sem reserva</span>
              <span>Retirada imediata</span>
            </div>
          </div>

          <div className="rules-lane flex flex-col gap-4 text-sm text-slate-100">
            {rentalRules.map((rule, index) => (
              <div key={rule} className="rule-card soft-chip elevate-card reveal-card rounded-2xl p-4">
                <p className="rule-index">0{index + 1}</p>
                <p>{rule}</p>
                <span className="rule-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contrato" className="section-fade contract-stage px-6 pb-24 md:px-12">
        <div className="contract-shell soft-panel reveal-card mx-auto max-w-6xl rounded-4xl p-8 md:p-12">
          <p className="stage-label">Termos oficiais // BIKE.COM</p>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-200">Contrato de Locação</p>
          <h3 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Regras oficiais para retirada e devolução
          </h3>

          <div className="contract-grid mt-8 grid gap-4">
            {contractArticles.map((article, index) => (
              <div
                key={article}
                className="contract-card soft-chip elevate-card reveal-card rounded-2xl px-5 py-4 text-sm text-slate-100 whitespace-pre-line"
              >
                <p className="contract-badge">Art. 0{index + 1}</p>
                {article}
              </div>
            ))}
          </div>

          <p className="contract-note mt-8 text-sm text-slate-300">
            Ao alugar, o cliente declara que leu e concorda com todas as informações acima.
          </p>
        </div>
      </section>

      <footer
        className="street-footer border-t border-white/12 bg-slate-950/80 px-6 py-10 md:px-12"
        aria-label="Rodape institucional"
      >
        <div className="footer-shell mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="footer-block-title text-sm font-semibold uppercase tracking-[0.18em] text-lime-200">
              Razão social
            </p>
            <p className="mt-2 text-2xl font-black text-white">BIKE.CAMARGO LTDA</p>
            <p className="footer-manifesto mt-4 max-w-md text-sm text-slate-300">
              Mobilidade de bairro com cuidado de quem vive o Parque do Carmo todos os dias.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-slate-200">
            <p className="footer-block-title text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/90">
              Contato e operacao
            </p>
            <p>
              <span className="font-bold text-white">CNPJ:</span> 22.696.838/0001-02
            </p>
            <p>
              <span className="font-bold text-white">Fone:</span> (11) 2597-1415
            </p>
            <p>Atendimento presencial em frente ao Parque do Carmo.</p>
          </div>

          <nav className="grid content-start gap-2 text-sm text-slate-200" aria-label="Links uteis">
            <p className="footer-block-title text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/90">
              Navegacao util
            </p>
            <a
              href="https://www.facebook.com/p/Bikecom-100069484750901/"
              target="_blank"
              rel="noreferrer"
              className="footer-link mt-1 text-sm font-semibold text-cyan-100 underline decoration-white/40 underline-offset-4 transition hover:text-cyan-200"
            >
              Facebook oficial
            </a>
            <a
              href="#contrato"
              className="footer-link text-sm font-semibold text-cyan-100 underline decoration-white/40 underline-offset-4 transition hover:text-cyan-200"
            >
              Contrato e termos
            </a>
          </nav>
        </div>
        <p className="footer-legal mx-auto mt-8 w-full max-w-6xl border-t border-white/10 pt-4 text-center text-xs uppercase tracking-[0.12em] text-slate-400">
          © 2026 BIKE.CAMARGO LTDA. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}

export default App
