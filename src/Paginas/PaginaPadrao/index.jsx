import Header from "../../componentes/Header"
import Footer from "../../Footer"
import { Outlet } from "react-router-dom"

function PaginaPadrao()
{
    return (
        <main>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
       
    )
}

export default PaginaPadrao