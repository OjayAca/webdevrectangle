document.getElementById('btn').addEventListener('click', function () {
    let x = parseInt(document.getElementById('first').value);
    let y = parseInt(document.getElementById('second').value);
    let operation = document.getElementById('operation').value;
    
    var result;
    switch (operation) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
    }
    document.getElementById('value').innerHTML = `<h3>~${result}~</h3>`;

    document.getElementById('hahays').style.display = 'block';
})
document.getElementById('close').addEventListener('click', function(){
    document.getElementById('hahays').style.display = 'none';
})
document.getElementById('backdrop').addEventListener('click', function(){
    document.getElementById('hahays').style.display = 'none';
})





