import SEOHead from "@/components/site/SEOHead";
export default function Contact(){
  return (
    <div className="container py-16">
      <SEOHead title="Contact — ACME" description="Reach our team for quotes and support." />
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6 shadow-sm">
          <p className="text-sm">Address, phone, email, hours.</p>
          <form className="mt-4 grid gap-3">
            <input required className="h-11 rounded-md border px-3" placeholder="Name"/>
            <input required type="email" className="h-11 rounded-md border px-3" placeholder="Email"/>
            <input className="h-11 rounded-md border px-3" placeholder="Phone"/>
            <textarea className="rounded-md border px-3 py-2" placeholder="Message" rows={4}/>
            <button className="h-11 rounded-full bg-primary text-primary-foreground">Send</button>
          </form>
        </div>
        <div className="rounded-2xl overflow-hidden border">
          <iframe title="ACME Map" src="https://www.google.com/maps?q=place+address+or+lat,lng&output=embed" width="100%" height="350" style={{border:0}} loading="lazy" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
