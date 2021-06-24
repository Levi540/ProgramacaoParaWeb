import React, {useState} from 'react';
import api from '../services/api';

function CadastroVinho() {

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            tipo,
            nacionalidade, 
            quantidade, 
            preco
        };

        try {
            console.log(dados);
            const response = await api.post('wine', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do produto é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar produto " + error.message);
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Vinho</h1>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}/> 

                    <input 
                        placeholder="Tipo"
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}/> 

                    <input 
                        placeholder="Nacionalidade"
                        value={nacionalidade}
                        onChange={e => setNacionalidade(e.target.value)}/> 
                    
                    <input 
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}/> 
                    
                    <input 
                        placeholder="Preço"
                        value={preco}
                        onChange={e => setPreco(e.target.value)}/> 


                    <button className="button" type="submit">Cadastrar Vinho</button>
                </form>

            </div>
        </div>

    );
}

export default CadastroVinho;