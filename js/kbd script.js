let currentInputField = document.getElementById('thinner');

function inputDigit(digit) {
    if (digit === '.' && currentInputField.value.includes('.')) {
        return; // Prevent multiple dots
    }
    currentInputField.value += digit;
    currentInputField.focus();
    calculateWFT();
}

function tabNext() {
    const inputs = [document.getElementById('thinner'), document.getElementById('dft'), document.getElementById('volumeSolids')];
    const currentIndex = inputs.indexOf(currentInputField);
    if (currentIndex < inputs.length - 1) {
        currentInputField = inputs[currentIndex + 1];
        currentInputField.focus();
    }
}