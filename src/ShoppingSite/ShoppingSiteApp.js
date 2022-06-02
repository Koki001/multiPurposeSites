// ShoppingSiteApp.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const ShoppingSiteApp = () => {

  const [shopData, setShopData] = useState()

  useEffect(() => {
    axios({
      url: 'https://fakestoreapi.com/products',
    }).then(response => {
      console.log(response)
      setShopData(response.data)
    }).catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div className="wrapper">
      <Link to="/">
        <button className="goToHome">BACK TO HOME</button>
      </Link>
      <div className="shopSiteWrapper">
        { 
          shopData ?
          shopData.map(item => {
            console.log(item)
            return (
              <div className="shopItem">
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.title} />
                <p>{item.price}$</p>
                <p>Rating: {item.rating.rate} out of {item.rating.count} votes</p>
              </div>
            )
          })
          : <p className="loading">LOADING</p>
        }
      </div>
    </div>
  )
}

export default ShoppingSiteApp