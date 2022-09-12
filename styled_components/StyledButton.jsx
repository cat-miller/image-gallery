import styled from 'styled-components';

const StyledButton = styled.button`
  background: hsl(340deg 100% 32%);
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  
  
  & > span {
    display: block;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    background: hsl(345deg 100% 47%);
    color: white;
    transform: translateY(-6px);
  }
  
  &:active > span {
    transform: translateY(-2px);
  }
`

export default StyledButton;