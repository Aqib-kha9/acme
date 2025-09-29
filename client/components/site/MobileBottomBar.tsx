import { Link } from "react-router-dom";
import { Phone, LogIn } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur border-t">
      <div className="container py-2 grid grid-cols-2 gap-2">
        <Link to="/contact" className="flex items-center justify-center gap-2 h-10 rounded-full bg-secondary text-secondary-foreground">
          <Phone className="h-4 w-4" /> Contact
        </Link>
        <Link to="#login" onClick={(e) => { e.preventDefault(); const el = document.querySelector('button:has(svg[data-lucide="log-in"])') as HTMLButtonElement | null; el?.click(); }} className="flex items-center justify-center gap-2 h-10 rounded-full bg-primary text-primary-foreground">
          <LogIn className="h-4 w-4" /> Login
        </Link>
      </div>
    </div>
  );
}
