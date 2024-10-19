document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const inputs = document.querySelectorAll('input[name="unit"]');
    const totalPriceElement = document.querySelector('.total-price');
    const box2 = document.getElementById('box2');
    const addToCartButton = document.querySelector('.add-to-cart');

    // Create the badge element
    const badge = document.createElement('span');
    badge.classList.add('badge');
    badge.textContent = 'Most Popular';

    // Function to update the total price
    function updateTotalPrice(selectedUnit) {
        let totalPrice;
        if (selectedUnit === 'unit1') {
            totalPrice = "$10.00 USD";
        } else if (selectedUnit === 'unit2') {
            totalPrice = "$18.00 USD";
        } else if (selectedUnit === 'unit3') {
            totalPrice = "$24.00 USD";
        }
        totalPriceElement.textContent = `Total: ${totalPrice}`;
    }

    // Function to update badge visibility
    function updateBadge() {
        if (document.getElementById('unit2').checked) {
            // Add badge to Box 2 if it's selected
            if (!box2.contains(badge)) {
                box2.appendChild(badge);
            }
        } else {
            // Remove badge if Box 2 is not selected
            if (box2.contains(badge)) {
                box2.removeChild(badge);
            }
        }
    }

    inputs.forEach(input => {
        input.addEventListener('change', function () {
            // Remove active class from all boxes
            boxes.forEach(box => box.classList.remove('active'));

            // Add active class to the selected box
            const selectedBox = input.closest('.box');
            selectedBox.classList.add('active');

            // Get the box content element
            const boxContent = selectedBox.querySelector('.box-content');

            // Clear previous content
            boxContent.innerHTML = '';

            // Determine the number of units based on the selected box (1, 2, or 3)
            let numberOfUnits;
            if (input.id === 'unit1') {
                numberOfUnits = 1;
            } else if (input.id === 'unit2') {
                numberOfUnits = 2;
            } else if (input.id === 'unit3') {
                numberOfUnits = 3;
            }

            // Dynamically create rows for each unit
            for (let i = 1; i <= numberOfUnits; i++) {
                const row = document.createElement('div');
                row.classList.add('options');

                const sizeLabel = document.createElement('label');
                sizeLabel.textContent = `#${i}`;
                const sizeSelect = document.createElement('select');
                const sizes = ['S', 'M', 'L'];
                sizes.forEach(size => {
                    const option = document.createElement('option');
                    option.value = size;
                    option.textContent = size;
                    sizeSelect.appendChild(option);
                });

                const colorLabel = document.createElement('label');
                colorLabel.textContent = `Color #${i}`;
                const colorSelect = document.createElement('select');
                const colors = ['Black', 'White'];
                colors.forEach(color => {
                    const option = document.createElement('option');
                    option.value = color;
                    option.textContent = color;
                    colorSelect.appendChild(option);
                });

                row.appendChild(sizeLabel);
                row.appendChild(sizeSelect);
                row.appendChild(colorLabel);
                row.appendChild(colorSelect);

                // Append the row to the box content
                boxContent.appendChild(row);
            }

            // Update total price based on the selected unit
            updateTotalPrice(input.id);

            // Update the badge visibility based on the selected unit
            updateBadge();
        });
    });

    // Show alert when the 'Add to Cart' button is clicked
    addToCartButton.addEventListener('click', function () {
        const selectedInput = document.querySelector('input[name="unit"]:checked');
        if (selectedInput) {
            alert('Beautiful! Items added to cart.');
        } else {
            alert('Please select an item before adding to cart.');
        }
    });

    // Initial update
    updateBadge();
});
