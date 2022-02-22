import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
            <p>Marca, OK</p>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}

export default Item