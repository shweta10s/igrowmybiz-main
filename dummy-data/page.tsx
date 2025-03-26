// dummyData.ts

import { PageData } from "@/types/work-detail";


export enum PageId {
    Pachmarhi = 'pachmarhi',
    Eurotech = 'eurotech',
    // VishnuDental = 'vishnu-dental',
    Hotelnatraj = 'hotelnatraj',
    // Gym = 'gym',
    // Add other page IDs as needed
}

export const getDummyData = (id: PageId): PageData => {
    const data = {
        [PageId.Pachmarhi]: {
            bannerData: {
                img: '/assets/portfolio-images/pachmani-banner.png',
                name: 'Pachmarhi Ayurveda',
                data:'An E-Commerse website '
            },
            services: [
                { 
                    name: 'UI/UX Design', 
                    details: [
                        'Intuitive Navigation: The website\'s navigation was designed to be intuitive and easy to use, guiding customers seamlessly through the product categories and checkout process.',
                        'Visually Appealing Design: The website\'s aesthetics aligned with Pachmarhi Ayurveda\'s brand identity, creating a visually appealing and engaging experience.',
                        'Mobile Optimization: The website was fully optimized for mobile devices, ensuring a seamless shopping experience across all platforms.'
                    ]
                },
                { 
                    name: 'Cloud Services', 
                    details: [
                        'Scalability: The e-commerce platform was hosted on a cloud infrastructure, providing the flexibility to scale resources as needed to accommodate increased traffic and sales.',
                        'Reliability: The cloud-based solution ensured high availability and minimal downtime, guaranteeing a consistent shopping experience for customers.',
                         
                    ]
                 },
                { 
                    name: 'E-commerce', 
                    details: [
                        'Customizable Features: The e-commerce platform offered a wide range of features, allowing Pachmarhi Ayurveda to tailor the shopping experience to their specific needs', 
                        'Secure Payments: The platform integrated secure payment gateways, providing customers with confidence in their transactions.',
                        "Inventory Management: The e-commerce platform streamlined inventory management, ensuring accurate stock levels and efficient order fulfillment."
                    ]
                },
                { 
                    name: 'Digital Marketing',
                    details: [
                        'Search Engine Optimization (SEO): The website was optimized for search engines, ensuring visibility in relevant search results and driving organic traffic', 
                        'Content Marketing: Engaging content, such as blog posts and product descriptions, was created to educate customers about Ayurvedic products and build brand awareness.',
                        " Social Media Marketing: Pachmarhi Ayurveda leveraged social media platforms to connect with customers, share product information, and run targeted campaigns."
                    ] 
                }
            ],
            images: [
                { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/08a.png', alt: 'No Preview' },
            ],
            projectDetail: {
                title: 'Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch',
                description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
                language: 'Next.js, Tailwind CSS, Node.js, Express.js, MongoDB',
                timescale: '12 Weeks',
                system: 'Magento',
                features:[

                ] 
            },
            workDetail: {
                title: 'Context',
                context: 'Pachmarhi Ayurveda offers a wide range of Ayurvedic products (including health, skincare, and meals) and has recently launched new lines. Since launching the e-commerce platform, they experienced a 4.5x increase in sales and attracted both new and returning customers.',
                description: 'The company boosted sales by promoting small discounts to online visitors, a strategy that played a critical role in their e-commerce growth.',
                goals: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience. ',
                businessChallenges: [
                    `Build an intuitive e-commerce platform that handles multiple product categories.`,
                    'Ensure seamless integration of payment gateways and delivery options.',
                    'Address concerns about online payment security through cash-on-delivery.',
                    'Manage heavy traffic during discount periods without website downtime.',
                    'Maintain a visually consistent and attractive UI/UX across devices.',
                ],
                crm: 'Pachmarhi Ayurveda’s CMS enables the team to easily track daily, weekly, and monthly sales, approve or reject orders, update product details, and manage discount banners. It also supports offline billing, simplifying back-end operations.',
                socialMediaWork: 'Social media efforts significantly boosted Pachmarhi Ayurveda’s online presence, increasing engagement and driving website traffic. By promoting exclusive offers and educational content, their followers grew, leading to higher conversion rates.',
            },
            results:[
                {
                    name:'',
                    description:''
                },
            ],
            solution:[
                {
                    name:'Increased Sales ',
                    description:'Pachmarhi Ayurveda experienced a significant increase in sales after launching the new e-commerce store.'
                },
                {
                    name:'Enhanced Customer Experience',
                    description:' The user-friendly website and seamless checkout process improved customer satisfaction and loyalty.'
                },
                {
                    name:'Improved Brand Awareness ',
                    description:'Digital marketing efforts successfully increased brand visibility and reached a wider audience.'
                },
                {
                    name:'Data-Driven Decision-Making ',
                    description:'The use of CRM tools provided valuable insights into customer behaviour, enabling data-driven decision-making.'
                },
            ],
            conclusion:"",
            colors: {
                primary: '#00AB55',
                secondary: '#625D60',
                heading: '#282D46',
                ternary: '#010205',
            },
        },
        [PageId.Eurotech]: {
            bannerData: {
                img: '/assets/portfolio-images/eurotech.png',
                name: 'Eurotech Exchange ',
                data:'A UAE Super Cars Website'
            },
            services: [
                { 
                    name: 'E-commerce', 
                    details: [
                        'E-commerce for Eurotech Exchange refers to the online platform that allows users to buy and sell cars using both traditional currency and cryptocurrency. This platform provides a convenient and secure way for car enthusiasts to explore, purchase, and invest in vehicles',
                        
                        
                    ]
                },
                { 
                    name: 'UI/UX Design', 
                    details: [
                        `Eurotech Exchange's UI/UX design prioritizes a clean, intuitive interface that seamlessly guides users through the car buying and selling process. The platform features visually appealing elements, clear navigation, and responsive design to ensure a seamless experience across all devices.`,
                         
                    ]
                 },
                { 
                    name: 'Cryptocurrency ', 
                    details: [
                        'Eurotech Exchange offers a unique advantage by accepting both cryptocurrency and fiat currency payments. This flexibility allows users to choose the payment method that best suits their preferences and financial situation, making the platform accessible to a wider range of customers.'
                    ]
                },
                { 
                    name: 'Technology',
                    details: [
                       `Next.js for fast performance, Tailwind CSS for styling, Node.js and Express.js for backend, MongoDB for data storage, Razorpay for secure payments, tRPC for efficient communication, JWT and NextAuth.js for authentication, and Hostinger for reliable hosting. This powerful combination ensures a scalable and secure platform for car enthusiasts.`
                    ] 
                }
            ],
            images: [
                { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/e1.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/e1a.png', alt: 'No Preview' },
            ],
            projectDetail: {
                title: 'Revolutionizing Car Ownership with Crypto and Partial Ownership',
                description: 'Eurotech Exchange is a pioneering online platform that has transformed the way car enthusiasts buy, sell, and invest in vehicles. By combining traditional car buying with cryptocurrency and introducing the concept of partial car ownership, Eurotech Exchange has created a unique and innovative marketplace.',
                language: 'Typescript ,Next.js, Tailwind CSS, TRPC , Prisma',
                timescale: '16 Weeks',
                system: 'Magento',
                features:[
                    "Cryptocurrency and fiat currency payments",
                    "Partial car ownership (token auctions)",
                    "User-friendly interface",
                    "Secure payment gateways",
                    "Wide selection of cars"
                ] 
            },
            workDetail: {
                title: '',
                context: 'Pachmarhi Ayurveda offers a wide range of Ayurvedic products (including health, skincare, and meals) and has recently launched new lines. Since launching the e-commerce platform, they experienced a 4.5x increase in sales and attracted both new and returning customers.',
                description: 'The company boosted sales by promoting small discounts to online visitors, a strategy that played a critical role in their e-commerce growth.',
                goals: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience. ',
                businessChallenges: [
                    `Integrating cryptocurrency payments seamlessly with traditional fiat currency`,
                    'Developing a system for partial car ownership and token auctions',
                    'Ensuring a secure and reliable platform for financial transactions',
                    'Providing a user-friendly experience for both tech-savvy and less tech-savvy users',
                ],
                crm: 'Pachmarhi Ayurveda’s CMS enables the team to easily track daily, weekly, and monthly sales, approve or reject orders, update product details, and manage discount banners. It also supports offline billing, simplifying back-end operations.',
                socialMediaWork: 'Social media efforts significantly boosted Pachmarhi Ayurveda’s online presence, increasing engagement and driving website traffic. By promoting exclusive offers and educational content, their followers grew, leading to higher conversion rates.',
            },
            solution:[
                {
                    name:'Cryptocurrency Integration  ',
                    description:'Eurotech Exchange implemented secure cryptocurrency payment gateways to allow users to purchase cars using various cryptocurrencies.'
                },
                {
                    name:'Partial Car Ownership',
                    description:'The platform introduced token auctions, enabling users to purchase partial ownership of cars, making car investment more accessible.'
                },
                {
                    name:'Security  ',
                    description:' Robust security measures, including JWT and NextAuth.js, were implemented to protect user data and financial transactions.'
                },
                {
                    name:'User Experience ',
                    description:'The platform was designed with a focus on simplicity and ease of use, making it accessible to a wide range of users.'
                },
                {
                    name:'Technology Stack  ',
                    description:' A modern tech stack, including Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB, was chosen to ensure scalability, performance, and security.'
                },
            ],
            results:[
                {
                    name:'Increased User Engagement',
                    description:' Eurotech Exchange has attracted a significant number of car enthusiasts who appreciate the unique features and benefits it offers.'
                },
                {
                    name:'Successful Car Auctions',
                    description:' The partial car ownership feature has been a popular addition, with successful token auctions generating interest and investment.'
                },
                {
                    name:'Secure Transactions ',
                    description:`The platform's robust security measures have instilled confidence in users, leading to increased trust and adoption.`
                },
                {
                    name:'Enhanced User Experience ',
                    description:'The user-friendly interface and intuitive design have made Eurotech Exchange a preferred destination for car enthusiasts.'
                }
            ],
            conclusion:"Eurotech Exchange has revolutionized the car buying and investment landscape by offering a platform that combines traditional car ownership with innovative features like cryptocurrency payments and partial car ownership. With its focus on security, user experience, and technology, Eurotech Exchange has become a leading destination for car enthusiasts worldwide.",
            colors: {
                primary: '#ED3237',
                secondary: '#625D60',
                heading: '#282D46',
                ternary: '#010205',
            },
        },
        [PageId.Hotelnatraj]: {
            bannerData: {
                img: '/assets/portfolio-images/natraj-banner.png',
                name: 'Hotel Natraj Pachmarhi ',
                data:'-A Luxury hotel business website  -'
            },
            services: [
                { 
                    name: 'E-commerce', 
                    details: [
                        'E-commerce for Eurotech Exchange refers to the online platform that allows users to buy and sell cars using both traditional currency and cryptocurrency. This platform provides a convenient and secure way for car enthusiasts to explore, purchase, and invest in vehicles',
                        
                        
                    ]
                },
                { 
                    name: 'UI/UX Design', 
                    details: [
                        `Eurotech Exchange's UI/UX design prioritizes a clean, intuitive interface that seamlessly guides users through the car buying and selling process. The platform features visually appealing elements, clear navigation, and responsive design to ensure a seamless experience across all devices.`,
                         
                    ]
                 },
                { 
                    name: 'Cryptocurrency ', 
                    details: [
                        'Eurotech Exchange offers a unique advantage by accepting both cryptocurrency and fiat currency payments. This flexibility allows users to choose the payment method that best suits their preferences and financial situation, making the platform accessible to a wider range of customers.'
                    ]
                },
                { 
                    name: 'Technology',
                    details: [
                       `Next.js for fast performance, Tailwind CSS for styling, Node.js and Express.js for backend, MongoDB for data storage, Razorpay for secure payments, tRPC for efficient communication, JWT and NextAuth.js for authentication, and Hostinger for reliable hosting. This powerful combination ensures a scalable and secure platform for car enthusiasts.`
                    ] 
                }
            ],
            images: [
                { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/n1.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
                { src: '/assets/portfolio-images/n1a.png', alt: 'No Preview' },
            ],
            projectDetail: {
                title: 'Hotel Natraj Pachmarhi - Elevating Hospitality with Technology',
                description: 'Hotel Natraj Pachmarhi is a renowned hospitality establishment committed to providing exceptional guest experiences. With a focus on personalization and customization, the hotel aimed to create a memorable stay for its guests. To achieve this, Hotel Natraj Pachmarhi embarked on a digital transformation journey, leveraging cutting-edge technology to enhance its operations and guest satisfaction.',
                language: 'Next.js, Tailwind CSS, TRPC , Prisma , Typescript',
                timescale: '3 Weeks',
                system: 'Magento',
                features:[
                    "Online booking and reservations",
                    "Guest management",
                    "Payment processing",
                    "Inventory management",
                    "Personalized recommendations"
                ] 
            },
            workDetail: {
                title: '',
                context: 'Pachmarhi Ayurveda offers a wide range of Ayurvedic products (including health, skincare, and meals) and has recently launched new lines. Since launching the e-commerce platform, they experienced a 4.5x increase in sales and attracted both new and returning customers.',
                description: 'The company boosted sales by promoting small discounts to online visitors, a strategy that played a critical role in their e-commerce growth.',
                goals: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience. ',
                businessChallenges: [
                    `Streamlining the booking and reservation process`,
                    'Enhancing guest communication and engagement',
                    'Providing a seamless online experience',
                    'Managing inventory and resources efficiently',
                ],
                crm: 'Pachmarhi Ayurveda’s CMS enables the team to easily track daily, weekly, and monthly sales, approve or reject orders, update product details, and manage discount banners. It also supports offline billing, simplifying back-end operations.',
                socialMediaWork: 'Social media efforts significantly boosted Pachmarhi Ayurveda’s online presence, increasing engagement and driving website traffic. By promoting exclusive offers and educational content, their followers grew, leading to higher conversion rates.',
            },
            solution:[
                {
                    name:'Custom Booking Platform',
                    description:' A user-friendly online booking platform was developed using Next.js, Tailwind CSS, Node.js, and Express.js. This platform allowed guests to easily search for available rooms, select dates, and make reservations.'
                },
                {
                    name:'Personalized Recommendations ',
                    description:'The hotel utilized data analytics to understand guest preferences and provide personalized recommendations for activities, dining options, and other services.'
                },
                {
                    name:'Efficient Operations ',
                    description:' A robust backend system, powered by MongoDB, was implemented to manage inventory, track bookings, and streamline hotel operations.'
                },
                {
                    name:'Secure Payments ',
                    description:' Razorpay was integrated to provide a secure and convenient payment gateway for guests.'
                },
                {
                    name:'Enhanced Communication ',
                    description:' tRPC was used to enable efficient communication between the frontend and backend, ensuring a seamless user experience.'
                },
            ],
            results:[
                {
                    name:'Increased User Engagement',
                    description:' Eurotech Exchange has attracted a significant number of car enthusiasts who appreciate the unique features and benefits it offers.'
                },
                {
                    name:'Successful Car Auctions',
                    description:' The partial car ownership feature has been a popular addition, with successful token auctions generating interest and investment.'
                },
                {
                    name:'Secure Transactions ',
                    description:`The platform's robust security measures have instilled confidence in users, leading to increased trust and adoption.`
                },
                {
                    name:'Enhanced User Experience ',
                    description:'The user-friendly interface and intuitive design have made Eurotech Exchange a preferred destination for car enthusiasts.'
                }
            ],
            conclusion:"Eurotech Exchange has revolutionized the car buying and investment landscape by offering a platform that combines traditional car ownership with innovative features like cryptocurrency payments and partial car ownership. With its focus on security, user experience, and technology, Eurotech Exchange has become a leading destination for car enthusiasts worldwide.",
            colors: {
                primary: '#00397B',
                secondary: '#625D60',
                heading: '#282D46',
                ternary: '#010205',
            },
        },
    };

    return data[id] || data[PageId.Pachmarhi]; 
};




// // dummyData.ts

// import { Service, ProjectDetail, BannerData, ImageData, WorkDetail  } from "@/types/work-detail";

// export const services: Service[] = [
//     { name: 'Ui/Ux Design' },
//     { name: 'Cloud Services' },
//     { name: 'E-commerce' },
//     { name: 'Digital Marketing' }
// ];

// export const projectDetail: ProjectDetail = {
//     title: 'Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch',
//     description: 'Pachmarhi Ayurveda, the multinational conglomerate, collaborated with Webandcrafts to develop a high-end webpage for online food essentials. Our team crafted an exquisite landing page that is on par with global standards and, at the same time, offers a flawless UI and user experience.',
//     language: 'Next js, tailwind css, node js, express js, mongodb',
//     timescale: '12 Week',
//     system: 'Magento'
// };

// export const bannerData: BannerData = {
//     img: '/assets/portfolio-images/pachmani-banner.png',
//     name: 'Pachmarhi Ayurveda'
// };

// export const images: ImageData[] = [
//     { src: '/assets/portfolio-images/computer-mockup.png', alt: 'No Preview' },
//     { src: '/assets/portfolio-images/08.png', alt: 'No Preview' },
//     { src: '/assets/portfolio-images/phone-mockup.png', alt: 'No Preview' },
//     { src: '/assets/portfolio-images/08a.png', alt: 'No Preview' }
// ];

// export const workDetail: WorkDetail = {
//     title: 'Seamless and Swift Product Delivery with Trusted App Development',
//     description: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.',
//     context: 'Reimagining the Realm of E-commerce with Easy In-App Purchases',
//     goals: 'Seamless and Swift Product Delivery with Trusted App Development',
//     businessChallenges: [
//         'Lorem ipsum dolor sit amet, consectetur',
//         'Nunc sagittis amet fames amet',
//         'Scelerisque molestie eu amet laoreet non',
//         'quam tincidunt. Nisl cursus',
//         'Risus mollis dictum dolor, quam Gravida'
//     ],
//     crm: 'Seamless and Swift Product Delivery with Trusted App Development',
//     socialMediaWork: 'Finding time to visit multiple shops to purchase various products would be cumbersome. LuLu wanted a one-touch app to make all your shopping needs as easy as pie. Our strategies were entrusted with the goal of considering building a seamless and time-saving solution to make delightful options with an eCommerce app. The key concern was to offer access to the products, place orders online, and get them delivered on time for a smooth shopping experience.'
// };
