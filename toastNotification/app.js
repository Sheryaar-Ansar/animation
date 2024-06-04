const toast = document.querySelector('.toastNotification');

let success = '<ion-icon name="checkmark-circle-outline"></ion-icon> Successfully Submitted.';
let error = '<ion-icon name="close-circle-outline"></ion-icon> Error Submitting File!';
let invalid = '<ion-icon name="alert-circle-outline"></ion-icon> Invalid Message, Please Try Again.';

const startNotify = (msg) =>{
    let toastDiv = document.createElement('div');
    toastDiv.innerHTML = msg;
    toastDiv.classList.add('toastDiv');
    toast.appendChild(toastDiv);

    if(msg.includes('Error')){
        toastDiv.classList.add('error')
    }
    if(msg.includes('Invalid')){
        toastDiv.classList.add('invalid')
    }
    setTimeout(()=>{
        toastDiv.remove()
    },6000)
}