import StyledHeader from "../styled_components/StyledHeader";
import {ImageUpload} from "./ImageUpload";

export function Header({handleAsset}){
return(
  <StyledHeader>
    <h1>GALLERY</h1>
    <ImageUpload  handleAsset={handleAsset}/>
  </StyledHeader>
)
}