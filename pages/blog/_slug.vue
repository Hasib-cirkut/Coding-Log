<template>
  <div class="flex justify-center scroll-smooth">
    <article
      class="font-bitter prose prose-invert prose-h1:font-playfair prose-h2:text-yellow-400 max-w-3xl py-8 prose-base md:py-12 lg:prose-lg lg:py-16 overflow-x-hidden"
    >
      <div class="">
        <p
          v-text="article.Title"
          class="font-playfair text-2xl text-center font-bold md:text-4xl"
        />

        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm md:text-base m-0">
            Published on:
            <span class="text-yellow-400 font-semibold">{{ publishedOn }}</span>
          </p>

          <p
            class="h-fit bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            <svg
              class="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ article.readingStats.text }}
          </p>
        </div>

        <div class="flex justify-center md:justify-end">
          <p class="text-sm"><span v-text="pageViews" /> views</p>
        </div>

        <template v-if="tocAvailable">
          <TableOfContentVue :items="article.toc" />
        </template>
      </div>

      <nuxt-content :document="article" class="mt-16" />
    </article>
  </div>
</template>

<script>
import TableOfContentVue from "../../components/TableOfContent.vue";

export default {
  async middleware({ $supabase, route }) {
    const { data, error } = await $supabase.rpc("incrementview", {
      slug: route.params.slug,
    });

    if (error) console.error(error);

    if (data !== null) return;

    // Insert new row in pageVisit table

    const { insertData, insertError } = await $supabase
      .from("pagevisit")
      .insert([{ id: route.params.slug, view_count: 1 }]);

    if (insertError) console.error(insertError);
  },
  components: {
    TableOfContentVue,
  },
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

    const tocAvailable = article.toc?.length > 0;

    return { article, publishedOn, updated, tocAvailable };
  },

  data() {
    return {
      urlPath: null,
      pageViews: 0,
    };
  },

  head() {
    return {
      title: this.article.Title,
    };
  },

  async mounted() {
    this.urlPath = this.$route.path;

    const { data, error } = await this.$supabase
      .from("pagevisit")
      .select("view_count")
      .eq("id", this.$route.params.slug);

    if (error) console.error(error);

    this.pageViews = data[0]["view_count"];
  },
};
</script>
