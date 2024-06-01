// Popular Container
import c1 from "../Assets/images/c1.jpg"
import c2 from "../Assets/images/c2.jpg"
import c3 from "../Assets/images/c2.jpg"
import c4 from "../Assets/images/c3.jpg"
import c5 from "../Assets/images/c3.jpg"
import c6 from "../Assets/images/c2.jpg"
import c7 from "../Assets/images/c4.jpg"
import c8 from "../Assets/images/c4.jpg"

function Popular()
{
    return(
        <div class="popular">
<h1 class="popular_titlt">MOst Popular</h1>
<p class="popular_subtitle">Pick the Best</p>
<div class="popular_container">
    <div class="course-card">
        <img src={c1} alt=""></img>
        <p>2023 python Date Visulization New Edition</p>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
    </div>
    <div class="course-card">
        <img src={c2} alt=""></img>
        <p>Dot Net New Edition 2024</p>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>550 <del>1999</del></p>
    </div>
    <div class="course-card">
        <img src={c3} alt=""></img>
        <p>Dot Net New Edition 2024</p>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>550 <del>1999</del></p>
    </div>
    <div class="course-card">
        <img src={c4} alt=""></img>
        <p>Dot Net New Edition 2024</p>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>550 <del>1999</del></p>
    </div>
    <div class="course-card">
        <img src={c5} alt=""></img>
        <p>RDBMS </p>
        <p>Col Steele</p>
        <p>3.9 ⭐⭐⭐</p>
        <p>375 <del>1999</del></p>
    </div>
    <div class="course-card">
        <img src={c6} alt=""></img>
        <p>RDBMS </p>
        <p>Col Steele</p>
        <p>3.9 ⭐⭐⭐</p>
        <p>375 <del>1999</del></p>
    </div>
    <div class="course-card">
        <img src={c7} alt=""></img>
        <p>Unix</p>
        <p>Col Steele</p>
        <p>2.9 ⭐⭐</p>
        <p>480 <del>1999</del></p>
    </div>
    <div class="course-card">
        <img src={c8} alt=""></img>
        <p>Unix</p>
        <p>Col Steele</p>
        <p>2.9 ⭐⭐</p>
        <p>480 <del>1999</del></p>
    </div>
</div>
</div>
    )
}

export default Popular