import React from 'react';

class AddFishForm extends React.Component {

  createFish (event) {
    event.preventDefault();

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
      onsale: this.onsale.value,
      unit: this.unit.value,
      unitamount: this.unitamount.value
    };

    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render () {
    return (
      <form
        ref={(input) => this.fishForm = input}
        className='fish-edit'
        onSubmit={(e) => this.createFish(e)}
        >

        <input
          ref={(input) => this.name = input}
          type='text'
          placeholder='Fish Name'
        />

        <input
          ref={(input) => this.price = input}
          type='text'
          placeholder='Fish Price'
        />

        <select
          ref={(input) => this.status = input}>
            <option value='avaliable'>Fresh!</option>
            <option value='unavaliable'>Sold Out!</option>
        </select>

        <select
          type='text'
          name='onsale'
          ref={(input) => this.onsale = input}
          placeholder='On Sale?'
          >
          <option value='yes'>On Sale</option>
          <option value='no'>Not on Sale</option>
        </select>

        <select
          type='text'
          name='unit'
          ref={(input) => this.unit = input}
          placeholder='Unit Type'
          >
          <option value='percentage'>Percentage</option>
          <option value='dollar'>Amount in dollars</option>
        </select>

        <input
          type='text'
          name='unitamount'
          ref={(input) => this.unitamount = input}
          placeholder='Amount'
        />
        <textarea
          ref={(input) => this.desc = input}
          placeholder='Fish Desc'
        />

        <input 
          ref={(input) => this.image = input}
          type='text'
          placeholder='Fish Image'
        />
        <button
          type='submit'>
          + Add Item
        </button>
      </form>
    );
  }
}

export default AddFishForm;
