import SEOHead from "@/components/site/SEOHead";
import { Shield, FileText, ClipboardList, CreditCard, Users, Download } from "lucide-react";

export default function Portal() {
  return (
    <div className="container py-8">
      <SEOHead title="Client Portal — ACME" description="Access your reports, invoices, roster, and documents." />
      <div className="rounded-2xl border bg-white p-4 text-sm text-foreground/80 mb-6">
        Protected area (demo). Connect real auth to restrict access.
      </div>
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold">Client Portal</h1>
          <p className="text-muted-foreground">Welcome back. Manage your security services and documents.</p>
        </div>
        <button className="h-10 px-4 rounded-full bg-primary text-primary-foreground">Request Support</button>
      </header>

      <section className="mt-6 grid md:grid-cols-4 gap-4">
        <Kpi title="Active Sites" value="6" />
        <Kpi title="Guards On Duty" value="48" />
        <Kpi title="Incidents (24h)" value="2" />
        <Kpi title="SLA This Month" value="99.2%" />
      </section>

      <section className="mt-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Recent Reports" action={<a href="#" className="text-primary text-sm">View all</a>}>
            <table className="w-full text-sm">
              <thead><tr className="text-left text-muted-foreground"><th className="py-2">Date</th><th>Site</th><th>Type</th><th>Status</th></tr></thead>
              <tbody>
                {[
                  {d:"2025-01-10", s:"HQ Tower A", t:"Night Patrol", st:"Delivered"},
                  {d:"2025-01-09", s:"Warehouse 3", t:"Incident", st:"Acknowledged"},
                  {d:"2025-01-08", s:"Campus South", t:"Audit", st:"Delivered"},
                ].map(r=> (
                  <tr key={r.d+r.s} className="border-t">
                    <td className="py-2">{new Date(r.d).toLocaleDateString()}</td>
                    <td>{r.s}</td>
                    <td>{r.t}</td>
                    <td>{r.st}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card title="Documents" action={<a href="#" className="text-primary text-sm">Manage</a>}>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                {i: <FileText className="h-4 w-4"/>, n: "SLA & Contract.pdf"},
                {i: <FileText className="h-4 w-4"/>, n: "Guard Roster Jan.xlsx"},
                {i: <FileText className="h-4 w-4"/>, n: "Compliance Certificates.zip"},
                {i: <FileText className="h-4 w-4"/>, n: "Monthly Report Dec.pdf"},
              ].map(d=> (
                <li key={d.n} className="flex items-center justify-between rounded-xl border p-3">
                  <div className="flex items-center gap-2">{d.i}<span>{d.n}</span></div>
                  <button className="inline-flex items-center gap-1 text-primary"><Download className="h-4 w-4"/> Download</button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="space-y-6">
          <Card title="Quick Links">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Quick icon={<ClipboardList className="h-4 w-4"/>} label="Site Reports" />
              <Quick icon={<CreditCard className="h-4 w-4"/>} label="Invoices" />
              <Quick icon={<Users className="h-4 w-4"/>} label="Guard Roster" />
              <Quick icon={<Shield className="h-4 w-4"/>} label="Passes" />
            </div>
          </Card>
          <Card title="Support">
            <form className="grid gap-2 text-sm" onSubmit={(e)=>{e.preventDefault(); alert('Ticket submitted');}}>
              <input className="h-10 rounded-md border px-3" placeholder="Subject" />
              <textarea className="rounded-md border px-3 py-2" rows={3} placeholder="Describe your issue" />
              <button className="h-10 rounded-full bg-secondary">Submit Ticket</button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}

function Kpi({ title, value }: { title: string; value: string }){
  return (
    <div className="rounded-2xl border p-4 bg-white shadow-sm">
      <div className="text-xs text-muted-foreground">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}

function Card({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }){
  return (
    <section className="rounded-2xl border p-5 bg-white shadow-sm">
      <div className="flex items-center justify-between mb-3"><h2 className="font-semibold">{title}</h2>{action}</div>
      {children}
    </section>
  );
}

function Quick({ icon, label }: { icon: React.ReactNode; label: string }){
  return (
    <button className="flex items-center gap-2 rounded-xl border p-3 hover:shadow-sm">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</span>
      {label}
    </button>
  );
}
