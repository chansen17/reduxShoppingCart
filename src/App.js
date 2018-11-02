import React, { Component } from 'react';
// bootstrap layout
import { Grid } from 'react-bootstrap';
// components
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickingSavings/PickupSavings';
import TaxFees from './components/TaxFees/TaxFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }
  }

  componentDidMount() {
    this.setState({
      taxes:(this.state.total + this.state.pickupSavings) * 0.0875 
    }, function() {
      this.setState({
        estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
      })
    })
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)}></Subtotal>
          <PickupSavings price={this.state.pickupSavings}></PickupSavings>
          <TaxFees taxes={this.state.taxes.toFixed(2)}></TaxFees>
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}></EstimatedTotal>
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}></ItemDetails>
          <PromoCode
            giveDiscount={ () => this.giveDiscountHandler() }
            isDisabled={ () => this.state.disablePromoButton }
          ></PromoCode>
          <hr />
        </Grid>
      </div>
    );
  }
}

export default App;
