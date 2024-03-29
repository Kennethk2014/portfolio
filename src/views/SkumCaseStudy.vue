<template>
    <div class="skum-case-study">
        <header class="container-fluid">
            <header-section />
        </header>


        <main class="container">
            <h2 class="text-md-center mt-md-5">Project Overview</h2>
            <div class="row mt-5 justify-content-lg-center">
                <div class="row justify-content-center py-5">
                    <article class="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
                    <h4 class="col-12">Description</h4>
                    <p>
                        The SKUM app is made to give beer enthusiasts an easy to use platform where they can discover new beer and share their discoveries with friends. The focus when designing this app was to make it easy to learn with an intruction-based design.
                    </p>
                </article>
                <article class="col-12 col-md-6 col-lg-5">
                    <h4 class="col-12">My Role</h4>
                    <div class="row mt-3">
                        <skill-icon 
                            title="Research"
                            icon="fas fa-book-open"
                            iconColor="#D2B100"
                        />
                        <skill-icon 
                            title="Wireframe"
                            icon="fas fa-image"
                            iconColor="#D2B100"
                        />
                        <skill-icon 
                            title="UX-design"
                            icon="fas fa-pencil-ruler"
                            iconColor="#D2B100"
                        />
                        <skill-icon 
                            title="Interview planning"
                            icon="fas fa-comment-dots"
                            iconColor="#D2B100"
                        />
                        <skill-icon 
                            title="User-scenario"
                            icon="fas fa-users"
                            iconColor="#D2B100"
                        />
                        <skill-icon 
                            title="Analysis"
                            icon="fas fa-wave-square"
                            iconColor="#D2B100"
                        />

                    </div>
                </article>
                </div>
                
                <!-- PROBLEM POINTS AND SOLUTIONS -->
                <div class="row justify-content-lg-center mt-5">
                    <section class="col-12 col-md-6 col-lg-5 ">
                        <h4>Problem <span class="span-light">Points</span></h4>
                        <div class="row mt-4">
                            <problems-and-solutions
                                :isProblem="false"
                                p1="A customer today is often in a rush which in turn makes searching for places that has their go-to beer sort in store a tideous task."
                                p2="Even more annoying is when you taste or get recommended a new beer, but then forget it’s name or what sort it was."
                                p3="Customers often struggle to find relevant information about tastes of different beer sorts, as in bitterness, sweetness etc."
                                p4="It’s hard to know where you’ll be able to buy some of these unique beers as they are not sold in every store."
                            />
                        </div>
                    </section>

                    <section class="col-12 col-md-6 col-lg-5 ">
                        <h4><span class="span-light">Possible</span> Solutions</h4>
                        <div class="row mt-4">
                            <problems-and-solutions
                                :isProblem="true"
                                p1="Give customers a platform that helps them discover &amp; explore the current beer market."
                                p2="Give customers access to a database where they can save their favorite beers to, and create different lists."
                                p3="Make the most sought after information easily accessible."
                                p4="Help the customers by adding a section to the product where they can see nearby locations the product they are looking for is in store or not."
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
                
                <section class="my-5">
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

                <section class="my-5">
                    <custom-subtitle 
                        title="Let’s dive into the mind of our users"
                        class="dive"
                    />
                    <div class="row justify-content-center">
                        <perspective-card-list />
                    </div>
                </section>

                <section class="my-5">
                    <custom-subtitle
                        title="Starting to conceptualize what we need"
                        class="sub-concept col-12"
                    />
                    <div class="row justify-content-md-between">
                        <img class="img-fluid col-12 col-md-4"  :src="require('@/assets/images/skum-pf/whiteboard.jpg')" alt="whiteboard with post-it-notes">
                        <img class="img-fluid col-md-7 d-none d-md-block"  :src="require('@/assets/images/skum-pf/product-teardown.svg')" alt="whiteboard with post-it-notes">
                    </div>
                </section>

                <section class="my-5">
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
            </section>
        </main>
        <section class="container-fluid hi-fi-section py-3">
            <section class="mt-5">
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
            </section>
        <footer class="row text-center py-3">
            <p class="u-dvlp">UNDER DEVELOPMENT</p>
        </footer>
        </section>
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
.u-dvlp{
    font-size: 1.8rem;
    font-weight: 700;
    color: rgba(21, 49, 54, 0.17);
}
.skum-case-study{
    background: #F0F1E9;
    color: #153136;
    font-family: 'Inter', sans-serif;
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
.sub-concept::after{
    position: relative;
    top: -1rem;
    content: "Getting every important element down on paper then creating the information architecture.";
    font-size: .8rem;
    color: rgba(21, 49, 54, 0.87);
}
.cs-org::after{
    position: relative;
    top: -1rem;
    content: "This was further refining  the earlier hand-written post-it notes. Some of the categories could go under several of the pages, and we had to make that clear.";
    font-size: .8rem;
    color: rgba(21, 49, 54, 0.87);
}
.lo-wf::after{
    position: relative;
    top: -1rem;
    content: "Once we had a clear idea what the different pages should include. We all started sketching out our thoughts.  I focused on the landing page and the profile page, sketching out a couple of different versjons to begin with.";
    font-size: .8rem;
    color: rgba(21, 49, 54, 0.87);
}
.hi-fi-section{
    background: #fdfdfd url('../assets/images/skum-pf/wave.svg');
    background-size: contain;
    background-repeat: no-repeat;

}
.hi-fi-title::after{
    position: relative;
    top: -1rem;
    content: "Based on discussions with the team we found the layout we that best matched what would appeal to our users. We then began expanding upon that design";
    font-size: .8rem;
    color: rgba(21, 49, 54, 0.87);
}

@media screen and (min-width: 1024px) {
    .u-dvlp{
        font-size: 4rem;
    }
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
    .sub-concept::after{
        font-size: 1.2rem;
    }
    .cs-org::after{
        font-size: 1.2rem;
    }
    .lo-wf::after{
        font-size: 1.2rem;
    }
    .hi-fi-title::after{
        font-size: 1.2rem;
    }
}

</style>