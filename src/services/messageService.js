/* FAKE DATABASE FOR MELDINGER SOM BLIR SENDT VIA CONTACT FORM */
import {ref} from 'vue';

const messageService = (function(){

const messages = ref([

])


const getAllMessages = () => messages;

const pushToMessageArray = (name, email, message) => {
    messages.value.push({name, email, message})
}
return{
    getAllMessages,
    pushToMessageArray
}

}());


export default messageService;
