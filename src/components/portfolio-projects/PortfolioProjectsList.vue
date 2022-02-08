<template>
      <div>
               <portfolio-projects-item v-for="(object, i) in allProjects" :key="i"
                    :title="object.title"
                    :description="object.description"
                    :primaryColor="object.primaryColor"
                    :secondaryColor="object.secondaryColor"
                    :imageUrl="object.imageUrl"
                    :textColor="object.textColor"
                    :webUrl="object.webUrl"
               />
               
               
                <!-- <div class="row justify-content-center">
                    <div class="col-12 col-md-5 order-md-2 align-self-center">
                        <img :class="isCaseStudy == true ? 'img-fluid img-case' : 'img-fluid img-web' " :src="require(`../../assets/images/${image}`)" alt="Landing page of photofindr screenshot">
                    </div>
                    <div class="col-12 col-md-5 order-md-1 mt-5">
                        <a :href="link" target="_blank">
                            <img v-if="!projectName" class="img-fluid pf-lp mb-3" :src="require(`../../assets/images/${projectNameTxtImport}`)" alt="" srcset="">
                            <h3 class="project-title" v-else>{{projectName}}</h3>                            
                            <p :class="isCaseStudy == true ? 'desc-case' : 'desc-website'">{{desc}}</p>
                        </a>
                        <a href="#" v-if="isCaseStudy == true"><p class="link-redirect-case mt-4">READ CASE STUDY <i class="fas fa-arrow-right"></i></p></a>
                        <a href="https://photofindr.com" target="_blank" v-else><p class="link-redirect-website mt-4">VISIT WEBSITE <i class=" fas fa-arrow-right orange-icon"></i></p> </a>
                    </div>
                </div>
 -->
            </div>

</template>


<script>
import myProjectsServices from '../../services/myProjectsService';
import PortfolioProjectsItem from './PortfolioProjectsItem.vue';
export default {
  components: { PortfolioProjectsItem },
    props:{
        projectName: String,
        desc: String,
        image: String,
        link: String,
        projectNameTxtImport: String,
        isCaseStudy: Boolean,
    },
    setup(){
        let allProjects = myProjectsServices.getAllProjects();

       
        
        return {
           allProjects,
           
        };
    }

}
</script>

<style scoped>

</style>