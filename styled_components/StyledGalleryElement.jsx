import styled from 'styled-components';

const StyledGalleryElement = styled.div`
  height: 350px;
  width: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px #EF8BFF;
  display: grid;

  & div{
    padding-left: 0.5rem;
    display: flex;
    gap: 0.2rem;
  }
  
  & span{
    border-radius: 999px;
    background-color: #A484FF;
    color: white;
    font-size: small;
    padding: 0.2rem 0.6rem;
    height: 1.4rem;
    

  }
`

export default StyledGalleryElement;