import {ImageUpload} from "../components/ImageUpload";
import {Gallery} from "../components/Gallery";
import {useState, useEffect} from "react";
import {Header} from "../components/Header";
import StyledPageWrapper from "../styled_components/StyledPageWrapper";
import {Sidebar} from "../components/Sidebar";
import {Footer} from "../components/Footer";

export default function Home() {
    const [assets, setAssets] = useState([]);
    const tagsSet = new Set(assets.map(asset => asset.tags).join().split(','));
const tags = [...tagsSet];
    console.log(tags)

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
        <Sidebar tags={tags} />
          <Gallery assets={assets} />
        <Footer/>
      </StyledPageWrapper>
  )
}
