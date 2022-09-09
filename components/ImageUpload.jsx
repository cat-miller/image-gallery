import StyledForm from "../styled_components/StyledForm";
import StyledInput from "../styled_components/StyledInput";
import StyledLabel from "../styled_components/StyledLabel";
import {Dropzone} from "./Dropzone";
import {useState} from "react";
import StyledUploadButton from "../styled_components/StyledUploadButton";


export function ImageUpload({handleAsset}) {
  const [images, setImages] = useState(null);

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
    // const image = event.target.image.files[0]
    const tags = event.target.tags.value.toLowerCase().split(',')
    handleUpload(tags, images[0])
    event.target.reset()
    console.log(images);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Dropzone handleDrop={setImages} images={images}/>
      <StyledLabel>
        <StyledInput name='tags' type='text' placeholder='Add some tags separated by semicolon' />
      </StyledLabel>
      <StyledUploadButton type='submit'>Upload</StyledUploadButton>
    </StyledForm>
  )
}