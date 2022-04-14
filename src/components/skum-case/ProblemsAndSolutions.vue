<template>
    <article class="counters">
        <ul v-if="!isProblem">
           <li>
               <p class="problem">
                    {{p1}}
               </p>
           </li>
           <li>
               <p class="problem">
                    {{p2}}
               </p>
           </li>
           <li>
               <p class="problem">
                    {{p3}}
               </p>
           </li>
           <li>
               <p class="problem">
                    {{p4}}
               </p >
           </li>
        </ul>
        <ul v-else>
           <li>
               <p class="solution">
                  {{p1}}
               </p>
           </li>
           <li>
               <p class="solution">
                   {{p2}}
               </p>
           </li>
           <li>
               <p class="solution">
                    {{p3}}
               </p>
           </li>
           <li>
               <p class="solution">
                    {{p4}}
               </p>
           </li>
        </ul>
    </article>
</template>


<script>
export default {
    props: {
        isProblem: Boolean,
        p1: String,
        p2: String,
        p3: String,
        p4: String,
    }
}
</script>

<style scoped>

    .counters{
        

        counter-reset: counter-name;
    }
    ul{
        list-style-type: none;
    }
    li{
        margin-bottom: 2.5rem;
    }
    .problem{
        position: relative;
    }
    p{
        color: rgba(21, 49, 54, 0.67);
    }
    .problem::before{
        color: #F0F1E9;
        background-color: #DB7B7B;
        width: 1.7rem;
        height: 1.7rem;
        top: 0;
        border-radius: 50%;
        left: -2.2rem;
        position: absolute;
        counter-increment: counter-name;
        content: counter(counter-name)'';
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .solution{
        position: relative;
    }
    .solution::before{
        color: #F0F1E9;
        background-color: #B0E4A8;
        width: 1.7rem;
        height: 1.7rem;
        top: 0;
        border-radius: 50%;
        left: -2.2rem;
        position: absolute;
        counter-increment: counter-name;
        content: counter(counter-name)'';
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>