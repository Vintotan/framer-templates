import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
          Authentic Mediterranean Kebabs
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Handcrafted with fresh ingredients and traditional recipes passed down
          through generations
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="text-lg px-8 py-6">
            Order Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-black"
          >
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
