<template>
    <section class="row pt-5 justify-content-center align-items-md-center" :style="{backgroundColor: `${secondaryColor}`}">
        <div class="col-12 col-md-5 align-self-center order-md-2">
            <img class="img-fluid" :style="{border: `1px solid ${primaryColor}`}" :src="require(`../../assets/images/${imageUrl}`)" alt="">
        </div>
        <div class="col-12 col-md-5 order-md-1">
            <h3 :style="{color: `${textColor}`}">{{title}}</h3>
            <p :style="{color: `${textColor}`}">{{description}}</p>

            
            <a v-if="isCaseStudy == false" :style="{color: `${textColor}`}" :href="webUrl" target="_blank">See More <i :style="{color: `${primaryColor}`}" class="fas fa-arrow-right"></i></a>
            <router-link v-else :to="webUrl"  :style="{color: `${textColor}`}" >See More <i :style="{color: `${primaryColor}`}" class="fas fa-arrow-right"></i></router-link>

        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
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
section{
    height: 100vh;
}
h3{
    font-size: 4rem;
    font-weight: 700;
}
a{
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
}
i{
    margin-left: .8rem;
}
</style>