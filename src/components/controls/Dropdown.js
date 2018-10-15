import React from 'react';
import Select from 'react-select';
import { Label } from '.';

const colourStyles = {
    control: (styles, state) => ({
        ...styles,
        minWidth: '150px',
        borderRadius: 0,
        borderWidth: 2,
        '&:hover': {
            borderColor: 'var(--brand-primary)',
            transition: '0.6s ease border'
        },
        boxShadow: state.isFocused ? '0 0 0 1px var(--brand-primary)': styles.boxShadow,
        borderColor: state.isFocused ? 'var(--brand-primary)' : 'var(--light-grey)'
    }),
    indicatorSeparator: styles => ({
        ...styles,
        display: 'none'
    }),
    option: (styles, state) => ({
        ...styles,
        backgroundColor: state.isSelected ? 'var(--brand-primary)' : styles.backgroundColor
    })
}

export class Dropdown extends React.PureComponent {
  render() {
    const { options, name, label, ...rest } = this.props;
    return (
      <div className="select">
        <Label>{label}</Label>
        <Select 
            {...rest}
            options={options}
            label={label}
            name={name}
            styles={colourStyles}
        />
      </div>
    );
  }
}
