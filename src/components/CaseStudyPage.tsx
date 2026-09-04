import { Link } from "@tanstack/react-router";
import { Page } from "./SiteChrome";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <Page>
      <article className="mx-auto max-w-3xl px-6 pt-16">
        <Link to="/" hash="work" className="eyebrow transition-colors hover:text-primary">
          ← Case studies
        </Link>
        <p className="eyebrow mt-8">
          {study.org} · {study.role}
        </p>
        <h1 className="mt-3 text-4xl leading-tight text-ink sm:text-5xl">{study.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{study.summary}</p>

        <dl className="mt-10 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
          {study.metrics.map((m) => (
            <div key={m.label} className="bg-card px-5 py-4">
              <dt className="eyebrow">{m.label}</dt>
              <dd className="mt-1 font-display text-2xl text-primary">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="prose-case mt-4 pb-8">
          {study.blocks.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
            if (b.type === "p") return <p key={i}>{b.text}</p>;
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          })}
        </div>
      </article>
    </Page>
  );
}
