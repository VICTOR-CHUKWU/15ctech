import { IFeatureProject, IService } from "@/types"

export const navMenuItems = [
    'About|/about',
    'Services|/services',
    'Contact|/contact',
]

export const featuredProjects: IFeatureProject[] = [
    {
        img: '/img/header.jpg',
        name: 'name of the project',
        description: `this project is described here with roles and how it is working`,
        link: 'a hyper link to the project '
    },
    {
        img: '/img/header.jpg',
        name: 'name of the project',
        description: `this project is described here with roles and how it is working`,
        link: 'a hyper link to the project '
    },
    {
        img: '/img/header.jpg',
        name: 'name of the project',
        description: `this project is described here with roles and how it is working`,
        link: 'a hyper link to the project '
    },
]

export const services: IService[] = [
    {
        icon: 'chrome',
        name: 'Website developement',
        description: 'Our high performance web-based applications are responsive '
    },
    {
        icon: 'apps',
        name: 'Mobile Developement',
        description: 'We develop native mobile applications for iOS and Android'
    },
    {
        icon: 'assemble',
        name: 'Product Management',
        description: 'We help you "Plan, Design, Develop and Manage" software applications'
    },
    {
        icon: 'coins',
        name: 'Digital Marketing',
        description: 'We carry out Digital Marketing Campaigns for products and services'
    },
]

export const steps = [
    {
        text: 'Reach out to our admin via our contact page with your request, complaints or advice'
    },
    {
        text: 'Reach out to our admin via our contact page with your request, complaints or advice'
    },
    {
        text: 'Reach out to our admin via our contact page with your request, complaints or advice'
    },
]

export const TESTIMONIALS = [
    {
        name: "Julian",
        message: "Global HT Education has been instrumental in shaping my academic journey to Anglia Ruskin University in the UK. Their expertise, dedication, and personalized approach were evident from the start, making the entire process smooth and stress-free. Thank you, Global HT Education, for being the guiding force behind my academic achievements in the UK.",
        img: "/img/header.jpg",
        id: 1,
    },
    {
        name: "Chidi",
        message: "Choosing Global HT Education  as an agent was a game-changer for my academic journey to TUS Ireland. Their unparalleled dedication and expert guidance made the entire process, from course selection to settling in a new country, an absolute breeze. The team at Global HT Education went above and beyond, providing insightful advice, timely assistance with documentation, and unwavering support throughout. Their commitment to transparency and reliability is truly commendable. Thanks to their efforts, I graduated with distinction in my MSc program.",
        img: "/img/header.jpg",
        id: 2,
    },
    {
        name: "Daniel",
        message: "The team at Global HT Education demonstrated exceptional professionalism and genuine care for my educational journey. Their expertise and seamless coordination made the transition to studying at TUS Ireland a seamless experience. I am truly grateful for their support and highly recommend Global HT Education to anyone seeking reliable assistance in pursuing education abroad. They are not just consultants; they are your dedicated consultant in shaping a successful academic future.",
        img: "/img/header.jpg",
        id: 3,
    },
    {
        name: "Ruth Cadmus",
        message: "Dear Global HT Education, I would like to appreciate the smooth process of my application into BCU . The reception and the lecture has been smooth we have various activities and good tutors who takes their time to ensure your foundation year is smooth to catapult you to BCU .I am truly happy to be at BCUIC",
        img: "/img/header.jpg",
        id: 4,
    },
];