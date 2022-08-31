import {ImageUpload} from "../components/ImageUpload";
import {Gallery} from "../components/Gallery";
import {useState, useEffect} from "react";

export default function Home() {
    const [image, setImage] = useState('');
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
      <>
        <ImageUpload image={image}  setImage={setImage} handleAsset={handleAsset}/>
          <Gallery assets={assets} />
      </>
  )
}
