import styles from "./List.module.css"
import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul className={styles.listContainer}>
                <Item marca="Nike" />
                <Item marca="Adidas" />
            </ul>
        </>
    )
}

export default List