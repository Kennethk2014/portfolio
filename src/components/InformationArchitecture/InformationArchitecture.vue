<template>
    <section class="row align-items-center justify-content-center py-5 mt-5">
        <h3 class="col-12 text-md-center mb-5 mt-xl-5">Information Architecture</h3>
            <img class="col-12 img-fluid" :src="require(`@/assets/images/smartwatt-pf/sitemap.png`)">
    </section>
</template>


<script>
export default {
    
}
</script>

<style scoped>
h3{
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
}
section{
    background-color: rgba(0, 0, 0, 0.03);

}
@media screen and (min-width: 576px) {
    section{
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);    

    }
}
</style>