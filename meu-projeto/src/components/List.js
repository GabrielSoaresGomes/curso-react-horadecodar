import styles from "./List.module.css"
import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul className={styles.listContainer}>
                <Item marca="Ferrari" ano_lancamento={1965} />
                <Item marca="Citroen" ano_lancamento={2003} />
            </ul>
        </>
    )
}

export default List