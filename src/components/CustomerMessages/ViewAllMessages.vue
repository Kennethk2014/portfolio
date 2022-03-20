<template>
    <div>
        <custom-button
                v-if="getUser.isCorrect === true"
                type="button" 
                className="btn btn-tetriary"
                value="View all submissions"
                data-bs-toggle="modal" data-bs-target="#exampleModal">
        >
        </custom-button>
        <div v-else></div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Messages</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <get-message></get-message>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
</template>


<script>

import CustomButton from '../CustomButton/CustomButton.vue';
import userService from '../../services/userService';
import getMessage from './getMessage.vue';

export default {
components: {getMessage, CustomButton},
setup(){
    let getUser = userService.getUserAdmin();

    
    return{
        getUser,
    }
}
    
}
</script>


<style scoped>

</style>