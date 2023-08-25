const productsOfStore = [
    {
        id: "MB-icopor-01",
        titulo: "Mario Bros en Icopor",
        imagen: "./assets/infantil/mario-and-luigi.jpeg",
        categorias: {
            nombre: "Infantil",
            id: "01",
        },
        price: "200.000 por hora",
    },
    {
        id: "MB-icopor-02",
        titulo: "Mario y Luigi en Icopor",
        imagen: "./assets/infantil/mario-panoramic.jpeg",
        categorias: {
            nombre: "Infantil",
            id: "02",
        },
        price: "200.000 por hora",
    },
    {
        id: "Sponge-Boog-03",
        titulo: "Bob Esponja - Detalles de dulces",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/285448297_7948529308498101_3551351573639244070_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tHINttjnK3IAX-7R1RV&_nc_ht=scontent-lim1-1.xx&oh=00_AfDCJp-WF4z79mVVd0hg0WYio4eo1YHh5DEqvtuANAvz_Q&oe=64CD2188",
        categorias: {
            nombre: "Infantil",
            id: "03"
        },
        price: "20.000 pesos por unidad"
    },
    {
        id: "Sponge-Boog-03",
        titulo: "Bob Esponja - Pastel de Cumpleaños",
        imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/285294901_7948528988498133_1990993600010048737_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A8wq-FavrxkAX9BvUDi&_nc_ht=scontent-lim1-1.xx&oh=00_AfDa79g-ofC79Rm0cld3L6N2ZWXAJBgqSi_R7lZpTeCwug&oe=64CD9819",
        categorias: {
            nombre: "Infantil",
            id: "04"
        },
        price: "150.000 pesos"
    }
]


const containerProducts = document.querySelector("#container-product");

function loadProducts () {

    productsOfStore.forEach(product => {
        
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


};

loadProducts();

//Mostrar las categorias de la tienda