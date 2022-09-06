import StyledSidebar from "../styled_components/StyledSidebar";
import {TagElement} from "./TagElement";
import styled from "styled-components";

export function Sidebar({tags}){
  return(
    <StyledSidebar>
      <h2>TAGS</h2>
        <StyledTagwrapper>
          {tags.map(tag => <TagElement key={tag} tag={tag} />)}
        </StyledTagwrapper>
    </StyledSidebar>
  )
}

const StyledTagwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 0.5rem;
  

`