<template>
    <div class="row container py-3">
        <div class="col-1 icon-container">
            <i :class="isWork ? 'fas fa-briefcase' : 'fas fa-university' "></i>
        </div>
        <div class="col-11 text-container">
            <p class="year">{{year}}</p>
            <h3 class="title">{{title}}</h3>
            <p class="desc">{{desc}}</p>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        year: String,
        title: String,
        icon: String,
        desc: String,
        isWork: Boolean,
    }
}
</script>

<style scoped>

.icon-container{
    background-color: #EFF2EA;
    width: 50px;
    border-radius: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}
.year{
    margin-bottom: -.1rem;
    color: #666666;
}
</style>