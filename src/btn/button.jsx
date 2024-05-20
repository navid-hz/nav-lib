import React from 'react';
import StyledButton from './button.styles';
import PropTypes from 'prop-types';

// Component
const Button = ({ label, backgroundColor, size, onClick, ...props }) => {
  return (
    <StyledButton size={size} backgroundColor={backgroundColor} {...props}>
      {label}
    </StyledButton>
  );
};

// Props
Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'big', 'large']),
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.propTypes = {
  label: PropTypes.string,
};

// Defult Props
Button.defaultProps = {
  label: 'Contact Us',
  size: 'small',
  backgroundColor: 'defult',
};

export default Button;
