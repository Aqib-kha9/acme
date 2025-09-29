import { useEffect } from "react";
import SEOHead from "@/components/site/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, UserCheck, FileCheck2, PlayCircle, Building2, Siren, Briefcase, MapPin, BookOpen, ArrowRight, Download } from "lucide-react";

const posts = [
  {
    title: "How to Choose the Right Security Provider for Your Office",
    excerpt:
      "Choosing the right security partner is about trust, reliability, and compliance. This guide covers certifications and training standards.",
    img:
      "https://images.pexels.com/photos/2587014/pexels-photo-2587014.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Night patrol best practices",
    excerpt: "From route planning to escalation protocols, see what makes patrols effective.",
    img:
      "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Security technology trends 2025",
    excerpt: "AI-assisted monitoring, access control, and the future of guard operations.",
    img:
      "https://images.pexels.com/photos/745987/pexels-photo-745987.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Index() {
  useEffect(() => {
    // no-op demo fetch removed
  }, []);

  return (
    <div className="flex flex-col">
      <SEOHead
        title="ACME Protection Services Pvt. Ltd. — Professional Security Guards & Patrols"
        description="Trusted security solutions for offices, events, and residential communities. Trained personnel, 24/7 support, and compliance-first operations. Contact us."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ACME Protection Services Pvt. Ltd.",
          image: "https://images.pexels.com/photos/4870835/pexels-photo-4870835.jpeg?auto=compress&cs=tinysrgb&w=1200",
          telephone: "+91-XXXXXXXXXX",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Office address line",
            addressLocality: "City",
            addressRegion: "State",
            postalCode: "PIN",
            addressCountry: "IN",
          },
          url: window.location.origin,
          priceRange: "₹₹",
          openingHours: "Mo-Fr 09:00-18:00",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/4870835/pexels-photo-4870835.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Security guards on duty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container min-h-[68vh] flex flex-col md:flex-row items-center justify-between py-20 text-white relative">
          {/* Left Side (Text) */}
          <div className="flex-1 max-w-xl relative z-10">
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium mb-4">
              Trusted Security Partner
            </span>
            <h1 className="text-4xl md:text-6xl text-black font-extrabold leading-tight">
              ACME Protection Services Pvt. Ltd.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-black/90 max-w-2xl">
              Your Trusted Security Partner
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-full bg-primary hover:bg-primary/90">
                <Shield className="h-4 w-4" /> Login to Client Portal
              </Button>
              <Button
                variant="outline"
                className="rounded-full bg-white/10 border-black/40 text-black hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-black/80">
              <span>Serving 120+ clients</span>
              <span className="inline-flex items-center gap-2">
                <FileCheck2 className="h-4 w-4" /> ISO/COMPLIANCE
              </span>
              <span className="inline-flex items-center gap-2">
                <UserCheck className="h-4 w-4" /> Vetted Guards
              </span>
            </div>
          </div>

          {/* Right Side (PNG Image + Torch Effect) */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
            {/* Torch Beam Effect */}
            <div className="absolute top-28 left-[65%] w-[400px] h-[400px] -z-10 rotate-[15deg]">
              <div className="w-full h-full bg-gradient-to-tr from-yellow-400/40 via-yellow-200/30 to-transparent blur-2xl opacity-80 animate-pulse rounded-full" />
            </div>

            <img
              src="/gaurd_image1.jpg"
              alt="Guard Illustration"
              className="max-h-[400px] w-auto relative z-10"
            />
          </div>
        </div>
      </section>



      {/* Intro / About preview */}
      <section className="container -mt-12 md:-mt-16">
        <div className="rounded-2xl bg-white shadow-md border overflow-hidden grid md:grid-cols-2">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl font-semibold">Professional security for workplaces and events</h2>
            <p className="mt-2 text-muted-foreground">We provide on-site guarding, night patrols, event security, and customized protection plans backed by training and compliance.</p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <IconCard title="Mission" icon={<Shield className="h-5 w-5" />} text="Protect with integrity." />
              <IconCard title="Vision" icon={<Building2 className="h-5 w-5" />} text="Safer communities." />
              <IconCard title="Values" icon={<FileCheck2 className="h-5 w-5" />} text="Trust & transparency." />
            </div>
          </div>
          <img src="https://images.pexels.com/photos/433502/pexels-photo-433502.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Corporate security team" className="w-full h-64 md:h-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Why choose us</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Reliability, trained personnel, quick response, and compliance-first operations.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <WhyCard icon={<Clock className="h-5 w-5" />} title="Reliability" text="24/7 operations with real-time incident response." />
          <WhyCard icon={<UserCheck className="h-5 w-5" />} title="Trained Personnel" text="Regularly vetted and certified security professionals." />
          <WhyCard icon={<Siren className="h-5 w-5" />} title="Quick Response" text="Rapid deployment & emergency escalation protocols." />
          <WhyCard icon={<FileCheck2 className="h-5 w-5" />} title="Compliance" text="Fully compliant with statutory & local regulations." />
        </div>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border p-4 shadow-sm">
          <PlayCircle className="h-10 w-10 text-primary" />
          <div>
            <div className="font-medium">Watch how we train our team</div>
            <div className="text-sm text-muted-foreground">30–60 seconds training highlight</div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="container py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <a href="/services" className="text-primary inline-flex items-center gap-2 text-sm">See all services <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [@media(max-width:640px)]:grid-cols-1 [@media(max-width:640px)]:auto-rows-[1fr] overflow-x-auto sm:overflow-visible">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Case study */}
      <section className="container py-10">
        <div className="rounded-2xl border shadow-md overflow-hidden grid md:grid-cols-2">
          <img src="https://images.pexels.com/photos/1249578/pexels-photo-1249578.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Case study office complex" className="w-full h-64 md:h-full object-cover" loading="lazy" />
          <div className="p-6 md:p-10">
            <h3 className="text-xl font-semibold">Case study: Office complex security upgrade</h3>
            <ol className="mt-3 text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>Problem: Frequent after-hours incidents.</li>
              <li>Solution: Night patrol + access control.</li>
              <li>Result: 70% reduction in incidents.</li>
            </ol>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-5 h-11 text-foreground hover:bg-secondary/80"><Download className="h-4 w-4" /> Download case study</button>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="container py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Latest insights</h2>
          <a href="/blog" className="text-primary inline-flex items-center gap-2 text-sm">Read our insights <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                <a href="/blog" className="inline-flex items-center gap-2 text-primary text-sm mt-3">Read more <ArrowRight className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="container py-14">
        <div className="rounded-2xl bg-primary text-primary-foreground px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-lg md:text-xl font-semibold">Secure your workplace with ACME Protection today!</div>
          <div className="flex gap-3">
            <Button className="rounded-full bg-white text-primary hover:bg-white/90">Contact Us</Button>
            <Button variant="secondary" className="rounded-full">Request a Consultation</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function IconCard({ title, text, icon }: { title: string; text: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="text-sm text-muted-foreground">{text}</div>
    </div>
  );
}

function WhyCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="text-sm text-muted-foreground">{text}</div>
    </div>
  );
}

const services = [
  { icon: <Shield className="h-5 w-5" />, title: "Guarding", desc: "On-site guards ensuring safety and protocol." },
  { icon: <Siren className="h-5 w-5" />, title: "Night Patrol", desc: "Scheduled patrols with incident reporting." },
  { icon: <Briefcase className="h-5 w-5" />, title: "Corporate Security", desc: "Reception, access control, and escorts." },
  { icon: <MapPin className="h-5 w-5" />, title: "Event Security", desc: "Crowd control and VIP protection." },
];

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-5 bg-white min-w-[260px] shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
      <a href="/services" className="inline-flex items-center gap-2 text-primary text-sm mt-3">View details <ArrowRight className="h-4 w-4" /></a>
    </div>
  );
}
