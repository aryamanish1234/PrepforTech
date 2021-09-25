/*let add = document.getElementById('plus');
let remove = document.getElementById('minus');


let int = document.getElementById('number');

let integer = 0;


add.addEventListener('click', function() {
    integer += 1;
    int.innerHTML = integer;
})

remove.addEventListener('click', function() {
    integer -= 1;
    int.innerHTML = integer;
})*/
let data = 0;
document.getElementById("root").innerText = data;

function minus() {
    data = data - 1;
    document.getElementById("root").innerText = data;
}

function plus() {
    data = data + 1;
    document.getElementById("root").innerText = data;
}

function reset() {
    data = 0;
    document.getElementById("root").innerText = data;

}