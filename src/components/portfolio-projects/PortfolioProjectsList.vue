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