import styled from "styled-components";

const StyledInput = styled.input`
  height: 1.2rem;
  width: 250px;
  background-color: #FFFFFFB9;
  border-radius: 10px;
  border: 1px solid #EF8BFF;
  box-shadow: 4px 4px 0 #EF8BFF;
  padding: 0.5rem;
  
  &:placeholder-shown {
    font-style: italic;
  }
  
`
export default StyledInput;