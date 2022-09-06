import StyledHeader from "../styled_components/StyledHeader";
import {ImageUpload} from "./ImageUpload";

export function Header({handleAsset}){
return(
  <StyledHeader>
    <h1>My Gallery</h1>
    <ImageUpload  handleAsset={handleAsset}/>
  </StyledHeader>
)
}