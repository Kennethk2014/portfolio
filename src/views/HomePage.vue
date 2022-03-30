<template>
    <header class="container mt-5 " id="home">
       <section class="row justify-content-between py-4 header-section">

                <div class="col-12  col-md-6 title-container">
                    <h1 class="header-title">Hi, I’m Kenneth. <br>I help give lasting first impressions using design.</h1>
                    <p class="header-subtitle mt-md-4">First impressions is hard. By using design prinsiples and human-centered design, your website will stand out from the competition.</p>
                    <router-link to="/contact"><custom-button class="btn-outlined" type="button" value="Contact me"></custom-button></router-link>                    
                </div>
                <div class="img-container mt-5 mt-md-0 col-12 col-md-5 col-lg-5">
                    <img class="img-fluid header-image" src="../assets/images/profil-image.jpg" alt="photography of me">
                </div>
       </section>
    </header>

    <main class="container py-4" id="expertise">
        <h3 class="mt-5 pt-5 mb-lg-5 section-header">My Expertise</h3>
        <section class="row pb-5 mt-4" >
            <div class="row justify-content-between mt-4">
                <my-design-skill-list></my-design-skill-list>
            </div>
        </section>
    </main>



    <section class="container py-4" id="portfolio">
        <h3 class="mt-lg-4 mb-lg-5 py-4 section-header">My Projects</h3>
        <portfolio-projects-list />
    </section>

</template>


<script>

import CustomButton from '../components/CustomButton/CustomButton.vue';
import MyDesignSkillList from '../components/MyDesignSkills/MyDesignSkillList.vue';
import PortfolioProjectsList from '../components/portfolio-projects/PortfolioProjectsList.vue';
import {gsap} from 'gsap';

export default {
  components: { PortfolioProjectsList, CustomButton, MyDesignSkillList},

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

.header-section{
    color: #212121;
}

.header-title{
    font-weight: 500;
    font-size: 2.3rem;
    line-height: 135%;
}
.header-subtitle{
    color: #666666;
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
    font-size: 3rem;
}
.header-subtitle{
    font-size: 1.5rem;
}
    h3{
        font-size: 3rem;
    }
}
@media screen and (min-width: 1440px) {
    .header-title{
    font-size: 4rem;
}
.header-subtitle{
    font-size: 1.5rem;
}
    h3{
        font-size: 4rem;
    }
}





</style>