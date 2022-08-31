
export function ImageUpload({handleAsset, image, setImage}){


    function handleUpload() {
        const data = new FormData();
        data.append('file', image)
        data.append('upload_preset','gallery')
        data.append('cloud_name','codeandcats')
        fetch('https://api.cloudinary.com/v1_1/codeandcats/image/upload',{method:'POST', body: data})
            .then(resp => resp.json())
            .then(data => {
                handleAsset(data)
            })
            .catch(err  => console.log(err));
    }


    return(
        <>
            <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
            <button onClick={handleUpload}>Upload</button>

        </>
    )
}