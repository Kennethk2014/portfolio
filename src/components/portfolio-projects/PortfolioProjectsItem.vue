<template>
    <article class="col-6">
        <div class="col">
            <a v-if="!isCaseStudy" :href="webUrl" target="_blank">
                <img class="img-fluid" :src="require(`../../assets/images/${imageUrl}`)" alt="project mockup">
            </a>
            <router-link v-else :to="webUrl">
                <img class="img-fluid" :src="require(`../../assets/images/${imageUrl}`)" alt="project mockup">
            </router-link>
        </div>
        <div class="col text-center mt-2">
            <h5 style="font-weight: 500;" class="mb-0">{{title}}</h5>
            <p>{{tags}}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        title: String,
        tags: String,
        primaryColor: String,
        secondaryColor: String,
        imageUrl: String,
        webUrl: String,
        textColor: String,
        isCaseStudy: Boolean,
    }
}
</script>

<style scoped>

</style>