import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/site/SEOHead";
import { services, iconMap } from "@/data/services";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Link to="/services" className="text-primary">Back to Services</Link>
      </div>
    );
  }
  const Icon = iconMap[service.icon];
  return (
    <div className="container py-12">
      <SEOHead title={`${service.title} — ACME`} description={service.summary} />

      <header className="flex items-center gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-6 w-6"/></div>
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">{service.title}</h1>
          <p className="text-muted-foreground">{service.summary}</p>
        </div>
      </header>

      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <Card title="Key Benefits">
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              {service.benefits.map((b) => (
                <li key={b} className="list-disc ml-5">{b}</li>
              ))}
            </ul>
          </Card>

          <Card title="Use Cases">
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              {service.useCases.map((u) => (
                <li key={u} className="list-disc ml-5">{u}</li>
              ))}
            </ul>
          </Card>

          <Card title="FAQs">
            <div className="space-y-4">
              {service.faqs.map((f) => (
                <div key={f.q}>
                  <div className="font-medium">{f.q}</div>
                  <div className="text-sm text-muted-foreground">{f.a}</div>
                </div>
              ))}
            </div>
          </Card>

          {service.video && (
            <Card title="In action">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe title={`${service.title} video`} className="w-full h-full" src={service.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Card>
          )}
        </section>

        <aside className="space-y-6">
          <Card title="Plans & Pricing">
            <div className="grid gap-3">
              {service.plans.map((p) => (
                <div key={p.name} className="rounded-xl border p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-muted-foreground">{p.price}</div>
                  </div>
                  <ul className="mt-2 text-sm space-y-1">
                    {p.features.map((f) => (
                      <li key={f} className="list-disc ml-5">{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mt-4 rounded-full">Request Quote</Button>
              </DialogTrigger>
              <DialogContent className="sm:rounded-2xl">
                <DialogHeader>
                  <DialogTitle>Request a Quote — {service.title}</DialogTitle>
                </DialogHeader>
                <form className="grid gap-3" onSubmit={(e)=>{e.preventDefault(); alert('Request submitted');}}>
                  <input required placeholder="Name" className="h-11 rounded-md border px-3" />
                  <input required type="email" placeholder="Email" className="h-11 rounded-md border px-3" />
                  <input placeholder="Phone" className="h-11 rounded-md border px-3" />
                  <textarea placeholder="Requirements" rows={4} className="rounded-md border px-3 py-2" />
                  <Button type="submit" className="rounded-full">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>
          </Card>

          <Card title="Need help?">
            <p className="text-sm text-muted-foreground">Call +91-XXXXXXXXXX or email contact@acme-security.example</p>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border p-5 bg-white shadow-sm">
      <h2 className="font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
