import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Input from '../../components/input'
import api from '../../services/api';
import './style.css'


function Login() {

    const [Login, setLogin] = useState('');

    let nome, sobrenome, email, date = '';


    let login = {
        login: Login
    }

    //Para fazer o get quando a página for carregada
    useEffect(() => {
        searchNames();

    }, [])

    //Mostrar as sugestões de login
    function searchNames() {
        api.get(`https://jsonbox.io/box_fe8ac4ec9977d6b89a01/${localStorage.getItem('id')}`)
            .then(res => {
                nome = res.data.nome;
                sobrenome = res.data.sobrenome;
                email = res.data.email;
                date = res.data.data;

                //Primeira sugestão
                const first = sobrenome + nome;
                ReactDOM.render(first, document.getElementById('first'));

                //Segunda sugestão
                const getEmail: any = email.substring(0, email.indexOf("@"));
                ReactDOM.render(getEmail, document.getElementById('second'));

                const getData: any = date.split("-");

                if (getData[0] > 2000) {
                    var NameNdata = getData[0] + nome;
                    ReactDOM.render(NameNdata, document.getElementById('third'));
                } else {
                    var dataNname = nome + getData[2]
                    ReactDOM.render(dataNname, document.getElementById('third'));
                }


                //Pega os valores da sugestão
                var i = document.querySelector('#first');
                var s = document.querySelector('#second');
                var p = document.querySelector('#third');


                if (i !== null) {
                    i?.addEventListener('click', function () {
                        setLogin(first);
                    })
                }

                if (s !== null) {
                    s?.addEventListener('click', function () {
                        setLogin(getEmail);
                    })
                }
                
                if (p !== null) {
                    p?.addEventListener('click', function () {
                        setLogin(dataNname || NameNdata);
                    })
                }


            }).catch(error => console.log(error))
    }



    //Cadastrar o login
    function cadastrarLogin() {
        api.put(`https://jsonbox.io/box_39b4be516a91f83b0242/${localStorage.getItem('id')}`, login)
            .then(res => {
                console.log(res);
                setLogin('');
                alert('Seu Login foi cadastrado');
            }).catch(error => console.error(error))
    }

    return (
        <div className="log">
            <h1>login</h1>
            <form onSubmit={event => {
                event.preventDefault();
                cadastrarLogin();
            }}>
                <Input type='text' name='Nome' label="Nome" value={Login} onChange={e => setLogin(e.target.value)} id="usernameGenerator" />
                <div className="suggest" >
                    <p>Algumas sugestões para seu login</p>
                    <li><a id="first" href="#" ></a></li>
                    <li><a id="second" href="#"></a></li>
                    <li><a id="third" href="#"></a></li>
                </div>
                <button type='submit'>Finalizar</button>
            </form>
        </div>
    );
}
export default Login;


