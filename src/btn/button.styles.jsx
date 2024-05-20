import styled from 'styled-components';

// Component Styles
const StyledButton = styled.button`
  padding: ${(props) => (props.size === 'small' ? '10px 20px' : '10px 60px')};
  height: ${(props) => (props.size === 'large' ? '53px' : '48px')};
  font-size: ${(props) => (props.size === 'large' ? '22px' : '16px')};
  background-color: ${(props) =>
    props.backgroundColor === 'defult'
      ? '#FF4662'
      : props.backgroundColor === 'blue'
        ? '#3850CC'
        : props.backgroundColor === 'white'
          ? '#FFFFFF'
          : props.backgroundColor};
  color: ${(props) => (props.backgroundColor === 'white' ? '#979CC9' : '#fff')};
  &:hover {
    background-color: ${(props) => (props.backgroundColor === 'defult' ? '#FF597E' : '#617AFD')};
    color: #fff;
  }
  &:active {
    background-color: ${(props) => (props.backgroundColor === 'defult' ? '#3850CC' : '#FF4662')};
  }

  font-family: 'Helvetica';
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  line-height: 1;
`;

export default StyledButton;
