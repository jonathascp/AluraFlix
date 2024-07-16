import Header from "../../componentes/Header"
import Banner from "../../componentes/Banner"
import CardsContainer from "../../componentes/CardsContainer"
import Footer from "../../Footer"

function PaginaPadrao()
{
    return (
        <main>
            <Header/>
            <Banner/>
            <CardsContainer/>
            <Footer/>
        </main>
       
    )
}

export default PaginaPadrao