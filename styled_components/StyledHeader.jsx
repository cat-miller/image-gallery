import styled from 'styled-components';

const StyledHeader = styled.div` 
  display: grid;
  justify-content: center;
  text-align: center;
  grid-area: header;
  padding-bottom: 1rem;
  
  & h1 {
    padding: 0.5rem;
  }
`
export default StyledHeader;