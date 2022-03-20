<template>
    <div class="title-container">
        <h4 class="header" >{{title}}</h4>
    </div>
</template>


<script>
export default {
    props: {
        title: String,
    }
}
</script>

<style scoped>

.title-container{
    display: inline-block;
    margin-bottom: .5rem;
    color: #232323;
}
    .header{
        font-weight: 500;
        font-size: 1.5rem;
    }


  
</style>