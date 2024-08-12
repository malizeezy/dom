document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.card');


    // Foreach is a array method, it is use to loop over an array.
    products.forEach(product => {
        // Counter increment
        const counterSpan = product.querySelector('.quantity'); // selecting each quantity buttons for each of the products that have been added to the array.
        const incrementButton = product.querySelector('.fa-plus-circle'); // it will increment the each products individually when the buttons are been clicked.

        // this function will work for the increamenting of the product.
        incrementButton.addEventListener('click', function() {
            let currentValue = parseInt(counterSpan.textContent, 10);
            currentValue++;
            counterSpan.textContent = currentValue; // will be displayed on the frontend.
        });

        // Counter decrement
        // Getting the decrement buttons
        const decrementButton = product.querySelector('.fa-minus-circle');

        // the function
        decrementButton.addEventListener('click', function() {
            let currentValue = parseInt(counterSpan.textContent, 10);
            currentValue--;
            if (currentValue < 0) {
                currentValue = 0;
            }
            counterSpan.textContent = currentValue;
        });

        // Delete button
        const deleteButton = product.querySelector('.fa-trash-alt');

        deleteButton.addEventListener('click', function() {
            // The closest() method in JavaScript is used to find the closest ancestor element of a specified element that matches a particular selector. It traverses the DOM upwards from the current element to find the nearest ancestor that matches the specified selector.
            const card = product.closest('.card-body');
            card.remove();
        });

        // Color icon toggle
        const colorIcon = product.querySelector('.fa-heart');

        // we select the element before add, the declarations on them.
        colorIcon.addEventListener('click', function() {
            if (colorIcon.style.color === 'black') {
                colorIcon.style.color = 'red';
            } else {
                colorIcon.style.color = 'black';
            }
        });
    });
});