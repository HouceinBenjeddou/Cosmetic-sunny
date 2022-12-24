import {abstract, cta, delivery, gosprimer, hdmicro, howtouse, Image, logo, mockup, price, line, } from '../assets'
import { accenture, deltoite, google, ibm, samsung, person1, person2 } from '../assets'

const navLinks = [
    {
        title:"Home",
        id:"home",
    },
    {
        title:"Products",
        id:"Products",
    },
    {
        title:"FAQ's",
        id:"FAQ",
    },
    {
        title:"About us",
        id:"about",
    },
    {
        title:"Contact us",
        id:"contact"
    },  
];

const features = [
    {
        id: 'feature-1',
        title: "GOS- Primer Plus 30 ML",
        description: "GOSH COPENHAGEN offers a wide selection of products in different categories: Cosmetics, Fragrances, Hair Care, Face Care, Body Care. GOSH Cosmetics are available online. ",
        image:gosprimer,
    },
    {
        id: 'feature-2',
        title: "HD mirco",
        description: "HD Micro Foundation Matifying Liquid is a micronized and gently mattifying foundation with vitamin E for the most natural look. ",
        image:hdmicro,
    },
];

const sponsors = [
   
    {
        id:'image-2',
        image: deltoite,
    },
    {
        id:'image-1',
        image: accenture,
    },
    {
        id:'image-3',
        image: google,
    },
    {
        id:'image-4',
        image: ibm,
    },
    {
        id:'image-5',
        image: samsung,
    },
];

const testimonials = [
    {
        id: 1,
        image:person1,
        header:"Quick and best results. You are the best!",
        story:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available.",
        author: "Dragos Gontariu",
        position: "Mareting Manager",
    },
    {
        id: 2,
        image:person2,
        header:"Quick and best results. You are the best!",
        story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quos tempora reprehenderit enim laudantium recusandae, sunt ipsam illo aliquid molestias eligendi maxime blanditiis fugit temporibus officiis dolorem in quidem quod.",
        author: "Houcein Benjeddou",
        position: "Web Developer",
    },
    {
        id: 3,
        image: Image,
        header:"Quick and best results. You are the best!",
        story:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deleniti, reprehenderit, ea quos neque eveniet hic itaque sequi rem nobis quasi temporibus? Doloremque possimus ipsam iusto non eos voluptate magnam.",
        author: "Houcein Ben Jeddou",
        position: "Mareting Manager",
    },
];



export {
    navLinks,
    features,
    sponsors,
    testimonials,
};