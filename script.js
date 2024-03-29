// script.js

alert ("Welcome to Carzone!")


function callNow() {
    window.location.href = 'tel:+911234567890';
    console.log('enquire now was clicked');
}

d = new Date;
d1 = d.getFullYear();
//console.log(d1);

document.querySelector("#date").innerHTML = " &copy;  " + d1 +  " Carzone";