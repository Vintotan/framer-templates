import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
          Ready to Order?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Fresh kebabs delivered to your door or ready for pickup
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="text-lg px-8 py-6">
            Order Online
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent border-white hover:bg-white hover:text-accent"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
