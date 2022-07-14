<template>
  <div class="flex justify-center scroll-smooth">
    <article
      class="font-bitter prose prose-invert prose-h1:font-playfair prose-h2:text-yellow-400 max-w-3xl py-8 prose-base md:py-12 lg:prose-lg lg:py-16 overflow-x-hidden"
    >
      <div class="">
        <p
          v-text="article.Title"
          class="font-playfair text-2xl font-bold md:text-4xl"
        />

        <div class="flex flex-col md:flex-row justify-between">
          <p class="text-sm md:text-base m-0">
            Published on:
            <span class="text-yellow-400 font-semibold">{{ publishedOn }}</span>
          </p>
          <p class="text-sm md:text-base">
            Last updated:
            <span class="text-yellow-400 font-semibold">{{ updated }}</span>
          </p>
        </div>

        <p v-text="article.Description" class="not-prose" />

        <div>
          <p>Contents</p>

          <ul class="list-decimal font-playfair">
            <li v-for="item in article.toc" :key="item.id">
              <a
                :href="urlPath + '#' + item.id"
                v-text="item.text"
                class="no-underline"
              />
            </li>
          </ul>
        </div>
      </div>

      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, $dateFns }) {
    const article = await $content("articles", params.slug).fetch();

    //const publishedOn = $dateFns.format(new Date());
    const publishedOn = $dateFns.format(
      new Date(article.createdAt),
      "do MMM, yyyy"
    );

    const updated = $dateFns.formatDistance(
      new Date(article.updatedAt),
      new Date(),
      {
        addSuffix: true,
      }
    );

    return { article, publishedOn, updated };
  },

  data() {
    return {
      urlPath: null,
    };
  },

  mounted() {
    this.urlPath = this.$route.path;
  },
};
</script>
