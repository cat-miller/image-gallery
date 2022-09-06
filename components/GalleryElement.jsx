export function GalleryElement({image, tags}){
  return(
    <div>
      <img src={image} />
      {tags?.map(tag => <span key={tag}>{tag}</span>)}
    </div>
  )
}