import React from 'react';
import { getFunName } from '../helpers';

class Storepicker extends React.Component {

  goToStore (event) {
    event.preventDefault();
    //first grab the text from the box
    const storeID = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeID}`);
    //second transition from / to /store/:storeID
    console.log(`going to ${storeID}`);
  }

  render () {
    return (
      <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>

        <h2> Please enter a store</h2>

        <input
          type='text'
          required
          placeholder='Store Name'
          defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input; }}
        />

        <button type='submit' >Visit Store </button>
      </form>
    );
  }
}

Storepicker.contextTypes = {
  router: React.PropTypes.object
};

export default Storepicker;
