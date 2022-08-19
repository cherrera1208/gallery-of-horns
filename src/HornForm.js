import React from 'react';
import { Form } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

class HornForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(e.target.value);
  }

  render() {
    return (
      <>
        <Form.Group>
          <Form.Label>Horns to Choose</Form.Label>
          <Form.Select name='hornsForm' onChange={this.handleSubmit}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </Form.Select>
        </Form.Group >
      </>
    )
  }
};
// 
export default HornForm;
