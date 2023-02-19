(function() {
  const productsContainer = document.querySelector("#grid");
  const cartContainer = document.querySelector("#shopping-cart");
  const cartContent = document.querySelector("#cart-content");
  const toggleCartBtn = document.querySelector("#toggle-cart-btn");
  const clearCartBtn = document.querySelector("#clear-cart");
  const checkoutBtn = document.querySelector("#checkout-btn");
  const totalPriceContainer = document.querySelector("#total-price");

  function toggleCart() {
    cartContainer.classList.toggle("open");
  }
  function getLocalStorageContent() {
    const localStorageContent = JSON.parse(localStorage.getItem("products")) || [];
    return localStorageContent;
  }
  function setlocalStorageContent(localStorageContent) {
    localStorage.setItem("products", JSON.stringify(localStorageContent));
  }
  function calculateTotal(prices) {
    return prices.reduce(function(prev, next) {
      return prev + next;
    }, 0);
  }
  function getCartItemPrices() {
    const prices = [];
    let nums = cartContent.querySelectorAll("tr td:nth-child(3)");
    if (nums.length > 0) {
      for (let cell = 0; cell < nums.length; cell++) {
        let num = nums[cell].innerText;
        num = num.replace(/[^\d]/g, "");
        num = parseFloat(num);
        prices.push(num);
      }
      return prices;
    } else {
      return;
    }
  }
  function displayCartTotal() {
    const prices = getCartItemPrices();
    let total = 0;
    if (prices) {
      total = calculateTotal(prices);
      totalPriceContainer.innerHTML = `<span class="total">Total: $${total.toFixed(
        2
      )}</span>`;
    } else {
      totalPriceContainer.innerHTML = '<span class="total">Total: $0</span>';
    }
  }
  function showProducts() {
    const localStorageContent = getLocalStorageContent();
    let productMargin = "";
    if (localStorageContent !== null) {
      for (let product of localStorageContent) {
        productMargin += `
          <tr>
          <td><img class="cart-image" src="${product.image}" alt="${
          product.name
        }" width="120"></td>
          <td>
            ${product.name}
          </td>
          <td>${product.price}</td>
          <td><a href="#" data-id="${product.id}" class="remove">X</a></td>
          </tr>
        `;
      }
    } else {
      productMargin = "Su carrito esta vacio";
    }
    cartContent.querySelector("tbody").innerHTML = productMargin;
  }
  function saveProduct(clickedBtn) {

    const productId = clickedBtn.getAttribute("data-id");
    const card = clickedBtn.parentElement.parentElement;
    const cardInfo = clickedBtn.parentElement;
    const prodImage = card.querySelector("img").src;
    const prodName = cardInfo.querySelector("h4").textContent;
    const prodPrice = cardInfo.querySelector(".card__price").textContent;

    let isProductInCart = false;
    const localStorageContent = getLocalStorageContent();


    localStorageContent.forEach(function(product) {
      if (product.id === productId) {
        Swal.fire('Este juego ya esta en tu carrito')
        isProductInCart = true;
      }
    });
    if (!isProductInCart) {
      localStorageContent.push({
        id: productId,
        image: prodImage,
        name: prodName,
        price: prodPrice
      });
      setlocalStorageContent(localStorageContent);
      showProducts();
    }
  }
  function removeProduct(productId) {
    const localStorageContent = getLocalStorageContent();
    let productIndex;
    localStorageContent.forEach(function(product, i) {
      if (product.id === productId) {
        productIndex = i;
      }
    });
    localStorageContent.splice(productIndex, 1);
    setlocalStorageContent(localStorageContent);
    showProducts();
  }
  function clearCart() {
    const localStorageContent = getLocalStorageContent();
    localStorageContent.splice(0, localStorageContent.length);
    setlocalStorageContent(localStorageContent);
    showProducts();
    Swal.fire('Su carrito fue vaciado')
  }
  function checkout() {
    const cartProducts = cartContent.querySelector("tbody").innerHTML;
    if (cartProducts !== "" && confirm("Confirmar su compra")) {
      clearCart();
    } else {
      return;
    }
    Swal.fire('Su compra fue exitosa')
  }
  document.addEventListener("DOMContentLoaded", function(e) {
    showProducts();
    displayCartTotal();
  });
  toggleCartBtn.addEventListener("click", function(e) {
    e.preventDefault();
    toggleCart();
  });
  productsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart")) {
      e.preventDefault();
      const clickedBtn = e.target;
      saveProduct(clickedBtn);
    }
  });
  productsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart")) {
      displayCartTotal();
    }
  });
  cartContent.querySelector("tbody").addEventListener("click", function(e) {
    e.preventDefault();
    const clickedBtn = e.target;
    if (e.target.classList.contains("remove")) {
      const productId = clickedBtn.getAttribute("data-id");
      removeProduct(productId);
      displayCartTotal();
    }
  });
  clearCartBtn.addEventListener("click", function(e) {
    e.preventDefault();
    clearCart();
  });
  clearCartBtn.addEventListener("click", displayCartTotal);
  checkoutBtn.addEventListener("click", function(e) {
    e.preventDefault();
    checkout();
  });
  checkoutBtn.addEventListener("click", displayCartTotal);
})();