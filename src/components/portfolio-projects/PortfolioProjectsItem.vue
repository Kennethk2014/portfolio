<template>
    <article class="col-6">
        <div class="col">
            <a v-if="!isCaseStudy" :href="webUrl" target="_blank">
                <img class="img-fluid" :src="require(`../../assets/images/${imageUrl}`)" alt="project mockup">
                <div class="col text-center mt-2">
                    <h5 style="font-weight: 700;" class="mb-0">{{title}}</h5>
                    <p>{{tags}}</p>
                </div>
            </a>
            <router-link  v-else :to="webUrl">
                <img class="img-fluid" :src="require(`../../assets/images/${imageUrl}`)" alt="project mockup">
                <div class="col text-center mt-2">
                    <h5 style="font-weight: 700;" class="mb-0">{{title}}</h5>
                    <p>{{tags}}</p>
                </div>
            </router-link>
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
*{
    text-decoration: none;
    color: #212121;
}
img{
    width: 100%;
    max-width: 1080px;
}
</style>