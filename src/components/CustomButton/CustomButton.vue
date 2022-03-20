<template>
                        <button :type="type"  :class="className" >{{value}}</button>
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
    border-radius: 1px;
    padding: 10px 20px;
    border: 2px solid #4C4D47;
    color: #4C4D47;
    background: transparent;
    transition: all 50ms ease-out;
}
.btn-outlined:hover{
    background: #4C4D47;
    color: rgba(255,255,255,0.87);
    
    }


.btn-primary{
    border: none;
    border-radius: 1px;
    padding: 10px 20px;
    background: #4C4D47;
    color: rgba(255,255,255,0.87);
    font-weight: 500;
    position: relative;
}
.btn-primary:hover{
    box-shadow: 0px 10px 20px rgba(76, 77, 71, 0.1);
    background: #363732;

}

.btn-tetriary{
    
    border: none;
    color: #4C4D47;
    }
</style>