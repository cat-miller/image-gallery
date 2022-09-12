import {Gallery} from "../components/Gallery";
import {useState, useEffect, useRef} from "react";
import {Header} from "../components/Header";
import StyledPageWrapper from "../styled_components/StyledPageWrapper";
import {Sidebar} from "../components/Sidebar";
import {Footer} from "../components/Footer";

export default function Home() {
    const [assets, setAssets] = useState([]);
    const tagsSet = new Set(assets.map(asset => asset.tags).join().split(','));
    const tags = [...tagsSet];
    const [activeFilter, setActiveFilter] = useState(undefined);
    const [assetsToShow, setAssetsToShow] = useState([]);



  function handleTagClick(tag){
      setActiveFilter(tag);
    }


    function handleAsset (newAsset) {
        setAssets([newAsset, ...assets])
    }


    useEffect(()=>{
        const url = "http://localhost:3000/api/images"

        fetch(url)
            .then(resp => resp.json())
            .then(data => setAssets(data.resources))


    },[])



  useEffect(() =>{

    if(activeFilter === undefined ){
      setAssetsToShow(assets);
    }
    else {
      setAssetsToShow(assets.filter(({tags}) => tags.includes(activeFilter)));
    }
  },[activeFilter, assets])

  return (
      <StyledPageWrapper>
        <Header handleAsset={handleAsset}/>
        <Sidebar tags={tags} handleTagClick={handleTagClick} activeFilter={activeFilter} />
          <Gallery assets={assetsToShow} />
        <Footer/>
      </StyledPageWrapper>
  )
}
