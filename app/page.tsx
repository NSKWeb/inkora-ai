"use client";

import { useState } from "react";
import { ArrowUpRight, BookOpen, Check, Feather, FileText, Search, Sparkles, WandSparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const lengths = [
  { label: "Quick", detail: "600–900 words" },
  { label: "Standard", detail: "1,000–1,500 words" },
  { label: "Detailed", detail: "1,500–2,500 words" },
  { label: "Comprehensive", detail: "2,500–4,000 words" }
];

export default function Home() {
  const [topic, setTopic] = useState("");
  const [length, setLength] = useState("Standard");
  const [notice, setNotice] = useState("");

  function prepareBrief() {
    if (!topic.trim()) {
      setNotice("Add a topic or a few rough notes to get started.");
      return;
    }
    setNotice("Your writing brief is ready. Connect a research and AI provider to enable article generation.");
  }

  return (
    <main className="min-h-screen">
      <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] transition-colors duration-300">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#" className="flex items-center gap-3" aria-label="Inkora AI home">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--mocha)] text-[var(--cream)]">
              <Feather size={19} strokeWidth={1.6} />
            </span>
            <span>
              <span className="block font-editorial text-xl tracking-tight">inkora<span className="text-[var(--clay)]">.</span></span>
              <span className="block text-[9px] uppercase tracking-[0.24em] text-[var(--muted)]">Research · Write · Publish</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            <a href="#workflow" className="transition hover:text-[var(--ink)]">Workflow</a>
            <a href="#workspace" className="transition hover:text-[var(--ink)]">Workspace</a>
            <a href="https://github.com/NSKWeb/inkora-ai" target="_blank" rel="noreferrer" className="transition hover:text-[var(--ink)]">GitHub <ArrowUpRight className="inline" size={13} /></a>
          </nav>
          <ThemeToggle />
        </header>

        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--cream)] px-4 py-2 text-xs tracking-wide text-[var(--muted)]">
              <Sparkles size={13} className="text-[var(--clay)]" /> A calmer way to create meaningful content
            </div>
            <h1 className="max-w-2xl font-editorial text-5xl leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Good ideas deserve <em className="font-normal text-[var(--clay)]">better</em> writing.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              From a passing thought to a carefully researched article. Bring your ideas to Inkora and shape them into something worth reading.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#workspace" className="inline-flex items-center gap-3 rounded-full bg-[var(--mocha)] px-6 py-3.5 text-sm font-medium text-[var(--cream)] shadow-paper transition hover:-translate-y-0.5">
                Start with an idea <ArrowUpRight size={16} />
              </a>
              <span className="text-xs text-[var(--muted)]">Your words. Your direction. Your voice.</span>
            </div>
            <div className="mt-14 flex items-center gap-8 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-2"><Search size={14} /> Research-led</span>
              <span className="flex items-center gap-2"><BookOpen size={14} /> Long-form</span>
              <span className="flex items-center gap-2"><Feather size={14} /> Human-guided</span>
            </div>
          </div>

          <div id="workspace" className="paper-card relative rounded-[2rem] border border-[var(--line)] bg-[var(--cream)] p-5 shadow-paper sm:p-8">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--clay)]">Your writing desk</p>
                <h2 className="mt-2 font-editorial text-3xl">Begin with a thought.</h2>
                <p className="mt-2 text-sm text-[var(--muted)]">A topic, a paragraph, or a messy first draft.</p>
              </div>
              <span className="rounded-full bg-[var(--paper)] p-3 text-[var(--clay)]"><WandSparkles size={19} /></span>
            </div>
            <label htmlFor="topic" className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">What would you like to write about?</label>
            <textarea id="topic" value={topic} onChange={(e) => { setTopic(e.target.value); setNotice(""); }} placeholder="e.g. A practical guide to building a timeless capsule wardrobe..." className="main-input min-h-44 w-full resize-y rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5 text-sm leading-7 outline-none transition placeholder:text-[#75685e] focus:border-[var(--clay)] focus:ring-4 focus:ring-[var(--clay)]/10" />
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Article length</label>
                <span className="text-xs text-[var(--muted)]">Choose your depth</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {lengths.map((item) => (
                  <button key={item.label} onClick={() => setLength(item.label)} className={`rounded-xl border p-3 text-left transition ${length === item.label ? "border-[var(--clay)] bg-[var(--clay)]/10" : "border-[var(--line)] hover:border-[var(--clay)]/60"}`}>
                    <span className="flex items-center justify-between text-sm font-medium">{item.label}{length === item.label && <Check size={14} className="text-[var(--clay)]" />}</span>
                    <span className="mt-1 block text-xs text-[var(--muted)]">{item.detail}</span>
                  </button>
                ))}
              </div>
            </div>
            <button onClick={prepareBrief} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--mocha)] px-5 py-4 text-sm font-medium text-[var(--cream)] transition hover:-translate-y-0.5">
              Prepare my writing brief <ArrowUpRight size={16} />
            </button>
            {notice && <p role="status" className="mt-4 rounded-xl bg-[var(--paper)] px-4 py-3 text-xs leading-6 text-[var(--muted)]">{notice}</p>}
            <p className="mt-4 text-center text-[11px] text-[var(--muted)]">This starter workspace does not generate AI content yet.</p>
          </div>
        </section>

        <section id="workflow" className="soft-panel border-y border-[var(--line)] bg-[#eee6da] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--clay)]">A thoughtful process</p>
              <h2 className="mt-3 font-editorial text-4xl tracking-tight sm:text-5xl">From first thought to final draft.</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">A clear, human-guided workflow that keeps research, structure and writing connected.</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                { n: "01", icon: Search, title: "Research with context", body: "Gather useful sources and understand the subject before drafting." },
                { n: "02", icon: FileText, title: "Write with intention", body: "Shape a clear outline and develop each section with purpose." },
                { n: "03", icon: BookOpen, title: "Publish with care", body: "Review, refine and prepare your article for the right destination." }
              ].map((item) => {
                const Icon = item.icon;
                return <article key={item.n} className="paper-card rounded-3xl border border-[var(--line)] bg-[var(--cream)] p-7">
                  <div className="flex items-center justify-between"><span className="font-editorial text-2xl text-[var(--clay)]">{item.n}</span><Icon size={20} className="text-[var(--clay)]" /></div>
                  <h3 className="mt-8 font-editorial text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
                </article>;
              })}
            </div>
          </div>
        </section>

        <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} Inkora AI. Made for ideas worth developing.</span>
          <span className="font-editorial text-base italic">Research. Write. Publish.</span>
        </footer>
      </div>
    </main>
  );
}
