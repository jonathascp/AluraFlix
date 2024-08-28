import CardCategoria from "../CardCategoria"


function CardsContainer()
{
    return(
        <>
            <CardCategoria categoria="FRONT END" categoriaTitulo="frontEnd"/>
            <CardCategoria categoria="BACK END" categoriaTitulo="backEnd"/>
            <CardCategoria categoria="MOBILE" categoriaTitulo="mobile"/>
        </>
    )
}

export default CardsContainer