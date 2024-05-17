const amount = document.querySelector('form input');
const dropdowns = document.querySelectorAll('.select-div select');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const btn = document.querySelector('.btn button');

for (let select of dropdowns) {
    for (code in countryList) {
        const newOption = document.createElement('option');
        newOption.innerText = code;
        newOption.value = code;
        if (select.name === 'from' && code === 'USD') {
            newOption.selected = 'selected'
        } else if (select.name === 'to' && code === 'PKR') {
            newOption.selected = 'selected'
        }
        select.append(newOption)
    }

    select.addEventListener('change', (evt) => {
        updateFlag(evt.target)
    })
}
const updateRate = () =>{
    const amtValue = amount.value;
    if (amtValue === '' || amtValue < 1) {
        amount.value = 1;
        // amtValue = 1;
    }
    const URL = `https://api.apilayer.com/exchangerates_data/convert?to=${toCurr.value.toLowerCase()}&from=${fromCurr.value.toLowerCase()}&amount=${amtValue}`;
    fetch(URL, optionRequests)
        .then(response => response.json())
        .then(result => {
            let quote = result.result;
            let msg = document.querySelector('.msg');
            msg.innerText = `${amtValue} ${fromCurr.value} = ${quote} ${toCurr.value}`
        })
        .catch(error => console.log('error', error));

}
const updateFlag = (element) => {
    let code = element.value;
    let img = `https://flagsapi.com/${countryList[code]}/shiny/64.png`;
    let imgChange = element.parentElement.querySelector('img');
    imgChange.src = img;
}
const myHeaders = new Headers();
myHeaders.append('apikey', 'iGmaXZcVIwg0mTKU08TOqvAwmKEcBhgc')

const optionRequests = {
    method : 'GET',
    redirect : 'follow',
    headers : myHeaders
}

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    updateRate();

})
window.addEventListener('load', ()=>{
    updateRate();
})

