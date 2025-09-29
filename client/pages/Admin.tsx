import SEOHead from "@/components/site/SEOHead";
import { Users, Shield, BellRing, FileChartColumnIncreasing, PlusCircle, UserPlus, ClipboardList, CheckCircle2 } from "lucide-react";

export default function Admin() {
  return (
    <div className="container py-8">
      <SEOHead title="Admin Dashboard — ACME" description="Manage clients, guards, incidents, and compliance." />
      <div className="rounded-2xl border bg-white p-4 text-sm text-foreground/80 mb-6">
        Protected admin area (demo). Wire real authentication & RBAC before production.
      </div>
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Operations overview & quick actions.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-10 px-4 rounded-full bg-primary text-primary-foreground inline-flex items-center gap-2"><PlusCircle className="h-4 w-4"/> New Ticket</button>
          <button className="h-10 px-4 rounded-full bg-secondary inline-flex items-center gap-2"><UserPlus className="h-4 w-4"/> Add Guard</button>
        </div>
      </header>

      <section className="mt-6 grid md:grid-cols-4 gap-4">
        <Kpi icon={<Users className="h-4 w-4"/>} title="Clients" value="32" />
        <Kpi icon={<Shield className="h-4 w-4"/>} title="Guards" value="410" />
        <Kpi icon={<BellRing className="h-4 w-4"/>} title="Open Incidents" value="5" />
        <Kpi icon={<FileChartColumnIncreasing className="h-4 w-4"/>} title="SLA" value="98.7%" />
      </section>

      <section className="mt-8 grid lg:grid-cols-3 gap-6">
        <Card title="Recent Incidents" action={<a href="#" className="text-primary text-sm">View all</a>}>
          <table className="w-full text-sm">
            <thead><tr className="text-left text-muted-foreground"><th className="py-2">Time</th><th>Site</th><th>Type</th><th>Status</th></tr></thead>
            <tbody>
              {[
                {t:"09:42", s:"HQ Tower A", ty:"Access issue", st:"Investigating"},
                {t:"07:15", s:"Warehouse 3", ty:"Perimeter breach", st:"Resolved"},
                {t:"Yesterday", s:"Campus South", ty:"Alarm", st:"Closed"},
              ].map(r=> (
                <tr key={r.t+r.s} className="border-t"><td className="py-2">{r.t}</td><td>{r.s}</td><td>{r.ty}</td><td>{r.st}</td></tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card title="Pending Tickets" action={<a href="#" className="text-primary text-sm">View queue</a>}>
          <ul className="text-sm space-y-2">
            {["ID-4821: Access badge issue","ID-4819: Camera offline","ID-4815: Gate malfunction"].map(i => (
              <li key={i} className="flex items-center justify-between rounded-xl border p-3"><span>{i}</span><button className="text-primary">Open</button></li>
            ))}
          </ul>
        </Card>
        <Card title="Compliance" action={<a href="#" className="text-primary text-sm">Manage</a>}>
          <ul className="text-sm space-y-2">
            {["PASARA","ESI/PF","GST"].map(c => (
              <li key={c} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary"/> {c} — up to date</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-8 grid lg:grid-cols-2 gap-6">
        <Card title="Assignments">
          <ul className="text-sm grid sm:grid-cols-2 gap-2">
            {["HQ Tower A — 12 guards","Warehouse 3 — 8 guards","Campus South — 16 guards","Expo Center — 20 guards"].map(a => (
              <li key={a} className="rounded-xl border p-3">{a}</li>
            ))}
          </ul>
        </Card>
        <Card title="Tasks">
          <ul className="text-sm space-y-2">
            {["Schedule training batch","Update patrol routes","Monthly client review"].map(t => (
              <li key={t} className="rounded-xl border p-3 flex items-center justify-between"><span>{t}</span><button className="text-primary">Mark done</button></li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}

function Kpi({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }){
  return (
    <div className="rounded-2xl border p-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">{icon}{title}</div>
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
