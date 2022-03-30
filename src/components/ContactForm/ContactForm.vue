<template>
  <div class="user-info">
      <form ref="form" @submit.prevent="sendEmail" >
        <!-- NAME -->
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" name="user_name" placeholder="your name...">
        <!-- EMAIL -->
        <label for="email" class="form-label mt-3">Email</label>
        <input type="email" name="user_email" class="form-control" id="email" placeholder="ada@lovelace.com">
        <!-- About the project  -->
        <label for="projectInfo" class="form-label mt-3">Tell me about your project</label>
        <textarea required name="message" class="form-control" id="projectInfo" rows="3"></textarea>
        <custom-button type="submit" value="Send" class="btn-primary mt-3"></custom-button>
      </form>
    </div>    
</template>

<script>
import emailjs from '@emailjs/browser';
import CustomButton from '../CustomButton/CustomButton.vue';
export default {
  components: { CustomButton },
    methods: {
        sendEmail(){

            emailjs.sendForm('contact_service', 'contact_form', this.$refs.form, 'EhNQFb7NUNPCi3mcM')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert("Message sent, thank you.")
            }, (error) => {
                alert("Message failed. Sorry we're having problems right now...")
                console.log('FAILED...', error.text);
            });
        }
    }
}
</script>

<style scoped>

</style>