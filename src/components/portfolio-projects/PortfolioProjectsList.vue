<template>
    <div style="margin-top: 10rem;">
        <h3>Work hard, seek knowledge</h3>
        <h3 style="font-weight: 400; color: #666666;">Selected projects</h3>
    </div>
    <div class="row py-5">
        <portfolio-projects-item v-for="(object, i) in allProjects.slice(1,3) " :key="i"
            :title="object.title"
            :tags="object.tags"
            :imageUrl="object.imageUrl"
            :webUrl="object.webUrl"
            :isCaseStudy="object.isCaseStudy"
        />
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