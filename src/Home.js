// Home.js
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div className="homePageWrapper">
      <p>HOME PAGE</p>
      <Link to="/shoppingHome">
        <button className="goToShop">SHOPPING SITE</button>
      </Link>
      <Link to="/galleryHome">
        <button className="goToGallery">GALLERY SITE</button>
      </Link>
    </div>
  )
}

export default Home