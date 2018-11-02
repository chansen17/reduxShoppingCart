import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeight: 800
    }
}

class PickupSavings extends Component {
  render() {
    const tooltip = (
        <Tooltip id="tooltip">
            <p>Picking up your order from the store helps cut costs, and we pass the savings on to you.</p>
        </Tooltip>
    )
    return (
      <Row className="show-grid">
        <Col md={6}>
            <OverlayTrigger placement="bottom" overlay={tooltip}>
                <div style={styles.PickupSavings}>Picking Savings</div>
            </OverlayTrigger>
        </Col>
        <Col md={6} style={styles.totalSavings}>
            {`$${this.props.price}`}
        </Col>
      </Row>
    )
  }
}

export default PickupSavings;
