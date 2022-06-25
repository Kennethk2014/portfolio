<template>
  <article class="col-12 col-md-4 p-4 testimonial-container">
    <blockquote class="blockquote--quoted">
        
        <p class="description">{{description}}</p>
    </blockquote>
    <div class="row">
        <div class="col-2">
            <img class="img-fluid" :src="require(`@/assets/images/${imageUrl}`)">
        </div>
        <div class="col">
            <h6 class="employee-name">{{employeeName}}</h6>
            <p class="employee-role">{{employeeRole}}</p>
        </div>
    </div>
  </article>
</template>

<script>


export default {
    props: {
        description: String,
        employeeName: String,
        businessName: String,
        imageUrl: String,
        employeeRole: String,
    },
    
}
</script>

<style scoped>
article{
    transform: rotateZ(-5deg);
    color: #212121;
}
.blockquote--quoted::before{
    content: "\201c";
    font-size: 100px;
    color: #CB5555;
    display: block;
    margin-bottom: -40px;
    margin-top: -20px;
}
.testimonial-container{
    width: 100%;
    max-width: 478px;
    background-color: rgba(0,0,0,0.01);
    border-radius: 3px;
    box-shadow: 0px 4px 20px rgba(0,0,0,0.08);
}
.employee-name{
    color: #CB5555;
}
.employee-role{
    color: #666666;
    font-size: 12px;
}
.img-fluid{
    border-radius: 100%;
}
</style>