
const navSearch = document.querySelector('.nav-search');
const input = document.querySelector('.right-nav-input');
navSearch.addEventListener('click', () => {
    if (!input.classList.contains('right-nav-input-open')) {
        input.classList.add('right-nav-input-open');
        navSearch.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    else {
        input.classList.remove('right-nav-input-open');
        navSearch.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    }
});



const productButton = document.querySelector(".cart-buy-btn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
});

const navCart = document.querySelector("#cart-icon");
const cartContainer = document.querySelector(".cart-container");
const cartClose = document.querySelector("#cart-close-btn");

navCart.addEventListener("click",() => cartContainer.classList.add("active"));
cartClose.addEventListener("click",() => cartContainer.classList.remove("active"));


const cartBtns = document.querySelectorAll(".add-cart-btn");
cartBtns.forEach(button => {
    button.addEventListener("click", event =>{
        const productBox = event.target.closest(".product-box");
        
       
         addToCart(productBox)
        
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
        const price = priceElement.textContent.replace("Rs.","");
        const quantity = quantityElement.textContent;
        total += price * quantity;

    });
    totalPriceElement.textContent = `Rs.${total}`;

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
            const productBox = document.querySelectorAll('.product-box');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');

                    const category = button.dataset.category;

                    productBox.forEach(card => {
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
       
    
// Buy Now Page Start



const buyCartBtns = document.querySelectorAll(".add-cart-btn");
buyCartBtns.forEach(button => {
    button.addEventListener("click", event =>{
        const productBox = event.target.closest(".product-buy-page");
       

        buyaddToCart(productBox);
    });
});

const buyCartContent = document.querySelector(".cart-content");

const buyaddToCart = productBox => {
    const productImage = productBox.querySelector("img").src; 
    const productTitle = productBox.querySelector(".product-title-buy-page").textContent;
    const productPrice = productBox.querySelector(".price-buy-page").textContent;

    const cartItems = buyCartContent.querySelectorAll(".cart-product-title");
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

  
    buyCartContent.appendChild(cartBox);
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






document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Form submit hone se roko agar validation fail ho

        let name = document.querySelector("input[placeholder='Name']");
        let phone = document.querySelector("input[placeholder='Phone Number']");
        let address = document.querySelector("input[placeholder='Address']");
        let cardNumber = document.querySelector("input[placeholder='Card Number']");
        let expiryMonth = document.querySelector("input[placeholder='mm']");
        let expiryYear = document.querySelector("input[placeholder='yyy']");
        let cvv = document.querySelector("input[placeholder='cvv']");

        // Pehle sab error messages hatao
        document.querySelectorAll(".error-message").forEach(el => el.remove());

        let isValid = true;

        // Name Validation
        if (name.value.trim().length < 3) {
            showError(name, "Name must be at least 3 characters long.");
            isValid = false;
        }

        // Phone Number Validation (10 digits)
        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value.trim())) {
            showError(phone, "Enter a valid 10-digit phone number.");
            isValid = false;
        }

        // Address Validation
        if (address.value.trim() === "") {
            showError(address, "Address cannot be empty.");
            isValid = false;
        }

        // Card Number Validation (16 digits)
        let cardPattern = /^[0-9]{16}$/;
        if (!cardPattern.test(cardNumber.value.trim())) {
            showError(cardNumber, "Enter a valid 16-digit card number.");
            isValid = false;
        }

        // Expiry Month Validation (1-12)
        let monthPattern = /^(0[1-9]|1[0-2])$/;
        if (!monthPattern.test(expiryMonth.value.trim())) {
            showError(expiryMonth, "Enter a valid month (01-12).");
            isValid = false;
        }

        // Expiry Year Validation (4 digits, greater than current year)
        let yearPattern = /^[0-9]{4}$/;
        let currentYear = new Date().getFullYear();
        if (!yearPattern.test(expiryYear.value.trim()) || parseInt(expiryYear.value) < currentYear) {
            showError(expiryYear, "Enter a valid year (greater than or equal to current year).");
            isValid = false;
        }

        // CVV Validation (3 or 4 digits)
        let cvvPattern = /^[0-9]{3,4}$/;
        if (!cvvPattern.test(cvv.value.trim())) {
            showError(cvv, "Enter a valid 3 or 4-digit CVV.");
            isValid = false;
        }

        // Agar sab valid hai to form submit ho jaye
        if (isValid) {
            alert("Payment successful!");
            this.submit();
        }
    });

    // Function to show error message
    function showError(inputField, message) {
        let error = document.createElement("p");
        error.className = "error-message";
        error.style.color = "red";
        error.style.fontSize = "14px";
        error.style.marginTop = "5px";
        error.innerText = message;
        inputField.parentNode.appendChild(error);
    }
});
