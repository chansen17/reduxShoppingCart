import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class TaxFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes based &amp; fees ( based on 94804 )</Col>
        <Col md={6}>{`$${this.props.taxes}`}</Col>
      </Row>
    )
  }
}

export default TaxFees;