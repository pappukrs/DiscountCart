document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const inputs = document.querySelectorAll('input[name="unit"]');
    
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
                sizeLabel.textContent = `Size #${i}`;
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
        });
    });
});
