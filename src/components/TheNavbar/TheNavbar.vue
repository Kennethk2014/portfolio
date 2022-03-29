<template>



    <nav class="navbar sticky-top navbar-expand-md" style="background-color: #fdfdfd;">
        <div class="container">
            <a class="navbar-brand" href="/portfolio/#home">
            <img :src="require('@/assets/images/LogoPortfolio.svg')" alt="" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse container justify-content-end" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item navbar-text">
                        <a href="/portfolio/#expertise" class="nav-link text-anim" aria-current="page">Expertise</a>
                    </li>
                    <li class="nav-item navbar-text">
                        <a href="/portfolio/#portfolio" class="nav-link text-anim" aria-current="page">Portfolio</a>
                    </li>
                    <li class="nav-item navbar-text">
                        <router-link to="/about" class="nav-link text-anim" aria-current="page">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/none" class="nav-link" aria-current="page"><custom-button type="button" class="btn-primary" value="Let's talk"></custom-button></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


</template>


<script>
import CustomButton from '../CustomButton/CustomButton.vue'



export default {
  components: { CustomButton },

    setup(){


    
        return{

        }
    }
}
</script>


<style scoped>

.navbar{
    box-shadow: 0px 2px 20px rgba(75, 79, 73, 0.1);
}
.nav-link{
    color: #212121;
    font-weight: 500;
}
.text-anim{
    position: relative;
    display: inline-block;

}
.text-anim::after{
    position: absolute;
    content: "";
    display: block;
    width: 0%;
    background: #212121;
    height: 2px;
    transition: all 200ms ease-out;
}
.text-anim:hover::after{
    width: 50%;
}

.navbar-toggler-icon{
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>
.section-header{
    position: relative;
    display: inline-block;
}
.section-header::after{
    position: absolute;
    content: "";
    display: block;
    width: 0%;
    background: #212121;
    height: 5px;
    transition: all 200ms ease-out;
}
.section-header:hover::after{
    width: 100%;
}