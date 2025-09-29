import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import { BadgeCheck, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">ACME Protection Services Pvt. Ltd.</h3>
          <p className="mt-2 text-sm text-muted-foreground">Office address line<br/>City, State, PIN, India</p>
          <p className="mt-2 text-sm">Phone: +91-XXXXXXXXXX<br/>Email: contact@acme-security.example</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-primary" /> MSME
            <BadgeCheck className="h-4 w-4 text-primary" /> GST
            <BadgeCheck className="h-4 w-4 text-primary" /> PASARA
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-foreground text-muted-foreground" to="/about">About</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/services">Services</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/clients">Clients</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/blog">Blog</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/legal/privacy">Privacy</Link></li>
            <li><Link className="hover:text-foreground text-muted-foreground" to="/legal/terms">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get security tips and industry insights.</p>
          <Newsletter />
          <div className="mt-6 text-xs text-muted-foreground flex items-center gap-2"><Shield className="h-4 w-4"/> We respect your privacy.</div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 flex items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ACME Protection Services Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-3">
            <a className="hover:text-foreground" href="#" aria-label="Twitter">Twitter</a>
            <a className="hover:text-foreground" href="#" aria-label="LinkedIn">LinkedIn</a>
            <a className="hover:text-foreground" href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
