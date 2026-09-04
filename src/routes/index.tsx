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

const alsoWorking = [
  {
    title: "TrustRent — Escrow-Based Rental Transaction Platform",
    note: "Founder / Product Manager · independent product build (WIP)",
  },
  {
    title: "Chatbots as a generic issue-resolution layer",
    note: "Evaluated across the order lifecycle and deliberately chose not to ship them.",
  },
  {
    title: "Improving Experience for Non-Native Users",
    note: "PM Fellowship · Top PM Fellow",
    href: "https://drive.google.com/file/d/10OU6CjcebIYX1X6m954bYrSjb74HE9kc/view?usp=sharing",
  },
  {
    title: "SIH19 Solution Proposal",
    note: "Shortlisted among 900 of 37,000+ ideas · Top 4 of 900",
  },
  {
    title: "Learn In Public Challenge — Winner",
    note: "Product teardowns and certifications",
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
          <div className="mt-9 flex flex-wrap gap-3">
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

          <div className="mt-12 grid gap-px overflow-hidden rounded border border-border bg-border">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                to="/work/$slug"
                params={{ slug: c.slug }}
                className="group grid gap-6 bg-card px-6 py-8 transition-colors hover:bg-secondary sm:grid-cols-[1fr_auto] sm:items-end"
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
          <p className="eyebrow">Experience & internships</p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Where I learned to ship.</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {internships.map((i) => (
              <div key={i.org}>
                <h3 className="text-xl text-ink">{i.org}</h3>
                <p className="eyebrow mt-1">{i.role}</p>
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
              </div>
            ))}
          </div>
        </section>

        <section className="rule-top mx-auto max-w-5xl px-6 py-16">
          <p className="eyebrow">Work samples, fellowship & recognition</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
            {alsoWorking.map((w) =>
              w.href ? (
                <a
                  key={w.title}
                  href={w.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-card px-6 py-6 transition-colors hover:bg-secondary"
                >
                  <h3 className="text-lg text-ink">{w.title} ↗</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.note}</p>
                </a>
              ) : (
                <div key={w.title} className="bg-card px-6 py-6">
                  <h3 className="text-lg text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.note}</p>
                </div>
              ),
            )}
          </div>
        </section>
      </main>
    </Page>
  );
}
