import { useState } from "react";

function AboutUs() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      {/* BODY */}
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-[#111418] dark:text-white transition-colors duration-300">

        {/* HEADER */}
        <header className="flex items-center justify-between border-b border-[#f0f2f4] dark:border-slate-800 bg-white dark:bg-background-dark px-10 py-3 sticky top-0 z-50">
          <h2 className="text-lg font-bold">DataBridge Solutions</h2>

          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium">
              <a className="hover:text-primary transition" href="#">Home</a>
              <a className="hover:text-primary transition" href="#">Services</a>
              <a className="text-primary font-bold" href="#">About Us</a>
            </nav>

            <button
              onClick={() => setDark(!dark)}
              className="h-10 w-10 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Toggle Dark Mode"
            >
              🌙
            </button>

            <button className="px-4 h-10 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition">
              Get a Quote
            </button>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex flex-col items-center">
          <div className="max-w-[1120px] w-full px-4 md:px-10 py-12">

            {/* HERO */}
            <section className="flex flex-col lg:flex-row gap-10 items-center">
              <div
                className="w-full aspect-video bg-cover bg-center rounded-xl shadow-lg"
                style={{ backgroundImage: "url('/assets/images/aboutusimage.jpeg')" }}
              />

              <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-black">
                THIS IS MY REAL PAGE

                  Trust, Accuracy, and Global Scalability
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  DataBridge Solutions delivers world-class IT and BPO services with absolute accuracy and seamless scalability.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 h-12 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition">
                    Our Services
                  </button>
                  <button className="px-6 h-12 border border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-16 py-12 text-center bg-white dark:bg-slate-900 rounded-3xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">
                Ready to scale your data operations with accuracy?
              </h2>
              <button className="h-12 px-8 border-2 border-primary rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition">
                Work With Us
              </button>
            </section>

          </div>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-[#f0f2f4] dark:border-slate-800 py-8 text-center">
          <p className="text-sm font-bold">
            © 2026 DataBridge Solutions Inc.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default AboutUs;
