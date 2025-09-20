
import { motion } from "framer-motion";
import { Mail, FileText, Briefcase, Rocket, Layers, Cog, TrendingUp, Users, GraduationCap, Globe2, CheckCircle2 } from "lucide-react";
import * as React from "react";

const Anchor = ({ id }) => <span id={id} className="relative -top-24 block" />;

export default function RezieroSimeoneSite() {
  const sections = [
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "services", label: "Fractional Roles" },
    { id: "industries", label: "Industries" },
    { id: "achievements", label: "Achievements" },
    { id: "working", label: "Working Together" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-teal-300 selection:text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-teal-400/90" />
            <span className="font-semibold tracking-tight">Reziero Simeone</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-neutral-300 hover:text-white transition-colors">
                {s.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-teal-400/90 px-4 py-2 font-medium text-neutral-900 hover:bg-teal-300 transition-colors">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(45,212,191,0.12),rgba(0,0,0,0)_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-semibold tracking-tight">
            Fractional Executive & Strategic Advisor
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 max-w-2xl text-neutral-300">
            Driving Growth, Market Development & Business Transformation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#expertise" className="rounded-2xl bg-white text-neutral-900 px-5 py-2.5 text-sm font-semibold hover:shadow-lg transition-shadow">Explore Expertise</a>
            <a href="#contact" className="rounded-2xl border border-neutral-700 px-5 py-2.5 text-sm font-semibold hover:border-neutral-500 transition-colors">Get in Touch</a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-neutral-900">
        <Anchor id="about" />
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-5 text-neutral-300 leading-relaxed">
            I am an entrepreneurial executive with more than thirty years of experience helping companies grow, transform, and establish themselves in competitive markets across Europe and North America. I have been involved in projects of every size, from the first steps of startups to the consolidation of SMEs and the development of larger businesses. My approach combines creative brainstorming with pragmatic action: I work with aspiring entrepreneurs to shape early ideas into viable concepts and with management teams to translate those concepts into strategies that achieve measurable results.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-neutral-900">
        <Anchor id="expertise" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Core Expertise</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card icon={<TrendingUp className="h-5 w-5" />} title="Market Penetration & Development">
              I guide organizations through market entry, consolidation, and sustainable growth, aligning go-to-market strategy, branding, and sales execution.
            </Card>
            <Card icon={<Rocket className="h-5 w-5" />} title="Startup Formation & Investor Readiness">
              From brainstorming to proof-of-concept and MVP, I prepare founders for fundraising with compelling pitches and a solid financial narrative.
            </Card>
            <Card icon={<Cog className="h-5 w-5" />} title="Operations, Supply Chain & Process Optimization">
              Practical improvements across operations, supply chain, procurement, HRTech platforms, automation and robotics integration.
            </Card>
            <Card icon={<Layers className="h-5 w-5" />} title="Governance, Compliance & Transaction Support">
              Balance sheet reclassification, due diligence and M&A advisory, ensuring innovation and growth rest on solid foundations.
            </Card>
            <Card icon={<Users className="h-5 w-5" />} title="Strategic Partnerships & PPPs">
              Venture funding and grant management, public–private partnerships and program management for growth initiatives.
            </Card>
            <Card icon={<GraduationCap className="h-5 w-5" />} title="Mentorship">
              Guidance for founders, executives and family businesses, including discreet support through the passaggio generazionale.
            </Card>
          </div>
        </div>
      </section>

      {/* Fractional Roles & Services */}
      <section className="border-t border-neutral-900">
        <Anchor id="services" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Fractional Roles & Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <RoleCard icon={<Briefcase className="h-5 w-5" />} title="Fractional COO">
              Strengthening operations, processes and scaling; supply chain and procurement; digital operations.
            </RoleCard>
            <RoleCard icon={<FileText className="h-5 w-5" />} title="Fractional CFO">
              Funding strategy, investor readiness, financial analysis and transactions; M&A support.
            </RoleCard>
            <RoleCard icon={<Globe2 className="h-5 w-5" />} title="Strategic Advisor">
              Market strategy, business model design, branding & sales enablement; growth programs and consolidation.
            </RoleCard>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-neutral-900">
        <Anchor id="industries" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Industry Background</h2>
        <p className="mt-5 text-neutral-300 leading-relaxed max-w-4xl">
            Experience across SaaS, HRTech, compliance solutions, industrial manufacturing and robotics, consumer goods, food & beverage, and international trade & sourcing. This diversity enables pragmatic, cross-pollinated solutions.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-t border-neutral-900">
        <Anchor id="achievements" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Achievements</h2>
          <ul className="mt-6 space-y-4 text-neutral-300">
            {[
              "Helped startups shape ideas, build MVPs and prepare for investment.",
              "Supported SMEs in strengthening operations, adopting new technologies (including AI & robotics) and consolidating markets.",
              "Guided fundraising processes with pitch preparation and investor engagement.",
              "Led market development initiatives across Europe and North America, integrating branding, sales strategies and client acquisition.",
              "Facilitated smooth passaggi generazionali for family businesses, aligning continuity with modernization.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-400" /><span>{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Working Together */}
      <section className="border-t border-neutral-900">
        <Anchor id="working" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Working Together</h2>
          <p className="mt-5 text-neutral-300 leading-relaxed max-w-4xl">
            I adapt to the size, stage and goals of each company. Sometimes this means stepping in temporarily as a COO, CFO or strategic advisor. Other times it means supporting a startup through brainstorming, proof-of-concept and investor readiness. For established businesses, it can involve guiding market penetration, improving processes or preparing for growth and consolidation. For family businesses, I provide discreet support during generational handovers to ensure continuity and innovation.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-neutral-900">
        <Anchor id="contact" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-neutral-800 p-8 md:p-10 bg-neutral-900/30">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Get in Touch</h2>
            <p className="mt-4 text-neutral-300">I am currently available for new fractional executive and advisory engagements.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:reziero.simeone00@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-teal-400/90 px-5 py-3 font-semibold text-neutral-900 hover:bg-teal-300 transition-colors"><Mail className="h-5 w-5" /> reziero.simeone00@gmail.com</a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500 transition-colors"><FileText className="h-5 w-5" /> Read Profile</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Reziero Simeone</span>
          <span>Built with AI-assisted craftsmanship</span>
        </div>
      </footer>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/30">
      <div className="flex items-center gap-3 text-teal-300">{icon}<span className="font-semibold">{title}</span></div>
      <p className="mt-3 text-neutral-300 leading-relaxed">{children}</p>
    </div>
  );
}

function RoleCard({ icon, title, children }) {
  return (
    <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/30">
      <div className="flex items-center gap-3 text-teal-300">{icon}<span className="font-semibold">{title}</span></div>
      <p className="mt-3 text-neutral-300 leading-relaxed">{children}</p>
    </div>
  );
}
