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

const Faq = [
    {
        id:1,
        question: "How long until we deliver your product.?",
        answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
    },
    {
        id:2,
        question: "Do you offer money back guarentee?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorum nostrum voluptates odio commodi similique sapiente, eum velit eos repudiandae hic consequuntur quae quo doloremque a laborum quidem.",
    },
    {
        id:3,
        question: "Is it medically tested?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa ratione quidem. Officiis saepe doloribus ad vel pariatur, animi ipsa dolores aliquid est repudiandae deserunt. Vitae facilis tempore.",
    },
    {
        id:4,
        question: "How to get best results from this product?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officia, laborum hic consequatur voluptate facilis. Assumenda neque, a molestiae aliquam, illum quibusdam enim velit adipisci quisquam quam.",
    },
    {
        id:5,
        question: "Do you ship out of United States?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo itaque blanditiis sit illo quia corporis reprehenderit in. Fugit excepturi nam in nihil inventore vel officiis aspernatur.",
    },
    {
        id:6,
        question: "Do you ship out of United States?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo itaque blanditiis sit illo quia corporis reprehenderit in. Fugit excepturi nam in nihil inventore vel officiis aspernatur.",
    },
]

export {
    navLinks,
    features,
    sponsors,
    testimonials,
    Faq,
};