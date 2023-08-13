const productos = [
    {
        id:'01',
        name:'SBK Fatboy',
        category:'nuevos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:1008000,
        img:'https://canaglia.com/wp-content/uploads/2022/06/Bicicleta-SBK-Fatboy-X8-R26-NegroRojo.jpg',
        stock: 6,
    },
    {
        id:'02',
        name:'Firebird Adventure',
        category:'nuevos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:158400,
        img:'https://canaglia.com/wp-content/uploads/2021/12/Firebird-Fast-Negro-y-Blanco.jpg',
        stock: 8,
    },
    {
        id:'03',
        name:'Raleigh Mojave 2.0',
        category:'nuevos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:212400,
        img:'https://canaglia.com/wp-content/uploads/2022/09/Bicicleta-Raleigh-Mojave-2.0-R29-2023-NegroAzul.jpg',
        stock: 7,
    },
    {
        id:'04',
        name:'Wilier 101X XT',
        category:'oferta',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:216050,
        img:'https://canaglia.com/wp-content/uploads/2022/10/Bicicleta-Wilier-101X-R29-2022-RojoNegro3.jpg',
        stock: 6,
    },
    {
        id:'05',
        name:'SBK E-Power X9',
        category:'oferta',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:996000,
        img:'https://canaglia.com/wp-content/uploads/2022/06/Bicicleta-SBK-E-Power-Pro-XV-R29-NegroAzulVerde.jpg',
        stock: 9,
    },
    {
        id:'06',
        name:'SLP 25 PRO',
        category:'oferta',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:125160,
        img:'https://canaglia.com/wp-content/uploads/2020/04/Bicicleta-SLP-25-R29-NegroBlancoGris.jpg',
        stock: 8,
    },
    {
        id:'07',
        name:'Raleigh Strada 1.0',
        category:'vendidos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:466440,
        img:'https://canaglia.com/wp-content/uploads/2022/06/Bicicleta-Raleigh-Strada-1.0-R28-Negro.jpg',
        stock: 8,
    },
    {
        id:'08',
        name:'Rango Probike',
        category:'vendidos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:780000,
        img:'https://canaglia.com/wp-content/uploads/2022/09/Bicicleta-Rango-Probike-R26-21v-NaranjaNegro-1.jpg',
        stock: 8,
    },
    {
        id:'09',
        name:'Zenith Andes CMP',
        category:'vendidos',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est, animi totam adipisci velit a corporis culpa laboriosam officiis laborum?',
        price:225840,
        img:'https://canaglia.com/wp-content/uploads/2021/10/Bicicleta-Zenith-Andes-CMP-R29-Gris.jpg',
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