document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const inputs = document.querySelectorAll('input[name="unit"]');
    const totalPriceElement = document.querySelector('.total-price');
    const box2 = document.getElementById('box2');
    const addToCartButton = document.querySelector('.add-to-cart');

    const badge = document.createElement('span');
    badge.classList.add('badge');
    badge.textContent = 'Most Popular';

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

    function updateBadge() {
        if (document.getElementById('unit2').checked) {
            if (!box2.contains(badge)) {
                box2.appendChild(badge);
            }
        } else {
            if (box2.contains(badge)) {
                box2.removeChild(badge);
            }
        }
    }

    inputs.forEach(input => {
        input.addEventListener('change', function () {
            boxes.forEach(box => box.classList.remove('active'));

            const selectedBox = input.closest('.box');
            selectedBox.classList.add('active');

            const boxContent = selectedBox.querySelector('.box-content');
            boxContent.innerHTML = '';

            let numberOfUnits;
            if (input.id === 'unit1') {
                numberOfUnits = 1;
            } else if (input.id === 'unit2') {
                numberOfUnits = 2;
            } else if (input.id === 'unit3') {
                numberOfUnits = 3;
            }

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

                boxContent.appendChild(row);
            }

            updateTotalPrice(input.id);
            updateBadge();
        });
    });

    addToCartButton.addEventListener('click', function () {
        const selectedInput = document.querySelector('input[name="unit"]:checked');
        if (selectedInput) {
            alert('Beautiful! Items added to cart.');
        } else {
            alert('Please select an item before adding to cart.');
        }
    });

    updateBadge();
});
