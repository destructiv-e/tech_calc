function calculateWFT() {
    const thinner = parseFloat(document.getElementById('thinner').value);
    const dft = parseFloat(document.getElementById('dft').value);
    const volumeSolids = parseFloat(document.getElementById('volumeSolids').value);

    if (isNaN(thinner) || isNaN(dft) || isNaN(volumeSolids)) {
        document.getElementById('wft').value = '';
        return;
    }

    const wft = (dft * (100 + thinner)) / volumeSolids;
    document.getElementById('wft').value = wft.toFixed(2);
}

document.getElementById('thinner').addEventListener('input', calculateWFT);
document.getElementById('dft').addEventListener('input', calculateWFT);
document.getElementById('volumeSolids').addEventListener('input', calculateWFT);
