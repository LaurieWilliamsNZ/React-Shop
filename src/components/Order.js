import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  constructor () {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }
  renderOrder (key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    //decrement the order : -1 from  order key
    const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>
      &#8854;
    </button>;
    //increment order - add's +1 to order key
    const addOneMoreButton = <button onClick={() => this.props.incrementOrder(key)}>
      &#8853;
    </button>;
    //remove the order from state
    const removeAllButton = <button onClick={() => this.props.removeAll(key)}>
      &#8855;
    </button>;

    if (!fish || fish.status === 'unavaliable') {
      return <li key={key}> Sorry {fish ? fish.name : 'fish'}
      is no longer available
      {removeButton}
      {addOneMoreButton}
      {removeAllButton}</li>;
    }

    return (
      <li key={key}>
        <span>{count}kgs {fish.name} {addOneMoreButton} {removeButton} {removeAllButton} </span>
        <span className='price'>
          {formatPrice(count * fish.price)}
        </span>
      </li>
    );
  }
  render () {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div className='order-wrap'>
        <h2>Your Order</h2>
        <ul className='order'>
        {orderIds.map(this.renderOrder)}
          <li className='total'>
            <strong>Total:</strong>
             {formatPrice(total)}
          </li>
        </ul>
      </div>
    );
  }
}

export default Order;