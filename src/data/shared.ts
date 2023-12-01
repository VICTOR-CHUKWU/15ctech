import { IFeatureProject, IService } from "@/types"

export const navMenuItems = [
    'About|/about',
    'Services|/services',
    'Contact|/contact',
]

export const featuredProjects: IFeatureProject[] = [
    {
        img: '/img/header.jpg',
        name: 'The Nesi App',
        description: `A sophisticated platform designed by 15C Tech Ltd for Meristem Wealth Management, serves as a pivotal tool for administering the Electricity Stabilization Funds of the Central Bank of Nigeria (CBN) under the Nigeria Electricity Supply Industry (NESI) framework.`,
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

export const subServices: IService[] = [
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
        text: 'Start the journey by reaching out to us. We engage in a detailed discussion to understand your project needs and goals, laying the groundwork for a successful collaboration.'
    },
    {
        text: 'Once aligned with your vision, we craft a tailored plan, defining milestones and timelines. Collaboration is key as we work together to create a roadmap that ensures project success.'
    },
    {
        text: 'With a solid plan in place, our dedicated team brings your vision to life. We maintain transparent communication throughout, ensuring your satisfaction with the delivered outcome.'
    },
]

export const TESTIMONIALS = [
    {
        name: "Julian",
        message: "Working with 15C Tech Ltd. has been an incredible experience. They transformed our vision into a stunning website that perfectly represents our brand. The team's attention to detail and innovative approach made the entire process smooth and enjoyable. We highly recommend their website development services",
        img: "/img/testimonials/julian.webp",
        id: 1,
    },
    {
        name: "Chidi",
        message: "Choosing 15C Tech Ltd for our mobile app development was the best decision we made. Their skilled team not only delivered a feature-rich app but also guided us through every step of the process. The app's performance and user interface exceeded our expectations. We look forward to future collaborations",
        img: "/img/testimonials/chidi.webp",
        id: 2,
    },
    {
        name: "Daniel",
        message: "Thanks to 15C Tech Ltd, our product management strategy is now more effective and streamlined. Their expertise in product planning and execution has significantly improved our efficiency. Their dedicated team has been responsive, adaptable, and truly understands our business goals. We're thrilled with the results!",
        img: "/img/testimonials/daniel.webp",
        id: 3,
    },
    {
        name: "Ruth Cadmus",
        message: "The digital marketing services provided by 15C Tech Ltd have been a game-changer for our business. Their strategic approach and data-driven methods have significantly increased our online visibility and engagement. The results speak for themselves, and we're excited to continue growing with their expertise.",
        img: "/img/testimonials/ruth.webp",
        id: 4,
    },
];

export const services: IService[] = [
    {
        icon: 'chrome',
        name: 'Web Application Development',
        description: `Our high performance web-based applications are responsive and scalable and can be easily integrated with other web-based or mobile applications.`
    },
    {
        icon: 'apps',
        name: 'Mobile Application Developement',
        description: `We develop native mobile applications for iOS and Android with amazing user interfaces.`
    },
    {
        icon: 'assemble',
        name: 'Product Management',
        description: `We help you "Plan, Design, Develop and Manage" software applications to automate your business processes.`
    },
    {
        icon: 'coins',
        name: 'Digital Marketing',
        description: `We carry out Digital Marketing Campaigns for products and services ensuring that you reach your desired customers. Using analytics, we are able to make informed decisions and properly focus our campaings on what works for you.`
    },
]