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
                <i class="fa-regular fa-trash-can"></i>
    `;

  
    cartContent.appendChild(cartBox);
    cartBox.querySelector(".fa-trash-can").addEventListener("click",() => {
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



//    New Arrival Page Start

document.addEventListener('DOMContentLoaded', function () {
            const filterButtons = document.querySelectorAll('.filter-button');
            const jewelryCards = document.querySelectorAll('.jewelry-card');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');

                    const category = button.dataset.category;

                    jewelryCards.forEach(card => {
                        if (category === 'all' || card.dataset.category === category) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });
         document.addEventListener('DOMContentLoaded', function () {
            const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
            const addCartButtons = document.querySelectorAll('.add-cart-btn');

            addToCartButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // Create popup
                    const popup = document.createElement('div');
                    popup.classList.add('cart-popup');
                    popup.textContent = 'Added to Cart!';

                    // Add to body
                    document.body.appendChild(popup);

                    // Remove popup after animation
                    setTimeout(() => {
                        document.body.removeChild(popup);
                    }, 2000);
                });
            });
            addCartButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // Create popup
                    const popup = document.createElement('div');
                    popup.classList.add('cart-popup');
                    popup.textContent = 'Added to Cart!';
    
                    // Add to body
                    document.body.appendChild(popup);
    
                    // Remove popup after animation
                    setTimeout(() => {
                        document.body.removeChild(popup);
                    }, 2000);
                });
            });
        });
       
    




//         const newArrivalnavCart = document.querySelector("#cart-icon");
// const newArrivalcartContainer = document.querySelector(".cart-container");
// const newArrivalcartClose = document.querySelector("#cart-close-btn");

// newArrivalnavCart.addEventListener("click",() => newArrivalcartContainer.classList.add("active"));
// newArrivalcartClose.addEventListener("click",() => newArrivalcartContainer.classList.remove("active"));


const newArrivalcartBtns = document.querySelectorAll(".add-to-cart-btn");
newArrivalcartBtns.forEach(button => {
    button.addEventListener("click", event =>{
        const productBox = event.target.closest(".jewelry-card");
       

        newArrivaladdToCart(productBox);
    });
});

const newArrivalcartContent = document.querySelector(".cart-content");

const newArrivaladdToCart = productBox => {
    const productImage = productBox.querySelector("img").src; 
    const productTitle = productBox.querySelector(".jewelry-name").textContent;
    const productPrice = productBox.querySelector(".jewelry-price").textContent;

    const cartItems = newArrivalcartContent.querySelectorAll(".cart-product-title");
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
                    <p class="cart-price">${productPrice}</p>
                    <div class="cart-quantity">
                        <button id="decrement">-</button>
                        <span class="number">1</span>
                        <button id="increment">+</button>

                    </div>
                </div>
                <i class="fa-regular fa-trash-can"></i>
    `;

  
    newArrivalcartContent.appendChild(cartBox);
    cartBox.querySelector(".fa-trash-can").addEventListener("click",() => {
        cartBox.remove();
        newArrivalupdateCartCount(-1);
        newArrivalupdateTotalPrice();
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
            newArrivalupdateTotalPrice();
    });
    newArrivalupdateCartCount(1);
    newArrivalupdateTotalPrice();
};

const newArrivalupdateTotalPrice = () => {
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

let newArrivalcartItemCount = 0;
const newArrivalupdateCartCount = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    newArrivalcartItemCount += change;
    if(newArrivalcartItemCount > 0){
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = newArrivalcartItemCount;

    }else{
        cartItemCountBadge.style.visibility ="hidden";
        cartItemCountBadge.textContent = "";
    }
}




////Special offer



// const offercartBtns = document.querySelectorAll(".add-cart-btn");
// offercartBtns.forEach(button => {
//     button.addEventListener("click", event =>{
//         const offerProductBox = event.target.closest(".offer-card");
       

//         offeraddToCart(offerProductBox);
//     });
// });

// const offercartContent = document.querySelector(".cart-content");

// const offeraddToCart = offerProductBox => {
//     const offerProductImage = offerProductBox.querySelector("img").src; 
//     const offerProductTitle = offerProductBox.querySelector(".offer-product-title").textContent;
//     const offerProductPrice = offerProductBox.querySelector(".sale-price").textContent;

//     const cartItems = offercartContent .querySelectorAll(".cart-product-title");
//     for(let item of cartItems){
//         if (item.textContent === offerProductTitle){
//             alert("This item is already in the cart");
//             return;
//         }
//     }

    
//     const cartBox = document.createElement("div");
//     cartBox.classList.add("cart-box");
//     cartBox.innerHTML = `
//     <img src="${offerProductImage}" alt="" class="cart-img">
//                 <div class="cart-detail">
//                     <h2 class="cart-product-title">${offerProductTitle}</h2>
//                     <span class="cart-price">${offerProductPrice}</span>
//                     <div class="cart-quantity">
//                         <button id="decrement">-</button>
//                         <span class="number">1</span>
//                         <button id="increment">+</button>

//                     </div>
//                 </div>
//                 <i class="fa-regular fa-trash-can"></i>
//     `;

  
//     offercartContent.appendChild(cartBox);
//     cartBox.querySelector(".fa-trash-can").addEventListener("click",() => {
//         cartBox.remove();
//        updateCartCount(-1);
//         updateTotalPrice();
//     });
//     cartBox.querySelector(".cart-quantity").addEventListener("click",event => {
//         const numberElement = cartBox.querySelector(".number");
//         const decrementButton = cartBox.querySelector("#decrement");
//         let quantity = numberElement.textContent;
//         if (event.target.id === "decrement" && quantity > 1){
//             quantity--;
//             if (quantity === 1){
//                 decrementButton.style.color = "#999"
//         }
//      } else if(event.target.id === "increment"){
//                 quantity++;
//                 decrementButton.style.color = "#333";
//      }
//             numberElement.textContent = quantity;
//             updateTotalPrice();
//     });
//     offerupdateCartCount(1);
//     offerupdateTotalPrice();
    
// };

// const offerupdateTotalPrice = () => {
//     const totalPriceElement = document.querySelector(".total-price");
//     const cartBoxes = offercartContent.querySelectorAll(".cart-box");
//     let total = 0;
//     cartBoxes.forEach(cartBox => {
//         const priceElement = cartBox.querySelector(".cart-price");
//         const quantityElement = cartBox.querySelector(".number");
//         const price = priceElement.textContent.replace("$","");
//         const quantity = quantityElement.textContent;
//         total += price * quantity;

//     });
//     totalPriceElement.textContent = `$${total}`;

// };

// let offercartItemCount = 0;
// const offerupdateCartCount = change => {
//     const cartItemCountBadge = document.querySelector(".cart-item-count");
//     offercartItemCount += change;
//     if(offercartItemCount > 0){
//         cartItemCountBadge.style.visibility = "visible";
//         cartItemCountBadge.textContent = offercartItemCount;

//     }else{
//         cartItemCountBadge.style.visibility ="hidden";
//         cartItemCountBadge.textContent = "";
//     }
// }