import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render () {
    const { details, index } = this.props;
    const isAvaliable = details.status === 'available';
    const buttonText = isAvaliable ? 'Add to Order' : 'Sold Out!';
    const isSale = details.onsale === 'yes';
    const discountUnit = details.unit;
    const discountAmount = details.unitamount;
    const price = details.price;

    function calculateDiscount () {
      let discount = 0;
      if (discountUnit === 'dollars') {
        discount = formatPrice(price - discountAmount);
      }
      else if (discountUnit === 'percent') {
        discount = formatPrice(price - (price * discountAmount) / 100);
      }
      return discount;
    }
    return (
      <li className='menu-fish'>
        <img src={details.image} alt={details.name} />
        <h3 className='fish-name'>
          {details.name}
          <span className='price'>
            <strike>
              { !isSale ? (formatPrice(price)) : '' }
            </strike>
          </span>
          <span className='price'>
            {isSale ? (formatPrice(price)) : calculateDiscount() }
          </span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvaliable} onClick={() => this.props.addToOrder(index)}>
          {buttonText}
        </button>   
      </li>
    );
  }

}

export default Fish;
