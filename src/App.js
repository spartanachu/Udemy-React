
// App box
import Navbar from "./Component/navbar"
import Categories from "./Component/categories"
import Saleimage from "./Component/Saleimage"
import Recommended from "./Component/recommended"
import Topics from "./Component/topics"
import Popular from "./Component/popular"
import Footer from "./Component/footer"

function App()
{
    return(
        <>
        <Navbar></Navbar>
        <Categories></Categories>
        <Saleimage></Saleimage>
        <Recommended></Recommended>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>
        </>
    )
}

export default App