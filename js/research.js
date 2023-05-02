"use strict";
const ctx = $("#myChart");
Chart.defaults.color = "#f5f5f7";
Chart.defaults.borderColor = "#d6d6d6";
Chart.defaults.font.size = 16;

const data = {
    labels: [
        "Bahrain",
        "Iran",
        "Iraq",
        "Jordan",
        "Kuwait",
        "Lebanon",
        "Oman",
        "Palestine",
        "Qatar",
        "Saudi Arabia",
        "Syria",
        "UAE",
        "Yemen",
    ],
    datasets: [
        {
            label: "Internet Penetration (%)",
            data: [99.0, 78.6, 74.9, 88.0, 99.0, 86.6, 96.4, 74.6, 99.0, 99.0, 35.8, 99.0, 26.7],
            backgroundColor: "#f6f361",
        },
    ],
};
new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
        indexAxis: "y",
    },
});

const mql = window.matchMedia("(max-width: 828px)");
function screenTest(e) {
    if (e.matches) {
        Chart.defaults.aspectRatio = 3 / 5;
        Chart.defaults.font.size = 14;
    } else {
        Chart.defaults.aspectRatio = 5 / 3;
        Chart.defaults.font.size = 16;
    }
}

mql.addEventListener("change", screenTest);

const info = [
    {
        img: "../images/www3.png",
        h2: "Today",
        p: "Today, the web has become an essential part of daily life, with billions of people around the world using it to communicate, share information, and conduct business. The rise of social media and mobile devices has further transformed the web, making it more accessible and interactive than ever before. As the web continues to evolve, it will undoubtedly play an increasingly important role in shaping the future of society and commerce.",
    },
    {
        img: "../images/www2.jpeg",
        h2: "Growing",
        p: "As the web grew in popularity, businesses began to recognize its potential for e-commerce. In the late 1990s and early 2000s, dot-com companies emerged, many of which went public and became highly valued despite having no profits. However, the dot-com bubble burst in 2000, leading to a market crash and the closure of many companies. Despite the setbacks, e-commerce continued to grow, and today, online shopping is a multi-billion dollar industry.",
    },
    {
        img: "../images/www4.png",
        h2: "Evolution",
        p: "The early days of the web were characterized by a lack of standardization, with different browsers interpreting web pages in different ways. In 1996, the World Wide Web Consortium (W3C) was formed to develop and promote web standards. The W3C created HTML, the markup language used to create web pages, and CSS, which is used to style web pages. With the development of standards, web developers could create websites that were more consistent across different browsers, making the web more accessible and user-friendly.",
    },
    {
        img: "../images/www1.jpg",
        h2: "How the Web began",
        p: 'The history of the web dates back to the late 1960s when the US Department of Defense created the ARPANET, a network of computers designed to allow researchers to communicate and share resources. In the 1980s, Tim Berners-Lee, a British computer scientist, developed the concept of a "hypertext" system, which he later called the World Wide Web. In 1991, he released the first web page, and by 1993, the web had grown to include over 500 websites. The introduction of web browsers such as Mosaic and Netscape Navigator in the mid-1990s made the web accessible to a wider audience, and by the turn of the millennium, there were over 17 million websites on the internet.',
    },
    {
        img: "../images/if3.png",
        h2: "Security",
        p: "Security is also a crucial consideration for the internet infrastructure. Cyber attacks and data breaches can have significant consequences, both for individuals and organizations. To ensure the security of the infrastructure, various security measures, such as firewalls, encryption, and authentication protocols, are implemented to protect against cyber threats.",
    },
    {
        img: "../images/if1.jpeg",
        h2: "Data center",
        p: "TAnother important aspect of the internet infrastructure is the data centers that store and process data for businesses and individuals. These centers house large numbers of servers and other computing equipment, and they consume massive amounts of energy to operate. As the demand for data storage and processing continues to grow, more data centers are being built around the world, leading to concerns about their environmental impact.",
    },
    {
        img: "../images/if2.png",
        h2: "Global network",
        p: "One of the key components of the internet infrastructure is the global network of fiber optic cables. These cables span across the ocean floors, connecting different continents and countries. The cables transmit data at incredibly high speeds, allowing users to transfer vast amounts of information across the globe. The cables are laid and maintained by specialized ships and underwater robots, and they are critical to the functioning of the internet.",
    },
    {
        img: "../images/if4.jpeg",
        h2: "Defintion",
        p: "The internet infrastructure is the backbone of the internet, consisting of the physical and virtual components that allow users to connect to the internet and communicate with each other. The infrastructure is made up of a network of devices, such as servers, routers, switches, and fiber optic cables, that are interconnected to create a global network. The infrastructure is maintained by internet service providers (ISPs) who provide connectivity to homes, businesses, and other organizations.",
    },
];

let c = 0;
info.map((item) => {
    const x = $('<div class="container">');
    const w = $('<div class="parent tf1">');
    const y = $('<div class="t1">');
    const z = $('<section class="telecom">');
    const a = $('<section class="s1">');
    if (c === 7) {
        w.append(`<h1>The internet infrastrcure`);
    }
    if (c === 3) {
        w.append(`<h1>History of the Web`);
    }
    if (c % 2 === 0) {
        x.css({ "background-color": "#f5f5f7" });
        y.css("color", "#1d1d1f");
    }
    x.append(w);
    w.append(y);
    y.append(z, a);
    z.append(`<img src="${item.img}" alt="" />`);
    a.append(`<h2>${item.h2}`, `<p>${item.p}`);
    c++;
    $(".main-search").prepend(x);
});
