import styled from "styled-components";

const StyledTagButton = styled.button`
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  background-color: ${(props) => props.isActive ? '#2A9690': '#39C5BD' } ;
 
  border: 1px solid #266D6A;
  box-shadow: 2px 2px 0 #2E837E;
  color: white;
  font-size: small;
  height: 1.6rem;
`

export default StyledTagButton;