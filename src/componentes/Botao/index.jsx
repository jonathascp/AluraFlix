import styles from "./Botao.module.css";
function Botao({ estiloBotao, children })
{
    return (
        <>
            <button className={styles[estiloBotao]}>
                {children}
            </button>
        </>
    )
}

export default Botao