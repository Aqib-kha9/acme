import { useEffect } from "react";
import SEOHead from "@/components/site/SEOHead";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ShieldCheck, Zap, Users, Shield, Clock, UserCheck, FileCheck2, PlayCircle, Building2, Siren, Briefcase, MapPin, BookOpen, ArrowRight, Download } from "lucide-react";
import React from "react";
import CountUp from "react-countup";
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

const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/udit-001/india-maps-data/main/topojson/india.json";

const clients = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
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

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

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
          {/* Left Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
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

          {/* Right Side */}
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

        {/* 🔥 Bottom Wave + Trust Bar */}
        <div className="absolute container bottom-0 left-0 right-0">
          {/* Wave Shape */}
          <svg
            className="w-full h-20 text-primary"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,192C672,203,768,181,864,154.7C960,128,1056,96,1152,112C1248,128,1344,192,1392,224L1440,256L1440,320L0,320Z"
            ></path>
          </svg>

          {/* Trust Bar */}
          <div className="">
            <div className="container  flex flex-wrap items-center justify-center gap-10 opacity-70">
            </div>
          </div>
        </div>
      </section>






      {/* Intro / About preview */}
      <section className="container mt-12 md:mt-16">
        <div className="rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 overflow-hidden grid md:grid-cols-2 min-h-[500px] shadow-lg">

          {/* Left Content */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Professional <span className="text-primary">Security Solutions</span>
              <br className="hidden md:block" /> for Workplaces & Events
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl">
              We provide <span className="font-medium text-gray-900">on-site guarding</span>,
              <span className="font-medium text-gray-900"> night patrols</span>,
              <span className="font-medium text-gray-900"> event security</span>, and customized protection plans backed by
              <span className="font-medium text-gray-900"> training & compliance</span>.
            </p>

            {/* Features */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <IconCard
                title="Mission"
                icon={<Shield className="h-6 w-6 text-primary" />}
                text="Protect with integrity."
                className="bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all"
              />
              <IconCard
                title="Vision"
                icon={<Building2 className="h-6 w-6 text-primary" />}
                text="Safer communities."
                className="bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all"
              />
              <IconCard
                title="Values"
                icon={<FileCheck2 className="h-6 w-6 text-primary" />}
                text="Trust & transparency."
                className="bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-sm hover:shadow-md hover:scale-105 transition-all"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[350px] md:h-full">
            <img
              src="https://images.pexels.com/photos/433502/pexels-photo-433502.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Corporate security team"
              className="w-full h-full object-cover md:rounded-tl-[4rem]"
              loading="lazy"
            />
            {/* Overlay gradient for style */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent md:rounded-tl-[4rem]" />
          </div>
        </div>
      </section>



      {/* Why Choose Us - Premium Section */}
      <section className="py-20 mt-5">
        <div className="container mx-auto text-center space-y-16">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose <span className="text-primary">Our Company</span>?
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Backed by experience, trusted by clients, and driven by a commitment
              to excellence in every project.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { value: "800+", label: "Trained Professionals" },
              { value: "50,000+", label: "Training Hours Delivered" },
              { value: "12+", label: "Countries Reached" },
              { value: "90%", label: "Client Retention Rate" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <h4 className="text-4xl font-bold text-primary">{stat.value}</h4>
                <p className="text-gray-600 mt-2 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
            className="mt-10 w-full flex items-center gap-4 rounded-3xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer justify-center bg-white mx-auto"
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsVideoOpen(true)}
          >
            <PlayCircle className="h-12 w-12 text-primary" />
            <div className="text-left">
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
        </div>
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


      <section className="container py-20">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-primary">Presence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proudly operating from the heart of India’s financial capital —
            <span className="font-semibold text-primary"> Mumbai</span>.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left: Image */}
          <div className="relative w-full">
            <img
              src="/mumbai-skyline.jpg"
              alt="Mumbai Skyline"
              className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
            />
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Mumbai</h3>
              <p className="text-gray-600 text-sm">Our Home Base of Operations</p>
            </div>
          </div>

          {/* Right: Stats (Equal Height) */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-rows-3 gap-6 h-[500px]">
              {/* Years */}
              <div className="flex items-center p-6 rounded-2xl bg-gradient-to-tr from-primary/10 to-primary/5 shadow-md hover:shadow-lg transition">
                <div className="text-5xl font-extrabold text-primary w-32 text-center">
                  <CountUp end={10} duration={2.5} />+
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Years in Mumbai</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    A decade of trust, delivering reliable and consistent service across the city.
                  </p>
                </div>
              </div>

              {/* Clients */}
              <div className="flex items-center p-6 rounded-2xl bg-gradient-to-tr from-primary/10 to-primary/5 shadow-md hover:shadow-lg transition">
                <div className="text-5xl font-extrabold text-primary w-32 text-center">
                  <CountUp end={500} duration={3} />+
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Clients Served</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Trusted by hundreds of businesses and individuals to keep them safe and secure.
                  </p>
                </div>
              </div>

              {/* Support */}
              <div className="flex items-center p-6 rounded-2xl bg-gradient-to-tr from-primary/10 to-primary/5 shadow-md hover:shadow-lg transition">
                <div className="text-5xl font-extrabold text-primary w-32 text-center">
                  <CountUp end={24} duration={2} />/7
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Support Available</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Round-the-clock assistance ensuring your peace of mind every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        {/* Heading */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by <span className="text-primary">Leading Organizations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’re proud to partner with top corporates, institutions, and enterprises across industries.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden mt-16 relative">
          <motion.div
            className="flex space-x-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 h-28 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm 
                         flex justify-center items-center p-6 hover:shadow-xl hover:scale-105 transition duration-300"
              >
                <img
                  src={logo}
                  alt={`Client ${i}`}
                  className="h-14 object-contain"
                />
              </div>
            ))}
          </motion.div>
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
