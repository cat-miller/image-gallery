import {useState} from "react";

export function ImageUpload({handleAsset}) {

  function handleUpload(tags, image) {
    const data = new FormData();
    data.append('file', image)
    data.append('upload_preset', 'gallery')
    data.append('cloud_name', 'codeandcats')
    data.append("tags", tags)
    fetch('https://api.cloudinary.com/v1_1/codeandcats/image/upload', {method: 'POST', body: data})
      .then(resp => resp.json())
      .then(data => {
        handleAsset(data)
      })
      .catch(err => console.log(err));
  }

  function handleSubmit(event) {
    event.preventDefault()
    const image = event.target.image.files[0]
    const tags = event.target.tags.value.toLowerCase().split(',')
    handleUpload(tags, image)
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Upload your image here:
        <input required name='image' type="file"/>
      </label>
      <label>Add some tags separated by:
        <input name='tags' type='text'/>
      </label>
      <button type='submit'>Upload</button>
    </form>
  )
}