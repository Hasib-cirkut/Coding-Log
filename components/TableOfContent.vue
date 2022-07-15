<template>
  <div id="accordion-collapse" data-accordion="collapse">
    <h2 id="accordion-collapse-heading-1">
      <button
        @click="toggleAccordion"
        type="button"
        class="flex w-full items-center justify-between rounded-t-xl border border-b-0 border-gray-200 bg-gray-100 p-5 text-left font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-800"
        data-accordion-target="#accordion-collapse-body-1"
        aria-expanded="true"
        aria-controls="accordion-collapse-body-1"
      >
        <span class="text-base md:text-xl">Table of contents</span>
        <svg
          data-accordion-icon=""
          class="h-6 w-6 shrink-0 transition-transform duration-300"
          :class="{ 'rotate-180': showAccordion }"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </h2>
    <div
      id="accordion-collapse-body-1"
      class=""
      aria-labelledby="accordion-collapse-heading-1"
      v-show="showAccordion"
    >
      <div
        class="border border-b-0 border-gray-200 p-5 font-light dark:border-gray-700 dark:bg-gray-900"
      >
        <ul class="list-decimal font-playfair">
          <li v-for="item in items" :key="item.id">
            <a
              :href="urlPath + '#' + item.id"
              v-text="item.text"
              class="no-underline"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showAccordion: false,
      urlPath: null,
    };
  },
  methods: {
    toggleAccordion() {
      this.showAccordion = !this.showAccordion;
    },
  },

  mounted() {
    this.urlPath = this.$route.path;
  },
};
</script>

<style></style>
