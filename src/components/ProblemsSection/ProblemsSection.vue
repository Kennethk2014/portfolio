<template>
    <section class="row justify-content-center mt-5 py-5">
        <h3 class="text-center mb-5">Challenges</h3>
        <article class="col-12 col-md-6 col-lg-5 py-5">
            <div class="row">
            <h4 class="mb-4">Problem <span class="span-light">Points</span></h4>
                <problems-and-solutions
                    :isProblem="false"
                    p1="It's difficult to controll your houses electricity consumption"
                    p2="You cannot see upcoming months bill, only the previous months bill"
                    p3="It's a problem that you cant see which units in the house that consumes the most power"
                    p4="Most poeple are not sure what they can do to influence their energy consumption"
                />
            </div>
        </article>
        <div class="col-12 col-md-6 col-lg-5 mb-5 py-5">
            <img class="img-fluid" :src="require(`@/assets/images/smartwatt-pf/problempoint-ill.svg`)">
        </div>

        <!-- SOLUTIONS -->
        <article class="col-12 col-md-5 col-lg-4 py-5">
            <div class="row">
                <h4 class="mb-4"><span class="span-light">Possible</span> Solutions</h4>
                <problems-and-solutions
                    :isProblem="true"
                    p1="Give users contious updates on their consumption"
                    p2="Complete control over the house and it's units connected"
                    p3="Make the user aware of their climate impact by showing Co2 emissions"
                    p4="Give users specific tips and tricks on how to reduce their consumption"
                />
            </div>
        </article>
        
        <div class="col-6 col-md-4 col-lg-3 py-md-5">
            <img class="img-fluid" :src="require(`@/assets/images/smartwatt-pf/Dashbord.png`)">
        </div>
        <div class="col-6 col-md-3 col-lg-3 py-md-5">
            <img class="img-fluid" :src="require(`@/assets/images/smartwatt-pf/addunit.png`)">
        </div>
    </section>
</template>


<script>
import ProblemsAndSolutions from '../skum-case/ProblemsAndSolutions.vue'
export default {

    components: {
        ProblemsAndSolutions
    }
}
</script>

<style scoped>

h3{
    font-size: 2rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
}
.span-light{
    font-weight: 400;
}
h4{
    font-weight: 700;
}
</style>