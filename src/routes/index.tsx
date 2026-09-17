import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteChrome";
import { socialIconMap } from "@/components/SocialIcons";
import { caseStudies } from "@/data/caseStudies";
import portraitAsset from "@/assets/anubha-portrait.jpg.asset.json";


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

const skillCategories = [
  {
    title: "Product",
    skills: [
      "Product Strategy",
      "Product Discovery",
      "0→1 Product Development",
      "PRDs & Roadmaps",
      "Prioritization",
      "Experimentation",
      "Product Analytics",
      "Stakeholder Management",
    ],
  },
  {
    title: "Data",
    skills: [
      "SQL",
      "MS Excel",
      "BigQuery",
      "Looker",
      "Tableau",
      "Power BI",
      "CleverTap",
      "Mixpanel",
      "Funnel & Cohort Analysis",
      "A/B Testing",
      "Product Metrics",
    ],
  },
  {
    title: "Technical",
    skills: [
      "APIs & Webhooks",
      "Payment Systems",
      "Event-driven Systems",
      "Postman",
      "Figma",
    ],
  },
  {
    title: "AI / Builder",
    skills: [
      "LLM Product Design",
      "AI Evals",
      "AI-assisted Prototyping",
      "Lovable",
      "Cursor / Claude Code",
      "Rapid MVP Development",
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
              src={portraitAsset.url}
              alt="Portrait of Anubha Singh"
              className="h-44 w-44 shrink-0 rounded-full border border-border object-cover object-top shadow-sm sm:h-56 sm:w-56"
            />
          </div>
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
                className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
                aria-label={link.label}
              >
                {socialIconMap[link.label]}
                <span>{link.label}</span>
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

        <section id="skills" className="rule-top mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
          <p className="eyebrow">Skills & expertise</p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            The toolkit behind every product decision.
          </h2>
          <div className="mt-12 flex flex-col gap-10 sm:gap-12">
            {skillCategories.map((category, i) => (
              <div key={category.title}>
                <div className="mb-4 flex items-baseline justify-between border-b border-border pb-2">
                  <h3 className="font-display text-2xl text-ink">{category.title}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-sm leading-relaxed text-muted-foreground">
                  {category.skills.map((skill, j) => (
                    <span key={skill} className="inline-flex items-baseline gap-4">
                      <span>{skill}</span>
                      {j < category.skills.length - 1 && (
                        <span className="text-primary/40">•</span>
                      )}
                    </span>
                  ))}
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
