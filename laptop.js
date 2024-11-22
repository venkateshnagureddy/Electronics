// JavaScript to update price dynamically on slider change
document.getElementById('priceRange').addEventListener('input', function() {
    document.getElementById('priceValue').textContent = this.value;
});




// Function to filter products
function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('.filter-category input:checked')).map(input => input.parentElement.textContent.trim());
    const selectedBrands = Array.from(document.querySelectorAll('.filter-brand input:checked')).map(input => input.parentElement.textContent.trim());
    const maxPrice = document.getElementById('priceRange').value;

    // Select all product items
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productBrand = product.getAttribute('data-brand');
        const productPrice = parseInt(product.getAttribute('data-price'));

        // Check if product matches selected filters
        const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);
        const isBrandMatch = selectedBrands.length === 0 || selectedBrands.includes(productBrand);
        const isPriceMatch = productPrice <= maxPrice;

        // Show or hide product based on match
        if (isCategoryMatch && isBrandMatch && isPriceMatch) {
            product.style.display = 'block'; // Show product
        } else {
            product.style.display = 'none'; // Hide product
        }
    });
}

// Event listeners for filters
document.querySelectorAll('.filter-category input, .filter-brand input').forEach(input => {
    input.addEventListener('change', filterProducts);
});

// Price range input event
document.getElementById('priceRange').addEventListener('input', function() {
    document.getElementById('priceValue').textContent = this.value; // Update displayed price
    filterProducts(); // Call filter function
});
