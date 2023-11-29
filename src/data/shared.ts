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