import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/home-repair-logo.jpg"
              alt="Home Repair Express Logo"
              width={120}
              height={60}
              priority
              className="h-auto w-16 md:w-24 rounded-full"
            />
          </Link>
          <div className="flex gap-6">
            <Link
              href="#services"
              className="text-white hover:text-orange-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-orange-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-orange-400 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-orange-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional Home Repair Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Fast, reliable, and expert home repair solutions you can trust
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="#services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Our Services
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Services
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🔧</span>
                  <h3 className="text-xl font-semibold text-white">Plumbing</h3>
                </div>
                <p className="text-blue-200 ml-12">
                  Expert plumbing repairs, installations, and maintenance for all your water and drainage needs.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-xl font-semibold text-white">Electrical</h3>
                </div>
                <p className="text-blue-200 ml-12">
                  Safe and reliable electrical repairs, installations, and upgrades by certified electricians.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🪵</span>
                  <h3 className="text-xl font-semibold text-white">Fencing</h3>
                </div>
                <p className="text-blue-200 ml-12">
                  Professional fence installation, repair, and replacement services to secure and enhance your property.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">📺</span>
                  <h3 className="text-xl font-semibold text-white">TV Mounting</h3>
                </div>
                <p className="text-blue-200 ml-12">
                  Expert TV mounting services for flat screens, ensuring secure installation and optimal viewing angles.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🔨</span>
                  <h3 className="text-xl font-semibold text-white">General Repairs</h3>
                </div>
                <p className="text-blue-200 ml-12">
                  Comprehensive home repair services for all your maintenance and improvement needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Why Choose Home Repair Express?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Fast & Reliable
                </h3>
                <p className="text-blue-200">
                  We understand that home repairs can&apos;t wait. Our team responds
                  quickly and gets the job done right the first time.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Expert Technicians
                </h3>
                <p className="text-blue-200">
                  All our technicians are licensed, insured, and experienced
                  professionals committed to quality workmanship.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Fair Pricing
                </h3>
                <p className="text-blue-200">
                  Transparent, competitive pricing with no hidden fees. We
                  provide detailed estimates before starting any work.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-blue-200">
                  We stand behind our work with a satisfaction guarantee. Your
                  peace of mind is our priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Get In Touch
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-blue-200 text-lg">(346) 690-3030</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-blue-200 text-lg">
                  homerepairexpress@contractor.net
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
                <p className="text-blue-200 text-lg">
                  24/7 - Available Anytime
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="tel:+13466903030"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200">
            © {new Date().getFullYear()} Home Repair Express. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
