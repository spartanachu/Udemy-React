//Navbar

function Navbar()
{
    return(
        <div class="navbar">
    <div class="navbar__s1">
        <h1 class="navbar__s1__title">Udemy</h1>
    </div>
    <div class="navbar__s2">
        <i class="fa-solid fa-magnifying-glass" style={{color:"00060f"}}></i>
        <input placeholder="Search any things Product,business.."></input>
    </div>
    <div class="navbar__s3">
        <p>Cources</p>
        {/* <p>My Learnig</p>  */}
        <div class="mylearing">
            <p>My Learing</p>
            <div class="mylearing__popup">
                <p>you did not purchase any things else</p>
            </div>
        </div>
        <i class="fa-solid fa-cart-shopping" style={{color: "#01060e"}}></i>
        <i class="fa-solid fa-bell" style={{color: "#010409"}}></i>
        <i class="fa-solid fa-user" style={{color: "#010813"}}></i>
    </div>
    <div class="navbar__s4">
        <i class="fa-solid fa-bars"></i>
    </div>
</div>
    )
}

export default Navbar

