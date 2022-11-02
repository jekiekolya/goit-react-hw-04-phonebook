import React from 'react';
import PropTypes from 'prop-types';

import { Label, Input, NameLabel } from './InputField.styled';

export default function InputField({ nameLabel, ...inputSetting }) {
  return (
    <Label>
      {nameLabel && <NameLabel>{nameLabel}</NameLabel>}
      <Input {...inputSetting} />
    </Label>
  );
}

InputField.propTypes = {
  nameLabel: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};
