<template>
    <article class="col-12 col-md-5 col-lg-5 mb-3 card-container">
        <h6 class="text-center mb-3">{{title}}</h6>
        <ul>
        <li>    
            <p class="descOne section">{{descOne}}</p> 
        </li>
        <li> 
            <p class="descTwo section">{{descTwo}}</p>
        </li>
        <li>
            <p class="descThree section">{{descThree}}</p>
        </li>

        </ul>
    </article>
</template>


<script>
export default {
    props: {
        title: String,
        descOne: String,
        descTwo: String,
        descThree: String,
    }    
}
</script>

<style scoped>
.card-container{
    padding: 2rem 1.5rem;
    background: rgba(0,0,0,0.06);
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    width: 100%;
}
ul{
    list-style: none;
}
.section{
    position: relative;
}
.section::before{
    position: absolute;
    left: -1.2rem;
    top: .2rem;
    content: "";
    width: .7rem;
    height: .7rem;
    background: #D2B100;
    border-radius: 50%;
}
p{
    font-size: 0.8rem;
}
h6{
    font-weight: 600;
}

@media screen and (min-width: 768px) {
    .card-container{
    width: calc(100% / 2.1);
    }
}

@media screen and (min-width: 1024px) {
    p{
        font-size: 1rem;
    }
    h6{
        font-size: 1.5rem;
    }
    .section::before{
        top: .2rem;
        left: -1.8rem;
        width: 1rem;
        height: 1rem;
    }
}
</style>