<template>
<div class="container-fluid wrapper">


    <nav class="navbar navbar-expand-md">
        <div class="container">
            <router-link class="navbar-brand" to="/">
            <img :src="require('@/assets/images/LogoPortfolio.svg')" alt="" height="50">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <custom-button
                            type="button"
                            className="btn btn-primary"
                            value="Sign in"
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        ></custom-button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <custom-form-item
            formLabel="Admin Password"
            type="password"
            v-model="userInputPassword"
        ></custom-form-item>
      </div>
      <div class="modal-footer">
        <custom-button type="button" className="btn btn-tetriary" data-bs-dismiss="modal" value="Close"></custom-button>
        <button type="button" @click="handleClick" class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import CustomButton from '../CustomButton/CustomButton.vue';
import CustomFormItem from '../CustomForm/CustomFormItem.vue';
import userService from '../../services/userService';
import {ref} from 'vue';
export default {
    components: {CustomFormItem, CustomButton},
    setup(){
        let userInputPassword = ref();
        let allUserService = userService.getUserAdmin();

        const handleClick = () => {
            console.log(allUserService.isCorrect)
            userService.setIsCorrect(userInputPassword.value);
            console.log(allUserService.isCorrect)
        }

        return{
            userInputPassword,
            handleClick
        }
    }
}
</script>


<style scoped>
.wrapper{
    z-index: 999;
    position: fixed;
    background: rgba(242, 242, 242, 0.064);
    backdrop-filter: blur(1rem);
}
.modal{
    z-index: 9999;
}
.nav-link{
    color: white;
}
</style>