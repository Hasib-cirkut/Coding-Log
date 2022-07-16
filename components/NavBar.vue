<template>
  <nav
    class="flex flex-wrap font-playfair bg-gray-800 justify-between items-center py-6 md:px-12"
  >
    <div class="flex md:space-x-8 font-semibold flex-wrap items-center">
      <div class="hidden md:block">
        <nuxt-link to="/">
          <nuxt-img
            class="h-12 w-12 rounded-full object-cover"
            src="/profile_image.jpg"
            alt="Profile image of blog owner."
            placeholder
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
      <contact-bar />
    </div>
  </nav>
</template>
