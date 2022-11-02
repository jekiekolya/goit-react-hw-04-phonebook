import PropTypes from 'prop-types';

import InputField from '../InputField';

const Filter = ({ handlerFilterList }) => {
  return (
    <InputField
      nameLabel="Find contacts by name"
      onChange={handlerFilterList}
    />
  );
};

Filter.propTypes = {
  handlerFilterList: PropTypes.func.isRequired,
};

export default Filter;
