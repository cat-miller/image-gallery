
export function Gallery({assets}){

    return(
        <>
            <h1>Gallery</h1>
            {assets.map(asset => <img key={asset['asset_id']} src={asset.url}/>)}
        </>
    )
}