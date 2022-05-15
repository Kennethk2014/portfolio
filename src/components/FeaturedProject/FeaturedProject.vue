<template>
    <div class="row justify-content-between align-items-center featured-project-container" v-for="(project, i) in featuredProject" :key="i">
        <div class="col-12 col-md-6">
            
            <p class="intro-title">Featured project</p>
            <div class="py-4">
                <router-link to="/portfolio/skum" class="text-decoration-none text-anim" style="color: #212121">
                    <h3 class="project-title">{{project.title.toUpperCase()}}</h3>
                    <h4 class="project-desc">Discover &amp; share beer with friends.</h4>
                </router-link>
            </div>
            <div class="more-container mb-5 pt-md-5 mt-md-5">
                <p class="mb-0">More projects</p>
                <i class="fas fa-caret-down"></i>
            </div>
        </div>
        <router-link to="/portfolio/skum" class="col-12 col-md-5 ">
            <div class="img-container" />
        </router-link>
    </div>
</template>

<script>
import myProjectsService from '../../services/myProjectsService';
export default {

    setup(){
        const featuredProject = myProjectsService.getProjectByName('skum');

        return {
            featuredProject,
        }
    }

}
</script>

<style scoped>
.featured-project-container{
    color: #212121;
    
}

.project-title{
    font-size: 2.5rem;
    font-weight: 700;
}
.project-desc{
    color: #666666;
}
.intro-title{
    color: #666666;
    font-weight: 600;
}
.more-container{
    font-weight: 700;
}
.img-container{
    height: 400px;
    overflow: hidden;
    transition: all 300ms linear;
    background-image: url("../../assets/images/skum-app-mockup.png");
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
}
.img-container:hover{
    transform: scale(.95);
    background-size: 120%;
}


@media screen and (min-width: 768px) {
    .project-title{
    font-size: 5rem;
}
}
</style>>
