import StyledSidebar from "../styled_components/StyledSidebar";
import {TagElement} from "./TagElement";
import StyledTagWrapper from "../styled_components/StyledTagWrapper";
import StyledButton from "../styled_components/StyledButton";


export function Sidebar({tags, handleTagClick, activeFilter}){
  return(
    <StyledSidebar>
      <h2>TAGS</h2>
      <p>Push a tag button and filter all images with this tag</p>
        <StyledTagWrapper>
          {tags.map(tag => {
            if(tag === ''){
              return null;
            }
            return <TagElement key={tag} tag={tag} onClick={handleTagClick} isActive={tag === activeFilter}/>
          })}
        </StyledTagWrapper>
      <StyledButton onClick={() => handleTagClick(undefined)}>
        <span>
          Reset
        </span>
      </StyledButton>
    </StyledSidebar>
  )
}

