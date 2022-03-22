import React from 'react'
import Styles from './Cart.module.css'
function Header() {
  return (
    <thead>
            <tr className={Styles.product__heading}>
        <th>Product</th>
        <th>Price</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
  )
}

export default Header