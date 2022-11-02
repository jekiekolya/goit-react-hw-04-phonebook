import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ type, name, ...otherProps }) => {
  return (
    <ButtonStyled type={type} {...otherProps}>
      {name}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  type: 'submit',
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
