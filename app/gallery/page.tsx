import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/gallery/air-condition-special.jpeg",
    alt: "Home Repair Express Work",
  },
  {
    src: "/gallery/IMG_7623.jpeg",
    alt: "Home Repair Express Work",
  },
  {
    src: "/gallery/IMG_7106.jpeg",
    alt: "Home Repair Express Work",
  },
  {
    src: "/gallery/IMG_7452.jpeg",
    alt: "Home Repair Express Work",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/home-repair-logo.jpg"
              alt="Home Repair Express Logo"
              width={200}
              height={100}
              priority
              className="h-auto w-auto"
            />
          </Link>
          <div className="flex gap-6">
            <Link href="/#services" className="text-white hover:text-orange-400 transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-white hover:text-orange-400 transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-white hover:text-orange-400 transition-colors">
              Contact
            </Link>
            <Link href="/gallery" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">
              Gallery
            </Link>
          </div>
        </nav>
      </header>

      {/* Gallery Section */}
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto">
            See examples of our professional home repair and improvement work
          </p>
        </section>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Contact us today for a free estimate
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200">
            © {new Date().getFullYear()} Home Repair Express. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
