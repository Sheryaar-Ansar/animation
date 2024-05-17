

const baseUrl = 'https://api.apilayer.com/exchangerates_data/convert?';

const dropdowns = document.querySelectorAll('.select-div select');
const amount = document.querySelector('form input');
const btn = document.querySelector('.btn button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');

const myHeaders = new Headers();
myHeaders.append("apikey", "iGmaXZcVIwg0mTKU08TOqvAwmKEcBhgc");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === 'from' && currCode === 'USD') {
            newOption.selected = 'selected'
        }
        else if (select.name === 'to' && currCode === 'PKR') {
            newOption.selected = 'selected'
        }
        select.append(newOption)
    }
    select.addEventListener('change', (evt) => {
        updateFlag(evt.target)
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let imgUrl = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector('img')
    img.src = imgUrl;
}

btn.addEventListener('click', async (evt) => {
    evt.preventDefault();
    let amtValue = amount.value;
    if (amtValue === '' || amtValue < 1) {
        amount.value = 1;
        amtValue = 1;
    }

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurr.value.toLowerCase()}&from=${fromCurr.value.toLowerCase()}&amount=${amtValue}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            let quote = result.result;
            const msg = document.querySelector('.msg');
            msg.innerText = `${amtValue} ${fromCurr.value} = ${quote} ${toCurr.value}`

        })
        .catch(error => console.log('error', error));

})
