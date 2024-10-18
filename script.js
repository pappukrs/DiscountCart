document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const inputs = document.querySelectorAll('input[name="unit"]');
    
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

                // Append the row to the box content
                boxContent.appendChild(row);
            }
        });
    });
});
