import {GalleryElement} from "./GalleryElement";
import StyledGalleryWrapper from "../styled_components/StyledGalleryWrapper";

export function Gallery({assets}){
    return(
        <StyledGalleryWrapper>
            {assets.map(asset => <GalleryElement key={asset['asset_id']} image={asset.url} tags={asset.tags} />)}
        </StyledGalleryWrapper>
    )
}