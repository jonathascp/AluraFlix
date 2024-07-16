import styles from "./CardCategoria.module.css";

function CardCategoria({ categoria,categoriaTitulo,container })
{
    return (
        <div className={styles.container}>
            <h2 className={styles.categoriaTitulo}>{categoria}</h2>
            <div className={styles.containerCards}>
            </div>
        </div> 
    )
}

export default CardCategoria