<template>
    <div class="skum-case-study">
        <header class="container-fluid">
            <header-section />
        </header>


        <main class="container">
            <h2 class="text-md-center">Project Overview</h2>
            <div class="row mt-5 justify-content-lg-center">
                <section class="col-12 col-md-6 col-lg-5">
                    <h4 class="col-12">Description</h4>
                    <p>
                        The SKUM app is made to give beer enthusiasts an easy to use platform where they can discover new beer and share their discoveries with friends. The focus when designing this app was to make it easy to learn with an intruction-based design.
                    </p>
                </section>
                <section class="col-12 col-md-6 col-lg-5">
                    <h4 class="col-12">My Role</h4>
                    <div class="row mt-3">
                        <skill-icon 
                            title="Research"
                            icon="fas fa-book-open"
                        />
                        <skill-icon 
                            title="Wireframe"
                            icon="fas fa-image"
                        />
                        <skill-icon 
                            title="UX-design"
                            icon="fas fa-pencil-ruler"
                        />
                        <skill-icon 
                            title="Interview planning"
                            icon="fas fa-comment-dots"
                        />
                        <skill-icon 
                            title="User-scenario"
                            icon="fas fa-users"
                        />
                        <skill-icon 
                            title="Analysis"
                            icon="fas fa-wave-square"
                        />

                    </div>
                </section>
                <!-- PROBLEM POINTS AND SOLUTIONS -->
                <div class="row justify-content-lg-center mt-5">
                    <section class="col-12 col-md-6 col-lg-5 ">
                        <h4>Problem <span class="span-light">Points</span></h4>
                        <div class="row mt-4">
                            <problems-and-solutions
                                :isProblem="false"
                            />
                        </div>
                    </section>

                    <section class="col-12 col-md-6 col-lg-5 ">
                        <h4><span class="span-light">Possible</span> Solutions</h4>
                        <div class="row mt-4">
                            <problems-and-solutions
                                :isProblem="true"
                            />
                        </div>
                    </section>
                </div>
            </div>


            <section class="design-process-section row mt-5 justify-content-md-center">
                <h4 class="dps-h4 col-12">Design <span class="span-light">Process</span></h4>
                    <design-process-list />
            </section>

            <section class="row mt-5 py-5">
                <h4 class="col-12 mb-4"><span class="span-colored">Explore</span> Phase</h4>
                <section>
                    <custom-subtitle 
                        title="The search for ideas"
                        desc="To start off this project it was important to me that the entire group was happy and intrigued by the task we decided to work on. So i suggested 
                                an elimination strategy where for each round we were assigned a set amount of votes to use, and in the end land on one project we all could enjoy working on."
                    />
                    <img class="img-fluid" src="../assets/images/skum-pf/idemyldring.png" alt="" srcset="">
                </section>
                
                <section class="mt-5">
                    <div class="row">
                        <div class="col-12 col-md-7 col-lg-6">
                            <custom-subtitle 
                                title="We have our idea, but what’s our target group?"
                                desc="With data collected from looking at the competitive marked, talking with people and asking around, we came up with one primary target group."
                                
                            />
                            <p>Beer enthusiasts in Norway between the ages of 30-50 years. Typical for these poeple is that they have a stable salary and can afford to buy finer and more luxurious beer. They are proud of the knowledge they have about beer and would love to share it with other people.</p>

                        </div>
                        <img class="d-none d-md-block col-md-5 col-lg-6" src="../assets/images/skum-pf/coffee-illustration.svg" alt="Illustration of people holding a beer">

                    </div>
                </section>

                <section class="mt-5">
                    <custom-subtitle 
                        title="Let’s dive into the mind of our users"
                        class="dive"
                    />
                    <div class="row justify-content-center">
                        <perspective-card-list />
                    </div>

                </section>
            </section>
        </main>
    </div>
</template>


<script>
import CustomSubtitle from '../components/CustomSubtitle/CustomSubtitle.vue'
import DesignProcessList from '../components/skum-case/DesignProcess/DesignProcessList.vue'
import HeaderSection from '../components/skum-case/HeaderSection.vue'
import ProblemsAndSolutions from '../components/skum-case/ProblemsAndSolutions.vue'
import SkillIcon from '../components/skum-case/SkillIcon.vue'
import PerspectiveCardList from '../components/PerspectiveCard/PerspectiveCardList.vue';
export default {
  components: { HeaderSection, SkillIcon, ProblemsAndSolutions, DesignProcessList, CustomSubtitle, PerspectiveCardList },
    
}
</script>


<style scoped>
.skum-case-study{
    background: #F0F1E9;
    color: #153136;
}

/* GENERAL STYLES */
h2{
    font-size: 2rem;
    font-weight: 700;
    color: rgba(21, 49, 54, 0.87);
}
h4{
    color: rgba(21, 49, 54, 0.87);
    font-size: 1.5rem;
    font-weight: 700;

}
p{
    color: rgba(21, 49, 54, 0.67);
    line-height: 178%;
    
}
.span-light{
    font-weight: 400;
}
.span-colored{
    color: #D2B100;
}
/* HEADER SECTION */
header{
    padding-bottom: 3rem ;
}

/* MAIN SECTION */

/* DESIGN PROCESS */
.dps-h4::before{
    display: block;
    content: '4 week';
    font-weight: 500;
    color: rgba(21, 49, 54, 0.67);
    font-size: 1rem;
}
.dps-h4::after{
    display: block;
    content: "We were three designers on this projects, and all agreed on what strategies to take before starting our endeavour.";
    font-weight: 400;
    font-size: 0.8rem;
    color: rgba(21, 49, 54, 0.67);
    margin-top: 0.5rem;
}

.dive::after{
    position: relative;
    content: "User-scenarios";
    top: -1rem;
    color: rgba(21, 49, 54, 0.87);
    font-size: .8rem;
}


@media screen and (min-width: 1024px) {
    h2{
        font-size: 4rem;
    }
    h4{
        font-size: 2rem;
    }

    .dps-h4::before{
        font-size: 1.5rem;
    }
    .dps-h4::after{
        font-size: 1.2rem;
    }
    p{
        font-size: 1.2rem;
    }
    .dive::after{
        font-size: 1.2rem;
    }
}
</style>