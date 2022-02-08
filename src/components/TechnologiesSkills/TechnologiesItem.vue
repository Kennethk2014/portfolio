<template>
    <article class="tech-container">
        <p class="tech">{{tech}}</p>
        <p class="skillLvl" >{{skillLvl}}</p>
    </article>
</template>


<script>
export default {
    props: {
        tech: String,
        skillLvl: String,
    }
}
</script>

<style scoped>

.tech{
    margin-bottom: -.2rem;
    color: rgba(255,255,255,0.87);
    font-size: .8rem;
}
.skillLvl{
    font-size: .6rem;
    color: #D8777A;
    font-weight: 400;
}
</style>