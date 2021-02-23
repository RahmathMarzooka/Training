const select = document.getElementById('select')
const display = document.getElementById('display')
select.addEventListener('change', function (e) {
    display.innerHTML = select.value;
})