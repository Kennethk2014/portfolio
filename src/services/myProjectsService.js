import {ref} from 'vue'

const myProjectsService = (function(){

    const projects = ref([
        {
            title: 'PhotoFindr',
            description: 'A website that holds a hand-picked community of photographers. The website explores a different way for photographers to get discovered and will help them begin make money off their skills.',
            isCaseStudy: false,
            primaryColor: '#FA8324',
            secondaryColor: '#252F31',
            imageUrl: 'photofindr-landingpage@3x.jpg',
            webUrl: 'https://photofindr.com',
            textColor: 'rgba(255,255,255,0.87)'
        },
        {
            title: 'Skum',
            description: 'An app to give beer enthusiasts an easy to use platform where they can discover new beer and share their discoveries with friends.',
            isCaseStudy: false,
            primaryColor: '#153136',
            secondaryColor: '#F0F1E9',
            imageUrl: 'skum-app-mockup.png',
            webUrl: '#',
            textColor: '#153136'
        },
    ])

    const getAllProjects = () => {
        return projects
    };

    return { getAllProjects }


}())

export default myProjectsService;