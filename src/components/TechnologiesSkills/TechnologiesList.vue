<template>
    <section-title 
        title="Technology"
    />

    <technologies-item v-for="(object, i) in technologyArray" :key="i" 
        :tech="object.tech"
        :skillLvl="object.skillLvl"
    >
    </technologies-item>
<!--     <article>
        <ul class="list-skills">
            <li v-for="(object, i) in skillLvlArray" :key="i">{{object}}</li>
        </ul>
    </article> -->
</template>

<script>
import TechnologiesItem from './TechnologiesItem.vue'
import SectionTitle from '../SectionTitle.vue';

export default {
  components: { TechnologiesItem, SectionTitle },
  setup(){

      /* THESE MIGHT BE MOVED TO ITS OWN SERVICES, CONSIDERING */
      const skillLvlArray = ['Beginner', 'Advanced beginner', 'Competent', 'Proficient', 'Expert']
      const technologyArray = [
          {
              tech: 'React w/Material Design',
              skillLvl: skillLvlArray[1]
          },
          {
              tech: 'HTML/CSS/JavaScript',
              skillLvl: skillLvlArray[2],
          },
          {
              tech: 'VueJs',
              skillLvl: skillLvlArray[0],
          },
          {
              tech: 'Firebase',
              skillLvl: skillLvlArray[1],
          },
          {
              tech: 'React Redux',
              skillLvl: skillLvlArray[1],
          },
      ]
      return{
          technologyArray,
          skillLvlArray

      }

  }
    
}
</script>


<style scoped>
/* .list-skills{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.37);
}
li{
    margin: 0 1rem 0 0;
}
li:first-child{
    list-style:none;
} */
</style>