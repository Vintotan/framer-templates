export function AboutSection() {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2">
            <div
              className="h-[400px] w-full rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800')",
              }}
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              Our Story
            </h2>
            <p className="text-lg opacity-90">
              For over 25 years, our family has been serving authentic
              Mediterranean cuisine made with love and tradition. Every dish is
              crafted using time-honored recipes passed down through
              generations.
            </p>
            <p className="text-lg opacity-90">
              We source only the freshest ingredients, from locally-grown
              vegetables to premium cuts of meat, ensuring every bite delivers
              the true taste of the Mediterranean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
