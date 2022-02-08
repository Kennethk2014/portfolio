<template>
            <div class="row">
                <section class="col-12 col-md-6 header-text-container pt-3 pt-md-0 align-self-md-center">
                    <img class="img-fluid img-beer-cap" :src="require('../../assets/images/skum-pf/beer-cap.png')" alt="beer cap">
                    <h1 >SKUM</h1>
                    <p class="h-desc">An app to give beer enthusiasts an easy to use platform where they can discover new beer and share their discoveries with friends.</p>

                </section>

                <section class="col-md-6 d-none d-md-block header-image-container">
                    <img class="img-fluid float-end img-header-mockup" :src="require('../../assets/images/skum-pf/mockup-header.png')" alt="">

                </section>
                <img class="img-fluid" :src="require('../../assets/images/skum-pf/header-divider.png')" alt="">
            </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
.header-text-container{
    overflow: hidden;
    position: relative;
}
.img-beer-cap{
    position: absolute;
    right: -30%;
    top: 20%;
    transform: translateY(-50%);
    width: 300px;
    opacity: 0.04;
}
h1{
    font-weight: 900;
    font-size: 3rem;
}
.h-desc{
     color: rgba(21, 49, 54, 0.67);
     font-weight: 500;
     line-height: 158%;
}
@media screen and (min-width: 768px) {
    h1{
        font-size: 5rem;
        
    }
    .img-beer-cap{
        position: absolute;
        left: -30%;
        top: 30%;
        transform: translateY(-50%);
        width: 300px;
        opacity: 0.04;
    }
    .img-header-mockup{
        width: 300px;
    }
    .header-image-container{
        padding-right: 0;
    }
}
@media screen and (min-width: 1024px) {
    h1{
        font-size: 7rem;
        
    }
    .header-text-container{
        padding-left: 5rem;
    }
    .img-beer-cap{
        position: absolute;
        left: -30%;
        top: 50%;
        transform: translateY(-50%);
        width: 400px;
        opacity: 0.04;
    }
    .img-header-mockup{
        width: 500px;
    }

}
@media screen and (min-width: 1440px) {
    h1{
        font-size: 12rem;
        
    }
    .h-desc{
        font-size: 1.4rem;
    }
    .header-text-container{
        padding-left: 10rem;
    }
    .img-beer-cap{
        position: absolute;
        left: -30%;
        top: 50%;
        transform: translateY(-50%);
        width: 500px;
        opacity: 0.04;
    }
    .img-header-mockup{
        width: 600px;
    }

}
</style>