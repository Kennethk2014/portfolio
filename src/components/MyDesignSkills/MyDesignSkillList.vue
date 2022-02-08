<template>
        <section-title 
            title="Design &amp; Cms"
        />
    <section class="row">
        <article class="col-2 text-center" v-for="(object, i) in iconArray" :key="i">
            <span>
                <i :class="object"></i>        
            </span>
        </article>


    </section>
</template>


<script>
import SectionTitle from '../SectionTitle.vue';
export default {
     components: { SectionTitle},
  setup(){
      const iconArray = ['fab fa-figma', 'fab fa-wordpress-simple', 'fab fa-shopify']



      return{
          iconArray,

      }
  }
    
}
</script>

<style scoped>
   span{
        font-size: 2.3rem;
        color: rgba(255,255,255,0.87);
    }
    p{
        color: rgba(255,255,255,0.87);
        margin-bottom: 0rem; 
    }
    
</style>