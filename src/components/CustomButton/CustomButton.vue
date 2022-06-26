<template>
                        <button v-if="isIcon == true" :type="type"  :class="className" >{{value}} <i :class="icon" ></i></button>
                        <button v-else :type="type"  :class="className" >{{value}}</button>

</template>

<script>
export default {
    props: {
        type: String,
        className: String,
        value: String,
        isIcon: Boolean,
        icon: String
    }   
}
</script>
<style scoped>
.btn-outlined{
    border-radius: 1px;
    padding: 10px 20px;
    border: 2px solid #2B331D;
    color: #2B331D;
    background: transparent;
    transition: all 50ms ease-out;
}
.btn-outlined:hover{
    background: #2B331D;
    color: rgba(255,255,255,0.87);
    
    }


.btn-primary{
    border: none;
    border-radius: 1px;
    padding: 10px 20px;
    background: #CB5555;
    color: rgba(255,255,255,0.87);
    font-weight: 500;
    box-shadow: 4px 4px 0px #b62828;
    transition: all 100ms linear;
    position: relative;
}
.btn-primary:hover{
    box-shadow: none;

}

.btn-tetriary{
    
    border: none;
    color: #2B331D;
    }
</style>