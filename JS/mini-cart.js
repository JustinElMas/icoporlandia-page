const productsOfStore = [
    {
        id: "MB-icopor-01",
        titulo: "Mario Bros en Icopor",
        imagen: "./assets/infantil/mario-and-luigi.jpeg",
        categorias: {
            nombre: "Infantil",
            id: "kids",
        },
        price: "Por hora",
    },
    {
        id: "MB-icopor-02",
        titulo: "Mario y Luigi en Icopor",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/369267306_772669401532228_4037942522311816260_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=T6BV8PoNuX4AX-q5hZW&_nc_ht=scontent-lim1-1.xx&oh=00_AfBrIUQguCSMj8Iffj8tcnjJ8V_VKypyUo3kZ1ixtsTGmA&oe=64EE526E",
        categorias: {
            nombre: "Infantil",
            id: "kids",
        },
        price: "Por hora",
    },
    {
        id: "Sponge-Boog-03",
        titulo: "Bob Esponja - Detalles de dulces",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/285448297_7948529308498101_3551351573639244070_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TNu3Paj0hq8AX_tmuPA&_nc_ht=scontent-lim1-1.xx&oh=00_AfCv91fZ4PxsQo_9JkLWj9Ylm6GP2tHfTPi_582KZEnqnA&oe=64ECC588",
        categorias: {
            nombre: "Celebraciones",
            id: "celebraciones"
        },
        price: "Por unidad"
    },
    {
        id: "Sponge-Boog-03",
        titulo: "Bob Esponja - Pastel de Cumpleaños",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/285443715_7948433358507696_4010538397365848497_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ldE6Gn2vyR8AX-HOKeh&_nc_ht=scontent-lim1-1.xx&oh=00_AfAEhwbFPNeu7Z-egCVpxS9rDK8ITBZrKSfS_L9Dy57HJg&oe=64EE5237",
        categorias: {
            nombre: "Celebraciones",
            id: "celebraciones"
        },
        price: "Llama ahora, y recibe más información acerca de este producto"
    },
    {
        id: "Quince Años",
        titulo: "Fiestas de Quinceaños - Modo Rosa",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/181559171_5856887400995646_3596267923316923283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ixYTUVingXoAX-iJov0&_nc_ht=scontent-lim1-1.xx&oh=00_AfDJZs63h2qfn4-yfeYBYY7zvWNIv0StcXOWFWuYlDIfbA&oe=65102719",
        categorias: {
            nombre: "Quinceaños",
            id: "quince"
        },
        price: "Llama ahora, y recibe más información sobre como hacer la mejor fiesta de quinceaños 😍💫"
    },
    {
        id: "Quince Años",
        titulo: "Luces de 15's - Modo Rosa",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/182751324_5856886600995726_1701947996289405184_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qGoyEbQiLWoAX_lcNcn&_nc_ht=scontent-lim1-1.xx&oh=00_AfBRd2rLo3I788aA-jXsViSS8EoiYvMnJaWSO1qIh49Dtw&oe=65102952",
        categorias: {
            nombre: "Quinceaños",
            id: "quince"
        },
        price: "Llama ahora, y recibe más información sobre como hacer la mejor fiesta de quinceaños 😍💫"
    },
    {
        id: "Pepa Pig",
        titulo: "Personajes Animados - Pepa Pig",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/182908290_5856867327664320_5538290774999326790_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QjZ_0-YBkWkAX8p3GB9&_nc_ht=scontent-lim1-1.xx&oh=00_AfAKyI7_SiotPw82wjdXZa_EREQPS2T2vQPGNkEIgS0swg&oe=65101ABE",
        categorias: {
            nombre: "Infantil",
            id: "kids"
        },
        price: "Llama ahora, y recibe más información sobre este producto"
    },
    {
        id: "Bog Esponja",
        titulo: "Personajes Animados - Bob Esponja",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/182745186_5856866630997723_5278075995090494721_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4DimmR5eapEAX_Y-YUD&_nc_ht=scontent-lim1-1.xx&oh=00_AfAA1qG7PMqg6oE5_F_V7ElXzU5oJbINYekeB3HEH5RExQ&oe=6510246A",
        categorias: {
            nombre: "Infantil",
            id: "kids"
        },
        price: "Llama ahora, y recibe más información sobre este producto"
    },
    {
        id: "Feliz New Year",
        titulo: "Celebraciones para fin de año",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/323009574_506028131601327_910174405183820125_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uoag-qtPN6sAX8SvTXJ&_nc_ht=scontent-lim1-1.xx&oh=00_AfBKOtbnrJIH8o_BYpDWZ7WzRPHz-_An1F2XqAiuVrq0xA&oe=64ED4614",
        categorias: {
            nombre: "Celebraciones",
            id: "celebraciones"
        },
        price: "Llama ahora, y recibe más información sobre este producto"
    }
]


const containerProducts = document.querySelector("#container-product");
const botonesCategorias = document.querySelectorAll(".btn-category");
const titleBeginner = document.querySelector("#title-begin");
let addButton = document.querySelectorAll(".product-add");

function loadProducts (productsChoosed) {

    containerProducts.innerHTML = "";

    productsChoosed.forEach(product => {
        
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = ` 
            <img class="product-img" src="${product.imagen}" alt="${product.titulo}">

            <div class="product-details">
                <h2 class="product title">${product.titulo}</h2>
                <p class="prodcut-pricing">${product.price}</p>
                <button class="product-add" id"${product.id}">Agregar</button>
            </div>
        `;

        containerProducts.append(div);
    });

    updateButtonsAdd();

};

loadProducts(productsOfStore);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("actived"));
        e.currentTarget.classList.add("actived");

        if(e.currentTarget.id != "todos") {
            const productCategory = productsOfStore.find(productsOfStore => productsOfStore.categorias.id === e.currentTarget.id);
            titleBeginner.innerText = productCategory.categorias.nombre;

            const productsBtn = productsOfStore.filter(productsOfStore => productsOfStore.categorias.id === e.currentTarget.id);
            loadProducts(productsBtn);
        } else {
            titleBeginner.innerText = "Todos los productos";
            loadProducts(productsOfStore);
        }
    
    })
});

function updateButtonsAdd() {
    addButton = document.querySelectorAll(".product-add");
}