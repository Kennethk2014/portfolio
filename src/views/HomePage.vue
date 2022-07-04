<template>
    <header class="container-fluid py-5  " id="home">
       <section class="row justify-content-center py-4 header-section">
                <div class="col-12  col-md-6 title-container">
                    <h1 class="header-title">I create unique, branded websites for small businesses in Norway.</h1>
                    <p class="header-subtitle mt-md-4">Let’s focus on solving business problems together, that's how we create good solutions.</p>
                    <a href="mailto:kennethk2014@gmail.com" target="_top"><custom-button :isIcon="true" icon="bi bi-arrow-up-right" class="btn-primary" type="button" value="Contact me"></custom-button></a>                    
                </div>
                <div class="img-container mt-5 mt-md-0 col-12 col-md-5 col-lg-5">
                    <img class="img-fluid header-image" src="../assets/images/profil-image.jpg" alt="photography of me">
                </div>
       </section>
    </header>

    <section class="container py-4 mt-lg-4 overflow-hidden" id="portfolio">
        <portfolio-projects-list />
    </section>

    <section class="container">
        <h3 class="mt-5 pt-xl-5 mb-lg-5 section-header testemonial-header">Testimonials</h3>
        <div class="row mt-md-5 justify-content-center">
            <testimonial-list></testimonial-list>

        </div>

    </section>

    <main class="container py-4" id="expertise">
        <h3 class="mt-5 pt-5 mb-lg-5 section-header">My Expertise</h3>
        <section class="row pb-5 mt-4" >
            <div class="row justify-content-between mt-4">
                <my-design-skill-list></my-design-skill-list>
            </div>
        </section>
    </main>





    <section class="pt-1 pb-5 container">
        <h3 class="mt-1 pt-1 mb-lg-5 section-header">Want to know more?</h3>
       <a href="mailto:kennethk2014@gmail.com" target="_top"><custom-button :isIcon="true" icon="bi bi-arrow-up-right" type="button" class="btn-outlined" value="Send me an email"></custom-button></a> 
    </section>

</template>


<script>

import CustomButton from '../components/CustomButton/CustomButton.vue';
import MyDesignSkillList from '../components/MyDesignSkills/MyDesignSkillList.vue';
import PortfolioProjectsList from '../components/portfolio-projects/PortfolioProjectsList.vue';
import {gsap} from 'gsap';
import TestimonialList from '../components/testimonialCard/testimonialList.vue';

export default {
  components: { PortfolioProjectsList, CustomButton, MyDesignSkillList, TestimonialList},

    setup(){
        return{

        }
    },
    mounted(){
        gsap.fromTo('.header-title', 
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            delay: .3,
        }
        )
        gsap.fromTo('.header-image', 
        {
            x: 500,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            delay: .6,

        }
        )
    }
}
</script>

<style scoped>

/* HEADER STYLE */
.section-header{
    position: relative;

}
header{
    background: url("../assets/images/header-background.jpg");
    background-size: cover;
}
.header-image{
    height: auto;
    width: 320px;
    object-fit: cover;
    border-radius: 10px;
    
}
.img-container{
    display: flex;
    justify-content: center;
}
.header-section{
    color: #f1f1f1;
    overflow: hidden;
}
.testemonial-header::after{
    color: #a1a1a1;
    display: block;
    content: "Clients say";
}

.header-title{
    font-weight: 500;
    font-size: 2.3rem;
    line-height: 135%;
}
.header-subtitle{
    color: #b3b3b3;
    font-size: 1.1rem;
}
h3{
    font-weight: 500;
    font-size: 2.3rem;
}
.row{
    --bs-gutter-x: 0;
}
@media screen and (min-width: 1024px) {
    .header-title{
    font-size: 2.5rem;
}
.header-subtitle{
    font-size: 1.2rem;
}
    h3{
        font-size: 3rem;
    }
}
@media screen and (min-width: 1440px) {
    .header-title{
    font-size: 60px;
}
.header-subtitle{
    font-size: 22px;
}
    h3{
        font-size: 4rem;
    }
}





</style>