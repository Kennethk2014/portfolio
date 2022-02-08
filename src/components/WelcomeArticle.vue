<template>
    <article class="welcome-container">
        <p class="title">{{title}}</p>
        <p class="desc">{{desc}}</p>
    </article>
</template>


<script>
export default {
    props: {
        title: String,
        desc: String,
    }
}
</script>


<style scoped>
.welcome-container {
    
}

.title{
    color: rgba(255, 255, 255, 0.87);
    font-weight: 700;
    font-size: 1.3rem;
}
.desc{
    margin-top: -.9rem;
    color: rgba(255, 255, 255, 0.67);
    font-size: .7rem;
    text-align: left;
    line-height: 1.8;

}

@media screen and (min-width: 768px) {

}
</style>