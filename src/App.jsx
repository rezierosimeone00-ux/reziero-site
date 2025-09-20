import { motion } from "framer-motion";
import * as React from "react";
import {
  Mail,
  FileText,
  Rocket,
  Layers,
  Cog,
  TrendingUp,
  Users,
  GraduationCap,
  CheckCircle2,
  Calendar
} from "lucide-react";

const Anchor = ({ id }) => (
  <span id={id} className="relative -top-24 block" />
);

const SectionDivider = () => (
  <div aria-hidden className="mx-auto my-4 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
);

export default function RezieroSimeoneSite() {
  const sections = [
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "services", label: "Fractional Roles" },
    { id: "industries", label: "Industries" },
    { id: "achievements", label: "Achievements" },
    { id: "cases", label: "Case Studies" },
    { id: "working", label: "Working Together" },
    { id: "contact", label: "Contact" }
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
            <a
              href="https://calendly.com/reziero-simeone00/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-teal-400/90 px-4 py-2 font-medium text-neutral-900 hover:bg-teal-300 transition-colors"
            >
              <Calendar className="h-4 w-4" /> Book a Call
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
            <a href="https://calendly.com/reziero-simeone00/new-meeting" target="_blank" rel="noreferrer" className="rounded-2xl border border-neutral-700 px-5 py-2.5 text-sm font-semibold hover:border-neutral-500 transition-colors inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Book Advisor Session
            </a>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

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

      <SectionDivider />

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

      <SectionDivider />

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

      <SectionDivider />

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
              "Facilitated smooth generational handovers for family businesses, aligning continuity with modernization."
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-400" /><span>{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* Case Studies */}
      <section className="border-t border-neutral-900">
        <Anchor id="cases" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Case Studies</h2>
          <p className="mt-4 text-neutral-300">A selection of scenario-based engagements with approach and results.</p>

          <div className="mt-8 space-y-6">
            <CaseStudyCard
              title="Market Penetration & Development"
              scenario="A young fashion start-up had an innovative product but struggled to move beyond the early stage of local sales. The brand identity was not yet defined and there was no structured growth strategy in place."
              approach="As founder, I led the journey from concept to a recognizable brand. I developed a scalable go-to-market model, built brand positioning, organized participation in key industry events (Milan & New York Fashion Week), and established a commercial network through showrooms and international distribution channels."
              result="Within a few years, the start-up achieved global visibility with 400+ active clients across boutiques and retailers. After my exit as founder, I continued to provide strategic guidance as an external consultant to support growth and consolidation."
            />

            <CaseStudyCard
              title="Startup Formation & Investor Readiness"
              scenario="An early-stage start-up had a promising concept but lacked structure, investor-facing materials, and a financial narrative strong enough to attract external funding."
              approach="I worked hands-on from the earliest stages: shaping the business model, validating the value proposition, and overseeing the transition from concept to MVP. In parallel, I prepared investor-ready financials, designed a compelling deck, and coached founders through due diligence and negotiation."
              result="The start-up moved from idea stage to MVP and secured its first round of investment with the right financial and governance structures in place. I remained as strategic advisor for scaling and future raises."
            />

            <CaseStudyCard
              title="Operations, Supply Chain & Process Optimization"
              scenario="A mid-sized company faced rising operating costs, procurement inefficiencies, and delivery delays. Processes were fragmented and the supply chain lacked transparency and resilience."
              approach="I conducted a full operational assessment, mapped bottlenecks, and introduced lean practices and digital integration. I streamlined procurement, renegotiated supplier agreements, and implemented technology to improve visibility and team coordination."
              result="The company achieved measurable cost reduction, faster turnaround times, and improved supplier reliability, creating a scalable foundation for growth and international expansion."
            />

            <CaseStudyCard
              title="Governance, Compliance & Transaction Support"
              scenario="A family-owned company was preparing for a strategic transaction with a larger partner, but governance and reporting were not aligned with investor and regulatory requirements."
              approach="I reclassified the balance sheet, standardized compliance processes, aligned financial disclosures, coordinated legal and tax advisors, and introduced governance practices to ensure transparency and accountability."
              result="The transaction closed successfully with a smooth due diligence process and no regulatory setbacks. The company emerged with stronger governance and clearer financial structures."
            />

            <CaseStudyCard
              title="Strategic Partnerships & PPPs"
              scenario="A group of SMEs wanted to accelerate innovation but lacked resources and positioning to do so individually."
              approach="I structured a partnership model uniting complementary businesses, academic stakeholders, and public institutions. I designed governance, coordinated grant applications, and aligned strategic objectives with program management for measurable progress."
              result="The consortium secured significant funding and launched a joint innovation program, unlocking resources and creating long-term collaboration channels for future growth and new markets."
            />

            <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/30">
              <h3 className="font-semibold text-teal-300">Quick Wins & Short-Term Projects</h3>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-neutral-300">
                <li><strong>Contract Review & Negotiation:</strong> rapid review, clear implications, and adjustments that improved pricing and flexibility.</li>
                <li><strong>Cost Control Check-Up:</strong> short engagement to analyze expenses, highlight waste, and introduce a simple tracking tool.</li>
                <li><strong>Sales Process Tune-Up:</strong> streamlined pipeline and tracking system leading to faster responses and better close rates.</li>
                <li><strong>Team Workflow Adjustment:</strong> workshop to realign responsibilities and routines for better coordination without new hires.</li>
                <li><strong>Market Opportunity Scan:</strong> concise analysis of competitors, expectations, and demand to enable a clear go/no-go decision.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Working Together */}
      <section className="border-t border-neutral-900">
        <Anchor id="working" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Working Together</h2>
          <p className="mt-5 text-neutral-300 leading-relaxed max-w-4xl">
            I adapt to the size, stage, and goals of each company. Sometimes this means stepping in temporarily as a COO, CFO, or strategic advisor. Other times it means supporting a startup through brainstorming, proof-of-concept, and investor readiness. For established businesses, it can involve guiding market penetration, improving processes, or preparing for growth and consolidation. For family businesses, I provide discreet support during generational handovers to ensure continuity and innovation.
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
              <a href="https://calendly.com/reziero-simeone00/30min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500 transition-colors"><Calendar className="h-5 w-5" /> Book 30-min Intro</a>
              <a href="https://calendly.com/reziero-simeone00/new-meeting" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500 transition-colors"><Calendar className="h-5 w-5" /> Book Advisor Session</a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500 transition-colors"><FileText className="h-5 w-5" /> Read Profile</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Reziero Simeone</span>
          <span>Built with focus on real outcomes</span>
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

function CaseStudyCard({ title, scenario, approach, result }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-3xl border border-neutral-800 p-6 bg-neutral-900/30">
      <button onClick={() => setOpen((v) => !v)} className="w-full text-left flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-teal-400" />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <span className="text-sm text-neutral-400">{open ? "Hide" : "Read"}</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="mt-4 space-y-3 text-neutral-300">
            <p><span className="text-neutral-400">Scenario:</span> {scenario}</p>
            <p><span className="text-neutral-400">Approach:</span> {approach}</p>
            <p><span className="text-neutral-400">Result:</span> {result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
