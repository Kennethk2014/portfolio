<template>
    <div class="row py-5 gap-5">
        <portfolio-projects-item v-for="(object, i) in allProjects " :key="i"
            :title="object.title"
            :description="object.description"
            :tags="object.tags"
            :imageUrl="object.imageUrl"
            :webUrl="object.webUrl"
            :isCaseStudy="object.isCaseStudy"
            id="allProjects"
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
        description: String,
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