<template>
    <section class="col-12">
        <div class="row justify-content-md-center">
            <design-process-item
                title="Explore"
                descOne="Ideate"
                descTwo="Target Group"
                descThree="User Stories"
                descFour="Competitive Analysis"
                imageUrl="search.svg"
                class="col-4"
            />
            <design-process-item
                title="Design"
                descOne="Information Architecture"
                descTwo="Wireframe"
                descThree="Prototype"
                imageUrl="computer.svg"
                class="col-4"
            />
            <design-process-item
                title="Test"
                descOne="Usability Testing"
                descTwo="Analysing feedback"
                descThree="Iterate Design"
                imageUrl="location_pin.svg"
                class="col-4"
            />
        </div>
    </section>
</template>


<script>
import DesignProcessItem from './DesignProcessItem.vue'
export default {
    components: {
        DesignProcessItem,
    
    }    
}
</script>


<style scoped>

</style>
