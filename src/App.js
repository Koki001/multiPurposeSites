import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import ShoppingSiteApp from './ShoppingSite/ShoppingSiteApp';
import GallerySiteApp from "./GallerySite/GallerySiteApp";
import Home from './Home';


function App() {
  
  return (
    
    <div className="appWrapper">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shoppingHome' element={<ShoppingSiteApp />}/>
          <Route path='/galleryHome' element={<GallerySiteApp />}/>
        </Routes>
    </div>

  );
}

export default App;
