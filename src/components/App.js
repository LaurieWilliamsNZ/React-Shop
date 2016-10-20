import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

  constructor () {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount () {
    //this runs right before the app is rendered
    this.ref = base.syncState(`${this.props.params.storeID}/fishes`,
      {
        context: this,
        state: 'fishes'

      });

    //check local storage for orders that might already exist
    const localStorageRef = localStorage.getItem(`order - ${this.props.params.storeID}`);

    if (localStorageRef) {
      //update app componant's order this.state.
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }

  }

  ComponentWillUnmount () {

    base.removeBinding(this.ref);
  }

  componentWillUpdate (nextProps, nextState) {
    //console.log({nextProps, nextState});
    localStorage.setItem(`order - ${this.props.params.storeID}`,
    JSON.stringify(nextState.order));
  }

  addFish (fish) {
    //update the state
    const fishes = {...this.state.fishes};
    //add in a new item
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state
    this.setState({ fishes });
  }

  updateFish (key, updatedFish) {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  loadSamples () {
    this.setState({
      fishes: sampleFishes

    });
  }

  addToOrder (key) {
    //copy the state
    const order = {...this.state.order};
    //update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    //update the state
    this.setState({order});
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='list-of-fishes'>
            {
              Object
              .keys(this.state.fishes)
              .map(key =>
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />)

            }
          </ul>
        </div>

        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
        />

        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
        />
      </div>
    );
  }
}

export default App;