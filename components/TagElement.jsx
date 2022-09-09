import StyledTagButton from "../styled_components/StyledTagButton";

export function TagElement({tag, onClick, isActive}){

  return(
    <StyledTagButton onClick={() => onClick(tag)} isActive={isActive} >
      {tag}
    </StyledTagButton>
  )
}



