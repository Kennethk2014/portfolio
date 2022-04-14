<template>
    <section class="row justify-content-center align-items-center header-section py-5">
        <div class="col-12  col-md-6 title-container">
            <h1 :style="{color: `${headerTextColor}`}" class="header-title">{{title}}</h1>
            <p class="header-subtitle mt-md-4">{{subtitle}}</p>
        </div>
        <div class="img-container mt-5 mt-md-0 col-12 col-md-5 col-lg-5">
            <img class="img-fluid header-image" :src="image" alt="iphone mockup"> 
        </div>
    </section>  
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        image: String,
        headerTextColor: String,
    }
}
</script>

<style scoped>
.header-section{
    height: 80vh;
    color: #212121;
    background-color: rgba(0, 0, 0, 0.06);
}
.title-container{
    z-index: 2;
}
.header-title{
    font-weight: 700;
    font-size: 2.2rem;
}
.header-subtitle{
    color: #666666;
    font-size: 1rem;
}

@media screen and (min-width: 768px) {
    .header-title{
    font-weight: 700;
    font-size: 4rem;
    }
    .header-subtitle{
    color: #666666;
    font-size: 1.2rem;
    }
}
</style>