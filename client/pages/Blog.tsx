import { ShieldCheck, Users, Award, Headphones, Clock, Building2, Target, Handshake } from "lucide-react";
import SEOHead from "@/components/site/SEOHead";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Trusted Security Expertise",
      desc: "Over 10+ years of delivering reliable and compliant protection services.",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      desc: "Professionally trained guards and staff equipped with the latest protocols.",
    },
    {
      icon: Award,
      title: "Certified & Compliant",
      desc: "Fully licensed under PASARA, GST registered, and MSME certified.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Round-the-clock customer support ensuring peace of mind.",
    },
    {
      icon: Clock,
      title: "On-Time Response",
      desc: "Quick deployment and proactive monitoring at all times.",
    },
  ];

  const steps = [
    { icon: Building2, title: "Understanding Needs", desc: "We carefully assess your security requirements and risks." },
    { icon: Target, title: "Custom Strategy", desc: "We design tailored security solutions that fit your business." },
    { icon: ShieldCheck, title: "Implementation", desc: "Deployment of trained staff and advanced monitoring tools." },
    { icon: Handshake, title: "Ongoing Partnership", desc: "Continuous improvement, training, and dedicated support." },
  ];

  const testimonials = [
    { quote: "ACME’s professionalism and response time are unmatched. They make us feel secure 24/7.", name: "Operations Head, TechCorp" },
    { quote: "We trust ACME for all our branches across India. Truly reliable security partners.", name: "Admin Manager, GlobalBank" },
    { quote: "Their guards are well-trained and courteous. It’s rare to find such consistency.", name: "HR Director, EduCare Group" },
  ];

  return (
    <div className="container py-16">
      <SEOHead
        title="Why Choose Us — ACME"
        description="Discover why leading organizations trust ACME Protection Services for security solutions."
      />

      {/* Heading */}
      <header className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why <span className="text-primary">Choose Us</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Trusted by corporates, institutions, and enterprises across India for reliable protection and compliance.
        </p>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
      </header>

      {/* Reasons Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition"
          >
            <r.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-primary">10+</h2>
          <p className="text-sm text-muted-foreground">Years of Experience</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary">500+</h2>
          <p className="text-sm text-muted-foreground">Corporate Clients</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary">2000+</h2>
          <p className="text-sm text-muted-foreground">Trained Professionals</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary">24/7</h2>
          <p className="text-sm text-muted-foreground">Support Availability</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">Our Approach</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <s.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <p className="text-sm text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-4 text-xs font-medium text-muted-foreground">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-primary/5 rounded-2xl py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Business?</h2>
        <p className="text-muted-foreground mb-6">
          Partner with ACME Protection Services and experience peace of mind with trusted security solutions.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
}
