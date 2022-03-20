<template>
    <article class="wrapper" v-for="(message, i) in allMessages" :key="i">
        <h3 class="name">{{message.name}}</h3>
        <p class="email">{{message.email}}</p>
        <p class="message">{{message.message}}</p>
        <p class="id mt-4">Message ID: {{message.id}}</p>
    </article>
</template>

<script>
import messageService from '../../services/messageService';
export default {
    
    
    setup(){
    let allMessages = messageService.getAllMessages()

        return{
            allMessages,
        }
    }
}
</script>


<style scoped>

.wrapper{
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 2rem;
    background: rgba(0, 0, 0, 0.08);
    padding: 1rem 1rem;
}
.name{
    font-weight: 700;
}
.email{
    color: rgba(0, 0, 0, 0.60);

}
.id{
    text-align: right;
    font-weight: 600;
}
</style>