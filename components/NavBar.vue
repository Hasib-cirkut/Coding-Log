<template>
  <nav
    class="flex font-playfair bg-gray-800 justify-between items-center py-6 md:p-0"
  >
    <div class="flex md:space-x-8 font-semibold flex-wrap items-center">
      <div class="hidden md:block">
        <nuxt-link to="/">
          <img
            src="~/assets/images/self-logo.png"
            alt="Profile image of blog owner"
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
      <a href="#" class="no-underline text-gray-200 hover:text-sky-400"
        >GitHub</a
      >
      <a
        href="#"
        class="hidden md:block no-underline text-gray-200 hover:text-sky-400"
        >LinkedIn</a
      >
      <a
        href="#"
        class="hidden md:block no-underline text-gray-200 hover:text-sky-400"
        >Twitter</a
      >
    </div>
  </nav>
</template>
