
const userService = (function(){


    const userAdmin = 
        {
            adminPassword: 12341234,
            isCorrect: false,
        };
    



    const getUserAdmin = () => userAdmin;
    const setIsCorrect = (password) =>{
        if(password != userAdmin.adminPassword){
            alert('Wrong password')
        }else{
            userAdmin.isCorrect = true;
        }
    }


    return{getUserAdmin, setIsCorrect};
}());



export default userService;