import { useEffect } from "react";
import SEOHead from "@/components/site/SEOHead";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
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

  const headings = [
    "ACME Protection Services Pvt. Ltd.",
    "Your Trusted Security Partner",
    "Safeguarding What Matters Most",
  ];

  const paragraphs = [
    "Safeguarding businesses, people, and events with unmatched vigilance and professionalism.",
    "Delivering peace of mind through reliable, certified, and well-trained guards.",
    "Protecting organizations and communities with modern security solutions.",
  ];

  const [typedTitle, setTypedTitle] = useState("");
  const [headIndex, setHeadIndex] = useState(0);
  const [paraIndex, setParaIndex] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(true);

  // Typing effect for headings
  useEffect(() => {
    let i = 0;
    const fullText = headings[headIndex];
    setTypedTitle(""); // reset before typing new
    const typing = setInterval(() => {
      setTypedTitle(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 80);

    // auto switch text every 4s
    const switchText = setTimeout(() => {
      setHeadIndex((prev) => (prev + 1) % headings.length);
      setParaIndex((prev) => (prev + 1) % paragraphs.length);
    }, 4000);

    return () => {
      clearInterval(typing);
      clearTimeout(switchText);
    };
  }, [headIndex]);

  // fade toggle for subtitle (paragraphs)
  useEffect(() => {
    const subtitleTimer = setInterval(() => {
      setSubtitleVisible((prev) => !prev);
    }, 4000);
    return () => clearInterval(subtitleTimer);
  }, []);

  const [isVideoOpen, setIsVideoOpen] = useState(false)

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
      {/* Home */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#3b82f620,_transparent_70%)]" />

        <div className="container grid md:grid-cols-2 items-center gap-10 relative">
          {/* Left Content (50%) */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-flex items-center rounded-full bg-primary/10 text-primary px-5 py-2 text-sm font-medium tracking-wide mb-6 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Trusted Security Partner
            </motion.span>

            {/* Typing Heading */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-primary min-h-[90px]"
              style={{ whiteSpace: "pre-wrap" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {typedTitle}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={paraIndex}
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl min-h-[90px]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {paragraphs[paraIndex]}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-10 flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button className="rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 px-7 py-3">
                  <Shield className="h-4 w-4 mr-2" /> Client Portal Login
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outline"
                  className="rounded-full border-gray-400 text-gray-800 hover:bg-gray-100 px-7 py-3"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-5 text-sm">
              {[
                { icon: <UserCheck className="h-4 w-4 text-primary" />, text: "200+ Vetted Guards" },
                { icon: <FileCheck2 className="h-4 w-4 text-primary" />, text: "ISO Certified" },
                { icon: <Shield className="h-4 w-4 text-primary" />, text: "120+ Clients" },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.2, duration: 0.6 }}
                >
                  {item.icon} {item.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Side (50%) */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute -inset-12 bg-primary/10 blur-3xl rounded-full animate-pulse -z-10" />
            <motion.img
              src="/gaurd_image1-Photoroom.png"
              alt="Guard Illustration"
              className="max-h-[520px] w-auto drop-shadow-2xl relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>





      {/* Intro / About preview */}
      <section className="container mt-8 md:mt-10">
        <div className="rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 overflow-hidden grid md:grid-cols-2">

          {/* Left Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Professional <span className="text-primary">Security Solutions</span> for Workplaces & Events
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              We provide <span className="font-medium text-gray-900">on-site guarding</span>,
              <span className="font-medium text-gray-900"> night patrols</span>,
              <span className="font-medium text-gray-900"> event security</span>, and customized
              protection plans backed by <span className="font-medium text-gray-900">training & compliance</span>.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <IconCard
                title="Mission"
                icon={<Shield className="h-6 w-6 text-primary" />}
                text="Protect with integrity."
                className="hover:scale-105 transition-transform"
              />
              <IconCard
                title="Vision"
                icon={<Building2 className="h-6 w-6 text-primary" />}
                text="Safer communities."
                className="hover:scale-105 transition-transform"
              />
              <IconCard
                title="Values"
                icon={<FileCheck2 className="h-6 w-6 text-primary" />}
                text="Trust & transparency."
                className="hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/433502/pexels-photo-433502.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Corporate security team"
              className="w-full h-80 md:h-full object-cover md:rounded-tl-[4rem]"
              loading="lazy"
            />
            {/* Overlay gradient for style */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:rounded-tl-[4rem]" />
          </div>
        </div>
      </section>


      {/* Why Choose Us - Premium Centered Version */}
      <section className="container py-20 flex flex-col items-center text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Reliability, trained personnel, quick response, and compliance-first operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {[
            { icon: <Clock className="h-7 w-7 text-white" />, title: "Reliability", text: "24/7 operations with real-time incident response." },
            { icon: <UserCheck className="h-7 w-7 text-white" />, title: "Trained Personnel", text: "Regularly vetted and certified security professionals." },
            { icon: <Siren className="h-7 w-7 text-white" />, title: "Quick Response", text: "Rapid deployment & emergency escalation protocols." },
            { icon: <FileCheck2 className="h-7 w-7 text-white" />, title: "Compliance", text: "Fully compliant with statutory & local regulations." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="bg-primary p-5 rounded-full mb-5 flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Video CTA */}
        <motion.div
          className="mt-16 w-full flex items-center gap-4 rounded-3xl border border-gray-200 p-5 shadow-md hover:shadow-xl transition-shadow cursor-pointer justify-center bg-white"
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsVideoOpen(true)}
        >
          <PlayCircle className="h-12 w-12 text-primary" />
          <div>
            <div className="font-semibold text-gray-900">Watch how we train our team</div>
            <div className="text-sm text-gray-500">30–60 seconds training highlight</div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative w-full max-w-3xl bg-black rounded-xl shadow-lg overflow-hidden">
              <button
                className="absolute top-3 right-3 text-white text-2xl font-bold z-50"
                onClick={() => setIsVideoOpen(false)}
              >
                ×
              </button>
              <iframe
                className="w-full h-[400px] md:h-[500px]"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                title="Training Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>




      {/* Services Preview - Premium Left/Right Header Alignment */}
      <section className="container py-20">
        {/* Heading + CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-0">
            Our Services
          </h2>
          <a
            href="/services"
            className="text-primary inline-flex items-center gap-2 font-medium hover:underline text-sm"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-3 cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              {/* Icon */}
              <div className="bg-primary p-5 text-white rounded-full mb-5 flex items-center justify-center shadow-md self-start">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl mb-2 text-gray-900 text-left">{s.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm text-left">{s.desc}</p>

              {/* Learn More */}
              <a
                href={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-4 text-primary font-medium hover:underline text-sm self-start"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA Video like Why Choose Us */}
        <motion.div
          className="mt-16 w-full flex items-center gap-4 rounded-3xl border border-gray-200 p-5 shadow-md hover:shadow-xl transition-shadow cursor-pointer justify-center bg-white"
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsVideoOpen(true)}
        >
          <PlayCircle className="h-12 w-12 text-primary" />
          <div>
            <div className="font-semibold text-gray-900">Watch how we deliver our services</div>
            <div className="text-sm text-gray-500">30–60 seconds service highlight</div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative w-full max-w-3xl bg-black rounded-xl shadow-lg overflow-hidden">
              <button
                className="absolute top-3 right-3 text-white text-2xl font-bold z-50"
                onClick={() => setIsVideoOpen(false)}
              >
                ×
              </button>
              <iframe
                className="w-full h-[400px] md:h-[500px]"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                title="Service Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>



      {/* Case Study - Premium Left/Right Layout */}
      <section className="container py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Image with subtle overlay & hover zoom */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1249578/pexels-photo-1249578.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Office complex security"
              className="w-full h-96 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-70"></div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Case Study: Office Complex Security Upgrade
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Our client faced frequent after-hours incidents. We implemented a robust security plan to protect their property and staff, combining technology, trained personnel, and strategic monitoring.
            </motion.p>

            <motion.ul
              className="list-disc list-inside text-gray-700 space-y-2 pl-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <li><span className="font-semibold text-gray-900">Problem:</span> Frequent after-hours incidents causing security concerns.</li>
              <li><span className="font-semibold text-gray-900">Solution:</span> Night patrol, access control, and trained security personnel.</li>
              <li><span className="font-semibold text-gray-900">Result:</span> 70% reduction in incidents within the first 3 months.</li>
            </motion.ul>

            {/* CTA Button */}
            <motion.a
              href="/case-studies/office-complex.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Download className="h-5 w-5" /> Download Case Study
            </motion.a>
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

function IconCard({ title, text, icon }: { title: string; text: string; icon: React.ReactNode; className?: string; }) {
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
