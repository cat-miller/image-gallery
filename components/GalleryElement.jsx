import StyledGalleryElement from "../styled_components/StyledGalleryElement";
import StyledImage from "../styled_components/StyledImage";

export function GalleryElement({image, tags}){
  return(
    <StyledGalleryElement>
      <StyledImage src={image} />
      <div>
      {tags?.map(tag => <span key={tag}>{tag} </span>)}
      </div>
    </StyledGalleryElement>
  )
}