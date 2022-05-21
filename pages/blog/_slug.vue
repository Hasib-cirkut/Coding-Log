<template>

<div class="flex justify-center">
    <article class="font-bitter prose prose-slate max-w-none p-8 prose-base md:p-12 lg:prose-lg lg:p-16 overflow-x-hidden">
    <nuxt-content :document="article" />
</article>
</div>
    
</template>

<script>
export default {
    async asyncData({$content, params}){
        const article = await $content('articles', params.slug).fetch()

        return {article}
    }
}
</script>
