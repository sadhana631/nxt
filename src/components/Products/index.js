import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const products = () => {
  const accessToken = Cookies.get('jwt-token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-img"
        />
      </div>
    </>
  )
}

export default products
