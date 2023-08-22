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

var btn_live_futboll = document.getElementById("btn_live_futboll");
var btn_live_virtual = document.getElementById("btn_live_virtual");
var diva_live = document.getElementById("diva_live");
var divb_live = document.getElementById("divb_live");

btn_live_futboll.addEventListener('click', () => {
    diva_live.style.display = 'block';
    divb_live.style.display = 'none';


});
btn_live_virtual.addEventListener('click', () => {
    diva_live.style.display = 'none';
    divb_live.style.display = 'block';


});




