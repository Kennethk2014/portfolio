<template>
    <div>
        <header class="container py-5">
            <section class="row justify-content-between">

                <div class="img-container mt-5 mt-md-0 col-12 col-md-5 col-lg-5">
                    <img class="img-fluid header-image" src="../assets/images/about-me-image.jpg" alt="photography of me">
                </div>
                <div class="col-12 pt-4 col-md-6 title-container">
                    <h1 class="header-title">We meet again, at last.</h1>
                    <p class="header-subtitle mt-md-4">I'm a norwegian UX-design &amp; web-developer student based in Norway. I am available for interships, full-time roles and freelance project.</p>
                    <div class="some-container row">
                        <span class="icon col-3"><a target="_blank" href="https://www.youtube.com/channel/UCOLRelNcnNcQvxNwvhlJ-bQ"><i class="fab fa-youtube"></i></a></span>
                        <span class="icon col-3"><a target="_blank" href="https://github.com/Kennethk2014"><i class="fab fa-github"></i></a></span>
                        <span class="icon col-3"><a target="_blank" href="https://www.linkedin.com/in/kenneth-kristiansen-40080986/"><i class="fab fa-linkedin"></i></a></span>
                        <span class="icon col-3"><a target="_blank" href="https://www.instagram.com/kenneth_snaps/"><i class="fab fa-instagram"></i></a></span>
                    </div>
                </div>
            </section>
        </header>
        <main class="container py-5">
            <h3 class="design-process-headline my-5 py-5">My design process for web</h3>
            <section class="row design-row justify-content-between design-process-section">
            <section-title
            class="col-12 col-lg-3 dp-card" 
            title="Explore"
            description="My first step is to really understand the project / problem. In this phase i identify the target group, create user stories and analyses competitors." 
            />
            <section-title
            class="col-12 col-lg-3 dp-card" 
            title="Design"
            description="Create the information architecture. Design low-fidelity wireframes, feedback from product owners and then develop a high fidelity prototype. " 
            />
            <section-title
            class="col-12 col-lg-3 dp-card" 
            title="Testing"
            description="Conducting interviews for usability testing, analyzing feedback, talk with the target group and iterate the design." 
            />
            </section>
        </main>
    </div>
</template>


<script>
import {gsap} from 'gsap';
import SectionTitle from '../components/SectionTitle.vue';
export default {
  components: { SectionTitle },
    mounted(){
        gsap.fromTo('.header-title', 
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            delay: .6,
        }
        )
        gsap.fromTo('.header-image', 
        {
            x: -100,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            delay: .3,

        }
        )
        gsap.fromTo('.dp-card', 
      {
          opacity: 0,
          y: 100,

      },
      {
          scrollTrigger: '.dp-card',
          opacity: 1,
          delay: .2,
          stagger: .2,
          y: 0,

      })
    }
}
</script>

<style scoped>
.header-image{
    transform: rotateY(180deg);
}


a{
    text-decoration: none;
    color: #2B331D;
}
a{
    padding: .5rem;
    font-size: 1.5rem;
    transition: all 200ms ease-in-out;
    border: 1px solid rgba(0,0,0,0.0);
}
.dp-card{
    border-top: 1px solid #A1A1A1;
    /* border-bottom: 1px solid #A1A1A1; */
    padding: 2rem 0rem 2rem 0rem;
    height: 150px;
}
a:hover{
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0px 4px 30px rgba(132, 233, 68, 0.2);
}
.design-process-headline::after{
    display: block;
    content: "I'm a problem solver at heart and love to dive deep into problems to understand them better.";
    color: #666666;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 0.5rem;
}
h3{
    font-weight: 500;
    font-size: 2.3rem;
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
.dp-card{
    border-top: 1px solid #A1A1A1;
    padding: 2rem 0rem 2rem 0rem;
    height: 280px;
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