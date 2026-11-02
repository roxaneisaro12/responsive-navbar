
import './style.css'

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

  <!-- Main content -->
  <main
    id="home"
    class="min-h-screen bg-[#20242C] flex items-center justify-center px-6"
  >
    <section class="max-w-3xl text-center py-24">

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

    </section>
  </main>
`

// Mobile menu functionality
const menuButton = document.querySelector('#menu-button')
const mobileMenu = document.querySelector('#mobile-menu')
const menuIcon = document.querySelector('#menu-icon')

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true'

  mobileMenu.classList.toggle('hidden')

  menuButton.setAttribute('aria-expanded', String(!isExpanded))

  menuButton.setAttribute(
    'aria-label',
    isExpanded ? 'Open navigation menu' : 'Close navigation menu'
  )

  menuIcon.innerHTML = isExpanded
    ? '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />'
    : '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />'
})

// Close the mobile menu after selecting a link
document.querySelectorAll('#mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')

    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Open navigation menu')

    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />'
  })
})
// Close the mobile menu when Escape is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    mobileMenu.classList.add('hidden')

    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Open navigation menu')

    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />'
  }
})
