import React, { useState } from 'react';
import Input from '../../components/input';
import api from '../../services/api';
import {useHistory } from 'react-router-dom';
import './style.css'

function Cadastro() {
    
    let history = useHistory(); 
    
    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Data, setData] = useState('');

    function cadastrar() {
       

        const json = {
            nome: Nome,
            sobrenome: Sobrenome,
            email: Email,
            data: Data,
            login:'',
            senha: Senha
        }

        api.post('https://jsonbox.io/box_fe8ac4ec9977d6b89a01', json)
            .then((res: any) => {
                history.push('/login');

                localStorage.setItem('id',res.data._id);

                alert(JSON.stringify(json,null, 2))

                setNome('');
                setSobrenome('');
                setData('');
                setEmail('');
                setSenha('');
            }).catch((error: any) => console.error(error)
            )
    }

    return (
        <div className="cad">
            <form className="Form" onSubmit={event => {
                event.preventDefault();
                cadastrar();
            }}>
                <h1>https://dojopuzzles.com/problems/gerar-login/</h1>
                <h2>Cadastro</h2>
                <Input type='text' name='Nome' label="Nome" value={Nome} onChange={e => setNome(e.target.value)} />
                <Input type='text' name='Sobrenome' label="Sobrenome" value={Sobrenome} onChange={e => setSobrenome(e.target.value)} />
                <Input type='email' name='Email' label="Email" value={Email} onChange={e => setEmail(e.target.value)} />
                <Input type='date' name='Data' label="Data" value={Data} onChange={e => setData(e.target.value)} />
                <Input type='password' name='Senha' label="Senha" value={Senha} onChange={e => setSenha(e.target.value)} />
                <button type='submit'>Cadastrar</button>
            </form>

        </div>
    );
}

export default Cadastro;