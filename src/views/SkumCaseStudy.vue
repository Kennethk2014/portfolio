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

                    <section class="col-12 col-md-6 mt-4 col-lg-5 ">
                        <h4><span class="span-light">Possible</span> Solutions</h4>
                        <div class="row mt-4">
                            <problems-and-solutions
                                :isProblem="true"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>


<script>
import HeaderSection from '../components/skum-case/HeaderSection.vue'
import ProblemsAndSolutions from '../components/skum-case/ProblemsAndSolutions.vue'
import SkillIcon from '../components/skum-case/SkillIcon.vue'
export default {
  components: { HeaderSection, SkillIcon, ProblemsAndSolutions },
    
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

</style>