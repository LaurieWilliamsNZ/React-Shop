import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor () {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    };
    this.props.updateFish(key, updatedFish);
    console.log(key, updatedFish);
  }
  renderInventory (key) {
    const fish = this.props.fishes[key];
    return (
      <div className='fish-edit' key={key}>
        <input
          type='text'
          name='name'
          value={fish.name}
          placeholder='Product Name'
          onChange={(e) => this.handleChange(e, key)}
        />

        <input
          type='text'
          name='price'
          value={fish.price}
          placeholder='Product Price'
          onChange={(e) => this.handleChange(e, key)}
        />

        <select
          type='text'
          name='status'
          value={fish.status}
          placeholder='Product Status'
          onChange={(e) => this.handleChange(e, key)}
          >
          <option value='avaliable'>Fresh!</option>
          <option value='unavaliable'>Sold Out!</option>
        </select>

        <select
          type='text'
          name='onsale'
          value={fish.onsale}
          placeholder='On Sale?'
          onChange={(e) => this.handleChange(e, key)}
          >
          <option value='yes'>On Sale</option>
          <option value='no'>Not on Sale</option>
        </select>

        <select
          type='text'
          name='unit'
          value={fish.unit}
          placeholder='Unit Type'
          onChange={(e) => this.handleChange(e, key)}
          >
          <option value='percent'>Percent</option>
          <option value='dollars'>Dollars</option>
        </select>

        <input
          type='text'
          name='unitamount'
          value={fish.unitamount}
          placeholder='Amount'
          onChange={(e) => this.handleChange(e, key)}
        />

        <textarea
          name='desc'
          placeholder='Product Description'
          onChange={(e) => this.handleChange(e, key)}
        >
          {fish.desc}
        </textarea>

        <input
          type='text'
          name='image'
          value={fish.image}
          placeholder='Product Image'
          onChange={(e) => this.handleChange(e, key)}
        />

        <button onClick={() => this.props.removeFish(key)}>
         Remove Fish
        </button>
      </div>
    );
  }
  render () {
    return (
      <div>
       {Object.keys(this.props.fishes).map(
        this.renderInventory
        )}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
