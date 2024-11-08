var btn = document.querySelector('button');
var table = document.querySelector('table');
var span_ano = document.querySelector('#ano');
var date = new Date();
var year = date.getFullYear();


span_ano.innerHTML = year;
table.style.display = 'none';

btn.addEventListener('click', function (e) {
    var alerth3 = document.querySelector('#alert h3');
    var input = document.querySelector('input');
    
    e.preventDefault();
    var cep = input.value;
    

    if (cep > 0) {

    } else {

        console.log(cep);


        if (cep.includes('-')) {

        } else {
            alerth3.textContent = 'Por favor digite um cep válido';
        exit(0);
        }
    }

    cep = cep.replace('-', '');
    
    cep = parseInt(cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(Response => Response.json())
    .then(data => {
    var tr = document.querySelector('#resultado');
    var alerth3 = document.querySelector('#alert h3');

    tr.setHTMLUnsafe(' ');

    tr.innerHTML += '<td>' + data.cep + '</td>';
    tr.innerHTML += '<td>' + data.logradouro + '</td>';
    tr.innerHTML += '<td>' + data.bairro + '</td>';
    tr.innerHTML += '<td>' + data.localidade + '</td>';
    tr.innerHTML += '<td>' + data.uf + '</td>';
    tr.innerHTML += '<td>' + data.estado + '</td>';
    tr.innerHTML += '<td>' + data.regiao + '</td>';
    tr.innerHTML += '<td>' + data.ddd + '</td>';
    
    alerth3.innerHTML = '<h3>cep encontrado com sucesso!</h3>'
    table.setAttribute('style','display: hide;');
    })
    .catch(error => {
        console.error('error data: ', error);
        var tr = document.querySelector('#resultado');
        tr.setHTMLUnsafe(' ');
        var alerth3 = document.querySelector('#alert h3');
        var table = document.querySelector('table');
        
        alerth3.innerHTML = '<h3>CEP não encontrado</h3>';

        table.style.display = 'none';
    })

    var input = document.querySelector('input');

    input.value = '';
});
