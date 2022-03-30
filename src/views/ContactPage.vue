<template>
    <main class="container">
        <div class="main-wrapper row mt-5">
            <section class="explainer-section col-12 col-md-6">
                    <h1>Get in Touch</h1>
                    <p>By filling out the form</p>
                    <p>By email: <span><a href="mailto:kennethk2014@gmail.com?Subject=Project%20Request" target="_top">kennethk2014@gmail.com</a></span></p>
                    <p>By <span><a href="https://www.linkedin.com/in/kenneth-kristiansen-40080986/" target="_blank">LinkedIn</a></span></p>
                    <p>Don’t hesistate to contact me if you have any questions what so ever!</p>
            </section>
            <section class="form-section col-12 col-md-6">
              <contact-form></contact-form>
            </section>
            <section class="col-12">
                <img class="img-fluid" src="../assets/images/outside-chilling-illustration.svg" alt="" />
            </section>
        </div>


    </main>
</template>

<script>
import ContactForm from '../components/ContactForm/ContactForm.vue'
export default {
  components: { ContactForm },
    
}
</script>

<style scoped>
main{
    max-height: 100vh;
}

h1{
    font-weight: 500;
    font-size: 2.3rem;
    line-height: 135%;
}
a{
    text-decoration: underline;
    color: #212121;
    font-weight: bold;
}
p{
    color: #666666;
}
@media screen and (min-width: 1024px) {
    h1{
    font-size: 3rem;
    }
}
@media screen and (min-width: 1440px) {
    h1{
    font-size: 4rem;
    }
}
</style>