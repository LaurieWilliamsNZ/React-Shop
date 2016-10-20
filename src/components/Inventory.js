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
