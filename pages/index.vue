<template>
  <main>
    <section class="flex flex-col justify-center items-center font-montserrat">
      <p class="text-3xl">Hi. I'm Adib Hasib</p>
      <p class="text-2xl">Currently working as Frontend Enginner @ WellDev </p> 
    </section>

    <section class="flex justify-center mt-12 font-playfair space-x-16">
      <div class="flex flex-col items-between space-y-8 max-w-[12rem]">
        <div class="space-y-2">
          <p class="text-slate-400">Biography</p>
          <p>
            CS graduate with interest in
              Software Engineering
              Data Science and
              Machine Learning
          </p>
        </div>

        <div class="space-y-2">
          <p class="text-slate-400">Contact</p>
          <p>
            Dhaka, Bangladesh
            hasibulhuda1@gmail.com
            +8801 627 825 828
          </p>
        </div>

        <div class="space-y-2">
          <p class="text-slate-400">Speciality</p>
          <p>
            Web Application Development
            Expert in Node.js, React.js with a
            hint of MongoDB
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <h1>Based in Bangladesh</h1>
        <img src="~assets/images/waves.png" alt="A banner image containing a wave">
      </div>

      <div class="flex flex-col items-between justify-center space-y-8 max-w-[12rem]">
        <div class="space-y-2">
          <p class="text-slate-400">Experience</p>
          <p>
            Professional Experience 0 years.
            Hands on Experience 2 years.
          </p>
        </div>
        <div class="space-y-2">
          <p class="text-slate-400">Projects Done</p>
          <p>10+</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
