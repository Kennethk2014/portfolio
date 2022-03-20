<template>
    <article class="counters">
        <ul v-if="!isProblem">
           <li>
               <p class="problem">
                    A customer today is often in a rush which in turn makes searching for places that has their go-to beer sort in store a tideous task.  
               </p>
           </li>
           <li>
               <p class="problem">
                    Even more annoying is when you taste or get recommended a new beer, but then forget it’s name or what sort it was.
               </p>
           </li>
           <li>
               <p class="problem">
                    Customers often struggle to find relevant information about tastes of different beer sorts, as in bitterness, sweetness etc.
               </p>
           </li>
           <li>
               <p class="problem">
                    It’s hard to know where you’ll be able to buy some of these unique beers as they are not sold in every store.
               </p >
           </li>
        </ul>
        <ul v-else>
           <li>
               <p class="solution">
                  Give customers a platform that helps them discover &amp; explore the current beer market.
               </p>
           </li>
           <li>
               <p class="solution">
                   Give customers access to a database where they can save their favorite beers to, and create different lists.
               </p>
           </li>
           <li>
               <p class="solution">
                    Make the most sought after information easily accessible.
               </p>
           </li>
           <li>
               <p class="solution">
                    Help the customers by adding a section to the product where they can see nearby locations the product they are looking for is in store or not.
               </p>
           </li>
        </ul>
    </article>
</template>


<script>
export default {
    props: {
        isProblem: Boolean,
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