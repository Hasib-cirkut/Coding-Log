<template>
    <main class="flex flex-col">
        <nuxt-link v-for="(post, index) in posts" :key="index" :to="post.link">
            {{post.title}}
        </nuxt-link>
    </main>
</template>

<script>
export default {
    async asyncData ({ $content }) {
    const articles = await $content('articles').fetch()

    let posts = []
    let baseUrl = 'http://localhost:3000/blog'

    articles.forEach(article => {
        
        let str = `${baseUrl}/${article.slug}`

        posts.push({
            link: str,
            title: article.Title
        })
        
    })
    
    return {posts}
    }
}
</script>
