// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 50, image: "https://media.istockphoto.com/id/175412203/photo/wristwatch.jpg?s=2048x2048&w=is&k=20&c=DBZiWNUmlvyZVegHj85Nvgw8CQvNY8Oi561joj_M1ho=" },
    { id: 2, name: "Product 2", price: 100, image: "https://media.istockphoto.com/id/118803311/photo/mens-wristwatch.jpg?s=2048x2048&w=is&k=20&c=t3yWRgqHuS0ZcXa5w35tWFme-RP46NDhnwzI_wb2Xnc=" },
    { id: 3, name: "Product 3", price: 150, image: "https://media.istockphoto.com/id/499281324/photo/womens-gold-watch-on-white-background.jpg?s=2048x2048&w=is&k=20&c=rgddXLtGL7aJtBst8gqOOEmONZxhY7adahYPzw4ksgo=" },
    { id: 4, name: "Product 4", price: 200, image: "https://media.istockphoto.com/id/453525911/photo/watch.jpg?s=2048x2048&w=is&k=20&c=e6SapdW9-gZIu5yhxWOKVZy53At5iMdHOLok98nSckA=" },
  ];
  
  // Cart and filters
  let cart = [];
  let priceFilter = 100;
  
  // Display products based on filter
  function displayProducts() {
    const productGallery = document.getElementById("product-gallery");
    productGallery.innerHTML = "";
    products
      .filter(product => product.price <= priceFilter)
      .forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGallery.appendChild(productCard);
      });
  }
  
  // Update price filter
  function updateFilter() {
    const priceRange = document.getElementById("price-range");
    priceFilter = parseInt(priceRange.value, 10);
    document.getElementById("price-range-value").textContent = priceFilter;
    displayProducts();
  }
  
  // Add product to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  // Update cart count and total price
  function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;
    let totalPrice = 0;
    cart.forEach(item => totalPrice += item.price);
    document.getElementById("total-price").textContent = totalPrice;
  
    // Update cart items list
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${item.name} - $${item.price}`;
      cartItem.innerHTML += `<button onclick="removeFromCart(${index})">Remove</button>`;
      cartItems.appendChild(cartItem);
    });
  }
  
  // Remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  // Show cart modal
  function showCart() {
    document.getElementById("cart-modal").classList.add("active");
  }
  
  // Close cart modal
  function closeCart() {
    document.getElementById("cart-modal").classList.remove("active");
  }
  
  // Mock checkout process
  function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
    closeCart();
  }
  
  // Initialize
  displayProducts();
  