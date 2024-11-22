// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Handle tab switching in the product description section
    const tabs = document.querySelectorAll('.tab-list li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs and content
            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab
            tab.classList.add('active');

            // Show the corresponding tab content
            const tabTarget = tab.getAttribute('data-tab');
            document.getElementById(tabTarget).classList.add('active');
        });
    });

    // Handle Add to Cart button functionality
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', function () {
        const quantityInput = document.getElementById('quantity');
        const quantity = parseInt(quantityInput.value);

        if (quantity > 0) {
            alert(`${quantity} item(s) have been added to your cart.`);
        } else {
            alert('Please select a valid quantity.');
        }
    });

    // Limit quantity input to valid numbers only
    const quantityInput = document.getElementById('quantity');
    quantityInput.addEventListener('input', function () {
        const max = parseInt(this.getAttribute('max'));
        const min = parseInt(this.getAttribute('min'));

        // Ensure that the quantity is within the min-max range
        if (this.value > max) {
            this.value = max;
        } else if (this.value < min || isNaN(this.value)) {
            this.value = min;
        }
    });

});
