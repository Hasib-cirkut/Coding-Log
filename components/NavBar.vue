<template>
  <nav
    class="flex font-playfair bg-gray-800 justify-between items-center py-6 md:px-12"
  >
    <div class="flex md:space-x-8 font-semibold flex-wrap items-center">
      <div class="hidden md:block">
        <nuxt-link to="/">
          <img
            class="h-12 w-12 rounded-full object-cover"
            src="https://i.ibb.co/7g2qYFV/IMG-20200811-181855.jpg"
            alt="Profile image of blog owner."
          />
        </nuxt-link>
      </div>

      <nuxt-link
        to="/"
        class="no-underline text-gray-100 hover:text-sky-400 md:hidden"
      >
        <p>Home</p>
      </nuxt-link>

      <nuxt-link
        to="/about"
        class="no-underline text-gray-100 hover:text-sky-400 ml-4 md:m-0"
      >
        <p>About</p>
      </nuxt-link>
    </div>

    <div class="flex space-x-4">
      <a
        href="https://github.com/Hasib-cirkut"
        class="no-underline text-gray-200 hover:text-sky-400"
        >GitHub</a
      >
      <a
        href="https://www.linkedin.com/in/hasibul-huda-2042ba159/"
        class="hidden md:block no-underline text-gray-200 hover:text-sky-400"
        >LinkedIn</a
      >
      <a
        href="https://twitter.com/HudaHasibul"
        class="hidden md:block no-underline text-gray-200 hover:text-sky-400"
        >Twitter</a
      >
    </div>
  </nav>
</template>
