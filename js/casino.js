$(window).on('load', function () {
    $('#loader3').hide();
})


var btn_novomatic = document.getElementById("btn_novomatic");
var btn_mercur = document.getElementById("btn_mercur");
var btn_apex = document.getElementById("btn_apex");

var div_novomatic = document.getElementById("div_novomatic");
var div_mercur = document.getElementById("div_mercur");
var div_apex = document.getElementById("div_apex");

btn_novomatic.addEventListener('click', () => {
    div_novomatic.style.display = 'block';
    div_mercur.style.display = 'none';
    div_apex.style.display = 'none'


});
btn_mercur.addEventListener('click', () => {
    div_mercur.style.display = 'block';
    div_novomatic.style.display = 'none';
    div_apex.style.display = 'none'


});
btn_apex.addEventListener('click', () => {
    div_apex.style.display = 'block';
    div_novomatic.style.display = 'none';
    div_mercur.style.display = 'none';
    


});