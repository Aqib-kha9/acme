import { useMemo, useState } from "react";
import SEOHead from "@/components/site/SEOHead";
import { posts as allPosts, categories } from "@/data/blog";
import { Link } from "react-router-dom";

export default function Blog(){
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number] | "All">("All");

  const posts = useMemo(() => {
    return allPosts.filter(p => (cat === "All" || p.category === cat) && (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase())));
  }, [q, cat]);

  const popular = allPosts.slice(0, 3);

  return (
    <div className="container py-12">
      <SEOHead title="Blog — ACME" description="Industry insights, safety tips, and case studies from ACME Protection." />
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Blog</h1>
        <p className="mt-2 text-muted-foreground">Read insights on security operations, compliance, and training.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search posts" className="h-10 px-3 rounded-full border" />
            <button onClick={()=>setCat("All")} className={`h-10 px-4 rounded-full border ${cat==="All"?"bg-primary text-primary-foreground":"bg-white"}`}>All</button>
            {categories.map(c => (
              <button key={c} onClick={()=>setCat(c)} className={`h-10 px-4 rounded-full border ${cat===c?"bg-primary text-primary-foreground":"bg-white"}`}>{c}</button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {posts.map(p => (
              <article key={p.slug} className="rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition-transform hover:-translate-y-0.5">
                <Link to={`/blog/${p.slug}`}>
                  <img src={p.cover} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
                </Link>
                <div className="p-5">
                  <div className="text-xs text-primary font-medium">{p.category}</div>
                  <h2 className="mt-1 font-semibold"><Link to={`/blog/${p.slug}`}>{p.title}</Link></h2>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                  <div className="text-xs text-muted-foreground mt-3">By {p.author} · {new Date(p.date).toLocaleDateString()}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-2xl border p-5 bg-white shadow-sm">
            <h3 className="font-semibold">Popular Posts</h3>
            <ul className="mt-3 space-y-3 text-sm">
              {popular.map(p => (
                <li key={p.slug}>
                  <Link className="hover:underline" to={`/blog/${p.slug}`}>{p.title}</Link>
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border p-5 bg-white shadow-sm">
            <h3 className="font-semibold">Categories</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {(["All", ...categories] as const).map(c => (
                <li key={c}>
                  <button onClick={()=>setCat(c as any)} className={`hover:underline ${cat===c?"text-primary":"text-foreground"}`}>{c}</button>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-2xl border p-5 bg-white shadow-sm">
            <h3 className="font-semibold">Download Whitepaper</h3>
            <p className="text-sm text-muted-foreground mt-1">Best practices for enterprise security operations.</p>
            <button className="mt-3 h-10 px-4 rounded-full bg-primary text-primary-foreground" onClick={()=>alert('Downloading...')}>Download</button>
          </section>
        </aside>
      </div>
    </div>
  );
}
