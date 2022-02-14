<template>
                        <input :type="type" :value="value" :class="className" >
</template>

<script>
export default {
    props: {
        type: String,
        className: String,
        value: String,
    }   
}
</script>
<style scoped>
.btn-outlined{
    border: 1px solid rgb(197, 61, 60);
    color: #C53D3C;
}
.btn-primary{
    background: #C53D3C;
    color: rgba(255,255,255,0.87);
    border: none;
}
.btn-tetriary{
    
    border: none;
    color: #C53D3C;
    }
.btn-outlined:hover{
    box-shadow: 0px 0px 20px rgba(197, 61, 60, 0.6);
    border: 1px solid #C53D3C;
    color: rgba(255, 255, 255, 0.87);
    background-color: #C53D3C;
}
</style>