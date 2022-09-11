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
          <Form.Label>Choose Your Horns</Form.Label>
          <Form.Select name='hornsForm' onChange={this.handleSubmit}>
            <option value='0'>1</option>
            <option value='1'>2</option>
            <option value='2'>3</option>
            <option value='100'>100</option>
            <option value='4'>all beasts</option>
          </Form.Select>
        </Form.Group >
      </>
    )
  }
};
// 
export default HornForm;
