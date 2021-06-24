import React, {useState} from 'react';
import api from '../services/api';

function CadastroUsuario() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            senha,
            email
        };

        try {
            console.log(dados);
            const response = await api.post('user', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do usuário é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar usuário " + error.message);            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Usuário</h1>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/> 

                    <input 
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}/> 

                    <input 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/> 

                    <button className="button" type="submit">Cadastrar Usuário</button>
                </form>

            </div>
        </div>

    );
}

export default CadastroUsuario;