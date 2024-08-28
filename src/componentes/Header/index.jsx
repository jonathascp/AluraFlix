import BotaoLink from "../BotaoLink";
import styles from "./Header.module.css";

function Header()
{
    return (
       <div className={styles.header}>
            <img className={styles.logo} src="/Logo.svg" alt="Logo" />
            <div className={styles.buttons}>
               
               <BotaoLink estiloBotao={"azul"} to="/novovideo">
                    NOVO VÍDEO
               </BotaoLink>
            
               <BotaoLink estiloBotao={"branco"} to="/">
                    INÍCIO
               </BotaoLink>
            </div>
       </div>
    )
}

export default Header