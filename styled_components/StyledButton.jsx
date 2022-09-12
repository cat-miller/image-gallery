import styled from 'styled-components';

const StyledButton = styled.button`
  background: #B4177E;
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  width: 12rem;
  
  
  & > span {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-family: 'Silkscreen', cursive;
    font-size: 1.25rem;
    border: 1px solid #B4177E;
    background: #FF3FBE;
    color: white;
    transform: translateY(-6px);
  }
  
  &:active > span {
    transform: translateY(-2px);
  }
`

export default StyledButton;