import SEOHead from "@/components/site/SEOHead";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const CURRENT = Array.from({ length: 8 }).map((_, i) => ({ id: `c${i}`, logo: `https://dummyimage.com/200x100/edf2f7/000000.png&text=Client+${i+1}`, quote: "ACME elevated our security posture across sites." }));
const PAST = Array.from({ length: 6 }).map((_, i) => ({ id: `p${i}`, logo: `https://dummyimage.com/200x100/f1f5f9/000000.png&text=Past+${i+1}` }));
const TESTIMONIALS = [
  { id: "t1", quote: "Reliable team with quick escalation handling.", author: "Operations Head, TechCorp", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "t2", quote: "Professional guards and clear reporting.", author: "Admin Manager, FinServe" },
  { id: "t3", quote: "Great at event security and VIP handling.", author: "Events Lead, ExpoCo" },
];

export default function Clients(){
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState<string | null>(null);
  return (
    <div className="container py-12">
      <SEOHead title="Clients — ACME" description="Current and past clients with testimonials. Become a client." />
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Clients</h1>
        <p className="mt-2 text-muted-foreground">We partner with enterprises, campuses, and events across India.</p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Current Clients</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CURRENT.map(c => (
            <div key={c.id} className="group rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
              <img src={c.logo} alt={`Client ${c.id}`} className="mx-auto" loading="lazy" />
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground mt-2">“{c.quote}”</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Past Clients</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PAST.map(c => (
            <div key={c.id} className="rounded-2xl border bg-white p-4 shadow-sm">
              <img src={c.logo} alt={`Past ${c.id}`} className="mx-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Testimonials</h2>
          <a href="#contact" className="text-primary">Become a Client</a>
        </div>
        <Carousel className="relative">
          <CarouselContent>
            {TESTIMONIALS.map((t) => (
              <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="rounded-2xl border bg-white p-5 h-full shadow-sm">
                  <p className="text-sm">“{t.quote}”</p>
                  <div className="text-xs text-muted-foreground mt-2">{t.author}</div>
                  {t.video && (
                    <button onClick={()=>{ setVideo(t.video!); setOpen(true); }} className="mt-3 h-9 px-4 rounded-full bg-secondary">Watch video</button>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:rounded-2xl">
          {video && (
            <div className="aspect-video">
              <iframe title="Client testimonial" className="w-full h-full" src={video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
