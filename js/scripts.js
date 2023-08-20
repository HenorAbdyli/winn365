// Document Ready
$(document).ready(function () {


});


$(window).on('load', function () {
    $('#loader').hide();
})

$(window).on('load', function () {
    $('#loader1').hide();
})

$(window).on('load', function () {
    $('#loader2').hide();
})

$(window).on('load', function () {
    $('#loader3').hide();
})

var btn_lorja = document.getElementById("btn_lojra");
var btn_sporte = document.getElementById("btn_sporte");
var diva = document.getElementById("diva");
var divb = document.getElementById("divb");

btn_sporte.addEventListener('click', () => {
    diva.style.display = 'block';
    divb.style.display = 'none';


});
btn_lorja.addEventListener('click', () => {
    diva.style.display = 'none';
    divb.style.display = 'block';


});


