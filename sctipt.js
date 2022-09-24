let tbody = document.querySelector('tbody');
let name = document.getElementById('name');
let price = document.getElementById('price');
let amount = document.getElementById('amount');
let i = 1

function summa() {
    let hisob = document.getElementById('hisob')
    let sum = document.querySelectorAll('.sum');
    let k = 0;
    for (let i = 0; i < sum.length; i++) {
        k += +sum[i].innerHTML;
    }
    hisob.innerHTML = k;
}

function del() {
    let del = document.querySelectorAll('.del');
    let tr = document.querySelectorAll('.tr');

    for (let j = 0; j < del.length; j++) {
        del[j].addEventListener('click', function () {
            tr[j].remove();
            summa();
        });
    };
}


function res() {
    if (name.value == '' || price.value == '' || amount.value == '') {
        alert('Iltimos mahsulotni kiriting !')
    } else {
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let tr = document.createElement('tr');

        td5.setAttribute('class', 'sum');
        td6.setAttribute('class', 'del');
        tr.setAttribute('class', 'tr');


        td1.innerHTML = i;
        td2.innerHTML = name.value;
        td3.innerHTML = price.value;
        td4.innerHTML = amount.value;
        td5.innerHTML = price.value * amount.value;
        td6.innerHTML = 'delete';

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.appendChild(tr);
        i++;
        del();
        summa();
        name.value = '';
        price.value = '';
        amount.value = '';
    }
};