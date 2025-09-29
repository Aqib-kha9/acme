import SEOHead from "@/components/site/SEOHead";
import { CheckCircle2, Shield, FileCheck2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div>
      <SEOHead
        title="About ACME Protection"
        description="Learn about ACME Protection Services Pvt. Ltd.—our mission, milestones, and training programs."
      />
      <section className="bg-gradient-to-b from-white to-slate-50 border-b">
        <div className="container py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold">About ACME Protection</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">We deliver reliable, compliant security services across offices, events, and residential communities with trained personnel and 24/7 support.</p>
        </div>
      </section>

      <section className="container py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl border p-6 shadow-md">
          <h2 className="text-xl font-semibold">Company Overview</h2>
          <p className="mt-2 text-sm text-muted-foreground">Founded with a vision to make workplaces safer, ACME has grown into a trusted partner for enterprises and communities. Our guards are vetted, trained, and equipped to respond quickly.</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li className="flex items-center gap-2"><CheckCircle2 className="text-primary h-4 w-4"/> ISO/Compliance ready</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-primary h-4 w-4"/> 24/7 operations</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-primary h-4 w-4"/> Nationwide presence</li>
          </ul>
        </div>
        <img className="rounded-2xl object-cover w-full h-64 md:h-80" src="https://images.pexels.com/photos/4870835/pexels-photo-4870835.jpeg?auto=compress&cs=tinysrgb&w=1200" loading="lazy" alt="ACME team training" />
      </section>

      <section className="bg-slate-50/60">
        <div className="container py-12">
          <h2 className="text-2xl font-semibold mb-6">Company Timeline</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { date: "2016", text: "Company founded with a small core team." },
              { date: "2018", text: "Expanded to corporate security and patrols." },
              { date: "2021", text: "Achieved key compliance certifications." },
              { date: "2024", text: "Launched client portal and analytics." },
            ].map((m) => (
              <div key={m.date} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="text-primary font-semibold">{m.date}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-6">Values & Compliance</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ValueCard icon={<Shield className="h-5 w-5"/>} title="Integrity" text="We do the right thing—always." />
          <ValueCard icon={<Users className="h-5 w-5"/>} title="Trust" text="Trusted by clients across industries." />
          <ValueCard icon={<FileCheck2 className="h-5 w-5"/>} title="Transparency" text="Clear SLAs and reporting." />
          <ValueCard icon={<CheckCircle2 className="h-5 w-5"/>} title="Safety" text="Safety-first protocols and training." />
        </div>
        <div className="mt-8">
          <Button className="rounded-full bg-primary hover:bg-primary/90">Request a Consultation</Button>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5">
      <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">{icon}</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{text}</p>
    </div>
  );
}
