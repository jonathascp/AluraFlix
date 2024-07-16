import styles from "./Header.module.css";

function Header()
{
    return (
       <div className={styles.header}>
            <img className={styles.logo} src="/Logo.svg" alt="Logo" />
            <div className={styles.buttons}>
                <button className={styles.btn_Home}>HOME</button>
                <button className={styles.btn_NovoVideo}>NOVO VÍDEO</button>
            </div>
       </div>
    )
}


export default Header