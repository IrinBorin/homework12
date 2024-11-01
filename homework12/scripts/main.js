document.getElementById('calculateBMI').addEventListener('click', function() {
    const weight = document.querySelector('.weight');
    const height = document.querySelector('.height');
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value) / 100;

    if (weightValue > 0 && heightValue > 0) {
        const bmi = (weightValue / (heightValue * heightValue)).toFixed(2);
        document.querySelector('.result').textContent = `Your BMI is: ${bmi}`;

        let display = '';
        if (bmi < 18.5) {
            display = ' (Underweight)';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            display = ' (Normal weight)';
        } else if (bmi >= 25 && bmi < 29.9) {
            display = ' (Overweight)';
        } else {
            display = ' (Obesity)';
        }
        document.querySelector('.result').textContent += display;

    } else {
        document.querySelector('.result').textContent = 'Please enter valid weight and height values.';
    }
});