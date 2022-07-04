import {ref} from 'vue'

const myProjectsService = (function(){

    const projects = ref([
        {
            title: 'Skum',
            description: 'DISCOVER AND SHARE BEER WITH FRIENDS',
            isCaseStudy: true,
            primaryColor: '#153136',
            secondaryColor: '#F0F1E9',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/photofindr-86e94.appspot.com/o/company%2Fkennethux%2Fskummockup.jpg?alt=media&token=6813109f-d4c7-49f3-bc6e-d69148d66726',
            webUrl: '/portfolio/skum',
            textColor: '#153136',
            fontFamily: 'Inter',
            tags: 'UI/UX, Design, Branding'
        },
        {
            title: 'SMARTWATT',
            description: 'TAKE BACK CONTROL OF YOUR ENERGY CONSUMPTION',
            isCaseStudy: true,
            primaryColor: '#F83889',
            secondaryColor: '#fdfdfd',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/photofindr-86e94.appspot.com/o/company%2Fkennethux%2Fsmartwattmockup.jpg?alt=media&token=2c43bf41-b920-437b-abf4-d05b16f60fa0',
            webUrl: '/portfolio/smartwatt',
            textColor: 'rgba(0,0,0,0.87)',
            tags: 'UI/UX, Design, Branding'
        },
        
        {
            title: 'PhotoFindr',
            description: 'KICKSTART YOUR PHOTOGRAPHY CAREER',
            isCaseStudy: false,
            primaryColor: 'rgba(255,255,255,0.95)',
            secondaryColor: '#252F31',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/photofindr-86e94.appspot.com/o/company%2Fkennethux%2Fmockupphotofindr.jpg?alt=media&token=11608ff6-6426-4c5e-9e53-3ace66a314c5',
            webUrl: 'https://photofindr.com',
            textColor: 'rgba(255,255,255,0.87)',
            tags: 'Development, UI/UX, Design, Branding',
            fontFamily: 'Montserrat',
        },
    ])

    const getAllProjects = () => {
        return projects
    };

    const getProjectByName = (title) => projects.value.filter(project => project.title.toLowerCase() === title.toLowerCase());
    return { getAllProjects, getProjectByName }


}())

export default myProjectsService;