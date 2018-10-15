//@ts-check
import React from 'react';
import { Label, Input } from '.';
import { Icon } from '../view';

export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false
    };
  }

  handleChecked = () => {
    this.setState(({ checked }) => ({
      checked: !checked
    }));
  };

  get icon() {
    return this.state.checked ? (
      <Icon>check_box</Icon>
    ) : (
      <Icon>check_box_outline_blank</Icon>
    );
  }

  render() {
    const { label } = this.props;
    return (
      <Label className="label__checkbox" notFormGroup>
        {this.icon}
        <span className="label__text">{label}</span>
        <Input type="checkbox" onChange={this.handleChecked} />
      </Label>
    );
  }
}
