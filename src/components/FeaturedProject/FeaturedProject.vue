<template>
    <div class="row justify-content-between align-items-center featured-project-container" v-for="(project, i) in featuredProject" :key="i">
        <div  :style="{fontFamily: `${project.fontFamily}`}" class="col-12 col-md-6">
            
            <p class="intro-title">Featured project</p>
            <div class="py-4">
                <a :href="project.webUrl" target="_blank" class="text-decoration-none text-anim" style="color: #212121">
                    <h3 class="project-title">{{project.title.toUpperCase()}}</h3>
                    <h4 class="project-desc">A website for photographers to connect with and get hired by businesses</h4>
                </a>
            </div>
            <div class="more-container mb-5 pt-md-5 mt-md-5">
                <a href="/#allProjects" style="display: block" class="mb-0">More projects</a>
                <i class="fas fa-caret-down"></i>
            </div>
        </div>
        <a :href="project.webUrl" target="_blank" class="col-12 col-md-5 ">
            <div class="img-container" >
                <img class="img-fluid" src="../../assets/images/mockupphotofindr.jpg" alt="" srcset="">
            </div>
        </a>
    </div>
</template>

<script>
import myProjectsService from '../../services/myProjectsService';
export default {

    setup(){
        const featuredProject = myProjectsService.getProjectByName('photofindr');

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
.more-container > *{
    color: #212121;
    text-decoration: none;
}
.more-container{
    font-weight: 700;
    display: inline-block;
}
@-webkit-keyframes wobble-ver-left {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateY(-30px) rotate(-6deg);
            transform: translateY(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateY(15px) rotate(6deg);
            transform: translateY(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateY(-15px) rotate(-3.6deg);
            transform: translateY(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateY(9px) rotate(2.4deg);
            transform: translateY(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateY(-6px) rotate(-1.2deg);
            transform: translateY(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-ver-left {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateY(-30px) rotate(-6deg);
            transform: translateY(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateY(15px) rotate(6deg);
            transform: translateY(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateY(-15px) rotate(-3.6deg);
            transform: translateY(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateY(9px) rotate(2.4deg);
            transform: translateY(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateY(-6px) rotate(-1.2deg);
            transform: translateY(-6px) rotate(-1.2deg);
  }
}
.more-container:hover{
    -webkit-animation: wobble-ver-left 0.8s both;
    animation: wobble-ver-left 0.8s both;

}
.img-container{
    overflow: hidden;

}
.img-fluid{

    }
.img-fluid:hover{
    transition: transform 4s linear ;
    transform: scale(1.25);

}


@media screen and (min-width: 768px) {
    .project-title{
    font-size: 5rem;
}
}
</style>>
