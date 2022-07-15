<template>
  <main class="flex flex-col font-bitter max-w-3xl mx-auto mt-8">
    <div class="flex flex-col py-4 space-y-4">
      <div>
        <p
          class="font-medium text-2xl tracking-wide text-sky-500 mb-4 font-playfair"
        >
          Recently Published
        </p>
      </div>

      <div class="flex flex-col space-y-4">
        <nuxt-link
          v-for="(post, index) in posts"
          :key="index"
          :to="post.link"
          class="no-underline transition-transform duration-300 hover:translate-x-4"
        >
          <p class="text-emerald-400 text-xl" v-text="post.title" />

          <p class="text-sm text-gray-300 truncate" v-text="post.desc" />
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
      .fetch();

    let posts = [];
    let baseUrl = "/blog";

    articles.forEach((article) => {
      let str = `${baseUrl}/${article.slug}`;

      console.log(str);

      posts.push({
        link: str,
        title: article.Title,
        desc: article.Description,
      });
    });

    return { posts };
  },
};
</script>
