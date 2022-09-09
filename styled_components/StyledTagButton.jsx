import styled from "styled-components";

const StyledTagButton = styled.button`
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  
 

  background-color: ${(props) => props.isActive ? '#46289E': '#A484FF' } ;
  border: none;
  
  color: white;
  font-size: small;
  
  height: 1.4rem;
`

export default StyledTagButton;