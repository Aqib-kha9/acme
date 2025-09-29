import { useMemo, useState } from "react";
import SEOHead from "@/components/site/SEOHead";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

const TAGS = ["All", "Events", "Training", "Patrols", "Team"] as const;

type Item = { id: string; src: string; tag: typeof TAGS[number]; caption: string; type?: "video"; video?: string };

const ITEMS: Item[] = [
  { id: "1", tag: "Events", caption: "Corporate event security", src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "2", tag: "Training", caption: "Drill and training", src: "https://images.pexels.com/photos/600022/pexels-photo-600022.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "3", tag: "Patrols", caption: "Night patrol route", src: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "4", tag: "Team", caption: "ACME team", src: "https://images.pexels.com/photos/756742/pexels-photo-756742.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "5", tag: "Training", caption: "Training highlight", src: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", type: "video", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "6", tag: "Events", caption: "Entry screening", src: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "7", tag: "Patrols", caption: "Campus patrol", src: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "8", tag: "Team", caption: "Briefing", src: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200" },
];

export default function Gallery() {
  const [active, setActive] = useState<typeof TAGS[number]>("All");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Item | null>(null);

  const filtered = useMemo(() => (active === "All" ? ITEMS : ITEMS.filter((i) => i.tag === active)), [active]);

  return (
    <div className="container py-12">
      <SEOHead title="Gallery — ACME" description="Events, Training, Patrols, and Team gallery with video highlights." />
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Gallery</h1>
        <p className="mt-2 text-muted-foreground">Explore our events, patrols, and training moments.</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-6">
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`h-9 px-4 rounded-full border ${active === t ? "bg-primary text-primary-foreground" : "bg-white hover:bg-slate-50"}`}
            aria-pressed={active === t}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {filtered.map((i) => (
          <figure key={i.id} className="mb-4 break-inside-avoid">
            <button
              onClick={() => { setCurrent(i); setOpen(true); }}
              className="group relative block w-full overflow-hidden rounded-2xl border shadow-sm"
            >
              <img src={i.src} alt={i.caption} loading="lazy" className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
              <figcaption className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-2 left-2 right-2 text-white text-sm drop-shadow">
                {i.caption}
              </div>
              {i.type === "video" && <PlayCircle className="absolute top-2 right-2 h-8 w-8 text-white drop-shadow" />}
            </button>
          </figure>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl sm:rounded-2xl">
          {current && (
            current.type === "video" ? (
              <div className="aspect-video w-full">
                <iframe title={current.caption} className="w-full h-full" src={current.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            ) : (
              <img src={current.src} alt={current.caption} className="w-full h-auto rounded-xl" />
            )
          )}
          {current && <div className="text-sm text-muted-foreground">{current.caption}</div>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
