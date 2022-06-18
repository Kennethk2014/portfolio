<template>
  <testimonial-item v-for="(testimonial, i) in testimonials" :key="i"
    :description="testimonial.description"
    :employeeName="testimonial.employeeName"
    :businessName="testimonial.businessName"
    :imageUrl="testimonial.imageUrl"
    :employeeRole="testimonial.employeeRole"
  ></testimonial-item>
</template>

<script>
import testimonialService from '../../services/testimonialService';
import testimonialItem from './testimonialItem.vue';
export default {
  components: { testimonialItem },
    setup(){
        const testimonials = testimonialService.getAll();


        return {
            testimonials
        }
    }

}
</script>

<style scoped>

</style>>

