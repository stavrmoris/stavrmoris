const count = document.getElementById("countValue");
const from = document.getElementById('fromCurrency');
const to = document.getElementById('toCurrency');
const result = document.getElementById("result");

function convertCurrency() {
    const apiKey = '52856396611f9b1faf55d4ae';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from.value}/${to.value}/${count.value}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                const convertedAmount = data.conversion_result;
                result.innerText = `${convertedAmount.toFixed(2)}`;
            } else {
                result.innerText = 'Error converting currency. Please try again.';
            }
        })
        .catch(error => {
            if (typeof count.value === 'number') {
                console.error('Error:', error);
                result.innerText = 'Failed to fetch conversion rate. Please try again later.';
            } else {
                result.innerText = '0.00';
            }
        });
}

count.addEventListener("input", convertCurrency);
from.addEventListener("change", convertCurrency);
to.addEventListener("change", convertCurrency);