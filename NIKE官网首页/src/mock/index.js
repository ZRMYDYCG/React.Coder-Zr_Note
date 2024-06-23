import Mock from 'mockjs'

// 导航链接
Mock.mock('/api/navLinks', 'get', () => {
    return {
        data: [
            { href: "#home", label: "Home" },
            { href: "#about-us", label: "About Us" },
            { href: "#products", label: "Products" },
            { href: "#contact-us", label: "Contact Us" },
        ]
    };
})

// 鞋子数据
Mock.mock('/api/shoes', 'get', () => {
    return {
        data: [
            {
                thumbnail: '/src/assets/images/thumbnail-shoe1.svg',
                bigShoe: '/src/assets/images/big-shoe1.png',
            },
            {
                thumbnail: '/src/assets/images/thumbnail-shoe2.svg',
                bigShoe: '/src/assets/images/big-shoe2.png',
            },
            {
                thumbnail: '/src/assets/images/thumbnail-shoe3.svg',
                bigShoe: '/src/assets/images/big-shoe3.png',
            },
        ]
    };
})

// 统计数据
Mock.mock('/api/statistics', 'get', () => {
    return {
        data: [
            { value: '1k+', label: 'Brands' },
            { value: '500+', label: 'Shops' },
            { value: '250k+', label: 'Customers' },
        ]
    }
})

// 产品数据
Mock.mock('/api/products', 'get', () => {
    return {
        data: [
            {
                imgURL: '/src/assets/images/shoe4.svg',
                name: "Nike Air Jordan-01",
                price: "$200.20",
            },
            {
                imgURL: '/src/assets/images/shoe5.svg',
                name: "Nike Air Jordan-10",
                price: "$210.20",
            },
            {
                imgURL: '/src/assets/images/shoe6.svg',
                name: "Nike Air Jordan-100",
                price: "$220.20",
            },
            {
                imgURL: '/src/assets/images/shoe7.svg',
                name: "Nike Air Jordan-001",
                price: "$230.20",
            },
        ]
    }
})

// 服务数据
Mock.mock('/api/services', 'get', () => {
    return {
        data: [
            {
                imgURL: '/src/assets/icons/truck-fast.svg',
                label: "Free shipping",
                subtext: "Enjoy seamless shopping with our complimentary shipping service.",
            },
            {
                imgURL: '/src/assets/icons/shield-tick.svg',
                label: "Secure Payment",
                subtext: "Experience worry-free transactions with our secure payment options."
            },
            {
                imgURL: '/src/assets/icons/support.svg',
                label: "Love to help you",
                subtext: "Our dedicated team is here to assist you every step of the way."
            },
        ]
    }
})

// 评论数据
Mock.mock('/api/reviews', 'get', () => {
    return {
        data: [
            {
                imgURL: '/src/assets/images/customer1.jpeg',
                customerName: 'Morich Brown',
                rating: 4.5,
                feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
            },
            {
                imgURL: '/src/assets/images/customer2.svg',
                customerName: 'Lota Mongeskar',
                rating: 4.5,
                feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
            }
        ]
    }
})

// 页脚链接数据
Mock.mock('/api/footerLinks', 'get', () => {
    return {
        data: [
            {
                title: "Products",
                links: [
                    { name: "Air Force 1", link: "/" },
                    { name: "Air Max 1", link: "/" },
                    { name: "Air Jordan 1", link: "/" },
                    { name: "Air Force 2", link: "/" },
                    { name: "Nike Waffle Racer", link: "/" },
                    { name: "Nike Cortez", link: "/" },
                ],
            },
            {
                title: "Help",
                links: [
                    { name: "About us", link: "/" },
                    { name: "FAQs", link: "/" },
                    { name: "How it works", link: "/" },
                    { name: "Privacy policy", link: "/" },
                    { name: "Payment policy", link: "/" },
                ],
            },
            {
                title: "Get in touch",
                links: [
                    { name: "customer@nike.com", link: "mailto:customer@nike.com" },
                    { name: "+92554862354", link: "tel:+92554862354" },
                ],
            },
        ]
    }
})

// 社交媒体数据
Mock.mock('/api/socialMedia', 'get', () => {
    return {
        data: [
            { src: '/src/assets/icons/facebook.svg', alt: "facebook logo" },
            { src: '/src/assets/icons/twitter.svg', alt: "twitter logo" },
            { src: '/src/assets/icons/instagram.svg', alt: "instagram logo" },
        ]
    }
})

// 启动 Mock 服务
Mock.setup({
    timeout: '200-400'
})