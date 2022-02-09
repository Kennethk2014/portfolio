<template>
    <div class="col-12">
        <h5>{{title}}</h5>    
        <p>{{desc}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        desc: String,
    }
}
</script>

<style scoped>
    p{
        
        color: rgba(21, 49, 54, 0.87);
        font-size: .6rem;
        line-height: 160%;
    }
    h5{
        position: relative;
    }
    h5::before{

        position: absolute;
        content: "";
        background: rgba(21, 49, 54, 1);
        height: 100%;
        width: .3rem;
        left: -3.2%;
    }
@media screen and (min-width: 1024px) {
    h5{
        font-size: 2rem;
    }
    h5::before{
        height: 2.1rem;
    }

    p{
        font-size: 1rem;
    }
}
</style>