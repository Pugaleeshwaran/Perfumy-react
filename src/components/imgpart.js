import one from "../assets/img/i1.jpg"
import two from "../assets/img/i2.jpg"
import three from "../assets/img/i3.jpg"

function Imgpart() {
    return (
        <div className="img_div">
        <div className="img_condainer">
            <div className="img_part">
                <img src={one} alt="one" />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>

            </div>
            <div className="img_part">
                <img src={two} alt="two" />
                
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>

            </div>
            <div className="img_part">
                <img src={three} alt="three" />
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>

            </div>

        </div>
        </div>
    )
}

export default Imgpart