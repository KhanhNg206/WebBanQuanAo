
document.addEventListener('DOMContentLoaded', function() {
    // Lấy giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items-container');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('btn-checkout');

    // Hiển thị giỏ hàng
    function renderCart() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <p class="empty-cart-message">Giỏ hàng của bạn đang trống</p>
                    <button class="btn-continue" onclick="window.location.href='index.html'">TIẾP TỤC MUA SẮM</button>
                </div>
            `;
            document.getElementById('cart-summary').style.display = 'none';
            return;
        }

        document.getElementById('cart-summary').style.display = 'block';
        
        let html = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            html += `
                <div class="cart-item" data-index="${index}">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-size">Size: ${item.size}</p>
                        <p class="cart-item-price">${item.price.toLocaleString()}đ</p>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" onclick="updateQuantity(${index}, -1)">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantityInput(${index}, this.value)">
                            <button class="quantity-btn plus" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                        <span class="remove-item" onclick="removeItem(${index})"><i class="fas fa-trash"></i> Xóa</span>
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;
        subtotalElement.textContent = `${subtotal.toLocaleString()}đ`;
        totalElement.textContent = `${subtotal.toLocaleString()}đ`;
    }

    // Cập nhật số lượng sản phẩm
    window.updateQuantity = function(index, change) {
        const newQuantity = cart[index].quantity + change;
        
        if (newQuantity < 1) {
            removeItem(index);
            return;
        }
        
        cart[index].quantity = newQuantity;
        saveCart();
        renderCart();
    }

    // Cập nhật số lượng từ input
    window.updateQuantityInput = function(index, value) {
        const newQuantity = parseInt(value) || 1;
        
        if (newQuantity < 1) {
            removeItem(index);
            return;
        }
        cart[index].quantity = newQuantity;
        saveCart();
        renderCart();
    }

    // Xóa sản phẩm khỏi giỏ hàng
    window.removeItem = function(index) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }

    // Lưu giỏ hàng vào localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Xử lý thanh toán
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Giỏ hàng của bạn đang trống!');
            return;
        }
        
        // Ở đây bạn có thể chuyển hướng đến trang thanh toán
        alert('Chức năng thanh toán sẽ được thực hiện ở đây!');
        // window.location.href = 'checkout.html';
    });

    // Hiển thị giỏ hàng khi trang được tải
    renderCart();
});
