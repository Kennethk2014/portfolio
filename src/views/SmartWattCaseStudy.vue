<template>
    <div class="smartwatt-case-study">
        <header class="container-fluid">
            <header-case-study
                title="SMARTWATT"
                subtitle="An app to help consumers take back the control of their energy usage by giving them tools to see what and where their energy consumption lies."
                :image="require(`@/assets/images/smartwatt-pf/mockup-3-phones.png`)"
                headerTextColor="#F83889"
             />
        </header>


        <main class="container">
            <project-overview 
                description="In this project we created an app that continously gives you updates on your electricity use. This in an app that lets you have full controll over your house and its every unit that is connected to it."
            />
            <timeline 
                image="smartwatt-pf/Timeline.png"
                mobileImage="smartwatt-pf/Mobile-Timeline.png"
            />
            
            <problems-section 
            
            />

            <explore-phase 
                spanColor="#F83889"
                image="smartwatt-pf/idemyldring.png"
            />

            <!-- <section class="row mt-5 py-5">
                
                
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

                <section class="mt-5">
                    <custom-subtitle
                        title="Starting to conceptualize what we need"
                        class="sub-concept col-12"
                    />
                    <div class="row justify-content-md-between">
                        <img class="img-fluid col-12 col-md-4"  :src="require('@/assets/images/skum-pf/whiteboard.jpg')" alt="whiteboard with post-it-notes">
                        <img class="img-fluid col-md-7 d-none d-md-block"  :src="require('@/assets/images/skum-pf/product-teardown.svg')" alt="whiteboard with post-it-notes">
                    </div>
                </section>

                <section class="mt-5">
                    <custom-subtitle
                        title="Organizing everything so it’s easier to understand"
                        class="cs-org col-12"
                    />
                    <div class="col-12 mt-3">
                        <div>
                            <img class="img-fluid" :src="require('@/assets/images/skum-pf/architecture.png')" alt="">
                        </div>
                    </div>
                </section>


                <section class="mt-5">
                    <h4 class="col-12">Design <span class="span-colored">Phase</span></h4>

                    <section>
                         <custom-subtitle
                        title="Lo-fi Wireframing / Paper Sketches"
                        class="col-12 mt-4 lo-wf"
                        />
                        <div class="row">
                            <div class="col-4">
                                <div>
                                    <img class="img-fluid rounded" :src="require('@/assets/images/skum-pf/lo-fi-profil1.png')" alt="" srcset="">
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img class="img-fluid rounded" :src="require('@/assets/images/skum-pf/lo-fi-profil2.png')" alt="" srcset="">
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img class="img-fluid rounded" :src="require('@/assets/images/skum-pf/lo-fi-start.png')" alt="" srcset="">
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section> -->
        </main>
        <section class="container-fluid hi-fi-section py-3">
            <!-- <section class="mt-5">
                <div class="row justify-content-center">
                <custom-subtitle
                    title="Hi-Fi Wireframing"
                    class="col-12 mb-4 col-md-11 hi-fi-title"
                />
                    <div class="col-12 col-md-6">
                        <img class="img-fluid" :src="require('@/assets/images/skum-pf/prototypes.png')" alt="">
                    </div>
                    <div class="col-8 col-md-4 mt-3 mt-md-0">
                        <img class="img-fluid" :src="require('@/assets/images/skum-pf/prototypes2.png')" alt="">
                    </div>
                </div>
            </section> -->
        <footer class="row text-center py-3">
            <p class="u-dvlp">PAGE UNDER DEVELOPMENT</p>
        </footer>
        </section>
    </div>
</template>


<script>
import ProblemsSection from '../components/ProblemsSection/ProblemsSection.vue';
import HeaderCaseStudy from '../components/HeaderCaseStudy/HeaderCaseStudy.vue'
import ProjectOverview from '../components/ProjectOverview/ProjectOverview.vue'
import Timeline from '../components/Timeline/Timeline.vue';
import ExplorePhase from '../components/ExplorePhase/ExplorePhase.vue';
export default {
  components: {ProblemsSection, Timeline, HeaderCaseStudy, ProjectOverview, ExplorePhase },
  
    
}
</script>


<style>

.smartwatt-case-study{
    background-color: #FFF;
}
</style>