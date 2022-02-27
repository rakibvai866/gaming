const input_field = document.querySelector('.input_field');
const sub_btn = document.querySelector('.sub_btn');


const guess = document.querySelector('.guess');
const last_result = document.querySelector('.last_result');
const low_hi = document.querySelector('.low_hi');

let totalCount = 1;

let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);

sub_btn.onclick = function () {
    input_field_value = Number(input_field.value);

    if (totalCount === 1) {
        guess.textContent = 'গুতা মারার ফলাফল : ';
    }
    guess.textContent += input_field_value + ' ';

    if (input_field_value === randomNumber) {
        
        last_result.textContent = 'পাইরা লাইছোছ এহন ট্রিট দে 🥰';
        low_hi.textContent = ' ';
        again();

    } else if (totalCount === 10) {
        last_result.textContent = 'গেম শেষ কোনো ডিমডাওতো পারলি না';
        low_hi.textContent = ' ';    
        again();
    } else {
        last_result.textContent = 'তুমি ঘোড়ার আন্ডা চিন্তা করছো';

        if (input_field_value > randomNumber) {
            low_hi.textContent = 'বেশি চিন্তা কইরা লাইছোছ আরো কম চিন্তা কর';
        } else if (input_field_value < randomNumber) {
            low_hi.textContent = 'তোর চিন্তা শক্তি এতো কম কেন আরো বেশি চিন্তা কর';
        }else {
            low_hi.textContent = ' ';
        }
    }

    
    totalCount++
    input_field.value = ' ';
}


function again() {
    input_field.disabled = true;
    sub_btn.disabled = true;
    sub_btn.style.display = 'none';
    againBtn = document.createElement("button");
    againBtn.textContent = "abar guta de";
    document.getElementById('sodu').appendChild(againBtn);
    againBtn.addEventListener('click', restert);
}

function restert() {
    totalCount = 1

    guess.textContent = ' ';
    last_result.textContent = ' ';
    low_hi.textContent = ' ';
    input_field.disabled = false;
    sub_btn.disabled = false;
    sub_btn.style.display = 'inline-block';
    againBtn.parentNode.removeChild(againBtn);
    input_field.value = ' ';

    randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
}
