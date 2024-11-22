// JavaScript to update price dynamically on slider change
document.getElementById('priceRange').addEventListener('input', function() {
    document.getElementById('priceValue').textContent = this.value;
});
