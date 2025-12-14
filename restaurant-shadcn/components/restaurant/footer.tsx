import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif">
              Mediterranean Kebab House
            </h3>
            <p className="text-sm opacity-70">
              Authentic flavors, timeless traditions. Serving the community
              since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a href="#menu" className="hover:opacity-100 transition-opacity">
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:opacity-100 transition-opacity"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#catering"
                  className="hover:opacity-100 transition-opacity"
                >
                  Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold">Hours</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Mon-Thu: 11am - 10pm</li>
              <li>Fri-Sat: 11am - 11pm</li>
              <li>Sunday: 12pm - 9pm</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>123 Mediterranean Ave</li>
              <li>Istanbul District, CA 90210</li>
              <li>(555) 123-4567</li>
              <li>hello@medkebab.com</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <p className="text-center text-sm opacity-50">
          © 2024 Mediterranean Kebab House. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
