let price = []
let initiation = []
let entry = []
let final = []
let totalProduct = []
let sales = []
let amount = []
let total = 0

/*Boton de agregar fila */
const agregarproducto = document.querySelector("#añadir");
const productos = document.querySelector("#tbodyipv");
let tablecounter = 1;

agregarproducto.addEventListener("click", () => {
    tablecounter ++;
    let tablerow = document.createElement("tr");
    tablerow.classList.add("row" + tablecounter);
    tablerow.innerHTML = "<td><input></td><td><input class='price' value='0' type='number' ></td><td><input class='initiation' value='0' type='number' ></td><td><input class='entry' value='0' type='number' ></td><td class='tprow'></td><td><input class='final' value='0' type='number' ></td><td class='salesrow'></td><td class='amountrow'></td>";
    productos.appendChild(tablerow);  
})

/*Boton de eliminar fila */
const eliminarProducto = document.querySelector("#eliminar");

eliminarProducto.addEventListener("click", () => {
    let classrow = document.querySelector(".row" + tablecounter)
    classrow.remove()
    tablecounter --
})

/*Boton de calcular*/
const calcular = document.querySelector("#calcular")

calcular.addEventListener("click", () => {
    const firth = document.querySelectorAll(".price");
    for (let value of firth) {
        price.push(value.value);
    }
    const second = document.querySelectorAll(".initiation");
    for (value of second) {
        initiation.push(value.value);
    }
    const third = document.querySelectorAll(".entry");
    for (value of third) {
        entry.push(value.value);
    }
    const fourth = document.querySelectorAll(".final");
    for (value of fourth) {
        final.push(value.value);
    }
    console.log(price,initiation,entry,final)

    for (i = 0; i < initiation.length; i++) {
        let result = Number(initiation[i]) + Number(entry[i]);
        totalProduct.push(result);
    }
    for (i = 0; i < final.length; i++) {
        let result = Number(totalProduct[i]) - Number(final[i]);
        sales.push(result);
    }
    for (i = 0; i < price.length; i++) {
        let result = Number(price[i]) * Number(sales[i]);
        amount.push(result);
    }
    console.log(totalProduct, sales, amount)

    for (i = 0; i < amount.length; i++) {
        total += amount[i]
    }
    console.log(total)

    for (i = 1; i <= tablecounter; i++) {
        let row = ".row";
        let tbrow = document.querySelector(row + i);
        let resultrow = tbrow.querySelector(".tprow");
        resultrow.textContent = totalProduct[i-1]
    }
    for (i = 1; i <= tablecounter; i++) {
        let row = ".row";
        let tbrow = document.querySelector(row + i);
        let resultrow = tbrow.querySelector(".salesrow");
        resultrow.textContent = sales[i-1]
    }
    for (i = 1; i <= tablecounter; i++) {
        let row = ".row";
        let tbrow = document.querySelector(row + i);
        let resultrow = tbrow.querySelector(".amountrow");
        resultrow.textContent = amount[i-1]
    }
    
    let totalAmount = document.querySelector(".totalAmount");
    totalAmount.textContent = total;

    price = []
    initiation = []
    entry = []
    final = []
    totalProduct = []
    sales = []
    amount = []
    total = 0
})

cash = [1000, 500, 200, 100, 50, 20, 10, 5]
money = []
valor = []

const calcularcash = document.querySelector("#calcularcash");

calcularcash.addEventListener("click", () => {
    const cup = document.querySelectorAll(".money")

    for (enter of cup) {
        money.push(enter.value);
    }
    console.log(money)
    for (i = 0; i < 8; i++) {
        let result = Number(cash[i]) * Number(money[i]);
        valor.push(result);
    }

    for (i = 0; i < valor.length; i++) {
        total += valor[i];
    }

    for (i = 0; i < 8; i++) {
        let row2 = ".money"
        let rowmoney = document.querySelector(row2 + i);
        rowmoney.textContent = valor[i];
    }

    let valortotal = document.querySelector(".valortotal");
    valortotal.textContent = total;

    money = [];
    valor = [];
})