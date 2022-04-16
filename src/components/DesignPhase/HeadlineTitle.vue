<template>
    <article>
        <h5>{{title}}</h5>
        <p>{{title}}</p>
    </article>
</template>

<script>
export default {
    props: {
        title: String,
    }
}
</script>


<style scoped>

    p{
        font-size: 3rem;
        font-weight: 700;
        color: rgba(161, 161, 161, 0.2);
    }

</style>