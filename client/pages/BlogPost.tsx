import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/site/SEOHead";
import { posts } from "@/data/blog";

export default function BlogPost(){
  const { slug } = useParams();
  const post = useMemo(()=> posts.find(p => p.slug === slug), [slug]);
  if(!post){
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-primary">Back to Blog</Link>
      </div>
    );
  }
  return (
    <div className="container py-12">
      <SEOHead title={`${post.title} — ACME`} description={post.ogDescription || post.excerpt} jsonLd={{"@context":"https://schema.org","@type":"Article",headline:post.title,datePublished:post.date,author:{"@type":"Person",name:post.author},image:post.ogImage || post.cover}} />
      <header className="max-w-3xl">
        <div className="text-xs text-primary font-medium">{post.category}</div>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-1">{post.title}</h1>
        <div className="text-xs text-muted-foreground mt-2">By {post.author} · {new Date(post.date).toLocaleDateString()}</div>
      </header>
      <figure className="mt-6 rounded-2xl overflow-hidden border shadow-sm max-w-4xl">
        <img src={post.cover} alt={post.title} className="w-full h-auto" />
      </figure>
      <article className="prose prose-slate max-w-3xl mt-8">
        {post.content.map((b, i) => {
          if (b.type === "p") return <p key={i}>{b.value as string}</p>;
          if (b.type === "h2") return <h2 key={i}>{b.value as string}</h2>;
          if (b.type === "ul") return <ul key={i}>{(b.value as string[]).map((li)=> <li key={li}>{li}</li>)}</ul>;
          return null;
        })}
      </article>
      <div className="mt-10 flex items-center gap-3 text-sm">
        <Link to="/blog" className="text-primary">← Back to Blog</Link>
      </div>
    </div>
  );
}
