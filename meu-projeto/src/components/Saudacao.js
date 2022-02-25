function Saudacao({nome}) {

function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, tudo bem?`
}

    return <>
        { nome ? (<p>{gerarSaudacao(nome)}</p>) : (<p>Insira um nome</p>)}
    </>
}

export default Saudacao