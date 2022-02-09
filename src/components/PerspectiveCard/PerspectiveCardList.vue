<template>
    <div class="row justify-content-between">
        <perspective-card-item 
            title="User Perspective"
            descOne="As a beer-enthusiast i wish to discover new beer, so i can taste something new."
            descTwo="As a beer-enthusiast i wish to save beer i’ve tasted earlier, so that i easily can find back to it later."
            descThree="As a beer-enthusiast i wish to know where the beer i want is sold, so that i walk to the right store at once."
        />
        <perspective-card-item 
            title="Company Perspective"
            descOne="As a designer i wish to develop an intuitive navigation so that the solution is easy to use for the customers."
            descTwo="As a company we wish to see online customers so we know how much server capasity we have on hand."
            descThree="As a company we wish to see registered customers so that we can measure milestones agains company goals."
        />
    </div>    
</template>


<script>
import PerspectiveCardItem from './PerspectiveCardItem.vue'
export default {
  components: { PerspectiveCardItem },
    
}
</script>

<style scoped>

</style>