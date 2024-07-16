import styles from "./Footer.module.css";

function Footer()
{
    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/Logo.svg" alt="Logo" />
        </div>
        
    )
}

export default Footer