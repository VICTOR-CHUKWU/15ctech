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
        icon: 'chrome',
        name: 'Mobile Developement',
        description: 'Our high performance web-based applications are responsive '
    },
    {
        icon: 'chrome',
        name: 'Product Management',
        description: 'Our high performance web-based applications are responsive '
    },
    {
        icon: 'chrome',
        name: 'Digital Marketing',
        description: 'Our high performance web-based applications are responsive '
    },
]