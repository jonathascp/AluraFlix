import { Link } from "react-router-dom";
import styles from "./BotaoLink.module.css";

function BotaoLink({ children, estiloBotao, to })
{
    return (
        <Link to={to} className={styles[estiloBotao]}>
            {children}
        </Link>
    )
}

export default BotaoLink