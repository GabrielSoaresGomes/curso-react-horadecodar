import {useState} from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} ${sobrenome} da senha ${password} foi cadastrado!`)

    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [sobrenome, setSobrenome] = useState()

    return (
        <div>
            <h1>Meu cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome"
                           onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="sobrenone"
                    onChange={(e) => setSobrenome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form