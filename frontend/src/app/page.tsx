export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-8 md:px-10 md:pt-10">
      <header className="mb-12 flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--paper)]/90 px-5 py-3 backdrop-blur-md">
        <p className="display-font text-sm font-bold uppercase tracking-[0.18em]">
          Shop Via Ads
        </p>
        <a
          href="#"
          className="rounded-full border border-[var(--line)] bg-white px-4 py-1.5 text-sm font-medium transition hover:-translate-y-0.5"
        >
          Contact Sales
        </a>
      </header>

      <section className="noise relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--paper)] p-7 md:p-12">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--teal)]">
          New Ad Intelligence Stack
        </div>

        <h1 className="display-font max-w-3xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
          Turn paid clicks into predictable revenue, not vanity traffic.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
          Launch campaigns, sync product feeds, and auto-optimize landing
          funnels in one workflow. Built with Next.js 16 for speed, clarity, and
          conversion-first UX.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,107,53,0.35)] transition hover:-translate-y-0.5"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="rounded-full border border-[var(--line)] bg-white px-6 py-3 text-center text-sm font-semibold transition hover:bg-slate-50"
          >
            Watch Demo
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["+184%", "ROAS Growth"],
            ["11min", "Median setup time"],
            ["24/7", "AI budget balancing"],
          ].map(([value, label]) => (
            <article
              key={label}
              className="rounded-2xl border border-[var(--line)] bg-white p-4"
            >
              <p className="display-font text-3xl font-bold text-[var(--teal)]">
                {value}
              </p>
              <p className="mt-1 text-sm text-slate-600">{label}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
