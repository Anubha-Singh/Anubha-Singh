import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteChrome";
import { SlideDeckViewer } from "@/components/SlideDeckViewer";
import { socialIconMap } from "@/components/SocialIcons";
import { independentProjects, workCaseStudies } from "@/data/caseStudies";
import portraitUrl from "@/assets/anubha-portrait.png";
import resumeUrl from "@/assets/Anubha_Singh_Resume.pdf";


const TITLE = "Anubha Singh — Product Manager | Platform & Growth Systems";
const DESC =
  "Product manager building scalable product systems across promotions, refunds and AR commerce — balancing growth, user experience and financial control.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const recommendations = [
  {
    name: "Anupama Menon",
    title: "Product Manager at Adeyn · earlier Senior Product Manager at KPN Fresh",
    meta: "Anupama managed Anubha directly",
    quote: [
      "Anubha approaches every challenge with curiosity and a strong sense of ownership, conducting thorough research, studying industry products closely, and producing well-structured PRDs and wireframes. She takes feedback graciously and iterates quickly, which means her output keeps getting sharper. She also builds genuine rapport with both engineering and business teams, making cross-functional work smooth and collaborative. On the execution side, she has consistently been punctual and proactive in her communication, and has successfully launched multiple product initiatives. She's a fast learner with strong ownership instincts, and any team would be lucky to have her.",
    ],
  },
  {
    name: "Shubham Kumar",
    title: "Strategy @ D. E. Shaw",
    meta: "May 16, 2022 · Shubham managed Anubha directly",
    quote: [
      "Anubha is an excellent team member and one of the most hardworking associates I had the opportunity to work with. Her ability to deep dive, understand and solve problems using first principles is commendable and she proved to be an immense asset in Chefs category growth",
    ],
  },
  {
    name: "Siddhartha Agarwal",
    title:
      "Building OFF/BEAT | ISB Co'24 (Torchbearer Awardee, Merit Scholar) | Prev: House of Masaba (ABFRL), Urban Company",
    meta: "April 12, 2022 · Siddhartha managed Anubha directly",
    quote: [
      "Anubha worked with in capacity of a colleague at Urban Company.",
      "We launched the personal chefs category together at UC and Anubha displayed exemplary dedication. She left no stone unturned in making the category a success: from cold-calling customers for trials, to making SQL queries for the team, to handling customer/partner grievances and brainstorming new expansion ideas, she did it all.",
      "She's an asset to every team she's a part of.",
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anubha-singh-310879148/" },
  { label: "GitHub", href: "https://github.com/Anubha-Singh" },
  { label: "YouTube", href: "https://youtube.com/@gritgrid-4u?si=U3M_U6rPdTWWtfXK" },
  { label: "Kaggle", href: "https://www.kaggle.com/cerolacia" },
  { label: "Medium", href: "https://medium.com/@anubhabit687" },
  { label: "Email", href: "mailto:anubhabit687@gmail.com" },
];

const experience = [
  {
    org: "KPN Fresh",
    role: "Associate Product Manager — Subscriptions, Promotions & CX Automation",
    period: "Feb 2024 – Present",
  },
  {
    org: "Quleep",
    role: "Product Manager — ARNxt (AR Commerce)",
    period: "Jan 2023 – Jul 2023",
  },
  {
    org: "Siemens Ltd",
    role: "PMO Professional — Mobility",
    period: "May 2022 – Nov 2022",
  },
  {
    org: "Urban Company",
    role: "Category Growth Associate",
    period: "Jul 2021 – Apr 2022",
  },
];

const internships = [
  {
    org: "Urban Company",
    role: "Category Management Intern",
    points: [
      "Launched the Personal Chefs category in one month; projected annual run rate of ~₹24 Cr (FY 2021-22).",
      "Beta-tested the service across 45+ targeted households in Bangalore.",
      "Analysed 22 lakh+ user records in SQL via Jarvis (Redash + Snowflake) to project demand and revenue for Delhi-NCR and Bangalore.",
      "Led trial fulfilment operations as Area Manager across 13 hubs in Bangalore.",
    ],
  },
  {
    org: "Richfeyn",
    role: "Product Management",
    points: [
      "Spearheaded product roadmap development, customer value proposition mapping and user flow design.",
      "Led user research including survey design and platform selection, collaborating on feature prioritisation and investor pitch decks.",
      "Contributed to PM intern recruitment and led the intern team.",
    ],
  },
  {
    org: "Diginique Tech Labs",
    role: "ML & Data Analytics Intern",
    points: [],
  },
];


interface SkillPillar {
  title: string;
  summary: string;
  skills: string[];
}

const skillPillars: SkillPillar[] = [
  {
    title: "Platform & Rails",
    summary: "High-integrity financial & operational systems.",
    skills: [
      "Promo & Rule Engines",
      "Payment & Refund Rails",
      "POS & ERP Integrations",
      "State Machine Architecture",
    ],
  },
  {
    title: "Data & Forecasting",
    summary: "Bridging statistical models with on-the-ground ops.",
    skills: [
      "Demand Forecasting ML",
      "Replenishment Algorithms",
      "Unit Economics & Funnels",
      "SQL (BigQuery) & Analytics",
    ],
  },
  {
    title: "0→1 Product Craft",
    summary: "Turning ambiguity into functional, shipped product.",
    skills: [
      "0→1 MVP Scoping & Launch",
      "PRDs & State Machine Specs",
      "AI Prototyping & Evals",
      "Cross-System UX & GTM",
    ],
  },
];

function Index() {
  return (
    <Page>
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
          <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow">Product Professional · Platform & Growth</p>
              <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-ink sm:text-6xl">
                I build scalable product systems that balance growth, user experience and financial
                control.
              </h1>
            </div>
            <img
              src={portraitUrl}
              alt="Portrait of Anubha Singh"
              className="h-44 w-44 shrink-0 rounded-full border border-border object-cover object-top shadow-sm sm:h-56 sm:w-56"
            />
          </div>
          <p className="mt-7 max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground text-left sm:text-justify [text-justify:inter-word] [hyphens:auto]">
            As a Product Manager, I operate where complex systems must be accurate every time from shipping probabilistic ML models for demand forecasting and inventory replenishment, to architecting promo engines and automated payment/refund rails. I thrive in navigating ambiguous constraints, bridging data science and engineering with on-the-ground operations, and owning 0→1 products from concept to scale. Having delivered mission-critical products at KPN Fresh and Quleep, I’m looking to bring deep system ownership and builder rigor to a high-impact, product-first team.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
                aria-label={link.label}
              >
                {socialIconMap[link.label]}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              download="Anubha_Singh.pdf"
              className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              aria-label="Download resume (PDF)"
            >
              Resume ↓
            </a>
            <Link
              to="/"
              hash="independent-projects"
              className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-secondary"
            >
              Independent Projects
            </Link>
            <Link
              to="/"
              hash="work"
              className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-secondary"
            >
              Case Studies
            </Link>
            <Link
              to="/"
              hash="experience"
              className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-secondary"
            >
              Experience
            </Link>
          </div>
        </section>

        <section id="skills" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Skills & expertise</p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Systems & Product Craft
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Core domains of technical ownership across platform architecture, quantitative modeling, and 0→1 execution.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {skillPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded border border-border bg-card px-6 py-6 transition-colors hover:bg-secondary flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.summary}
                  </p>
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <ul className="space-y-2 text-sm">
                    {pillar.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                        <span className="text-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Certifications</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance" },
              { name: "Artificial Intelligence for Product Owners (AIPO)", issuer: "Scrum Alliance" },
              { name: "MTA — Introduction to Programming Using Python", issuer: "Microsoft" },
            ].map((cert) => (
              <div
                key={cert.name}
                className="rounded border border-border bg-card px-6 py-6 transition-colors hover:bg-secondary"
              >
                <h3 className="text-lg leading-snug text-ink">{cert.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="independent-projects" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Independent Projects · 0→1 Products</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            Products I've built & launched independently.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            End-to-end applications conceptualized, scoped, engineered, and shipped live to address real market problems.
          </p>

          <div className="mt-10 grid gap-4">
            {independentProjects.map((c) => (
              <div
                key={c.slug}
                className="group relative grid gap-6 rounded border border-border bg-card px-6 py-8 transition-colors hover:bg-secondary sm:grid-cols-[1fr_auto] sm:items-end"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="eyebrow">
                      {c.org} · {c.role}
                    </p>
                    {c.link && (
                      <a
                        href={c.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Live App ↗
                      </a>
                    )}
                  </div>
                  <h3 className="mt-2 text-2xl text-ink">
                    <Link
                      to="/work/$slug"
                      params={{ slug: c.slug }}
                      className="transition-colors hover:text-primary focus:outline-none"
                    >
                      {c.title}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {c.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:items-end sm:text-right">
                  <div>
                    <p className="font-display text-3xl text-primary">{c.metrics[0]?.value}</p>
                    <p className="text-xs text-muted-foreground">{c.metrics[0]?.label}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {c.link && (
                      <a
                        href={c.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                      >
                        {c.link.label} ↗
                      </a>
                    )}
                    <Link
                      to="/work/$slug"
                      params={{ slug: c.slug }}
                      className="text-xs font-medium text-muted-foreground transition-colors hover:text-ink"
                    >
                      Case study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Full-Time Deliverables · Case Studies</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            Platform & growth systems shipped in full-time roles.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Core platform capabilities, checkout guardrails, and customer systems delivered at KPN Fresh, IBO and Quleep.
          </p>

          {/* Interactive Slide Deck Viewer */}
          <div id="deck-viewer" className="mt-8 scroll-mt-20">
            <SlideDeckViewer />
          </div>

          <div className="mt-12 grid gap-4">
            {workCaseStudies.map((c) => (
              <div
                key={c.slug}
                className="group relative grid gap-6 rounded border border-border bg-card px-6 py-8 transition-colors hover:bg-secondary sm:grid-cols-[1fr_auto] sm:items-end"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="eyebrow">
                      {c.org} · {c.role}
                    </p>
                    {(c.slug === "pos-gap-analysis" || c.slug === "loyalty-program") ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        Slide Deck Included
                      </span>
                    ) : c.link ? (
                      <a
                        href={c.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Live App ↗
                      </a>
                    ) : null}
                  </div>
                  <h3 className="mt-2 text-2xl text-ink">
                    <Link
                      to="/work/$slug"
                      params={{ slug: c.slug }}
                      className="transition-colors hover:text-primary focus:outline-none"
                    >
                      {c.title}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {c.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:items-end sm:text-right">
                  <div>
                    <p className="font-display text-3xl text-primary">{c.metrics[0]?.value}</p>
                    <p className="text-xs text-muted-foreground">{c.metrics[0]?.label}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {(c.slug === "pos-gap-analysis" || c.slug === "loyalty-program") ? (
                      <a
                        href="#deck-viewer"
                        className="text-xs font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                      >
                        View in slide player ↑
                      </a>
                    ) : c.link ? (
                      <a
                        href={c.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                      >
                        {c.link.label} ↗
                      </a>
                    ) : null}
                    <Link
                      to="/work/$slug"
                      params={{ slug: c.slug }}
                      className="text-xs font-medium text-muted-foreground transition-colors hover:text-ink"
                    >
                      Case study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Where I've worked full-time.</h2>
          <div className="mt-10 grid gap-6">
            {experience.map((e) => (
              <div
                key={e.org}
                className="grid gap-1 rounded border border-border bg-card px-6 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <div>
                  <h3 className="text-xl text-ink">{e.org}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                </div>
                <p className="eyebrow sm:text-right">{e.period}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="internships" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Internships</p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Where I learned to ship.</h2>
          <div className="mt-10 grid gap-10">
            {internships.map((i) => (
              <div key={i.org} className="rounded border border-border bg-card px-6 py-6">
                <div className="grid gap-1 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-4">
                  <h3 className="text-xl text-ink">{i.org}</h3>
                  <p className="eyebrow">{i.role}</p>
                </div>
                {i.points.length > 0 && (
                  <ul className="mt-4 grid gap-3">
                    {i.points.map((p) => (
                      <li
                        key={p}
                        className="border-l border-border pl-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>


        <section id="recommendations" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Recommendations</p>
          <div className="mt-10 grid gap-8">
            {recommendations.map((r) => (
              <figure key={r.name} className="rounded border border-border bg-card px-6 py-6">
                <blockquote className="recommendation-quote grid gap-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {r.quote.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-ink">{r.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.title}</p>
                  <p className="eyebrow mt-2">{r.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </Page>
  );
}
