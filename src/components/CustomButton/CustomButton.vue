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
input{
    border: 1px solid #C53D3C;
    color: #C53D3C;
}
</style>