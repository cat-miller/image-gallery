import {ImageUpload} from "../components/ImageUpload";
import {Gallery} from "../components/Gallery";
import {useState, useEffect} from "react";
import {Header} from "../components/Header";
import StyledPageWrapper from "../styled_components/StyledPageWrapper";

export default function Home() {
    const [assets, setAssets] = useState([]);

    function handleAsset (newAsset) {
        setAssets([newAsset, ...assets])
    }
    useEffect(()=>{
        const url = "http://localhost:3000/api/images"

        fetch(url)
            .then(resp => resp.json())
            .then(data =>setAssets(data.resources))
    },[])

  return (
      <StyledPageWrapper>
        <Header handleAsset={handleAsset}/>

          <Gallery assets={assets} />
      </StyledPageWrapper>
  )
}
