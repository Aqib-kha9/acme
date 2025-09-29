import SEOHead from "@/components/site/SEOHead";
import { services, iconMap } from "@/data/services";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="container py-12">
      <SEOHead title="Security Services — ACME" description="Guarding, Night Patrols, Corporate Security, Event Security, and Custom Solutions." />
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Security Services</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">Comprehensive security solutions with trained personnel, quick response, and compliance-first operations.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <article key={s.slug} className="rounded-2xl border p-5 bg-white shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5"/></div>
              <h2 className="mt-3 font-semibold">{s.title}</h2>
              <p className="text-sm text-muted-foreground line-clamp-2">{s.summary}</p>
              <ul className="mt-3 text-sm space-y-1">
                {s.benefits.slice(0,3).map((b) => (<li key={b} className="list-disc ml-4">{b}</li>))}
              </ul>
              <Link className="inline-flex items-center gap-2 text-primary text-sm mt-3" to={`/services/${s.slug}`}>
                View details
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M13.5 4.5l6 6-6 6M3 12h16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
