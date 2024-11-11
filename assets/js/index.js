products = [
    {
        "id": 1,
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": "6.50",
        "quantity": 0,
        "img": "assets/img/item-number-1.png"
    },
    {
        "id": 2,
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": "7.00",
        "quantity": 0,
        "img": "assets/img/item-number-2.png"
    },
    {
        "id": 3,
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": "8.00",
        "quantity": 0,
        "img": "assets/img/item-number-3.png"
    },
    {
        "id": 4,
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": "5.50",
        "quantity": 0,
        "img": "assets/img/item-number-4.png"
    },
    {
        "id": 5,
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": "4.00",
        "quantity": 0,
        "img": "assets/img/item-number-5.png"
    },
    {
        "id": 6,
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": "5.00",
        "quantity": 0,
        "img": "assets/img/item-number-6.png"
    },
    {
        "id": 7,
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": "5.50",
        "quantity": 0,
        "img": "assets/img/item-number-7.png"
    },
    {
        "id": 8,
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": "5.50",
        "quantity": 0,
        "img": "assets/img/item-number-8.png"
    },
    {
        "id": 9,
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": "6.50",
        "quantity": 0,
        "img": "assets/img/item-number-9.png"
    }
];

let orders = document.querySelector(".orders")

const catalog = document.querySelector(".catalog");
for (let i of products) {

    catalog.innerHTML += `<li > 
        <div class="list-item">

            <img src="${i.img}" alt="">
            <button class="add-to-card">
                <img class="deleteBtn" src="assets/img/remove-icon-img.svg" >
                <span class="eklenen-miktar"> 0 </span>
                <img class="addBtn" src="assets/img/add-icon-img.svg" >
            </button>
            <h5>${i.category}</h5> <br>
            <h3>${i.name}</h3> <br>
            <p>$${i.price}</p> <br>

        </div>
        </li>`
}


