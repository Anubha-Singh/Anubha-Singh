import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteChrome";
import { caseStudies } from "@/data/caseStudies";

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

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anubha-singh-310879148/" },
  { label: "GitHub", href: "https://github.com/Anubha-Singh" },
  { label: "Kaggle", href: "https://www.kaggle.com/cerolacia" },
  { label: "Medium", href: "https://medium.com/@anubhabit687" },
  { label: "Email", href: "mailto:anubhabit687@gmail.com" },
];

const experience = [
  {
    org: "Classplus",
    role: "Associate Product Manager — Postly",
    period: "May 2026 – Jul 2026",
  },
  {
    org: "KPN Fresh",
    role: "Associate Product Manager — Subscriptions, Promotions & CX Automation",
    period: "Feb 2024 – Apr 2026",
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

const workSamples = [
  {
    title: "CMS — Banners",
    note: "Centralized CMS that cut release TAT from days to minutes.",
    href: "https://docs.google.com/presentation/d/1g73hz4a9bySwNpYzwrlINu-Sl0smvIY5/edit?usp=sharing&ouid=114924555015695209001&rtpof=true&sd=true",
  },
  {
    title: "POS Gap Analysis",
    note: "30+ gaps identified to shape the POS 2.0 roadmap.",
    href: "https://docs.google.com/presentation/d/1_PHTe62otXeZ-fqPo3bQLQoc7HF7J0bX/edit?usp=sharing&ouid=103117566921272872624&rtpof=true&sd=true",
  },
  {
    title: "Loyalty — Tier-Based B2P Program",
    note: "Designed for 15K+ partners with 16–22% returns.",
    href: "https://docs.google.com/presentation/d/1Qpb8hU0vGzrsFdX2Y0qyT7q3LYQ3ycUv/edit?usp=sharing&ouid=114924555015695209001&rtpof=true&sd=true",
  },
  {
    title: "Chatbot Flow",
    note: "Issue-resolution chatbot flows evaluated across the order lifecycle.",
    href: "https://docs.google.com/presentation/d/123MKN5ajBoX7lEWXsZTO-SZue58pCvLA/edit?usp=sharing&ouid=103117566921272872624&rtpof=true&sd=true",
  },
];

function Index() {
  return (
    <Page>
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
          <p className="eyebrow">Product Manager · Platform & Growth</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] text-ink sm:text-6xl">
            I build scalable product systems that balance growth, user experience and financial
            control.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I moved into product because I enjoyed understanding why systems break, how decisions
            scale and where users feel the impact when things go wrong. Through my work on growth,
            quality and platform problems at Urban Company, and later owning 0→1 systems like promo
            engines and self-serve refund automation, I've consistently worked on products that sit
            on critical paths and require strong data, strategy and engineering trade-offs. Today
            I'm focused on growing as a product builder in a product-first tech company and solving
            problems that create meaningful impact at scale.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="work"
              className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View case studies
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

        <section id="work" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Selected case studies</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            Real products I've shipped — focused on impact, trade-offs and execution.
          </h2>

          <div className="mt-12 grid gap-4">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                to="/work/$slug"
                params={{ slug: c.slug }}
                className="group grid gap-6 rounded border border-border bg-card px-6 py-8 transition-colors hover:bg-secondary sm:grid-cols-[1fr_auto] sm:items-end"
              >
                <div>
                  <p className="eyebrow">
                    {c.org} · {c.role}
                  </p>
                  <h3 className="mt-2 text-2xl text-ink group-hover:text-primary">{c.title}</h3>
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
                <div className="sm:text-right">
                  <p className="font-display text-3xl text-primary">{c.metrics[0]?.value}</p>
                  <p className="text-xs text-muted-foreground">{c.metrics[0]?.label}</p>

                </div>
              </Link>
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

        <section className="rule-top mx-auto max-w-5xl px-6 py-16">
          <p className="eyebrow">Work samples</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {workSamples.map((w) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-border bg-card px-6 py-6 transition-colors hover:bg-secondary"
              >
                <h3 className="text-lg text-ink">{w.title} ↗</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.note}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Page>
  );
}
