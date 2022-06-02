// GallerySiteApp.js
import { Link } from "react-router-dom";

const GallerySiteApp = () => {

  return (
    <div className="gallerySiteWrapper">
      <Link to="/">
        <button className="goToHome">BACK TO HOME</button>
      </Link>
      <p>Gallery Site</p>
    </div>
  )
}

export default GallerySiteApp