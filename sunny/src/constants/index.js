import {abstract, cta, delivery, gosprimer, hdmicro, howtouse, Image, logo, mockup, price, line, } from '../assets'
import { acenture, deltoite, google, ibm, samsung } from '../assets';

const navLinks = [
    {
        title:"Home",
        id:"home",
    },
    {
        title:"About us",
        id:"about us",
    },
    {
        title:"Products",
        id:"Products",
    },
    {
        title:"FAQ's",
        id:"FAQ's",
    },
    {
        title:"Contact us",
        id:"Contact us"
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

const Sponsors = [
    {
        id:'image-1',
        image: acenture,
    },
    {
        id:'image-2',
        image: deltoite,
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
]

export {
    navLinks,
    features,
    Sponsors,
};