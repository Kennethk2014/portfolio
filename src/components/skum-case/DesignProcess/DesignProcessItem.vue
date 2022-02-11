<template>

    <article>
        <div class="img-container">
            <img :src="require(`../../../assets/images/skum-pf/${imageUrl}`)" class="img-fluid" alt="search-icon-illustration">
        </div>
        <div>
            <h6 class="mt-1">{{title}}</h6>    
            <p>{{descOne}}</p>
            <p>{{descTwo}}</p>
            <p>{{descThree}}</p>
            <p>{{descFour}}</p>
        </div>    
    </article>    
</template>


<script>
export default {
    props: {
        imageUrl: String,
        title: String,
        descOne: String,
        descTwo: String,
        descThree: String,
        descFour: String,
    }
    
}
</script>


<style scoped>
.img-container{
    width: 100%;
    aspect-ratio: 1;
    background: rgba(0,0,0,0.08);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}
img{
    box-sizing: border-box;
    height: 80%;
}
h6{
    font-weight: 700;
    font-size: 0.8rem;
}
p{
    font-size: .5rem;
    margin-bottom: 0.5rem;
    color: rgba(21, 49, 54, 0.67);
}

@media screen and (min-width: 768px) {
    h6{
        font-size: 1rem;
    }
    p{
        font-size: .8rem;
    }
}
@media screen and (min-width: 1024px) {
    h6{
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
    }
}
</style>