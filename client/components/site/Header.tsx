import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, LogIn } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "We Provide" },
  { to: "/blog", label: "Why Choose Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-primary">
          <Shield className="h-6 w-6" /> ACME
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-full px-5 bg-primary text-primary-foreground hover:bg-primary/90">
                <LogIn className="h-4 w-4" /> Client Portal Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:rounded-2xl">
              <DialogHeader>
                <DialogTitle>Client Portal Login</DialogTitle>
              </DialogHeader>
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setOpen(false); }}>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" required placeholder="you@example.com" className="w-full h-11 rounded-md border px-3" />
                <label className="block text-sm font-medium">Password</label>
                <input type="password" required placeholder="••••••••" className="w-full h-11 rounded-md border px-3" />
                <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90">Login</Button>
                <p className="text-xs text-muted-foreground text-center">Demo only. Hook up auth later.</p>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
