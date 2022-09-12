import styled from 'styled-components';

const StyledGalleryElement = styled.div`
  height: 350px;
  width: auto;
  background-color: #FFFFFF60;
  border-radius: 10px;
  border: 1px solid #EF8BFF;
  box-shadow: 4px 4px 0 #EF8BFF;
  display: grid;

  & div{
    padding-left: 0.5rem;
    display: flex;
    gap: 0.2rem;
  }
  
  & span{
    border-radius: 999px;
    background-color: #39C5BD;
    border: 1px solid #2EA09A;
    box-shadow: 2px 2px 0 #2EA09A;
    color: white;
    font-size: small;
    padding: 0.2rem 0.6rem;
    height: 1.4rem;
    

  }
`

export default StyledGalleryElement;