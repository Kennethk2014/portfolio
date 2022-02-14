<template>
    <form type="submit" @submit="handleSubmit">
        <custom-form-item 
            type="text"
            placeholder="your name"
            formLabel="Name"
            :textarea="false"
            class="col-12"
            v-model="name"
        />
        <custom-form-item 
            type="email"
            placeholder="email address"
            formLabel="Email Address"
            :textarea="false"
            class="col-12"
            v-model="email"
        />
        <custom-form-item 
            type="text"
            placeholder="write me anything, i'll respond as fast as possible"
            formLabel="Message"
            rows="4"
            :textarea="true"
            class="col-12"
            v-model="message"
        />
        <custom-button
            value="Submit"
            type="submit"
            className="btn btn-outlined"
        />
    </form>
</template>


<script>
import CustomButton from '../CustomButton/CustomButton.vue';
import CustomFormItem from './CustomFormItem.vue';
import {ref} from 'vue'
import messageService from '../../services/messageService';
export default {
    components: {
        CustomFormItem,
        CustomButton
    },

    setup(){
        let allMessages = messageService.getAllMessages();
        let name = ref('');
        let email = ref('');
        let message = ref('');

        const handleSubmit = async e => {
            e.preventDefault();
            messageService.pushToMessageArray(name.value, email.value, message.value)
            console.log(
                allMessages.value
            )

            name.value = ''
            email.value = ''
            message.value = ''
        }


        return{
            name,
            email,
            message,
            handleSubmit,
        }
    }
    
}
</script>


<style scoped>

</style>