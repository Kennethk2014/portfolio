<template>
    <article class="col-4">
        <i :class="`${icon}`"></i>
        <p class="">{{title}}</p>
    </article>    
</template>


<script>
export default {
    props: {
        title: String,
        icon: String,
    }
}
</script>



<style scoped>
i{
    font-size: 1.5rem;
    color: #D2B100
}
p{
    font-size: 0.8rem;
}
</style>