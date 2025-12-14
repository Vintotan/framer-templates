import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ContactSection() {
  return (
    <section className="py-20 bg-[oklch(0.45_0.08_60)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-serif">
          Visit Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider opacity-70 mb-2">
                Address
              </h3>
              <p className="text-2xl font-semibold">
                123 Mediterranean Ave, Suite 100
              </p>
              <p className="text-lg opacity-80">Istanbul District, CA 90210</p>
            </div>

            <Separator className="bg-white/20" />

            <div>
              <h3 className="text-sm uppercase tracking-wider opacity-70 mb-2">
                Phone
              </h3>
              <p className="text-2xl font-semibold">(555) 123-4567</p>
            </div>

            <Separator className="bg-white/20" />

            <div>
              <h3 className="text-sm uppercase tracking-wider opacity-70 mb-2">
                Hours
              </h3>
              <div className="space-y-1">
                <p className="text-lg">Monday - Thursday: 11am - 10pm</p>
                <p className="text-lg">Friday - Saturday: 11am - 11pm</p>
                <p className="text-lg">Sunday: 12pm - 9pm</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <Card className="bg-black/20 border-none">
            <CardContent className="h-[350px] flex items-center justify-center">
              <p className="text-white/60 text-lg">Map Placeholder</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
