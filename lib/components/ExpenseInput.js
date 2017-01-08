import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

export default class ExpenseInput extends Component {
  constructor() {
    super();
    this.state = {
      draftText: '',
      draftCost: '',
    }
  }

  updateCategory(value) {
    this.setState({ draftText: value })
  }

  updateCost(value) {
    this.setState({ draftCost: value })
  }

  handleSubmit() {
    let { draftText, draftCost } = this.state;
    let { timeFrame } = this.props;
    this.props.handleChange(draftText, draftCost, timeFrame)
    this.setState({ draftText: '', draftCost: ''})
  }

render(){
  let { category, categoryCost, buttonText } = this.props;
  let { draftText, draftCost } = this.state;
  return(
    <section className='input-section'>
      <Input placeholder={ category } type='text' handle={ this.updateCategory.bind(this) } value={ draftText } />
      <Input placeholder={ categoryCost } type='number' handle={ this.updateCost.bind(this) } value={ draftCost } />
      <Button text={ buttonText } handleClick={this.handleSubmit.bind(this)}  />
    </section>
    )
  }
}