
import './style.css'

// Enable smooth scrolling
document.documentElement.classList.add('scroll-smooth')

// Display the website
document.querySelector('#app').innerHTML = `
  <header class="bg-[#20242C] border-b border-[#41434A]">
    <nav
      class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between"
      aria-label="Main navigation"
    >
      <!-- Brand name -->
      <a
        href="#home"
        class="text-2xl font-bold tracking-[0.2em] text-[#D9B978] hover:text-[#F3D9A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]"
      >
        AUREL.
      </a>

      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center gap-10">
        <a href="#home" class="text-[#F3F0E9] font-medium hover:text-[#D9B978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]">Home</a>

        <a href="#about" class="text-[#F3F0E9] font-medium hover:text-[#D9B978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]">About</a>

        <a href="#services" class="text-[#F3F0E9] font-medium hover:text-[#D9B978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]">Services</a>

        <a href="#contact" class="text-[#F3F0E9] font-medium hover:text-[#D9B978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]">Contact</a>
      </div>

      <!-- Mobile hamburger button -->
      <button
        id="menu-button"
        type="button"
        class="md:hidden text-[#D9B978] p-2 hover:bg-[#353A44] rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B978]"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <svg
          id="menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          class="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile navigation -->
    <div id="mobile-menu" class="hidden md:hidden px-6 pb-5">
      <div class="flex flex-col gap-5 border-t border-[#41434A] pt-5">
        <a href="#home" class="text-[#F3F0E9] font-medium hover:text-[#D9B978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]">Home</a>
        <a href="#about" class="text-[#F3F0E9] font-medium hover:text-[#D9B978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]">About</a>
        <a href="#services" class="text-[#F3F0E9] font-medium hover:text-[#D9B978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]">Services</a>
        <a href="#contact" class="text-[#F3F0E9] font-medium hover:text-[#D9B978] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]">Contact</a>
      </div>
    </div>
  </header>

  <main>
    <!-- Home section -->
    <section
      id="home"
      class="min-h-screen bg-[#20242C] flex items-center justify-center px-6 py-24 scroll-mt-6"
    >
      <div class="max-w-3xl text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-[#D9B978] font-semibold mb-6">
          DESIGN WITHOUT LIMITS
        </p>

        <h1 class="text-4xl md:text-6xl font-bold text-[#F3F0E9] leading-tight mb-6">
          A different kind of simplicity.
        </h1>

        <p class="text-lg text-[#C4C2BE] leading-relaxed max-w-xl mx-auto mb-10">
          Thoughtful design. Seamless navigation.
          A better digital experience.
        </p>

        <a
          href="#about"
          class="inline-block bg-[#D9B978] text-[#20242C] px-8 py-3 font-semibold hover:bg-[#F3D9A0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]"
        >
          Explore more
        </a>
      </div>
    </section>

    <!-- About section -->
    <section
      id="about"
      class="bg-[#292E38] px-6 py-24 scroll-mt-6"
    >
      <div class="max-w-4xl mx-auto">
        <p class="text-sm uppercase tracking-[0.3em] text-[#D9B978] font-semibold mb-4">
          ABOUT AUREL
        </p>

        <h2 class="text-3xl md:text-5xl font-bold text-[#F3F0E9] mb-8">
          Simplicity with purpose.
        </h2>

        <p class="text-lg text-[#C4C2BE] leading-relaxed max-w-3xl mb-6">
          AUREL is built around the idea that a good digital experience
          should feel clear, useful and effortless.
        </p>

        <p class="text-lg text-[#C4C2BE] leading-relaxed max-w-3xl">
          We believe thoughtful layouts, accessible navigation and
          consistent design can make every interaction more meaningful.
        </p>
      </div>
    </section>

    <!-- Services section -->
    <section
      id="services"
      class="bg-[#20242C] px-6 py-24 scroll-mt-6"
    >
      <div class="max-w-6xl mx-auto">
        <p class="text-sm uppercase tracking-[0.3em] text-[#D9B978] font-semibold mb-4">
          WHAT WE OFFER
        </p>

        <h2 class="text-3xl md:text-5xl font-bold text-[#F3F0E9] mb-12">
          Our services.
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article class="border-t border-[#D9B978] pt-6">
            <h3 class="text-xl font-semibold text-[#F3F0E9] mb-4">
              Web Design
            </h3>
            <p class="text-[#C4C2BE] leading-relaxed">
              Clean and thoughtful website layouts that make information
              easy to explore.
            </p>
          </article>

          <article class="border-t border-[#D9B978] pt-6">
            <h3 class="text-xl font-semibold text-[#F3F0E9] mb-4">
              Responsive Development
            </h3>
            <p class="text-[#C4C2BE] leading-relaxed">
              Websites that adapt to different screen sizes and devices.
            </p>
          </article>

          <article class="border-t border-[#D9B978] pt-6">
            <h3 class="text-xl font-semibold text-[#F3F0E9] mb-4">
              User Experience
            </h3>
            <p class="text-[#C4C2BE] leading-relaxed">
              Simple navigation and accessible interactions that help
              visitors find what they need.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact section -->
    <section
      id="contact"
      class="bg-[#292E38] px-6 py-24 scroll-mt-6"
    >
      <div class="max-w-4xl mx-auto text-center">
        <p class="text-sm uppercase tracking-[0.3em] text-[#D9B978] font-semibold mb-4">
          GET IN TOUCH
        </p>

        <h2 class="text-3xl md:text-5xl font-bold text-[#F3F0E9] mb-6">
          Let's start a conversation.
        </h2>

        <p class="text-lg text-[#C4C2BE] leading-relaxed max-w-xl mx-auto mb-10">
          Have a question or an idea? We would be happy to hear from you.
        </p>

        <a
          href="mailto:hello@aurel.example"
          class="inline-block border border-[#D9B978] text-[#D9B978] px-8 py-3 font-semibold hover:bg-[#D9B978] hover:text-[#20242C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B978]"
        >
          Send us an email
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-[#20242C] border-t border-[#41434A] px-6 py-8">
    <p class="text-center text-sm text-[#C4C2BE]">
      © 2026 AUREL. Thoughtful design. Better experiences.
    </p>
  </footer>
`

// Mobile menu elements
const menuButton = document.querySelector('#menu-button')
const mobileMenu = document.querySelector('#mobile-menu')
const menuIcon = document.querySelector('#menu-icon')

// Close the mobile menu
function closeMobileMenu() {
  mobileMenu.classList.add('hidden')

  menuButton.setAttribute('aria-expanded', 'false')
  menuButton.setAttribute('aria-label', 'Open navigation menu')

  menuIcon.innerHTML =
    '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />'
}

// Open and close the mobile menu
menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true'

  if (isExpanded) {
    closeMobileMenu()
  } else {
    mobileMenu.classList.remove('hidden')

    menuButton.setAttribute('aria-expanded', 'true')
    menuButton.setAttribute('aria-label', 'Close navigation menu')

    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />'
  }
})

// Close the mobile menu after selecting a link
document.querySelectorAll('#mobile-menu a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu)
})

// Close the mobile menu when Escape is pressed
document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    menuButton.getAttribute('aria-expanded') === 'true'
  ) {
    closeMobileMenu()
  }
})
