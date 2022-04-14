<template>
        <section class="row py-5 my-5 project-overview justify-content-center align-items-center">
            <h3 class="text-md-center mb-5 mb-md-0">Project Overview</h3>
            <div class="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
                <h4 class="col-12">Description</h4>
                <p>
                    {{description}}
                </p>
            </div>
        
            <div class="col-12 col-md-6 col-lg-5 ">
                <h4 class="col-12">My Role</h4>
                <div class="row mt-3">
                    <skill-icon 
                        title="Conceptual model"
                        icon="fas fa-book-open"
                        iconColor="#F83889"
                    />
                    <skill-icon 
                        title="Wireframe"
                        icon="fas fa-image"
                        iconColor="#F83889"
                    />
                    <skill-icon 
                        title="UX-design"
                        icon="fas fa-pencil-ruler"
                        iconColor="#F83889"
                    />
                    <skill-icon 
                        title="Interview planning"
                        icon="fas fa-comment-dots"
                        iconColor="#F83889"
                    />
                    <skill-icon 
                        title="Usability testing"
                        icon="fas fa-users"
                        iconColor="#F83889"
                    />
                    <skill-icon 
                        title="Analysis"
                        icon="fas fa-wave-square"
                        iconColor="#F83889"
                    />
                </div>
            </div>
        </section>
</template>

<script>
import SkillIcon from '../skum-case/SkillIcon.vue'
export default {
    props:{
        description: String,
    },
    components:{
        SkillIcon
    }
}
</script>

<style scoped>
.project-overview{
    height: 70vh;
}
h3{
    font-size: 2rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
}
h4{
    color: rgba(0, 0, 0, 0.87);
    font-size: 1.5rem;
    font-weight: 500;
}
</style>