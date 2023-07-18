const productos = [
    {
        id:'01',
        name:'random1',
        category:'nuevos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'30000',
        img:'https://canaglia.com/wp-content/uploads/2022/06/Bicicleta-SBK-E-Power-Pro-XV-R29-NegroAzulVerde.jpg',
        stock: 6,
    },
    {
        id:'02',
        name:'random2',
        category:'nuevos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'20000',
        img:'https://canaglia.com/wp-content/uploads/2021/12/Firebird-Fast-Negro-y-Blanco.jpg',
        stock: 8,
    },
    {
        id:'03',
        name:'random3',
        category:'nuevos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'25000',
        img:'https://canaglia.com/wp-content/uploads/2022/06/Bicicleta-SBK-X9-R20.jpg',
        stock: 7,
    },
    {
        id:'04',
        name:'random4',
        category:'oferta',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'40000',
        img:'https://picsum.photos/200',
        stock: 6,
    },
    {
        id:'05',
        name:'random5',
        category:'oferta',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'50000',
        img:'https://picsum.photos/202',
        stock: 9,
    },
    {
        id:'06',
        name:'random6',
        category:'oferta',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'20000',
        img:'https://picsum.photos/206',
        stock: 8,
    },
    {
        id:'07',
        name:'random7',
        category:'vendidos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'30000',
        img:'https://picsum.photos/203',
        stock: 8,
    },
    {
        id:'08',
        name:'random8',
        category:'vendidos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'50000',
        img:'https://picsum.photos/204',
        stock: 8,
    },
    {
        id:'09',
        name:'random9',
        category:'vendidos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:'30000',
        img:'https://picsum.photos/205',
        stock: 8,
    },
]

export const data = new Promise((resolve, reject) => {
    let condition = true
    setTimeout (()=> {
        if (condition){
        resolve(productos)
        }else{
        reject('algo salio mal')
        }
    },3000)
})