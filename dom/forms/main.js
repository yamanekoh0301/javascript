const formTest = document.forms.form_test1;
console.log(formTest);

const formTestYourName = document.forms.form_test1.your_name;
console.log(formTestYourName);

const formTestYourNameValue = document.forms.form_test1.your_name.value;
console.log(formTestYourNameValue);

formTestYourName.addEventListener('input', ()=>{
    let yourNameValue = document.getElementById("your_name_value");
    yourNameValue.textContent = formTestYourName.value;
})