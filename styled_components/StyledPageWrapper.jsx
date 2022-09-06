import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
          "header header header header header"
          "sidebar gallery gallery gallery gallery"
          
  
`

export default StyledPageWrapper;