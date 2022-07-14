<template>
  <main class="text-gray-200">
    <section
      class="flex flex-col justify-center items-start md:items-center font-bitter"
    >
      <p class="text-xl lg:text-3xl text-sky-400">Hi. I'm Adib Hasib 👋</p>
      <p class="text-sm lg:text-2xl">
        Currently working as Junior Software Enginner @
        <span>
          <a href="https://welldev.io" class="no-underline text-orange-500"
            >WellDev.io</a
          >
        </span>
      </p>
    </section>

    <section
      class="flex flex-col sm:flex-row justify-center mt-4 sm:mt-12 font-playfair space-y-4 md:space-x-16"
    >
      <div class="flex flex-col items-between space-y-8 max-w-[12rem]">
        <div class="space-y-2">
          <p class="text-sky-400">Biography</p>
          <p>
            CS graduate with interest in Software Engineering Data Science and
            Machine Learning
          </p>
        </div>

        <div class="space-y-2">
          <p class="text-sky-400">Contact</p>
          <p class="lining-nums">
            Dhaka, Bangladesh hasibulhuda1@gmail.com +8801 627 825 828
          </p>
        </div>

        <div class="space-y-2">
          <p class="text-sky-400">Speciality</p>
          <p>
            Web Application Development Expert in Node.js, React.js with a hint
            of MongoDB
          </p>
        </div>
      </div>

      <div class="flex flex-col lg:items-center justify-center">
        <p class="underline decoration-green-500">Based in, Bangladesh</p>
        <img
          class="hidden lg:block"
          src="~assets/images/waves.png"
          alt="A banner image containing a wave"
        />
      </div>

      <div
        class="flex flex-col items-start justify-start lg:justify-center space-y-8 max-w-[12rem]"
      >
        <div class="space-y-2">
          <p class="text-sky-400">Experience</p>

          <div class="flex flex-col space-y-4 text-base">
            <p>
              Professional Experience: <span class="lining-nums">6 months</span>
            </p>
            <p>Hands-on Experience: <span class="lining-nums">2 year+</span></p>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-sky-400">Projects Done</p>
          <p>10+</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
