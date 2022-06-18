import {ref} from 'vue'

const testimonialService = (function(){

    const testimonials = ref([
        {
            employeeName: 'Acacia De Meo & Mara Lehmann',
            employeeRole: 'Founders of Meliora Impact',
            businessName: 'Meliora Impact',
            description: 'Great communication all the way though the project and the product was delivered on time. We are very happy with the professionalism and end result delivered.',
            imageUrl: 'meloriaImpactProfilePicture.jpeg',

        }
    ])

    const getAll = () => testimonials;

    return {
        getAll,
    }
}());

export default testimonialService;