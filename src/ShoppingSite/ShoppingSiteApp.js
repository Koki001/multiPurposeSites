// ShoppingSiteApp.js
import { Link } from "react-router-dom";

const ShoppingSiteApp = () => {
  return (
    <div className="shopSiteWrapper">
      <Link to="/">
        <button className="goToHome">BACK TO HOME</button>
      </Link>
      <p>Shopping Site</p>
    </div>
  )
}

export default ShoppingSiteApp