<template>
  <div class="flex flex-col justify-center items-center">
    <main
      class="font-bitter prose prose-invert prose-h1:font-playfair prose-h2:text-yellow-400 max-w-3xl py-8 prose-base md:py-12 lg:prose-lg lg:py-16 overflow-x-hidden"
    >
      <nuxt-content :document="article" class="mt-16" />
    </main>

    <contact-bar class="mb-8" />
  </div>
</template>

<script>
import ContactBar from "../../components/ContactBar.vue";
export default {
  components: { ContactBar },
  name: "IndexPage",
  async asyncData({ $content }) {
    const article = await $content("about", "about").fetch();

    return { article };
  },
};
</script>
