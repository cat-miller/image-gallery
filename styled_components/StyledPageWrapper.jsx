import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  color: #46289f;
  background: linear-gradient(165deg, rgba(246,208,251,1) 20%, rgba(185,214,249,1) 100%);
  transition: background 0.5s ease-in-out;
  font-family: "Roboto Light", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
          "header header header header header"
          "sidebar gallery gallery gallery gallery"
          "footer footer footer footer footer"
  ;
  
& h1, h2 {
  color: #BA24FF;
  font-family: 'Silkscreen', cursive;
  text-shadow: 2px 2px 0 #46289e;
} 
  
  & h1 {
    font-size: 3rem;
  }
  
  & h2 {
    font-size: 2rem;
  }

`

export default StyledPageWrapper;