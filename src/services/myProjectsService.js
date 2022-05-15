import {ref} from 'vue'

const myProjectsService = (function(){

    const projects = ref([
        {
            title: 'Skum',
            description: 'An app to give beer enthusiasts an easy to use platform where they can discover new beer and share their discoveries with friends.',
            isCaseStudy: true,
            primaryColor: '#153136',
            secondaryColor: '#F0F1E9',
            imageUrl: 'skum-app-mockup.png',
            webUrl: '/portfolio/skum',
            textColor: '#153136'
        },
        {
            title: 'SMARTWATT',
            description: 'An app to help consumers take back the control of their energy usage by giving them tools to see what and where their energy consumption lies.',
            isCaseStudy: true,
            primaryColor: '#F83889',
            secondaryColor: '#fdfdfd',
            imageUrl: 'smartwatt-app-mockup.jpg',
            webUrl: '/portfolio/smartwatt',
            textColor: 'rgba(0,0,0,0.87)',
            tags: 'UI/UX Design, Branding'
        },
        
        {
            title: 'PhotoFindr',
            description: 'A website that holds a hand-picked community of photographers. The website explores a different way for photographers to get discovered and will help them begin make money off their skills.',
            isCaseStudy: false,
            primaryColor: 'rgba(255,255,255,0.95)',
            secondaryColor: '#252F31',
            imageUrl: 'photofindr-closup-mockup.jpg',
            webUrl: 'https://photofindr.com',
            textColor: 'rgba(255,255,255,0.87)',
            tags: 'Development, UI/UX Design, Branding'
        },
    ])

    const getAllProjects = () => {
        return projects
    };

    const getProjectByName = (title) => projects.value.filter(project => project.title.toLowerCase() === title.toLowerCase());
    return { getAllProjects, getProjectByName }


}())

export default myProjectsService;