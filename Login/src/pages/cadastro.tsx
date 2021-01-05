import React, {useState} from 'react';
import Input from '../components/input';
import api from '../../services/api';

function Cadastro() {
    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    function cadastrar(){
        api.post('')
    }

  return (
    <div className="center">
        <Input type='text' name='Nome' label="Nome" onChange={e => setNome(e.taget.value)}></Input>
        <Input type='email' name='Email' label="Email" onChange={e => setEmail(e.taget.value)}></Input>
        <Input type='password' name='Senha' label="Senha" onChange={e => setSenha(e.taget.value)}></Input>
        <button ></button>
    </div>
  );
}

export default Cadastro;