<template>
    <div class="title-container">
        <h3 :class="isHeading == true ? 'section-header' : 'header' ">{{title}}</h3>
        <div class="line" />
    </div>
</template>


<script>
export default {
    props: {
        title: String,
        isHeading: Boolean,
    }
}
</script>

<style scoped>

.title-container{
    display: inline-block;
    margin-bottom: .5rem;
    color: rgba(255, 255, 255, 0.87)
}
    .header{
        font-weight: 600;
        font-size: 1.3rem;
    }

    .line{
        width: inherit;
        border-radius: 1px;
        height: 2px;
        background: #C53D3C;
    }
    .section-header{
        font-weight: 700;
    }

    @media screen and (min-width: 768px) {
            .section-header{
                font-size: 1.8rem;
            }
    }
    @media screen and (min-width: 1440px) {
            .section-header{
                font-size: 2.4rem;
            }
    }
</style>