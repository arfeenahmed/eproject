const productButton = document.querySelector(".cart-buy-btn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})

const navCart = document.querySelector("#cart-icon");
const cartContainer = document.querySelector(".cart-container");
const cartClose = document.querySelector("#cart-close-btn");

navCart.addEventListener("click",() => cartContainer.classList.add("active"));
cartClose.addEventListener("click",() => cartContainer.classList.remove("active"));


const cartBtns = document.querySelectorAll(".add-cart-btn");
cartBtns.forEach(button => {
    button.addEventListener("click", event =>{
        const productBox = event.target.closest(".product-box");
       

        addToCart(productBox);
    });
});

const cartContent = document.querySelector(".cart-content");

const addToCart = productBox => {
    const productImage = productBox.querySelector("img").src; 
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for(let item of cartItems){
        if (item.textContent === productTitle){
            alert("This item is already in the cart");
            return;
        }
    }

    
    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
    <img src="${productImage}" alt="" class="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title">${productTitle}</h2>
                    <span class="cart-price">${productPrice}</span>
                    <div class="cart-quantity">
                        <button id="decrement">-</button>
                        <span class="number">1</span>
                        <button id="increment">+</button>

                    </div>
                </div>
                <i class="fa-solid fa-trash"></i>
    `;

  
    cartContent.appendChild(cartBox);
    cartBox.querySelector(".fa-trash").addEventListener("click",() => {
        cartBox.remove();
        updateCartCount(-1);
        updateTotalPrice();
    });
    cartBox.querySelector(".cart-quantity").addEventListener("click",event => {
        const numberElement = cartBox.querySelector(".number");
        const decrementButton = cartBox.querySelector("#decrement");
        let quantity = numberElement.textContent;
        if (event.target.id === "decrement" && quantity > 1){
            quantity--;
            if (quantity === 1){
                decrementButton.style.color = "#999"
        }
     } else if(event.target.id === "increment"){
                quantity++;
                decrementButton.style.color = "#333";
     }
            numberElement.textContent = quantity;
            updateTotalPrice();
    });
    updateCartCount(1);
    updateTotalPrice();
};

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = priceElement.textContent.replace("$","");
        const quantity = quantityElement.textContent;
        total += price * quantity;

    });
    totalPriceElement.textContent = `$${total}`;

};

let cartItemCount = 0;
const updateCartCount = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;
    if(cartItemCount > 0){
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;

    }else{
        cartItemCountBadge.style.visibility ="hidden";
        cartItemCountBadge.textContent = "";
    }
}

