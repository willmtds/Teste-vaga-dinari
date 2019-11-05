//JavaScript

//Variáveis dos campos

const cpf = document.getElementById('cpf');

const nome = document.getElementById('nome')

const email = document.getElementById('email')

const data = document.getElementById('datanasc')

const genero = document.getElementById('genero')

const senha1 = document.getElementById('senha1')

const senha2 = document.getElementById('senha2')

//colocando uma função no formulario
function test () {
    const cpfValue = cpf.value;
    const nomeValue = nome.value;
    const emailValue = email.value;
    const dataValue = data.value;
    const generoValue = genero.value;
    const senha1Value = senha1.value;
    const senha2Value = senha2.value;

    if ( senha1Value.length > 5  ) {
        if ( senha1Value  == senha2Value ) {
            alert(`Cadastro realizado com sucesso! Dados cadastrados:
            CPF: ${cpfValue}
            Nome: ${nomeValue}
            E-Mail: ${emailValue}
            Data de Nascimento: ${dataValue}
            Gênero: ${generoValue}
            `)
        } else {
            alert("Senhas incompatíveis!")
        }
    } else {
        alert("Senha necessita ter no mínimo 6 caracteres!")
    }
}
