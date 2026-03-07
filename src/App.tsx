import { useEffect, useMemo, useState } from 'react';
import { contractArticles, fleet, pulseStrip, rentalRules } from './data';

const getFleetTag = (title: string) => title.split(' ')[0]?.toUpperCase() ?? 'PLANO';

const isWeekend = (day: number) => day === 0 || day === 6;

const HOLIDAYS_MM_DD = new Set([
  '01-01', // Confraternizacao Universal
  '04-21', // Tiradentes
  '05-01', // Dia do Trabalhador
  '09-07', // Independencia do Brasil
  '10-12', // Nossa Senhora Aparecida
  '11-02', // Finados
  '11-15', // Proclamacao da Republica
  '12-25', // Natal
]);

const SPECIAL_16H_MM_DD = new Set([
  '12-25', // Natal
  '12-31', // Réveillon
  '01-01', // Feriado de Ano Novo
]);

const getMonthDay = (date: Date) => {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${month}-${day}`;
};

const isHoliday = (date: Date) => HOLIDAYS_MM_DD.has(getMonthDay(date));

const getRentalWindow = (date: Date) => {
  const monthDay = getMonthDay(date);

  if (SPECIAL_16H_MM_DD.has(monthDay)) {
    return { openMinutes: 9 * 60, closeMinutes: 16 * 60 };
  }

  if (isWeekend(date.getDay()) || isHoliday(date)) {
    return { openMinutes: 9 * 60, closeMinutes: 16 * 60 + 50 };
  }

  return { openMinutes: 9 * 60, closeMinutes: 15 * 60 + 50 };
};

const isRentalOpenNow = (date: Date) => {
  const minutesNow = date.getHours() * 60 + date.getMinutes();
  const { openMinutes, closeMinutes } = getRentalWindow(date);
  return minutesNow >= openMinutes && minutesNow <= closeMinutes;
};

function App() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const rentalStatusLabel = useMemo(() => {
    return isRentalOpenNow(now)
      ? 'Status da Locação: ativa para aluguel agora'
      : 'Status da Locação: fechada no momento, consulte os horários';
  }, [now]);

  return (
    <div className="site-flow min-h-screen text-slate-100 bg-[#050d0a] selection:bg-[#ccff00] selection:text-black">
      {/* Camadas de Fundo */}
      <div className="fixed inset-0 -z-20 topography-pattern opacity-15" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-[#050d0a]/80 to-[#050d0a]" />

      {/* Header principal */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050d0a]/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="brand-stamp text-xl font-black italic tracking-tighter text-[#ccff00]">
            BIKE.COM <span className="hidden sm:inline opacity-20">// ALUGUEL DE BICICLETAS</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Contato da loja</p>
              <p className="text-sm font-black text-white">(11) 2597-1415</p>
            </div>
            <a
              href="tel:+551125971415"
              className="btn-athlete bg-[#ccff00] text-black text-[10px] px-6 py-2 sm:hidden"
              aria-label="Ligar para BIKE.COM no número 11 2597-1415"
            >
              LIGAR AGORA
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative px-6 pt-12 pb-24 md:pt-20">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ccff00]/30 bg-emerald-950/30 px-4 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ccff00]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">{rentalStatusLabel}</span>
              </div>
              
              <h1 className="text-6xl font-black italic leading-[1.02] tracking-tighter text-white sm:text-8xl">
                PEDALE O PARQUE <br />
                <span className="mt-3 block pt-2 leading-[1.12] text-gradient">VIVA SÃO PAULO.</span>
              </h1>
              
              <p className="max-w-lg text-lg font-medium leading-relaxed text-emerald-100/60">
                A BIKE.COM oferece aluguel de bicicletas para o seu lazer.
                Estamos em frente ao Parque do Carmo, com atendimento direto
                para você chegar, alugar e pedalar com tranquilidade.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
                <div>
                  <p className="text-[10px] font-bold opacity-40 uppercase italic">Locação</p>
                  <p className="text-lg font-black text-white">PRESENCIAL</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-40 uppercase italic">Reserva</p>
                  <p className="text-lg font-black text-white">NÃO FAZEMOS</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-[10px] font-bold opacity-40 uppercase italic">Pagamento</p>
                  <p className="text-lg font-black text-white italic">PIX / CARTÃO DÉBITO E CRÉDITO</p>
                </div>
              </div>
            </div>

            {/* Card de Informacoes */}
            <div className="glass-panel relative p-8 md:p-10">
              <div className="absolute top-0 right-0 bg-[#ccff00] text-black px-4 py-1 text-[10px] font-black italic">LOJA</div>
              <h2 className="text-3xl font-black italic text-white mb-2">PONTO DE ATENDIMENTO</h2>
              <p className="text-emerald-400 font-bold text-sm tracking-widest mb-8 uppercase">Av. Oswaldo Pucci, 60 — Itaquera</p>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">Horário de locação</p>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-sm border-l-2 border-[#ccff00]">
                        <p className="text-[10px] opacity-50 uppercase font-bold">Seg - Sex</p>
                        <p className="text-xl font-black">09h - 15h50</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-sm border-l-2 border-[#ccff00]">
                        <p className="text-[10px] opacity-50 uppercase font-bold">Sáb - Dom - Feriados</p>
                        <p className="text-xl font-black">09h - 16h50</p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-emerald-100/70">
                          Natal e Réveillon: 09h - 16h
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="bg-white/5 p-4 rounded-sm border-l-2 border-white/30">
                      <p className="text-[10px] opacity-50 uppercase font-bold">Funcionamento da loja</p>
                      <p className="mt-1 text-sm font-black">Seg - Sex: 09h - 17h</p>
                      <p className="text-sm font-black">Sáb - Dom - Feriados: 09h - 18h</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-sm border-l-2 border-cyan-300/70">
                      <p className="text-[10px] opacity-50 uppercase font-bold">Funcionamento do parque</p>
                      <p className="mt-1 text-sm font-black">Todos os dias: 05h30 - 20h00</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0a1410] aspect-video w-full outline outline-1 outline-white/10 relative overflow-hidden group">
                  <iframe
                    title="Mapa da BIKE.COM"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.433!2d-46.46!3d-23.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzQ4LjAiUyA0NsKwMjcnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                    className="h-full w-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 pointer-events-none border-[20px] border-[#0a1410] sm:border-[40px] opacity-20"></div>
                </div>

                <a href="https://maps.app.goo.gl/vS1U7hG5HjN6S3rN8" target="_blank" className="block text-center text-[10px] font-bold tracking-[0.3em] hover:text-[#ccff00] transition-colors">
                  [ ABRIR NO GPS ]
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pulse Ribbon (Ticker de Informação) */}
        <div className="bg-[#ccff00] py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-ticker gap-12">
            {[...pulseStrip, ...pulseStrip, ...pulseStrip].map((text, i) => (
              <span key={i} className="text-black text-[10px] font-black italic tracking-widest uppercase">
                ⚡{text}⚡
              </span>
            ))}
          </div>
        </div>

        {/* Seção Frota */}
        <section id="frota" className="py-24 px-6 bg-[#08120e]">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <p className="text-[#ccff00] font-bold text-xs tracking-[0.4em] mb-2">FROTA DISPONÍVEL</p>
                <h3 className="text-4xl md:text-5xl font-black italic text-white leading-none">ESCOLHA SUA BIKE!</h3>
              </div>
              <p className="text-emerald-100/40 max-w-xs text-sm italic">Valores por hora de uso. Tolerância de 10 minutos inclusa.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {fleet.map((item, i) => (
                <div key={i} className="athlete-card group p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] font-bold text-emerald-500 border border-emerald-500/30 px-2 py-0.5">0{i+1}</span>
                      <span className="text-[10px] font-bold opacity-30 italic">{getFleetTag(item.title)}</span>
                    </div>
                    <h4 className="text-2xl font-black italic text-white group-hover:text-[#ccff00] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed opacity-50 font-medium">{item.detail}</p>
                  </div>
                  <div className="mt-12 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#ccff00]">{item.price.split(' ')[1]}</span>
                    <span className="text-[10px] font-bold opacity-30">REAIS / HORA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regras e Contrato: A Parte Importante */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20">
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-black italic text-[#ccff00] mb-8">REGRAS DE LOCAÇÃO</h3>
                  <div className="space-y-6">
                    {rentalRules.map((rule, i) => (
                      <div key={i} className="flex gap-4 group">
                        <span className="text-[#ccff00] font-black italic opacity-20 group-hover:opacity-100 transition-opacity">/0{i+1}</span>
                        <p className="text-sm font-bold tracking-tight leading-snug">{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>
             
              </div>

              <div className="bg-white/[0.02] p-8 md:p-12 rounded-sm outline outline-1 outline-white/5 relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#050d0a] px-4 py-2 border border-white/10 text-[10px] font-bold tracking-widest">CONTRATO 2026</div>
                <h3 className="text-xl font-black italic text-white mb-10 uppercase">Cláusulas de Responsabilidade</h3>
                <div className="space-y-8">
                  {contractArticles.map((art, i) => (
                    <div key={i} className="relative pl-6">
                      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#ccff00] to-transparent" />
                      <p className="text-xs font-medium text-emerald-100/60 leading-relaxed uppercase tracking-wider">{art}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-12 text-[10px] font-bold opacity-20 italic">Ao alugar, o cliente declara ciência total destes termos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#020705] py-16 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xl font-black italic text-white mb-4">BIKE.CAMARGO LTDA</p>
            <p className="text-xs opacity-40 leading-relaxed">CNPJ: 22.696.838/0001-02 <br /> Mobilidade de bairro com atendimento de quem conhece o Parque do Carmo de verdade.</p>
          </div>
          <div className="space-y-4">
            <p className="text-[10px] font-bold tracking-[0.3em] text-[#ccff00]">LINKS_RÁPIDOS</p>
            <nav className="flex flex-col gap-2 text-sm font-bold">
              <a href="https://www.facebook.com/p/Bikecom-100069484750901/" className="hover:text-[#ccff00] transition-colors">FACEBOOK OFICIAL</a>
              <a href="https://www.parquedocarmo.net/" className="hover:text-[#ccff00] transition-colors">PORTAL DO PARQUE</a>
            </nav>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl text-center text-[10px] font-bold opacity-20 tracking-tighter">© 2026 BIKE.COM — ALUGUEL DE BICICLETAS</p>
        <p className="mx-auto mt-3 max-w-7xl text-center text-xs text-white/50">
          Desenvolvido por Beatriz Monteiro Vieira ·{' '}
          <a
            href="https://github.com/beamonteiro19"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-white/30 underline-offset-4 transition hover:text-[#ccff00]"
          >
            github.com/beamonteiro19
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;