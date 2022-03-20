<template>
    <div class="col-12 col-lg-5 article skill-list">
        <section-title 
            title="User research"
        />
        <p class="subtitle">I conduct interviews and dive deep into understanding problems of the user. Often refered to as human-centered design.</p>
    </div>
    <div class="col-12 col-lg-5 article">
        <section-title 
            title="UX/UI Design"
        />
        <p class="subtitle">
            UX - Finding creative yet practical ways to solve a users’ problem. The goal is to help people have a great experience online.<br>
            UI - Designing beautiful digital products.
        </p>
    </div>
    <div class="col-12 col-lg-5 article">
        <section-title 
            title="Website development"
        />
        <p class="subtitle">
            Using technology like React, Vue or CMS I create digital experienses that turn visitors into customers. This tech helps you stand out in an ever increasing crowd.
        </p>
    </div>
    <div class="col-12 col-lg-5 article">
        <section-title 
            title="Image &amp; video processing"
        />
        <p class="subtitle">
            Creating stunning media-content for your website with good knowledge in Premiere Pro and Adobe Lightroom.
        </p>
    </div>

</template>


<script>
import SectionTitle from '../SectionTitle.vue';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
     components: { SectionTitle},
  setup(){
      return{
      }
  },
  mounted(){
      gsap.fromTo('.article', 
      {
          opacity: 0,
          y: 100,

      },
      {
          scrollTrigger: '.skill-list',
          opacity: 1,
          delay: .2,
          stagger: .2,
          y: 0,

      })
  }
    
}
</script>

<style scoped>
 .subtitle{
     color: #666666;
 }

 .article{
     border-top: 1px solid #A1A1A1;
     padding: 2rem 0rem 2rem 0rem;
     height: 200px;
 }
</style>