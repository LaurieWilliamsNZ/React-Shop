import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render () {
    return (
      <AddFishForm addFish={this.props.addFish} />
    );
  }
}

export default Inventory;
