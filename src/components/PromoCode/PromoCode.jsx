import React, { Component } from 'react';
import { Button, Collapse, Well, Row, Col, FormGroup, ControlLabel, Form, FormControl } from 'react-bootstrap';

class PromoCode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            value: ''
        }
    }
  render() {
    return (
      <div>
        <Button
            className="promo-code-button"
            bsStyle="link"
            onClick={ () => {this.setState({ open: !this.state.open})} }
            >
            { this.state.open === false ? `Apply ` : `Hide` } promo code
            { this.state.open === false ? `+ ` : ` - ` } 
        </Button>
        <Collapse in={this.state.open}>
            <Well>
                <Row className="show-grid">
                    <Col md={12}>
                        <Form>
                            <FormGroup controlId="formInlineName">
                                <ControlLabel>Promo Code</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.promoCode}
                                    onChange={this.handleChange}
                                />
                                <Button
                                    block
                                    bsStyle="success"
                                    className="btn-round"
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                >
                                Apply Promo
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Well>
        </Collapse>
      </div>
    )
  }
}

export default PromoCode;
