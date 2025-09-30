import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  Info,
  Wrench,
  Users,
  FileText,
  MessageCircle,
  Lock,
  Shield,
  Twitter,
  Linkedin,
  Youtube,
  Clock,
} from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // India time in IST
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      setTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t bg-white">
      <div className="container py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold">
            ACME Protection Services Pvt. Ltd.
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Leading security solutions provider with 10+ years of trusted
            service across India.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-primary" /> MSME
            <BadgeCheck className="h-4 w-4 text-primary" /> GST
            <BadgeCheck className="h-4 w-4 text-primary" /> PASARA
          </div>
          {/* Live Clock */}
          <div className="mt-6 text-sm font-medium flex items-center gap-2 text-primary">
            <Clock className="h-5 w-5" />
            {time || "Loading..."}
          </div>

        </div>
        

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Info className="h-4 w-4 text-primary" /> About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Wrench className="h-4 w-4 text-primary" /> We Provide
              </Link>
            </li>
            <li>
              <Link
                to="/clients"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Users className="h-4 w-4 text-primary" /> Clients
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <FileText className="h-4 w-4 text-primary" /> Why Choose Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources / Legal */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> Contact
              </Link>
            </li>
            <li>
              <Link
                to="/legal/privacy"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Lock className="h-4 w-4 text-primary" /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/legal/terms"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Lock className="h-4 w-4 text-primary" /> Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 text-primary" /> Office address line,
            City, State, PIN
          </p>
          <p className="text-sm flex items-center gap-2 text-muted-foreground mb-2">
            <Phone className="h-4 w-4 text-primary" /> +91-XXXXXXXXXX
          </p>
          <p className="text-sm flex items-center gap-2 text-muted-foreground mb-4">
            <Mail className="h-4 w-4 text-primary" /> contact@acme-security.example
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          

          <div className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" /> We respect your privacy.
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ACME Protection Services Pvt. Ltd. All
            rights reserved.
          </p>
          <p>Empowering businesses with trusted security solutions.</p>
        </div>
      </div>
    </footer>
  );
}
