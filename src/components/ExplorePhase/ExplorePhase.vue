<template>
    <section class="py-5">
        <h4 class="col-12 mb-4"><span class="span-colored" :style="{color: `${spanColor}`}">Explore</span> Phase</h4>
            <custom-subtitle 
                title="The search for ideas"
                desc="To start off this project it was important to me that the entire group was happy and intrigued by the task we decided to work on. So i suggested 
                        an elimination strategy where for each round we were assigned a set amount of votes to use, and in the end land on one project we all could enjoy working on."
            />
            <img class="img-fluid" :src="require(`@/assets/images/${image}`)" alt="" srcset="">

    </section>
</template>

<script>
import CustomSubtitle from '../CustomSubtitle/CustomSubtitle.vue';
export default {
    props: {
        spanColor: String,
        image: String,
    },

    components: {
        CustomSubtitle,
    }
}
</script>

<style scoped>
h
        PerspectiveCardItem4{
    color: #212121;
    font-size: 1.5rem;
    font-weight: 700;

}

.img-fluid{
    box-shadow: 0px 4px 10px rgba(23, 23, 23, 0.12);    
}

</style>