<template>
    <section class="row py-5 timeline-section justify-content-center">
        <div class="col-12 mt-xl-5">
            <h3 class="text-md-center mb-5">Timeline</h3>
            <img class="img-fluid d-none d-md-block" :src="require(`@/assets/images/${image}`)" alt="timeline">
            <img class="img-fluid d-md-none" :src="require(`@/assets/images/${mobileImage}`)" alt="timeline">
        </div>
    </section>
</template>


<script>
export default {
    props:{
        image: String,
        mobileImage: String,
    }
    
}
</script>


<style scoped>
.timeline-section{
background-color: rgba(0, 0, 0, 0.03);

}
h3{
    font-size: 2rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
}
@media screen and (min-width: 576px) {
    .timeline-section{
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);    

    }
}
</style>