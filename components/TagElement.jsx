import styled from 'styled-components'

export function TagElement({tag, onClick}){

  return(
    <StyledButton onClick={() => onClick(tag)}>
      <StyledTag>{tag}</StyledTag>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  
`

const StyledTag = styled.span`
  border-radius: 999px;
  background-color: #A484FF;
  color: white;
  font-size: small;
  padding: 0.2rem 0.6rem;
  height: 1.4rem;

`