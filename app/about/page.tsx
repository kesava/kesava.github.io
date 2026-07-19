import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl">
      <header className="mb-20 text-center border-b border-neutral-200 dark:border-neutral-800 pb-12">
        <h1 className="font-display text-6xl font-bold mb-6 text-heading">
          About Me
        </h1>
      </header>

      <div className="space-y-16">
        {/* Introduction */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 pb-16">
          <h2 className="font-display text-3xl font-bold mb-6 text-heading">Staff Engineer</h2>
          <div className="space-y-6 font-serif text-neutral-800 dark:text-neutral-300 text-lg leading-relaxed">
            <p>
              I&apos;m a Staff Engineer with over 11 years building and architecting
              large-scale web properties. I bridge the gap between design and engineering,
              creating experiences that are both technically sound and delightful to use.
            </p>
            <p>
              With deep expertise in Ruby on Rails, JavaScript, and user-centered design, I&apos;ve spent
              years building scalable web applications across e-commerce, healthcare technology, and
              enterprise platforms. I lead teams of UI engineers, build developer tooling, and
              collaborate across domains to deliver superior products and user experiences.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 pb-16">
          <h2 className="font-display text-3xl font-bold mb-8 text-heading">Professional Experience</h2>

          <div className="space-y-10">
            {/* Apple */}
            <div className="border-l-4 border-accent dark:border-accent pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <h3 className="font-display text-2xl font-bold text-heading">Apple</h3>
                <span className="font-serif text-sm text-neutral-500 dark:text-neutral-600">Jul 2014 - Present · 11 yrs</span>
              </div>
              <div className="mb-4">
                <p className="font-serif text-lg text-accent dark:text-accent font-semibold">Staff Software Engineer</p>
                <p className="font-serif text-sm text-neutral-500 dark:text-neutral-600">Sep 2022 - Present · 3 yrs 4 mos · Sunnyvale, CA</p>
              </div>
              <ul className="space-y-3 font-serif text-neutral-800 dark:text-neutral-300 leading-relaxed">
                <li>• Architecting, building, and maintaining AppleCare properties including discussions.apple.com, developer.apple.com/forums, support.apple.com, getsupport.apple.com, and KB articles</li>
                <li>• Leading a team of vendor UI engineers across multiple projects</li>
                <li>• Built babel plugins, rich text editor parsers/plugins, linters, and front-end tooling to improve developer experience</li>
                <li>• Collaborating across domains, teams, and roles to deliver superior product and user experiences</li>
              </ul>
            </div>

            {/* Vital Connect */}
            <div className="border-l-4 border-accent dark:border-accent pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <h3 className="font-display text-2xl font-bold text-heading">Vital Connect</h3>
                <span className="font-serif text-sm text-neutral-500 dark:text-neutral-600">Jan 2012 - Apr 2014 · 2 yrs 4 mos</span>
              </div>
              <p className="font-serif text-lg text-accent dark:text-accent font-semibold mb-1">Senior Software Engineer</p>
              <p className="font-serif text-sm text-neutral-500 dark:text-neutral-600 mb-4">Campbell, CA</p>
              <ul className="space-y-3 font-serif text-neutral-800 dark:text-neutral-300 leading-relaxed">
                <li>• Redesigned big data batch process for computing Heart-Rate-Variability for performance improvements</li>
                <li>• Designed Ruby WebSocket-based real-time vitals, ECG, and notifications streaming service</li>
                <li>• Built Rails/JavaScript/d3.js visualization for real-time ECG and historical vitals data</li>
                <li>• Developed Ruby gems for internal web services and authentication</li>
                <li>• Designed and documented Vital Connect external-facing web services API</li>
                <li>• Built UI for monitoring real-time body vitals using Backbone.js and Ruby on Rails</li>
              </ul>
            </div>

            {/* Walmart.com */}
            <div className="border-l-4 border-accent dark:border-accent pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <h3 className="font-display text-2xl font-bold text-heading">Walmart.com</h3>
                <span className="font-serif text-sm text-neutral-500 dark:text-neutral-600">May 2009 - May 2011 · 2 yrs 1 mo</span>
              </div>
              <p className="font-serif text-lg text-accent dark:text-accent font-semibold mb-4">Rails Developer & Information Architect</p>
              <ul className="space-y-3 font-serif text-neutral-800 dark:text-neutral-300 leading-relaxed">
                <li>• Designed and developed an e-commerce prototyping platform for Walmart.com UX team using Ruby on Rails</li>
                <li>• Built highly functional prototypes for faceted search, cart checkout, site widening</li>
                <li>• Created mobile versions of search and cart checkout for iPhone, Android, and BlackBerry</li>
                <li>• Redesigned Store Locator search and developed Apache log analysis scripts for user research</li>
                <li>• Set up Rails server and prototyping hosting/deployment environments</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 pb-16">
          <h2 className="font-display text-3xl font-bold mb-8 text-heading">Education</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-accent dark:border-accent pl-6">
              <h3 className="font-display text-xl font-bold text-heading">UC Berkeley School of Information</h3>
              <p className="font-serif text-lg text-accent dark:text-accent font-semibold">Master of Information Management and Systems (MIMS)</p>
              <p className="font-serif text-sm text-neutral-500 dark:text-neutral-600 mb-3">2006 - 2008</p>
              <p className="font-serif text-neutral-800 dark:text-neutral-300 leading-relaxed">Product Design, Information Visualization, Intellectual Property Law, Privacy & Security, Economics of Information Technology, Research Seminar on Social Media</p>
            </div>

            <div className="border-l-4 border-accent dark:border-accent pl-6">
              <h3 className="font-display text-xl font-bold text-heading">Birla Institute of Technology and Science, Pilani</h3>
              <p className="font-serif text-lg text-accent dark:text-accent font-semibold">Bachelor of Engineering (BE), Computer Science</p>
              <p className="font-serif text-sm text-neutral-500 dark:text-neutral-600">1998 - 2003</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 pb-16">
          <h2 className="font-display text-3xl font-bold mb-8 text-heading">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4 text-accent dark:text-accent">User Experience & Design</h3>
              <ul className="space-y-2 font-serif text-neutral-800 dark:text-neutral-300">
                <li>• User Experience (UX)</li>
                <li>• User Interface Design</li>
                <li>• Interaction Design</li>
                <li>• Information Architecture</li>
                <li>• Wireframes & Prototyping</li>
                <li>• User Scenarios</li>
                <li>• Heuristic Evaluation</li>
                <li>• Accessibility</li>
                <li>• User-centered Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-4 text-accent dark:text-accent">Backend Development</h3>
              <ul className="space-y-2 font-serif text-neutral-800 dark:text-neutral-300">
                <li>• Ruby on Rails</li>
                <li>• Ruby</li>
                <li>• Node.js</li>
                <li>• Python</li>
                <li>• Java</li>
                <li>• Web Services & APIs</li>
                <li>• WebSockets & XMPP</li>
                <li>• Event Driven Programming</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-4 text-accent dark:text-accent">Frontend & Web</h3>
              <ul className="space-y-2 font-serif text-neutral-800 dark:text-neutral-300">
                <li>• JavaScript (ES6+)</li>
                <li>• HTML5 & CSS3</li>
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• d3.js (Data Visualization)</li>
                <li>• Babel.js & Build Tools</li>
                <li>• Backbone.js & Mustache</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-4 text-accent dark:text-accent">Languages & Tools</h3>
              <ul className="space-y-2 font-serif text-neutral-800 dark:text-neutral-300">
                <li>• Scala, Clojure, Elixir, OCaml</li>
                <li>• Git & Version Control</li>
                <li>• MongoDB & Redis</li>
                <li>• Agile Methodologies</li>
                <li>• RSpec (Testing)</li>
                <li>• Hadoop</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="border-b border-neutral-200 dark:border-neutral-800 pb-16">
          <h2 className="font-display text-3xl font-bold mb-6 text-heading">What I Do</h2>
          <div className="space-y-6 font-serif text-neutral-800 dark:text-neutral-300 text-lg leading-relaxed">
            <p>
              In my day job, I architect and build large-scale web applications that serve millions of users
              across support communities, developer forums, and knowledge bases. I lead engineering
              teams, build developer tooling like Babel plugins and rich text editor parsers, and ensure
              seamless collaboration across product, design, and engineering.
            </p>
            <p>
              My experience spans healthcare technology at Vital Connect—where I built real-time vitals
              monitoring systems using WebSockets and d3.js—to e-commerce at Walmart.com, where I created
              rapid prototyping platforms for UX teams and mobile-first shopping experiences.
            </p>
            <p>
              Beyond my day job, I build educational applications focused on Telugu language learning,
              explore compiler design and functional programming, and translate classical Telugu poetry.
              I believe in combining technical depth with cultural preservation, creating tools that
              both solve problems and preserve heritage.
            </p>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="text-center">
          <h2 className="font-display text-3xl font-bold mb-4 text-heading">Let&apos;s Connect</h2>
          <p className="font-serif text-neutral-800 dark:text-neutral-300 text-lg mb-8 leading-relaxed">
            Interested in collaborating or have questions? Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://github.com/kesava"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-heading underline decoration-2 decoration-accent hover:decoration-accent-dark transition-colors underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/kesava"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/kesava"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-neutral-700 dark:text-neutral-400 hover:text-heading transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
