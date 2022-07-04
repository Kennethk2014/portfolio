<template>
    <article class="col-12">
        <div class="container-portfolio-card" :style="{backgroundImage: 'url('+imageUrl+')'}">
            <a v-if="!isCaseStudy" :href="webUrl" target="_blank">

                <div class="row content-container align-items-center p-4">
                    <div>
                        <p class="title">
                            {{title.toUpperCase()}}
                        </p>
                    </div>
                    <div>
                        <p class="tags">{{tags}}</p>
                        <h3 style="font-weight: 700;" class="mb-0">{{description}}</h3>
                    </div>
                    <div>
                        <custom-button type="button" className="btn-outlined" value="VISIT WEBSITE"></custom-button>
                    </div>
                </div>
            </a>
            <router-link  v-else :to="webUrl">

                <div class="row p-4 content-container align-items-center" >
                    <div>
                        <p class="title">
                            {{title.toUpperCase()}}
                        </p>
                    </div>
                    <div>
                        <p class="tags">{{tags}}</p>
                        <h3 style="font-weight: 700;" class="mb-0">{{description}}</h3>
                    </div>
                    <div>
                        <custom-button type="button" className="btn-outlined" value="READ CASE STUDY"></custom-button>
                    </div>
                </div>
            </router-link>
        </div>
    </article>
</template>

<script>
import CustomButton from '../CustomButton/CustomButton.vue'
export default {
  components: { CustomButton },
    props: {
        title: String,
        tags: String,
        primaryColor: String,
        secondaryColor: String,
        imageUrl: String,
        webUrl: String,
        textColor: String,
        isCaseStudy: Boolean,
        description: String,
    }
}
</script>
<style scoped>
.container-portfolio-card{

    background-size: cover;
    background-position: center center;

    height: 360px;
    border-radius: 8px;
    box-shadow: 0px 10px 50px rgba(0,0,0,0.01);
}

.content-container{
    height: 100%;

}

*{
    text-decoration: none;
    color: #FFF;
}

h3{
    font-weight: 700;
    font-size: 2rem;
}
.title{
    font-size: 1.3rem;
    font-weight: 700;
}
.tags{
    color: rgba(255,255,255,0.67);
    font-size: 14px;
}

@media screen and (min-width: 1024px) {
        .container-portfolio-card{
        height: 560px;
        box-shadow: 0px 10px 50px rgba(0,0,0,0.01);
    }
    h3{
        font-size: 4rem;
    }
    .tags{
        font-size: 18px;
    }
}
</style>