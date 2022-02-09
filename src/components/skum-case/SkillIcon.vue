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
    color: rgba(21, 49, 54, 0.87);
}
@media screen and (min-width: 1024px) {
    i{
        font-size:  2rem;
    }
    p{
        font-size: 1.15rem;
    }
}
</style>