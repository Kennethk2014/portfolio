<template>
    <form type="submit">
        <custom-form-item 
            type="text"
            placeholder="your name"
            formLabel="Name"
            :textarea="false"
            class="col-12"
            :value="name"
        />
        <custom-form-item 
            type="email"
            placeholder="email address"
            formLabel="Email Address"
            :textarea="false"
            class="col-12"
            :value="email"
        />
        <custom-form-item 
            type="text"
            placeholder="write me anything, i'll respond as fast as possible"
            formLabel="Message"
            rows="4"
            :textarea="true"
            class="col-12"
            :value="message"
        />
        <custom-button
            value="Submit"
            type="submit"
            className="btn btn-outlined"
            @click="handleSubmit"
        />
    </form>
</template>


<script>
import CustomButton from '../CustomButton/CustomButton.vue';
import CustomFormItem from './CustomFormItem.vue';
import {ref} from 'vue'
export default {
    components: {
        CustomFormItem,
        CustomButton
    },

    setup(){
        let name = ref();
        let email = ref();
        let message = ref();

        const handleSubmit = async e => {
            e.preventDefault();
            console.log(
                `
                name: ${name.value},
                email: ${email.value},
                message: ${message.value} 
                `
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