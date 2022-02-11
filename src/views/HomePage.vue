<template>
    <header class="container-fluid">
        <kinesis-container>
            <section class="row header-section align-items-center justify-content-center">
            
            <div class="circle" />
                <div class="col-12 text-center">
                        <kinesis-element :strength="20"
                            type="depth"
                        >
                            <div class="text-container">
                                <p class="text-light before-text">I AM</p>
                                <h3 class="header-title">KENNETH</h3>
                                <p class="after-text">WEB DEVELOPER &amp; UX DESIGNER</p>
                                <p class="after-text-p">In Oslo</p>
                            </div>
                        </kinesis-element>
                </div>

                    <div class="some-container">
                        <a href="https://github.com/Kennethk2014" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/kenneth_snaps/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCOLRelNcnNcQvxNwvhlJ-bQ" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
            </section>
        </kinesis-container>
    </header>

    <aside class="container">
        <section class="section-about-me row pb-5">
                <div class="col col-12 title-container mb-4">
                    <section-title :isHeading="true" title="ABOUT ME"></section-title>
                </div>
                <div class="img-container col-12 col-md-5 col-lg-6 mt-3">
                    <img class="img-fluid " src="../assets/images/profile-image.jpg" alt="photography of me">
                </div>


                <div class="col-12 col-md-7 col-lg-6 mt-2">
                    <div class="row">
                        <div class="col-12">
                            <welcome-article 
                                title="Welcome!"
                                desc="I'm a norwegian UX-design &amp; web-developer student based in Oslo. I am available for interships, full-time roles &amp; freelance project. I'm a problem solver at heart and love to dive deep into subject to understand them better. My biggest strength is definitley my willingness and eager to learn!"
                            />

                    </div>
                            <div class="list col-12 col-md-6 mt-4">
                                <technologies-list />
                            </div>

                            <div class="list col-12 col-md-6 mt-4">
                                <my-design-skill-list />
                            </div>
                        </div>

                </div>


        </section>
    </aside>
    
    <main class="container-fluid">
        <portfolio-projects-list />
    </main>
    <!-- FOOTER CONTENT WITH CONTACT ME FORM -->
    <footer class="container py-5">
        <section-title :isHeading="true" title="CONTACT ME"></section-title>
            <section class="row mt-4">
              <custom-form-list></custom-form-list>
        </section>
    </footer>
</template>


<script>
import MyDesignSkillList from '../components/MyDesignSkills/MyDesignSkillList.vue'
import SectionTitle from '../components/SectionTitle.vue'
import TechnologiesList from '../components/TechnologiesSkills/TechnologiesList.vue'
import WelcomeArticle from '../components/WelcomeArticle.vue'
import PortfolioProjectsList from '../components/portfolio-projects/PortfolioProjectsList.vue';
import {KinesisContainer, KinesisElement} from 'vue-kinesis';
import CustomFormList from '../components/CustomForm/CustomFormList.vue'
export default {
  components: {KinesisContainer, KinesisElement, SectionTitle, WelcomeArticle, TechnologiesList, MyDesignSkillList, PortfolioProjectsList, CustomFormList},
    
}
</script>

<style scoped>

/* HEADER STYLE */

.header-section{
    color: rgba(255, 255, 255, 0.87);
    overflow-x: hidden;
    height: 100vh;
    position: relative;
}
.some-container{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    position: absolute;
    left: 1rem;
    bottom: 6rem;
}
i{
    color: rgba(255, 255, 255, 0.37);
    transition: 50ms all;
}
i:hover{
    color: #C53D3C;
}
.circle{
    filter: blur(8rem);
    border-radius: 100%;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    left: -40%;
    background: white;
    animation: circleMovement 18s 0s infinite;
}

@keyframes circleMovement {
    0%{
        top: 0;
        left: 0%;
    }
    33%{
        top: 7rem;
        left: 50%;
        
        }
    66%{
        top: 8rem;
        left: 20%;
        
    }
    100%{
        top: 0;
        left: -40%;
    }
}

.col{
    text-align: center;
}
.text-container{
    display: inline-block;
}
.before-text{
    text-align: start;
    padding-left: 2rem;
    font-size: .8rem;
}
.header-title{
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: .8rem;
}
.after-text{
    padding-right: 2rem;
    text-align: right;
    font-size: .8rem;
    color: #C53D3C;
}
.after-text-p{
    text-align: right;
    font-size: .6rem;
    padding-right: 2rem;
    margin-top: -1rem;
    color: rgba(255, 255, 255, 0.37)
}

/* ABOUT ME SECTION */


.title-container{
    margin-top: 1rem;
    z-index: 10;
}
.list{
    font-weight: 700;
    color: rgba(255, 255, 255, 0.87);
}

/* Technology */

/* PORTFOLIO CONTENT */






.section{
    height: 100vh;
}


@media screen and (min-width: 768px) {
    .before-text{
        font-size: 1.2rem;
    }
    .header-title{
        font-size: 5rem;
    }
    .after-text{
        font-size: 1.2rem;
    }
    .after-text-p{
        font-size: 1rem;

    }
    .circle{
        width: 350px;
        height: 350px;
        filter: blur(11rem);
        animation: circleMovement 28s 0s infinite;
    }
    i{
        font-size: 1.5rem;
    }


}

@media screen and (min-width: 1200px) {
        .before-text{
        font-size: 1.8rem;
    }
    .header-title{
        font-size: 8rem;
    }
    .after-text{
        font-size: 1.8rem;
    }
    .after-text-p{
        font-size: 1.4rem;

    }
    i{
        font-size: 2rem;
    }
}
</style>