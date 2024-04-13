export interface CoffeeData {
    id: string
    url: string
    headline: string
    price: number
    description: string
}

const data: CoffeeData[] = [
    {
        id: '1',
        url: '/src/assets/coffee/coffee-1.jpg',
        price: 3800,
        headline: '经典意式特浓',
        description: '普洱咖啡鹿家嘴经典意式特浓咖啡豆 500g云南小粒阿拉比卡咖啡豆黑咖啡'
    },
    {
        id: '2',
        url: '/src/assets/coffee/coffee-2.jpg',
        price: 6000,
        headline: '蓝山风味醇香',
        description: '普洱咖啡鹿家嘴蓝山风味醇香咖啡豆500g云南小粒阿拉比卡咖啡豆黑咖啡'
    },
    {
        id: '3',
        url: '/src/assets/coffee/coffee-3.jpg',
        price: 6900,
        headline: '美式速溶',
        description: '普洱咖啡黑咖啡0脂0香精美式速溶云南阿拉比卡小粒咖啡豆粉2g*65条'
    },
    {
        id: '4',
        url: '/src/assets/coffee/coffee-4.jpg',
        price: 7900,
        headline: '无糖美式速溶',
        description: '普洱咖啡鹿家嘴精品黑咖啡0脂无加糖美式速溶2gx80条云南小粒纯阿拉比卡'
    },
    {
        id: '5',
        url: '/src/assets/coffee/coffee-5.jpeg',
        price: 9700,
        headline: '经典意式特浓',
        description: '普洱咖啡鹿家嘴精品美式冻干速溶纯黑咖啡0脂2gx80条云南小粒阿拉比卡豆粉'
    },
    {
        id: '6',
        url: '/src/assets/coffee/coffee-6.jpeg',
        price: 6790,
        headline: '挂耳黑咖啡蓝山意式',
        description: '普洱咖啡鹿家嘴挂耳黑咖啡蓝山意式风味10g*20片装云南小粒阿拉比卡豆'
    },
    {
        id: '7',
        url: '/src/assets/coffee/coffee-7.jpeg',
        price: 4900,
        headline: '意式深度烘培',
        description: '普洱咖啡芝逅 云南小粒咖啡豆 阿拉比卡豆 意式风味 454g 深度烘培'
    },
    {
        id: '8',
        url: '/src/assets/coffee/coffee-8.jpeg',
        price: 4900,
        headline: '蓝山风味阿拉比卡',
        description: '普洱咖啡芝逅阿拉比卡咖啡豆454g蓝山风味云南普洱黑咖啡口粮豆咖啡机用'
    }
]

export default data