<template>
    <section class="row py-5 justify-content-center align-items-center">
        <h3 class="col-12  mt-5 text-center">Design</h3>
        <div class="row py-5 ">
            <article class="col-12 col-md-7 order-2 order-md-1">
                <img class="img-fluid" :src="require(`@/assets/images/smartwatt-pf/wireframes-desktop.png`)" alt="low fidelity mockups">
            </article>
            <article class="col-12 col-md-5 text-center order-1 order-md-2 py-md-5 mt-md-3">
                <headline-title
                title="Wireframes"
                />
            </article>

        </div>


        <div class="row py-5 ">
            <article class="col-12 col-md-8 order-md-1 order-2">
                <img class="img-fluid" :src="require(`@/assets/images/smartwatt-pf/high-fidelity-proto.png`)" alt="low fidelity mockups">
            </article>
            <article class="col-12 col-md-4 text-center py-md-5 mt-md-3">
                <headline-title
                title="Prototype"
                />
            </article>
        </div>

    </section>    
</template>

<script>
import HeadlineTitle from './HeadlineTitle.vue'
export default {
    components: {
        HeadlineTitle,
    }
}
</script>

<style scoped>

h3{
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
}
</style>